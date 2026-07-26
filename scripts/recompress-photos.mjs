/**
 * Recompress oversized capture photos in place to web size (2560px max edge,
 * JPEG q90) — same blob ids, so published entries keep working. Companion to
 * the 2026-07-25 "web size by default" upload policy in /write.
 *
 * Safety model:
 *   - DRY RUN by default: prints size, dimensions, camera, and proposed action
 *     per photo. Nothing changes without --apply.
 *   - Before overwriting a blob, its untouched bytes are saved to
 *     ~/Backups/baby-website-blob-originals/journal-photos/<id> (OUTSIDE the
 *     mirror archive — `npm run backup` overwrites mirror files whose remote
 *     size changed, so originals must live elsewhere). Existing stashed copies
 *     are never overwritten.
 *   - Photos with dedicated-camera EXIF (anything not Apple/Android phone
 *     makes) are KEPT full size — those are the print-worthy sessions.
 *   - Photos under the size floor or already ≤ max edge are left alone.
 *   - Thumbs (thumb-*) are never touched.
 *
 * Usage:
 *   npm run recompress-photos                             → dry run
 *   npm run recompress-photos -- --apply                  → do it
 *   npm run recompress-photos -- --apply --include-camera → also shrink
 *     dedicated-camera shots (every photo so far is from the a7CII, so the
 *     default camera-keep rule otherwise skips everything)
 */
import { get, put, list } from '@vercel/blob';
import sharp from 'sharp';
import exifReader from 'exif-reader';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error('BLOB_READ_WRITE_TOKEN is not set. Run via `npm run recompress-photos` (loads .env).');
  process.exit(1);
}

const APPLY = process.argv.includes('--apply');
const INCLUDE_CAMERA = process.argv.includes('--include-camera');
const PREFIX = 'journal-photos/';
const MAX_EDGE = 2560;
const QUALITY = 90;
const MIN_BYTES = 3 * 1024 * 1024; // leave small files alone
const PHONE_MAKES = /apple|samsung|google|xiaomi|huawei|oneplus|oppo|vivo/i;
const ORIGINALS_DIR = process.env.ORIGINALS_DIR
  || path.join(os.homedir(), 'Backups', 'baby-website-blob-originals');

const all = [];
let cursor;
do {
  const r = await list({ prefix: PREFIX, token, cursor });
  all.push(...r.blobs);
  cursor = r.cursor;
} while (cursor);
const originals = all
  .filter((b) => !b.pathname.startsWith(PREFIX + 'thumb-'))
  .sort((a, b) => a.pathname.localeCompare(b.pathname));

console.log(`${originals.length} photos in ${PREFIX}. Mode: ${APPLY ? 'APPLY' : 'dry run'}\n`);

const mb = (n) => `${(n / 1e6).toFixed(1)}MB`;
let recompressed = 0, kept = 0, saved = 0, failed = 0;

for (const blob of originals) {
  const id = blob.pathname.slice(PREFIX.length);
  try {
    if (blob.size < MIN_BYTES) {
      console.log(`  · ${id}  ${mb(blob.size)}  — already small, skip`);
      kept++;
      continue;
    }

    const res = await get(blob.pathname, { access: 'private', useCache: false, token });
    if (!res || res.statusCode !== 200) throw new Error(`fetch failed (${res?.statusCode})`);
    const bytes = Buffer.from(await new Response(res.stream).arrayBuffer());

    const meta = await sharp(bytes).metadata();
    let camera = '';
    if (meta.exif) {
      try {
        const exif = exifReader(meta.exif);
        camera = [exif?.Image?.Make, exif?.Image?.Model].filter(Boolean).join(' ').trim();
      } catch { /* unreadable EXIF → treat as phone/unknown */ }
    }
    const edge = Math.max(meta.width ?? 0, meta.height ?? 0);
    const isCamera = camera && !PHONE_MAKES.test(camera);

    if (isCamera && !INCLUDE_CAMERA) {
      console.log(`  ✋ ${id}  ${mb(blob.size)}  ${edge}px  [${camera}] — dedicated camera, keeping full size`);
      kept++;
      continue;
    }
    if (edge <= MAX_EDGE) {
      console.log(`  · ${id}  ${mb(blob.size)}  ${edge}px  [${camera || 'no EXIF'}] — within ${MAX_EDGE}px, skip`);
      kept++;
      continue;
    }

    const web = await sharp(bytes)
      .rotate()
      .resize(MAX_EDGE, MAX_EDGE, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: QUALITY })
      .toBuffer();
    if (web.length >= bytes.length) {
      console.log(`  · ${id}  ${mb(blob.size)} — recompression wouldn't shrink it, skip`);
      kept++;
      continue;
    }

    if (!APPLY) {
      console.log(`  → ${id}  ${mb(blob.size)} → ${mb(web.length)}  ${edge}px→${MAX_EDGE}px  [${camera || 'no EXIF'}]`);
      recompressed++;
      saved += bytes.length - web.length;
      continue;
    }

    // Stash the untouched original OUTSIDE the mirror archive before overwriting.
    const stash = path.join(ORIGINALS_DIR, blob.pathname);
    fs.mkdirSync(path.dirname(stash), { recursive: true });
    if (!fs.existsSync(stash)) fs.writeFileSync(stash, bytes);
    else if (fs.statSync(stash).size !== bytes.length) {
      throw new Error('stash exists with different size — refusing to overwrite either copy');
    }

    await put(blob.pathname, web, {
      access: 'private',
      contentType: 'image/jpeg',
      addRandomSuffix: false,
      allowOverwrite: true,
      token,
    });
    console.log(`  ✓ ${id}  ${mb(blob.size)} → ${mb(web.length)}  (original stashed)`);
    recompressed++;
    saved += bytes.length - web.length;
  } catch (e) {
    failed++;
    console.warn(`  ✗ ${id}: ${e instanceof Error ? e.message : e} — left untouched`);
  }
}

console.log(`\n${APPLY ? 'Recompressed' : 'Would recompress'}: ${recompressed} · kept: ${kept} · failed: ${failed}`);
console.log(`Storage ${APPLY ? 'reclaimed' : 'reclaimable'}: ~${mb(saved)}`);
if (APPLY && recompressed > 0) console.log(`Originals stashed in ${ORIGINALS_DIR}`);
