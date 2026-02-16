import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="max-w-xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">SustainTable Dashboard</h1>
        <p className="mt-3 text-sm text-slate-600">
          A restaurant sustainability workspace for managing supplier documents, certifications, and
          emissions performance.
        </p>
        <Link
          href="/restaurant"
          className="mt-6 inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Open Restaurant Dashboard
        </Link>
      </div>
    </main>
  );
}
