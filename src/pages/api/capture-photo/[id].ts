import type { APIRoute } from 'astro';
import { getPhoto } from '../../../lib/captures';

// Access is enforced by middleware (journal writer OR logged-in family member).
export const GET: APIRoute = async ({ params }) => {
  const id = params.id;
  if (!id) return new Response('Not found', { status: 404 });
  const photo = await getPhoto(id);
  if (!photo) return new Response('Not found', { status: 404 });
  return new Response(photo.stream, {
    headers: {
      'Content-Type': photo.contentType,
      'Cache-Control': 'private, max-age=3600',
    },
  });
};
