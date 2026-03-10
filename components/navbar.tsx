"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/achievements", label: "Achievements" },
  { href: "/projects", label: "Projects" },
  { href: "/photography", label: "Photography" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <motion.div
          animate={{
            scale: scrolled ? 0.985 : 1,
            backgroundColor: scrolled
              ? "rgba(10, 10, 12, 0.62)"
              : "rgba(18, 18, 22, 0.28)",
            borderColor: scrolled
              ? "rgba(255,255,255,0.14)"
              : "rgba(255,255,255,0.10)",
            boxShadow: scrolled
              ? "0 10px 40px rgba(0,0,0,0.35)"
              : "0 8px 24px rgba(0,0,0,0.18)",
            backdropFilter: scrolled ? "blur(22px)" : "blur(16px)",
            WebkitBackdropFilter: scrolled ? "blur(22px)" : "blur(16px)",
          }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full border px-5 py-3"
        >
          <nav className="hide-scrollbar flex items-center justify-center gap-2 overflow-x-auto">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-sm transition"
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-amber-400/30 bg-amber-400/10"
                      transition={{ type: "spring", stiffness: 280, damping: 26 }}
                    />
                  ) : null}

                  <span
                    className={`relative z-10 ${
                      active ? "text-amber-400" : "text-neutral-100 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}