import Link from 'next/link';
import { getModuleMap } from '@/lib/course';

export function ModuleList() {
  const modules = getModuleMap();

  return (
    <div className="space-y-8">
      {modules.map((group, index) => (
        <section key={group.module} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">
              {index + 1}
            </div>
            <h2 className="text-xl font-semibold tracking-tight">{group.module}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {group.lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/lesson/${lesson.id}`}
                className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/30"
              >
                <p className="text-sm text-slate-500">Lesson {lesson.number}</p>
                <h3 className="mt-1 font-medium text-slate-900">{lesson.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{lesson.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
