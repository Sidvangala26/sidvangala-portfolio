import { Linkedin, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="container-padding relative z-10 pb-10 pt-16">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-neutral-400 md:flex-row md:items-center">
        
        <p>© 2026 Siddardha Vangala Portfolio. Crafted with restraint and intent.</p>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/sidvangala/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://www.instagram.com/sid.vangala/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://github.com/Sidvangala26"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            <Github size={18} />
          </a>

          <a
            href="https://medium.com/@siddardhavangala"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Medium
          </a>
        </div>

      </div>
    </footer>
  );
}