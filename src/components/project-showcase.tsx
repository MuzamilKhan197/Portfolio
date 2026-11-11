import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/brand-icons";
import type { Project } from "@/data/portfolio";
import { ProjectPreview } from "@/components/project-preview";
import { getProjectLink } from "@/lib/project-links";

export function ProjectVisual({ project }: { project: Project }) {
  return <div className="project-visual"><ProjectPreview project={project} priority /></div>;
}

export function ProjectActions({ project }: { project: Project }) {
  const liveUrl = getProjectLink(project.liveUrl);
  const repositoryUrl = getProjectLink(project.repositoryUrl);
  return <div className="project-action-group">
    <div className="project-actions">
      {liveUrl ? <a className="project-action project-action-primary" href={liveUrl} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={16} /></a> : <button type="button" disabled className="project-action project-action-primary" aria-label="Live demo coming soon" title="The live demo link has not been added yet.">Live demo <ArrowUpRight size={16} /></button>}
      {repositoryUrl ? <a className="project-action" href={repositoryUrl} target="_blank" rel="noopener noreferrer"><Github size={16} />GitHub repo<ArrowUpRight size={14} /></a> : <button type="button" disabled className="project-action" aria-label="GitHub repository coming soon" title="The repository link has not been added yet."><Github size={16} />GitHub repo<ArrowUpRight size={14} /></button>}
    </div>
    {(!liveUrl || !repositoryUrl) && <p className="project-link-note">{!liveUrl && !repositoryUrl ? 'Demo and repository links coming soon.' : !liveUrl ? 'Live demo link coming soon.' : 'Repository link coming soon.'}</p>}
  </div>;
}

