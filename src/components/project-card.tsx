import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectPreview } from "@/components/project-preview";
import { ProjectActions } from "@/components/project-showcase";
import "./project-gallery.css";

export function ProjectCard({ project, variant = "bento", index = 0 }: {
  project: Project;
  variant?: "featured" | "bento";
  index?: number;
}) {
  return (
    <article className={`work-card work-card--${variant}`}>
      <Link className="work-card-cover" href={`/projects/${project.id}`} aria-label={`Explore ${project.name}`}>
        <ProjectPreview project={project} priority={variant === "bento" && index === 0} />
        <span className="work-cover-shade" aria-hidden="true" />
        <span className="work-cover-tag">{project.discipline}</span>
        <span className="work-cover-arrow" aria-hidden="true"><ArrowUpRight size={21} /></span>
      </Link>
      <div className="work-card-body">
        <div className="work-card-eyebrow"><span>{project.category}</span><span className="mono">{project.number}</span></div>
        <h3><Link href={`/projects/${project.id}`}><span className="work-card-title">{project.name}<span className="accent-text">.</span></span><ArrowUpRight aria-hidden="true" size={24} /></Link></h3>
        <p className="work-card-description">{project.description}</p>
        <ul className="work-technologies" aria-label={`${project.name} technologies`}>
          {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
        </ul>
        <ProjectActions project={project} />
      </div>
    </article>
  );
}
