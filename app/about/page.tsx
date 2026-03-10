import Image from "next/image";
import { HeroParticles } from "@/components/hero-particles";

const highlights = [
  "8+ years building AI platforms, backend systems, and distributed applications",
  "Specialized in LLM agents, RAG pipelines, MCP, and production automation",
  "Patent holder, co-founder, and technical leader across engineering and product systems",
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto pt-32 pb-20 px-6 lg:px-8">
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400">About Me</p>
        <h1 className="mt-4 text-5xl md:text-7xl font-semibold text-white leading-tight">
          Engineer. Builder. Creative technologist.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-neutral-300 leading-8">
          I build production-grade AI systems and premium digital experiences.
          My work sits at the intersection of engineering, automation, product thinking,
          and visual storytelling.
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
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              About me
            </h2>

            <div className="mt-5 space-y-5 text-neutral-300 leading-8">
              <HeroParticles />
              <p>
                I’m Siddardha Vangala, a Senior AI & Backend Engineer with over
                8 years of experience designing scalable distributed systems,
                AI platforms, and production-ready LLM applications. My work
                focuses on agent-driven architectures, RAG systems, enterprise
                integrations, and backend platforms that create real operational value.
              </p>

              <p>
                At MasTec, I’ve worked on AI automation platforms, secure tool-calling,
                retrieval pipelines, microservices, and API modernization. I enjoy
                building systems that are not only technically strong, but also usable,
                maintainable, and aligned with business goals.
              </p>

              <p>
                Beyond engineering, I also care deeply about presentation and creative direction.
                I believe strong technical work deserves a strong digital identity — one that feels
                polished, intentional, and premium. That mindset shapes how I approach products,
                branding, writing, and portfolio design.
              </p>

              <p>
                My background also includes AR/mobile development, patent-backed innovation,
                technical writing, and startup leadership. I bring both execution depth and
                long-term strategic thinking to the systems I build.
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
    </div>
  );
}