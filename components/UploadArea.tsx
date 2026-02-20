export default function UploadArea() {
  return (
    <section id="documents" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Upload Documentation</h2>
      <p className="mt-1 text-sm text-slate-500">
        Drag and drop certificates, audit reports, and invoices, or click to browse files.
      </p>
      <div className="mt-4 flex min-h-64 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center">
        <div>
          <p className="text-base font-medium text-slate-700">Drop files to upload</p>
          <p className="mt-2 text-sm text-slate-500">Accepted formats: PDF, PNG, JPG, WEBP</p>
          <button
            type="button"
            className="mt-4 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Select Files
          </button>
        </div>
      </div>
    </section>
  );
}
