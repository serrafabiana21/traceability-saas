export default function ScoreWidget({ score = 86 }) {
  const circle = `conic-gradient(#3E7B5D ${score * 3.6}deg, #E2E8F0 0deg)`;

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Sustainability Score</h2>
      <div className="mt-6 flex justify-center">
        <div
          className="relative flex h-36 w-36 items-center justify-center rounded-full"
          style={{ background: circle }}
          aria-label={`Sustainability score ${score} out of 100`}
        >
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white">
            <span className="text-3xl font-bold text-accent">{score}</span>
            <span className="text-xs uppercase tracking-wide text-slate-500">/100</span>
          </div>
        </div>
      </div>
    </section>
  );
}
