const logos = [
  "Nordic Kitchens",
  "Fjord Foods",
  "Supplyline Co.",
  "Harvest Union",
  "Lumen Market",
];

export default function SocialProof() {
  return (
    <section className="border-b border-slate-200/70 py-12" id="resources">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-slate-500">
          Trusted by modern operators across the food supply chain
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {logos.map((logo) => (
            <span
              key={logo}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
