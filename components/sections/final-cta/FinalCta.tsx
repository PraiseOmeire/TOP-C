"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { conferenceDetails } from "@/content/conference";
import { siteInfo } from "@/content/site";

// Hard-edged, no overshoot — per DESIGN_SYSTEM.md's Motion Language.
const EASE = [0.16, 1, 0.3, 1] as const;

const HEADING_ID = "final-cta-heading";

/**
 * The Final CTA (COLOR): the homepage's closing red-orange spike, echoing the
 * Hero. `id="register"` is the scroll target of every Register/Get-Your-Ticket
 * link on the site; the button here is the real conversion action.
 */
export function FinalCta() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section
      id="register"
      aria-labelledby={HEADING_ID}
      className="scroll-mt-24 overflow-hidden bg-signal px-6 py-28 sm:px-10 sm:py-36 lg:px-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={container}
        className="mx-auto max-w-[1400px]"
      >
        <motion.p
          variants={item}
          className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-purpose-black"
        >
          This year — {conferenceDetails.dateLabel}
        </motion.p>

        <motion.h2
          variants={item}
          id={HEADING_ID}
          className="mt-6 max-w-[16ch] font-display text-6xl font-black uppercase leading-[0.85] tracking-tight text-purpose-black sm:text-7xl lg:text-8xl"
        >
          Come find your purpose
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-purpose-black/80 sm:text-xl"
        >
          One weekend could change everything. Come as you are — and bring a
          friend who needs to be in the room.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href={siteInfo.registrationUrl}
            className="border border-purpose-black bg-purpose-black px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-warm-white transition-colors duration-300 hover:bg-transparent hover:text-purpose-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purpose-black"
          >
            Register now
          </Link>
          <span className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-purpose-black">
            {conferenceDetails.location}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
