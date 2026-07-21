import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import type { Speaker } from "@/content/speakers";

type SpeakerCardProps = {
  speaker: Speaker;
};

/**
 * Teaser portrait card for the homepage Speakers section (DARK mode): a
 * full-bleed B&W portrait, then a hairline rule over the caption — role tag
 * (Electric Blue), name (Unbounded), and a one-line hook. Presentational; the
 * parent supplies the scroll-reveal motion.
 */
export function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <article className="flex flex-col">
      <ImagePlaceholder
        src={speaker.imageSrc}
        alt={`Portrait of ${speaker.name}, ${speaker.role} at Teens of Purpose`}
        radius={false}
        className="aspect-[4/5] w-full"
      />
      <div className="mt-5 border-t border-white/15 pt-4">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-electric-blue">
          {speaker.role}
        </span>
        <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-warm-white sm:text-3xl">
          {speaker.name}
        </h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-body-on-dark sm:text-base">
          {speaker.hook}
        </p>
      </div>
    </article>
  );
}
