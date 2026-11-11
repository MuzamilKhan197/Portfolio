"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, SearchX, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/portfolio";
import { ProjectSearch } from "@/components/project-search";
import { ProjectFilters } from "@/components/project-filters";
import { ProjectPagination } from "@/components/project-pagination";
import { paginateProjects } from "@/lib/project-pagination";
import { ProjectGrid } from "@/components/project-grid";
import { filterProjects, normalizeProjectFilter, type ProjectFilter } from "@/lib/project-filter";
import "./project-gallery.css";

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") ?? "";
  const urlCategory = normalizeProjectFilter(searchParams.get("category"));
  const urlPage = searchParams.get("page") ?? "1";
  const resultsHeading = useRef<HTMLHeadingElement>(null);
  const scrollToResults = useRef(false);
  const [selection, setSelection] = useState({ query: urlQuery, category: urlCategory, page: urlPage });
  const reduceMotion = useReducedMotion();

  // Native history keeps filtering instant and restores controls on back/forward.
  useEffect(() => {
    setSelection({ query: urlQuery, category: urlCategory, page: urlPage });
  }, [urlQuery, urlCategory, urlPage]);

  function updateSelection(values: { query?: string; category?: ProjectFilter; page?: string }, push = false) {
    const next = { ...selection, ...values, page: values.page ?? "1" };
    setSelection(next);
    const url = new URL(window.location.href);
    if (next.query) url.searchParams.set("q", next.query);
    else url.searchParams.delete("q");
    if (next.category !== "All") url.searchParams.set("category", next.category);
    else url.searchParams.delete("category");
    if (next.page === "1") url.searchParams.delete("page");
    else url.searchParams.set("page", next.page);
    const href = `${url.pathname}${url.search}${url.hash}`;
    if (push) window.history.pushState(null, "", href);
    else window.history.replaceState(null, "", href);
  }

  function clearFilters() {
    updateSelection({ query: "", category: "All" });
  }

  const results = filterProjects(projects, selection);
  const selected = paginateProjects(results, selection.page);

  useEffect(() => {
    // Let Back/Forward synchronize local controls before correcting stale URLs.
    if (selection.query !== urlQuery || selection.category !== urlCategory || selection.page !== urlPage) return;
    const url = new URL(window.location.href);
    const canonicalPage = selected.page === 1 ? null : String(selected.page);
    if (url.searchParams.get("page") !== canonicalPage) {
      if (canonicalPage) url.searchParams.set("page", canonicalPage);
      else url.searchParams.delete("page");
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
  }, [selected.page, urlPage, urlQuery, urlCategory, selection]);

  useEffect(() => {
    if (!scrollToResults.current) return;
    scrollToResults.current = false;
    resultsHeading.current?.focus({ preventScroll: true });
    resultsHeading.current?.scrollIntoView({ block: "start", behavior: reduceMotion ? "instant" : "smooth" });
  }, [selected.page, reduceMotion]);

  function changePage(page: number) {
    if (page === selected.page) return;
    scrollToResults.current = true;
    updateSelection({ page: String(page) }, true);
  }
  const hasFilters = selection.query.length > 0 || selection.category !== "All";
  const countText = selected.total ? `Showing ${selected.start}–${selected.end} of ${selected.total} ${selected.total === 1 ? "project" : "projects"}` : "No projects found";

  return (
    <section className="project-gallery" aria-label="Explore projects">
      <div className="gallery-toolbar">
        <ProjectSearch value={selection.query} onChange={(query) => updateSelection({ query })} />
        <ProjectFilters value={selection.category} onChange={(category) => updateSelection({ category }, true)} />
      </div>
      <div className="gallery-results-bar">
        <h2 ref={resultsHeading} tabIndex={-1} className="gallery-result-count" id="project-results-heading">
          {countText}
        </h2>
        <span className="gallery-sr-only" role="status" aria-live="polite" aria-atomic="true">
          {countText}. Page {selected.page} of {selected.pageCount}{selection.category !== "All" ? ` in ${selection.category}` : ""}{selection.query.trim() ? ` for “${selection.query.trim()}”` : ""}.
        </span>
        {hasFilters && <button type="button" className="gallery-reset" onClick={clearFilters}>Clear filters <X size={14} aria-hidden="true" /></button>}
      </div>
      <div className="gallery-results" id="project-results" aria-labelledby="project-results-heading">
        <ProjectGrid projects={selected.items} />
        {results.length === 0 && (
          <motion.div className="gallery-empty" initial={{ opacity: 1, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.3 }}>
            <span className="gallery-empty-icon" aria-hidden="true"><SearchX size={30} strokeWidth={1.4} /></span>
            <span className="gallery-empty-eyebrow mono">NOTHING HERE. YET.</span>
            <h3>A different search, a new possibility.</h3>
            <p>No projects match this combination. Try another name or technology, or come back to the full collection.</p>
            <button className="button button-primary" type="button" onClick={clearFilters}>Clear filters <ArrowRight size={17} aria-hidden="true" /></button>
          </motion.div>
        )}
      </div>
      {selected.total > 0 && <ProjectPagination page={selected.page} pageCount={selected.pageCount} onPageChange={changePage} />}
    </section>
  );
}
