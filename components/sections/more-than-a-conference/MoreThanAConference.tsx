import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/media/ImagePlaceholder";
import { ImpactGrid } from "./ImpactGrid";
import { impactMetrics } from "@/content/impact-metrics";
import type { ImpactMetric } from "@/content/impact-metrics";

const HEADING_ID = "more-than-a-conference-heading";

type MoreThanAConferenceProps = {
  /** Overrides the placeholder figures — e.g. once these come from a CMS. */
  metrics?: ImpactMetric[];
};

export function MoreThanAConference({
  metrics = impactMetrics,
}: MoreThanAConferenceProps) {
  return (
    <section
      id="about"
      aria-labelledby={HEADING_ID}
      className="scroll-mt-24 bg-warm-white px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <ImpactGrid metrics={metrics} />

        <div className="mt-16 grid gap-10 sm:mt-20 lg:mt-24 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              id={HEADING_ID}
              title="More Than A Conference"
              description="A growing community of teenagers, churches and leaders committed to discovering purpose and impacting the next generation."
            />
          </div>
          <div className="lg:col-span-6">
            <ImagePlaceholder
              src="/images/Top-1.jpg"
              alt="Teenagers from across churches gathered together at Teens of Purpose"
              className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
