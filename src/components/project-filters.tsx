"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { PROJECT_FILTERS, type ProjectFilter } from "@/lib/project-filter";

export function ProjectFilters({ value, onChange }: {
  value: ProjectFilter;
  onChange: (value: ProjectFilter) => void;
}) {
  const id = useId();
  const reduceMotion = useReducedMotion();
  return (
    <div className="gallery-filter-group" role="group" aria-label="Filter projects by category">
      {PROJECT_FILTERS.map((category) => (
        <button
          key={category}
          className={`gallery-filter ${value === category ? "is-active" : ""}`}
          type="button"
          aria-pressed={value === category}
          aria-controls="project-results"
          onClick={() => onChange(category)}
        >
          {value === category && <motion.span className="gallery-filter-indicator" layoutId={reduceMotion ? undefined : `${id}-filter`} transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }} aria-hidden="true" />}
          <span className="gallery-filter-label">{category}</span>
        </button>
      ))}
    </div>
  );
}
