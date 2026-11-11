import assert from "node:assert/strict";
import test from "node:test";
import { filterProjects, normalizeProjectFilter } from "./project-filter.ts";

const projects = [
  { name: "veyro", description: "A social web application.", category: "Social media", discipline: "Full Stack", technologies: ["Supabase"] },
  { name: "HCM Lite", description: "HR management with contextual answers.", category: "Human capital management", discipline: "Full Stack", technologies: ["MongoDB", "AI assistant"] },
  { name: "Portfolio", description: "An accessible developer showcase.", category: "Personal website", discipline: "Frontend", technologies: ["Next.js", "Motion"] },
];

test("search matches names, descriptions and technologies without case sensitivity", () => {
  assert.deepEqual(filterProjects(projects, { query: "  veyro  " }), [projects[0]]);
  assert.deepEqual(filterProjects(projects, { query: "contextual" }), [projects[1]]);
  assert.deepEqual(filterProjects(projects, { query: "next.js" }), [projects[2]]);
});

test("search and category apply together, including multi-word cross-field matches", () => {
  assert.deepEqual(filterProjects(projects, { query: "HCM mongodb", category: "Full Stack" }), [projects[1]]);
  assert.deepEqual(filterProjects(projects, { query: "mongodb", category: "Frontend" }), []);
  assert.deepEqual(filterProjects(projects, { query: " ", category: "Full Stack" }), projects.slice(0, 2));
});

test("empty and unmatched categories remain well defined; clearing restores everything", () => {
  assert.deepEqual(filterProjects(projects, { category: "UI/UX" }), []);
  assert.deepEqual(filterProjects([], {}), []);
  assert.deepEqual(filterProjects(projects, { query: "", category: "All" }), projects);
});

test("URL categories normalize to known values and safely recover from unknown values", () => {
  assert.equal(normalizeProjectFilter("full stack"), "Full Stack");
  assert.equal(normalizeProjectFilter("UI/UX"), "UI/UX");
  assert.equal(normalizeProjectFilter("invalid"), "All");
  assert.equal(normalizeProjectFilter(null), "All");
});
