# Project images

All 18 project images are saved here as optimized 1280 × 800 WebP assets. The complete set is approximately 539 KB.

- 16 images are real screenshots captured from the configured live project websites.
- LIVERR and AESTHETIQUE use custom concept covers created with built-in image generation. Optional Veyro and HCM Lite concept alternatives are also saved but are not used by the site. These are labeled Concept preview and must not be presented as actual application screenshots.
- Veyro, HCM Lite, and TaskFlow show their public sign-in screens; no private account was accessed.
- Small tools are cropped closer to their actual interfaces for readability. No interface content or data was fabricated in real screenshots.

`image-sources.json` records each image's type, source, and file size. `generation-prompts.json` contains the full prompt set used for the four generated covers.

Images are connected through each project's `screenshot` field in `src/data/projects.ts`. Use `kind: "screenshot"` for actual captures and `kind: "concept"` for illustrative artwork. The existing fallback artwork remains available when an image is null.

To replace an image, add its file here and update that project's src and alt fields. Use descriptive alt text. Keep screenshots and concept artwork correctly classified.
