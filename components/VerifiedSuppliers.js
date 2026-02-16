const suppliers = ['Verdant Farms Co.', 'Northshore Seafood', 'Sunrise Organics', 'Pure Grain Mills'];

export default function VerifiedSuppliers() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm" id="suppliers">
      <h2 className="text-lg font-semibold text-slate-900">Verified Suppliers</h2>
      <ul className="mt-4 space-y-3">
        {suppliers.map((supplier) => (
          <li key={supplier} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
            <span className="text-sm text-slate-700">{supplier}</span>
            <span className="text-accent" aria-hidden>
              ✓
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
