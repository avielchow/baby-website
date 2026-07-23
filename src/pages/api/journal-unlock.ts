import type { APIRoute } from 'astro';
import {
  JOURNAL_READ_COOKIE,
  issueJournalReadCookie,
  journalReadCookieOptions,
  verifyJournalReadPassword,
} from '../../lib/journal-auth';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const password = String(form.get('password') ?? '');
  const nextRaw = String(form.get('next') ?? '/journal');
  const next = nextRaw.startsWith('/journal') ? nextRaw : '/journal';

  if (!(await verifyJournalReadPassword(password))) {
    return redirect(`/journal-unlock?next=${encodeURIComponent(next)}&error=invalid`, 303);
  }

  cookies.set(JOURNAL_READ_COOKIE, issueJournalReadCookie(), journalReadCookieOptions);
  return redirect(next, 303);
};
