'use client';

import { useEffect, useMemo, useState } from 'react';
import { getLessons } from '@/lib/course';
import { readProgress } from '@/lib/progress';

export function ProgressDashboard() {
  const lessons = getLessons();
  const [ready, setReady] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);
  const [scores, setScores] = useState<Record<string, number>>({});

  useEffect(() => {
    const progress = readProgress();
    setCompleted(progress.completedLessons);
    setScores(progress.quizScores);
    setReady(true);
  }, []);

  const completionRate = useMemo(() => {
    if (!lessons.length) return 0;
    return Math.round((completed.length / lessons.length) * 100);
  }, [completed, lessons.length]);

  if (!ready) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">Loading progress...</div>;
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        <p className="text-sm text-slate-500">Overall progress</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">{completionRate}% complete</h2>
        <div className="mt-4 h-3 rounded-full bg-slate-100">
          <div className="h-3 rounded-full bg-blue-600" style={{ width: `${completionRate}%` }} />
        </div>
        <p className="mt-4 text-sm text-slate-600">
          {completed.length} of {lessons.length} lessons completed.
        </p>
      </section>

      <section className="space-y-4">
        {lessons.map((lesson) => {
          const isComplete = completed.includes(lesson.id);
          const score = scores[lesson.id];
          return (
            <div key={lesson.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-500">Lesson {lesson.number}</p>
                  <h3 className="font-medium text-slate-900">{lesson.title}</h3>
                </div>
                <div className="text-sm text-slate-600">
                  {isComplete ? 'Completed' : 'Not started'}
                  {typeof score === 'number' ? ` · Quiz ${score}%` : ''}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
