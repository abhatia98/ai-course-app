import { ProgressDashboard } from '@/components/progress-dashboard';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-[0.2em] text-blue-700">Dashboard</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Your learning progress</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Progress is stored in localStorage for this MVP, so your browser remembers completed lessons and quiz scores.
        </p>
      </section>
      <ProgressDashboard />
    </div>
  );
}
