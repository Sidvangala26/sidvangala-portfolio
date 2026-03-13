"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
  liveUrl: string | null;
  stars: number;
  language: string;
  updatedAt: string;
  topics: string[];
  image: string;
};

const PAGE_SIZE = 6;

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setProjects(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);

  const paginatedProjects = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return projects.slice(start, start + PAGE_SIZE);
  }, [projects, page]);

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
      <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Projects</p>

      <h1 className="mt-4 text-3xl md:text-5xl font-semibold text-white leading-tight">
        Systems, platforms, and technical work built for real-world use.
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-neutral-300 leading-8">
        My GitHub repositories, synced automatically and presented as curated project cards.
      </p>

      {loading ? (
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 animate-pulse"
            >
              <div className="h-56 bg-white/10" />
              <div className="p-7">
                <div className="h-8 w-2/3 rounded bg-white/10" />
                <div className="mt-4 h-4 w-full rounded bg-white/10" />
                <div className="mt-2 h-4 w-5/6 rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="mt-14 rounded-[32px] border border-white/10 bg-white/5 p-8 text-neutral-300">
          No projects available right now.
        </div>
      ) : (
        <>
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {paginatedProjects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 transition hover:border-amber-400/40"
              >
                <div className="relative h-56 overflow-hidden bg-black/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized={project.image.startsWith("http")}
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-2xl font-semibold text-white leading-tight">
                      {project.title}
                    </h2>
                    <span className="text-sm text-neutral-400">★ {project.stars}</span>
                  </div>

                  <p className="mt-4 text-neutral-300 leading-8">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                      {project.language}
                    </span>

                    {project.topics.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-sm text-neutral-500">
                    Updated {new Date(project.updatedAt).toLocaleDateString()}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-amber-400"
                    >
                      View GitHub →
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-white"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
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