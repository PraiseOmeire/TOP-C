"use client";

import { useCountdown, type TimeRemaining } from "./useCountdown";

type CountdownProps = {
  targetDateISO: string;
};

const UNITS: { key: keyof TimeRemaining; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

// Large and part of the layout, not a widget bolted on — per
// DESIGN_SYSTEM.md, the countdown is a hero-level graphic. Digits swap
// cleanly each second (no flip/odometer effect) to match that restraint.
export function Countdown({ targetDateISO }: CountdownProps) {
  const remaining = useCountdown(targetDateISO);

  return (
    <div className="grid grid-cols-4 divide-x divide-purpose-black/20 border-y border-purpose-black/20">
      {UNITS.map((unit) => (
        <div
          key={unit.key}
          className="flex flex-col items-center gap-1 px-2 py-6 sm:gap-2 sm:py-8"
        >
          <span className="font-numeral text-6xl leading-none tabular-nums text-purpose-black sm:text-7xl lg:text-8xl">
            {formatValue(remaining?.[unit.key])}
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-purpose-black/70 sm:text-xs">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function formatValue(value: number | undefined) {
  if (value === undefined) return "00";
  return value.toString().padStart(2, "0");
}
