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
  { id: 'kFGdZMiRf5A', title: 'Cody Week 5-6 Non-Film', week: 5 },
];
