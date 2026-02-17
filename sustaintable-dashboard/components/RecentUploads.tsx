const recentUploads = [
  { file: 'Organic Produce Invoice.pdf', date: '2026-02-11', status: 'Verified' },
  { file: 'Seafood Batch Trace.csv', date: '2026-02-10', status: 'Pending' },
  { file: 'Local Dairy Receipt.pdf', date: '2026-02-08', status: 'Needs Review' }
] as const;

const statusStyles: Record<(typeof recentUploads)[number]['status'], string> = {
  Verified: 'bg-emerald-100 text-emerald-700',
  Pending: 'bg-amber-100 text-amber-700',
  'Needs Review': 'bg-rose-100 text-rose-700'
};

export default function RecentUploads() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-slate-900">Recent Uploads</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-500">
            <tr>
              <th className="pb-3 font-medium">File</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentUploads.map((row) => (
              <tr key={row.file} className="border-t border-slate-100">
                <td className="py-3 text-slate-700">{row.file}</td>
                <td className="py-3 text-slate-500">{row.date}</td>
                <td className="py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[row.status]}`}>
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
