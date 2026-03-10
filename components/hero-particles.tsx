"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export function HeroParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      detectRetina: true,
      background: {
        color: {
          value: "transparent",
        },
      },
      particles: {
        number: {
          value: 56,
          density: {
            enable: true,
            area: 900,
          },
        },
        color: {
          value: ["#D4AF37", "#F8E7B0"],
        },
        opacity: {
          value: 0.38,
        },
        size: {
          value: { min: 1.5, max: 3 },
        },
        move: {
          enable: true,
          speed: 0.42,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        links: {
          enable: true,
          distance: 155,
          color: "#D4AF37",
          opacity: 0.28,
          width: 1.25,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.42,
            },
          },
        },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden rounded-[40px] opacity-100">
      <Particles
        id="hero-particles"
        options={options}
        className="h-full w-full"
      />
    </div>
  );
}