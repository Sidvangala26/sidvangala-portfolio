import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import type { MediaItem } from "@/lib/media";

function formatMediaDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function MediaGrid({
  items,
  className,
}: {
  items: MediaItem[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-5 md:grid-cols-2 xl:grid-cols-3", className)}>
      {items.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.08}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group glass-surface noise-overlay relative flex h-full flex-col overflow-hidden rounded-[30px] p-7 transition duration-300 hover:-translate-y-1 hover:border-luxury-gold/25"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_34%)] opacity-70 transition duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-luxury-gold/90">
                    {item.outlet}
                  </p>
                  <p className="mt-3 text-sm text-neutral-400">{item.category}</p>
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                  {formatMediaDate(item.publishedAt)}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold leading-tight text-white">
                {item.title}
              </h3>

              <p className="mt-5 flex-1 text-sm leading-8 text-neutral-300 md:text-base">
                {item.summary}
              </p>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-luxury-gold">
                View Feature
                <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

export function FeaturedInSection({
  items,
  href = "/media",
}: {
  items: MediaItem[];
  href?: string;
}) {
  const outlets = Array.from(new Set(items.map((item) => item.outlet)));

  return (
    <section className="container-padding relative z-10 pb-16">
      <div className="glass-surface noise-overlay relative overflow-hidden rounded-[34px] p-8 md:p-10 lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_28%)]" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-luxury-gold/90">
                Featured In
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-white md:text-6xl">
                Selected publications and media signals that reinforce technical credibility.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300">
                A curated view of published articles, profiles, and media-style
                placements that extend the portfolio beyond the codebase and
                present a stronger public narrative.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {outlets.map((outlet) => (
                  <span
                    key={outlet}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300"
                  >
                    {outlet}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={href}
                  className="inline-flex rounded-full border border-luxury-gold/30 bg-luxury-gold px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5"
                >
                  View Media Page
                </Link>
              </div>
            </div>
          </Reveal>

          <MediaGrid items={items} className="xl:grid-cols-2" />
        </div>
      </div>
    </section>
  );
}
