"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { projectPageNumbers } from "@/lib/project-pagination";

export function ProjectPagination({ page, pageCount, onPageChange }: {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}) {
  const pages = projectPageNumbers(page, pageCount);
  return (
    <nav className="project-pagination" aria-label="Project pages">
      <button className="project-page-step" type="button" disabled={page === 1} onClick={() => onPageChange(page - 1)} aria-controls="project-results" aria-label="Previous page">
        <ArrowLeft size={16} aria-hidden="true" /><span>Previous</span>
      </button>
      <div className="project-page-numbers">
        {pages.map((number, index) => <span className="project-page-number-group" key={number}>
          {index > 0 && number - pages[index - 1] > 1 && <span className="project-page-ellipsis" aria-hidden="true">…</span>}
          <button className="project-page-number" type="button" aria-label={`Page ${number}`} aria-current={number === page ? "page" : undefined} aria-controls="project-results" onClick={() => onPageChange(number)}>{number}</button>
        </span>)}
      </div>
      <button className="project-page-step" type="button" disabled={page === pageCount} onClick={() => onPageChange(page + 1)} aria-controls="project-results" aria-label="Next page">
        <span>Next</span><ArrowRight size={16} aria-hidden="true" />
      </button>
    </nav>
  );
}
