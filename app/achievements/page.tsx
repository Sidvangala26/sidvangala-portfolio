import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { achievements } from "@/lib/achievements";

export default function AchievementsPage() {
  return (
    <div className="max-w-6xl mx-auto pt-32 pb-20 px-6 lg:px-8">
      <SectionHeading
        eyebrow="Achievements"
        title={<span className="ai-gradient">Leadership, innovation, and technical momentum.</span>}
      />

      <div className="mt-14">
        <Timeline items={achievements} />
      </div>
    </div>
  );
}