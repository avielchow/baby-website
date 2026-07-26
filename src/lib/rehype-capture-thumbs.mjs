/**
 * Rewrites capture-photo <img>s in rendered journal markdown to request the
 * downsized thumb (`/api/capture-photo/thumb-<id>`) while keeping the original
 * URL in data-full for the lightbox (see capture-thumbs.ts). Entry markdown
 * keeps referencing originals — this runs at render time, so it covers every
 * published entry with zero re-authoring.
 *
 * Handles both hast `element` img nodes (markdown images) and `raw` HTML
 * blocks (the standard <div class="photo-grid"> markup passes through
 * Astro's pipeline as raw nodes).
 */

const BASE = '/api/capture-photo/';
const RAW_IMG = /(<img\s[^>]*?src=")\/api\/capture-photo\/(?!thumb-)([^"]+)(")/g;

function walk(node) {
  if (node.type === 'element' && node.tagName === 'img') {
    const src = node.properties?.src;
    if (typeof src === 'string' && src.startsWith(BASE) && !src.startsWith(`${BASE}thumb-`)) {
      node.properties.src = `${BASE}thumb-${src.slice(BASE.length)}`;
      node.properties.dataFull = src;
    }
  } else if (node.type === 'raw' && typeof node.value === 'string' && node.value.includes(BASE)) {
    node.value = node.value.replace(
      RAW_IMG,
      (_m, pre, id, post) => `${pre}${BASE}thumb-${id}${post} data-full="${BASE}${id}"`
    );
  }
  for (const child of node.children ?? []) walk(child);
}

export default function rehypeCaptureThumbs() {
  return (tree) => walk(tree);
}
