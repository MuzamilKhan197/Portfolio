# Edit your portfolio content

Keep your frequently updated content here. Pages read these files automatically; you do not need to edit components for content changes.

| File | What to update |
| --- | --- |
| `profile.ts` | Name, role, email, social links, headline, introduction, about paragraphs, availability |
| `projects.ts` | Projects, descriptions, technologies, features, screenshots, demo/repository links, homepage featured limit |
| `skills.ts` | Skill groups and the homepage toolkit strip (`coreToolkit`) |
| `contact.ts` | Contact form submission endpoint |
| `learning.ts` | Currently learning heading, description, and topics |
| `navigation.ts` | Navigation labels and destinations |
| `portfolio.ts` | Shared exports used by the site; normally leave this file alone |

## Add or update a project

Copy an existing object in the `projects` array in `projects.ts`, then update its values:

- Use a unique URL-friendly `id`, such as `task-manager`. This becomes `/projects/task-manager`.
- Set `number`, `name`, `category`, `description`, and `longDescription`.
- Set `discipline` to `Full Stack`, `Frontend`, `Backend`, or `UI/UX` for the filters.
- Set `featured: true` to include it on the homepage. `featuredProjectLimit` controls how many appear, in array order.
- Update `technologies` and `features` lists.
- Use real `liveUrl` and `repositoryUrl` values, or `null` when unavailable. Example domains stay inactive.
- Put screenshots in `public/projects/`, then set `screenshot: { src: "/projects/my-project.webp", alt: "Describe the screenshot" }`. Keep `null` to use a concept cover.

## Add a skill

Add `{ name: "Technology name", icon: "simple-icons-slug" }` to a group's `skills` array. The icon must exist in `public/icons/`. Run `node scripts/generate-icons.mjs` when adding a supported new icon. Edit `coreToolkit` separately to change the four technologies in the homepage strip.

## Apply changes

Save the file while the development server is running to see updates. For the production preview or deployment, rebuild with `npm run build` and restart the server. Check content edits with `npm run typecheck`.

The All Projects gallery automatically displays six matching projects per page. Adding/removing project objects recalculates pages; no pagination changes are needed. Search and discipline changes reset the selection to page one.
