import type { APIRoute } from 'astro';
import { COMMENT_ADMIN_KEY } from 'astro:env/server';
import { addComment, deleteComment, isValidPageId } from '../../lib/comments';

function safeBack(raw: string, fallback: string): string {
  // Only allow same-site absolute paths as redirect targets.
  return /^\/[A-Za-z0-9/_?=&#%.-]*$/.test(raw) ? raw : fallback;
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const pageId = String(form.get('pageId') ?? '');
  if (!isValidPageId(pageId)) return new Response('Bad request', { status: 400 });

  const back = safeBack(String(form.get('back') ?? ''), '/');
  const action = String(form.get('_action') ?? 'add');

  if (action === 'delete') {
    const provided = String(form.get('adminKey') ?? '');
    if (!COMMENT_ADMIN_KEY || provided !== COMMENT_ADMIN_KEY) {
      return new Response('Forbidden', { status: 403 });
    }
    await deleteComment(pageId, String(form.get('id') ?? ''));
    const sep = back.includes('?') ? '&' : '?';
    return redirect(`${back}${sep}admin=${encodeURIComponent(provided)}#comments`, 303);
  }

  const added = await addComment(pageId, String(form.get('name') ?? ''), String(form.get('body') ?? ''));
  const sep = back.includes('?') ? '&' : '?';
  if (!added) return redirect(`${back}${sep}commentError=1#comments`, 303);
  return redirect(`${back}#comments`, 303);
};
