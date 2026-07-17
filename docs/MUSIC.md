# Music — Weekly Piano Progressions

> Spec for the Music section: a weekly pop chord progression to improvise piano over,
> built for a classically-trained player (10 years) with weak theory who wants
> Wicked-"For Good" / Yiruma-flavored harmony, better left-hand patterns, and more
> inspired melodies — lullaby-adjacent, played for the baby. Decided 2026-07-17 via Q&A.
> Claude: read this before touching `src/content/music/`, the piano components, or /music.

## The decisions

- **Format: one progression per week, full toolkit.** Each week teaches ONE great
  progression deeply, plus that week's LH pattern, melody technique, theory bite,
  practice recipe, and a reference listen. Everything on the page connects.
- **Display: SVG keyboard diagrams + symbols.** Every voicing drawn on a keyboard
  (color-coded: root / chord tones / color notes), with chord symbols + roman numerals.
  No staff notation required anywhere.
- **Playback: yes.** Tap any chord to hear its exact voicing; a loop button plays the
  progression in time (WebAudio synth, no external services) to improvise over.
- **Ramp: gentle (~20 min/day recipes), but never trivial** — no bare I–IV–V weeks.
  Color arrives immediately (add9, sus, slash chords, 7ths) and compounds: extended
  chords → appoggiaturas/suspensions as melody tools → borrowed chords (iv, ♭VII) →
  secondary dominants → key color changes. Skips what a 10-year player finds boring;
  explains what weak theory never named.
- Reference palette: "For Good" (stepwise bass, add9s, suspensions), Yiruma (arpeggiated
  waves, 1–5–10 spreads, motif+sequence melodies). Register: same warm site voice —
  a friend at the piano, not a textbook.

## Routing & structure

- `/music/` — index: what this is, the week cards, and a standing "how to use a week"
  primer (tap chords → learn voicings → LH pattern → loop + improvise → melody seeds).
- `/music/week-N` — the weekly page, in order: intro prose (body) → **Listen** (the
  reference song, verified YouTube embed) → **The progression** (chord cards: symbol,
  roman numeral, keyboard diagram, tap-to-play, why-it-works, the color notes named) →
  loop player (tempo shown) → **Left hand of the week** → **Melody workshop** (technique
  + 3 seed phrases) → **Theory bite** → **Practice recipe (~20 min)** → comments
  (`pageId: music-N`).
- Nav: **"Music"** tab. Family-visible (normal gate).

## Content model (`music` collection)

Frontmatter (zod source of truth in `content.config.ts`):

- `week`, `title`, `key` (e.g. "C major"), `tempo` (BPM for the loop), `vibe` (one line),
  `listen: {title,url,channel}` (VERIFY title+channel via the site's curl rule),
  `lastUpdated`, `draft`.
- `progression`: `{ summary: "C – G/B – Am7 – Fadd9", chords: [...] }`, each chord:
  - `symbol` ("G/B"), `roman` ("V⁶"), `bass` ("B2" — the LH anchor note),
  - `notes` (RH voicing as scientific pitch, e.g. ["G3","B3","D4"]),
  - `color` (subset of notes that are the color/non-chord tones, e.g. ["D4"] on add9),
  - `why` (1–3 sentences: what this chord is doing, where the color lives).
- `lh`: `{ name, description, steps: string[], pattern }` — `pattern` is the note
  sequence for ONE bar over the first chord (e.g. "C2 G2 E3 G2 · C2 G2 E3 G2"), so the
  page can show it and the player can voice it.
- `melody`: `{ technique, description, tools: string[], seeds: [{name, phrase, tip}] }` —
  `phrase` in note names with the harmonic context ("over Am7: E4 D4 C4 B3 → land C4").
- `theory`: `{ title, points: string[] }` — the 5-minute bite, cumulative week to week.
- `practice`: `[{ minutes, what }]` totalling ~20.

## Components

- **`PianoChord.astro`** — a 2-octave SVG keyboard. Props: `notes`, `bass`, `color`,
  `label`. Highlights: bass = deep sage, chord tones = sage, color notes = rose.
  Note names rendered under highlighted keys. Pure SVG, site palette.
- **Playback (`music-player` script on the week template)** — WebAudio only:
  a soft piano-ish voice (2 detuned triangle oscillators + lowpass + fast-attack/long
  exponential decay envelope). Chord cards carry `data-notes`/`data-bass`; tap plays the
  voicing (bass + RH). Loop: plays the progression one chord per bar at `tempo`, looping
  until stopped; button shows state. All client-side, no assets, works offline.

## Authoring rules

- Voicings must sit under real hands (≤ an octave RH span unless noted; bass playable
  by LH alone) and every color note must be NAMED as what it is (the 9, the sus4, the
  7th) — the theory is taught by labeling, not lecturing.
- Roman numerals always shown but never required to proceed.
- Melody seeds are STARTERS (3 short phrases max) — the point is the player's own tune.
- The listen embed follows the site video rule: curl-verify title + channel.
- Weeks build: later weeks may reference earlier vocabulary ("the add9 from week 1")
  but every page stands alone enough to jam from.

## Scope & plan

- [x] Spec (this file)
- [ ] Schema + PianoChord + playback + /music index + /music/[slug] + nav "Music"
- [ ] Weeks 1–2 as the sample pair:
  - **Week 1 — "The Descending Line"**: C – G/B – Am7 – Fadd9 (I–V⁶–vi⁷–IVadd9), the
    stepwise-bass pop heart with color from bar one. LH: the 1–5–10 spread. Melody:
    chord-tone targets + passing tones. Theory: what add9/sus/slash chords actually are.
  - **Week 2 — "The Axis, Recolored"**: Am9 – Fmaj7 – C/E – Gsus4→G (vi⁹–IVmaj⁷–I⁶–V),
    the emotional pop axis with grown-up colors. LH: the six-note arpeggio wave (1–5–8–
    10–8–5) + pedal. Melody: motif + sequence, and the appoggiatura. Theory: 9ths,
    maj7s, and why a "wrong" note resolved sounds expensive.
- [ ] Later weeks continue the ramp (borrowed iv, ♭VII, secondary dominants, new keys).
