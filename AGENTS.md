# AGENTS.md

This repository contains an interactive web app for an advanced AI course.

## Product intent

Build a polished learning platform, not a static content dump.

The product should feel:
- structured
- academically credible
- easy to navigate
- clean on desktop and mobile
- trustworthy and stable

## Repository and deployment intent

Assume the project lives in a personal GitHub repository.
GitHub is the source of truth for code, content, and deployment history.

Preferred deployment target:
- Vercel connected to the GitHub repository

Secondary deployment target:
- GitHub Pages if the app remains compatible with static export

Implementation decisions should preserve an easy GitHub-based deployment flow.
Do not introduce MVP choices that force complex infrastructure.

## Scope rules

For the first implementation:
- use local content files in the repository
- do not introduce authentication
- do not introduce a backend
- do not introduce payments
- do not introduce forum or social features
- do not block on external APIs

## Technical rules

- Use TypeScript everywhere practical.
- Prefer a simple, understandable architecture over abstraction-heavy patterns.
- Keep content loading deterministic.
- Validate content shapes if that can be done without major overhead.
- Keep progress persistence in local storage for MVP.
- Use accessible semantics and keyboard-friendly controls.
- Avoid unnecessary third-party dependencies.
- Prefer implementation patterns that work cleanly with static generation.
- Generate module and lesson routes from local content.
- Avoid request-time dependencies for core learning flows.

## Frontend rules

- Aim for a refined course-platform feel.
- Do not use a generic purple-on-white “AI app” aesthetic.
- Typography and spacing should prioritize reading comfort.
- The lesson page is the most important screen.
- Mobile experience must be solid, not an afterthought.
- Avoid hard-coded assumptions that the site always lives at `/`.

## Content rules

- Preserve the provided course structure and lesson ordering.
- Do not delete lessons.
- Keep support for up to 4 papers per lesson.
- Keep support for 15 to 20 quiz questions per lesson.
- Structure content so fuller lesson text can be expanded later.

## Deployment rules

- Optimize the MVP for easy deployment from GitHub to Vercel.
- Keep GitHub Pages as a fallback when practical.
- If using Next.js features that break static export, document that clearly.
- If static export remains possible, include the config and workflow needed to deploy on GitHub Pages.
- Document local run instructions and deployment steps in the repo README.
- Handle subpath hosting carefully for assets and navigation if Pages support is included.

## Implementation rules

Before finishing:
- run lint
- run typecheck if configured
- run tests if configured
- ensure the build passes if feasible
- ensure deployment instructions are accurate for the actual implementation

When making decisions:
- choose the simplest approach that preserves future extensibility
- prefer shipping a complete MVP over starting adjacent features
- do not leave broken placeholders in core user flows

## UX rules

The app must make it easy to:
- understand where you are in the course
- move between modules and lessons
- see progress
- read papers and lesson content
- take quizzes
- retry quizzes

## Output expectations

When reporting work:
- explain what changed
- mention which files matter most
- mention how to verify the main flows
- mention how to deploy the built app from the GitHub repo
