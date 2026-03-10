"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SplitText } from "@/components/split-text";

export function HeroSection() {
  return (
    <section className="container-padding relative flex min-h-screen items-center pt-28">
      <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-luxury-gold/90">
            Senior Full-Stack Engineer · Creative Director
          </p>

          <SplitText
            text="Luxury-grade digital identity for modern builders."
            className="max-w-5xl font-display text-6xl leading-[0.95] text-white sm:text-7xl md:text-8xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg"
          >
            A premium portfolio system built for presence: cinematic typography,
            luminous depth, glassmorphism panels, and motion that feels confident
            rather than excessive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="rounded-full border border-luxury-gold/40 bg-luxury-gold px-6 py-3 text-sm font-medium text-black transition hover:translate-y-[-1px]"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm text-white backdrop-blur-md transition hover:border-white/25 hover:bg-white/10"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass-surface gold-ring relative overflow-hidden rounded-[32px] p-8 md:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.2),transparent_32%)]" />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Signature Presence
            </p>
            <div className="mt-8 space-y-7">
              {[
                ["Aesthetic", "Dark editorial minimalism with gold restraint"],
                ["Motion", "Staggered reveal systems and premium transitions"],
                ["Utility", "Production-ready code with scalable structure"],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-white/8 pb-5 last:border-none last:pb-0">
                  <p className="text-sm text-neutral-400">{label}</p>
                  <p className="mt-2 text-lg text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
