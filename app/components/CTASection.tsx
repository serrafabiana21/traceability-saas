export default function CTASection() {
  return (
    <section className="border-b border-slate-200/70 py-16">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center shadow-sm sm:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Ready to move faster?
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
          Bring calm to compliance and supply chain visibility.
        </h2>
        <p className="mt-4 text-sm text-slate-600">
          Start with a guided walkthrough and get a tailored roadmap for your team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Schedule demo
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            Talk to sales
          </button>
        </div>
      </div>
    </section>
  );
}
