const steps = [
  {
    title: "Connect data sources",
    description:
      "Import supplier documents, lab results, and lot data in minutes with secure syncs.",
  },
  {
    title: "Monitor live status",
    description:
      "Unified dashboards reveal gaps before they become operational risks.",
  },
  {
    title: "Act with confidence",
    description:
      "Launch recalls, share reports, and update stakeholders from one place.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-b border-slate-200/70 py-16">
      <div className="space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            How it works
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            A clear flow from intake to action.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-sm font-semibold text-slate-500">
                0{index + 1}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
