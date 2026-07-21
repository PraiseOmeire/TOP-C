export type TrustCard = {
  id: string;
  /** Electric-Blue kicker tag. */
  tag: string;
  title: string;
  body: string;
};

// The three reassurances for the Parents & Leaders (trust) section. Swap copy
// for your safeguarding/teaching specifics later — ParentsLeaders reads this
// shape.
export const trustCards: TrustCard[] = [
  {
    id: "safe-environment",
    tag: "Care",
    title: "Safe Environment",
    body: "Experienced volunteers and clear safeguarding, so every teenager is looked after from arrival to close.",
  },
  {
    id: "biblical-teaching",
    tag: "Truth",
    title: "Biblical Teaching",
    body: "Christ-centered and doctrinally sound, taught by experienced ministers — no gimmicks, no shortcuts.",
  },
  {
    id: "genuine-community",
    tag: "Belonging",
    title: "Genuine Community",
    body: "Healthy friendships in a place to belong — where your teenager is known, not just counted.",
  },
];

// The calmer lead line for adults, set in Fraunces in the section.
export const parentsLead =
  "For one section, we're talking to you. Everything here is built so you can hand over your teenager with confidence.";
