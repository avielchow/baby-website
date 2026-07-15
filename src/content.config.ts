/*
 * Content collections for the baby website.
 *   weeks/   — one file per age week, e.g. week-01.md
 *   journal/ — dated journal entries, freeform posts
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const collectionLoader = (folder: string) =>
  glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${folder}` });

const bullet = z.object({
  title: z.string(),
  detail: z.string().optional(),
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
    /** Reference URLs the content was drawn from. */
    sources: z.array(z.object({
      label: z.string(),
      url: z.string().url().optional(),
    })).default([]),
    lastUpdated: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const journal = defineCollection({
  loader: collectionLoader('journal'),
  schema: z.object({
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
  }),
});

export const collections = {
  weeks,
  journal,
};
