import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-12">
      <section className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">SustainTable</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Restaurant Sustainability Dashboard
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Track supplier certifications, upload supporting documents, and monitor progress against your
          sustainability goals in one place.
        </p>
        <Link
          href="/restaurant"
          className="mt-8 inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Open Restaurant Dashboard
        </Link>
      </section>
    </main>
  );
}
