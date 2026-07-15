import type { APIRoute } from 'astro';
import { CRON_SECRET, JOURNAL_EMAIL_TO, SITE_URL } from 'astro:env/server';
import { currentDayNumber } from '../../lib/current-week';
import { questionsForDay } from '../../data/daily-questions';
import { sendEmail } from '../../lib/email';

// Hit daily by Vercel Cron (see vercel.json). Emails the day's three journal
// questions + the /write link. Protected by CRON_SECRET (this path bypasses the
// family gate in middleware), so randoms can't trigger sends.
export const GET: APIRoute = async ({ request, url }) => {
  if (CRON_SECRET) {
    const auth = request.headers.get('authorization');
    if (auth !== `Bearer ${CRON_SECRET}`) return new Response('Unauthorized', { status: 401 });
  }

  const override = Number(url.searchParams.get('day'));
  const day = Number.isFinite(override) && override >= 1 ? Math.floor(override) : currentDayNumber();

  if (day < 1) {
    return json({ skipped: 'baby not born yet' }, 200);
  }

  const questions = questionsForDay(day);
  const writeUrl = `${SITE_URL.replace(/\/$/, '')}/write`;

  // ?preview=1 returns the email HTML without sending (for checking the design).
  if (url.searchParams.get('preview')) {
    return new Response(renderEmail(day, questions, writeUrl), {
      headers: { 'content-type': 'text/html; charset=utf-8' },
    });
  }

  const result = await sendEmail({
    to: JOURNAL_EMAIL_TO,
    subject: `Day ${day} — three questions for today`,
    html: renderEmail(day, questions, writeUrl),
  });

  // Unconfigured (no RESEND_API_KEY) is a graceful skip, not a cron failure.
  const skipped = !result.ok && result.detail?.includes('not set');
  return json({ day, sent: result.ok, skipped: skipped || undefined, detail: result.detail }, result.ok || skipped ? 200 : 500);
};

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

function renderEmail(day: number, questions: readonly string[], writeUrl: string): string {
  const items = questions
    .map(
      (q, i) => `
        <tr>
          <td style="vertical-align:top;padding:0 12px 16px 0;">
            <div style="width:30px;height:30px;line-height:30px;text-align:center;border-radius:999px;background:#6B9A5F;color:#fff;font-weight:700;font-family:Georgia,serif;">${i + 1}</div>
          </td>
          <td style="vertical-align:top;padding:0 0 16px 0;font-size:17px;line-height:1.5;color:#3D443A;">${escapeHtml(q)}</td>
        </tr>`
    )
    .join('');

  return `<!doctype html>
<html>
<body style="margin:0;background:#FDFDF9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FDFDF9;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 14px rgba(61,68,58,0.08);">
        <tr><td style="background:#6B9A5F;padding:22px 28px;">
          <div style="color:#EAF3E6;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Our Little One</div>
          <div style="color:#ffffff;font-size:26px;font-weight:600;font-family:Georgia,serif;margin-top:4px;">Day ${day}</div>
        </td></tr>
        <tr><td style="padding:28px;">
          <p style="margin:0 0 22px;font-size:16px;line-height:1.55;color:#68715F;">Three things to notice today. Answer one, two, or all three — or just let them sit with you.</p>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">${items}</table>
          <div style="text-align:center;margin-top:28px;">
            <a href="${writeUrl}" style="display:inline-block;background:#6B9A5F;color:#ffffff;text-decoration:none;font-weight:700;font-size:16px;padding:14px 30px;border-radius:999px;">Write today&rsquo;s entry &rarr;</a>
          </div>
          <p style="margin:24px 0 0;font-size:13px;line-height:1.5;color:#9aa392;text-align:center;">Tip: tap the mic on your keyboard to dictate. Captures are private until you publish a post.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
