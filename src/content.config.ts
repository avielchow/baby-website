/*
 * Content collections for the baby website.
 *   weeks/   — one file per age week, e.g. week-01.md
 *   journal/ — dated journal entries, freeform posts
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const collectionLoader = (folder: string) =>
  glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${folder}` });

/** A single source citation, rendered as an inline linked chip on the item. */
const sourceRef = z.object({
  /** Short org label for the chip: CPS, AAP, CDC, Nemours, AHS, LLLI, PURPLE… */
  label: z.string(),
  url: z.string().url().optional(),
});

const bullet = z.object({
  title: z.string(),
  detail: z.string().optional(),
  /** Inline citations for THIS claim — exact pages, not homepages. */
  sources: z.array(sourceRef).default([]),
  /** Optional how-to video, rendered as a click-to-load YouTube embed card. */
  video: z
    .object({
      title: z.string(),
      url: z.string().url(),
      channel: z.string(),
    })
    .optional(),
});

/** Topical diagram placements: which diagram renders after which section. */
const diagramRef = z.object({
  key: z.enum(['safe-sleep', 'diaper-dashboard', 'crying-curve', 'hunger-cues', 'tummy-time']),
  section: z.enum(['milestones', 'todos', 'feeding', 'sleep', 'redFlags', 'also']),
});

/**
 * A "what to buy" gear item for the stage (CONTENT.md § Gear & essentials):
 * the category, why it matters now + buying criteria, top-3 brands, and a
 * how-to-USE video. Opinions, not clinical guidance — rendered separately.
 */
const gearItem = z.object({
  /** Category, not one product: "Infant car seat", "Swaddle". */
  item: z.string(),
  /** Why it matters now + what to look for when choosing. */
  why: z.string(),
  /** Top 3 (max), each with an honest line, pros/cons, and a link to the maker. */
  brands: z
    .array(
      z.object({
        name: z.string(),
        note: z.string().optional(),
        /** Link to the product/brand's own site (not affiliate). */
        url: z.string().url().optional(),
        pros: z.array(z.string()).default([]),
        cons: z.array(z.string()).default([]),
      })
    )
    .max(3)
    .default([]),
  /** How-to-USE video (install/wrap/fit) — verified title + channel. */
  video: z
    .object({ title: z.string(), url: z.string().url(), channel: z.string() })
    .optional(),
  /** Required for any safety claim (car seat → Transport Canada/AHS/AAP). */
  sources: z.array(sourceRef).default([]),
});

const weeks = defineCollection({
  loader: collectionLoader('weeks'),
  schema: z.object({
    /** 1-indexed week of life. Week 1 = first 7 days after birth. */
    weekNumber: z.number().int().min(0).max(104),
    /** Short display title for the week, e.g. "The first days" */
    title: z.string(),
    /** One-sentence orientation shown under the H1. */
    description: z.string().optional(),
    milestones: z.array(bullet).default([]),
    todos: z.array(bullet).default([]),
    feeding: z.array(bullet).default([]),
    sleep: z.array(bullet).default([]),
    /** When to worry vs. what's normal. */
    redFlags: z.array(bullet).default([]),
    /** Free-form additional notes; rendered as bullets under "Also worth knowing". */
    alsoWorthKnowing: z.array(bullet).default([]),
    /** The stage's key purchases: top-3 brands + how-to video. Opinions, not clinical. */
    gear: z.array(gearItem).default([]),
    /** Topical SVG diagrams to render after specific sections. */
    diagrams: z.array(diagramRef).default([]),
    /** Full bibliography (page-level); items also cite inline via `sources`. */
    sources: z.array(z.object({
      label: z.string(),
      url: z.string().url().optional(),
    })).default([]),
    lastUpdated: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Monthly guide (months 4–12), adapted for older babies (see docs/MONTHLY.md).
 * Reuses the same bullet/gear/diagram/source pieces as weeks; sections differ.
 */
const months = defineCollection({
  loader: collectionLoader('months'),
  schema: z.object({
    /** Month of life, 4–12 (month 1 = the first month). */
    monthNumber: z.number().int().min(1).max(24),
    title: z.string(),
    description: z.string().optional(),
    /** By domain (motor/social/language/feeding/sleep), range-framed. Feeds the timeline. */
    milestones: z.array(bullet).default([]),
    /** What they're learning + how to engage it. */
    developmentAndPlay: z.array(bullet).default([]),
    feeding: z.array(bullet).default([]),
    sleep: z.array(bullet).default([]),
    /** Babyproofing/safety scaling with mobility. */
    safetyOnTheMove: z.array(bullet).default([]),
    /** Well-child visit + vaccines + growth for the month. */
    healthAndCheckups: z.array(bullet).default([]),
    redFlags: z.array(bullet).default([]),
    alsoWorthKnowing: z.array(bullet).default([]),
    gear: z.array(gearItem).default([]),
    diagrams: z.array(diagramRef).default([]),
    /** Links to deep-dive topic pages relevant this month (topics collection slugs). */
    topics: z.array(z.string()).default([]),
    sources: z.array(z.object({
      label: z.string(),
      url: z.string().url().optional(),
    })).default([]),
    lastUpdated: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

/** Deep-dive topic pages (Starting Solids, the 4-Month Sleep Shift, …). Markdown body. */
const topics = defineCollection({
  loader: collectionLoader('topics'),
  schema: z.object({
    title: z.string(),
    /** One-line teaser for the hub/index. */
    teaser: z.string().optional(),
    /** Age range shown as an eyebrow, e.g. "Around 6 months". */
    ageRange: z.string().optional(),
    /** Ordering on the topics index. */
    order: z.number().default(0),
    sources: z.array(z.object({
      label: z.string(),
      url: z.string().url().optional(),
    })).default([]),
    lastUpdated: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const journalSchema = z.object({
  title: z.string(),
  /** Date the entry describes (used for sorting + display). */
  date: z.coerce.date(),
  /** Optional 1–2 sentence teaser shown on the index. */
  teaser: z.string().optional(),
  /** Optional tags, e.g. ["milestone", "sleep", "family"] */
  tags: z.array(z.string()).default([]),
  /** Set true while a post is being drafted; hidden from the index. */
  draft: z.boolean().default(false),
  lastUpdated: z.coerce.date(),
});

const journal = defineCollection({
  loader: collectionLoader('journal'),
  schema: journalSchema,
});

// The private journal is archived (see _private-archive/RESTORE.md), removed
// while the GitHub repo is public. journalSchema is kept shared so restoring
// the `private` collection is a one-line re-add.

export const collections = {
  weeks,
  months,
  topics,
  journal,
};
