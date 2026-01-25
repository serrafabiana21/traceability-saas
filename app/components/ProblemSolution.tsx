export default function ProblemSolution() {
  return (
    <section className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900">The problem</h2>
            <p className="mt-4 text-lg text-slate-600">
              Proof of sourcing is fragmented, slow, and hard to present when it matters most.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                Documentation lives across inboxes, PDFs, and shared drives.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                Teams spend weeks aligning suppliers with seasonal menus.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                Guests and regulators want proof instantly, not later.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-slate-900">The solution</h2>
            <p className="mt-4 text-lg text-slate-600">
              A single, serene workspace that connects supplier proof to every dish and audit.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                Automate supplier onboarding with clean, guided uploads.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                Connect ingredients to menu items in minutes, not days.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                Share trustworthy proof through QR codes and customer portals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
