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
