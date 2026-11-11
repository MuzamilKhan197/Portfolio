import assert from "node:assert/strict";
import test from "node:test";
import { PROJECTS_PER_PAGE, paginateProjects, projectPageNumbers } from "./project-pagination.ts";
import { filterProjects } from "./project-filter.ts";

const projects = Array.from({ length: 23 }, (_, index) => ({
  id: `project-${index + 1}`, name: `Project ${index + 1}`,
  category: "Web application", discipline: index % 2 ? "Full Stack" : "Frontend",
  description: "A practical web application.", technologies: index % 2 ? ["MongoDB"] : ["Supabase"],
}));

test("six-item pages cover the complete collection without gaps or duplicates", () => {
  assert.equal(PROJECTS_PER_PAGE, 6);
  const pages = [1, 2, 3, 4].map(page => paginateProjects(projects, page));
  assert.deepEqual(pages.map(({ items }) => items.length), [6, 6, 6, 5]);
  assert.deepEqual(pages.flatMap(({ items }) => items.map(({ id }) => id)), projects.map(({ id }) => id));
  assert.deepEqual([pages[1].start, pages[1].end, pages[1].total], [7, 12, 23]);
});

test("search and discipline filters apply before pagination", () => {
  const filtered = filterProjects(projects, { query: " MONGODB ", category: "Full Stack" });
  const result = paginateProjects(filtered, 99);
  assert.deepEqual([result.total, result.pageCount, result.page, result.items.length], [11, 2, 2, 5]);
  assert.equal(result.items[0].id, "project-14");
  assert.equal(paginateProjects(filterProjects(projects, {query: "MongoDB", category: "Frontend"})).total, 0);
});

test("invalid pages, empty results, and single pages stay well-defined", () => {
  for (const page of ["invalid", "2bad", "Infinity", -3, 0, null, 1.5, Number.MAX_VALUE]) assert.equal(paginateProjects(projects, page).page, 1);
  assert.deepEqual(paginateProjects([], 4), {items: [], page: 1, pageCount: 1, total: 0, start: 0, end: 0});
  assert.equal(paginateProjects(projects.slice(0, 6), 2).page, 1);
  assert.equal(paginateProjects(projects.slice(0, 7), 2).items.length, 1);
});

test("removing projects clamps to the last populated page", () => {
  const result = paginateProjects(projects.slice(0, 12), 4);
  assert.deepEqual([result.page, result.pageCount, result.start, result.end], [2, 2, 7, 12]);
});

test("page number windows include current and boundary pages with compact gaps", () => {
  assert.deepEqual(projectPageNumbers(1, 1), [1]);
  assert.deepEqual(projectPageNumbers(5, 20), [1, 4, 5, 6, 20]);
  assert.deepEqual(projectPageNumbers(20, 20), [1, 17, 18, 19, 20]);
  assert.deepEqual(projectPageNumbers(1, 4), [1, 2, 3, 4]);
});
