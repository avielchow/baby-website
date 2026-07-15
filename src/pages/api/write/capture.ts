import type { APIRoute } from 'astro';
import { JOURNAL_COOKIE, verifyJournalCookie } from '../../../lib/journal-auth';
import { addCapture, savePhoto } from '../../../lib/captures';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  if (!verifyJournalCookie(cookies.get(JOURNAL_COOKIE)?.value)) {
    return new Response('Unauthorized', { status: 401 });
  }

  const form = await request.formData();
  const text = String(form.get('text') ?? '');
  const tags = form.getAll('tags').map(String).filter(Boolean);
  const mood = String(form.get('mood') ?? '') || undefined;
  const files = form.getAll('photos').filter((f): f is File => f instanceof File && f.size > 0);

  if (!text.trim() && files.length === 0) {
    return redirect('/write?error=empty', 303);
  }

  const photoIds: string[] = [];
  for (const file of files.slice(0, 10)) {
    const id = await savePhoto(file);
    if (id) photoIds.push(id);
  }

  await addCapture({ text, tags, mood, photos: photoIds });
  return redirect('/write?saved=1', 303);
};
