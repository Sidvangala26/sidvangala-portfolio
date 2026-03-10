"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { fetchMediumPosts, MediumPost } from "@/lib/medium";

export function BlogFeed() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        setLoading(true);
        const data = await fetchMediumPosts();
        if (active) setPosts(data);
      } catch (err) {
        if (active) setError("Unable to load Medium posts right now.");
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

  const content = useMemo(() => {
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
      <div className="grid gap-6">
        {posts.map((post, index) => (
          <motion.a
            key={post.link}
            href={post.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-luxury-gold/40 hover:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">
                  {post.pubDate}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white transition group-hover:text-luxury-gold">
                  {post.title}
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-300">
                  {post.description}
                </p>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-neutral-400 transition group-hover:text-luxury-gold" />
            </div>
          </motion.a>
        ))}
      </div>
    );
  }, [error, loading, posts]);

  return <div>{content}</div>;
}
