"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";

// Swap in real footage here once it exists — e.g. "/media/hero-loop.mp4" /
// "/media/hero-poster.jpg" — nothing else in this file needs to change.
const HERO_VIDEO_SRC: string | undefined = undefined;
const HERO_POSTER_SRC: string | undefined = undefined;

// Hard-edged entrance: settles firmly, no spring/overshoot — per the Motion
// Language section of DESIGN_SYSTEM.md.
const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative flex h-dvh min-h-[560px] w-full items-end overflow-hidden bg-purpose-black text-warm-white">
      <HeroBackground videoSrc={HERO_VIDEO_SRC} posterSrc={HERO_POSTER_SRC} />

      {/* Scrim for type legibility over the footage */}
      <div className="absolute inset-0 bg-gradient-to-t from-purpose-black via-purpose-black/10 to-transparent" />

      <div className="relative z-10 flex w-full flex-col gap-6 px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
        <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-body-on-dark sm:text-xs">
          Aug 2026 — Magboro, Ogun State
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-[18ch] font-display text-[15vw] font-black uppercase leading-[0.85] tracking-tight text-warm-white sm:text-[10vw] lg:text-[7vw]"
        >
          Teens of Purpose
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="max-w-md font-sans text-lg text-warm-white sm:text-xl"
        >
          Where purpose finds you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
        >
          <a
            href="#register"
            className="inline-block border border-signal bg-signal px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-purpose-black transition-colors duration-300 hover:bg-purpose-black hover:text-warm-white"
          >
            Get Your Ticket
          </a>
        </motion.div>
      </div>

      <ScrollCue />
    </section>
  );
}

// A single downward line, terminating in a Signal Red-Orange point — the
// Ascending Line Purpose Mark, used here as the scroll cue.
function ScrollCue() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className="absolute bottom-8 right-6 z-10 sm:right-10 lg:right-16"
      animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="2" height="56" viewBox="0 0 2 56" fill="none">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="48"
          stroke="currentColor"
          strokeWidth="1"
          className="text-body-on-dark"
        />
        <circle cx="1" cy="52" r="2.5" fill="#FF3B1F" />
      </svg>
    </motion.div>
  );
}
