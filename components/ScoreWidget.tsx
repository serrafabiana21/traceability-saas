export default function ScoreWidget({ score = 86 }: { score?: number }) {
  const progress = `conic-gradient(#059669 ${score * 3.6}deg, #e2e8f0 0deg)`;

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Sustainability Score</h2>
      <div className="mt-6 flex justify-center">
        <div
          className="relative flex h-40 w-40 items-center justify-center rounded-full"
          style={{ background: progress }}
          aria-label={`Sustainability score ${score} out of 100`}
        >
          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white">
            <span className="text-4xl font-bold text-emerald-700">{score}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">/ 100</span>
          </div>
        </div>
      </div>
    </section>
  );
}
