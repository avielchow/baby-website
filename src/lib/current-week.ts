/**
 * The birth-anchor date. Until baby is born, this is the due date.
 * Update to the actual date of birth as soon as it's known — every "current
 * week" calculation across the site derives from this.
 */
export const BIRTH_ANCHOR = new Date('2026-07-15T00:00:00Z');

/** Return true if `BIRTH_ANCHOR` is still in the future (baby not born yet). */
export function isPreBirth(now: Date = new Date()): boolean {
  return now.getTime() < BIRTH_ANCHOR.getTime();
}

/**
 * 1-indexed week of life. Week 1 = the first 7 days after birth.
 * Returns 0 if baby is not yet born.
 */
export function currentWeekNumber(now: Date = new Date()): number {
  if (isPreBirth(now)) return 0;
  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.floor((now.getTime() - BIRTH_ANCHOR.getTime()) / msPerDay);
  return Math.floor(days / 7) + 1;
}

/** Days until birth anchor (0 if in the past). */
export function daysUntilBirth(now: Date = new Date()): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = Math.floor((BIRTH_ANCHOR.getTime() - now.getTime()) / msPerDay);
  return Math.max(0, diff);
}
