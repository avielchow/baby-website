/**
 * The milestone journey — the vine's data (first two years).
 *
 * Tiers: 'major' = big blooms on the vine (photo lives in the petals),
 * 'minor' = small buds that unfurl on tap. `window` is months of age,
 * range-framed on purpose — wide windows, never deadlines (the cited,
 * evidence-based detail lives on the month/week pages each major links to).
 *
 * Marking one achieved (done in Claude sessions — "mark first-smile achieved
 * July 20 with photo <id>"): set `achieved: { date, photo?, note? }`.
 * `photo` is a capture photo id — the bloom renders /api/capture-photo/thumb-<id>.
 * Until then the bloom shows its placeholder glyph.
 */

export type Tier = 'major' | 'minor';

export interface Milestone {
  key: string;
  title: string;
  tier: Tier;
  /** Typical window, months of age: [from, to]. Layout position uses `from`. */
  window: [number, number];
  /** 1–2 sentences, range-framed, keepsake voice. */
  about: string;
  /** Placeholder art glyph (MilestoneGlyph key). */
  icon: string;
  /** Deep link to the cited guide page, where one exists. */
  link?: string;
  achieved?: { date: string; photo?: string; note?: string };
}

export const MILESTONES: Milestone[] = [
  // ---- 0–3 months ----
  {
    key: 'first-smile', title: 'The first smile', tier: 'major', window: [0, 2],
    about: 'Reflex grins come first; the true social smile — at a face, on purpose — usually arrives around six to eight weeks. Some babies preview it much earlier, in their own way.',
    icon: 'smile', link: '/weeks/',
    achieved: { date: '2026-07-20', note: 'For the car, day 3 — he was delighted every time we accelerated. Noted, son.' },
  },
  {
    key: 'lifts-head', title: 'Lifts that heavy head', tier: 'minor', window: [1, 2],
    about: 'In tummy time, the wobbly head starts to rise — the first rep of the core strength everything else is built on.',
    icon: 'sprout', link: '/weeks/',
  },
  {
    key: 'tracks-faces', title: 'Eyes that follow you', tier: 'minor', window: [1, 3],
    about: 'Faces become the favourite show: watching yours, following it as it moves, studying it like homework.',
    icon: 'eyes', link: '/weeks/',
  },
  {
    key: 'coos', title: 'First coos', tier: 'minor', window: [1, 3],
    about: 'Long "ooh" and "aah" strings — the opening notes of a conversation that never really stops.',
    icon: 'bubble', link: '/weeks/',
  },
  {
    key: 'hands-found', title: 'Discovers own hands', tier: 'minor', window: [2, 4],
    about: 'The hands drift into view and become fascinating — stared at, brought to the mouth, owned at last.',
    icon: 'hand', link: '/weeks/',
  },
  // ---- 3–6 months ----
  {
    key: 'first-laugh', title: 'The first real laugh', tier: 'major', window: [3, 4],
    about: 'Chuckles and squeals build until one day a full belly laugh escapes — routinely ranked among the best sounds parents ever hear.',
    icon: 'laugh', link: '/months/04/',
  },
  {
    key: 'grabs-toy', title: 'Reaches out and grabs', tier: 'minor', window: [3, 5],
    about: 'Hands become tools: swiping at danglers, then catching them — and everything caught goes straight to the mouth for study.',
    icon: 'grab', link: '/months/04/',
  },
  {
    key: 'rolls-over', title: 'Rolls over', tier: 'major', window: [4, 6],
    about: 'Usually tummy-to-back first, often looking entirely accidental — a big push-up tips over and surprises everyone, including the baby. Change tables are never safe again.',
    icon: 'roll', link: '/months/04/',
  },
  {
    key: 'babbles', title: 'Babbling begins', tier: 'minor', window: [4, 6],
    about: 'Consonants arrive — "ba", "da", "ma" — strung into speeches that mean nothing and everything.',
    icon: 'bubble', link: '/months/05/',
  },
  {
    key: 'knows-name', title: 'Turns to their name', tier: 'minor', window: [5, 9],
    about: 'Somewhere in here, "Cody" stops being a sound and starts being him — he turns when called.',
    icon: 'star', link: '/months/06/',
  },
  // ---- 6–9 months ----
  {
    key: 'sits-alone', title: 'Sits without support', tier: 'major', window: [6, 9],
    about: 'From tripod-propped to hands-free: sitting opens a whole new posture for play, meals, and surveying the household.',
    icon: 'sit', link: '/months/06/',
  },
  {
    key: 'first-food', title: 'First taste of real food', tier: 'major', window: [6, 7],
    about: 'Around the half-year mark, the first spoonful (or fistful) of solid food — a face worth photographing regardless of the verdict.',
    icon: 'spoon', link: '/months/06/',
  },
  {
    key: 'first-tooth', title: 'The first tooth', tier: 'major', window: [6, 10],
    about: 'The window is huge — some babies cut one at four months, some wave from their first birthday still gummy. The bottom front pair usually leads.',
    icon: 'tooth', link: '/months/07/',
  },
  {
    key: 'passes-hands', title: 'Passes toys hand to hand', tier: 'minor', window: [6, 8],
    about: 'A quiet dexterity milestone with big implications: two hands now cooperate on one project.',
    icon: 'grab', link: '/months/06/',
  },
  {
    key: 'stranger-wary', title: 'Knows who his people are', tier: 'minor', window: [6, 9],
    about: 'Stranger awareness arrives — a compliment in disguise: it means the bond with you is specific and irreplaceable.',
    icon: 'heart', link: '/months/07/',
  },
  // ---- 9–12 months ----
  {
    key: 'crawls', title: 'Crawling (or scooting, or rolling everywhere)', tier: 'major', window: [8, 10],
    about: 'Classic hands-and-knees, army crawl, bum scoot — the style matters far less than the newfound self-propelled freedom. Babyproofing graduates from theory to sport.',
    icon: 'crawl', link: '/months/09/',
  },
  {
    key: 'pincer-grasp', title: 'The pincer grasp', tier: 'minor', window: [9, 12],
    about: 'Thumb and forefinger team up on the smallest things — cereal puffs, lint, anything you dropped. Precision unlocked.',
    icon: 'hand', link: '/months/09/',
  },
  {
    key: 'pulls-to-stand', title: 'Pulls up to standing', tier: 'major', window: [9, 12],
    about: 'Furniture becomes gym equipment; cruising along the couch follows. The world is suddenly being surveyed from two feet up.',
    icon: 'stand', link: '/months/10/',
  },
  {
    key: 'waves-bye', title: 'Waves bye-bye', tier: 'minor', window: [9, 12],
    about: 'The first piece of social choreography — often delivered on a delay, to an already-closed door.',
    icon: 'wave', link: '/months/10/',
  },
  {
    key: 'claps', title: 'Claps hands', tier: 'minor', window: [9, 12],
    about: 'Applause arrives, usually for himself — correctly.',
    icon: 'clap', link: '/months/10/',
  },
  {
    key: 'first-word', title: 'The first word', tier: 'major', window: [10, 14],
    about: '"Mama" or "dada" said to the right person, on purpose — the moment babble becomes language. Expect heated family debate about what officially counts.',
    icon: 'word', link: '/months/12/',
  },
  {
    key: 'points', title: 'Points at what he wants', tier: 'minor', window: [10, 14],
    about: 'One finger, deployed with intent — a whole communication system before sentences exist.',
    icon: 'point', link: '/months/11/',
  },
  // ---- 12–18 months ----
  {
    key: 'first-steps', title: 'First steps', tier: 'major', window: [11, 15],
    about: 'A few drunken-sailor steps between two pieces of furniture, then the real thing. The window is famously wide — nine months to eighteen is all normal walking-start territory.',
    icon: 'steps', link: '/months/12/',
  },
  {
    key: 'drinks-cup', title: 'Drinks from a cup', tier: 'minor', window: [12, 15],
    about: 'Open-cup sips with help, then solo — a soggy but satisfying declaration of independence.',
    icon: 'cup', link: '/months/12/',
  },
  {
    key: 'stacks-blocks', title: 'Stacks two blocks', tier: 'minor', window: [13, 18],
    about: 'Engineering begins: one block on another, then a tower, then the even better game of knocking it down.',
    icon: 'blocks',
  },
  {
    key: 'uses-spoon', title: 'Wields a spoon', tier: 'minor', window: [13, 18],
    about: 'Self-feeding with actual cutlery — accuracy improves faster than cleanliness.',
    icon: 'spoon',
  },
  {
    key: 'scribbles', title: 'First scribbles', tier: 'minor', window: [15, 18],
    about: 'Crayon meets paper (and table, and wall): the very first artwork for the gallery wall upstairs.',
    icon: 'scribble',
  },
  {
    key: 'follows-directions', title: 'Follows simple directions', tier: 'minor', window: [14, 18],
    about: '"Bring me the ball" actually produces the ball — proof that comprehension runs far ahead of speech.',
    icon: 'star',
  },
  // ---- 18–24 months ----
  {
    key: 'runs', title: 'Running!', tier: 'major', window: [18, 24],
    about: 'Walking speeds up into a stiff-legged, joyful trot, then a proper run — and the daily step count of everyone in the house doubles.',
    icon: 'run',
  },
  {
    key: 'pretend-play', title: 'Pretend play begins', tier: 'major', window: [18, 24],
    about: 'Feeding a teddy, phoning grandma on a banana — imagination switches on, and the toy box becomes a theatre.',
    icon: 'pretend',
  },
  {
    key: 'kicks-ball', title: 'Kicks a ball', tier: 'minor', window: [18, 24],
    about: 'Standing on one leg long enough to swing the other: balance, coordination, and instant entertainment.',
    icon: 'ball',
  },
  {
    key: 'names-pictures', title: 'Names things in books', tier: 'minor', window: [18, 24],
    about: 'Story time turns interactive — pointing at the dog, the moon, the truck, and telling you exactly what they are.',
    icon: 'book',
  },
  {
    key: 'two-word-sentences', title: 'Two-word sentences', tier: 'major', window: [21, 26],
    about: '"More milk." "Daddy go." Grammar arrives in miniature, and from here the sentences never stop growing — or getting funnier.',
    icon: 'word',
  },
  {
    key: 'jumps', title: 'Tries to jump', tier: 'minor', window: [22, 27],
    about: 'Both feet leaving the ground (briefly, dramatically) — usually announced well in advance.',
    icon: 'jump',
  },
];

/** Month markers rendered along the vine. */
export const AGE_BANDS: { month: number; label: string }[] = [
  { month: 0, label: 'Hello, world' },
  { month: 3, label: '3 months' },
  { month: 6, label: 'Half a year' },
  { month: 9, label: '9 months' },
  { month: 12, label: 'One whole year' },
  { month: 18, label: '18 months' },
  { month: 24, label: 'Two!' },
];
