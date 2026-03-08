'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { saveQuizScore } from '@/lib/progress';
import type { Lesson } from '@/lib/types';

export function QuizClient({ lesson }: { lesson: Lesson }) {
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    const total = lesson.quiz.length;
    if (!total) return 0;
    const correct = lesson.quiz.filter((q) => selected[q.id] === q.answerIndex).length;
    return Math.round((correct / total) * 100);
  }, [lesson.quiz, selected]);

  const handleSubmit = () => {
    setSubmitted(true);
    saveQuizScore(lesson.id, score);
  };

  return (
    <div className="space-y-6">
      {lesson.quiz.map((question, index) => (
        <section key={question.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
          <p className="text-sm text-slate-500">Question {index + 1}</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight">{question.prompt}</h2>
          <div className="mt-5 space-y-3">
            {question.options.map((option, optionIndex) => {
              const isSelected = selected[question.id] === optionIndex;
              const showCorrect = submitted && optionIndex == question.answerIndex;
              const showIncorrect = submitted && isSelected && optionIndex !== question.answerIndex;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelected((prev) => ({ ...prev, [question.id]: optionIndex }))}
                  className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition ${
                    showCorrect
                      ? 'border-emerald-400 bg-emerald-50'
                      : showIncorrect
                        ? 'border-rose-400 bg-rose-50'
                        : isSelected
                          ? 'border-blue-400 bg-blue-50'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {submitted ? <p className="mt-4 text-sm leading-6 text-slate-600">{question.explanation}</p> : null}
        </section>
      ))}

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        {!submitted ? (
          <button onClick={handleSubmit} className="rounded-full bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500">
            Submit quiz
          </button>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500">Result</p>
              <h3 className="mt-1 text-3xl font-semibold tracking-tight">{score}%</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={`/lesson/${lesson.id}`} className="rounded-full bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500">
                Back to lesson
              </Link>
              <Link href="/dashboard" className="rounded-full border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50">
                View dashboard
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
