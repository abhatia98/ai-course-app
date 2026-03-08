import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLesson, getLessons } from '@/lib/course';
import { LessonCompleteButton } from '@/components/lesson-complete-button';

export function generateStaticParams() {
  return getLessons().map((lesson) => ({ id: lesson.id }));
}

export default function LessonPage({ params }: { params: { id: string } }) {
  const lesson = getLesson(params.id);
  if (!lesson) return notFound();

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
        <p className="text-sm text-slate-500">{lesson.module} · Lesson {lesson.number}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{lesson.title}</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">{lesson.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/quiz/${lesson.id}`} className="rounded-full bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500">
            Take quiz
          </Link>
          <LessonCompleteButton lessonId={lesson.id} />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
          <h2 className="text-2xl font-semibold tracking-tight">Lesson plan</h2>
          <div className="prose-like mt-5">
            {lesson.lessonPlan.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <h2 className="text-2xl font-semibold tracking-tight">Learning objectives</h2>
            <ul className="mt-5 list-disc pl-5">
              {lesson.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <h2 className="text-2xl font-semibold tracking-tight">Core papers</h2>
            <ol className="mt-5 list-decimal pl-5">
              {lesson.papers.map((paper) => (
                <li key={paper.title}>{paper.title}</li>
              ))}
            </ol>
          </section>
        </div>
      </section>
    </div>
  );
}
