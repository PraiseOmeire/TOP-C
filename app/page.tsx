import { Hero } from "@/components/hero/Hero";
import { MoreThanAConference } from "@/components/sections/more-than-a-conference/MoreThanAConference";
import { ConferenceSection } from "@/components/sections/conference/ConferenceSection";
import { SpeakersTeaser } from "@/components/sections/speakers/SpeakersTeaser";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { ScheduleSection } from "@/components/sections/schedule/ScheduleSection";
import { ParentsLeaders } from "@/components/sections/parents-leaders/ParentsLeaders";
import { FinalCta } from "@/components/sections/final-cta/FinalCta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <MoreThanAConference />
      <ConferenceSection />
      <SpeakersTeaser />
      <ExperienceSection />
      <ScheduleSection />
      <ParentsLeaders />
      <FinalCta />
    </main>
  );
}
