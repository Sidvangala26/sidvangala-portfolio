"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { photos } from "@/lib/photos";

const PAGE_SIZE = 9;

type Photo = (typeof photos)[number];

export function PhotoGrid() {
  const [page, setPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const totalPages = Math.ceil(photos.length / PAGE_SIZE);

  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return photos.slice(start, start + PAGE_SIZE);
  }, [page]);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  function openPhoto(photo: Photo) {
    const globalIndex = photos.findIndex((p) => p.src === photo.src);
    setSelectedIndex(globalIndex);
  }

  function closePhoto() {
    setSelectedIndex(null);
  }

  function showPrevPhoto() {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  }

  function showNextPhoto() {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % photos.length);
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closePhoto();
      if (e.key === "ArrowLeft") showPrevPhoto();
      if (e.key === "ArrowRight") showNextPhoto();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  function goToPage(value: number) {
    if (value < 1 || value > totalPages) return;
    setPage(value);
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

      for (let i = start; i <= end; i += 1) {
        pages.push(i);
      }

      if (page < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  }

  return (
    <>
      <div className="space-y-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginated.map((photo, index) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => openPhoto(photo)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] text-left backdrop-blur-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-neutral-400">{photo.category}</p>
                <p className="mt-2 text-lg text-white">{photo.alt}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Prev
          </button>

          {renderPageNumbers().map((item, index) =>
            item === "..." ? (
              <span
                key={`ellipsis-${index}`}
                className="px-2 text-sm text-neutral-500"
              >
                ...
              </span>
            ) : (
              <button
                key={item}
                onClick={() => goToPage(item as number)}
                className={`h-10 w-10 rounded-full border text-sm transition ${
                  item === page
                    ? "border-amber-400/40 bg-amber-400 text-black"
                    : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
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
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.985 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[#111113] shadow-2xl"
            >
              <button
                onClick={closePhoto}
                className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/50 p-2 text-white transition hover:bg-black/70"
              >
                <X className="h-5 w-5" />
              </button>

              <button
                onClick={showPrevPhoto}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-2 text-white transition hover:bg-black/70"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={showNextPhoto}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-2 text-white transition hover:bg-black/70"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[320px] lg:min-h-[700px] overflow-hidden bg-black">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 md:p-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                    {selectedPhoto.category}
                  </p>

                  <h3 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-white">
                    {selectedPhoto.alt}
                  </h3>

                  <p className="mt-6 text-neutral-300 leading-8">
                    {selectedPhoto.description}
                  </p>

                  <p className="mt-8 text-sm text-neutral-500">
                    Use ← and → to browse, or Esc to close.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}