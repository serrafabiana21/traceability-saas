const problems = [
  "Disconnected spreadsheets slow response times.",
  "Supplier data lives in silos across teams.",
  "Audit evidence is assembled manually each quarter.",
];

const solutions = [
  "Centralized traceability records with live status.",
  "Automated checks for safety, recalls, and compliance.",
  "Instant reporting for regulators and leadership.",
];

export default function ProblemSolution() {
  return (
    <section className="border-b border-slate-200/70 py-16" id="solutions">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            The problem
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Fragmented compliance slows every decision.
          </h2>
          <ul className="space-y-3 text-sm text-slate-600">
            {problems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            The solution
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            One calm workspace for every stakeholder.
          </h2>
          <ul className="space-y-3 text-sm text-slate-600">
            {solutions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
