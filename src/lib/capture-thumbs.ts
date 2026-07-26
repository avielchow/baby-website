/**
 * Capture-photo thumbnails. Every photo id `<id>` may have a downsized
 * companion blob `thumb-<id>` (same journal-photos/ prefix), generated at
 * upload time in /write (scripts/backfill-thumbs.mjs covers older photos).
 * Grids, strips, and walls request the thumb; the lightbox loads the original
 * via data-full. /api/capture-photo/thumb-<id> falls back to the original
 * when no thumb exists, so a missing thumb degrades to bandwidth, not a 404.
 */

export const THUMB_PREFIX = 'thumb-';

/** Max thumb edge (px) and JPEG quality — shared by /write and the backfill. */
export const THUMB_MAX_EDGE = 640;
export const THUMB_QUALITY = 0.8;

/** `/api/capture-photo/<id>` → `/api/capture-photo/thumb-<id>` (idempotent). */
export function thumbUrl(src: string): string {
  return src.replace(/^\/api\/capture-photo\/(?!thumb-)/, `/api/capture-photo/${THUMB_PREFIX}`);
}
