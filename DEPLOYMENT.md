# Deployment Guide

This bundle assumes you will keep the project in a personal GitHub repository and deploy from there.

## Recommended path: GitHub repo + Vercel

Use this when you want the easiest setup and the best long-term fit for a Next.js app.

Suggested flow:
1. Create a personal GitHub repository for the project.
2. Commit this bundle into the repo root.
3. Let Codex build the MVP in that repository.
4. Push the app code to GitHub.
5. Import the repository into Vercel.
6. Let Vercel auto-detect Next.js settings.
7. Use Vercel preview deployments for branches and pull requests.
8. Use the production deployment for your main branch.

Why this is the default recommendation:
- best fit for a Next.js app
- easiest deployment path from a GitHub repo
- preview deployments make UI iteration much easier
- future upgrades like auth or server-side features remain open

## Fallback path: GitHub repo + GitHub Pages

Use this if you want hosting to stay entirely inside GitHub.

This path works best only if the app remains compatible with static export.

That means the built app should avoid or carefully handle:
- API routes
- server actions for core behavior
- request-time server logic
- server-only data dependencies
- default assumptions that the app is hosted at the root path

Recommended Pages-compatible implementation choices:
- use static generation for all module and lesson routes
- keep quiz and progress state in local storage
- keep search client-side
- use content from repo-local JSON or MDX files
- make base path handling configurable for repo-subpath hosting
- if image optimization causes friction, prefer a Pages-compatible image strategy

## Repository setup expectations

Recommended repo contents after Codex builds the app:
- application source
- course content files
- README with local setup and deployment instructions
- optional GitHub Actions workflow for Pages deployment
- any config needed for subpath hosting

## What Codex should optimize for

Ask Codex to:
- treat your personal GitHub repo as the source of truth
- optimize for Vercel deployment first
- preserve GitHub Pages compatibility if practical
- document whichever deployment modes the final implementation supports
- include any config or workflow required by the chosen deployment strategy

## Practical recommendation

Default recommendation:
- host on Vercel from your GitHub repo

Why:
- simplest for a Next.js MVP
- easiest preview workflow during iteration
- easiest path if the app grows beyond a fully static site later

Use GitHub Pages only if you specifically want GitHub-hosted static deployment and are comfortable keeping the MVP within static-export constraints.
