import type { Metadata } from "next";
import { developer } from "@/data/profile";
import { getSiteUrl } from "@/lib/site-url";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const siteUrl = getSiteUrl();
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: developer.name + " — " + developer.shortRole }];
  return {
    title, description,
    alternates: { canonical: siteUrl ? path : null },
    openGraph: { type: "website", locale: "en_US", siteName: developer.name, title, description, images, ...(siteUrl ? { url: path } : {}) },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  };
}
