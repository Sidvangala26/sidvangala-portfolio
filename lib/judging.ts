export type JudgingEntry = {
  id: string;
  organization: string;
  role: string;
  program: string;
  summary: string;
  href?: string;
  startedAt: string;
  type: "Judge" | "Evaluator" | "Reviewer" | "Panelist" | "Mentor";
  featured?: boolean;
};

const items: JudgingEntry[] = [
  {
    id: "skandalaris-venture-competition",
    organization: "Washington University in St. Louis",
    role: "Competition Judge",
    program: "Skandalaris Venture Competition",
    summary:
      "Serves as a judge for a university-backed venture competition, contributing technical and strategic evaluation across startup and innovation-focused submissions.",
    href: "https://skandalaris.wustl.edu/program/skandalaris-venture-competition/",
    startedAt: "2026-04-01",
    type: "Judge",
    featured: true,
  },
  {
    id: "mayfield-ai-hackathon",
    organization: "Mayfield",
    role: "Hackathon Judge",
    program: "Mayfield AI Hackathon",
    summary:
      "Invited to judge AI hackathon submissions, evaluating technical execution, practical product thinking, and the overall strength of applied AI solutions.",
    startedAt: "2026-04-01",
    type: "Judge",
    featured: true,
  },
];

export const judgingEntries = [...items].sort(
  (a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime()
);

export const featuredJudgingEntries = judgingEntries.filter(
  (item) => item.featured
);

export function getFeaturedJudgingEntries(limit?: number) {
  return typeof limit === "number"
    ? featuredJudgingEntries.slice(0, limit)
    : featuredJudgingEntries;
}
