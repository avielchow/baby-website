/**
 * Standalone films for the Moments wall — videos that belong on Moments but
 * don't (yet) live inside a journal entry. Moments normally extracts media from
 * entry bodies; these are merged in on top, bucketed by `week` of life.
 *
 * When a video's week later gets a written journal entry that embeds the same
 * video, the entry's copy wins (dedup is by YouTube id) — safe to leave here.
 */
export interface MomentVideo {
  /** YouTube video id (the part after youtu.be/ or watch?v=). */
  id: string;
  title: string;
  /** Week of life to file it under (see weekLabel). */
  week: number;
}

export const MOMENT_VIDEOS: MomentVideo[] = [
  { id: 'SLrrx-Dvp4Q', title: 'Cody 4th Week!', week: 4 },
  // 'Cody Week 5-6 Non-Film' (kFGdZMiRf5A) now lives in the Week 6 journal entry
  // ("How Far We've Come"), which feeds Moments directly — removed here to avoid
  // showing it under both Week 5 (standalone) and Week 6 (entry).
];
