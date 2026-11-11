"use client";

import { useRef } from "react";
import { Search, X } from "lucide-react";

export function ProjectSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const input = useRef<HTMLInputElement>(null);
  function clearSearch() {
    onChange("");
    input.current?.focus({ preventScroll: true });
  }

  return (
    <form className="gallery-search" role="search" onSubmit={(event) => event.preventDefault()}>
      <label className="gallery-sr-only" htmlFor="project-search">Search projects by name, description, or technology</label>
      <Search size={18} aria-hidden="true" />
      <input
        ref={input}
        id="project-search"
        name="q"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => { if (event.key === "Escape" && value) clearSearch(); }}
        placeholder="Search projects..."
        autoComplete="off"
        spellCheck={false}
        maxLength={120}
        aria-controls="project-results"
      />
      {value && <button type="button" onClick={clearSearch} aria-label="Clear search"><X size={16} aria-hidden="true" /></button>}
    </form>
  );
}
