import type { Metadata } from "next";
import Link from "next/link";
import { MediaGrid } from "@/components/media-section";
import { SectionHeading } from "@/components/section-heading";
import { mediaItems } from "@/lib/media";

const uniqueOutlets = new Set(mediaItems.map((item) => item.outlet)).size;
const featuredCount = mediaItems.filter((item) => item.featured).length;

export const metadata: Metadata = {
  title: "Media",
  description:
    "Selected press, publications, and media-style mentions across Siddardha Vangala's writing and public technical presence.",
};

export default function MediaPage() {
  return (
    <div className="relative min-h-screen text-white">
      <section className="container-padding relative z-10 pt-32 pb-12 md:pt-40">
        <SectionHeading
          eyebrow="Media"
          title="Publications, features, and credibility signals presented with the same premium restraint as the rest of the site."
          description="A dedicated home for press mentions, published writing, and public-facing technical credibility. New items can be added centrally and will flow into both this page and the homepage showcase."
        />
      </section>

      <section className="container-padding relative z-10 pb-16">
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="glass-surface noise-overlay relative overflow-hidden rounded-[28px] p-6">
            <p className="text-sm text-neutral-400">Media Items</p>
            <p className="mt-3 text-2xl font-semibold text-white">
              {mediaItems.length}
            </p>
          </div>

          <div className="glass-surface noise-overlay relative overflow-hidden rounded-[28px] p-6">
            <p className="text-sm text-neutral-400">Featured Placements</p>
            <p className="mt-3 text-2xl font-semibold text-white">
              {featuredCount}
            </p>
          </div>

          <div className="glass-surface noise-overlay relative overflow-hidden rounded-[28px] p-6">
            <p className="text-sm text-neutral-400">Outlets</p>
            <p className="mt-3 text-2xl font-semibold text-white">
              {uniqueOutlets}
            </p>
          </div>
        </div>
      </section>

      <section className="container-padding relative z-10 pb-16">
        <MediaGrid items={mediaItems} />
      </section>

      <section className="container-padding relative z-10 pb-20">
        <div className="glass-surface gold-ring noise-overlay relative overflow-hidden rounded-[34px] p-8 md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%)]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-luxury-gold/90">
                Continue Exploring
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl">
                Move from media presence into projects, writing, and direct collaboration.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300">
                The public story matters most when it points back to strong
                execution, original thinking, and work that stands up in real
                environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full border border-luxury-gold/30 bg-luxury-gold px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
