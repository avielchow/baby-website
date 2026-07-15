import type { APIRoute } from 'astro';
import { JOURNAL_COOKIE, verifyJournalCookie } from '../../../lib/journal-auth';
import { deleteCapture } from '../../../lib/captures';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  if (!verifyJournalCookie(cookies.get(JOURNAL_COOKIE)?.value)) {
    return new Response('Unauthorized', { status: 401 });
  }
  const form = await request.formData();
  const id = String(form.get('id') ?? '');
  if (id) await deleteCapture(id);
  return redirect('/write', 303);
};
