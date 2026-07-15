# Baby Website — Design System v2: "Premium Storybook / Fresh Meadow"

> v2 chosen 2026-07-14 after reviewing the shipped v1 ("soft & storybook" cream/rose),
> which was judged **too basic**. v2 keeps the storybook heart but executes at
> premium-brand level: a bright sage-led palette, an image-rich illustrated system,
> and rich (but tasteful) animation. Anti-goals unchanged: corporate, clinical,
> cutesy-cluttered, trendy-dated — and now also: flat, empty, "default blog" plainness.

## Concept

**Premium storybook.** Illustrated, warm, narrative — finished like a boutique baby
brand: bolder layouts, illustrated section headers, color-blocked bands, generous scale,
motion with intent. Every page should feel *art-directed*, not templated.

## v2.1 — The Studio Pass (2026-07-15)

An animation-studio design review of v2 found it "pretty but uninhabited." Fixes,
by studio principle:

1. **Character first.** Every beloved animated world has someone to root for. Ours is
   **Sprout** — a small seedling with leaf arms and big blinking eyes who grows from the
   meadow. The metaphor *is* the site: the world grows as the baby grows. Sprout appears
   in the hero (watching the path, blinking, gently bobbing), on the 404 and empty
   states, and later can gain leaves as months pass. Design rules for Sprout: simple
   silhouette readable at 24px; eyes do the acting (blink cycle ~5s, slight bob);
   never speaks in UI copy; never cluttered with accessories.
2. **A living world — time-of-day staging.** The hero scene knows what time it is in
   Alberta and lights itself accordingly: bright **day** (sun, clouds, butterfly),
   warm **golden hour** (low sun, honeyed sky, long warmth), and **night** (deep
   green-blue sky, moon, stars, drifting fireflies). Same geometry, different lighting —
   exactly how a color script re-lights a set. Server-rendered per request from
   America/Edmonton time; `?scene=day|golden|night` overrides for testing.
3. **Depth and atmosphere.** Flat = cheap. The meadow gets atmospheric perspective:
   a far hill layer lighter and hazier, mid and near layers progressively saturated,
   subtle **parallax** on scroll (far moves slower than near). A soft radial sun/moon
   glow warms the sky. Never more than 3 hill layers — staging, not clutter.
4. **Motion with weight (the 12 principles, tastefully).** Linear drifts read as
   screensaver; studio motion has intent. Hover states get a spring curve
   (`--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)`) — cards lift with a hint of
   overshoot, buttons bloom. Secondary action: Sprout blinks *and* bobs; the butterfly
   flaps *while* traveling its flight path. Everything decorative still dies under
   `prefers-reduced-motion`.
5. **Charm details (the "wandering eye" test).** Wherever the eye rests idle there
   should be a small reward: a butterfly crossing the hero on a curved path, fireflies
   pulsing at night, the butter star twinkling. Budget: 2–3 per page, subtle, never
   looping faster than ~6s.

What this pass deliberately does NOT do: mascot-ify the guide content (diagrams and
week pages stay clean and information-first — Disney charm, hospital accuracy), or add
sound, or add heavy JS (all of the above is SVG + CSS + a 10-line parallax script).

## Palette — "Fresh meadow"

Bright nursery with plants: fresh, alive, expensive-looking. Sage is the star.

| Token | Hex | Use |
|---|---|---|
| `--ivory` | `#FDFDF9` | Page background — bright, not cream |
| `--paper` | `#FFFFFF` | Cards, raised surfaces |
| `--ink` | `#3D443A` | Body text — green-tinted charcoal |
| `--ink-soft` | `#68715F` | Secondary text |
| `--sage` | `#6B9A5F` | **Lead color**: filled buttons, active nav, icons, big accents, section identity |
| `--sage-deep` | `#557B4B` | Hover/pressed; sage small text on white |
| `--leaf` | `#8FBC85` | Light sage pairing: illustration fills, decorative shapes |
| `--sage-wash` | `#E8F0E3` | Section band backgrounds, hovers, tag pills |
| `--butter` | `#F2DFA8` | Highlights: current week/month, "new", celebration |
| `--rose` | `#E8B4B4` | Warm accent, small doses — hearts, reactions, journal/family moments |
| `--rose-deep` | `#C98B8B` | Rose small text / hover |
| `--line` | `#E3E8DD` | Hairlines |

Rules:
- Sage leads everywhere; the site should read *green* at a squint. Rose is a garnish
  (love/family moments only), never a competing accent. Butter marks "now/celebrate".
- Color-blocked bands: page sections alternate ivory ↔ sage-wash (occasionally full
  `--sage` bands with white text for big statement moments).
- Contrast: `--ink` on ivory/paper for body; `--sage-deep` minimum for text under 18px;
  white text only on `--sage`/`--sage-deep` fills. Never accent-on-accent text.

## Typography

Keep Fraunces (headings) + Nunito Sans (body), both already self-hosted — but scale up
with confidence:

- Display (home hero): 3.5–4.5rem, Fraunces weight ~600, tight leading (1.05),
  high optical size. Headlines are a design element, not just labels.
- h1 2.5rem / h2 1.75rem / h3 1.25rem. Body 17px/1.65 (18px in journal prose).
- Big numerals: week/month numbers set huge in Fraunces as graphic elements.
- Eyebrows become sage pills or paired with a leaf-sprig SVG rather than bare caps text.

## Imagery system (the core of v2)

Four layers with a strict hierarchy — consistency comes from the palette (every image
uses fresh-meadow hues) and from one style per surface:

1. **Custom SVG illustration system — the backbone.** A cohesive set of palette-colored
   motifs and scenes built as reusable Astro/SVG components in
   `src/components/illustrations/`: leaf sprigs and vines, sun, drifting clouds, moon &
   stars, hanging mobile, footprints, growth-vine, blocks/toys, botanical corners.
   Composed into: section-header vignettes, per-week header scenes (keyed to the week's
   theme — e.g. week 2: scale + fading moon; week 3: sun + soundwaves), empty states,
   dividers, list-item icons. Crisp at any size, zero licensing, extendable on demand.
2. **AI-generated feature art — the showpieces.** A small, hard-curated painterly set
   (soft gouache children's-book style, palette-matched, character-free nursery/botanical
   scenes, no text) for the biggest moments only: home hero, milestone-timeline stops,
   journal index header. Art-direction prompt recipe lives in this doc's appendix; generate
   in batches, keep only what matches. (Canva AI is connected for this.)
3. **Open-source illustration fills — coverage only.** Recolored to palette, used only
   where layers 1–2 don't reach, and only if they pass the "looks native" squint test.
4. **Real photos — the future heroes.** Post-birth, photos take over hero slots; the
   illustration system becomes the frame (illustrated mats, botanical corners, scalloped
   masks), not the show. Design every hero slot to accept either.

Rule of thumb: **no large empty band without an image, illustration, or graphic device.**

## Motion & interactivity — "rich & animated"

- **Page transitions:** Astro `<ClientRouter />` view transitions — soft cross-fade with
  a slight rise; persistent header.
- **Scroll reveals:** content blocks fade-up with gentle stagger (IntersectionObserver +
  CSS; ~350ms ease-out, 20px rise, 60–90ms stagger).
- **Animated hero:** drifting clouds, gently swaying leaf sprigs / hanging mobile
  (slow CSS keyframe loops, 8–20s, subtle amplitude).
- **Cards:** hover lift (translateY(-3px) + shadow deepen, 200ms); week/milestone cards
  expand in place on tap/click for detail.
- **Micro-delights:** butter badge soft pulse on the current week; heart-pop on reactions;
  vine that "grows" down the milestone timeline as you scroll.
- **Guardrails:** CSS-first (no animation libraries); everything decorative fully disabled
  under `prefers-reduced-motion`; 60fps or it ships simpler; interaction never gates
  content (expanding cards are progressive enhancement).

## Layout & page patterns

- **Home:** full-width animated meadow hero (layered SVG scene + display headline +
  countdown/week status), then color-blocked bands: current-week feature card (butter
  badge, illustrated icon), journal strip (photo/illustration thumbnails), a
  "guide highlights" band on sage-wash.
- **Weeks index:** a garden-path list — each week card carries its header vignette
  thumbnail, big Fraunces week numeral, sage identity; current week glows butter.
- **Week page:** illustrated header vignette behind the title; each section (Milestones /
  To do / Feeding / Sleep / Red flags / Also worth knowing) gets a small icon and a
  distinct soft treatment; red flags keep the soft deep-rose rule (never alarm-red);
  sources as a tidy footnote block.
- **Journal:** entry cards designed photo-first (illustration placeholder until photos
  exist); entry pages get generous prose width, pull-quote styling, image full-bleeds.
- **Milestone timeline:** the winding path becomes a **growing vine** with leaf-stop
  nodes per month; scroll animates growth; stops expand in place (domain pills: Motor ·
  Social · Language · Feeding · Sleep with range-framing and citations); current month
  butter-glow; future months present but muted.
- Mobile-first always: single column, two-tap reachability, 44px targets, bands and
  illustrations scale down gracefully.

## Voice in UI copy

Unchanged from v1: warm, plain, a little playful ("Leave a note", reassuring empty
states, no baby-talk, no corporate).

## Appendix — AI feature-art prompt recipe (Canva)

Base prompt: *"Soft gouache children's book illustration, [SCENE], muted sage green
(#6B9A5F) and ivory palette with small butter-yellow and dusty-rose accents, gentle
grain, no text, no people, airy negative space, premium picture-book style."*
Scenes list (generate as a batch, curate to a matched set): sunlit nursery window with
plants; hanging mobile with moon and stars; meadow with winding path; stack of wooden
blocks with sprouting leaf; crib under a crescent moon; garden vine with month-markers.
Reject any output that breaks palette or adds clutter; recolor minor drift in post.
