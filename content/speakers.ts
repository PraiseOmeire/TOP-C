export type Speaker = {
  /** Reserved for future per-speaker routes; not routed in this increment. */
  slug: string;
  name: string;
  /** Electric-Blue credibility tag, e.g. "Guest Minister", "Worship Artist". */
  role: string;
  /** One line shown under the name on the homepage teaser. */
  hook: string;
  /** 2–3 sentences on what they do, shown on the /speakers page row. */
  bio: string;
  /** Public path to the real photo, e.g. "/media/speakers/ada.jpg". Placeholder until then. */
  imageSrc?: string;
};

export type Organizer = {
  name: string;
  /** e.g. "Convener". */
  role: string;
  /** Warm note on her passion for teenagers. */
  note: string;
  imageSrc?: string;
};

// Placeholder speaker line-up for the homepage teaser and /speakers page.
// Swap names, roles, bios and imageSrc for the real line-up later — every
// consumer (SpeakersTeaser, SpeakerRow) reads this same shape, so it's a
// one-file change. Same placeholder philosophy as content/conference.ts.
export const speakers: Speaker[] = [
  {
    slug: "guest-minister",
    name: "Speaker One",
    role: "Guest Minister",
    hook: "Teaching a generation to hear God for themselves.",
    bio: "A minister with a heart for young people, known for making Scripture land plainly and personally. Expect teaching that treats teenagers as capable of real faith, real questions, and real calling — not a watered-down version of the gospel.",
  },
  {
    slug: "worship-artist",
    name: "Speaker Two",
    role: "Worship Artist",
    hook: "Leading worship that starts in the room and stays in your week.",
    bio: "A worship leader who cares more about presence than performance. The sessions are built to help teenagers find their own voice in worship — unhurried, honest, and rooted in who God is rather than how the room feels.",
  },
  {
    slug: "youth-pastor",
    name: "Speaker Three",
    role: "Youth Pastor",
    hook: "Walking with teenagers through the questions that matter.",
    bio: "A youth pastor who has spent years in the ordinary, in-between moments of teenage life — the doubts, the pressure, the identity questions. Brings practical, grounded conversation about following Christ in the real world of school, friendships, and phones.",
  },
];

export const organizer: Organizer = {
  name: "The Convener",
  role: "Convener",
  note: "Teens of Purpose began with one conviction: that teenagers are not the church of tomorrow, but a generation God is calling today. Every session, every detail, is shaped by a simple hope — that a young person leaves knowing they are seen, that their questions belong, and that their life has a purpose worth giving everything to.",
};
