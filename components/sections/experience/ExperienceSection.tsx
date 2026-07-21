"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ExperienceRow } from "./ExperienceRow";
import { experiencePillars as defaultPillars } from "@/content/experience";
import type { ExperiencePillar } from "@/content/experience";

// Hard-edged, no overshoot — per DESIGN_SYSTEM.md's Motion Language.
const EASE = [0.16, 1, 0.3, 1] as const;

const HEADING_ID = "experience-heading";

type ExperienceSectionProps = {
  /** Overrides the placeholder programme — e.g. once this comes from a CMS. */
  pillars?: ExperiencePillar[];
};

/**
 * The Experience beat (LIGHT/cream): a magazine-style program index of what the
 * weekend holds. The reflective breath after the Speakers DARK spike.
 */
export function ExperienceSection({
  pillars = defaultPillars,
}: ExperienceSectionProps) {
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
      id="experience"
      aria-labelledby={HEADING_ID}
      className="scroll-mt-24 bg-warm-cream px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          id={HEADING_ID}
          eyebrow="The Experience"
          title="What The Weekend Holds"
          description="Three threads run through everything — presence, the Word, and skills that outlast the weekend."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={container}
          className="mt-14 flex flex-col gap-12 sm:mt-16 lg:gap-16"
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.id} variants={item}>
              <ExperienceRow pillar={pillar} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
