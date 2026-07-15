import type { APIRoute } from 'astro';
import {
  GATE_COOKIE,
  SESSION_FLAG_COOKIE,
  cookieOptions,
  issueGateCookie,
  sessionFlagCookieOptions,
  verifyPassword,
} from '../../lib/auth';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const password = String(form.get('password') ?? '');
  const next = String(form.get('next') ?? '/');

  const tier = await verifyPassword(password);
  if (!tier) {
    const back = `/login?error=invalid&next=${encodeURIComponent(next)}`;
    return redirect(back, 303);
  }

  cookies.set(GATE_COOKIE, issueGateCookie(tier), cookieOptions);
  cookies.set(SESSION_FLAG_COOKIE, '1', sessionFlagCookieOptions);
  return redirect(next, 303);
};
