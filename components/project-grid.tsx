"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Loader2, Star } from "lucide-react";
import { fetchGitHubRepos, GitHubRepo } from "@/lib/github";

export function ProjectGrid() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        setLoading(true);
        const data = await fetchGitHubRepos();
        if (active) setRepos(data);
      } catch (err) {
        if (active) setError("Unable to fetch repositories right now.");
        console.error(err);
      } finally {
        if (active) setLoading(false);
      }
    }

    void load();
    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[240px] items-center justify-center rounded-3xl border border-white/10 bg-white/5">
        <Loader2 className="h-5 w-5 animate-spin text-luxury-gold" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6 text-sm text-red-200">
        {error}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {repos.map((repo, index) => (
        <motion.a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.06 }}
          className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-luxury-gold/30 hover:bg-white/[0.06]"
        >
          <div className="flex items-center justify-between">
            <Github className="h-5 w-5 text-neutral-400" />
            <ArrowUpRight className="h-5 w-5 text-neutral-400 transition group-hover:text-luxury-gold" />
          </div>

          <h3 className="mt-6 text-2xl font-semibold text-white transition group-hover:text-luxury-gold">
            {repo.name}
          </h3>
          <p className="mt-4 text-sm leading-7 text-neutral-300">
            {repo.description || "A refined engineering project with strong product potential."}
          </p>

          <div className="mt-6 flex items-center justify-between text-sm text-neutral-400">
            <span>{repo.language || "Code"}</span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4" />
              {repo.stargazers_count}
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
