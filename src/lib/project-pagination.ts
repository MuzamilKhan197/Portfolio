export const PROJECTS_PER_PAGE = 6;

/** Slice an already-filtered collection, clamping stale/deleted page URLs. */
export function paginateProjects<T>(projects: T[], requestedPage: string | number | null = 1) {
  const total = projects.length;
  const pageCount = Math.max(1, Math.ceil(total / PROJECTS_PER_PAGE));
  const numericPage = Number(requestedPage);
  const validPage = Number.isSafeInteger(numericPage) && numericPage > 0 ? numericPage : 1;
  const page = Math.min(validPage, pageCount);
  const offset = (page - 1) * PROJECTS_PER_PAGE;
  return {
    items: projects.slice(offset, offset + PROJECTS_PER_PAGE),
    page, pageCount, total,
    start: total ? offset + 1 : 0,
    end: Math.min(offset + PROJECTS_PER_PAGE, total),
  };
}

/** First/last pages and nearby numbers keep large collections easy to navigate. */
export function projectPageNumbers(page: number, pageCount: number) {
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, index) => index + 1);
  const visible = new Set([1, pageCount, page - 1, page, page + 1]);
  if (page <= 3) [2, 3, 4].forEach(number => visible.add(number));
  if (page >= pageCount - 2) [pageCount - 3, pageCount - 2, pageCount - 1].forEach(number => visible.add(number));
  return [...visible].filter(number => number >= 1 && number <= pageCount).sort((a, b) => a - b);
}
