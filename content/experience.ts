export type ExperienceItem = {
  name: string;
  blurb: string;
};

export type ExperiencePillar = {
  id: string;
  /** Electric-Blue kicker tag, e.g. "Presence", "New This Year". */
  tag: string;
  title: string;
  blurb: string;
  /** Sub-cards that expand a pillar (used by Skill Acquisition). */
  items?: ExperienceItem[];
};

// The threads of the weekend, as a program index. Swap copy/order for the real
// programme later — ExperienceSection reads this shape. Same placeholder
// philosophy as content/conference.ts.
export const experiencePillars: ExperiencePillar[] = [
  {
    id: "worship",
    tag: "Presence",
    title: "Worship",
    blurb:
      "Not a performance to watch — a room to join. Worship built to help teenagers find their own voice before God, honest and unhurried.",
  },
  {
    id: "bible-study",
    tag: "The Word",
    title: "Bible Study",
    blurb:
      "Scripture opened plainly and taken seriously — teaching that treats teenagers as capable of real faith and real questions.",
  },
  {
    id: "skill-acquisition",
    tag: "New This Year",
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
