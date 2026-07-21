"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { DayBlock } from "./DayBlock";
import {
  scheduleDays as defaultDays,
  bibleQuiz as defaultQuiz,
} from "@/content/schedule";
import type { ScheduleDay, BibleQuiz } from "@/content/schedule";

// Hard-edged, no overshoot — per DESIGN_SYSTEM.md's Motion Language.
const EASE = [0.16, 1, 0.3, 1] as const;

const HEADING_ID = "schedule-heading";

type ScheduleSectionProps = {
  days?: ScheduleDay[];
  quiz?: BibleQuiz;
};

/**
 * The Schedule beat (DARK, the homepage's signature moment): two days set as a
 * Bebas Neue scoreboard, then the Bible Quiz feature with a single earned
 * Signal Red-Orange accent.
 */
export function ScheduleSection({
  days = defaultDays,
  quiz = defaultQuiz,
}: ScheduleSectionProps) {
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
      id="schedule"
      aria-labelledby={HEADING_ID}
      className="scroll-mt-24 bg-purpose-black px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          id={HEADING_ID}
          eyebrow="Schedule"
          title="Two Days"
          description="Two afternoons and a full main day — worship, teaching, skills, and a Bible Quiz with a prize on the line."
          tone="dark"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={container}
          className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-16"
        >
          {days.map((day) => (
            <motion.div key={day.id} variants={item}>
              <DayBlock day={day} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bible Quiz feature — the one earned red accent in the dark frame */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={item}
          className="mt-16 border-t border-white/15 pt-10 sm:mt-20"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-block bg-signal px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-purpose-black">
                {quiz.prizeTag}
              </span>
              <h3 className="mt-4 font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-warm-white sm:text-4xl">
                {quiz.title}
              </h3>
              <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-body-on-dark sm:text-lg">
                {quiz.blurb}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
