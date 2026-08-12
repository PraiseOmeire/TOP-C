"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ExperienceRow } from "./ExperienceRow";
import {
  experiencePillars as defaultPillars,
  bibleQuiz as defaultQuiz,
} from "@/content/experience";
import type { ExperiencePillar, BibleQuiz } from "@/content/experience";

// Hard-edged, no overshoot — per DESIGN_SYSTEM.md's Motion Language.
const EASE = [0.16, 1, 0.3, 1] as const;

const HEADING_ID = "experience-heading";

type ExperienceSectionProps = {
  /** Overrides the placeholder programme — e.g. once this comes from a CMS. */
  pillars?: ExperiencePillar[];
  quiz?: BibleQuiz;
};

/**
 * The Experience beat (LIGHT/cream): a magazine-style program index of what the
 * weekend holds, closing on the Bible Quiz feature. The reflective breath
 * after the Speakers DARK spike.
 */
export function ExperienceSection({
  pillars = defaultPillars,
  quiz = defaultQuiz,
}: ExperienceSectionProps) {
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
      id="experience"
      aria-labelledby={HEADING_ID}
      className="scroll-mt-24 bg-warm-cream px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading id={HEADING_ID} title="Come and experience" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={container}
          className="mt-14 flex flex-col gap-12 sm:mt-16 lg:gap-16"
        >
          {pillars.map((pillar, index) => (
            <motion.div key={pillar.id} variants={item}>
              <ExperienceRow
                pillar={pillar}
                titleTone={index % 2 === 0 ? "signal" : "near-black"}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bible Quiz feature — the one earned red accent in this light frame */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={item}
          className="mt-12 border-t border-near-black/15 pt-8 lg:pt-10"
        >
          <span className="inline-block bg-signal px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-white">
            {quiz.prizeTag}
          </span>
          <h3 className="mt-4 font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-near-black sm:text-4xl">
            {quiz.title}
          </h3>
          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-body-on-light sm:text-lg">
            {quiz.blurb}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
