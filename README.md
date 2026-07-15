# baby-website

Private week-by-week newborn guide and family journal.

- **Live:** https://baby-website-hazel.vercel.app (password-gated; family only)
- **Docs / SPECs:** in [`docs/`](docs/) — [SPEC](docs/SPEC.md) · [DESIGN](docs/DESIGN.md) ·
  [JOURNAL](docs/JOURNAL.md) · [CONTENT](docs/CONTENT.md) · [ROADMAP](docs/ROADMAP.md)
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

Set in the Vercel project dashboard for `production`:

- `SITE_PASSWORD_HASH` — bcrypt hash of the shared site password (required)
- `COOKIE_SIGNING_SECRET` — 32+ char random string for HMAC-signing the auth cookie (required)
- `PRIVATE_PASSWORD_HASH` — bcrypt hash of the parents-only password that also unlocks
  the `/private` journal (optional; empty disables the private section)

Generate replacements with:

```bash
node -e "console.log(require('bcryptjs').hashSync('YOUR-PASSWORD', 10))"
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
