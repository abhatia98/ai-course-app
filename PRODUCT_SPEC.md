# Product Spec: AI Foundations Course Web App

## Product vision

Build an interactive, course-first web application that feels like a serious online learning platform for advanced self-study.

The app should teach the software and hardware story of modern AI:
- classical AI and statistical learning
- deep learning and foundation models
- post-training, tools, and agentic systems
- chips, distributed systems, and AI datacenters
- robustness, interpretability, safety, and frontier research

The end product should feel like a premium learning experience rather than a static document viewer.

## Primary user

A technically literate learner with:
- basic statistics
- basic computer science background
- strong curiosity about how AI actually works end to end

The user is not assumed to be a professional ML researcher or hardware engineer at the beginning of the course.

## Core product goals

The app must help a learner:
- understand the conceptual progression of AI from symbolic systems to foundation models
- study important primary-source papers
- learn each lesson through guided explanations, definitions, and research context
- test understanding through quizzes
- track progress across the whole curriculum
- move smoothly between software, algorithms, systems, and hardware topics

## MVP goals

Version 1 should include:

- A polished landing page that explains the course
- A course dashboard with modules and lesson progress
- A module view with ordered lessons
- A lesson page with:
  - overview
  - key papers
  - lesson plan
  - quiz
- A quiz engine with immediate feedback after submission
- Progress tracking stored locally in the browser
- Search across lesson titles, paper titles, and lesson summaries
- Responsive design for desktop and mobile
- Accessibility-friendly semantics and keyboard navigation

## Non-goals for MVP

Do not build these into the first version:
- authentication
- payments
- video streaming
- collaborative features
- authoring CMS
- cloud note syncing
- discussion forums
- certificates

These can be added later if the core learning experience is strong.

## Information architecture

Top-level app areas:

- Landing page
- Course dashboard
- Module pages
- Lesson pages
- Search
- Progress page

Suggested route map:

- `/` — landing page
- `/course` — course dashboard
- `/module/[moduleSlug]` — module detail page
- `/lesson/[lessonSlug]` — lesson experience
- `/search` — content search
- `/progress` — learner progress and completion stats

## Lesson page structure

Every lesson page should have a consistent learning shell.

Suggested layout:
- top breadcrumb
- lesson title, module, and estimated study time
- progress header
- left rail or sticky in-page navigation on desktop
- primary lesson content area
- next and previous lesson navigation

Suggested sections on a lesson page:

1. Lesson overview
   - why the lesson matters
   - key learning objectives
   - prerequisite concepts
2. Key papers
   - up to 4 papers
   - short explanation for why each paper matters
   - external links placeholder field in data model
3. Lesson plan
   - definitions
   - key ideas
   - conceptual walkthrough
   - historical context
   - practical implications
4. Quiz
   - 15 to 20 questions
   - multiple choice in MVP
   - score, review, and retry
5. Reflection
   - key takeaways
   - next lesson preview

## UX principles

The product should feel:
- academically serious
- clean and modern
- easy to navigate
- structured enough for long study sessions
- motivating without becoming gamified noise

Design direction:
- avoid generic “AI purple gradient” defaults
- use a calm, high-contrast academic look
- emphasize readable typography and strong spacing
- use visual hierarchy to separate modules, lessons, and sections
- use progress indicators sparingly but clearly

## Content model

### Course
Fields:
- id
- slug
- title
- subtitle
- description
- targetAudience
- modules
- totalLessons

### Module
Fields:
- id
- slug
- title
- description
- order
- lessonIds

### Lesson
Fields:
- id
- slug
- moduleId
- order
- title
- shortDescription
- estimatedMinutes
- difficulty
- prerequisites
- learningObjectives
- papers
- lessonPlan
- quiz
- futureDirections
- nextLessonId
- prevLessonId

### Paper
Fields:
- title
- authors
- year
- whyItMatters
- url

### LessonPlan
Fields:
- summary
- sections
- keyTerms
- takeaways

### QuizQuestion
Fields:
- id
- prompt
- type
- choices
- correctAnswerIndex
- explanation

### Progress
Fields:
- lessonId
- completedSections
- quizAttempts
- bestScore
- completedAt
- bookmarked

## Storage strategy

For MVP:
- content is stored locally in JSON or MDX files within the repo
- progress is stored in local storage
- no backend required

For future versions:
- move progress to a database
- add authentication
- add authoring workflows
- add content versioning

## Recommended technical stack

Build the MVP with:
- Next.js App Router
- TypeScript
- Tailwind CSS
- React server and client components where appropriate
- local JSON or MDX content loaders
- lightweight client state for progress and quiz state
- optional zod validation for content files

Why this stack:
- fast iteration
- easy deployment
- easy local content editing
- strong support for polished course UIs
- easy future migration to a database-backed app

## Search behavior

The search page should support:
- searching lesson titles
- module names
- paper titles
- short descriptions
- key terms when available

MVP search can be client-side and in-memory.

## Progress behavior

The user should be able to:
- see percent completion for the full course
- see module-level completion
- see lesson completion
- retake quizzes
- view best quiz score
- resume the last viewed lesson

Completion rules for MVP:
- a lesson counts as completed only after the user submits the quiz
- module completion is derived from lesson completion
- course completion is derived from total lessons completed

## Accessibility requirements

Must include:
- semantic headings
- keyboard-accessible tabs and buttons
- good color contrast
- visible focus states
- screen-reader friendly labels
- no critical content hidden behind hover only

## Performance expectations

- the app should feel instant on route changes after initial load
- content pages should render quickly because lesson content is local
- quiz interactions should be client-side and fast
- avoid heavy third-party UI dependencies unless necessary

## Analytics hooks for later

Design the codebase so future analytics can be added for:
- lesson starts
- lesson completions
- quiz attempts
- quiz scores
- search queries
- paper click-throughs

## Suggested MVP component set

- app shell
- sidebar navigation
- module cards
- lesson cards
- progress bar or ring
- search input and result cards
- lesson section tabs or sticky anchors
- paper list cards
- quiz question card
- quiz results panel
- previous and next navigation
- empty and loading states

## Suggested milestone plan

### Milestone 1
Scaffold the project, routes, global layout, and basic theme.

### Milestone 2
Load and render the course outline from local content files.

### Milestone 3
Build lesson pages and key paper sections.

### Milestone 4
Build the quiz engine and local progress persistence.

### Milestone 5
Add search, polish UI, and improve responsiveness.

### Milestone 6
Add tests, content validation, and deployment readiness.


## Source control and deployment model

The MVP should be designed around a personal GitHub repository.
That repository should be the source of truth for:
- application code
- course content files
- deployment history
- future pull-request review and iteration

Recommended hosting path:
- connect the GitHub repository to Vercel for production and preview deployments

Fallback hosting path:
- support GitHub Pages if the app can be exported as a static site without degrading the MVP

## Deployment requirements

The deployment story should be simple enough that a single user can:
- push the repo to GitHub
- connect it to hosting
- get a working public URL without backend setup

Implementation guidance:
- prefer static generation from local content wherever possible
- pre-generate all lesson and module routes from the seed content
- keep progress persistence in the browser
- avoid API routes or database requirements in MVP
- avoid deployment assumptions that only work at the root path
- if GitHub Pages support is included, make room for a repo-subpath deployment model
- document deployment steps clearly for both Vercel and GitHub Pages if both are supported

## Hosting recommendation

Primary recommendation:
- Vercel connected to the personal GitHub repository
- This is the default recommendation because the MVP stack is Next.js-based and should be easy to deploy and preview from GitHub pushes.

Secondary option:
- GitHub Pages via static export
- This is valuable as a no-backend fallback, but only if the final implementation stays within static-hosting constraints.

## Static export compatibility target

If practical, the MVP should remain compatible with static export.
That means the implementation should prefer:
- statically generated routes
- client-side search
- client-side progress and quiz state
- no request-time server logic for core app behavior

This is not a hard requirement if it materially harms the product, but it is a strong preference because it preserves optionality across hosts.

## Definition of done for MVP

The MVP is done when:
- a learner can open the app and understand the course structure immediately
- a learner can navigate all 25 lessons
- each lesson page shows papers, lesson plan, and a quiz
- quiz scoring works correctly
- progress persists after page refresh
- search returns relevant results from course content
- the app is responsive and accessible
- the codebase is organized enough for future content expansion
