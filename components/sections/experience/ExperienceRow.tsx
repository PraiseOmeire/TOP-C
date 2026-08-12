import type { ExperiencePillar } from "@/content/experience";

type ExperienceRowProps = {
  pillar: ExperiencePillar;
  /** Alternates the title color down the list: signal, near-black, signal, near-black. */
  titleTone?: "signal" | "near-black";
};

/**
 * One pillar of the Experience program index: a hairline rule, an optional
 * Electric-Blue kicker tag, a big title, and a line of copy. A pillar carrying
 * `items` (Skill Acquisition) expands into blue-ruled sub-cards — the
 * section's quiet signature. Presentational; the parent supplies the
 * scroll-reveal motion.
 */
export function ExperienceRow({
  pillar,
  titleTone = "near-black",
}: ExperienceRowProps) {
  const titleColor = titleTone === "signal" ? "text-signal" : "text-near-black";

  return (
    <article className="border-t border-near-black/15 pt-8 lg:pt-10">
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-10">
        {pillar.tag && (
          <div className="lg:col-span-3">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-electric-blue">
              {pillar.tag}
            </span>
          </div>
        )}
        <div className={pillar.tag ? "lg:col-span-9" : "lg:col-span-12"}>
          <h3
            className={`font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl ${titleColor}`}
          >
            {pillar.title}
          </h3>
          {pillar.blurb && (
            <p className="mt-4 max-w-[60ch] font-sans text-base leading-relaxed text-body-on-light sm:text-lg">
              {pillar.blurb}
            </p>
          )}

          {pillar.items && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {pillar.items.map((item) => (
                <div
                  key={item.name}
                  className="border-l-2 border-electric-blue/50 pl-5"
                >
                  <h4 className="font-display text-xl font-bold uppercase tracking-tight text-near-black">
                    {item.name}
                  </h4>
                  <p className="mt-2 max-w-[40ch] font-sans text-sm leading-relaxed text-body-on-light">
                    {item.blurb}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
