# Week-by-Week Guide & Milestone Timeline — Content Standards

> How the practical content gets researched, sourced, and structured. Claude: read this
> before writing or editing any `weeks/` page or milestone-timeline data.

## Sourcing rules

Every factual claim is attributable. Trust tiers (from
[sources/newborn-parenting-resource-guide.md](sources/newborn-parenting-resource-guide.md)):

- **Tier 1 — default:** AAP / HealthyChildren.org, CDC, Canadian Paediatric Society
  (caringforkids.cps.ca), WHO, Nemours KidsHealth, NHS, Mayo Clinic. Also Alberta-specific:
  Alberta Health Services / MyHealth.Alberta.ca, HealthLink 811.
- **Tier 2 — medical nonprofits/specialists:** La Leche League, PurpleCrying.info,
  Postpartum Support International, Let Mommy Sleep.
- **Tier 3 — expert-reviewed editorial:** The Bump, BabyCenter, WhatToExpect.com, and the
  book *What to Expect the First Year* (extracted per-chapter in `docs/sources/what-to-expect/`,
  local-only/gitignored — use it for framing, month structure, and "weird but normal"
  reassurance; verify anything medical against Tier 1 before publishing).

Rules of engagement:
- Medical/safety claims (safe sleep, fever thresholds, feeding volumes, vaccine schedule,
  red flags) **must** cite Tier 1. Tier 2–3 may add color, technique, and reassurance.
- Where US and Canadian guidance differ, prefer Canadian (we're in Alberta) and note the
  difference if meaningful. Vaccines follow the **Alberta routine immunization schedule**.
- Each week page lists its sources in the `sources` frontmatter array (label + URL) — this
  renders as the citations block. Cite the specific page, not the site homepage.
- Standing site disclaimer (rendered on every week page): this is a summary by parents, for
  family — always consult your pediatrician; call 911 / go to emergency for emergencies.
- Recency: check publication dates; milestone content should reflect the CDC's 2022
  checklist revision. `lastUpdated` in frontmatter is real, not decorative.

## Week page structure

Schema is defined in `src/content.config.ts` (weeks collection). Section intent:

- `milestones` — what's typical THIS week, always range-framed ("many babies…", "by now
  most…"). Never deadline language.
- `todos` — concrete parent actions (appointments, registrations, prep). Alberta-specific
  where relevant (Vital Statistics, AHS well-child visits, health card).
- `feeding` / `sleep` — practical, specific numbers with sources; call out what changed
  from last week.
- `redFlags` — "call the doctor if…" Every item Tier-1 sourced. Includes the parent
  mental-health check (PPD/PPA signs) at appropriate weeks — parents' health is baby care.
- `alsoWorthKnowing` — the "weird but normal" material and a parent mental-health tip.
- `gear` — the most important things to buy for THIS stage, each with top-3 brands and a
  how-to-use video. See "Gear & essentials" below. Not every week has gear.

## Content richness standard (v2 — decided 2026-07-15)

The v1 pages were judged too thin. Every item now earns its place with depth:

- **Rich details:** `detail` strings are 2–5 sentences: the fact, the concrete numbers,
  the *how* (what to actually do), and the *why it matters* when it isn't obvious.
  "Feed on demand" is v1; "what demand looks like at 3 a.m., how to tell hunger cues
  from comfort cues, and why the 10-minute-feed myth is wrong" is v2.
- **Inline citations, not end-of-page:** every bullet item carries its own `sources`
  array (label + url), rendered as small linked source chips directly on the item
  (e.g. `CPS` · `AAP`) pointing at the *exact page* backing that claim. The page-level
  `sources` list stays as the full bibliography, but no claim should make the reader
  scroll to find its backing. Chip labels are the short org name (CPS, AAP, CDC,
  Nemours, AHS, LLLI, PURPLE); the full title lives in the bibliography.
- **How-to videos, embedded:** items teaching a technique (swaddling, latch, bathing,
  cord care, tummy time, soothing holds, taking a temperature) get a `video`
  (title + url + channel) rendered as a click-to-load, privacy-enhanced YouTube embed
  card (thumbnail + title + channel; loads youtube-nocookie iframe only on tap).
  Target 2–4 videos per week page, on the items where *seeing it* beats reading it.
  Channel preference: the vetted list in the resource guide (New Parents Academy,
  FirstCry Parenting, Dr. Jazmine, Ms. Rachel) plus institutional channels (AHS, CPS,
  PURPLE program). **Verification rule:** fetch the watch page and confirm title +
  channel before publishing; a dead or misattributed video link is worse than none.
- **Graphics in the content:** beyond the week vignette and section icons, each week
  page should include at least one **topical SVG diagram** where a visual genuinely
  teaches — e.g. safe-sleep crib setup, diaper-output dashboard, hunger-cue ladder,
  tummy-time positions, the crying curve. Built as palette-colored components in
  `src/components/illustrations/diagrams/`, reusable across weeks. Add opportunistically
  wherever a list is secretly a picture.

Writing register: warm, plain, reassuring, zero alarmism; specific numbers over vague
advice. It should read like a smart friend who did the homework, not a pamphlet.

## Gear & essentials — "what to buy" (added 2026-07-15)

Each week surfaces the gear that actually matters **for that stage**, so buying tracks the
baby's needs instead of a giant day-one list. Rendered as a distinct **gear section** on the
week page (its own icon and card styling — visually separate from the sourced medical
content, because these are opinions, not clinical guidance).

**Per gear item, capture:**
- `item` — the thing (e.g. "Infant car seat", "Swaddle"). Name the *category*, not one
  product.
- `why` — 1–3 sentences: why it matters now, and what to actually look for when choosing
  (the buying criteria — e.g. for a car seat: rear-facing, fits your vehicle, height/weight
  limits, expiry date; for a swaddle: hip-healthy, right TOG for the season).
- `brands` — **top 3**, each `{ name, note }`. The `note` is one honest line on what that
  brand is good at or known for (price point, ease, a standout feature), not marketing copy.
- `video` — a how-to-**use** video (installing the car seat, the safe swaddle wrap, fitting
  a carrier), same `{title, url, channel}` shape and the same **mandatory verification** as
  technique videos (fetch the watch page; confirm title + channel; skip if it can't be
  confirmed). Prefer the manufacturer's own channel or a safety authority (e.g. a CPST /
  car-seat-technician channel, AHS, a hospital) for install/fit videos.
- `sources` — optional inline chips, and **required** for any safety claim (e.g. rear-facing
  guidance → Transport Canada / AHS / AAP; safe swaddle → AAP/CPS hip-safety + safe-sleep).

**Which gear, which week (illustrative, not exhaustive):**
- Week 1: infant car seat, swaddle (+ bassinet/safe-sleep surface if not already covered).
- Early weeks: pump & bottles, a good change setup, sound machine.
- ~Weeks 4–8: baby carrier / wrap (fit + hip positioning matters — carrier video is key).
- Later: playmat/activity gym, high chair (around solids), video monitor, teething tools.
Decide gear per week from what the baby is actually doing that week.

**Ethics & honesty rules (non-negotiable):**
- Not sponsored, no affiliate links, no fabricated rankings. Brand picks reflect genuine,
  current reputation for safety / quality / value — if unsure, say the category matters more
  than the brand and list widely-trusted options.
- **Canada-first:** recommend brands actually available in Canada; car seats **must** be
  certified to Canadian standards (Transport Canada / CMVSS 213) — a US-only seat is not
  legal here, so flag that explicitly for any car-seat pick.
- Safety items (car seat, sleep surface, swaddle) lead with the safety criteria, not the
  brand. The brand is secondary to correct use — which is why the how-to video is required.
- Keep it to the few things that matter each week; this is a curated "what's worth it now,"
  not a baby-registry dump.

Schema: add a `gear` array to the weeks collection —
`gear: [{ item, why, brands: [{name, note}] (max 3), video?: {title,url,channel},
sources?: [{label,url}] }]`.

## Production cadence

- Draft target: stay **2 weeks ahead** of baby's actual age (weeks 1–4 before/at birth,
  since newborn weeks leave no writing time).
- Weeks 1–12: one page per week (things change fast). Months 4–12: cadence may relax to
  fortnightly/monthly pages — decide at month 3 based on how much genuinely changes and
  actual usage.
- Research workflow per page: start from the relevant What-to-Expect chapter + resource-guide
  mapping for framing → verify/source each claim via Tier 1 web search → draft → cite.

## Milestone timeline data (months 1–12)

Lives as a new content collection (`src/content/milestones/month-01.md` … `month-12.md`,
schema TBD in phase 3) so the timeline page renders from data, not hand-built HTML.

Per month: headline milestones (2–3 for the collapsed vignette), then full lists grouped by
domain — **Motor · Social · Language · Feeding · Sleep** — each item with range framing and
a citation. Primary sources: CDC milestone checklists (2022) + AAP/HealthyChildren month
pages + CPS; What-to-Expect chapter 4 ("First Year at a Glance") for structure comparison.
Always include the standing note: ranges are wide, premature babies use adjusted age, and
the checklist is a conversation-starter for well-child visits, not a scorecard.
