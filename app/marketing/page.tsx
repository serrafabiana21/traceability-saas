import Link from "next/link";

const features = [
  {
    title: "Real-time supplier verification",
    description:
      "Capture sourcing data once and keep every partner instantly audit-ready with a shared chain of custody.",
  },
  {
    title: "Restaurant-ready compliance",
    description:
      "Track menu claims, certifications, and documentation in one workspace built for culinary teams.",
  },
  {
    title: "Guest-facing transparency",
    description:
      "Generate QR-ready stories and sustainability highlights without extra back-and-forth.",
  },
];

const steps = [
  {
    step: "01",
    title: "Suppliers upload verified data",
    description: "Structured workflows keep certifications, audits, and delivery logs aligned.",
  },
  {
    step: "02",
    title: "Restaurants approve with confidence",
    description: "Dashboards surface risks, approvals, and menu-ready claims instantly.",
  },
  {
    step: "03",
    title: "Guests access trusted stories",
    description: "Share provenance details with QR experiences curated for hospitality brands.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-sm font-semibold text-white">
              ST
            </div>
            <div>
              <p className="text-sm font-semibold">SustainTable</p>
              <p className="text-xs text-neutral-500">Traceability for B2B hospitality</p>
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
              Demo
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              className="text-sm font-semibold text-neutral-600 hover:text-neutral-900"
              href="/login"
            >
              Portal login
            </Link>
            <Link
              className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
              href="/restaurant/login"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 sm:px-8 lg:px-12">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Sustainable supply intelligence
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Make every ingredient story audit-ready for modern hospitality teams.
            </h1>
            <p className="text-lg text-neutral-600">
              SustainTable connects suppliers, restaurants, and guests in one verified network so
              compliance, provenance, and storytelling stay consistent across every menu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500"
                href="/restaurant/login"
              >
                Restaurant login
              </Link>
              <Link
                className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition hover:border-neutral-300"
                href="/supplier/login"
              >
                Supplier login
              </Link>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-600">
              <p className="font-semibold text-neutral-800">Demo credentials</p>
              <p>Restaurant: demo@restaurant.com · Password: demo123</p>
              <p>Supplier: demo@supplier.com · Password: demo123</p>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="space-y-6">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <p className="text-xs font-semibold uppercase text-neutral-500">
                  Live compliance snapshot
                </p>
                <p className="mt-2 text-2xl font-semibold text-neutral-900">92% verified</p>
                <p className="mt-1 text-sm text-neutral-500">
                  Across suppliers, menus, and guest-ready claims.
                </p>
              </div>
              <div className="space-y-4">
                {["Draft", "Submitted", "Verified"].map((status) => (
                  <div
                    key={status}
                    className="flex items-center justify-between rounded-2xl border border-neutral-200 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">Harvest Lot {status}</p>
                      <p className="text-xs text-neutral-500">Updated 2 hours ago</p>
                    </div>
                    <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Everything you need to run trust-forward supply chains
            </h2>
            <p className="max-w-xl text-sm text-neutral-500">
              Purpose-built for multi-location operators, regional suppliers, and hospitality groups
              that demand both rigor and ease.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-neutral-900">{feature.title}</h3>
                <p className="text-sm text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold sm:text-3xl">How it works</h2>
            <span className="text-sm font-semibold text-emerald-600">3 steps</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.step}
                className="flex h-full flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <p className="text-xs font-semibold text-neutral-400">{step.step}</p>
                <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
