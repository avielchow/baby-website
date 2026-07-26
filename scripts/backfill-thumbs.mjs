/**
 * Backfill thumbnails for capture photos uploaded before thumbs existed.
 * For every journal-photos/<id> without a journal-photos/thumb-<id>, download
 * the original, resize to a 640px-max-edge JPEG (q80), and upload the thumb.
 * Additive and idempotent: never touches originals, skips existing thumbs,
 * safe to re-run.
 *
 * Usage: npm run backfill-thumbs  (loads .env for BLOB_READ_WRITE_TOKEN;
 * refresh .env with `vercel env pull .env --environment production`)
 */
import { get, put, list } from '@vercel/blob';
import sharp from 'sharp';

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error('BLOB_READ_WRITE_TOKEN is not set. Run via `npm run backfill-thumbs` (loads .env).');
  process.exit(1);
}

const PREFIX = 'journal-photos/';
const THUMB = 'thumb-';
const MAX_EDGE = 640;

const all = [];
let cursor;
do {
  const r = await list({ prefix: PREFIX, token, cursor });
  all.push(...r.blobs);
  cursor = r.cursor;
} while (cursor);

const names = new Set(all.map((b) => b.pathname));
const originals = all.filter((b) => !b.pathname.startsWith(PREFIX + THUMB));
const missing = originals.filter((b) => !names.has(PREFIX + THUMB + b.pathname.slice(PREFIX.length)));

console.log(`${originals.length} photos, ${originals.length - missing.length} already have thumbs, ${missing.length} to backfill.`);

let done = 0, failed = 0, savedBytes = 0;
for (const blob of missing) {
  const id = blob.pathname.slice(PREFIX.length);
  try {
    const res = await get(blob.pathname, { access: 'private', useCache: false, token });
    if (!res || res.statusCode !== 200) throw new Error(`fetch failed (${res?.statusCode})`);
    const bytes = Buffer.from(await new Response(res.stream).arrayBuffer());
    const thumb = await sharp(bytes)
      .rotate() // bake in EXIF orientation, matching how browsers show the original
      .resize(MAX_EDGE, MAX_EDGE, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toBuffer();
    await put(`${PREFIX}${THUMB}${id}`, thumb, {
      access: 'private',
      contentType: 'image/jpeg',
      addRandomSuffix: false,
      allowOverwrite: true,
      token,
    });
    done++;
    savedBytes += bytes.length - thumb.length;
    console.log(`  ✓ ${id}  ${(bytes.length / 1e6).toFixed(1)}MB → ${(thumb.length / 1e3).toFixed(0)}KB`);
  } catch (e) {
    failed++;
    console.warn(`  ✗ ${id}: ${e instanceof Error ? e.message : e} (grids will serve the original)`);
  }
}

console.log(`\nDone: ${done} thumbs created, ${failed} failed.`);
if (done > 0) console.log(`Grid views now transfer ~${(savedBytes / 1e6).toFixed(0)}MB less per full browse.`);
