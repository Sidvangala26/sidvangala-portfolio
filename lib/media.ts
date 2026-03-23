export type MediaItem = {
  id: string;
  outlet: string;
  title: string;
  summary: string;
  href: string;
  publishedAt: string;
  category: "Publication" | "Interview" | "Press";
  featured?: boolean;
};

const items: MediaItem[] = [
  {
    id: "power-mag-openai-helion",
    outlet: "POWER Magazine",
    title: "OpenAI in Talks With Helion to Secure Fusion Energy",
    summary:
      "Coverage highlighting OpenAI's reported discussions with Helion around securing fusion energy, included here as the site's current media mention.",
    href: "https://www.powermag.com/openai-in-talks-with-helion-to-secure-fusion-energy/",
    publishedAt: "2026-03-01",
    category: "Press",
    featured: true,
  },
];

export const mediaItems = [...items].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export const featuredMediaItems = mediaItems.filter((item) => item.featured);

export function getFeaturedMediaItems(limit?: number) {
  return typeof limit === "number"
    ? featuredMediaItems.slice(0, limit)
    : featuredMediaItems;
}
