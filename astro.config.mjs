// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  env: {
    schema: {
      SITE_PASSWORD_HASH: envField.string({ context: 'server', access: 'secret' }),
      COOKIE_SIGNING_SECRET: envField.string({ context: 'server', access: 'secret' }),
      // Optional second password (parents only) that also unlocks /private.
      // Empty string = private section disabled.
      PRIVATE_PASSWORD_HASH: envField.string({ context: 'server', access: 'secret', optional: true, default: '' }),
      // Private Blob store token for the per-week comments (auto-set by Vercel).
      BLOB_READ_WRITE_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true, default: '' }),
      // Secret to unlock comment-delete buttons via /weeks/NN/?admin=KEY.
      COMMENT_ADMIN_KEY: envField.string({ context: 'server', access: 'secret', optional: true, default: '' }),
      // Password for the private /write journal-capture form (bcrypt hash).
      JOURNAL_WRITE_PASSWORD_HASH: envField.string({ context: 'server', access: 'secret', optional: true, default: '' }),
      // Daily-questions email (Resend API + Vercel Cron). All optional so the
      // build/site work before they're set; the cron no-ops without a key.
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true, default: '' }),
      CRON_SECRET: envField.string({ context: 'server', access: 'secret', optional: true, default: '' }),
      JOURNAL_EMAIL_TO: envField.string({ context: 'server', access: 'public', optional: true, default: 'avielchow88@gmail.com' }),
      SITE_URL: envField.string({ context: 'server', access: 'public', optional: true, default: 'https://baby-website-hazel.vercel.app' }),
    },
  },
});
