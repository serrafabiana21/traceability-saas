export default function Landing() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight">Traceability</div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#problem">
              The problem
            </a>
            <a className="hover:text-slate-900" href="#solution">
              The solution
            </a>
            <a className="hover:text-slate-900" href="#how-it-works">
              How it works
            </a>
            <a className="hover:text-slate-900" href="#who-its-for">
              Who it&apos;s for
            </a>
          </nav>
          <a
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
            href="#cta"
          >
            Join pilot
          </a>
        </div>
      </header>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Supply chain clarity
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Make traceability effortless for every supplier and every customer.
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              A calm, compliant workflow that keeps sourcing evidence, audits, and transparency
              stories aligned across your entire menu.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 shadow-sm">
            <div className="rounded-2xl border border-white/60 bg-white/70 p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-400">
                <span>Product mock</span>
                <span>Live preview</span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                <div className="h-3 w-1/2 rounded-full bg-slate-200" />
                <div className="h-20 rounded-xl border border-slate-200 bg-white" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-12 rounded-xl border border-slate-200 bg-white" />
                  <div className="h-12 rounded-xl border border-slate-200 bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
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
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="problem" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">The problem</h2>
              <p className="mt-4 text-lg text-slate-600">
                Proof of sourcing is fragmented, slow, and hard to present when it matters most.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="space-y-3 text-sm text-slate-700">
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
          </div>
        </div>
      </section>

      <section id="solution" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">The solution</h2>
              <p className="mt-4 text-lg text-slate-600">
                A single, serene workspace that connects supplier proof to every dish and audit.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <ul className="space-y-3 text-sm text-slate-700">
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

      <section id="how-it-works" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-slate-900">How it works</h2>
            <p className="text-lg text-slate-600">
              Three calm steps to move from sourcing evidence to trusted transparency.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Collect",
                text: "Bring supplier certifications, lab results, and sourcing statements into one hub.",
              },
              {
                step: "2",
                title: "Connect",
                text: "Link ingredients to dishes with guided mapping and approval flows.",
              },
              {
                step: "3",
                title: "Share",
                text: "Publish transparent stories that keep guests and regulators aligned.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="who-its-for" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-slate-900">Who it&apos;s for</h2>
            <p className="text-lg text-slate-600">
              Teams who need clarity, speed, and confidence across every supply chain detail.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Restaurant groups",
                text: "Give operators a single source of truth for menu-level sourcing and proof.",
              },
              {
                title: "Suppliers",
                text: "Share verified documentation once and streamline partner compliance.",
              },
              {
                title: "Hospitality brands",
                text: "Deliver transparent guest experiences that match premium expectations.",
              },
              {
                title: "Compliance teams",
                text: "Stay ahead of audits with structured, traceable sourcing evidence.",
              },
            ].map((audience) => (
              <div
                key={audience.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{audience.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{audience.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-now" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-slate-900">Why now</h2>
            <p className="text-lg text-slate-600">
              Regulations, customer expectations, and supply chain risk are tightening fast.
            </p>
          </div>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Regulatory momentum",
                  text: "New standards demand verified sourcing data, not marketing claims.",
                },
                {
                  title: "Consumer trust",
                  text: "Guests want instant access to proof before they place an order.",
                },
                {
                  title: "Operational risk",
                  text: "Audit delays and missing proof translate into real revenue loss.",
                },
              ].map((point) => (
                <div key={point.title}>
                  <h3 className="text-base font-semibold text-slate-900">{point.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10">
            <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">
                  Ready to launch the pilot with us?
                </h2>
                <p className="mt-3 text-lg text-slate-600">
                  Get early access and build a traceability story your customers can trust.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  className="w-full rounded-full border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none"
                  placeholder="you@company.com"
                  type="email"
                />
                <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800">
                  Request access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200/70 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div>
              <p className="text-lg font-semibold text-slate-900">Traceability</p>
              <p className="mt-2 text-sm text-slate-600">
                Calm, compliant sourcing transparency for modern hospitality teams.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Product</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <a className="hover:text-slate-900" href="#solution">
                    Platform
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#how-it-works">
                    Workflow
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#cta">
                    Pilot
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <a className="hover:text-slate-900" href="#problem">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#who-its-for">
                    Customers
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#cta">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Resources</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <a className="hover:text-slate-900" href="#why-now">
                    Insights
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#cta">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#cta">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-xs text-slate-500">
            © 2024 Traceability. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
