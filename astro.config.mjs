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
    },
  },
});
