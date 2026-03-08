import Link from 'next/link';
import type { Lesson } from '@/lib/types';

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
      <p className="text-sm text-slate-500">Lesson {lesson.number}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{lesson.title}</h2>
      <p className="mt-4 leading-7 text-slate-700">{lesson.summary}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={`/lesson/${lesson.id}`} className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
          Open lesson
        </Link>
        <Link href={`/quiz/${lesson.id}`} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
          Take quiz
        </Link>
      </div>
    </div>
  );
}
