import { claims, restaurants } from "@/lib/mockData";

const statusStyles: Record<string, string> = {
  DRAFT: "bg-slate-700 text-slate-100",
  SUBMITTED: "bg-blue-500/20 text-blue-200",
  VERIFIED: "bg-emerald-500/20 text-emerald-200",
  REJECTED: "bg-rose-500/20 text-rose-200",
};

export default function RestaurantPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">
          Restaurant Dashboard (MVP)
        </h1>
        <p className="max-w-2xl text-slate-300">
          Track sustainability claims shared with guests and backed by supplier
          evidence.
        </p>
      </div>

      <div className="space-y-6">
        {restaurants.map((restaurant) => {
          const restaurantClaims = claims.filter(
            (claim) => claim.restaurantId === restaurant.id
          );

          return (
            <div
              key={restaurant.id}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
            >
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-white">
                  {restaurant.name}
                </h2>
                <p className="text-sm text-slate-400">
                  {restaurant.city}, {restaurant.country}
                </p>
              </div>

              <div className="mt-4 space-y-4">
                {restaurantClaims.map((claim) => (
                  <div
                    key={claim.id}
                    className="rounded-xl border border-white/10 bg-slate-950/40 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-lg font-medium text-white">
                          {claim.productName}
                        </p>
                        <p className="text-sm text-slate-300">
                          {claim.claimText}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                          statusStyles[claim.status]
                        }`}
                      >
                        {claim.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-400">
                      Evidence items: {claim.evidence.length}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
