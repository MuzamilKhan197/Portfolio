/**
 * Generate the portfolio's local, authentic brand marks from Simple Icons.
 * Run `node scripts/generate-icons.mjs` after changing skill icon slugs.
 * Simple Icons stays a development dependency; no icon library is shipped.
 */
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const config = await readFile(
  new URL("../src/data/skills.ts", import.meta.url),
  "utf8",
);
const slugs = [
  ...new Set(
    [...config.matchAll(/\bicon:\s*"([a-z0-9]+)"/g)].map((match) => match[1]),
  ),
];

if (!slugs.length)
  throw new Error("No skill icon slugs were found in skills.ts.");

const outputDirectory = new URL("../public/icons/", import.meta.url);
await mkdir(outputDirectory, { recursive: true });

for (const slug of slugs) {
  const sourcePath = require.resolve(`simple-icons/icons/${slug}.svg`);
  const original = await readFile(sourcePath, "utf8");
  const svg = original.replace(
    "<svg ",
    '<svg width="24" height="24" fill="#343b35" ',
  );
  await writeFile(new URL(`${slug}.svg`, outputDirectory), `${svg.trim()}\n`);
}

console.log(
  `Generated ${slugs.length} local brand icons: ${slugs.join(", ")}.`,
);
