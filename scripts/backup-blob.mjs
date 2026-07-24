/**
 * Mirror the ENTIRE private Blob store (journal photos, raw captures, comments)
 * to a local archive the family controls. The words of the journal live safely
 * in git; everything else lives only in Vercel Blob — this script is the copy.
 *
 * Usage:
 *   npm run backup                      → mirrors to ~/Backups/baby-website-blob
 *   BACKUP_DIR=/Volumes/T7/baby npm run backup
 *
 * Behavior:
 *   - Incremental: a blob already in the archive with the same byte size is skipped.
 *   - Append-only: NOTHING is ever deleted locally. Files that have vanished from
 *     the remote store are reported (they may indicate an accidental deletion) and
 *     kept — the archive remembers what the cloud forgot.
 *   - A manifest.json is written per run with counts and the remote listing.
 *
 * Needs BLOB_READ_WRITE_TOKEN (run via `npm run backup`, which loads .env;
 * refresh .env with `vercel env pull .env --environment production`).
 */
import { get, list } from '@vercel/blob';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error('BLOB_READ_WRITE_TOKEN is not set. Run via `npm run backup` (loads .env),');
  console.error('and refresh .env with: vercel env pull .env --environment production');
  process.exit(1);
}

const DEST = process.env.BACKUP_DIR || path.join(os.homedir(), 'Backups', 'baby-website-blob');
fs.mkdirSync(DEST, { recursive: true });

async function listAll() {
  const all = [];
  let cursor;
  do {
    const r = await list({ token, cursor });
    all.push(...r.blobs);
    cursor = r.cursor;
  } while (cursor);
  return all;
}

async function download(pathname) {
  const res = await get(pathname, { access: 'private', useCache: false, token });
  if (!res || res.statusCode !== 200) throw new Error(`get ${pathname} → ${res?.statusCode}`);
  const chunks = [];
  for await (const c of res.stream) chunks.push(c);
  return Buffer.concat(chunks);
}

const blobs = await listAll();
console.log(`Remote store: ${blobs.length} blob(s). Archive: ${DEST}`);

let copied = 0, skipped = 0, failed = 0;
for (const b of blobs) {
  const dest = path.join(DEST, b.pathname);
  try {
    const stat = fs.existsSync(dest) ? fs.statSync(dest) : null;
    if (stat && stat.size === b.size) { skipped++; continue; }
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const buf = await download(b.pathname);
    fs.writeFileSync(dest, buf);
    copied++;
    console.log(`  + ${b.pathname} (${(b.size / 1024).toFixed(0)} KB)`);
  } catch (e) {
    failed++;
    console.error(`  ! FAILED ${b.pathname}: ${e.message}`);
  }
}

// Tombstone check: anything in the archive that no longer exists remotely.
const remote = new Set(blobs.map((b) => b.pathname));
const localFiles = [];
(function walk(dir, rel = '') {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'manifest.json' || name.startsWith('.')) continue;
    const full = path.join(dir, name);
    const relPath = rel ? `${rel}/${name}` : name;
    if (fs.statSync(full).isDirectory()) walk(full, relPath);
    else localFiles.push(relPath);
  }
})(DEST);
const vanished = localFiles.filter((f) => !remote.has(f));

fs.writeFileSync(
  path.join(DEST, 'manifest.json'),
  JSON.stringify(
    {
      lastRun: new Date().toISOString(),
      remoteCount: blobs.length,
      copied, skipped, failed,
      vanishedFromRemote: vanished,
      remote: blobs.map((b) => ({ pathname: b.pathname, size: b.size, uploadedAt: b.uploadedAt })),
    },
    null, 2,
  ),
);

console.log(`\nDone: ${copied} copied, ${skipped} already archived, ${failed} failed.`);
if (vanished.length) {
  console.log(`\n⚠ ${vanished.length} file(s) exist in the archive but are GONE from the remote store`);
  console.log('  (kept locally — if these deletions were not intentional, the archive is now the only copy):');
  for (const f of vanished) console.log(`  · ${f}`);
}
if (failed > 0) process.exit(1);
