# baby-website

Private week-by-week newborn guide and family journal.

- **Live:** https://baby-website-hazel.vercel.app (password-gated; family only)
- **Docs / SPECs / drafts:** live in Google Drive at `Personal Projects/Baby Website/`
- **Stack:** Astro 6 (SSR) · @astrojs/vercel · bcrypt password gate

## Local development

```bash
npm install
npm run dev
```

Local password: `changeme` (see `.env.example`; real production password is set in Vercel).

## Deploy

Auto-deploy is wired: every push to `main` triggers a fresh production build on Vercel.

For manual deploys from the CLI: `vercel deploy --prod`.

## Environment variables

Two required, both set in the Vercel project dashboard for `production`:

- `SITE_PASSWORD_HASH` — bcrypt hash of the shared site password
- `COOKIE_SIGNING_SECRET` — 32+ char random string for HMAC-signing the auth cookie

Generate replacements with:

```bash
node -e "console.log(require('bcryptjs').hashSync('YOUR-PASSWORD', 10))"
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
