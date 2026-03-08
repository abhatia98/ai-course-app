'use client';

import { useState } from 'react';
import { markLessonComplete } from '@/lib/progress';

export function LessonCompleteButton({ lessonId }: { lessonId: string }) {
  const [done, setDone] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        markLessonComplete(lessonId);
        setDone(true);
      }}
      className="rounded-full border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
    >
      {done ? 'Lesson marked complete' : 'Mark lesson complete'}
    </button>
  );
}
