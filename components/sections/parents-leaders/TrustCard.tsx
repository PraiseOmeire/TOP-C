import type { TrustCard as TrustCardData } from "@/content/parents-leaders";

type TrustCardProps = {
  card: TrustCardData;
};

/**
 * One reassurance card in the Parents & Leaders section: a thin hairline frame,
 * an Electric-Blue kicker tag, a title, and calm body copy. Minimal chrome —
 * the quiet, trust-coded counterpart to the teen-facing sections.
 */
export function TrustCard({ card }: TrustCardProps) {
  return (
    <article className="border-t border-near-black/15 pt-6">
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-electric-blue">
        {card.tag}
      </span>
      <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-near-black sm:text-3xl">
        {card.title}
      </h3>
      <p className="mt-3 font-sans text-base leading-relaxed text-body-on-light">
        {card.body}
      </p>
    </article>
  );
}
