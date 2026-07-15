import type { APIRoute } from 'astro';
import { GATE_COOKIE, SESSION_FLAG_COOKIE } from '../../lib/auth';

export const POST: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete(GATE_COOKIE, { path: '/' });
  cookies.delete(SESSION_FLAG_COOKIE, { path: '/' });
  return redirect('/login', 303);
};
