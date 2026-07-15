# Roadmap

> Phases ordered around one fact: **baby arrives ~2026-07-15.** Phase 1 is "ready for the
> first days"; everything else can land during naps. Check items off as they ship.

## Phase 1 — Ready for arrival (now)

- [x] Password gate, journal + weeks scaffolding, Vercel deploy (already live)
- [x] SPEC / DESIGN / JOURNAL / CONTENT docs in `docs/`
- [x] Source material converted (What-to-Expect chapters, resource guide)
- [x] Private journal section (two-tier password, `/private`, hidden from family tier)
- [x] Private journal built, then **archived 2026-07-15** (`_private-archive/`) and
      removed from the live site so the site could ship to the still-public repo
- [ ] **Make the GitHub repo private** (found public 2026-07-14; GitHub → Settings →
      Danger Zone → Change visibility) — required before restoring the private journal
- [ ] Restore private journal from `_private-archive/RESTORE.md` (after repo is private)
- [ ] Set `PRIVATE_PASSWORD_HASH` in Vercel (production) with the real parents password
- [ ] **Pre-delivery journal post** (the night-before entry)
- [x] Week pages 1–4 drafted and published (weeks 2–4 written 2026-07-14, Tier-1 sourced;
      week-01 reviewed)
- [x] ~~Soft & storybook design pass~~ (shipped 2026-07-14, superseded same day by
      design v2 — judged too basic)
- [ ] **Design v2 — "Premium storybook / Fresh meadow"** (see DESIGN.md):
  - [x] Fresh-meadow palette swap (sage-led tokens, color-blocked bands)
  - [x] Custom SVG illustration system (`src/components/illustrations/`: HeroMeadow,
        WeekVignette weeks 1–4 + fallback, LeafSprig, MoonStars) + week header vignettes
  - [x] Animated home hero + scroll reveals + view transitions (reduced-motion safe)
  - [ ] AI feature-art batch via Canva (journal header, milestone timeline stops) —
        curate hard; SVG system carries the design until then
  - [x] Upgraded typographic scale (display headlines, giant week numerals)
  - [ ] WeekVignette scenes for weeks 5+ as those pages get written
- [ ] Birth-announcement entry template ready to fill in from the hospital

- [x] **Content v2 enrichment** (shipped 2026-07-15, see CONTENT.md):
  - [x] Schema: per-item `sources` (inline chips) + `video` fields; week-level `diagrams`
  - [x] Click-to-load YouTube embed component (nocookie facade, verified working)
  - [x] Topical diagram components (safe-sleep, diaper dashboard, crying curve,
        hunger cues, tummy time)
  - [x] Weeks 1–4 re-authored: 2–5 sentence details, every item inline-cited
        (all URLs fetch-verified), 15 videos total — every one title+channel verified
  - [ ] Note: "New Parents Academy" channel from the resource guide is unverifiable
        (flagged in the guide); hospital/institutional channels used instead
- [x] **Design v2.1 — Studio pass** (shipped 2026-07-15, see DESIGN.md § v2.1):
  - [x] Sprout character (blinking, bobbing seedling — hero, 404)
  - [x] Time-of-day hero lighting: day / golden hour / night (Alberta time;
        `?scene=` override), moon + twinkling stars + fireflies at night
  - [x] Depth: 3-layer atmospheric hills + scroll parallax
  - [x] Spring-curve motion tokens; butterfly flight path (day/golden)
  - [ ] Sprout growth stages (gains leaves as baby ages) — later delight

## Phase 2 — First weeks (during naps)

- [ ] Photo pipeline: `scripts/upload-photos.ts` (sharp resize → Vercel Blob), embeds in
      entries, gallery page
- [ ] Unlisted-YouTube embed component (youtube-nocookie)
- [ ] Comments + reactions (Neon Postgres via Vercel Marketplace; name-only, no login)
- [ ] Site-wide rename Baby → real name (with the announcement post)
- [ ] Weekly journal rhythm running (prompt → brain-dump → publish)

## Phase 3 — Settled in (month 2+)

- [ ] Milestone timeline page (winding-path design, months 1–12, milestones collection)
- [ ] Book of Firsts roll-up page (from `first`-tagged entries)
- [ ] Weeks 5–12 content; decide month-4+ cadence
- [ ] Monthly letter-to-Baby entries

## Later / maybe

- [ ] Printable poster export of the milestone timeline
- [ ] Year-one recap page / annual "yearbook" PDF
- [ ] Photo storage migration to R2 if Blob free tier gets tight
