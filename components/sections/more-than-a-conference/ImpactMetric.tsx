"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import type { ImpactMetric as ImpactMetricData } from "@/content/impact-metrics";

// Hard-edged, no overshoot — per DESIGN_SYSTEM.md's Motion Language.
const EASE = [0.16, 1, 0.3, 1] as const;

type ImpactMetricProps = {
  metric: ImpactMetricData;
  index?: number;
};

export function ImpactMetric({ metric, index = 0 }: ImpactMetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Reduced motion skips the count-up entirely; the render below falls
    // back to metric.value directly, so there's nothing to synchronize here.
    if (!isInView || reduceMotion) return;

    const controls = animate(0, metric.value, {
      duration: 1.5,
      ease: EASE,
      onUpdate: (value) => setDisplayValue(Math.round(value)),
    });

    return () => controls.stop();
  }, [isInView, metric.value, reduceMotion]);

  const value = reduceMotion ? metric.value : displayValue;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : index * 0.12,
        ease: EASE,
      }}
    >
      <div className="font-display text-3xl font-black tabular-nums text-near-black sm:text-4xl lg:text-5xl">
        {value}
        {metric.suffix}
      </div>
      <p className="mt-2 max-w-[18ch] font-sans text-[11px] uppercase tracking-[0.15em] text-body-on-light sm:text-xs">
        {metric.label}
      </p>
    </motion.div>
  );
}
