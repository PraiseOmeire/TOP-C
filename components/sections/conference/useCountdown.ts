"use client";

import { useEffect, useState } from "react";

export type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeRemaining(targetTime: number): TimeRemaining {
  // Recomputed from Date.now() on every tick (rather than decrementing
  // stored state) so the countdown is self-correcting and can't drift.
  const diff = Math.max(0, targetTime - Date.now());
  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

/**
 * Ticks once per second toward `targetDateISO`. Returns null until the first
 * client-side tick so the server render and the initial client render match
 * exactly — a value that depends on "now" would otherwise trigger a
 * hydration mismatch. The real countdown appears a moment later, once the
 * effect runs.
 */
export function useCountdown(targetDateISO: string): TimeRemaining | null {
  const targetTime = new Date(targetDateISO).getTime();
  const [remaining, setRemaining] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    function tick() {
      setRemaining(getTimeRemaining(targetTime));
    }

    // Prime the real value on the next tick of the event loop (rather than
    // synchronously in the effect body) so setRemaining is only ever called
    // from a callback, matching the "subscribe to an external system"
    // pattern rather than an unconditional effect-body setState.
    const immediate = setTimeout(tick, 0);
    const interval = setInterval(tick, 1000);

    return () => {
      clearTimeout(immediate);
      clearInterval(interval);
    };
  }, [targetTime]);

  return remaining;
}
