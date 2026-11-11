import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjectLimit, projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export function FeaturedProjects() {
  const featured = projects.filter(project => project.featured).slice(0, featuredProjectLimit);
  return (
    <section id="projects" className="section projects-section container" tabIndex={-1} aria-labelledby="projects-heading">
      <Reveal className="section-heading featured-heading">
        <div>
          <div className="section-label"><span className="label-mark" /><span className="mono">01 / FEATURED PROJECTS</span></div>
          <h2 id="projects-heading">Ideas, put to work<span className="accent-text">.</span></h2>
        </div>
        <p>A few things I’ve built.<br />Each one, a new problem to solve.</p>
      </Reveal>
      <div className="featured-project-grid">
        {featured.map((project, index) => <Reveal key={project.id} delay={index * 0.08}><ProjectCard project={project} variant="featured" index={index} /></Reveal>)}
      </div>
      <div className="featured-project-footer">
        <p><span className="featured-footer-dot" />Thoughtfully designed. Built with purpose.</p>
        <Link className="button button-primary view-all-projects" href="/projects">View All Projects <span className="project-total">{String(projects.length).padStart(2, "0")}</span><ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}
