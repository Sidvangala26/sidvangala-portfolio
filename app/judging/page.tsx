import type { Metadata } from "next";
import Link from "next/link";
import { JudgingGrid } from "@/components/judging-section";
import { SectionHeading } from "@/components/section-heading";
import { judgingEntries } from "@/lib/judging";

const uniqueOrganizations = new Set(
  judgingEntries.map((item) => item.organization)
).size;
const featuredCount = judgingEntries.filter((item) => item.featured).length;

export const metadata: Metadata = {
  title: "Judging",
  description:
    "Judging, evaluator, reviewer, and mentorship roles that reflect external trust in Siddardha Vangala's technical and strategic judgment.",
};

export default function JudgingPage() {
  return (
    <div className="relative min-h-screen text-white">
      <section className="container-padding relative z-10 pt-32 pb-12 md:pt-40">
        <SectionHeading
          eyebrow="Judging"
          title="External evaluation roles that reinforce technical judgment, strategic discernment, and professional trust."
          description="A dedicated home for judging, reviewer, evaluator, mentor, and panelist roles. New entries can be added centrally and will automatically appear on both this page and the homepage credibility section."
        />
      </section>

      <section className="container-padding relative z-10 pb-16">
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="glass-surface noise-overlay relative overflow-hidden rounded-[28px] p-6">
            <p className="text-sm text-neutral-400">Evaluation Roles</p>
            <p className="mt-3 text-2xl font-semibold text-white">
              {judgingEntries.length}
            </p>
          </div>

          <div className="glass-surface noise-overlay relative overflow-hidden rounded-[28px] p-6">
            <p className="text-sm text-neutral-400">Organizations</p>
            <p className="mt-3 text-2xl font-semibold text-white">
              {uniqueOrganizations}
            </p>
          </div>

          <div className="glass-surface noise-overlay relative overflow-hidden rounded-[28px] p-6">
            <p className="text-sm text-neutral-400">Featured Roles</p>
            <p className="mt-3 text-2xl font-semibold text-white">
              {featuredCount}
            </p>
          </div>
        </div>
      </section>

      <section className="container-padding relative z-10 pb-16">
        <JudgingGrid items={judgingEntries} />
      </section>

      <section className="container-padding relative z-10 pb-20">
        <div className="glass-surface noise-overlay relative overflow-hidden rounded-[34px] p-8 md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%)]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-luxury-gold/90">
                Professional Trust
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-white md:text-5xl">
                These roles complement the portfolio by showing where judgment is trusted, not just where work is shipped.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300">
                The strongest credibility sections do not read like calendars.
                They frame selective invitations as signals of standards,
                discernment, and long-term professional reputation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full border border-luxury-gold/30 bg-luxury-gold px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5"
              >
                About Me
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
