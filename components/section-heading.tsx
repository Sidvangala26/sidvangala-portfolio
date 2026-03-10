export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
        {eyebrow}
      </p>

      <h1 className="gradient-text mt-4 text-5xl md:text-7xl font-semibold leading-tight">
        {title}
      </h1>

      {description && (
        <p className="mt-6 max-w-3xl text-lg text-neutral-300 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}