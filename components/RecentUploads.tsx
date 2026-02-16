const uploads = [
  {
    document: "Organic Produce Certificate - Q1 2026.pdf",
    supplier: "Verdant Farms Co.",
    status: "Verified",
  },
  {
    document: "Seafood Traceability Report - Jan 2026.pdf",
    supplier: "Northshore Seafood",
    status: "Pending",
  },
  {
    document: "Packaging Material Compliance.pdf",
    supplier: "EcoPack Solutions",
    status: "Verified",
  },
  {
    document: "Renewable Energy Invoice - Dec 2025.pdf",
    supplier: "BrightGrid Utilities",
    status: "Pending",
  },
];

export default function RecentUploads() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Recent Uploads</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead>
            <tr className="text-slate-500">
              <th className="pb-3 font-medium">Document</th>
              <th className="pb-3 font-medium">Supplier</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {uploads.map((row) => (
              <tr key={row.document}>
                <td className="py-3 text-slate-700">{row.document}</td>
                <td className="py-3 text-slate-600">{row.supplier}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      row.status === "Verified" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
