import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { developer, projects } from '@/data/portfolio';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ProjectActions, ProjectVisual } from '@/components/project-showcase';
import { pageMetadata } from '@/lib/metadata';

type ProjectPageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.id })); }

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.id === slug);
  if (!project) return { title: `Project not found — ${developer.name}` };
  return pageMetadata(`${project.name} — ${developer.name}`, project.description, `/projects/${project.id}`);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex(project => project.id === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const nextProject = projects.length > 1 ? projects[(index + 1) % projects.length] : null;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navigation />
    <main id="main" className="project-detail-page container" tabIndex={-1}>
      <div className="collection-breadcrumb"><Link href="/projects"><ArrowLeft size={15} />All projects</Link><span className="mono">PROJECT / {project.number}</span></div>
      <header className="detail-heading"><div className="section-label"><span className="label-mark" /><span className="mono">{project.category.toUpperCase()}</span></div><h1>{project.name}<span className="accent-text">.</span></h1><p>{project.description}</p></header>
      <div className="detail-visual-layout"><ProjectVisual project={project} /><aside className="detail-project-info" aria-label="Project information"><span className="mono">AT A GLANCE</span><dl><div><dt>Project</dt><dd>{project.name}</dd></div><div><dt>Focus</dt><dd>{project.category}</dd></div><div><dt>Built with</dt><dd><div className="tech-badges">{project.technologies.map(technology => <span key={technology}>{technology}</span>)}</div></dd></div></dl><ProjectActions project={project} /></aside></div>
      <section className="detail-overview" aria-labelledby="overview-heading"><div><span className="mono accent-text">01 / THE IDEA</span><h2 id="overview-heading">Inside the project.</h2><p>{project.longDescription}</p></div><div><span className="mono accent-text">02 / WHAT IT DOES</span><h2>Built with purpose.</h2><ul>{project.features.map(feature => <li key={feature}><span><Check size={16} /></span>{feature}</li>)}</ul></div></section>
      <div className="detail-next-project"><Link className="text-link" href="/projects"><ArrowLeft size={16} />View all projects</Link>{nextProject && <Link className="next-project-link" href={`/projects/${nextProject.id}`}><span><small className="mono">NEXT PROJECT</small><b>{nextProject.name}</b></span><ArrowUpRight size={30} /></Link>}</div>
    </main>
    <Footer />
  </>;
}
