import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-card">
      <p className="text-sm uppercase tracking-[0.2em] text-blue-700">Not found</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">We could not find that lesson.</h1>
      <p className="mt-4 max-w-2xl leading-8 text-slate-700">
        Try heading back to the course overview and opening a valid lesson from the syllabus.
      </p>
      <div className="mt-6">
        <Link href="/course" className="rounded-full bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500">
          Back to course
        </Link>
      </div>
    </div>
  );
}
