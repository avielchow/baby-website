/**
 * Journal captures — quick on-the-fly notes written at /write, stored in the
 * private Blob store (never in git). Each capture is one JSON object; attached
 * photos are separate private blobs referenced by id. These are RAW material;
 * the polished weekly journal post is drafted from them (see docs/JOURNAL.md).
 */
import { get, put, del, list } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from 'astro:env/server';

const token = BLOB_READ_WRITE_TOKEN || undefined;
const CAP_PREFIX = 'journal-captures/';
const PHOTO_PREFIX = 'journal-photos/';
const MAX_TEXT = 5000;
const MAX_PHOTOS = 10;
const MAX_PHOTO_BYTES = 15 * 1024 * 1024;

export interface Capture {
  id: string;
  ts: number;
  text: string;
  tags: string[];
  mood?: string;
  photos: string[];
}

function cleanText(s: string): string {
  let out = '';
  for (const ch of s) {
    const code = ch.codePointAt(0) ?? 0;
    if (code === 9 || code === 10) { out += ch; continue; }
    if (code < 32 || code === 127) continue;
    out += ch;
  }
  return out.replace(/[ \t]+/g, ' ').replace(/\n{4,}/g, '\n\n\n').trim().slice(0, MAX_TEXT);
}

async function readJson<T>(pathname: string): Promise<T | null> {
  try {
    const res = await get(pathname, { access: 'private', useCache: false, token });
    if (!res || res.statusCode !== 200) return null;
    return JSON.parse(await new Response(res.stream).text()) as T;
  } catch {
    return null;
  }
}

/** Captures with ts >= sinceTs (0 = all), newest first. */
export async function listCaptures(sinceTs = 0): Promise<Capture[]> {
  const { blobs } = await list({ prefix: CAP_PREFIX, token });
  const caps = await Promise.all(blobs.map((b) => readJson<Capture>(b.pathname)));
  return caps
    .filter((c): c is Capture => !!c && typeof c.ts === 'number' && c.ts >= sinceTs)
    .sort((a, b) => b.ts - a.ts);
}

export async function addCapture(data: {
  text: string;
  tags: string[];
  mood?: string;
  photos: string[];
}): Promise<Capture> {
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  const capture: Capture = {
    id,
    ts: Date.now(),
    text: cleanText(data.text),
    tags: data.tags.slice(0, 12),
    mood: data.mood || undefined,
    photos: data.photos.slice(0, MAX_PHOTOS),
  };
  await put(`${CAP_PREFIX}${id}.json`, JSON.stringify(capture), {
    access: 'private',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    token,
  });
  return capture;
}

export async function deleteCapture(id: string): Promise<void> {
  const capture = await readJson<Capture>(`${CAP_PREFIX}${id}.json`);
  for (const photoId of capture?.photos ?? []) {
    try { await del(`${PHOTO_PREFIX}${photoId}`, { token }); } catch { /* ignore */ }
  }
  await del(`${CAP_PREFIX}${id}.json`, { token });
}

/** Store one uploaded photo privately; returns its id (used in the URL path). */
export async function savePhoto(file: File): Promise<string | null> {
  if (file.size === 0 || file.size > MAX_PHOTO_BYTES) return null;
  if (!file.type.startsWith('image/')) return null;
  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
  const id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}.${ext}`;
  await put(`${PHOTO_PREFIX}${id}`, await file.arrayBuffer(), {
    access: 'private',
    contentType: file.type,
    addRandomSuffix: false,
    allowOverwrite: true,
    token,
  });
  return id;
}

export async function getPhoto(id: string): Promise<{ stream: ReadableStream<Uint8Array>; contentType: string } | null> {
  try {
    const res = await get(`${PHOTO_PREFIX}${id}`, { access: 'private', useCache: true, token });
    if (!res || res.statusCode !== 200) return null;
    return { stream: res.stream, contentType: res.blob.contentType || 'image/jpeg' };
  } catch {
    return null;
  }
}
