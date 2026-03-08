# AI Course App

A deployable Next.js MVP for an interactive AI course covering foundational ML, modern foundation models, hardware, datacenters, and future research.

## Features

- Course homepage
- Full course map with 25 lessons
- Dynamic lesson pages
- Interactive quizzes with immediate feedback
- Local progress tracking using browser localStorage
- Netlify-compatible Next.js configuration

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Deploy to Netlify

1. Push the full project to GitHub.
2. Import the repository into Netlify.
3. Leave the base directory blank if this app is in the repo root.
4. Use the default build command `npm run build`.
5. Netlify should detect Next.js automatically.

## Content

Course content lives in `data/course-outline.seed.json` and follows `data/course-content.schema.json`.
