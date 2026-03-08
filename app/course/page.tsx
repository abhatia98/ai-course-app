import { ModuleList } from '@/components/module-list';

export default function CoursePage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-blue-700">Course map</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">All modules and lessons</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Navigate through the full curriculum, starting with foundations and ending with frontier research.
        </p>
      </section>
      <ModuleList />
    </div>
  );
}
