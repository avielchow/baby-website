/**
 * Per-week comments, stored in a private Vercel Blob store (one JSON array per
 * week at `comments/week-<n>.json`). Name-only, no login — the whole site is
 * already behind the shared family password. Reads bypass the CDN cache so a
 * freshly posted comment shows on reload; writes are read-modify-write, which is
 * safe at this volume (a family site, a handful of comments). See docs/CONTENT.md.
 */
import { get, put } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from 'astro:env/server';

// astro:env resolves the token in both dev (.env.local) and prod (Vercel),
// unlike the SDK's bare process.env read which misses Astro's dev env.
const token = BLOB_READ_WRITE_TOKEN || undefined;

export interface Comment {
  id: string;
  name: string;
  body: string;
  ts: number;
}

const MAX_NAME = 40;
const MAX_BODY = 1000;
const pathFor = (week: number) => `comments/week-${week}.json`;

/** Strip HTML tags + control chars (keep tab/newline), collapse whitespace, trim, cap. */
function clean(s: string, max: number): string {
  const noTags = s.replace(/<[^>]*>/g, '');
  let out = '';
  for (const ch of noTags) {
    const code = ch.codePointAt(0) ?? 0;
    if (code === 9 || code === 10) { out += ch; continue; } // tab, newline
    if (code < 32 || code === 127) continue;                // other control chars
    out += ch;
  }
  return out
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, max);
}

export async function getComments(week: number): Promise<Comment[]> {
  try {
    const res = await get(pathFor(week), { access: 'private', useCache: false, token });
    if (!res || res.statusCode !== 200) return [];
    const text = await new Response(res.stream).text();
    const arr = JSON.parse(text) as unknown;
    if (!Array.isArray(arr)) return [];
    return (arr as Comment[]).sort((a, b) => b.ts - a.ts);
  } catch {
    // Not-created-yet or a transient read error: fail soft, never break the page.
    return [];
  }
}

async function save(week: number, comments: Comment[]): Promise<void> {
  await put(pathFor(week), JSON.stringify(comments), {
    access: 'private',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    token,
  });
}

/** Returns the new comment, or null if the input was empty after cleaning. */
export async function addComment(week: number, nameRaw: string, bodyRaw: string): Promise<Comment | null> {
  const name = clean(nameRaw, MAX_NAME);
  const body = clean(bodyRaw, MAX_BODY);
  if (!name || !body) return null;
  const comments = await getComments(week);
  const comment: Comment = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    name,
    body,
    ts: Date.now(),
  };
  comments.unshift(comment);
  await save(week, comments);
  return comment;
}

export async function deleteComment(week: number, id: string): Promise<void> {
  const comments = await getComments(week);
  await save(week, comments.filter((c) => c.id !== id));
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
  return new Date(ts).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
}
