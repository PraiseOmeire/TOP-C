"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { PurposeMark } from "@/components/brand/PurposeMark";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { organizer as defaultOrganizer } from "@/content/speakers";
import type { Organizer } from "@/content/speakers";

// Hard-edged, no overshoot — per DESIGN_SYSTEM.md's Motion Language.
const EASE = [0.16, 1, 0.3, 1] as const;

const HEADING_ID = "organizer-heading";

type OrganizerBlockProps = {
  /** Overrides the placeholder host — e.g. once this comes from a CMS. */
  organizer?: Organizer;
};

/**
 * The host/convener block that closes the /speakers page. Shifts the page from
 * DARK (Purpose Black) to Warm Cream — DESIGN_SYSTEM.md's intimate/reflective
 * mode — with a framed portrait and her note set in Fraunces, so she reads as
 * a warm closing voice rather than a fourth speaker.
 */
export function OrganizerBlock({
  organizer = defaultOrganizer,
}: OrganizerBlockProps) {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section
      aria-labelledby={HEADING_ID}
      className="bg-warm-cream px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={container}
        className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-12 lg:gap-16"
      >
        <motion.div variants={item} className="lg:col-span-5">
          <ImagePlaceholder
            src={organizer.imageSrc}
            alt={`Portrait of ${organizer.name}, ${organizer.role} of Teens of Purpose`}
            className="aspect-[4/5] w-full"
          />
        </motion.div>

        <motion.div variants={item} className="lg:col-span-7">
          <div className="mb-4 flex items-center gap-2 text-body-on-light">
            <PurposeMark className="h-3.5 w-3.5" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em]">
              Your Host
            </span>
          </div>
          <h2
            id={HEADING_ID}
            className="font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-near-black sm:text-4xl lg:text-5xl"
          >
            {organizer.name}
          </h2>
          <p className="mt-6 max-w-[52ch] font-serif text-xl italic leading-relaxed text-near-black/80 sm:text-2xl">
            {organizer.note}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
