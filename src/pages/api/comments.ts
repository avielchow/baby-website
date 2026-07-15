import type { APIRoute } from 'astro';
import { COMMENT_ADMIN_KEY } from 'astro:env/server';
import { addComment, deleteComment } from '../../lib/comments';

const backTo = (week: number, suffix = '') =>
  `/weeks/${String(week).padStart(2, '0')}/${suffix}#comments`;

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const week = parseInt(String(form.get('week') ?? ''), 10);
  if (!Number.isFinite(week)) return new Response('Bad request', { status: 400 });

  const action = String(form.get('_action') ?? 'add');

  if (action === 'delete') {
    const provided = String(form.get('adminKey') ?? '');
    if (!COMMENT_ADMIN_KEY || provided !== COMMENT_ADMIN_KEY) {
      return new Response('Forbidden', { status: 403 });
    }
    await deleteComment(week, String(form.get('id') ?? ''));
    return redirect(backTo(week, `?admin=${encodeURIComponent(provided)}`), 303);
  }

  const added = await addComment(week, String(form.get('name') ?? ''), String(form.get('body') ?? ''));
  if (!added) return redirect(backTo(week, '?commentError=1'), 303);
  return redirect(backTo(week), 303);
};
