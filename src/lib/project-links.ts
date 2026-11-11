/** Reserved example domains and incomplete URLs must never become broken actions. */
export function getProjectLink(value: string | null): string | null {
  if (!value) return null;
  // The portfolio itself is available at the current site's homepage.
  if (value === "/") return value;
  try {
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) return null;
    const host = url.hostname.toLowerCase();
    if (host.endsWith('.example') || host === 'example.com' || host.endsWith('.example.com')) return null;
    return url.href;
  } catch {
    return null;
  }
}
