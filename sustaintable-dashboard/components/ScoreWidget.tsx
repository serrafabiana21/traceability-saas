export default function ScoreWidget() {
  const score = 82;

  return (
    <section className="rounded-2xl bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-slate-900">Sustainability Score</h2>
      <div className="mt-6 flex items-center justify-center">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-b from-emerald-100 to-emerald-50">
          <div className="absolute inset-3 rounded-full border-8 border-brand/30" />
          <span className="z-10 text-4xl font-bold text-brand">{score}</span>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-slate-500">Your score improved by 4 points this month.</p>
    </section>
  );
}
