"use client";

import { motion } from "framer-motion";

export type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative ml-2 border-l border-white/10 pl-8">
      {items.map((item, index) => (
        <motion.div
          key={`${item.year}-${item.title}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: index * 0.05 }}
          className="relative mb-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl last:mb-0"
        >
          <span className="absolute -left-[42px] top-8 h-4 w-4 rounded-full border border-luxury-gold/50 bg-luxury-black shadow-[0_0_0_6px_rgba(9,9,11,1)]" />
          <p className="text-xs uppercase tracking-[0.32em] text-luxury-gold/90">
            {item.year}
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm text-neutral-400">{item.subtitle}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-300">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
