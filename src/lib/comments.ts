/**
 * Per-page comments, stored in a private Vercel Blob store (one JSON array per
 * page at `comments/<pageId>.json`, e.g. `comments/week-3.json` or
 * `comments/month-6.json`). Name-only, no login — the whole site is already
 * behind the shared family password. Reads bypass the CDN cache so a freshly
 * posted comment shows on reload; writes are read-modify-write, safe at this
 * volume (a family site, a handful of comments). See docs/CONTENT.md.
 */
import { get, put } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from 'astro:env/server';

const token = BLOB_READ_WRITE_TOKEN || undefined;

export interface Comment {
  id: string;
  name: string;
  body: string;
  ts: number;
}

const MAX_NAME = 40;
const MAX_BODY = 1000;

/** page ids are like "week-3" / "month-6" — restrict to a safe charset. */
export function isValidPageId(id: string): boolean {
  return /^[a-z0-9][a-z0-9-]{0,40}$/.test(id);
}
const pathFor = (pageId: string) => `comments/${pageId}.json`;

/** Strip HTML tags + control chars (keep tab/newline), collapse whitespace, trim, cap. */
function clean(s: string, max: number): string {
  const noTags = s.replace(/<[^>]*>/g, '');
  let out = '';
  for (const ch of noTags) {
    const code = ch.codePointAt(0) ?? 0;
    if (code === 9 || code === 10) { out += ch; continue; }
    if (code < 32 || code === 127) continue;
    out += ch;
  }
  return out.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim().slice(0, max);
}

export async function getComments(pageId: string): Promise<Comment[]> {
  if (!isValidPageId(pageId)) return [];
  try {
    const res = await get(pathFor(pageId), { access: 'private', useCache: false, token });
    if (!res || res.statusCode !== 200) return [];
    const arr = JSON.parse(await new Response(res.stream).text()) as unknown;
    if (!Array.isArray(arr)) return [];
    return (arr as Comment[]).sort((a, b) => b.ts - a.ts);
  } catch {
    return [];
  }
}

async function save(pageId: string, comments: Comment[]): Promise<void> {
  await put(pathFor(pageId), JSON.stringify(comments), {
    access: 'private',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    token,
  });
}

export async function addComment(pageId: string, nameRaw: string, bodyRaw: string): Promise<Comment | null> {
  if (!isValidPageId(pageId)) return null;
  const name = clean(nameRaw, MAX_NAME);
  const body = clean(bodyRaw, MAX_BODY);
  if (!name || !body) return null;
  const comments = await getComments(pageId);
  const comment: Comment = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    name,
    body,
    ts: Date.now(),
  };
  comments.unshift(comment);
  await save(pageId, comments);
  return comment;
}

export async function deleteComment(pageId: string, commentId: string): Promise<void> {
  if (!isValidPageId(pageId)) return;
  const comments = await getComments(pageId);
  await save(pageId, comments.filter((c) => c.id !== commentId));
}

/** "just now" / "3 hours ago" / "2 days ago" / a date for older. */
export function relativeTime(ts: number, now: number = Date.now()): string {
  const s = Math.max(0, Math.round((now - ts) / 1000));
  if (s < 60) return 'just now';
  const m = Math.round(s / 60);
  if (m < 60) return `${m} minute${m === 1 ? '' : 's'} ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h} hour${h === 1 ? '' : 's'} ago`;
  const d = Math.round(h / 24);
  if (d < 14) return `${d} day${d === 1 ? '' : 's'} ago`;
  return new Date(ts).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
