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
- [x] **Gear "what to buy" section** (shipped 2026-07-15, see CONTENT.md § Gear):
  - [x] Schema: `gear` array on weeks (item, why, top-3 brands, how-to video, sources)
  - [x] Gear section + ranked brand cards on week pages (butter accent, own icon,
        "not sponsored" disclaimer — visually separate from medical content)
  - [x] Weeks 1–4 populated, Canada-first, verified videos: wk1 car seat + swaddle,
        wk2 pump + bottles, wk3 sound machine + bouncer, wk4 carrier + monitor
        (CMVSS 213 flagged for car seats; bouncer/inclined-sleeper safety flagged)
  - [x] Per-brand pros/cons + verified "Visit site" link to the maker (2026-07-15)
- [x] **Per-week comments** (shipped 2026-07-15, see CONTENT.md § Comments):
  - [x] Private Vercel Blob store `baby-comments` (one JSON/week); name-only, no login;
        `Comments.astro` in the week template → every week now + future gets it
  - [x] POST `/api/comments` (add + admin delete); input sanitized/capped; encouraging
        empty state; commenter name remembered in localStorage
  - [x] Moderation: visit `/weeks/NN/?admin=<COMMENT_ADMIN_KEY>` for delete buttons
        (key in Vercel prod env + local .env.local)
  - Note: blob read-after-write has a ~1s lag; a posted comment always shows on reload
- [x] **Journal capture → weekly draft** (shipped 2026-07-15, see JOURNAL.md):
  - [x] `/write` private capture form (own journal password, its own gated island;
        text + tag/mood chips + multi-photo; dictation-friendly; localStorage draft)
  - [x] Captures + photos in the private Blob store; `/write` list + delete;
        gated photo route `/api/capture-photo/<id>` (journal or family cookie)
  - [x] `scripts/read-captures.mjs` for drafting; workflow = capture all week, Claude
        drafts one post as `draft: true` on trigger, publish on approval
  - [x] Journal password chosen (Journal2026) — set in local .env.local; set in Vercel prod
  - [x] Client-side photo compression on upload (max 2000px/JPEG q0.82, ~78% smaller)
  - [ ] Later: scheduled auto-draft (cloud routine) if the weekly manual trigger drags
- [x] **Daily questions + morning email** (shipped 2026-07-15, see JOURNAL.md):
  - [x] `src/data/daily-questions.ts` (days 1–30 + 14 milestones bespoke; 72-pool for rest)
  - [x] Dynamic day-of-life prompt card on `/write`
  - [x] `/api/daily-email` + Vercel Cron (`vercel.json`, 13:00 UTC); Resend sender;
        `?preview=1&day=N` to preview
  - [ ] **Activate email:** create a free Resend account (with avielchow88@gmail.com),
        set `RESEND_API_KEY` in Vercel; `CRON_SECRET` generated + set
  - Storage: photos + captures + comments all in one private Blob store `baby-comments`
    (prefixes `journal-photos/`, `journal-captures/`, `comments/`); 5 GB free, Hobby never
    charges (pauses at limit) — compression keeps usage negligible

## Phase 2 — First weeks (during naps)

- [ ] Photo pipeline: resize/compress on capture (sharp) — currently stores originals;
      gallery page; embed capture photos in published posts
- [ ] Unlisted-YouTube embed component (youtube-nocookie)
- [x] ~~Comments + reactions~~ — comments shipped (Blob, not Neon); reactions still open
- [ ] Site-wide rename Baby → real name (with the announcement post)
- [ ] Weekly journal rhythm running (capture → draft → publish)

## Phase 3 — Settled in (month 2+)

- [ ] Milestone timeline page (winding-path design, months 1–12, milestones collection)
- [ ] Book of Firsts roll-up page (from `first`-tagged entries)
- [x] Weeks 5–8 content (shipped 2026-07-15, full v2 standard: rich sourced content,
      verified videos, gear w/ pros-cons, diagrams, distinct vignettes); nav renamed
      "Weeks" → "Weekly Guide", guide page retitled for new parents
- [x] Weeks 9–12 content (shipped 2026-07-15, full v2 standard + distinct vignettes) —
      the first year's first quarter (weeks 1–12) is now complete
- [x] Decided month-4+ cadence → **monthly** (see MONTHLY.md, spec'd 2026-07-15)
- [x] Renamed "Weekly Guide" → "Newborn Weeks" (weeks 1–12 = the first 3 months)
- [x] **Month-by-month guide** (shipped 2026-07-15, MONTHLY.md build plan A–F):
  - [x] A — rename to Newborn Weeks
  - [x] B — `/guide` "Baby Guide" hub + nav → "Baby Guide"
  - [x] C — `months` collection + schema (adapted sections) + `/months/NN` template
        + MonthVignette; comments generalized to per-page ids (week-/month-/topic-)
  - [x] D — months 4–12 authored (content-v2, verified; several Alberta-vaccine
        corrections caught along the way, e.g. Men-C-C at 4mo, no 9mo dose)
  - [x] E — `/milestones` growing-vine timeline (visual index into the months)
  - [x] F — deep-dive topic pages: Starting Solids (~6mo), the 4-Month Sleep Shift
- [ ] Year two (months 13–24, quarterly) — deferred per MONTHLY.md
- [ ] **Films section** (see VIDEO.md, spec'd 2026-07-17): cinematic weekly family films,
      weeks 1–3, ~15 shots each with per-shot diagrams + Resolve edit walkthroughs
  - [x] Spec + `films` schema + ShotDiagram DSL/renderer + /films index & film template
        + nav "Films" + kit & cheap-upgrades ($100–300) sections
  - [x] All 12 weekly production guides authored (weeks 1–12, complete arc)
  - [ ] `videoUrl` embeds as each film gets shot + edited
- [ ] Monthly letter-to-Baby entries

## Later / maybe

- [ ] Printable poster export of the milestone timeline
- [ ] Year-one recap page / annual "yearbook" PDF
- [ ] Photo storage migration to R2 if Blob free tier gets tight
