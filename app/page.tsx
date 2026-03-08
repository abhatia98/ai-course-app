import Link from 'next/link';
import { Hero } from '@/components/hero';
import { getCourse, getLessons } from '@/lib/course';

export default function HomePage() {
  const course = getCourse();
  const lessons = getLessons();

  return (
    <div className="space-y-10">
      <Hero />
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
          <p className="text-sm text-slate-500">Lessons</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{lessons.length}</h2>
          <p className="mt-3 leading-7 text-slate-600">A complete survey from learning theory to datacenter operations.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
          <p className="text-sm text-slate-500">Modules</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{course.modules.length}</h2>
          <p className="mt-3 leading-7 text-slate-600">Grouped to mirror how modern AI is built end to end.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
          <p className="text-sm text-slate-500">Format</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Read → Learn → Quiz</h2>
          <p className="mt-3 leading-7 text-slate-600">Each lesson includes papers, a structured lesson plan, and an interactive quiz.</p>
        </div>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-700">About the course</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">{course.title}</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">{course.description}</p>
        <div className="mt-6">
          <Link href="/course" className="rounded-full bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500">
            Browse lessons
          </Link>
        </div>
      </section>
    </div>
  );
}
