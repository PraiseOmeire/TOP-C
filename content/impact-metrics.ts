export type ImpactMetric = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  /** Marks the one stat that should read larger than the rest. */
  emphasis?: boolean;
};

// Placeholder figures for the "More Than a Conference" section. Every
// consumer (ImpactGrid/ImpactMetric) reads this shape, so pointing it at a
// CMS or config source later is a one-file change — see the section's
// implementation notes for how that swap would work.
export const impactMetrics: ImpactMetric[] = [
  {
    id: "teenagers",
    value: 500,
    suffix: "+",
    label: "Teenagers discovering purpose",
    emphasis: true,
  },
  {
    id: "churches",
    value: 10,
    suffix: "+",
    label: "Churches represented",
  },
  {
    id: "guest-ministers",
    value: 7,
    suffix: "+",
    label: "Guest ministers",
  },
  {
    id: "days",
    value: 2,
    label: "Days that can change a life",
  },
];
