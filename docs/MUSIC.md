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
- [x] Schema + PianoChord + playback + /music index + /music/[slug] + nav "Music"
- [x] Weeks 1–2 (the sample pair): "The Descending Line" (C–G/B–Am7–Fadd9; 1–5–10 spread;
  chord-tone melody; slash/7th/add9 theory) · "The Axis, Recolored" (Am9–Fmaj7–C/E–Gsus4→G;
  six-note wave; motif+sequence+appoggiatura; 9ths/maj7s).
- [x] **Weeks 3–14 shipped 2026-07-23** — the full ramp, one device per week, every
  listen curl-verified against its official channel:
  - **3 — "Tension You Can Trust"**: Dm7–G7sus4–G7–Cadd9 (ii–V–I + the 4–3 suspension).
    LH heartbeat (1–5–8). Listen: Someone Like You.
  - **4 — "The Borrowed Rain"**: Cadd9–F–Fm6–C (borrowed iv). LH slow bloom. Listen: Creep.
  - **5 — "The Backdoor Sun"**: C–B♭add9–F/A–C (♭VII, Mixolydian). Anthem pulse;
    pentatonic melody. Listen: Hey Jude.
  - **6 — "The Rented Spotlight"**: C–E7–Am7–Fadd9 (secondary dominant V/vi). Walking-thumb
    bass; chromatic neighbor. Listen: Can't Help Falling in Love.
  - **7 — "The Long Way Home"**: Em7–Am7–Dm7–G7 (circle of fifths). Shell voicings;
    guide-tone lines. Listen: Fly Me to the Moon.
  - **8 — "Same Song, New Light"**: G–D/F♯–Em7–Cadd9 (week 1 transposed; transposition
    craft). Broken-10th LH. Listen: Kiss the Rain.
  - **9 — "The Lament"**: Am–Am/G–Fmaj7–E7 (A minor, lament bass, harmonic-minor V).
    Tolling octaves. Listen: While My Guitar Gently Weeps.
  - **10 — "The Still Point"**: C–F/C–G/C–Cadd9 (tonic pedal point). Pedal toll; ostinato
    melody. Listen: Clocks.
  - **11 — "One Line, Falling Slowly"**: C–Cmaj7–C7–F–Fm6 (line cliché C–B–B♭–A–A♭;
    V7/IV). Counter-line melody. Listen: Something.
  - **12 — "The Lift"**: C–Am7–D7/F♯–Gsus4–G (V/V, pivot-chord modulation C→G).
    Listen: I Will Always Love You.
  - **13 — "The Oldest Lullaby"**: C–G–Am–Em–F–C–F–G (Pachelbel wheel in C; ground bass;
    variations). Listen: Canon in D (Voices of Music).
  - **14 — "All of It, For Cody"** (capstone): C–G/B–Am7–C/G–Fadd9–Fm6–Gsus4–G7 —
    eight bars combining the course; LH chosen from the toolkit; melody assignment =
    compose and write down Cody's theme. Listen: Nuvole Bianche.
- [x] **Season two, weeks 15–26 shipped 2026-07-23** — the connections between the chords
  (passing tones, substitutes, modes, meters), listens curl-verified:
  - **15 — "The Sparkle Between"**: C–C♯dim7–Dm7–G7 (passing diminished; chromatic walk-up).
    Listen: Ain't Misbehavin' (Fats Waller).
  - **16 — "The Line That Climbs"**: C–Caug–C6–C7–F (ascending cliché, augmented chords,
    voicing an inner line). Listen: Michelle.
  - **17 — "The Wonder Note"**: Cadd9–D/C–Fmaj7♯11 (Lydian, the ♯4; floating pedal).
    Listen: One Summer's Day (Hisaishi).
  - **18 — "Nines, Everywhere"**: Cmaj9–Am9–Dm9–G9 (full ninth taxonomy + the voicing
    rule). Listen: May Be (Yiruma).
  - **19 — "The Minor Sentence"**: Bm7♭5–E7♭9–Am9–Am (minor ii–V–i, ø7, ♭9). Listen:
    Autumn Leaves (Eva Cassidy).
  - **20 — "The Preacher's Chord"**: Cmaj7–Am9–Dm7–F/G (the 11 chord, gospel pulse,
    grace notes). Listen: Isn't She Lovely.
  - **21 — "The Hopeful Minor"**: Am9–Cmaj7–D–Am (Dorian, drones, modal melody).
    Listen: Scarborough Fair.
  - **22 — "The Rock-a-Bye Turnaround"**: C–Am7–Fadd9–G7 in 12/8 (compound time, the
    doo-wop changes, triplet roll). Listen: Hallelujah (Jeff Buckley).
  - **23 — "The Promise, Postponed"**: 8 bars, C–F–G7–Am–F–C/E–G7–C (deceptive cadence,
    double approach). Listen: Somewhere Over the Rainbow (IZ).
  - **24 — "Sunshine After Rain"**: Cmaj7–Fm7–B♭9–Cmaj9 (the backdoor cadence — weeks
    4+5 revealed as one device). Listen: The Christmas Song (Nat King Cole).
  - **25 — "The Flat Side"**: Dm7–B♭maj7–F/A–Csus4–C in F major (flat-key geography,
    Einaudi broken-octave pulse; the axis's third key). Listen: Una Mattina.
  - **26 — "Season Two, For Cody"** (capstone): Cmaj9–C♯dim7–Dm9–G13–Em7–A7♭9–Dm7–F/G —
    the 13 completes the extension tower; assignment = reharmonize Cody's theme.
    Listen: Merry-Go-Round of Life (Hisaishi).
- [ ] Beyond week 26 (when wanted): altered dominants (♯5/♯9), tritone substitution,
  diminished-scale colors, remaining modes (Phrygian, Aeolian deep-dive), more keys
  (B♭, E♭), stride and bossa left hands, sight-reading the songbook.
