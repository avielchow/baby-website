import type { APIRoute } from 'astro';
import { JOURNAL_COOKIE, verifyJournalCookie } from '../../../lib/journal-auth';
import { savePhoto } from '../../../lib/captures';

/**
 * Single-photo upload (one request per photo). Vercel caps request bodies at
 * ~4.5MB, so the /write client uploads photos individually here (each
 * compressed client-side to fit), then submits the capture with the ids.
 */
export const POST: APIRoute = async ({ request, cookies }) => {
  if (!verifyJournalCookie(cookies.get(JOURNAL_COOKIE)?.value)) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401 });
  }
  const form = await request.formData();
  const file = form.get('photo');
  if (!(file instanceof File) || file.size === 0) {
    return new Response(JSON.stringify({ error: 'no photo' }), { status: 400 });
  }
  const id = await savePhoto(file);
  if (!id) return new Response(JSON.stringify({ error: 'not an image' }), { status: 400 });
  return new Response(JSON.stringify({ id }), {
    headers: { 'content-type': 'application/json' },
  });
};
