import type { Project } from "@/data/portfolio";

export const PROJECT_FILTERS = ["All", "Full Stack", "Frontend", "Backend", "UI/UX"] as const;
export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export function normalizeProjectFilter(value: string | null): ProjectFilter {
  return PROJECT_FILTERS.find((category) => category.toLowerCase() === value?.toLowerCase()) ?? "All";
}

export function filterProjects<T extends Pick<Project, "name" | "description" | "technologies" | "category" | "discipline">>(
  projects: T[],
  { query = "", category = "All" }: { query?: string; category?: ProjectFilter },
): T[] {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return projects.filter((project) => {
    if (category !== "All" && project.discipline !== category) return false;
    const searchable = [project.name, project.description, project.category, project.discipline, ...project.technologies].join(" ").toLocaleLowerCase();
    return terms.every((term) => searchable.includes(term));
  });
}
