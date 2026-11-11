/**
 * The public origin used by canonical links, Open Graph, and the sitemap.
 * Set NEXT_PUBLIC_SITE_URL to your final domain before publishing.
 */
export function getSiteUrl(): URL | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();

  const candidate = configured || (vercel ? `https://${vercel}` : undefined);

  if (candidate) {
    let url: URL;

    try {
      url = new URL(candidate);
    } catch {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL must be a valid absolute HTTP or HTTPS URL.",
      );
    }

    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.username ||
      url.password
    ) {
      throw new Error(
        "The portfolio site URL must use HTTP or HTTPS without credentials.",
      );
    }

    // This is a single-page portfolio hosted at the domain root.
    return new URL(url.origin);
  }

  if (process.env.NODE_ENV !== "production") {
    return new URL("http://localhost:3000");
  }

  // Never advertise localhost as the canonical address of a production site.
  return undefined;
}
