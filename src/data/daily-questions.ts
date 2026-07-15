// Daily journal-prompt question bank.
//
// Maps a "day of life" number (day 1 = birth day) to 3 questions for that day,
// shown as the journal writing prompt and emailed each morning. Questions are
// addressed to the parent (Aviel) about his newborn daughter.
//
// Voice: warm & reflective blended with light & funny. Creative, specific,
// emotionally intelligent. Never generic, never clinical. Prompts blend the five
// journal lenses:
//   A — Time capsule / letters (written to be opened later)
//   B — Tiny specifics (the small details that die first in memory)
//   C — The two of you / family (the parents' story, half the archive)
//   D — Change & becoming (reflection with teeth)
//   E — Comedy hour (allowed to just be funny)

export interface DailyQuestions {
  day: number;
  questions: [string, string, string];
}

// Bespoke trios for specific days. Each trio blends lenses (one tender, one
// tiny-specific, one funny) and is written for the real texture of that exact
// day. Covers every day 1..30 plus milestone days.
const SPECIAL_DAYS: Record<number, [string, string, string]> = {
  // ── Week 1: birth, shock, no sleep, learning her ─────────────────────────
  1: [
    "Today she arrived. Write down the first face you made and the first word out of your mouth when you saw her — before you had time to decide what to feel.",
    "The first hold: where were your hands, how heavy was she really versus how heavy you expected, and what did the room sound like in that minute?",
    "Somewhere in this chaos a nurse said something, a machine beeped, someone cried at the wrong time. Log the one absurd detail from the most important day of your life.",
  ],
  2: [
    "Day two. The adrenaline is wearing off and it's just the three of you now. What does it feel like to be responsible for a person who can't do anything yet?",
    "Describe her hands. Just her hands — the size, the grip, what happens when you offer a finger. This detail will vanish first; catch it now.",
    "Rank the things nobody warned you about in the first 48 hours. Yes, rank them. The meconium goes somewhere on this list.",
  ],
  3: [
    "Write to her 18-year-old self about the person she was at three days old — before she had a single opinion about anything.",
    "What sound does she make when she's rooting for a feed? Write the whole tiny catalogue of noises you've collected so far.",
    "The first real sleep-deprivation delirium is arriving. What's the dumbest thought you've had at 3am this week, said out loud to no one?",
  ],
  4: [
    "You're learning her cues in real time — the difference between hungry, tired, and just-mad. What have you figured out that you were totally wrong about yesterday?",
    "What's within arm's reach of wherever you're feeding her right now? Inventory it. Each item is a fossil of this exact week.",
    "Narrate one diaper change today in the voice of a bomb-disposal technician. The stakes feel that high and you know it.",
  ],
  5: [
    "First pediatrician visit territory. What did it feel like to hand this fragile new person over to be weighed and measured and judged by a stranger?",
    "Describe the exact weight of her asleep on your chest right now versus the weight of your phone in your other hand. Which one are you actually holding.",
    "Your partner did something this week that made you love them differently. Put it on the permanent record before the fog eats it.",
  ],
  6: [
    "Six days in. What did pre-baby you assume these first days would be like, and how badly did reality laugh at that?",
    "The apartment at 4am: describe the light, the temperature, what's glowing, what's silent, the exact texture of this hour that you'll never be awake for again once she sleeps through.",
    "Write the negotiation log: every deal you tried to strike with her today to buy ten more minutes of sleep, and how each one went.",
  ],
  7: [
    "One week. If you could send a single sentence back to yourself in the delivery room seven days ago, what would you warn — or promise — them?",
    "The milk's in, the swelling's a lot, everyone's leaking something. Write the honest, unglamorous state-of-the-body report for the whole household.",
    "Describe her at her most furious this week. The full red-faced, fists-up meltdown. Now describe how quickly it evaporated the second you got it right.",
  ],
  // ── Week 2: the blur, cord stump, crying climbing ────────────────────────
  8: [
    "The first-week visitors have thinned out and it's quiet. What does it feel like now that it's just your little family finding its own rhythm?",
    "That cord stump. Describe it honestly — the look of it, how you feel every time you clean around it, the small dread of the belly button reveal.",
    "You've now said a sentence to another adult that would have made zero sense to you two weeks ago. Record the most unhinged one.",
  ],
  9: [
    "What's a thing you were certain about before she came — some parenting hill you'd die on — that already turned out to be nonsense?",
    "Her face while she sleeps: catalogue the expressions that cross it. The frowns, the smirks, the startle. None of it means anything yet and all of it is everything.",
    "Write today as a nature documentary. 'The male approaches the nest cautiously, unsure if the small creature is asleep or merely pretending.' Continue.",
  ],
  10: [
    "Ten days of parenthood. What part of the old you is already gone — and this morning, are you mourning it or glad to see it go?",
    "Describe the exact choreography of a 3am feed: who wakes first, who does what, the silent handoff, the thing that always goes slightly wrong.",
    "Rank this week's bodily-fluid surprises by degree of ambush. Posterity, and your laundry pile, demand the accounting.",
  ],
  11: [
    "Write her a note to open at 21: tell her about the first time she gripped your finger and wouldn't let go, and what that did to you.",
    "What does she smell like right now, at the top of her head? Try to actually describe it — you have a small window before you stop noticing.",
    "The crying is starting to climb into the fussy hours. Give the evening witching-hour a villain name and describe its powers.",
  ],
  12: [
    "You can do something today you couldn't do two weeks ago — swaddle in the dark, function on no sleep, whatever it is. What new skill has this person forced on you?",
    "The sounds of your home right now: the specific white noise machine track, the creak of the chair, the sound the bottle makes. Save the soundtrack of this era.",
    "Write the customer-service complaint you'd file about the fussy hours if newborns came with a support line. Be professional. Be furious.",
  ],
  13: [
    "What did you learn about your own parents this week, now that you're doing the job they did for you?",
    "Describe her startle reflex — the arms flying up like she's falling off the world. Now describe how you catch her back into the swaddle every time.",
    "If her cries had subtitles today, what were they actually saying? Translate the top three, no mercy for the drama.",
  ],
  14: [
    "Two weeks. Interview yourself from the day before she was born: what would that person be most shocked, relieved, or delighted to hear?",
    "One ordinary hour today, minute by minute. Pick the most boring stretch — a feed, a change, a stare-off — and preserve it exactly.",
    "You've developed at least one deranged new habit this fortnight. Sniffing, counting, narrating. Confess the strangest one to the record.",
  ],
  // ── Weeks 3–4: growth spurts, alert windows, smile watch ─────────────────
  15: [
    "Halfway to a month. What's surprised you most about who she seems to be turning into — the temperament peeking through already?",
    "The growth-spurt hunger is here and she's eating like it's a competition. Describe the marathon-feed face, the frantic little bird of it.",
    "Write the week as a two-star hotel review from her perspective. 'Staff attentive but slow. Room service arrives eventually. Would not check out.'",
  ],
  16: [
    "Her alert windows are getting longer — real awake time where she's studying the world. What does she stare at, and what do you imagine she's deciding about it?",
    "Describe the exact face she makes mid-feed when she's slowing down and drifting off — the drunk, milk-drunk surrender of it.",
    "You and your partner have invented private words for baby things by now. Log the household dictionary — the made-up terms only you two understand.",
  ],
  17: [
    "Write to her future self about a small ordinary moment from today that felt, for no reason you can explain, enormous.",
    "The inventory of the changing station: name everything on it and what each thing says about how deep into this you are now.",
    "Rank the parenting tasks you're weirdly good at versus catastrophically bad at. Be honest about where the swaddle falls.",
  ],
  18: [
    "What's a fear you had about being a father that, two and a half weeks in, has quietly turned out to be smaller than you thought?",
    "Describe her yawn. The whole production — the wind-up, the tiny roar, the aftershock. It's the best special effect in the house.",
    "Give a live sports commentary of tummy time today. 'And she's up — no, she's down. Bold effort. The crowd, one exhausted dad, goes mild.'",
  ],
  19: [
    "What did your partner do this week that you never want to forget — the unglamorous, 3am, no-one-was-watching kind of heroism?",
    "Her hands have found each other, or her mouth, or your shirt. Describe the newest thing those hands have learned to do.",
    "Write the passive-aggressive note the household would leave for whoever's on the next night shift. Sign it 'Management.'",
  ],
  20: [
    "Twenty days. What can YOU do now that you couldn't when she was born? Not the practical stuff — the internal thing that shifted.",
    "The quality of her cry has changed since week one. Describe how it's evolved — new notes, new demands, new little con artist tricks.",
    "Narrate the great swaddle escape in true-crime voice. 'She had one job: stay wrapped. By 2am, the containment had failed.'",
  ],
  21: [
    "Three weeks. Write down the thing about this exact era you already know you'll miss, even though right now you're too tired to feel it.",
    "The specific way she fits in the crook of your arm today — before she outgrows it. Get the geometry of it down on paper.",
    "If this week were a group chat between the three of you, paste the funniest imaginary message thread from a single sleepless night.",
  ],
  22: [
    "What's something you believed about yourself before she came that's turning out to be wrong — for better or worse?",
    "Describe the pre-smile: those almost-expressions, the gas-grin fakeouts that make your heart lurch before you remember what causes them.",
    "Rank your coping mechanisms this week from 'genuinely working' to 'that's just caffeine and denial.'",
  ],
  23: [
    "Write her a letter about her mother — what you've watched her become in three weeks, the thing you fell in love with all over again.",
    "The soundtrack of a good stretch of sleep in this house: what do you hear, and what's the one noise that makes you both freeze and check the monitor?",
    "Compose the Yelp review a newborn would leave for the milk. One star for wait times, five for taste. Elaborate.",
  ],
  24: [
    "What surprised you about how your own family showed up — or didn't — in these first weeks? What did you see on the grandparents' faces?",
    "Describe her eyes right now: the colour they're becoming, how long she'll hold your gaze, the exact moment she locks on and the floor drops out.",
    "Write the fake product recall notice for the 4pm fussy hour. List the symptoms, the affected units, and the total lack of a fix.",
  ],
  25: [
    "What's the version of parenthood you imagined, and how does the real thing — messier, funnier, more terrifying — actually compare?",
    "The tiny fashion: describe today's outfit and the three outfits before it, because the laundry velocity of this era is its own story.",
    "Give a weather report for the household mood over the last 24 hours. 'Scattered meltdowns clearing by dawn, with a 70% chance of coffee.'",
  ],
  26: [
    "Write to the her who's turning one someday: describe the person she is at not-quite-a-month, so you both remember where this all started.",
    "Describe the moment today when she was calm and content and looking at nothing — and you got to just watch her be a person for a second.",
    "Rank the lies you've told a newborn this week. 'Almost done,' 'I know, I know,' 'the milk's coming.' Which was your finest work?",
  ],
  27: [
    "What did you learn this week about patience — yours, your partner's, the kind you didn't know you had?",
    "The catalogue of her sounds now versus day one: what's new in the repertoire? The coos, the grunts, the fake cough, the outrage.",
    "Write the household's official press release announcing a full four-hour sleep stretch, if one ever occurs. Include a triumphant quote.",
  ],
  28: [
    "Four weeks. What's the biggest thing that's changed in you since the delivery room — the shift you didn't choose and can't undo?",
    "Describe how she's outgrowing something right now — a onesie, the newborn nappies, the curl she used to do. Catch the last of it.",
    "You are now fluent in a language with one speaker. Write today's most complex 'conversation' with her, fully subtitled.",
  ],
  29: [
    "Nearly a month. What ordinary thing about right now — a feed, a walk, a 3am stare — do you want to be able to time-travel back to?",
    "Describe the smile you're waiting for. Not the gas ones — the real one you know is coming any day. What do you imagine it'll do to you?",
    "Write the one-star review pre-baby you would have left on 'newborns' — then rebut it, point by point, as the person you are now.",
  ],
  30: [
    "One month. Write the letter you'd read at her wedding about who she was for these first thirty days and who you became keeping her alive.",
    "The month-one inventory: what's within reach right now, what's on every surface, what the apartment looks like — the exact archaeology of survival.",
    "You survived thirty days. Hand out the household awards: Best Performance in a Supporting Role, Most Dramatic Meltdown (any age qualifies), MVP.",
  ],

  // ── Milestone days ───────────────────────────────────────────────────────
  40: [
    "Nearly six weeks. The famous 'six-week smile' window is opening. If she's smiling on purpose yet, describe the first one — where, when, at what. If not, describe the almost.",
    "What can she do now that she couldn't at two weeks? Track the new tricks — the head that lifts a little longer, the eyes that follow further.",
    "Write the performance review you'd give yourself at six weeks in. Strengths, areas for growth, and one note from the client (she's non-verbal but opinionated).",
  ],
  50: [
    "Fifty days. If the real social smiles have arrived, write about what it's like to finally be smiled AT on purpose. If they're just starting, describe the hunt.",
    "Her personality is coming into focus. Describe the temperament you're seeing — the easy bits, the fierce bits, the bits that are clearly already hers.",
    "Rank the sounds she makes now from 'melts me instantly' to 'I have learned to fear this one.' Full colour commentary required.",
  ],
  60: [
    "Two months. Write to her 18-year-old self about who she is right now — coos, smiles, and all — before this version of her disappears into the next.",
    "The smiles and maybe the first coos are here. Describe a proper 'conversation' with her: the back-and-forth, the delight, the taking-turns of it.",
    "Vaccination-visit season. Write the open letter of apology you'd hand her for the shots, from the parent who has to hold her still and hate every second.",
  ],
  75: [
    "Seventy-five days. What's the everyday texture of life right now that you'd be sad to forget — the current normal, before it becomes the old normal?",
    "Describe her laugh, or the wind-up to it — the first chuckles or the almost-laughs that are clearly loading. What sets her off?",
    "Write the household's quarterly business update. Q1 highlights, ongoing challenges (sleep 'remains a focus area'), and the outlook for the next quarter.",
  ],
  90: [
    "Three months. The fourth-trimester fog is lifting. Write to yourself about who you are now versus the shell-shocked person from the delivery room.",
    "She's found her hands and maybe her voice. Describe the newest obsession — the thing she'll stare at, grab for, or shout at for no clear reason.",
    "Compose the acceptance speech she'd give for 'Most Improved' at three months. She'll thank the milk, the fan she loves, and possibly the ceiling.",
  ],
  100: [
    "One hundred days. In some traditions this is the day worth celebrating. Write down what it means to you that she's made it this far, and that you have too.",
    "Describe one hundred days in three tiny snapshots: a moment from the first week, one from a month in, and one from today. Watch the person appear.",
    "If day 100 came with an awards show, list the winners: Breakout Star, Best Sound Design, Lifetime Achievement in Napping (still vacant, obviously).",
  ],
  120: [
    "Four months. What's the thing she does now that you're certain is the start of her actual personality — the trait you'll recognise in her at twenty?",
    "Rolling, grabbing, drooling on an industrial scale. Describe the newest physical feat and the exact face she makes attempting it.",
    "Write the safety incident report for the first time she rolled somewhere she shouldn't, or grabbed something she shouldn't. Include 'lessons learned.'",
  ],
  150: [
    "Five months. Write her a letter about a specific thing you did together this week that felt like the beginning of the two of you actually hanging out.",
    "Solids might be on the horizon. Describe her fascination with your food — the reaching, the staring, the pure outrage at not being included yet.",
    "Rank the household's five most-repeated phrases right now. 'Who's a happy girl,' whatever the song is, the thing you say every single change. Own it.",
  ],
  180: [
    "Half a birthday. Write the mid-year letter: who she is at six months, and the six-month version of who you and your partner have become as parents.",
    "Describe her half-birthday self in tiny specifics — the weight of her now, the sounds, the way she sits or nearly sits, the newest favourite thing.",
    "Six months of diapers, feeds and 3am rallies. Write the household's half-year highlight reel as if narrating a triumphant sports montage.",
  ],
  200: [
    "Two hundred days. What's the ordinary daily ritual right now that you hope future-you remembers most — the small thing that IS this era?",
    "Describe how she's mobile or getting there — the scoot, the lunge, the plot to reach the one object she's not allowed to have.",
    "Write the villain origin story for whatever household object she has recently decided is the enemy. The vacuum, the hairdryer, the bib. Set the scene.",
  ],
  240: [
    "Eight months. She might be crawling, pulling up, babbling like she means it. Write to her future self about what her days sound like right now.",
    "Describe the newest 'word' — the babble that sounds almost like something. What do you hope it's the start of, and what do you pretend it means?",
    "Rank the objects in the house by how badly she wants them versus how much they are actually toys. The remote and the phone charger lead by a mile.",
  ],
  270: [
    "Nine months. She's been outside as long as she was inside. Write about that strange symmetry and who she's become on this side of it.",
    "Describe her current way of getting to you across a room — the specific, determined, ridiculous method she's invented. Save the choreography.",
    "Write the negotiation log again, nine months on: every deal you tried to strike this week and how a person who can now crawl away rated your offers.",
  ],
  300: [
    "Three hundred days. What's a thing she does now that would've been unimaginable to the you holding a two-day-old? Sit with how far you've both come.",
    "Describe her personality in full colour now — the humour, the stubbornness, the specific way she shows she loves you. She's a whole person; catch her.",
    "With one year in sight, write the household's 'previously, on this season' recap — the three-hundred-day story so far, cliffhanger ending optional.",
  ],
  365: [
    "One year. Write the letter to open on her eighteenth birthday: who she was at exactly one, and everything this impossible, ordinary year taught you about love.",
    "Describe her at one in tiny specifics — the words, the wobbly steps or the almost-steps, the foods she loves, the sound she makes when she's happiest.",
    "The full-year awards ceremony. Hand out every prize: Best New Human, biggest plot twist of the year, and the lifetime achievement award, which goes to the milk.",
  ],
};

// A large evergreen pool for all other days. Varied across the five lenses,
// each a strong standalone prompt. No medical content, no dates.
const POOL: string[] = [
  // Lens A — Time capsule / letters
  "Write a note to her 18-year-old self about who she is this week — the parts you're sure will still be true.",
  "What do you want to make sure you never forget about right now? Not the milestones — the texture: the sounds, the smells, how the apartment feels at 3am.",
  "Interview yourself from one year ago. What would pre-baby you most want to know about this moment?",
  "Write her a letter to open on a hard day years from now, about how loved she is tonight.",
  "Describe today to the version of her who won't remember any of it. Make her jealous of her own baby life.",
  "If you could preserve exactly one minute from this week in amber, which minute — and why that one?",
  "Write down a promise to her that you actually intend to keep, and one you already suspect you'll break.",
  "Tell her future self about a fear you have for her right now, and the thing you're going to do about it.",
  "What's the family story you hope gets told about this exact week when she's grown?",
  "Write the tiny, unremarkable moment from today that you'd fight to keep if you could only keep one.",
  "Describe the world she was born into this week — the news, the weather, the price of things — so she knows the backdrop.",
  "Write her a letter about the first time you realised she was watching you, learning you, copying you.",
  "What do you want her to know about who her parents were, back before she made them into these people?",
  "Leave a note for the you who reads this in ten years: what's true today that you're afraid you'll forget?",
  // Lens B — Tiny specifics
  "Describe her current sounds — the whole catalogue, from hungry squeak to fake cough to outraged bellow.",
  "The inventory: what's within arm's reach of the couch right now, and what does each item say about this era?",
  "One ordinary hour, minute by minute. Pick today's most boring hour and save it forever.",
  "Describe her hands today — the size against your finger, the grip, what they've just learned to do.",
  "What does the top of her head smell like? Try to actually put it into words before you stop noticing.",
  "Describe the exact face she makes right before she cries — the wind-up, the warning signs, the point of no return.",
  "What's she wearing right now, and what were the two outfits before it? The laundry velocity is its own story.",
  "Describe her weight asleep on your chest. The specific heaviness of a person who trusts you completely.",
  "Describe her feet. Just her feet. You will not believe how small they were, so write it down now.",
  "What's the exact texture of the 3am feed right now — the light, the temperature, the silence, the routine of it?",
  "What's on every surface of the main room right now? Do a full archaeological survey of this week's chaos.",
  "Describe her yawn in full — the wind-up, the tiny roar, the aftershock. Best special effect in the house.",
  "The colour of her eyes this week, how long she'll hold your gaze, the moment she locks on. Record it.",
  "Describe the specific way she fits against you right now, before she outgrows this exact shape.",
  // Lens C — The two of you / family
  "What's something your partner did this week that you want on the permanent record?",
  "What did you learn about your own parents this week, now that you're one?",
  "Describe a moment this week when you and your partner were a genuinely good team. Give them the credit in writing.",
  "What's a small kindness your partner showed you this week that no one else would ever have noticed?",
  "Write about the version of your partner that only exists at 3am, holding a baby, that you fell for all over again.",
  "What did you see on a grandparent's face when they held her, and what do you think they were remembering?",
  "Describe the three of you as a unit right now — the little country you've become, its customs and inside jokes.",
  "What's a thing your parents did for you that you only now understand, because you're doing it yourself?",
  "Write about a friend who showed up for you this week in a way you won't forget.",
  "What's the private language you and your partner have invented for baby things? Record the household dictionary.",
  "Describe the last time you and your partner laughed together until it hurt. What set it off?",
  "What's the thing you and your partner disagree on about parenting, and where did you each land this week?",
  "Write about watching your partner become a parent — the moment you saw them transformed into someone new.",
  "Who in the family does she look like today? The verdict changes weekly; log this week's ruling and the debate.",
  // Lens D — Change & becoming
  "What's something you were sure about a month ago that turned out to be completely wrong?",
  "What part of pre-baby you is gone? Are you mourning it or glad to see it go?",
  "She can do something this week she couldn't last week. What can YOU do that you couldn't?",
  "What's a fear about being a parent that has quietly turned out to be smaller than you thought?",
  "What surprised you most about who she's becoming — the personality that's starting to show through?",
  "What's the hardest thing about right now that you suspect you'll be weirdly nostalgic for later?",
  "How has your sense of time changed since she arrived? The days, the nights, what an hour even means now.",
  "What did you used to think mattered that you've quietly stopped caring about this week?",
  "Describe the person you're becoming as a parent. Do you like them? What would you change?",
  "What's a value you didn't know you had until you had to decide how to raise her by it?",
  "What's something that used to stress you out that seems almost funny now, on the other side of this?",
  "Where did you find patience you didn't know you had this week — and where did you run completely out?",
  "What's the thing about your old life you thought you'd miss that you don't miss at all?",
  "How is she changing your relationship with your own body, your own limits, your own idea of enough?",
  // Lens E — Comedy hour
  "Write this week as a nature documentary narrated by David Attenborough. 'The infant stirs. The male panics.'",
  "The negotiation log: every deal you tried to strike with her this week, and the outcome of each.",
  "Rank this week's diaper events. Yes, rank them. Posterity demands the accounting.",
  "Write the one-star review she'd leave for the milk, the crib, or you. Be specific about the complaints.",
  "Give a live sports commentary of tummy time. 'She's up — no, she's down. Bold effort. The crowd goes mild.'",
  "Write the passive-aggressive note the household would leave for whoever's on the next night shift.",
  "Compose the household weather report for the last 24 hours. 'Scattered meltdowns clearing by dawn.'",
  "Translate her three loudest cries this week into subtitles. Show no mercy for the drama.",
  "Write the customer service complaint you'd file about the fussy hours if newborns had a support line.",
  "Narrate the great swaddle escape in true-crime voice. 'She had one job: stay wrapped.'",
  "Write the fake product recall for this week's most malfunctioning hour of the day. List the symptoms.",
  "Hand out this week's household awards: Most Dramatic Meltdown, Best Supporting Parent, MVP.",
  "Give her a villain origin story for the household object she has recently declared her sworn enemy.",
  "Write the group chat between the three of you from a single sleepless night. Paste the funniest thread.",
  "Compose the acceptance speech she'd give for 'Most Improved.' She'll thank the milk and possibly the ceiling.",
  "Write the household's official press release announcing this week's one small victory. Include a proud quote.",
];

// Deterministic: SPECIAL_DAYS[day] if present, else pick 3 distinct pool
// questions seeded by `day` so consecutive days don't repeat and it's stable
// per day. Always returns exactly 3 distinct strings; never throws for day >= 1.
export function questionsForDay(day: number): [string, string, string] {
  const special = SPECIAL_DAYS[day];
  if (special) return special;

  const n = POOL.length;
  // Base index from the day; the three picks are spread across the pool and
  // guaranteed distinct because the offsets (0, step, 2*step) stay within one
  // wrap and step is chosen coprime-ish to n so they never collide.
  const base = ((day * 3) % n + n) % n;
  const step = Math.floor(n / 3); // 24 for n=72 → picks are well spread
  const i0 = base;
  const i1 = (base + step) % n;
  const i2 = (base + 2 * step) % n;

  return [POOL[i0], POOL[i1], POOL[i2]];
}
