# Codex Build Prompt

Read these files first:
- `README.md`
- `DEPLOYMENT.md`
- `AGENTS.md`
- `PRODUCT_SPEC.md`
- `ROUTES_AND_COMPONENTS.md`
- `course-outline.seed.json`
- `course-content.schema.json`

Build a production-quality MVP of this web app in this repository.

## Repository and deployment context

Assume this project lives in a personal GitHub repository.
That repository is the source of truth for code and content.

Default hosting target:
- Vercel connected to the GitHub repository

Fallback hosting target:
- GitHub Pages via static export

Build the MVP so it deploys cleanly to Vercel from GitHub.
If practical without harming product quality, also keep the app compatible with static export so GitHub Pages remains a viable fallback.

## What to build

Create a polished, interactive course platform for learning AI from foundations through hardware, systems, safety, and frontier research.

The product must include:
- landing page
- course dashboard
- module pages
- lesson pages
- quiz engine
- local progress tracking
- search
- responsive layout

## Product constraints

- Use Next.js App Router.
- Use TypeScript.
- Use local content files from the repo.
- Do not add authentication or a backend in this first version.
- Keep the architecture clean and easy to extend.
- Prefer patterns that work on both Vercel and static hosting.

## Deployment constraints

- Generate module and lesson routes from local content so they can be built ahead of time.
- Do not rely on API routes, server actions, databases, or request-time server logic for MVP behavior.
- Handle progress and quiz persistence on the client.
- Avoid assumptions that the app will always be hosted at the root path.
- Add deployment documentation to the repo README for both Vercel and GitHub Pages.
- If the implementation remains static-export compatible, include the necessary config and a GitHub Actions workflow for Pages deployment.

## UX constraints

The app should feel like a premium technical course product.
It should not feel like a generic admin dashboard or a rough prototype.

Priorities:
- excellent lesson reading experience
- clear progress tracking
- intuitive navigation
- strong mobile responsiveness
- clean typography and spacing
- accessible interactive controls

## Content constraints

Use the provided course outline as the source of truth.
Render all six modules and all twenty-five lessons.

Each lesson page should include:
- title and metadata
- learning objectives
- key papers
- lesson summary or lesson plan content
- quiz section
- next and previous lesson navigation

If fuller lesson text is not yet available for every lesson, structure the code so content can be expanded later without refactoring the app.

## Quiz requirements

- multiple-choice quiz UI for MVP
- correct scoring
- answer explanations
- retry support
- completion updates progress
- local persistence of best score

## Search requirements

Search over:
- module titles
- lesson titles
- lesson descriptions
- paper titles
- key terms if present

## Quality bar

Before you finish:
- make the app feel cohesive and complete
- avoid placeholder junk in important UI
- ensure the main routes work
- ensure progress persists after refresh
- ensure lesson navigation is correct
- ensure the app is responsive
- add basic tests for critical quiz or progress logic if practical
- run lint and build if available
- verify the deployment path is documented clearly

## Definition of done

Done means:
- I can run the app locally
- I can browse the curriculum
- I can open any lesson
- I can take a quiz
- I can refresh and keep my progress
- I can search the course
- the app looks intentional and polished
- I can push it to my GitHub repo and deploy it cleanly

## Implementation approach

Start by:
1. scaffolding the app
2. defining shared types from the schema
3. loading the seed data
4. building the shell and routes
5. implementing lesson pages
6. implementing quiz and progress logic
7. implementing search
8. polishing the UI
9. making deployment assumptions explicit in config
10. adding deployment docs and, if still static-export compatible, a GitHub Pages workflow
11. verifying the app

Make reasonable product decisions without asking broad planning questions.
If something is unspecified, choose the most sensible MVP interpretation and proceed.
