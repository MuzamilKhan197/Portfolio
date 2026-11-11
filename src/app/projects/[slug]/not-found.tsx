import Link from 'next/link';

export default function ProjectNotFound() {
  return <main className="container project-not-found"><span className="mono accent-text">PROJECT NOT FOUND</span><h1>This page isn’t in the collection.</h1><p>Explore the projects that are available.</p><Link className="button button-primary" href="/projects">View all projects</Link></main>;
}
