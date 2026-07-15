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

  // Optional backdate + explicit week.
  const dateStr = String(form.get('date') ?? '').trim();
  let ts: number | undefined;
  if (dateStr) {
    // Interpret the picked date at local noon so the day never slips a timezone.
    const parsed = new Date(`${dateStr}T12:00:00`);
    if (!Number.isNaN(parsed.getTime())) ts = parsed.getTime();
  }
  const weekStr = String(form.get('week') ?? 'auto');
  const week = weekStr === 'auto' ? undefined : Number(weekStr);

  if (!text.trim() && files.length === 0) {
    return redirect('/write?error=empty', 303);
  }

  const photoIds: string[] = [];
  for (const file of files) {
    const id = await savePhoto(file);
    if (id) photoIds.push(id);
  }

  await addCapture({ text, tags, mood, photos: photoIds, ts, week: Number.isFinite(week) ? week : undefined });
  return redirect('/write?saved=1', 303);
};
