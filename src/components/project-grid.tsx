"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="project-bento-grid">
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project-grid-item${index % 3 === 0 ? " is-highlighted" : ""}${(index % 3 === 2 || (index === projects.length - 1 && index % 3 === 0)) ? " is-wide" : ""}`}
            layout={reduceMotion ? false : "position"}
            initial={{ opacity: 1, y: reduceMotion ? 0 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : Math.min(index, 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard project={project} variant="bento" index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
