import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const origin = process.env.CHECK_SITE_URL || 'http://127.0.0.1:3003';
const projectSource = await readFile(new URL('../src/data/projects.ts', import.meta.url), 'utf8');
const slugs = [...projectSource.matchAll(/^\s+id: "([a-z0-9-]+)"/gm)].map(match => match[1]);
let checks = 0;
for (const path of ['/', '/projects', ...slugs.map(slug => `/projects/${slug}`)]) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${path}: exactly one main heading`);
  for (const marker of ['<title>', 'name="description"', 'property="og:title"', 'name="twitter:title"']) assert.ok(html.includes(marker), `${path}: ${marker}`);
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
  assert.equal(response.headers.get('x-frame-options'), 'DENY');
  assert.equal(response.headers.get('x-powered-by'), null);
  const csp = response.headers.get('content-security-policy');
  assert.ok(csp?.includes("object-src 'none'") && csp.includes('https://formspree.io'));
  assert.ok(!csp.includes('unsafe-eval'), 'production must not enable eval');
  if (path === '/') {
    assert.ok(html.includes('https://formspree.io/f/manankwk'));
    assert.ok(html.includes('name="_gotcha"'));
    assert.equal((html.match(/as="font"/g) || []).length, 2, 'preload only the two local fonts');
  }
  if (path.startsWith('/projects/')) {
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const twitter = html.match(/name="twitter:title" content="(.*?)"/)?.[1];
    assert.equal(title, twitter, 'project-specific social title');
  }
  checks++;
  console.log(`PASS ${path}`);
}
for (const path of ['/does-not-exist', '/projects/does-not-exist']) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 404, path);
  assert.ok((await response.text()).includes('noindex'));
  checks++;
  console.log(`PASS ${path} (404 + noindex)`);
}
for (const path of ['/robots.txt', '/sitemap.xml', '/opengraph-image', '/icon.svg']) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, path);
  checks++;
  console.log(`PASS ${path}`);
}
console.log(`${checks} production route checks passed.`);
