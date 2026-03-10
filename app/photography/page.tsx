import { PhotoGrid } from "@/components/photo-grid";
import { SectionHeading } from "@/components/section-heading";

export default function PhotographyPage() {
  return (
    <div className="container-padding pt-32 pb-20">
      <SectionHeading
        eyebrow="Photography"
        title={<span className="photo-gradient">Visual Stories & Travel Moments</span>}
      />
      <div className="mt-14">
        <PhotoGrid />
      </div>
    </div>
  );
}
