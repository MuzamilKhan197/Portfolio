import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { projects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  if (!siteUrl) return [];

  return [
    { url: siteUrl.href, changeFrequency: "monthly", priority: 1 },
    { url: new URL('/projects', siteUrl).href, changeFrequency: 'monthly', priority: 0.9 },
    ...projects.map(project => ({ url: new URL(`/projects/${project.id}`, siteUrl).href, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ];
}
