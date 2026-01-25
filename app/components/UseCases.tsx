const useCases = [
  {
    label: "Restaurants",
    title: "Stay ahead of audits and menu changes.",
    description:
      "See ingredient status across locations, manage supplier docs, and simplify inspection prep.",
  },
  {
    label: "Suppliers",
    title: "Share trust instantly with buyers.",
    description:
      "Centralize certifications and proactive alerts to win and retain contracts.",
  },
  {
    label: "Guests",
    title: "Offer transparency without the noise.",
    description:
      "Deliver clear provenance and allergy details with consistent data updates.",
  },
];

export default function UseCases() {
  return (
    <section className="border-b border-slate-200/70 py-16" id="pricing">
      <div className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Use cases
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Tailored experiences for every role.
            </h2>
          </div>
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-semibold text-slate-500">
            <span className="rounded-full bg-white px-4 py-2 text-slate-900">Restaurants</span>
            <span className="px-4 py-2">Suppliers</span>
            <span className="px-4 py-2">Guests</span>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article
              key={useCase.label}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {useCase.label}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {useCase.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{useCase.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
