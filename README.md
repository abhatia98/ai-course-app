# AI Course Web App Handoff Bundle

This bundle is designed to be committed into a personal GitHub repository and then handed to Codex so it can build the app with minimal extra prompting.

Files included:

- `PRODUCT_SPEC.md` — the product requirements document for the course app
- `ROUTES_AND_COMPONENTS.md` — screen-by-screen UX and component architecture
- `course-outline.seed.json` — structured seed data for the 25-lesson course
- `course-content.schema.json` — JSON schema for course content
- `AGENTS.md` — repo-level implementation instructions for Codex
- `CODEX_BUILD_PROMPT.md` — an exact prompt to paste into Codex
- `DEPLOYMENT.md` — GitHub repository and hosting instructions

Recommended workflow:

1. Create a fresh personal GitHub repository for the project.
2. Copy these files into the repo root and push the first commit.
3. Start Codex in the repo.
4. Ask Codex to read the spec files and implement the MVP.
5. Keep GitHub as the source of truth for all code, content, and design iterations.
6. Connect the repo to hosting.
7. Review preview deployments, then iterate on lesson depth, content polish, and analytics.

Recommended hosting:

- Primary recommendation: Vercel connected to the GitHub repository.
  - Best fit for a Next.js MVP.
  - Automatic production deploys on push.
  - Automatic preview deploys for branches and pull requests.
  - Easiest path if the app later grows beyond a fully static site.
- Secondary option: GitHub Pages.
  - Good if you want everything hosted directly from GitHub.
  - Works best if Codex keeps the app compatible with static export.
  - Requires a little more care around `basePath`, asset paths, and static-only Next.js features.

Recommended first build target:

- A fully working MVP with local content files, local progress tracking, full lesson navigation, and quiz flows.
- No backend or authentication required in version 1.
- Content should live in the repository so the app is easy to preview, revise, and deploy.
- The MVP should be deployable from a personal GitHub repo without backend infrastructure.

Recommended stack:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Local JSON or MDX content
- Local storage for progress persistence
- Simple test coverage for routing, quiz logic, and progress calculations

Deployment design guidance:

- Prefer an implementation that deploys cleanly to Vercel from GitHub.
- Keep the MVP static-export compatible if practical so GitHub Pages remains available as a fallback.
- Use pre-generated routes for modules and lessons from local content.
- Avoid features that would force a backend in version 1.
- Make subpath hosting possible in case the site is deployed at `username.github.io/repo-name`.

After the MVP works, the natural next upgrades are:

- Notes and highlights
- Search across lessons and papers
- User accounts and synced progress
- Admin content editing
- Rich media and diagram support
- Analytics and mastery recommendations
