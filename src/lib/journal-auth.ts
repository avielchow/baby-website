/**
 * Auth for the private /write journal-capture zone — a dedicated password,
 * separate from the family gate and the comment-admin key. Reuses the shared
 * HMAC signer (auth.ts) with a `jw:` cookie payload so /write is its own gated
 * island: reachable with the journal password alone, no family login needed.
 */
import bcrypt from 'bcryptjs';
import {
  JOURNAL_READ_PASSWORD_HASH,
  JOURNAL_WRITE_PASSWORD_HASH,
} from 'astro:env/server';
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

/**
 * Reader gate for the /journal section (decided 2026-07-23). The journal is
 * more personal than the rest of the site, and the repo it lives in is public,
 * so the rendered pages take a second password ON TOP of the family login.
 * Same pattern as the /write gate: bcrypt hash in env, `jr:` cookie payload,
 * empty env = gate disabled (so the site never locks before the var is set).
 */
export const JOURNAL_READ_COOKIE = 'journal_read';

export async function verifyJournalReadPassword(plaintext: string): Promise<boolean> {
  if (!plaintext || !JOURNAL_READ_PASSWORD_HASH) return false;
  return bcrypt.compare(plaintext, JOURNAL_READ_PASSWORD_HASH);
}

export function issueJournalReadCookie(): string {
  return sign(`jr:${Date.now()}`);
}

export function verifyJournalReadCookie(token: string | undefined): boolean {
  const payload = verifySigned(token);
  return !!payload && payload.startsWith('jr:');
}

export function journalReadEnabled(): boolean {
  return !!JOURNAL_READ_PASSWORD_HASH;
}

export const journalReadCookieOptions = journalCookieOptions;
