/**
 * The birth-anchor date. Until baby is born, this is the due date.
 * Update to the actual date of birth as soon as it's known — every "current
 * week" calculation across the site derives from this.
 */
// Anchored to Alberta local midnight (MDT, UTC-6) — the server runs in UTC,
// so a bare Z timestamp would flip the site to "born" 6 hours early.
export const BIRTH_ANCHOR = new Date('2026-07-15T00:00:00-06:00');

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

/**
 * 1-indexed day of life. Day 1 = the day of birth (Alberta-local, since
 * BIRTH_ANCHOR is anchored to Alberta midnight). Returns 0 if not yet born.
 */
export function currentDayNumber(now: Date = new Date()): number {
  if (isPreBirth(now)) return 0;
  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.floor((now.getTime() - BIRTH_ANCHOR.getTime()) / msPerDay);
  return days + 1;
}

/** 1-indexed month of life (month 1 = the first ~30 days). 0 if not yet born. */
export function currentMonthNumber(now: Date = new Date()): number {
  if (isPreBirth(now)) return 0;
  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.floor((now.getTime() - BIRTH_ANCHOR.getTime()) / msPerDay);
  return Math.floor(days / 30.4375) + 1;
}

/**
 * The week a given date belongs to, relative to birth.
 *   >= 1  → week of life (week 1 = the first 7 days after birth)
 *   -1    → the final week before birth (the 7 days up to the due date)
 *   -2,-3 → earlier prep weeks before birth
 */
export function weekForDate(d: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.floor((d.getTime() - BIRTH_ANCHOR.getTime()) / msPerDay);
  if (diffDays >= 0) return Math.floor(diffDays / 7) + 1;
  const daysBefore = Math.ceil((BIRTH_ANCHOR.getTime() - d.getTime()) / msPerDay);
  return -Math.ceil(daysBefore / 7);
}

/** Human label for a week number from weekForDate(). */
export function weekLabel(week: number): string {
  if (week >= 1) return `Week ${week}`;
  if (week === -1) return 'The final week before birth';
  return `${Math.abs(week)} weeks before birth`;
}

/** Days until birth anchor (0 if in the past). A partial day counts as 1. */
export function daysUntilBirth(now: Date = new Date()): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = Math.ceil((BIRTH_ANCHOR.getTime() - now.getTime()) / msPerDay);
  return Math.max(0, diff);
}
