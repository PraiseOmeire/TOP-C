"use client";

import Link from "next/link";
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
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section
      id="speakers"
      aria-labelledby={HEADING_ID}
      className="scroll-mt-24 bg-purpose-black px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id={HEADING_ID}
            eyebrow="Speakers"
            title="Voices Worth Showing Up For"
            description="A line-up chosen to meet teenagers where they are — honest teaching, real worship, and room for the questions that matter."
            tone="dark"
          />
          <Link
            href="/speakers"
            className="group inline-flex shrink-0 items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-warm-white transition-colors hover:text-signal focus-visible:outline-none focus-visible:text-signal"
          >
            Meet the speakers
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={container}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:mt-16 lg:grid lg:grid-cols-3 lg:gap-10 lg:overflow-visible lg:pb-0"
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.slug}
              variants={item}
              className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-auto"
            >
              <SpeakerCard speaker={speaker} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
