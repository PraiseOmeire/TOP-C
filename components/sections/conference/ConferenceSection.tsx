"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Countdown } from "./Countdown";
import { conferenceDetails } from "@/content/conference";
import type { ConferenceDetails } from "@/content/conference";

// Hard-edged, no overshoot — per DESIGN_SYSTEM.md's Motion Language.
const EASE = [0.16, 1, 0.3, 1] as const;

// Ties the section landmark to its heading for screen readers.
const HEADING_ID = "conference-heading";

type ConferenceSectionProps = {
  /** Overrides the placeholder details — e.g. once these come from a CMS. */
  details?: ConferenceDetails;
};

export function ConferenceSection({
  details = conferenceDetails,
}: ConferenceSectionProps) {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
  };

  const item: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section
      id="conference"
      aria-labelledby={HEADING_ID}
      className="scroll-mt-24 bg-signal px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={container}
        className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center sm:gap-12"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-purpose-black"
        >
          <span>{details.label}</span>
          <span>{details.themeYearLabel}</span>
        </motion.div>

        <motion.h2
          id={HEADING_ID}
          variants={item}
          className="font-display text-7xl font-black uppercase leading-[0.9] tracking-tight text-purpose-black sm:text-8xl lg:text-9xl"
        >
          {details.theme}
        </motion.h2>

        <motion.div variants={item} className="flex flex-col items-center gap-4">
          <p className="max-w-lg font-serif text-xl italic leading-snug text-purpose-black sm:text-2xl">
            &ldquo;{details.scripture}&rdquo;
          </p>
          <p className="max-w-md font-sans text-base leading-relaxed text-purpose-black/80 sm:text-lg">
            {details.description}
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-purpose-black"
        >
          {details.dateLabel} &mdash; {details.location}
        </motion.p>

        <motion.div variants={item} className="w-full">
          <Countdown targetDateISO={details.targetDateISO} />
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="https://forms.gle/ihdhsghatDEQnwtn8"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purpose-black bg-purpose-black px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-warm-white transition-colors duration-300 hover:bg-transparent hover:text-purpose-black"
          >
            Get Your Ticket
          </Link>
          <Link
            href="#schedule"
            className="border border-purpose-black bg-transparent px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-purpose-black transition-colors duration-300 hover:bg-purpose-black hover:text-warm-white"
          >
            Explore Schedule
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
