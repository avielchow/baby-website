import { defineMiddleware } from 'astro:middleware';
import { GATE_COOKIE, verify } from './lib/auth';

/**
 * The entire site is private. The gate protects every path EXCEPT the
 * login form itself and the auth API endpoints, which must stay reachable
 * so a viewer can sign in.
 *
 * The parents-only /private section is archived (see _private-archive/
 * RESTORE.md); the two-tier auth plumbing stays so it can be re-added.
 */
const OPEN_PATHS = new Set([
  '/login',
  '/api/login',
  '/api/logout',
]);

function isOpen(pathname: string): boolean {
  return OPEN_PATHS.has(pathname);
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;

  if (isOpen(pathname)) return next();

  const token = context.cookies.get(GATE_COOKIE)?.value;
  const tier = verify(token);
  context.locals.authTier = tier;

  if (!tier) {
    const redirectTo = encodeURIComponent(pathname + search);
    return context.redirect(`/login?next=${redirectTo}`, 302);
  }

  return next();
});
