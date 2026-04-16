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
    id: "aijourn-ai-managers-first-generation",
    outlet: "The AI Journal",
    title: "Meet the First Generation of AI Managers Shaping the Role and What AI Success Looks Like",
    summary:
      "The AI Journal features Siddardha Vangala on the emerging role of AI managers — professionals who diagnose organizational needs, identify where AI genuinely fits, and establish governance frameworks. Vangala advocates honest assessment and defines a 1.5x efficiency threshold as a practical ROI benchmark for business AI decisions.",
    href: "https://aijourn.com/meet-the-first-generation-of-ai-managers-shaping-the-role-and-what-ai-success-looks-like/",
    publishedAt: "2026-04-14",
    category: "Publication",
    featured: true,
  },
  {
    id: "cybernews-ai-secondhand-market-resale",
    outlet: "Cybernews",
    title: "Can AI buy and sell stuff on Vinted and Depop better than you?",
    summary:
      "Cybernews coverage on how AI can improve pricing, discovery, and seller workflows in secondhand marketplaces, featuring Siddardha Vangala's perspective on dynamic pricing and resale platform economics.",
    href: "https://cybernews.com/ai-news/ai-secondhand-market-resale/",
    publishedAt: "2026-04-03",
    category: "Press",
    featured: true,
  },
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
