import type { APIRoute } from 'astro';
import { getPhoto } from '../../../lib/captures';
import { THUMB_PREFIX } from '../../../lib/capture-thumbs';

// Access is enforced by middleware (journal writer OR logged-in family member).
export const GET: APIRoute = async ({ params }) => {
  const id = params.id;
  if (!id) return new Response('Not found', { status: 404 });
  let photo = await getPhoto(id);
  // A thumb that was never generated (old photos, no-JS uploads) serves the
  // original instead — worse bandwidth, never a broken image.
  if (!photo && id.startsWith(THUMB_PREFIX)) {
    photo = await getPhoto(id.slice(THUMB_PREFIX.length));
  }
  if (!photo) return new Response('Not found', { status: 404 });
  return new Response(photo.stream, {
    headers: {
      'Content-Type': photo.contentType,
      // Ids are unique and blobs never change, so each device downloads a
      // photo at most once. `private`: auth-gated, must stay out of the CDN.
      'Cache-Control': 'private, max-age=31536000, immutable',
    },
  });
};
