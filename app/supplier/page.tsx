"use client";

import Link from "next/link";

import { useClaims } from "@/app/claims/ClaimsProvider";
import { suppliers } from "@/lib/mockData";

const statusStyles: Record<string, string> = {
  DRAFT: "bg-slate-700 text-slate-100",
  SUBMITTED: "bg-blue-500/20 text-blue-200",
  VERIFIED: "bg-emerald-500/20 text-emerald-200",
  REJECTED: "bg-rose-500/20 text-rose-200",
};

export default function SupplierPage() {
  const { claims, verifyClaim, rejectClaim } = useClaims();

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">
          Supplier Portal (MVP)
        </h1>
        <p className="max-w-2xl text-slate-300">
          Monitor active sustainability claims and the evidence shared with
          restaurant partners.
        </p>
      </div>

      <div className="space-y-6">
        {suppliers.map((supplier) => {
          const supplierClaims = claims.filter(
            (claim) => claim.supplierId === supplier.id
          );

          return (
            <div
              key={supplier.id}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
            >
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-white">
                  {supplier.name}
                </h2>
                <p className="text-sm text-slate-400">
                  {supplier.country}
                </p>
                {supplier.website ? (
                  <p className="text-sm text-slate-400">{supplier.website}</p>
                ) : null}
              </div>

              <div className="mt-4 space-y-4">
                {supplierClaims.map((claim) => (
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
                    <Link
                      className="mt-2 inline-flex text-xs font-semibold uppercase tracking-wide text-sky-300 transition hover:text-sky-200"
                      href={`/verify/${claim.id}`}
                    >
                      View public page
                    </Link>
                    {claim.status === "SUBMITTED" ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        <button
                          className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-emerald-300"
                          type="button"
                          onClick={() => verifyClaim(claim.id)}
                        >
                          Verify
                        </button>
                        <button
                          className="rounded-full border border-rose-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-rose-200 transition hover:border-rose-300 hover:text-rose-100"
                          type="button"
                          onClick={() => rejectClaim(claim.id)}
                        >
                          Reject
                        </button>
                      </div>
                    ) : null}
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
