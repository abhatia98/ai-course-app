import courseData from '@/data/course-outline.seed.json';
import type { CourseData, Lesson } from '@/lib/types';

export function getCourse(): CourseData {
  return courseData as CourseData;
}

export function getLessons(): Lesson[] {
  return getCourse().lessons;
}

export function getLesson(id: string): Lesson | undefined {
  return getLessons().find((lesson) => lesson.id === id);
}

export function getModuleMap() {
  const lessons = getLessons();
  return getCourse().modules.map((module) => ({
    module,
    lessons: lessons.filter((lesson) => lesson.module === module)
  }));
}
