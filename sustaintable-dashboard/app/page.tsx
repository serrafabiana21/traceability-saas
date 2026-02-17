import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl bg-white p-10 text-center shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900">SustainTable Dashboard</h1>
        <p className="mt-3 text-slate-600">
          View your sustainability insights, supplier verifications, and document traceability in one place.
        </p>
        <Link
          href="/restaurant"
          className="mt-8 inline-flex rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Open Restaurant Dashboard
        </Link>
      </div>
    </main>
  );
}
