export default function Hero() {
  return (
    <section className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Supply chain clarity
        </p>
        <h1 className="mt-4 text-5xl font-semibold leading-tight text-slate-900 sm:text-6xl">
          Make traceability effortless for every supplier and every customer.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          A calm, compliant workflow that keeps sourcing evidence, audits, and transparency
          stories aligned across your entire menu.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
            href="#cta"
          >
            Join the pilot
          </a>
          <a
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-300"
            href="#how-it-works"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
