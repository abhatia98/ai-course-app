import Link from 'next/link';

export function Hero() {
  return (
    <section className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-card">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-200">AI from algorithms to AI factories</p>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Learn the software, hardware, and systems stack behind modern AI.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
        A structured course covering learning theory, deep learning, foundation models, chips,
        distributed systems, datacenter operations, and frontier research.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/course" className="rounded-full bg-blue-500 px-5 py-3 font-medium text-white hover:bg-blue-400">
          Start the course
        </Link>
        <Link href="/dashboard" className="rounded-full border border-slate-700 px-5 py-3 font-medium text-slate-100 hover:border-slate-500">
          View progress
        </Link>
      </div>
    </section>
  );
}
