import Link from "next/link";
import { HeroParticles } from "@/components/hero-particles";

const expertise = [
  {
    title: "AI Systems",
    text: "Production-ready LLM agents, RAG pipelines, MCP integrations, secure tool-calling, and enterprise automation workflows built for real-world use.",
  },
  {
    title: "Backend Engineering",
    text: "Scalable APIs, distributed systems, microservices, data pipelines, and platform architecture focused on performance, reliability, and long-term maintainability.",
  },
  {
    title: "Creative Direction",
    text: "Premium digital storytelling, portfolio design, visual structure, and motion systems that make technical work feel refined and memorable.",
  },
];

const focusAreas = [
  "LLM Agents",
  "LangGraph",
  "Model Context Protocol",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "Distributed Systems",
  "Automation",
];

const stats = [
  { label: "Experience", value: "8+ Years" },
  { label: "Leadership", value: "CTO Since 2017" },
  { label: "Patent", value: "AR Innovation" },
  { label: "AI Focus", value: "Last 2 Years" },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-white">
      <section className="container-padding relative z-10 pt-32 pb-20 md:pt-40">
        <div className="glass-surface noise-overlay relative overflow-hidden rounded-[40px] px-8 py-12 md:px-12 md:py-16">
          <HeroParticles />

          <div className="relative z-10 max-w-6xl">
            <p className="text-xs uppercase tracking-[0.38em] text-luxury-gold/90">
              Siddardha Vangala
            </p>

            <h1 className="gradient-text mt-6 max-w-6xl font-display text-5xl leading-[0.95] md:text-7xl xl:text-8xl">
              Senior AI & Backend Engineer building systems that feel as premium
              as they perform.
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-300 md:text-lg">
              I design scalable AI platforms, backend architectures, and
              intelligent automation systems for real production environments. My
              work combines deep engineering, product thinking, and refined
              digital presentation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full border border-luxury-gold/30 bg-luxury-gold px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5"
              >
                About Me
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
              >
                View Projects
              </Link>

              <Link
                href="/blog"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
              >
                Read Articles
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="glass-surface noise-overlay relative overflow-hidden rounded-[28px] p-6"
            >
              <p className="text-sm text-neutral-400">{item.label}</p>
              <p className="mt-3 text-2xl font-semibold text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-padding relative z-10 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="glass-surface noise-overlay relative overflow-hidden rounded-[30px] p-7 md:p-8"
            >
              <p className="text-sm uppercase tracking-[0.26em] text-luxury-gold/80">
                {item.title}
              </p>
              <p className="mt-5 text-sm leading-8 text-neutral-300 md:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-padding relative z-10 pb-16">
        <div className="glass-surface gold-ring noise-overlay relative overflow-hidden rounded-[34px] p-8 md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_30%)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-luxury-gold/90">
                Featured Innovation
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-white md:text-6xl">
                Interactive Augmented Reality Entertainment Hub
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300">
                One of the strongest parts of my profile is the ability to move
                beyond engineering execution into invention. This featured
                section highlights patent-backed work and shows a track record
                of original product thinking, technical depth, and long-term
                innovation.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                  U.S. Patent
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                  AR / Interactive Systems
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                  Product Innovation
                </span>
              </div>

              <div className="mt-8">
                <Link
                  href="/achievements"
                  className="inline-flex rounded-full border border-luxury-gold/30 bg-luxury-gold px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5"
                >
                  View Achievements
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
              <div className="rounded-[24px] border border-luxury-gold/20 bg-gradient-to-br from-luxury-gold/10 to-white/5 p-6 md:p-7">
                <p className="text-xs uppercase tracking-[0.3em] text-luxury-gold/90">
                  Patent Highlight
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                  U.S. Patent 11,610,355 B1
                </h3>

                <p className="mt-5 text-sm leading-8 text-neutral-300 md:text-base">
                  A patent-backed innovation centered on interactive augmented
                  reality entertainment experiences, reflecting originality in
                  system design, product imagination, and technical contribution.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-neutral-400">Milestone</p>
                    <p className="mt-2 text-white">Patent recognized on 23 Jan 2019</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-neutral-400">Strength</p>
                    <p className="mt-2 text-white">
                      Engineering execution paired with original invention
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-padding relative z-10 pb-20">
        <div className="glass-surface noise-overlay relative overflow-hidden rounded-[34px] p-8 md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-luxury-gold/90">
                Profile
              </p>

              <h2 className="ai-gradient mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                Engineer, patent holder, technical writer, and founder-minded
                builder.
              </h2>

              <p className="mt-6 max-w-4xl text-base leading-8 text-neutral-300">
                My background spans AI engineering, backend systems, product
                architecture, patent-backed innovation, technical writing, and
                startup leadership. I care about building systems that are
                technically strong, strategically useful, and presented with
                clarity.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[26px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
                  Career Snapshot
                </p>
                <div className="mt-5 space-y-5">
                  <div className="border-b border-white/10 pb-4">
                    <p className="text-sm text-neutral-400">Nov 2017 – Present</p>
                    <p className="mt-2 text-lg text-white">CTO / Co-Founder</p>
                  </div>
                  <div className="border-b border-white/10 pb-4">
                    <p className="text-sm text-neutral-400">23 Jan 2019</p>
                    <p className="mt-2 text-lg text-white">Patent milestone</p>
                  </div>
                  <div className="border-b border-white/10 pb-4">
                    <p className="text-sm text-neutral-400">Dec 2019 – Present</p>
                    <p className="mt-2 text-lg text-white">
                      Engineering journey at MasTec
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Last 2 Years</p>
                    <p className="mt-2 text-lg text-white">
                      Focused contribution to AI systems
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
                  What this site represents
                </p>
                <p className="mt-4 text-sm leading-8 text-neutral-300 md:text-base">
                  This portfolio is designed to communicate technical depth,
                  premium execution, leadership, and originality — not just a
                  list of skills, but a high-trust digital presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}