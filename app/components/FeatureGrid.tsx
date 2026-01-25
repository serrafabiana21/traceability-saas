const features = [
  {
    title: "Supplier readiness",
    description: "Track certifications, audits, and expirations in one view.",
  },
  {
    title: "Lot-level visibility",
    description: "Follow ingredients across every facility and location.",
  },
  {
    title: "Recall automation",
    description: "Launch targeted recalls with instant customer lists.",
  },
  {
    title: "Quality analytics",
    description: "Spot trends in safety and compliance over time.",
  },
  {
    title: "Team workflows",
    description: "Assign tasks and approvals without extra tools.",
  },
  {
    title: "Regulator exports",
    description: "Generate audit packs in seconds with trusted data.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="border-b border-slate-200/70 py-16">
      <div className="space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Feature set
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Everything you need for modern traceability.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-semibold text-slate-500">◻</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
