export type ScheduleDay = {
  id: string;
  /** e.g. "Day 1". */
  label: string;
  /** e.g. "August 14". */
  date: string;
  /** e.g. "2:00 – 6:00 PM". */
  timeRange: string;
  /** Marks the main event day for emphasis. */
  isMain?: boolean;
  sessions: string[];
};

export type BibleQuiz = {
  title: string;
  blurb: string;
  /** Small urgency tag rendered in Signal Red-Orange. */
  prizeTag: string;
};

// Two-day timetable + the Bible Quiz feature. Swap for the final run of show
// later — ScheduleSection reads this shape.
export const scheduleDays: ScheduleDay[] = [
  {
    id: "day-1",
    label: "Day 1",
    date: "August 14",
    timeRange: "2:00 – 6:00 PM",
    sessions: ["Doors & welcome", "Worship", "Opening word", "Connect"],
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "August 15",
    timeRange: "8:00 AM – 4:00 PM",
    isMain: true,
    sessions: [
      "Worship",
      "Bible study",
      "Skill sessions — AI & Tech, Design",
      "Bible Quiz competition",
      "Closing celebration",
    ],
  },
];

export const bibleQuiz: BibleQuiz = {
  title: "Bible Quiz Competition",
  blurb:
    "Know your Bible? Put it to the test. Teams go head to head on Day 2 — and there's a prize for the winners.",
  prizeTag: "Win a prize",
};
