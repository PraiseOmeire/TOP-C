import { PurposeMark } from "@/components/brand/PurposeMark";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

/**
 * Shared heading block for homepage sections: a subtle Purpose Mark, an
 * optional kicker label, a display title, and optional supporting copy.
 * `tone` flips text colors for use in DARK sections later.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeadingProps) {
  const isLight = tone === "light";
  const mutedText = isLight ? "text-body-on-light" : "text-body-on-dark";

  return (
    <div className="max-w-md">
      <div className={`mb-4 flex items-center gap-2 ${mutedText}`}>
        <PurposeMark className="h-3.5 w-3.5" />
        {eyebrow && (
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em]">
            {eyebrow}
          </span>
        )}
      </div>
      <h2
        id={id}
        className={`font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl ${
          isLight ? "text-near-black" : "text-warm-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-[42ch] font-sans text-base leading-relaxed sm:text-lg ${mutedText}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
