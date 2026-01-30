const shipments = [
  {
    id: "LOT-2041",
    product: "Organic Romaine",
    destination: "North Harbor Hotel",
    updated: "2 hours ago",
    status: "DRAFT",
  },
  {
    id: "LOT-2042",
    product: "Heirloom Tomatoes",
    destination: "Cascade Bistro Group",
    updated: "Yesterday",
    status: "SUBMITTED",
  },
  {
    id: "LOT-2039",
    product: "Grass-fed Beef",
    destination: "Fieldhouse Kitchens",
    updated: "2 days ago",
    status: "VERIFIED",
  },
  {
    id: "LOT-2037",
    product: "Artisan Dairy",
    destination: "Seaside Resort",
    updated: "3 days ago",
    status: "REJECTED",
  },
];

const statusStyles: Record<string, string> = {
  DRAFT: "bg-neutral-100 text-neutral-700 border border-neutral-200",
  SUBMITTED: "bg-blue-50 text-blue-700 border border-blue-200",
  VERIFIED: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  REJECTED: "bg-rose-50 text-rose-700 border border-rose-200",
};

const SupplierDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-emerald-600">Supplier workspace</p>
          <h1 className="text-2xl font-semibold text-neutral-900">Dashboard</h1>
          <p className="text-sm text-neutral-500">
            Track outbound lots, certifications, and delivery documentation in one place.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800">
            New submission
          </button>
          <button className="rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:border-neutral-300">
            Upload documents
          </button>
        </div>
      </div>

      <section className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">Recent lots</h2>
            <p className="text-sm text-neutral-500">Active compliance and delivery status.</p>
          </div>
          <input
            className="w-full max-w-xs rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700 shadow-sm focus:border-neutral-300 focus:outline-none"
            placeholder="Filter by product or destination"
            type="text"
          />
        </div>
        <div className="divide-y divide-neutral-200">
          {shipments.map((shipment) => (
            <div
              key={shipment.id}
              className="flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  {shipment.product} · {shipment.id}
                </p>
                <p className="text-sm text-neutral-500">
                  {shipment.destination} · Updated {shipment.updated}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    statusStyles[shipment.status]
                  }`}
                >
                  {shipment.status}
                </span>
                <button className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:border-neutral-300">
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SupplierDashboard;
