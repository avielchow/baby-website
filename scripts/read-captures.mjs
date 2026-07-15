/**
 * Dump journal captures for drafting the weekly post (docs/JOURNAL.md).
 * Reads the private Blob store using BLOB_READ_WRITE_TOKEN from .env.local.
 *
 *   node scripts/read-captures.mjs [days]
 *
 * days (optional) limits to captures from the last N days (default: all).
 * Prints each capture's date, mood, tags, text, and photo URLs (open with the
 * journal or family cookie). Photos are NOT downloaded — only referenced.
 */
import { list, get } from '@vercel/blob';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const env = readFileSync(join(root, '.env.local'), 'utf8');
const token = env.match(/BLOB_READ_WRITE_TOKEN="?([^"\n]+)"?/)?.[1];
if (!token) { console.error('No BLOB_READ_WRITE_TOKEN in .env.local'); process.exit(1); }

const days = Number(process.argv[2]) || 0;
const since = days ? Date.now() - days * 86400_000 : 0;

const { blobs } = await list({ prefix: 'journal-captures/', token });
const caps = [];
for (const b of blobs) {
  const res = await get(b.pathname, { access: 'private', useCache: false, token });
  if (res?.statusCode === 200) caps.push(JSON.parse(await new Response(res.stream).text()));
}
const kept = caps.filter((c) => c.ts >= since).sort((a, b) => a.ts - b.ts);
console.log(`# ${kept.length} capture(s)${days ? ` from the last ${days} day(s)` : ''}\n`);
for (const c of kept) {
  const when = new Date(c.ts).toLocaleString('en-CA', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
  console.log(`## ${when}${c.mood ? `  ·  mood: ${c.mood}` : ''}${c.tags?.length ? `  ·  ${c.tags.join(', ')}` : ''}`);
  if (c.text) console.log(c.text);
  for (const p of c.photos ?? []) console.log(`[photo] /api/capture-photo/${p}`);
  console.log('');
}
