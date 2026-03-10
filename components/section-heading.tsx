import { Reveal } from "@/components/reveal";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <Reveal>
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.35em] text-luxury-gold/90">
          {eyebrow}
        </p>

        <h1 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}