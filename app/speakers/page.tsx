import type { Metadata } from "next";
import { PurposeMark } from "@/components/brand/PurposeMark";
import { SpeakerRow } from "@/components/sections/speakers/SpeakerRow";
import { OrganizerBlock } from "@/components/sections/speakers/OrganizerBlock";
import { speakers } from "@/content/speakers";

export const metadata: Metadata = {
  title: "Speakers — Teens of Purpose",
  description:
    "The ministers, worship leaders and voices carrying this year's Teens of Purpose conference — and the convener behind it.",
};

export default function SpeakersPage() {
  return (
    <main className="flex-1">
      {/* DARK: page header + alternating speaker rows */}
      <div className="bg-purpose-black px-6 pb-24 pt-32 sm:px-10 sm:pb-32 sm:pt-40 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <header className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-body-on-dark">
              <PurposeMark className="h-3.5 w-3.5" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em]">
                Speakers
              </span>
            </div>
            <h1 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-warm-white sm:text-6xl lg:text-7xl">
              Voices Worth Showing Up For
            </h1>
            <p className="mt-6 max-w-[52ch] font-sans text-lg leading-relaxed text-body-on-dark">
              Chosen to meet teenagers where they are — honest teaching, real
              worship, and room for the questions that matter most.
            </p>
          </header>

          <div className="mt-20 space-y-24 sm:mt-24 lg:space-y-32">
            {speakers.map((speaker, index) => (
              <SpeakerRow
                key={speaker.slug}
                speaker={speaker}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* LIGHT: tonal shift to the convener */}
      <OrganizerBlock />
    </main>
  );
}
