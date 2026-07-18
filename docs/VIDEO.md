# Films — Weekly Family Film Production Guides

> Spec for the Films section: cinematic weekly films of the newborn's first weeks, with
> extremely detailed production guides — story, mood, every shot (settings, lighting,
> movement, a diagram each), and the DaVinci Resolve edit. Decided 2026-07-17 via Q&A.
> Claude: read this before touching `src/content/films/`, the ShotDiagram component, or
> the /films pages.

## The decisions

- **Style: "Cinematic & intimate"** — the A24-home-movie look. Shallow depth (85/50mm
  wide open), slow deliberate moves, window light + warm practicals, negative space.
  Grade: filmic S-curve, lifted blacks, warm highlights / teal-leaning shadows, subtle
  halation + grain. Pace: slow, long holds. Sound: room tone, lullaby-adjacent score,
  breathing-room moments. Mood: tender, quiet, a little wistful — a memory while it's
  happening.
- **Format:** each weekly film ≈ **1–2 minutes, ~15 shots**. Guides detail every shot.
- **Placement:** family-visible section at `/films` (normal family gate). Finished films
  embed on each film page later (unlisted YouTube, `videoUrl` field).
- **Cheap-gear budget:** $100–300 total, recommended on the Films index.
- Scope: **weeks 1–12** (one film per week, completing the newborn stretch; extended from
  1–3 on 2026-07-17). Monthly films beyond three months TBD later.

## The 12-week arc (each film's theme + signature device — no two films share one)

1. **"Homecoming"** — arrival; empty-house frames answered by the ending. ✅
2. **"The Rhythm"** — time without clocks; wall-light timelapse; the chair ×5 montage. ✅
3. **"Waking Up"** — eyes open; first outing; tummy-time 60p triumph. ✅
4. **"One Month"** — the month-birthday portrait ritual (first of a monthly series: same
   spot, same framing every month; the beanbag photo-studio's first real use — X100VI
   stills + a7CII rolling BTS of the portrait being made). Measurement motifs.
5. **"The Long Evening"** — the witching hour as a single-evening, near-real-time film,
   dusk to dark; the soothing repertoire (the 5 S's) staged as choreography chapters.
6. **"The Turn"** — the crying peak meets the first real smile. The film pivots at the
   smile: tense/close/dark first half, open/bright after. Includes the "smile trap"
   (a camera staged ready for days so the first genuine smile is actually captured).
7. **"Conversations"** — serve-and-return cooing as true dialogue coverage
   (shot/reverse-shot grammar); the edit may subtitle the coos.
8. **"Brave"** — two months: vaccine day as a day-structure film. Restraint is the
   device: the needle is never shown — faces, hands, and the after. (Clinic filming:
   ask permission, never film staff/other families; hallway + waiting-room only.)
9. **"Hands"** — the discovery of hands; hands are the protagonist of every frame
   (macro study, batting, gripping, hand-in-parent-hand scale shots).
10. **"The First Laugh"** — comedy structure: the parents' escalating attempts as a
    running gag, the payoff laugh in 4K60.
11. **"An Ordinary Day"** — one full day, dawn to night, with explicit time-of-day
    chapter cards (the deliberate inverse of week 2's clockless-ness) — the portrait
    of a routine that finally exists.
12. **"The Fourth Trimester"** — the finale: precise re-creations of signature frames
    from films 1–11 (the door, the chair, the hands, the bassinet wide) match-cut
    then/now to show three months of growth; ends the newborn era.

## The kit (all guides are customized to exactly this)

- **Sony a7CII** — the A-camera (majority of shots). 4K24 full-width (oversampled), 4K60
  = APS-C crop (~1.5x — treat 50mm as ~75mm equiv in 60p). S-Log3/S-Gamut3.Cine 10-bit
  4:2:2, in-body stabilization (Active SS crops slightly).
- **Lenses:** 28mm, 50mm, 85mm primes. Follow-focus rings arriving (manual-focus pulls).
- **DJI Ronin RS3 Mini** — gimbal moves (a7CII + 28/50 balance easily; 85mm is doable
  but tune balance first).
- **DJI Pocket 3** — b-roll, low-mode follow shots, tight-space moves, second angle.
- **Fuji X100VI** — stills for photo-inserts + its film-sim stills as texture frames.
- **iPhone** — overheads, timelapse, BTS, emergency grab-shots.
- **Lighting owned:** 2 small cheap stick lights with adjustable colour temperature.
  Guides must design primarily around **window light + practical lamps**, using the
  sticks as accent/fill — never as the main source pretending to be a big soft light.
- **Newborn set safety (non-negotiable, appears in every guide):** lights never above or
  near the baby where they could tip; nothing hot close to baby; no on-camera flash
  strobing at the baby; gimbal/camera never passes directly over the baby; staged sleep
  shots always show safe sleep (back, bare crib); short takes around a feeding/sleeping
  baby — the baby's schedule always wins; a shot list is a menu, not a contract.

## Section structure & routing

- `/films/` — index: intro to the project, the film cards (week 1–3), **The kit** (gear
  owned, one line each on its role) and **Cheap upgrades ($100–300)** sections.
- `/films/week-N` — one page per weekly film: header (title, logline, runtime, mood) →
  Story/Mood/Prep (markdown body) → **The shot list** (structured, one diagram per shot)
  → **The edit in DaVinci Resolve** (structured: timeline steps, grade node tree, sound)
  → Music guidance → family comments (`pageId: film-N`).
- Nav: "Films" added to the header between Journal and About.

## Content model (`films` collection)

Frontmatter (see `content.config.ts` for the zod source of truth):

- `week` (number), `title`, `logline` (the film's one-sentence story), `mood`
  (comma phrases), `runtime` (e.g. "~90 seconds"), `videoUrl` (optional — the finished
  film embed, added after each week is shot), `lastUpdated`, `draft`.
- `shots`: array of ~15, each:
  - `n`, `name`, `purpose` (its role in the story), `gear` (exact camera/lens/support),
    `settings` (resolution/fps, shutter, aperture, ISO ceiling, WB, profile),
    `lighting` (sources, placement logic, what the sticks do if used),
    `movement` (exact move + how to execute on RS3 Mini / Pocket 3 / static),
    `direction` (optional: how to get the moment without directing a newborn),
  - `diagram` — REQUIRED for every shot; see the diagram DSL below.
- `edit`: `{ timeline: string[] (ordered steps), gradeNodes: [{n, name, what}],
  sound: string[] }` — the Resolve walkthrough: assembly logic, retimes, the node-by-
  node grade (S-Log3 workflow: CST in → balance → look → halation/grain → CST out, or
  DaVinci color-managed equivalent), and the sound pass.
- Markdown **body** = `## The story` (beat-by-beat: open/middle/close),
  `## Mood & look`, `## Prep & shoot-day plan` (when to shoot what around a newborn's
  day, batching, battery/card/ND notes).

## Shot-diagram DSL (renders via `ShotDiagram.astro`)

Top-down floor-plan SVG in the site palette. All positions are **fractions (0–1) of the
room box** (x: left→right, y: top→bottom). Every shot's `diagram`:

```yaml
diagram:
  room: { w: 5, h: 4 }                  # relative proportions (any units)
  window: { wall: top|bottom|left|right, from: 0.15, to: 0.6 }   # optional
  subject: { x: 0.5, y: 0.4, label: "Baby in bassinet" }
  subject2: { x: 0.3, y: 0.5, label: "Jenn" }                    # optional
  camera: { x: 0.75, y: 0.8, facing: 315, label: "a7CII · 50mm" }
    # facing = degrees clockwise, 0 = toward top wall (both FOV lines drawn from it)
  move:                                                            # optional
    type: push|pull|slide|arc|orbit|static
    path: [ { x: 0.75, y: 0.8 }, { x: 0.6, y: 0.6 } ]             # 2+ points, arrowed
    label: "RS3: slow push-in, walk heel-to-toe"
  lights:                                                          # optional, 0..n
    - { x: 0.15, y: 0.25, kind: stick|practical|reflector|diffusion,
        label: "Stick A · 3200K low behind lamp" }
  note: "one-line caption under the diagram"                       # optional
```

Rendering rules: room = rounded rect on sage-wash; window = butter bar on the wall;
subjects = sage circles with labels; camera = deep-sage wedge (two FOV lines at ±20°
around `facing`) with label; move = dashed rose arrow along `path`; lights: stick =
small butter bar, practical = butter circle, reflector = white arc, diffusion = hatched
white bar — each labelled. Labels are short; detail belongs in the shot's fields.

## Authoring rules for guides

- **Every** shot gets real, executable numbers: base = 4K24, 1/50 shutter, S-Log3
  (or HLG if noted why), aperture chosen per shot, ISO ceiling stated, WB locked (never
  auto), and the ND/exposure strategy for bright windows. 60p only when slow-motion is
  the point (note the crop). Manual focus with the focus ring where pulls matter.
- Movement must be executable by one sleep-deprived parent: name the RS3 Mini mode
  (pan follow / lock / POV), the walk technique, Pocket 3 mode where used. No two-
  operator shots.
- The three weeks form an arc: Week 1 "Homecoming" (arrival, the house meets him, the
  fog and wonder), Week 2 "The Rhythm" (nights and days blur, feeds, tiny details,
  the cord falls, the crying begins), Week 3 "Waking Up" (longer alert windows, eye
  contact, first outing, the house has absorbed him). Each film stands alone but the
  titles/closing shots should rhyme across weeks.
- Cheap-gear recommendations live ONLY on the index (not repeated per guide): $100–300
  total, each item with what it fixes and roughly what it costs; guides may reference
  items ("if you picked up the 5-in-1 reflector…") but must work without them.
- Register: same warm, direct site voice — a knowledgeable friend on set, not a manual.
  Story first: every technical choice tied to the feeling it creates.

## Build plan

- [x] Spec (this file)
- [ ] `films` collection schema + `ShotDiagram.astro` + `/films` index + `/films/[slug]`
      template + nav + comments wiring
- [ ] Author week 1–3 guides (agents, per this spec)
- [ ] Later: `videoUrl` embeds as films are finished; more weeks if the rhythm sticks
