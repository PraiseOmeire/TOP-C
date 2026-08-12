"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type HeroBackgroundProps = {
  /** Public path to the hero video, e.g. "/media/hero-loop.mp4". Leave undefined to use the placeholder. */
  videoSrc?: string;
  /** Poster frame shown while the video loads. */
  posterSrc?: string;
  /** Public path to a static hero photo, used when there's no video yet. */
  imageSrc?: string;
};

export function HeroBackground({
  videoSrc,
  posterSrc,
  imageSrc,
}: HeroBackgroundProps) {
  if (videoSrc) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
      >
        <source src={videoSrc} />
      </video>
    );
  }

  if (imageSrc) {
    return (
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    );
  }

  return <HeroPlaceholder />;
}

// Stand-in for the real footage: a slow, monochrome drift of light rather than
// a static frame, so the section still reads as "in motion" with zero assets.
// Replace by passing `videoSrc` to <HeroBackground /> from Hero.tsx.
function HeroPlaceholder() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden bg-purpose-black">
      <motion.div
        className="absolute inset-[-10%]"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 30% 20%, rgba(255,255,255,0.14) 0%, rgba(10,10,10,0) 60%), radial-gradient(50% 50% at 80% 80%, rgba(255,255,255,0.08) 0%, rgba(10,10,10,0) 65%), linear-gradient(180deg, #0a0a0a 0%, #161616 50%, #0a0a0a 100%)",
        }}
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.08, 1], x: [0, -12, 0], y: [0, 8, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Film grain, matching the Depth photography grade in DESIGN_SYSTEM.md */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
