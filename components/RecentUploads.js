const rows = [
  {
    document: 'Organic Produce Certificate.pdf',
    supplier: 'Verdant Farms Co.',
    status: 'Verified',
  },
  {
    document: 'Fishery Compliance Report.jpg',
    supplier: 'Northshore Seafood',
    status: 'Pending',
  },
  {
    document: 'Carbon Footprint Audit 2026.pdf',
    supplier: 'Pure Grain Mills',
    status: 'Verified',
  },
];

const badgeStyles = {
  Verified: 'bg-green-100 text-green-700',
  Pending: 'bg-amber-100 text-amber-700',
};

export default function RecentUploads() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Recent Uploads</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead>
            <tr className="text-slate-500">
              <th className="pb-2 font-medium">Document Name</th>
              <th className="pb-2 font-medium">Supplier</th>
              <th className="pb-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row) => (
              <tr key={row.document}>
                <td className="py-3 text-slate-700">{row.document}</td>
                <td className="py-3 text-slate-600">{row.supplier}</td>
                <td className="py-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[row.status]}`}>
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
