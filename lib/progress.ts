'use client';

import type { ProgressState } from '@/lib/types';

const STORAGE_KEY = 'ai-course-progress-v1';

export const emptyProgress: ProgressState = {
  completedLessons: [],
  quizScores: {}
};

export function readProgress(): ProgressState {
  if (typeof window === 'undefined') return emptyProgress;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return emptyProgress;
  try {
    const parsed = JSON.parse(raw) as ProgressState;
    return {
      completedLessons: parsed.completedLessons ?? [],
      quizScores: parsed.quizScores ?? {}
    };
  } catch {
    return emptyProgress;
  }
}

export function writeProgress(progress: ProgressState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markLessonComplete(lessonId: string) {
  const progress = readProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    writeProgress(progress);
  }
}

export function saveQuizScore(lessonId: string, score: number) {
  const progress = readProgress();
  progress.quizScores[lessonId] = score;
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
  }
  writeProgress(progress);
}
