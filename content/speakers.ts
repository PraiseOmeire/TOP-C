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

// The real speaker line-up for the homepage teaser and /speakers page.
// Every consumer (SpeakersTeaser, SpeakerRow) reads this same shape, so
// updating names, roles, bios or imageSrc here is a one-file change.
export const speakers: Speaker[] = [
  {
    slug: "pastor-emmanuel-ekahan",
    name: "Pastor Emmanuel Ekahan",
    role: "Guest Minister",
    hook: "Spreading the truth of the gospel around the world.",
    bio: "A minister of God's word passionate about spreading the truth of the gospel around the world.",
    imageSrc: "/images/speaker-1.jpeg",
  },
  {
    slug: "Evangelist-david-eze",
    name: "Evangelist David Eze",
    role: "Visioner, Jesus Lovers Network Movement",
    hook: "Shaping youth and teenagers in God's way through evangelism and outreach.",
    bio: "A minister and founder of the Jesus Lovers Network Movement. He is passionate about the lives of youth and teenagers, shaping them in God's way through evangelism and outreaches.",
    imageSrc: "/images/speaker-2.jpeg",
  },
  {
    slug: "minister-mercy-david-eze",
    name: "Minister Mercy David Eze",
    role: "Worship Minister",
    hook: "Teaching and training young ones alongside her husband, Pastor David Eze.",
    bio: "An anointed worship minister and teacher of the word. She has a passion for the young ones, teaching and training them alongside her husband, Pastor David Eze, through evangelism and outreaches.",
    imageSrc: "/images/speaker-3.jpeg",
  },
];

export const organizer: Organizer = {
  name: "Pst (Mrs) Rose Omeire",
  role: "Convener",
  note: "A devoted lover of God with a deep passion for raising and inspiring the next generation to know Christ, discover their identity in Him, and live purposeful lives for Jesus. She is the wife of the General Overseer of Voice of Life Evangelical Ministry (Full Life Assembly), Pastor Herbert N. Omeire, where she serves actively with dedication to the work of the ministry. With a special burden for teenagers, she serves as the Teenagers' Coordinator, mentoring, teaching, and guiding young people in their walk with Christ. She is the convener and host of the annual Teens of Purpose Conference, a platform created to help teenagers discover their God-given potential, develop their gifts, and understand that they were created for a divine purpose.",
  imageSrc: "/images/host-4.jpg",
};
