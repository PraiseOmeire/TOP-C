export type ExperienceItem = {
  name: string;
  blurb: string;
};

export type ExperiencePillar = {
  id: string;
  /** Electric-Blue kicker tag, e.g. "Presence", "New This Year". Omitted where the title needs no tag. */
  tag?: string;
  title: string;
  /** One honest line of copy. Omitted where the title needs no gloss. */
  blurb?: string;
  /** Sub-cards that expand a pillar (used by Skill Acquisition). */
  items?: ExperienceItem[];
};

export type BibleQuiz = {
  title: string;
  blurb: string;
  /** Small urgency tag rendered in Signal Red-Orange. */
  prizeTag: string;
};

// The threads of the weekend, as a program index. Swap copy/order for the real
// programme later — ExperienceSection reads this shape. Same placeholder
// philosophy as content/conference.ts.
export const experiencePillars: ExperiencePillar[] = [
  {
    id: "worship",
    title: "Intense Worship",
  },
  {
    id: "bible-study",
    title: "Bible Study",
  },
  {
    id: "the-word",
    title: "The Word",
  },
  {
    id: "skill-acquisition",
    title: "Skill Acquisition",
    blurb:
      "Purpose is practical. This year we're putting real, in-demand skills in their hands — the kind they keep long after the weekend ends.",
    items: [
      {
        name: "AI & Tech",
        blurb:
          "Hands-on sessions on the tools shaping the future — how they work, and how to build with them.",
      },
      {
        name: "Design",
        blurb:
          "Visual thinking and creative craft — turning ideas into work they can be proud of.",
      },
    ],
  },
];

export const bibleQuiz: BibleQuiz = {
  title: "Bible Quiz Competition",
  blurb:
    "Know your Bible? Put it to the test. Teams go head to head on Day 2 — and there's a prize for the winners.",
  prizeTag: "Win a prize",
};
