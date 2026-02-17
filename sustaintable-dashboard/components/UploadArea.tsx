export default function UploadArea() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-slate-900">Upload Documents</h2>
      <div className="mt-4 flex min-h-52 items-center justify-center rounded-xl border-2 border-dashed border-emerald-200 bg-emerald-50/40 p-6 text-center">
        <div>
          <p className="text-sm font-medium text-slate-700">Drag &amp; drop files here</p>
          <p className="mt-1 text-sm text-slate-500">or click to browse invoice, receipt, and sourcing files</p>
          <button className="mt-4 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
            Select Files
          </button>
        </div>
      </div>
    </section>
  );
}
