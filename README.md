# Muzamil Khan — portfolio

A responsive personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Motion for React, Lucide, and next-themes. It uses locally bundled Manrope and Space Grotesk variable fonts, an ivory and burnt-orange visual identity, and fully styled light and dark themes.

## Run locally

Use Node.js 20.9 or later and npm.

```sh
npm install
npm run dev
```

Open the local address printed by Next.js, normally `http://127.0.0.1:3000`.

## Verify and build

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run start
```

`npm run start` serves the production build. Stop the development server first if it is already using the same port. The portfolio has no database, API keys, or separate backend.

## Edit the content

`src/data/portfolio.ts` is the central configuration for personal information, email, social links, navigation, project descriptions, technologies, skills, and learning content. Update the `linkedin` field there if the profile address changes.

The collection contains Veyro, HCM Lite, and this Developer Portfolio. Existing application descriptions preserve the project facts provided by Muzamil; the portfolio entry describes the implementation in this repository. The Live Demo and GitHub Repo actions appear on collection cards and detail pages. Unavailable URLs, including clearly marked `.example` placeholders, render as disabled actions with a coming-soon note. The portfolio demo points to the current site's homepage. No repository or deployment URLs are invented.

The homepage shows projects with `featured: true`, up to `featuredProjectLimit` (currently four), in a responsive two-column gallery. “View All Projects” opens `/projects`, which uses an asymmetric bento grid with six projects per page. Search updates immediately across project names, descriptions, categories, and technologies, and combines with the All, Full Stack, Frontend, Backend, and UI/UX filters. Each project has a typed `discipline` matching one of those four disciplines; `category` remains its more descriptive label. Result counts, the empty state, and Clear Filters update together. The `q`, `category`, and `page` URL parameters preserve the selection for sharing and browser Back/Forward. Each configured project also receives a detail page at `/projects/<id>`; add project objects and rebuild to generate their detail pages.

Screenshots default to `null`. The three current projects have custom interface illustrations explicitly labeled “Concept preview,” rather than presented as real product screenshots. New projects receive a generic cover until artwork is configured. The reusable `ProjectCard`, `FeaturedProjects`, `ProjectGrid`, `ProjectSearch`, and `ProjectFilters` components share this data and the existing light/dark design tokens.

To connect the two existing projects, replace these four fields in `src/data/portfolio.ts`:

| Project | Field | Current example |
| --- | --- | --- |
| Veyro | `liveUrl` | `https://veyro-link.example` |
| Veyro | `repositoryUrl` | `https://veyro-github-link.example` |
| HCM Lite | `liveUrl` | `https://hcm-link.example` |
| HCM Lite | `repositoryUrl` | `https://hcm-github-link.example` |

Use the real GitHub repository URL for each `repositoryUrl` field. The buttons activate automatically when valid real URLs replace the placeholders; no component edits are needed.

To add a screenshot, place an image in `public/projects/` and update the project:

```ts
{
  // Other project fields...
  discipline: "Full Stack",
  featured: true,
  screenshot: {
    src: "/projects/veyro.webp",
    alt: "Describe the actual veyro screen shown in this image",
  },
  repositoryUrl: "https://github.com/your-account/your-repository",
  liveUrl: "https://your-project.example",
}
```

Use your real URLs in place of these examples. The interface renders configured screenshots with Next.js Image and responsive image sizes. Prefer appropriately sized WebP, AVIF, or PNG files. Local `/public` paths require no additional image-host configuration. Add another object to the `projects` array for a future project, and set `featured: true` to include it in the homepage selection.

## Customize the design

Design tokens and responsive layouts live in `src/app/globals.css`. The base palette uses ivory `#f7f6f2`, ink `#242722`, burnt orange `#bd4525`, and dark background `#171916`. Adjust the light and dark token sets together to preserve contrast. Fonts are installed through `@fontsource-variable/manrope` and `@fontsource-variable/space-grotesk`, so visitors do not need to contact Google Fonts.

The `headline` field uses newlines to define its three display lines. Its last line receives the accent color. Brand icons are local SVG files generated from Simple Icons; run `node scripts/generate-icons.mjs` after adding a new skill icon slug. New projects without artwork receive a neutral cover using their configured name and category.

The theme follows the operating system until a visitor chooses light or dark. Their choice is stored by next-themes and restored before the page is painted. Motion and CSS respect the device's reduced-motion preference. Navigation, project highlights, theme selection, email copying, and back-to-top controls support keyboard use.

The contact form validates all fields and submits to Formspree. Visitors see sending, success, and failure feedback; failed or timed-out submissions retain their message for retry. A hidden honeypot helps filter spam. Without JavaScript, native POST submission and browser validation remain available. The endpoint is configured in `src/data/contact.ts`. If the provider changes, update the allowed form/connect origins in `next.config.ts` as well.

On Node 22.6+, run `node --test src/lib/project-filter.test.mjs src/lib/project-pagination.test.mjs` to check combined search/filter behavior, category normalization, and the retained pagination utility. The gallery paginates filtered results, and regression tests cover page limits, stale URLs, deleted projects, and single/empty results. Test fixtures do not add fictional projects to the website.

## Deploy to Vercel

1. Push this project to your Git repository.
2. Import that repository in Vercel and select the Next.js framework preset.
3. Leave the build command as `npm run build` and let Vercel manage the output directory.
4. Add `NEXT_PUBLIC_SITE_URL` with your final absolute site URL, such as `https://your-domain.example`. Use your actual domain, without a path.
5. Deploy. After connecting or changing a custom domain, update the environment variable and redeploy.

Copy `.env.example` to `.env.local` for local environment settings. Never commit secrets or `.env.local`.

`src/lib/site-url.ts` uses `NEXT_PUBLIC_SITE_URL` first, then Vercel's production/deployment hostname. A production build without a known public URL omits the canonical URL and sitemap entry. Social image URLs fall back to localhost for local previews, so configure the public URL before deploying outside Vercel. The app includes search metadata, a generated Open Graph image, `robots.txt`, `sitemap.xml`, and a custom favicon.

Before sharing the portfolio, confirm the LinkedIn address, add any available real project links and screenshots, and check the page on a phone and in both themes.


## Production verification

See `PRODUCTION-REVIEW.md` for the audit, verified checks, deployment requirements, and testing limits. `npm run lint` uses TypeScript unused-code checks without adding a lint dependency. Run `npm run check:production` against a running production server; set `CHECK_SITE_URL` if it is not on port 3003.


### Project pagination

The project collection displays six matching projects per page. Search and discipline filters run before pagination; changing either resets to page one. The `q`, `category`, and `page` URL parameters preserve shareable selections and browser Back/Forward navigation. Invalid or stale page numbers are clamped when projects are removed. Add or remove entries in `src/data/projects.ts`; page counts update automatically. Pagination controls remain visible for single-page collections and disappear for empty results. `src/components/project-pagination.tsx` provides the reusable controls.
