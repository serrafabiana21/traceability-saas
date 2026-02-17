const suppliers = ['FreshRoots Farm', 'Blue Ocean Fisheries', 'Sunrise Dairy Co.'];

export default function VerifiedSuppliers() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-slate-900">Verified Suppliers</h2>
      <ul className="mt-4 space-y-3">
        {suppliers.map((supplier) => (
          <li key={supplier} className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
            <span className="text-sm font-medium text-slate-700">{supplier}</span>
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
              Verified
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
