const valueProps = [
  {
    title: "Verified sourcing",
    text: "Centralize evidence and supplier documentation in one calm workspace.",
  },
  {
    title: "Audit ready",
    text: "Keep an always-on audit trail without manual spreadsheets or inbox hunts.",
  },
  {
    title: "Guest confidence",
    text: "Publish clear sourcing stories that customers can trust instantly.",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {valueProps.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
