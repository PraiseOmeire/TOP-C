export type ConferenceDetails = {
  label: string;
  themeYearLabel: string;
  theme: string;
  scripture: string;
  description: string;
  dateLabel: string;
  location: string;
  /** ISO datetime the countdown ticks toward. */
  targetDateISO: string;
};

// Placeholder conference details for the homepage's Conference + Countdown
// section. Swap this for CMS/config-sourced data later — every consumer
// (ConferenceSection, Countdown) reads this same shape.
export const conferenceDetails: ConferenceDetails = {
  label: "This Year's Conference",
  themeYearLabel: "Theme 2026",
  theme: "Rising Army",
  scripture:
    "The Lord thunders at the head of His army; His forces are beyond number.",
  description:
    "A generation rising to know God, discover purpose, and carry His fire into the world.",
  dateLabel: "August 14 & 15, 2026",
  location: "Galine Road, Magboro, Ogun State",
  // Day 1 starts at 2 PM (see content/schedule.ts) — the countdown ticks to that.
  targetDateISO: "2026-08-14T14:00:00+01:00",
};
