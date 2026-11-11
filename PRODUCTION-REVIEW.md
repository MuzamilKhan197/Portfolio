# Production review — 11 November 2026

## Completed improvements

- Preserved the portfolio's design, colors, content, layouts, and animation style. Adjusted only the light theme's faint-text color to fix insufficient contrast (previously 3.27:1 against the page background).
- Switched the existing Manrope and Space Grotesk fonts to Next.js local-font loading, using only Latin variable font files, two preloads, swap behavior, and generated fallback metrics. No font CDN requests.
- Kept all public pages statically generated, including the three project detail pages. Screenshots retain Next.js image sizing/lazy loading and selective priority behavior; illustrative previews require no remote image downloads.
- Added CSP, anti-framing, nosniff, referrer, permissions, and HSTS response headers. Production does not allow eval. No dependencies were added.
- Added project-specific Open Graph and Twitter titles, descriptions, and preview images. Existing canonical/sitemap origin validation is preserved.
- Added a branded global 404 page and retryable error boundary without exposing exception details.
- Fixed the lowercase Veyro preview JSX component that prevented type checking/building.
- Repaired icon generation to read the new skills data file. Successfully regenerated 14 local SVG icons.
- Removed the unused older ProjectShowcase component and obsolete email-draft styling.
- Fixed bento sizing to repeat correctly when more projects are added.
- Improved mobile menu keyboard focus and explicit reduced-motion behavior for menu/theme/navigation transitions.
- Contact form now provides sending/success/error states, a timeout, duplicate-submit protection, preserved messages after failure, disabled fields while sending, a named field group, and a Formspree honeypot. Native POST/browser validation remains available before JavaScript loads.
- Added reusable lint, test, and production verification commands. Lint is TypeScript's unused-code analysis, not ESLint; no lint packages were added.

## Verification results

| Check | Result |
| --- | --- |
| npm run lint | Passed |
| npm run typecheck | Passed |
| npm test | 13 passed |
| npm run build | Passed; all public content prerendered |
| npm audit --json | 0 known vulnerabilities across the audited dependency tree |
| npm run check:production | 11 route/metadata/header checks passed |
| Icon generation | 14 icons generated successfully |
| Browser runtime | No runtime errors observed in the homepage checks |
| Contact validation | Empty submission shows four errors and focuses the name input |
| Project search | MongoDB search returns HCM Lite |
| Combined filters | Frontend + MongoDB shows the empty state |
| Responsive overflow | No horizontal overflow observed at 320px, 768px, and 1440px in the tested views |
| Font loading | Browser uses the generated Manrope font family; production HTML preloads two fonts |
| Mobile menu | Opens/closes; Escape restores closed state |

Tests cover case-insensitive/multi-term search, combined filtering, URL filter normalization, existing pagination regressions, contact validation, unsafe/example project links, and public-origin validation/fallbacks. Production checks cover home, projects, all three detail routes, two unknown routes (404 + noindex), robots, sitemap, social image, and favicon. Headers and main/social metadata are checked on each public HTML route.

The initial npm audit failed due to network/certificate access. Retrying with the operating system's trusted certificate store succeeded; TLS verification was kept enabled.

## Deployment requirements and remaining limits

1. Set NEXT_PUBLIC_SITE_URL to the final HTTPS public origin (or deploy on Vercel with its detected deployment URL). No final domain is configured locally. Without it, production canonical links and sitemap entries are omitted, and absolute social-image URLs can fall back to localhost. Rebuild after setting the domain.
2. Replace the placeholder project demo/repository URLs as they become available. They intentionally remain disabled; the portfolio's own demo works. Concept artwork is clearly labeled.
3. Formspree remains an external dependency. Validation was tested without sending a real message. Actual delivery, account activation, quotas, and provider-side spam controls require a deployment test/account confirmation. Success/failure/timeout branches were reviewed but not exercised against the live endpoint.
4. The CSP permits inline scripts/styles to support Next.js static hydration, theme bootstrapping, and existing Motion styles. It constrains sources, frames, objects, base URLs, and form destinations, but is not a strict nonce/hash CSP. Nonce-based CSP would require dynamic rendering; see the Next.js documentation below. Update form-action/connect-src if changing contact providers.
5. Local browser checks used the available Chromium-based in-app browser. Safari and Firefox were not available for direct testing. CSS container units, color-mix, and :has target modern browsers.
6. No Lighthouse score or field Core Web Vitals were measured. Font/network optimizations were implemented, but real LCP/INP/CLS and deployment/CDN performance must be measured on the final host. No before/after speed improvement is claimed.
7. Source review found no hardcoded private API keys or unsafe HTML/eval usage in the app. This is not a guarantee against every vulnerability; the dependency audit reflects known npm advisories at the time of this check.
8. The Node test runner emits an existing module-type detection warning when importing TypeScript fixtures; tests still pass. This does not appear in the production browser.

## Repeat the checks

Run npm run lint, npm run typecheck, npm test, npm audit, and npm run build.
Start the built site on port 3003 with npm run start -- --port 3003, then run npm run check:production. For another target, set CHECK_SITE_URL to its origin. Tests using native TypeScript imports require Node 22.6+; the environment used Node 25.9.

## References used

- [Next.js security headers configuration](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers)
- [Next.js CSP and static/dynamic rendering tradeoffs](https://nextjs.org/docs/app/guides/content-security-policy)
- [Formspree honeypot guidance](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering/)
