export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
};

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const username = "Sidvangala26";

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("GitHub fetch failed");
  }

  const data = (await response.json()) as GitHubRepo[];
  return data.filter((repo) => !repo.fork).slice(0, 9);
}