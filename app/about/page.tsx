import Image from "next/image";
import { HeroParticles } from "@/components/hero-particles";

const highlights = [
  "8+ years building AI platforms, backend systems, and distributed applications",
  "Specialized in LLM agents, RAG pipelines, MCP, and production automation",
  "Patent holder, technical advisor, media contributor, and startup competition judge",
];

const recognition = [
  {
    label: "Media & Press",
    title: "Featured in POWER Magazine",
    description:
      "Quoted in industry coverage discussing AI infrastructure, energy demand, and the growing power requirements of large-scale AI systems.",
    href: "https://www.powermag.com/openai-in-talks-with-helion-to-secure-fusion-energy/",
    cta: "Read Coverage",
  },
  {
    label: "Judging & Evaluation",
    title: "Judge — Skandalaris Venture Competition",
    description:
      "Selected as a judge for the Skandalaris Venture Competition at Washington University in St. Louis, evaluating startup teams, venture concepts, and pitch readiness.",
    href: "https://skandalaris.wustl.edu/program/skandalaris-venture-competition/",
    cta: "View Program",
  },
];

export default function AboutPage() {
  return (
    <div className="relative max-w-6xl mx-auto pt-32 pb-20 px-6 lg:px-8">
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
          About Me
        </p>
        <h1 className="mt-4 text-3xl md:text-5xl font-semibold text-white leading-tight">
          Engineer. Builder. Creative technologist.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-neutral-300 leading-8">
          I build production-grade AI systems and premium digital experiences.
          My work sits at the intersection of engineering, automation, product
          thinking, strategic advisory, and visual storytelling.
        </p>
      </div>

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
          <Image
            src="/images/sid.jpeg"
            alt="Portrait of Siddardha Vangala"
            width={900}
            height={1200}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden">
            <HeroParticles />

            <h2 className="relative z-10 text-2xl md:text-3xl font-semibold text-white">
              About me
            </h2>

            <div className="relative z-10 mt-5 space-y-5 text-neutral-300 leading-8">
              <p>
                I’m Siddardha Vangala, a Senior AI & Backend Engineer with over
                8 years of experience designing scalable distributed systems,
                AI platforms, and production-ready LLM applications. My work
                focuses on agent-driven architectures, retrieval systems,
                enterprise integrations, and backend platforms that create real
                operational value.
              </p>

              <p>
                At MasTec, I work on AI automation platforms, secure tool
                calling, retrieval pipelines, microservices, and API
                modernization. I enjoy building systems that are not only
                technically strong, but also usable, maintainable, and aligned
                with business goals.
              </p>

              <p>
                My background also includes founding-stage product development,
                patent-backed innovation, immersive technology, technical
                writing, and long-term technology strategy. From 2017 to 2019,
                I served in founding technical leadership at an early-stage
                startup, and I have continued supporting innovation in a
                strategic advisory capacity.
              </p>

              <p>
                My work has also expanded into public industry contribution
                through media commentary, technical writing, and judging roles.
                I have been featured in industry coverage for perspectives on AI
                infrastructure and have been selected to evaluate startup teams
                and venture concepts through innovation programs and judging
                appointments.
              </p>

              <p>
                Beyond engineering, I care deeply about presentation and
                creative direction. I believe strong technical work deserves a
                strong digital identity — one that feels polished, intentional,
                and premium. That mindset shapes how I approach products,
                writing, branding, and portfolio design.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.28em] text-amber-400">
            Recognition
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-semibold text-white">
            Media, judging, and industry trust
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-300 leading-8">
            Beyond building systems, I contribute to the broader AI and startup
            ecosystem through media commentary, technical thought leadership,
            and invited evaluation roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {recognition.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400">
                {item.label}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-neutral-100">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-300">
                {item.description}
              </p>

              <span className="mt-6 inline-flex items-center text-sm text-white/80 transition group-hover:text-white">
                {item.cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}