/**
 * Auth for the private /write journal-capture zone — a dedicated password,
 * separate from the family gate and the comment-admin key. Reuses the shared
 * HMAC signer (auth.ts) with a `jw:` cookie payload so /write is its own gated
 * island: reachable with the journal password alone, no family login needed.
 */
import bcrypt from 'bcryptjs';
import { JOURNAL_WRITE_PASSWORD_HASH } from 'astro:env/server';
import { sign, verifySigned } from './auth';

export const JOURNAL_COOKIE = 'journal_gate';
const TTL_DAYS = 30;

export async function verifyJournalPassword(plaintext: string): Promise<boolean> {
  if (!plaintext || !JOURNAL_WRITE_PASSWORD_HASH) return false;
  return bcrypt.compare(plaintext, JOURNAL_WRITE_PASSWORD_HASH);
}

export function issueJournalCookie(): string {
  return sign(`jw:${Date.now()}`);
}

export function verifyJournalCookie(token: string | undefined): boolean {
  const payload = verifySigned(token);
  return !!payload && payload.startsWith('jw:');
}

/** Whether the journal password is configured at all (prod env may be unset). */
export function journalEnabled(): boolean {
  return !!JOURNAL_WRITE_PASSWORD_HASH;
}

export const journalCookieOptions = {
  path: '/',
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: true,
  maxAge: TTL_DAYS * 24 * 60 * 60,
};
