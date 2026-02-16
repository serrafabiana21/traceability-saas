const suppliers = [
  "Verdant Farms Co.",
  "Northshore Seafood",
  "EcoPack Solutions",
  "BrightGrid Utilities",
  "Sunrise Organics",
];

export default function VerifiedSuppliers() {
  return (
    <section id="suppliers" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Verified Suppliers</h2>
      <ul className="mt-4 space-y-3">
        {suppliers.map((supplier) => (
          <li key={supplier} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5">
            <span className="text-sm text-slate-700">{supplier}</span>
            <span className="text-emerald-600" aria-hidden>
              ✓
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
