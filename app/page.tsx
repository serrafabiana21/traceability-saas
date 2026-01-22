export default function HomePage() {
  return (
    <section className="flex flex-col gap-12">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Traceability SaaS
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
          Verified sustainability &amp; provenance claims — simple, auditable,
          shareable.
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          An MVP workspace for restaurants and suppliers to collect evidence,
          validate sourcing claims, and share proof with guests.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            className="rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            href="/restaurant"
          >
            Go to Restaurant
          </a>
          <a
            className="rounded-full border border-slate-700 px-6 py-2 text-sm font-semibold text-white transition hover:border-slate-500"
            href="/supplier"
          >
            Go to Supplier
          </a>
        </div>
      </div>
      <div className="max-w-xl rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="text-lg font-semibold text-white">MVP focus</h2>
        <ul className="mt-4 space-y-3 text-slate-300">
          <li>• Collect evidence</li>
          <li>• Verify claims</li>
          <li>• Show guests via QR</li>
        </ul>
      </div>
    </section>
  );
}
