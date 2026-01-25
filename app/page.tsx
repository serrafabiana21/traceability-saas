export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden">
        <div className="mx-auto mt-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-emerald-100 via-slate-50 to-white blur-3xl" />
        <div className="mx-auto -mt-24 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-slate-100 via-emerald-50 to-white blur-3xl" />
      </div>

      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-emerald-100 bg-emerald-50" />
            <span className="text-base font-semibold tracking-tight">SustainTable</span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a className="transition hover:text-slate-900" href="#how-it-works">
              How it works
            </a>
            <a className="transition hover:text-slate-900" href="#who-its-for">
              Who it’s for
            </a>
            <a className="transition hover:text-slate-900" href="#why-now">
              Why now
            </a>
          </div>
          <a
            className="rounded-full border border-slate-300 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            href="mailto:pilot@sustaintable.com"
          >
            Join the pilot
          </a>
        </nav>
      </header>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-20 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600/70">
            Verified sustainability
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Turn sustainability claims into verifiable facts
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            SustainTable connects restaurant teams, supplier documentation, and diners into a single source
            of truth. Map ingredients to dishes, verify claims with evidence, and show guests trusted proof
            through a simple QR scan.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
              href="mailto:pilot@sustaintable.com"
            >
              Request pilot access
            </a>
            <a
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
              href="#how-it-works"
            >
              See how it works
            </a>
          </div>
        </div>
        <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Verified menu view</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] text-emerald-700">
                Live proof
              </span>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-24 rounded-full bg-emerald-200" />
              <div className="h-2 w-40 rounded-full bg-slate-200" />
              <div className="h-2 w-32 rounded-full bg-slate-200" />
            </div>
            <div className="grid gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-800">
                Ingredient chain of custody
              </p>
              <div className="space-y-2 text-xs text-slate-500">
                <p>Supplier certificates uploaded ✓</p>
                <p>Ingredient mapped to dish ✓</p>
                <p>Guest QR story published ✓</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="h-10 w-10 rounded-xl bg-white" />
              <div>
                <p className="text-sm font-medium text-slate-800">Nordic Brasserie</p>
                <p className="text-xs text-slate-500">Seafood tasting menu • 98% verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-20 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">The problem</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Sustainability claims are fragmented across emails, spreadsheets, and PDFs. Greenwashing risks
            erode guest trust, while teams struggle to prove sourcing details at the dish level.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
              Scattered documentation and audit trails
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
              Limited visibility for guests and regulators
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
              Manual updates slow down menu changes
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">The solution</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            SustainTable turns supplier proof into structured, verified data. Restaurants map every
            ingredient to a dish, then publish QR-ready transparency guests can trust.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
              Centralized verification and audit history
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
              Ingredient-to-dish traceability in minutes
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
              Guest-facing QR proof on every menu
            </li>
          </ul>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            How it works
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">A calm, verified flow from source to table</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Collect proof",
              text: "Suppliers upload certifications, lab tests, and sourcing statements in one place.",
            },
            {
              title: "Map ingredients to dishes",
              text: "Restaurants link verified ingredients directly to menu items and seasonal changes.",
            },
            {
              title: "Show guests via QR",
              text: "Diners scan a QR code to see verified claims at the dish level.",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-800">{step.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="who-its-for" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Who it’s for
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">
            Built for modern hospitality ecosystems
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Restaurants",
              text: "Deliver premium transparency for fine-dining, hotel, and multi-location teams.",
            },
            {
              title: "Suppliers",
              text: "Share verified sustainability proof once, then reuse across every customer.",
            },
            {
              title: "Guests",
              text: "See credible proof behind every dish without downloading another app.",
            },
          ].map((audience) => (
            <div
              key={audience.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-800">{audience.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{audience.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why-now" className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-10 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Why now</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">
              The moment for verified sustainability is here
            </h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <p>
                Regulations are tightening, guests expect proof, and premium operators need credibility
                without extra workload.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                  New compliance requirements for sourcing transparency
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                  Guests trust verified stories more than marketing copy
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                  Differentiation for progressive, high-touch hospitality brands
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6">
            <div>
              <p className="text-sm font-semibold text-slate-800">Pilot availability</p>
              <p className="mt-2 text-sm text-slate-600">
                We are onboarding a limited group of partners for the next cohort.
              </p>
            </div>
            <a
              className="rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white"
              href="mailto:pilot@sustaintable.com"
            >
              Email us for pilot access
            </a>
            <p className="text-xs text-slate-500">pilot@sustaintable.com</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2024 SustainTable. Verified sustainability for modern hospitality.</p>
          <div className="flex gap-6">
            <a className="transition hover:text-slate-700" href="/restaurant">
              Restaurant
            </a>
            <a className="transition hover:text-slate-700" href="/supplier">
              Supplier
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
