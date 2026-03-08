export type Paper = {
  title: string;
  authors?: string;
  year?: number;
  note?: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type Lesson = {
  id: string;
  module: string;
  number: number;
  title: string;
  summary: string;
  objectives: string[];
  papers: Paper[];
  lessonPlan: string[];
  quiz: QuizQuestion[];
};

export type CourseData = {
  title: string;
  subtitle: string;
  description: string;
  modules: string[];
  lessons: Lesson[];
};

export type ProgressState = {
  completedLessons: string[];
  quizScores: Record<string, number>;
};
