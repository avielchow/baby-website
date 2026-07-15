import type { APIRoute } from 'astro';
import { JOURNAL_COOKIE, journalCookieOptions } from '../../../lib/journal-auth';

export const POST: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete(JOURNAL_COOKIE, { path: journalCookieOptions.path });
  return redirect('/write', 303);
};
