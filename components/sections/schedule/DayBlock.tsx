import type { ScheduleDay } from "@/content/schedule";

type DayBlockProps = {
  day: ScheduleDay;
};

/**
 * One day of the schedule: the day label + date, the time range set large in
 * Bebas Neue as a scoreboard numeral, and the session list. The main event day
 * carries a small Electric-Blue label (blue = schedule labels per
 * DESIGN_SYSTEM.md). Presentational; the parent supplies scroll-reveal motion.
 */
export function DayBlock({ day }: DayBlockProps) {
  return (
    <article className="flex flex-col">
      <div className="flex items-center gap-3">
        <h3 className="font-numeral text-4xl leading-none tracking-wide text-warm-white sm:text-5xl">
          {day.label}
        </h3>
        {day.isMain && (
          <span className="border border-electric-blue px-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-electric-blue">
            Main Event
          </span>
        )}
      </div>

      <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-body-on-dark">
        {day.date}
      </p>
      <p className="mt-1 font-numeral text-5xl leading-none tracking-wide text-warm-white sm:text-6xl">
        {day.timeRange}
      </p>

      <ul className="mt-8 flex flex-col">
        {day.sessions.map((session) => (
          <li
            key={session}
            className="border-t border-white/15 py-3 font-sans text-sm text-body-on-dark sm:text-base"
          >
            {session}
          </li>
        ))}
      </ul>
    </article>
  );
}
