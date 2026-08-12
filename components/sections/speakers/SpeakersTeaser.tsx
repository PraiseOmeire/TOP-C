"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SpeakerCard } from "./SpeakerCard";
import { speakers as defaultSpeakers } from "@/content/speakers";
import type { Speaker } from "@/content/speakers";

// Hard-edged, no overshoot — per DESIGN_SYSTEM.md's Motion Language.
const EASE = [0.16, 1, 0.3, 1] as const;

const HEADING_ID = "speakers-teaser-heading";

type SpeakersTeaserProps = {
  /** Overrides the placeholder line-up — e.g. once these come from a CMS. */
  speakers?: Speaker[];
};

/**
 * Homepage Speakers teaser — the DARK beat between Conference (COLOR) and
 * Experience (LIGHT). Portrait cards read as a 3-up magazine grid on desktop
 * and a horizontal scroll-snap swipe on mobile, then a link onward to the
 * full /speakers page.
 */
export function SpeakersTeaser({
  speakers = defaultSpeakers,
}: SpeakersTeaserProps) {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
  };

  const item: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, ease: EASE },
    },
  };

  return (
    <section
      id="speakers"
      aria-labelledby={HEADING_ID}
      className="scroll-mt-24 bg-purpose-black px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          id={HEADING_ID}
          tone="dark"
          eyebrow="Speakers"
          title="Voices you'll hear"
        />

        <motion.div
          // Native overflow scroller on mobile: make it a keyboard tab stop with
          // an accessible name and a visible focus ring, so keyboard-only users
          // can reach the cards that sit off-screen (axe scrollable-region-focusable).
          tabIndex={0}
          role="group"
          aria-label="Speaker line-up"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={container}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal sm:mt-16 lg:grid lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-white/15 lg:overflow-visible lg:pb-0"
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.slug}
              variants={item}
              className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-auto lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <SpeakerCard speaker={speaker} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
