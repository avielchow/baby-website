import type { APIRoute } from 'astro';
import {
  JOURNAL_COOKIE,
  journalCookieOptions,
  issueJournalCookie,
  verifyJournalPassword,
} from '../../../lib/journal-auth';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const password = String(form.get('password') ?? '');

  if (!(await verifyJournalPassword(password))) {
    return redirect('/write?error=invalid', 303);
  }

  cookies.set(JOURNAL_COOKIE, issueJournalCookie(), journalCookieOptions);
  return redirect('/write', 303);
};
