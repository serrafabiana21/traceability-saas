import { claims, restaurants, suppliers } from "@/lib/mockData";

const statusStyles: Record<string, string> = {
  VERIFIED: "bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
  SUBMITTED: "bg-sky-500/15 text-sky-200 border-sky-400/40",
  DRAFT: "bg-amber-500/15 text-amber-200 border-amber-400/40",
  REJECTED: "bg-rose-500/15 text-rose-200 border-rose-400/40",
};

type VerifyPageProps = {
  params: {
    claimId: string;
  };
};

export default function VerifyPage({ params }: VerifyPageProps) {
  const claim = claims.find((item) => item.id === params.claimId);

  if (!claim) {
    return (
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Verification
        </p>
        <h1 className="text-3xl font-semibold text-white">
          Claim not found
        </h1>
        <p className="max-w-xl text-slate-300">
          We could not locate this sustainability claim. Double-check the QR or
          link provided by the restaurant.
        </p>
      </section>
    );
  }

  const restaurant = restaurants.find(
    (item) => item.id === claim.restaurantId,
  );
  const supplier = suppliers.find((item) => item.id === claim.supplierId);
  const statusStyle = statusStyles[claim.status] ?? statusStyles.SUBMITTED;

  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Claim verification
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            {claim.productName}
          </h1>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyle}`}
          >
            {claim.status}
          </span>
        </div>
        <p className="max-w-2xl text-lg text-slate-300">{claim.claimText}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Restaurant</h2>
          <p className="mt-3 text-slate-200">
            {restaurant ? restaurant.name : "Unknown restaurant"}
          </p>
          {restaurant && (
            <p className="text-sm text-slate-400">
              {restaurant.city}, {restaurant.country}
            </p>
          )}
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold text-white">Supplier</h2>
          <p className="mt-3 text-slate-200">
            {supplier ? supplier.name : "Unknown supplier"}
          </p>
          {supplier && (
            <p className="text-sm text-slate-400">{supplier.country}</p>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-semibold text-white">Evidence</h2>
        <ul className="mt-4 space-y-4">
          {claim.evidence.map((item) => (
            <li
              key={item.id}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-100">
                  {item.title}
                </p>
                <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs uppercase tracking-wide text-slate-300">
                  {item.type.replace("_", " ")}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                {item.issuedBy ? `${item.issuedBy} • ` : ""}
                {item.issuedAt ?? "Documentation on file."}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <footer className="border-t border-slate-800 pt-6 text-xs uppercase tracking-[0.3em] text-slate-500">
        Verified by Traceability SaaS
      </footer>
    </section>
  );
}
