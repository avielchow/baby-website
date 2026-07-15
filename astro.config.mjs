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
    },
  },
});
