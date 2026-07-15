# Journal — Voice, Workflow, and Prompt System

> How journal entries get made. Claude: read this before drafting any entry.

## Voice

**Warm & reflective, blended with light & funny.** A letter you'd want to reread in 20 years
that also finds the comedy in the chaos. In practice:

- Present-tense noticing, emotionally honest, specific over general. The smile on a Tuesday
  at the 7am feed, not "she smiled this week."
- Humor comes from the situation, never at anyone's expense; self-deprecating is fine.
- One entry can hold both registers — tender paragraph, funny paragraph. Don't force either.
- **Never invent.** Every event, detail, and feeling comes from Aviel's raw notes. Cleaning
  means structure, flow, and polish — not embellishment. If a detail is missing (a time,
  who was there), ask; don't fabricate.
- Preserve Aviel's actual phrasings when they're good — the goal is his voice on its best
  day, not Claude's voice.
- No atmospheric scene-setting padding; get to the life. (Same register rule as other
  projects: direct and alive, not literary world-building.)

## Entry structure

Flexible, not a form. Default shape for a weekly entry:

1. **Title** — evocative, specific, never "Week 3 Update" (e.g. "Negotiations Have Broken
   Down", "The First Real Smile").
2. **Opening moment** — drop into one concrete scene from the week.
3. **The week's story** — 2–5 short sections; can include:
   - **Highlights** — the moments to keep.
   - **Firsts / new experiences** — always capture these explicitly; they're the archive's
     backbone. Tag them (`tags: ["first"]`) so a "Book of Firsts" page can collect them later.
   - **The hard parts** — honest, often where the humor lives.
   - **Reflection** — what this week changed in us.
4. **Closing line** — small, forward-looking or tender. Never a moral.

Frontmatter per `src/content.config.ts` journal schema (`title`, `date`, `teaser`, `tags`,
`draft`, `lastUpdated`). Common tags: `first`, `milestone`, `sleep`, `feeding`, `family`,
`funny`, `hard-week`, `letter-to-baby`.

## Workflow (every entry)

1. Aviel brain-dumps raw notes in a Claude Code session (typos, fragments, voice notes
   pasted — anything). Or asks for the week's prompt first.
2. Claude asks at most 2–3 short follow-ups if key details are missing or ambiguous.
3. Claude drafts the entry per this doc, shows the full draft in the session for approval.
4. On approval: write to `src/content/journal/YYYY-MM-DD-slug.md`, commit, push (auto-deploys).
5. Photos referenced get embedded (Blob URLs); videos as unlisted-YouTube embeds.

## Weekly prompts

Each week Claude offers **one prompt** — creative and specific, not "how was your week?"
Rotate across the five lenses below; adapt to the baby's current age and recent entries
(don't repeat a lens two weeks running; reference what's actually happening).

**Lens A — Time capsule / letters:** written to be opened later.
- "Write to her 18-year-old self about what she was like exactly this week."
- "What do you already want to make sure you never forget about this month? Not the big
  stuff — the texture: sounds, smells, the way the apartment feels at 3am."
- "Interview yourself from one year ago: what would pre-baby you most want to know?"

**Lens B — Tiny specifics:** force the small concrete details that die first in memory.
- "Describe her current sounds — the whole catalogue, from hungry squeak to fake cough."
- "The inventory: what's actually within arm's reach of the couch right now, and what does
  each item say about this era?"
- "One ordinary hour, minute by minute. Pick today's most boring hour and save it forever."

**Lens C — The two of you / family:** the parents' story, which is half the archive.
- "What's a thing your partner did this week that you want on the permanent record?"
- "What did you learn about your own parents this week, now that you're one?"
- "Grandparents met her this week — what did you see on their faces?"

**Lens D — Change & becoming:** reflection with teeth.
- "What's something you were sure about a month ago that turned out to be wrong?"
- "What part of pre-baby you is gone? Are you mourning it or glad?"
- "She can do a thing this week she couldn't last week. What can YOU do that you couldn't?"

**Lens E — Comedy hour:** the entry that's allowed to just be funny.
- "Write the week as a nature documentary narrated by David Attenborough."
- "The negotiation log: every deal you tried to strike with an infant this week, and the
  outcome of each."
- "Rank this week's diaper events. Yes, rank them. Posterity demands it."

Special entries (own timing, not weekly): **pre-delivery post** (first entry — the night
before everything changes), **birth announcement** (name reveal + site-wide rename),
monthly **letter to Baby** on each month-birthday, **Book of Firsts** roll-up page.

## Private journal (`/private`, `src/content/private/`)

Parents-only (Aviel + partner, shared second password). The rules differ in exactly one way:
**no audience.** Same structuring and cleaning treatment, same schema, but the register stays
unpolished-honest — fears, hard days, resentments, the 3am thoughts. Never soften, never
reframe for readers, never balance a hard entry with forced gratitude. Claude must never
reference private-entry content in public entries or anywhere else without explicit approval
from both parents. Default when Aviel doesn't specify which journal: ask if the content is
ambiguous; obviously-family material (milestones, cute stories) → public, obviously-raw
material (fears, conflict, health worries) → private. Promotion path: move the file from
`private/` to `journal/` (review the entry first — it was written without an audience).
Prompts: same five lenses work; when offering a private prompt, lean into D (becoming) and
the unaskable versions of C ("what are you not saying out loud this week?").

## Cleaning rules

- Fix grammar/typos silently; restructure freely; cut repetition.
- Keep dates, names, numbers exactly as given; convert relative dates ("yesterday") to
  absolute ones at publish time.
- British/Canadian spelling per Aviel's natural usage; don't Americanize.
- Length: whatever the material earns — 150-word weeks and 900-word weeks are both fine.
