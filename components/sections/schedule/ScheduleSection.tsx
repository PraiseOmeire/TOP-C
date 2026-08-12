"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { DayBlock } from "./DayBlock";
import { scheduleDays as defaultDays } from "@/content/schedule";
import type { ScheduleDay } from "@/content/schedule";

// Hard-edged, no overshoot — per DESIGN_SYSTEM.md's Motion Language.
const EASE = [0.16, 1, 0.3, 1] as const;

const HEADING_ID = "schedule-heading";

type ScheduleSectionProps = {
  days?: ScheduleDay[];
};

/**
 * The Schedule beat (DARK, the homepage's signature moment): two days set as a
 * Bebas Neue scoreboard.
 */
export function ScheduleSection({ days = defaultDays }: ScheduleSectionProps) {
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
      id="schedule"
      aria-labelledby={HEADING_ID}
      className="scroll-mt-24 bg-purpose-black px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          id={HEADING_ID}
          eyebrow="Schedule"
          title="Two Days"
          description="Two afternoons and a full main day — worship, teaching, and hands-on skill sessions."
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
      </div>
    </section>
  );
}
