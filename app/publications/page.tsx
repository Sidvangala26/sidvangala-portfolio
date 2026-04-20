import { publications } from "@/lib/publications";

export default function PublicationsPage() {
  return (
    <div className="max-w-6xl mx-auto pt-32 pb-20 px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
        Publications
      </p>

      <h1 className="mt-4 text-3xl md:text-5xl font-semibold text-white leading-tight">
        Publications, research records, and citation-ready technical work.
      </h1>

      <p className="mt-6 max-w-3xl text-lg text-neutral-300 leading-8">
        A curated set of citable publications and research outputs that extend
        my engineering work into durable public knowledge artifacts.
      </p>

      <div className="mt-14 grid gap-8">
        {publications.map((publication) => (
          <article
            key={publication.doi}
            className="rounded-[32px] border border-white/10 bg-white/5 p-7 md:p-8 backdrop-blur-xl"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-amber-400">
                  {publication.venue} · {publication.year}
                </p>

                <h2 className="mt-3 max-w-4xl text-2xl md:text-3xl font-semibold text-white leading-tight">
                  {publication.title}
                </h2>
              </div>

              <a
                href={publication.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-amber-400/30 bg-amber-400 px-5 py-2.5 text-sm font-medium text-black transition hover:-translate-y-0.5"
              >
                Open Publication
              </a>
            </div>

            <p className="mt-6 max-w-4xl text-neutral-300 leading-8">
              {publication.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {publication.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-neutral-400">DOI</p>
                <p className="mt-2 break-all text-white">{publication.doi}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-neutral-400">Suggested citation</p>
                <p className="mt-2 text-white leading-7">{publication.citation}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
