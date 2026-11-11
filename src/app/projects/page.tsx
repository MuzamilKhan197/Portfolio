import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { developer, projects } from "@/data/portfolio";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProjectGallery } from "@/components/project-gallery";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  `Projects — ${developer.name}`,
  `Explore ${developer.name}'s web development projects, technologies, and the work behind each application.`,
  "/projects",
);

export default function ProjectsPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main" tabIndex={-1} className="projects-page container">
        <div className="collection-breadcrumb">
          <Link href="/#home">
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </div>
        <header className="collection-heading">
          <div>
            <h1>
              All Projects<span className="accent-text">.</span>
            </h1>
            <p>A selection of my development and design work.</p>
          </div>
        </header>
        <Suspense
          fallback={
            <div className="gallery-loading" role="status">
              Loading projects…
            </div>
          }
        >
          <ProjectGallery projects={projects} />
        </Suspense>
        <div className="collection-contact">
          <div>
            <span className="mono">HAVE SOMETHING IN MIND?</span>
            <h2>Let’s build the next thing.</h2>
          </div>
          <Link className="button button-primary" href="/#contact">
            Start a conversation
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
