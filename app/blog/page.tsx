"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type BlogPost = {
  id: string;
  title: string;
  url: string;
  excerpt: string;
  image: string;
  pubDate: string;
  categories: string[];
};

const PAGE_SIZE = 4;

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch("/api/medium");
        const data = await res.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / PAGE_SIZE);

  const paginatedPosts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return posts.slice(start, start + PAGE_SIZE);
  }, [posts, page]);

  function goToPage(value: number) {
    if (value < 1 || value > totalPages) return;
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderPageNumbers() {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i += 1) pages.push(i);
    } else {
      pages.push(1);

      if (page > 3) pages.push("...");

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);

      for (let i = start; i <= end; i += 1) pages.push(i);

      if (page < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  }

  return (
    <div className="max-w-6xl mx-auto pt-32 pb-20 px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Blog</p>

      <h1 className="mt-4 text-5xl md:text-7xl font-semibold text-white leading-tight">
        Writing on AI systems, engineering, and modern agent architectures.
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-neutral-300 leading-8">
        My latest Medium articles, synced automatically.
      </p>

      {loading ? (
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 animate-pulse"
            >
              <div className="h-64 bg-white/10" />
              <div className="p-7">
                <div className="h-4 w-24 rounded bg-white/10" />
                <div className="mt-4 h-8 w-3/4 rounded bg-white/10" />
                <div className="mt-4 h-4 w-full rounded bg-white/10" />
                <div className="mt-2 h-4 w-5/6 rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="mt-14 rounded-[32px] border border-white/10 bg-white/5 p-8 text-neutral-300">
          No articles available right now.
        </div>
      ) : (
        <>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {paginatedPosts.map((post, index) => (
              <a
                key={`${post.id}-${index}`}
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 transition hover:border-amber-400/40"
              >
                <div className="relative h-64 overflow-hidden bg-black/20">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized={post.image.startsWith("http")}
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-7">
                  <p className="text-sm text-neutral-400">
                    {post.pubDate
                      ? new Date(post.pubDate).toLocaleDateString()
                      : "Medium"}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-white leading-tight">
                    {post.title}
                  </h2>

                  <p className="mt-4 text-neutral-300 leading-8">{post.excerpt}</p>

                  {post.categories?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.categories.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-6 text-sm font-medium text-amber-400">
                    Read Article →
                  </p>
                </div>
              </a>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Prev
              </button>

              {renderPageNumbers().map((item, index) =>
                item === "..." ? (
                  <span key={`ellipsis-${index}`} className="px-2 text-sm text-neutral-500">
                    ...
                  </span>
                ) : (
                  <button
                    key={item}
                    onClick={() => goToPage(item as number)}
                    className={`h-10 w-10 rounded-full border text-sm transition ${
                      item === page
                        ? "border-amber-400/40 bg-amber-400 text-black"
                        : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}

              <button
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}