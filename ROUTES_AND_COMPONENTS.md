# Routes and Components

## Route blueprint

### `/`
Purpose:
- introduce the course
- explain what the learner will get
- show the six modules
- present a strong call to action into the course dashboard

Key blocks:
- hero
- course value proposition
- module overview
- sample lesson preview
- “what you will learn” section
- “why this course is different” section
- start learning CTA

### `/course`
Purpose:
- serve as the main learner dashboard

Key blocks:
- course header with title and description
- overall progress
- resume last lesson CTA
- module list with completion indicators
- lesson count and total estimated time
- quick links to search and progress views

### `/module/[moduleSlug]`
Purpose:
- show module context and lessons in order

Key blocks:
- module description
- why this module matters
- ordered lesson list
- each lesson card shows:
  - title
  - short description
  - estimated time
  - progress state
  - CTA to open lesson

### `/lesson/[lessonSlug]`
Purpose:
- the main study interface

Key blocks:
- breadcrumb
- lesson metadata
- sticky section navigation
- overview
- papers
- lesson plan
- quiz
- takeaways
- next and previous lesson navigation

### `/search`
Purpose:
- search across course content

Key blocks:
- search input
- result filters
- grouped results by lessons, papers, and modules
- quick actions to open lesson pages

### `/progress`
Purpose:
- summarize learner status

Key blocks:
- overall completion
- module breakdown
- best scores
- lessons in progress
- completed lessons
- resume flow

## Component architecture

### Layout components
- `AppShell`
- `TopNav`
- `SidebarNav`
- `MobileNav`
- `PageContainer`
- `SectionHeader`

### Course components
- `CourseHero`
- `ModuleCard`
- `ModuleProgress`
- `LessonCard`
- `ResumeLessonCard`
- `ProgressSummary`

### Lesson components
- `LessonHeader`
- `LessonMeta`
- `LessonSectionNav`
- `LearningObjectives`
- `PaperCard`
- `PaperList`
- `LessonPlanSection`
- `KeyTermsBlock`
- `TakeawaysBlock`
- `PrevNextLessonNav`

### Quiz components
- `QuizShell`
- `QuizQuestionCard`
- `ChoiceList`
- `QuizProgress`
- `QuizResults`
- `RetryQuizButton`

### Utility components
- `SearchBar`
- `SearchResultCard`
- `EmptyState`
- `Badge`
- `Pill`
- `ProgressBar`
- `ProgressRing`

## Suggested project structure

```text
app/
  page.tsx
  course/page.tsx
  module/[moduleSlug]/page.tsx
  lesson/[lessonSlug]/page.tsx
  search/page.tsx
  progress/page.tsx

components/
  layout/
  course/
  lesson/
  quiz/
  ui/

content/
  course-outline.seed.json

lib/
  content/
  progress/
  quiz/
  search/
  utils/

types/
  course.ts

public/
  optional static assets
```

## Data loading strategy

For MVP:
- load course content from local JSON
- optionally evolve lesson content into MDX later
- keep the first implementation deterministic and easy to inspect

Suggested approach:
- one loader for all content
- one normalized in-memory representation
- helpers to fetch:
  - all modules
  - lessons by module
  - lesson by slug
  - next and previous lesson
  - searchable index records

## UI behavior details

### Lesson completion
A lesson becomes completed when the quiz is submitted.

### Quiz review
After quiz submission:
- show total score
- highlight correct and incorrect answers
- show explanations
- allow retry

### Search ranking
Prioritize:
- exact lesson title matches
- module title matches
- paper title matches
- short description matches
- key term matches

### Resume flow
Persist the most recently opened lesson and surface it prominently on `/course`.

## Visual notes

The UI should feel closer to:
- a premium online course platform
- a serious technical learning environment
- a product designed for long-form study

It should feel less like:
- a generic admin dashboard
- a slideshow player
- a chat interface
