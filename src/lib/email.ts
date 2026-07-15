/**
 * Minimal Resend email sender (no SDK — one fetch). Free tier covers a daily
 * email easily; from `onboarding@resend.dev` works to the account owner's own
 * address without domain verification. Returns false (never throws) if unset.
 */
import { RESEND_API_KEY } from 'astro:env/server';

export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}): Promise<{ ok: boolean; detail?: string }> {
  if (!RESEND_API_KEY) return { ok: false, detail: 'RESEND_API_KEY not set' };
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: opts.from ?? 'Our Little One <onboarding@resend.dev>',
        to: [opts.to],
        subject: opts.subject,
        html: opts.html,
      }),
    });
    if (!res.ok) return { ok: false, detail: `Resend ${res.status}: ${await res.text()}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, detail: e instanceof Error ? e.message : String(e) };
  }
}
