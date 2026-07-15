import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import { COOKIE_SIGNING_SECRET, SITE_PASSWORD_HASH } from 'astro:env/server';

export const GATE_COOKIE = 'baby_gate';
/**
 * Non-httpOnly companion cookie. Lets client-side JS check whether the
 * viewer is authenticated so the UI can toggle affordances (e.g. logout).
 * No security value on its own — the gate is enforced by the httpOnly
 * `baby_gate` cookie.
 */
export const SESSION_FLAG_COOKIE = 'baby_session';
const COOKIE_TTL_DAYS = 30;

export async function verifyPassword(plaintext: string): Promise<boolean> {
  if (!plaintext) return false;
  return bcrypt.compare(plaintext, SITE_PASSWORD_HASH);
}

export function sign(payload: string): string {
  const sig = crypto
    .createHmac('sha256', COOKIE_SIGNING_SECRET)
    .update(payload)
    .digest('hex');
  return `${payload}.${sig}`;
}

export function verify(token: string | undefined): boolean {
  if (!token) return false;
  const idx = token.lastIndexOf('.');
  if (idx <= 0) return false;
  const payload = token.slice(0, idx);
  const sig = token.slice(idx + 1);
  const expected = crypto
    .createHmac('sha256', COOKIE_SIGNING_SECRET)
    .update(payload)
    .digest('hex');
  if (sig.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex'));
}

export function issueGateCookie(): string {
  const payload = `v1:${Date.now()}`;
  return sign(payload);
}

export const cookieOptions = {
  path: '/',
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: true,
  maxAge: COOKIE_TTL_DAYS * 24 * 60 * 60,
};

export const sessionFlagCookieOptions = {
  path: '/',
  httpOnly: false,
  sameSite: 'lax' as const,
  secure: true,
  maxAge: COOKIE_TTL_DAYS * 24 * 60 * 60,
};
