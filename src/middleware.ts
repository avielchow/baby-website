import { defineMiddleware } from 'astro:middleware';
import { GATE_COOKIE, verify } from './lib/auth';
import { JOURNAL_COOKIE, verifyJournalCookie } from './lib/journal-auth';

/**
 * The entire site is private. The gate protects every path EXCEPT the
 * login form itself and the auth API endpoints, which must stay reachable
 * so a viewer can sign in.
 *
 * Two special zones bypass the family gate:
 *  - /write and /api/write/*  — the journal-capture form, gated by its OWN
 *    password (JOURNAL_COOKIE), reachable without a family login.
 *  - /api/capture-photo/*     — private capture images, viewable by either the
 *    journal writer or a logged-in family member.
 *
 * The parents-only /private section is archived (see _private-archive/).
 */
const OPEN_PATHS = new Set([
  '/login',
  '/api/login',
  '/api/logout',
  // The daily-questions cron endpoint — protected by CRON_SECRET, not the gate.
  '/api/daily-email',
]);

function isOpen(pathname: string): boolean {
  return OPEN_PATHS.has(pathname);
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;

  if (isOpen(pathname)) return next();

  // Journal-capture zone — gated by the dedicated journal password.
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

  // Capture photos — either the journal writer OR a logged-in family member.
  if (pathname.startsWith('/api/capture-photo/')) {
    const okJournal = verifyJournalCookie(context.cookies.get(JOURNAL_COOKIE)?.value);
    const okFamily = !!verify(context.cookies.get(GATE_COOKIE)?.value);
    if (!okJournal && !okFamily) return new Response('Unauthorized', { status: 401 });
    return next();
  }

  // Everything else — the shared family gate.
  const token = context.cookies.get(GATE_COOKIE)?.value;
  const tier = verify(token);
  context.locals.authTier = tier;

  if (!tier) {
    const redirectTo = encodeURIComponent(pathname + search);
    return context.redirect(`/login?next=${redirectTo}`, 302);
  }

  return next();
});
