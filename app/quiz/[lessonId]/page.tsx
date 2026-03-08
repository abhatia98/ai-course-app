import { notFound } from 'next/navigation';
import { QuizClient } from '@/components/quiz-client';
import { getLesson, getLessons } from '@/lib/course';

export function generateStaticParams() {
  return getLessons().map((lesson) => ({ lessonId: lesson.id }));
}

export default function QuizPage({ params }: { params: { lessonId: string } }) {
  const lesson = getLesson(params.lessonId);
  if (!lesson) return notFound();

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-blue-700">Quiz</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{lesson.title}</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Answer the questions below and submit to save your score locally in the browser.
        </p>
      </section>
      <QuizClient lesson={lesson} />
    </div>
  );
}
