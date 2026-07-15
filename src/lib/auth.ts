import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import {
  COOKIE_SIGNING_SECRET,
  PRIVATE_PASSWORD_HASH,
  SITE_PASSWORD_HASH,
} from 'astro:env/server';

export const GATE_COOKIE = 'baby_gate';
/**
 * Non-httpOnly companion cookie. Lets client-side JS check whether the
 * viewer is authenticated so the UI can toggle affordances (e.g. logout).
 * No security value on its own — the gate is enforced by the httpOnly
 * `baby_gate` cookie.
 */
export const SESSION_FLAG_COOKIE = 'baby_session';
const COOKIE_TTL_DAYS = 30;

/**
 * Two access tiers behind one login form:
 *   family  — the shared password; the whole site except /private.
 *   private — the parents' password; everything, including /private.
 * Family visitors get no hint that a second tier exists.
 */
export type AuthTier = 'family' | 'private';

export async function verifyPassword(plaintext: string): Promise<AuthTier | null> {
  if (!plaintext) return null;
  if (PRIVATE_PASSWORD_HASH && (await bcrypt.compare(plaintext, PRIVATE_PASSWORD_HASH))) {
    return 'private';
  }
  if (await bcrypt.compare(plaintext, SITE_PASSWORD_HASH)) return 'family';
  return null;
}

export function sign(payload: string): string {
  const sig = crypto
    .createHmac('sha256', COOKIE_SIGNING_SECRET)
    .update(payload)
    .digest('hex');
  return `${payload}.${sig}`;
}

/** Returns the authenticated tier, or null if the token is missing/invalid. */
export function verify(token: string | undefined): AuthTier | null {
  if (!token) return null;
  const idx = token.lastIndexOf('.');
  if (idx <= 0) return null;
  const payload = token.slice(0, idx);
  const sig = token.slice(idx + 1);
  const expected = crypto
    .createHmac('sha256', COOKIE_SIGNING_SECRET)
    .update(payload)
    .digest('hex');
  if (sig.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex'))) {
    return null;
  }
  // v1:<ts> — legacy cookies from before tiers existed; treat as family.
  if (payload.startsWith('v1:')) return 'family';
  if (payload.startsWith('v2:private:')) return 'private';
  if (payload.startsWith('v2:family:')) return 'family';
  return null;
}

export function issueGateCookie(tier: AuthTier): string {
  const payload = `v2:${tier}:${Date.now()}`;
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
