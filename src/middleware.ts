import { defineMiddleware } from 'astro:middleware';
import {
  JOURNAL_COOKIE,
  JOURNAL_READ_COOKIE,
  journalReadEnabled,
  verifyJournalCookie,
  verifyJournalReadCookie,
} from './lib/journal-auth';

/**
 * The site is PUBLIC (site-wide family gate removed 2026-09-17). Two zones keep
 * their own password:
 *
 *  - /journal and /journal/*  — the personal journal ENTRIES, gated by the journal
 *    reader password (JOURNAL_READ_COOKIE). This protects the writing/reflections;
 *    the photos themselves are public (they also appear on Moments and the home
 *    page). Redirects to /journal-unlock. Note /journal-unlock and
 *    /api/journal-unlock are intentionally NOT matched here (they must stay
 *    reachable so a reader can enter the password).
 *  - /write and /api/write/*  — the private journal-capture form, gated by its own
 *    writer password (JOURNAL_COOKIE).
 *
 * The old family-gate plumbing (lib/auth.ts, /login, /api/login, /api/logout,
 * SITE_PASSWORD_HASH) is left INTACT but unenforced, matching this project's
 * convention of keeping disabled auth wiring in place. To re-gate the whole site,
 * restore the "shared family gate" block that previously lived at the end of this
 * file (see git history for 2026-09-17).
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;

  // Journal-capture zone — gated by the dedicated journal writer password.
  if (pathname === '/write' || pathname.startsWith('/api/write/')) {
    // Login/logout endpoints stay reachable so the writer can sign in/out.
    if (pathname === '/api/write/login' || pathname === '/api/write/logout') return next();
    const authed = verifyJournalCookie(context.cookies.get(JOURNAL_COOKIE)?.value);
    context.locals.journalAuthed = authed;
    // The /write page renders its own login form when not authed.
    if (pathname === '/write') return next();
    if (!authed) return new Response('Unauthorized', { status: 401 });
    return next();
  }

  // Journal entries — gated by the journal reader password. No-ops (stays public)
  // only if JOURNAL_READ_PASSWORD_HASH is unset; it IS set in production.
  if (pathname === '/journal' || pathname.startsWith('/journal/')) {
    if (
      journalReadEnabled() &&
      !verifyJournalReadCookie(context.cookies.get(JOURNAL_READ_COOKIE)?.value)
    ) {
      const redirectTo = encodeURIComponent(pathname + search);
      return context.redirect(`/journal-unlock?next=${redirectTo}`, 302);
    }
    return next();
  }

  // Everything else — public (including /api/capture-photo/*, Moments, home, guide).
  return next();
});
