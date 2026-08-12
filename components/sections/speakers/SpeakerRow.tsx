"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import type { Speaker } from "@/content/speakers";

// Hard-edged, no overshoot — per DESIGN_SYSTEM.md's Motion Language.
const EASE = [0.16, 1, 0.3, 1] as const;

type SpeakerRowProps = {
  speaker: Speaker;
  /** When true, notes sit left and the portrait right (desktop only). */
  reverse?: boolean;
};

/**
 * One full-width speaker row on the /speakers page (DARK mode): a large B&W
 * portrait on one side, name + Electric-Blue role tag + bio on the other.
 * `reverse` alternates the sides on desktop; mobile always stacks
 * portrait-over-notes.
 */
export function SpeakerRow({ speaker, reverse = false }: SpeakerRowProps) {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
  };

  const item: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={container}
      className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16"
    >
      <motion.div
        variants={item}
        className={`lg:col-span-7 ${reverse ? "lg:order-last" : ""}`}
      >
        <ImagePlaceholder
          src={speaker.imageSrc}
          alt={`Portrait of ${speaker.name}, ${speaker.role} at Teens of Purpose`}
          radius={false}
          className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[4/5]"
        />
      </motion.div>

      <motion.div variants={item} className="lg:col-span-5">
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-electric-blue">
          {speaker.role}
        </span>
        <h2 className="mt-3 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-warm-white sm:text-5xl lg:text-6xl">
          {speaker.name}
        </h2>
        <p className="mt-6 max-w-[46ch] font-sans text-base leading-relaxed text-body-on-dark sm:text-lg">
          {speaker.bio}
        </p>
      </motion.div>
    </motion.article>
  );
}
