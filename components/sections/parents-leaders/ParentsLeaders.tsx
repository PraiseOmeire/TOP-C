"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { PurposeMark } from "@/components/brand/PurposeMark";
import { TrustCard } from "./TrustCard";
import {
  trustCards as defaultCards,
  parentsLead as defaultLead,
} from "@/content/parents-leaders";
import type { TrustCard as TrustCardData } from "@/content/parents-leaders";

// Hard-edged, no overshoot — per DESIGN_SYSTEM.md's Motion Language.
const EASE = [0.16, 1, 0.3, 1] as const;

const HEADING_ID = "parents-leaders-heading";

type ParentsLeadersProps = {
  cards?: TrustCardData[];
  lead?: string;
};

/**
 * Parents & Leaders (LIGHT, trust): the one section that turns to adults.
 * Cooler warm-white, more whitespace, a Fraunces lead line — calmer than the
 * teen-facing beats. Answers the parent's own question.
 */
export function ParentsLeaders({
  cards = defaultCards,
  lead = defaultLead,
}: ParentsLeadersProps) {
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
      id="parents-and-leaders"
      aria-labelledby={HEADING_ID}
      className="scroll-mt-24 bg-warm-white px-6 py-28 sm:px-10 sm:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-2 text-body-on-light">
            <PurposeMark className="h-3.5 w-3.5" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em]">
              Parents &amp; Leaders
            </span>
          </div>
          <h2
            id={HEADING_ID}
            className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-near-black sm:text-5xl"
          >
            Can I trust this with my teenager?
          </h2>
          <p className="mt-6 max-w-[52ch] font-serif text-xl italic leading-relaxed text-near-black/75 sm:text-2xl">
            {lead}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={container}
          className="mt-16 grid gap-10 sm:mt-20 md:grid-cols-3 md:gap-8"
        >
          {cards.map((card) => (
            <motion.div key={card.id} variants={item}>
              <TrustCard card={card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
