"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { damping: 25, stiffness: 320, mass: 0.45 });
  const springY = useSpring(y, { damping: 25, stiffness: 320, mass: 0.45 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);

    if (!isFinePointer) return;

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/70 bg-amber-400/10 mix-blend-screen md:block"
        style={{
          x: springX,
          y: springY,
          width: pressed ? 18 : 14,
          height: pressed ? 18 : 14,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[69] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm md:block"
        style={{
          x: springX,
          y: springY,
          width: pressed ? 34 : 48,
          height: pressed ? 34 : 48,
        }}
      />
    </>
  );
}