import type { APIRoute } from 'astro';
import { handleUpload } from '@vercel/blob/client';
import { BLOB_READ_WRITE_TOKEN } from 'astro:env/server';
import { JOURNAL_COOKIE, verifyJournalCookie } from '../../../lib/journal-auth';

/**
 * Mints short-lived client-upload tokens so the browser uploads photos
 * DIRECTLY to the private Blob store — bypassing Vercel's ~4.5MB function
 * body cap entirely. Originals of any size, untouched. Gated by the journal
 * cookie; tokens are scoped to journal-photos/* image uploads only.
 */
export const POST: APIRoute = async ({ request, cookies }) => {
  if (!verifyJournalCookie(cookies.get(JOURNAL_COOKIE)?.value)) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401 });
  }

  const body = await request.json();
  try {
    const result = await handleUpload({
      request,
      body,
      token: BLOB_READ_WRITE_TOKEN || undefined,
      onBeforeGenerateToken: async (pathname) => {
        if (!pathname.startsWith('journal-photos/')) {
          throw new Error('Invalid upload path');
        }
        return {
          allowedContentTypes: ['image/*'],
          maximumSizeInBytes: 200 * 1024 * 1024, // sanity ceiling, not a policy
          addRandomSuffix: false,
          allowOverwrite: false,
        };
      },
    });
    return new Response(JSON.stringify(result), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : 'upload token failed' }),
      { status: 400 }
    );
  }
};
