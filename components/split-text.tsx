"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SplitText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <h1 className={cn("flex flex-wrap gap-x-[0.18em] gap-y-[0.04em]", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden">
          <motion.span
            initial={{ y: "115%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.85,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
