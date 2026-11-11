import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navigation />
    <main id="main" className="project-not-found container" tabIndex={-1}>
      <span className="mono accent-text">404 / PAGE NOT FOUND</span>
      <h1>This page has moved, or never existed.</h1>
      <p>Explore the project collection, or head back to the homepage.</p>
      <Link className="button button-primary" href="/">Back to home</Link>
    </main>
    <Footer />
  </>;
}
