export default function HomePage() {
  return (
    <main className="bg-neutral-50 text-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20 sm:px-8 lg:px-12">
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Premium provenance for fine dining
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Elevate every menu story with verified sustainability
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
              Placeholder copy for a calm, credible statement about tracing ingredients
              from farm to plate for discerning guests.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <button className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
              Request access
            </button>
            <a
              className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-600"
              href="#"
            >
              See how it works
            </a>
          </div>
        </section>

        <section className="grid gap-8 border-t border-neutral-200 pt-16">
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            The visibility gap holding modern kitchens back
          </h2>
          <ul className="grid gap-4 text-base text-neutral-600 sm:text-lg">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Placeholder pain point about fragmented supplier records and manual audits.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Placeholder pain point about inconsistent sustainability claims across menus.
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Placeholder pain point about lost trust with guests seeking provenance.
            </li>
          </ul>
        </section>

        <section className="grid gap-10 border-t border-neutral-200 pt-16">
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            How it works
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Suppliers",
                description: "Placeholder line about verified sourcing data captured at origin.",
              },
              {
                title: "Restaurant",
                description: "Placeholder line about unified compliance and menu storytelling.",
              },
              {
                title: "Guest",
                description: "Placeholder line about transparent, trustworthy dining experiences.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <h3 className="text-xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-t border-neutral-200 pt-16">
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Differentiation that feels quietly exceptional
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Verified provenance",
                body: "Placeholder paragraph about authenticated chain-of-custody designed for premium kitchens.",
              },
              {
                title: "Sustainability intelligence",
                body: "Placeholder paragraph about tracking impact metrics without operational drag.",
              },
              {
                title: "Guest-ready storytelling",
                body: "Placeholder paragraph about turning data into refined, on-brand narratives.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-10 text-center sm:p-14">
          <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Bring provenance to every plate with confidence
          </h2>
          <p className="mx-auto max-w-2xl text-base text-neutral-600 sm:text-lg">
            Placeholder supporting line about partnering with fine-dining teams to elevate trust.
          </p>
          <div>
            <button className="rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
              Book a demo
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
