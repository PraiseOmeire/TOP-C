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

// The two-day timetable. ScheduleSection reads this shape.
export const scheduleDays: ScheduleDay[] = [
  {
    id: "day-1",
    label: "Day 1",
    date: "August 14",
    timeRange: "2:30 – 6:00 PM",
    sessions: [
      "2:30 – 2:40pm — Prayer",
      "2:40 – 2:55pm — Praise & worship",
      "2:55 – 3:00pm — Welcome address",
      "3:00 – 3:05pm — Networking",
      "3:05 – 4:05pm — Talk 1",
      "4:05 – 4:50pm — Talk 2",
      "4:50 – 5:20pm — Question & answer",
      "5:20 – 5:50pm — Prayer",
      "5:50 – 6:00pm — Benediction",
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "August 15",
    timeRange: "8:30 AM – 5:00 PM",
    isMain: true,
    sessions: [
      "8:30 – 9:00am — Arrival",
      "9:00 – 9:15am — Prayer",
      "9:15 – 9:30am — Praise & worship",
      "9:30 – 10:15am — Bible study",
      "10:15 – 11:45am — Review",
      "11:45am – 1:00pm — Exhortation / question & answer",
      "1:00 – 1:10pm — Break",
      "1:10 – 1:40pm — Game / quiz",
      "1:40 – 2:40pm — Prayer",
      "2:40 – 2:50pm — Inauguration of crusade team",
      "2:50 – 4:40pm — Skill acquisition",
      "4:40 – 4:50pm — Gift from the quiz",
      "4:50 – 5:00pm — Refreshment",
    ],
  },
];
