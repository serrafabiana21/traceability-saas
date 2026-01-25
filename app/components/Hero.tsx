const featureChips = [
  "Real-time traceability",
  "Audit-ready exports",
  "Supplier scorecards",
  "Smart recalls",
];

export default function Hero() {
  return (
    <section className="border-b border-slate-200/70 py-20" id="product">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Food supply chain platform
          </p>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Trace every ingredient with clarity, not complexity.
            </h1>
            <p className="text-lg text-slate-600 sm:text-xl">
              A modern compliance workspace built for operators who want a clean, fast
              view of sourcing, safety, and supplier readiness.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Get started
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              View platform
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {featureChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">Live readiness</p>
                <p className="text-xs text-slate-500">All suppliers</p>
              </div>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                Updated 4m ago
              </span>
            </div>
            <div className="space-y-4">
              {["Produce", "Dairy", "Seafood"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item}</p>
                    <p className="text-xs text-slate-500">24 suppliers tracked</p>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600">98%</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Map preview
              </p>
              <div className="mt-4 h-28 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
