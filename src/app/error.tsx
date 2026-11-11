"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="project-not-found container" tabIndex={-1}>
      <span className="mono accent-text">SOMETHING WENT WRONG</span>
      <h1>Let’s try that again.</h1>
      <p>This page could not load. Please try again, or return to the homepage.</p>
      <button type="button" className="button button-primary" onClick={reset}>Try again</button>{" "}
      <a className="button button-secondary" href="/">Back to home</a>
    </main>
  );
}
