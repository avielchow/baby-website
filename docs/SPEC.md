# Baby Website — Product SPEC

> Source of truth for what this site is and every major decision made. Docs live in this
> `docs/` folder (decided 2026-07-14; supersedes the old Google Drive location).
> Companion docs: [DESIGN.md](DESIGN.md) · [JOURNAL.md](JOURNAL.md) · [CONTENT.md](CONTENT.md) · [ROADMAP.md](ROADMAP.md)

## Purpose

One site, three jobs, in priority order:

1. **Private family archive** — a keepsake journal of the baby's first years that the family
   (and one day the baby) will reread. Longevity matters: plain markdown content, boring
   dependable tech, media we control.
2. **Share with extended family** — grandparents and close friends browse updates, photos, and
   videos. Must be effortless on phones/tablets for non-technical relatives.
3. **Practical parenting hub** — the week-by-week must-knows and the month-by-month milestone
   timeline are daily-use tools for the parents themselves.

**Context:** baby boy **born 2026-07-18** (Alberta, Canada; induction was scheduled
2026-07-10 but held a week; 8.5 lb, forceps delivery after a 36+ hour hospital stay). The
site refers to the baby as "Baby" until the birth-announcement post, then we do a site-wide
rename to the real first name.

## Core features

### 1. Journal — public (family) and private (see JOURNAL.md)

Two rooms, one login form:

- **Family journal** (`/journal`) — written knowing family reads it. Since 2026-07-23 it
  takes a **journal-specific reader password** on top of the family login (see Privacy &
  access) — the journal is the most personal corner of the site and the repo is public.
- **Private journal** (`/private`) — parents only (Aviel + partner). **ARCHIVED
  2026-07-15** (`_private-archive/`, gitignored) and removed from the live site because
  the GitHub repo is still public — private entries must never ship to a public repo.
  The two-tier auth plumbing was left intact; restoring is a 4-step re-add documented in
  `_private-archive/RESTORE.md`, to be done once the repo is made private. Design intent
  when restored: unlocked by a second password; family password never reveals the section
  exists; honest register, no softening for an audience.
- Auth: signed cookie carries a tier (`family` | `private`); middleware gates `/private/*`.
  Env: `PRIVATE_PASSWORD_HASH` (optional — empty disables the section).

- Reflective entries: highlights, new experiences, firsts, honest reflection.
- Written via Claude Code sessions: Aviel brain-dumps raw thoughts; Claude structures, cleans,
  and publishes while preserving the events and feelings exactly as given.
- Weekly creative prompts (prompt bank + rotation in JOURNAL.md) so no week starts from a
  blank page.
- Voice: **warm & reflective blended with light & funny** — a letter you'd reread in 20 years
  that also finds the comedy in the chaos.
- Perspective: the journal is written by **Dad (Aviel)**, first person, and entries make that
  clear where it matters (decided 2026-07-23).

### 2. Photos & video
- **Photos:** uploaded to **Vercel Blob** (Hobby free tier ≈ 1 GB storage — plenty for
  web-sized images). Every photo is resized/compressed on upload (target ≤ 300 KB, max
  2000 px long edge) via a local upload script; originals stay in the family's own backup
  (not the site's job). Embedded natively in journal entries and a gallery.
- **Video:** uploaded to **YouTube as unlisted**, embedded via `youtube-nocookie.com`
  privacy-enhanced iframes. Free, unlimited, great player. Accepted tradeoff: technically
  viewable by anyone with the direct link.
- If photo storage outgrows the free tier, first move is Cloudflare R2 (10 GB free) — decision
  deferred until needed.

### 3. Week-by-week + month-by-month guide (see CONTENT.md, MONTHLY.md)

The guide runs at two cadences (decided 2026-07-15, [MONTHLY.md](MONTHLY.md)):
**Newborn Weeks** (weeks 1–12, the first 3 months — one page per week, shipped) and a
**Monthly Guide** (months 4–12 — one page per month), under a cadence-neutral "Baby Guide"
hub, with the growing-vine milestone timeline as the visual index into the months and
deep-dive topic pages for the giants (Starting Solids, the 4-month sleep shift).

- One page per week of life (`weeks` collection, schema in `src/content.config.ts`):
  milestones, todos, feeding, sleep, red flags, also-worth-knowing, **and a "what to buy"
  gear section** (the stage's key purchases + top-3 brands + a how-to-use video) — every
  claim cited **inline on the item itself** (linked source chips), with rich 2–5 sentence
  details, embedded how-to videos on technique items, and topical diagrams (content v2
  standard, CONTENT.md).
- Sources: Tier-1 institutions (AAP/HealthyChildren, CDC, CPS, WHO, Nemours) + the two
  family-provided sources in `docs/sources/` (What to Expect the First Year chapters;
  the tier-rated resource guide). Canadian guidance (CPS, Alberta Health Services / 811)
  included alongside US guidance since we're in Alberta.
- Current week auto-highlighted from birth date (`src/lib/current-week.ts`).

### 4. Month-by-month milestone timeline (see DESIGN.md § Layout & page patterns)
- Interactive scrollable timeline, months 1–12: a growing vine with illustrated leaf-stop
  nodes (design v2). Each month expands to typical milestones across domains (motor,
  social, language, feeding, sleep) with "ranges are normal" framing and citations.
- Current month auto-highlighted. Data lives in a content collection so the guide and the
  weekly pages share one set of sourced facts.

### 5. Comments & reactions (family)
- No accounts. A commenter types their name once (remembered in localStorage) and can leave
  comments and tap reactions (❤️ 🥰 😂 🎉) on journal entries and photos.
- Needs a small database: **Neon Postgres free tier via Vercel Marketplace** (two tables:
  `comments`, `reactions`). Site stays behind the password gate, so spam risk is low; still
  keep a simple delete path (admin key in env) for moderation.
- Comments are keepsakes too — they render as part of the entry's permanent record.

## Privacy & access

- **Password-protected** (already built): two-tier — shared family password for the site,
  parents-only password that additionally unlocks `/private`. Both bcrypt-verified; the
  HMAC-signed cookie carries the tier; SSR middleware enforces it. `robots.txt` disallows
  all; no public indexing.
- **Repo visibility (decided 2026-07-23, supersedes the 2026-07-14 "must be private" rule):**
  the GitHub repo may stay public for now. Accepted tradeoff: family-journal markdown
  (including birth details) lives in the repo, so a determined person could read it on
  GitHub — the passwords gate the *rendered site*, not the repo files. Mitigations: the
  journal section takes its own reader password (below), no passwords or the baby's name
  are ever committed, and photos stay in the private Blob store (never in the repo).
  **The private `/private` journal remains archived and MUST NOT return until the repo is
  made private** — that part of the old rule stands.
- **Journal reader password (added 2026-07-23):** `/journal/*` requires a second,
  journal-specific password on top of the family login. Env: `JOURNAL_READ_PASSWORD_HASH`
  (bcrypt; empty disables the gate). Cookie payload `jr:`, unlock form at `/journal-unlock`
  (`src/lib/journal-auth.ts`, middleware). Plaintext lives only with the parents — never in
  the repo or docs, since it contains the baby's name.
- Real names OK behind the gate; baby's name held back until the announcement post by choice.
- Videos are unlisted-YouTube (see tradeoff above); photos never leave the gated site.

## Design

Design system v2 — "Premium storybook / Fresh meadow" (see DESIGN.md, which is the source
of truth). Decided 2026-07-14 after the v1 cream/rose pass shipped and was judged too
basic: bright ivory base with **sage green leading**, image-rich pages (custom SVG
illustration system as backbone, curated AI feature art, real photos as heroes
post-birth), and rich-but-guarded animation (view transitions, scroll reveals, animated
hero). Guiding rule: every page art-directed, no large empty bands.

## Tech stack (already scaffolded and deployed)

- **Astro 6 SSR** + `@astrojs/vercel`, deployed at https://baby-website-hazel.vercel.app,
  auto-deploy on push to `main`.
- Content = markdown content collections (`src/content/journal/`, `src/content/weeks/`).
  Publishing a journal entry or week page = commit + push. No CMS.
- Comments/reactions are the only dynamic data (Neon Postgres, phase 2).
- Non-goals: user accounts, an admin web UI, native app, analytics beyond Vercel's defaults.

## Update workflow

1. Aviel opens a Claude Code session and brain-dumps (or asks for the weekly prompt).
2. Claude drafts the entry per JOURNAL.md — first asking targeted questions (perspective,
   title, tone, media placement, missing details) to nail voicing before writing — shows it
   for approval, then commits + pushes.
3. **Capture-craft feedback (every entry, decided 2026-07-23):** after drafting, Claude gives
   Aviel 2–3 concrete suggestions on how to make his own raw captures tell a more meaningful
   story next time (what was strong, what was thin, what to note in the moment).
4. Photos: Claude runs the upload script (`scripts/upload-photos.ts`, phase 2) → Blob URLs
   → embedded in the entry. Videos: Aviel uploads to YouTube, gives Claude the link.
5. Week pages are drafted ahead of time (target: 2 weeks ahead of baby's age) per CONTENT.md.
