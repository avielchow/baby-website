# Month-by-Month Guide — Structure Spec

> How the guide extends past the first three months. Decided 2026-07-15 via Q&A.
> Companion to [CONTENT.md](CONTENT.md) (content standard, unchanged) and
> [DESIGN.md](DESIGN.md) (the growing-vine milestone timeline). Claude: read this
> before building the hub, the months collection, or any month page.

## The two-cadence model

The guide runs at two cadences, because development does:

- **Newborn Weeks** — weeks 1–12 (the first 3 months). One page per week; already
  shipped. Renamed from "Weekly Guide" → **"Newborn Weeks."**
- **Monthly Guide** — months 4–12 (the rest of year one). One page per month.

Why monthly after 3 months (the reasoning behind this spec): development spreads from
weekly beats into monthly arcs (rolling ~4mo, sitting/solids ~6mo, crawling ~9mo,
cruising/words ~12mo); the authoritative scaffolding is monthly (CDC checklists at 4/6/9/12
months; Alberta well-child visits and vaccines at 4/6/12 months); parents of older babies
think in months; and monthly keeps each page genuinely rich instead of padded.

**Scope now:** months 4–12 (finish year one). Year two (months 13–24, likely quarterly) is
deferred — noted here, not specced yet.

## Navigation & routing

- **Nav becomes a cadence-neutral hub:** the nav tab changes from "Newborn Weeks" to
  **"Baby Guide"**, pointing at a hub page.
- **`/guide` — the Baby Guide hub:** a landing page with the paths into the guide —
  *Newborn Weeks (1–3 months)*, *Months (4–12 months)*, and the *Milestone timeline*.
  Warm, illustrated, two-tap to anything.
- **Routes:**
  - Newborn weeks: `/weeks/NN` (unchanged).
  - Months: `/months/NN` (04–12), rendered from a new `months` content collection.
  - Milestone timeline: `/milestones` (the growing-vine visual index — see below).
  - Deep-dive topics: `/guide/topics/<slug>` (e.g. `/guide/topics/starting-solids`).
- **Interim (until months exist):** nav shows **"Newborn Weeks"** → `/weeks/`. It flips to
  the "Baby Guide" hub when the hub + first month pages ship (build Phase B).

## The milestone timeline is the index (decided)

The planned growing-vine timeline (DESIGN.md § Layout) becomes the **visual overview of the
months**, not a separate content silo. Each month is a leaf-stop on the vine; tapping a stop
links into that month's full `/months/NN` page. The vine shows headline milestones per month
(2–3), current-month glow, and future months muted-but-visible. Rich content lives on the
month pages; the vine is the beautiful way in. Timeline headline data is derived from each
month's `milestones` (single source of truth — no duplication).

## Monthly page content model (adapted sections + deep dives)

A new **`months` content collection** (`src/content/months/month-04.md` … `month-12.md`).
Schema mirrors the weeks schema (rename `weekNumber` → `monthNumber`, keep `gear`,
`diagrams`, inline per-item `sources`, `video`), with sections **adapted for older babies**:

- `milestones` — grouped by domain (motor · social · language · feeding · sleep),
  range-framed. Feeds the timeline.
- `developmentAndPlay` — **new.** What they're learning and how to engage it (activities,
  games, talking/reading, what the current leap looks like).
- `feeding` — evolving: month 6 introduces **solids** (links to the Starting Solids deep
  dive); milk amounts; self-feeding later.
- `sleep` — naps consolidating, night sleep, routines; the 4-month shift links to its deep
  dive; later regressions/schedules.
- `safetyOnTheMove` — **new.** Babyproofing and safety scaling with mobility (rolling →
  sitting → crawling → pulling up); water/stairs/small-objects as they apply.
- `healthAndCheckups` — the month's well-child visit and Alberta vaccines (4mo, 6mo, 12mo),
  what's checked, growth.
- `redFlags` — call-the-doctor + developmental "mention at the visit" flags; parent
  mental-health where relevant.
- `alsoWorthKnowing` — the "normal but surprising" material + one great video.
- `gear` — stage-appropriate, top-3 brands with note/url/pros/cons + how-to video
  (same ethics + Canada-first rules as CONTENT.md § Gear).

All content-v2 rules from CONTENT.md carry over unchanged: **Canada-first Tier-1 sourcing,
inline per-item citations, mandatory video verification (curl title+channel), gear pros/cons
+ verified maker links, and topical diagrams.** Milestone note per CONTENT.md: ranges are
wide, preemies use adjusted age, checklists are conversation-starters not scorecards.

## Deep-dive topic pages (the giants get room)

Some topics are too big for one section. They become standalone, richly-sourced pages under
`/guide/topics/`, linked from the relevant month(s) and from a Topics index:

1. **Starting Solids (~6 months)** — readiness signs, purées vs. baby-led weaning, first
   foods and iron, the common allergens + early-introduction guidance, choking vs. gagging
   and safe textures/sizes, no honey <12mo, gear. Sources: **Health Canada / Canada's food
   guide for infants, CPS, AAP** (Canada-first).
2. **The 4-Month Sleep Shift** (the so-called "regression") — what's actually changing
   (sleep cycles maturing), why it's developmental not a step back, safe things that help,
   and safe-sleep reminders. Sources: CPS, AAP, Nemours.
3. **Future topics (not yet specced):** teething, childproofing/home safety, separation
   anxiety, screen time.

## Illustration & design

- Month pages reuse the site system (DESIGN.md): each month gets a vignette (extend
  `WeekVignette` into a `MonthVignette`, or a shared set keyed by month theme — rolling,
  sitting, first foods, crawling, standing, first steps).
- The `/guide` hub and `/milestones` vine are the two new "showpiece" surfaces — treat with
  the studio-pass polish (DESIGN.md § v2.1): illustrated, animated-but-tasteful.

## Build plan (phased)

- **A — Rename (done 2026-07-15):** "Weekly Guide" → **"Newborn Weeks"** (nav + page title +
  subtitle: "a week-by-week guide to the first three months").
- **B — Baby Guide hub:** `/guide` landing page; nav tab → "Baby Guide"; wire to Newborn
  Weeks (+ Months/Timeline as they land).
- **C — Months plumbing:** `months` collection + schema (adapted sections) + `/months/NN`
  page template + `MonthVignette`.
- **D — Author months 4–12** to the content-v2 standard (research agents, verified).
- **E — Milestone timeline** `/milestones` (growing vine) as the visual index into months.
- **F — Deep-dive topics:** Starting Solids, the 4-Month Sleep Shift.

Each phase is shippable on its own; author content (D) can proceed in parallel once C exists.
