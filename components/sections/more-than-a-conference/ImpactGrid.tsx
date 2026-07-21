import { ImpactMetric } from "./ImpactMetric";
import type { ImpactMetric as ImpactMetricData } from "@/content/impact-metrics";

type ImpactGridProps = {
  metrics: ImpactMetricData[];
};

/**
 * All metrics on one straight line, separated by hairline dividers — a
 * quiet stat bar rather than a set of boxed cards. Wraps to a 2-up grid on
 * the smallest screens so nothing gets cramped.
 */
export function ImpactGrid({ metrics }: ImpactGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-near-black/10 pt-8 sm:flex sm:flex-nowrap sm:gap-0 sm:divide-x sm:divide-near-black/10">
      {metrics.map((metric, index) => (
        <div key={metric.id} className="sm:flex-1 sm:px-8 sm:first:pl-0 sm:last:pr-0">
          <ImpactMetric metric={metric} index={index} />
        </div>
      ))}
    </div>
  );
}
