"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { clearAuth, UserRole } from "@/lib/auth";

export type AppShellProps = {
  role: UserRole;
  children: ReactNode;
};

type NavItem = {
  label: string;
  href: string;
  match?: string[];
};

const getNavItems = (role: UserRole): NavItem[] => {
  const dashboardHref = role === "supplier" ? "/supplier" : "/restaurant";

  return [
    { label: "Dashboard", href: dashboardHref, match: [dashboardHref] },
    {
      label: "Products (supplier)",
      href: "/supplier/products",
      match: ["/supplier/products"],
    },
    {
      label: "Approvals (admin)",
      href: "/restaurant/claims",
      match: ["/restaurant/claims"],
    },
    {
      label: "Catalog (restaurant)",
      href: "/restaurant/dishes",
      match: ["/restaurant/dishes"],
    },
    { label: "Guest View", href: "/qr", match: ["/qr"] },
    {
      label: "Audit",
      href: role === "supplier" ? "/supplier/deliveries" : "/restaurant/claims",
      match: [role === "supplier" ? "/supplier/deliveries" : "/restaurant/claims"],
    },
  ];
};

export const AppShell = ({ role, children }: AppShellProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const navItems = getNavItems(role);

  const handleLogout = () => {
    clearAuth();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="flex min-h-screen">
        <aside className="w-64 border-r border-neutral-200 bg-white px-5 py-6">
          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-sm font-semibold text-white">
              ST
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900">SustainTable</p>
              <p className="text-xs text-neutral-500">Operations workspace</p>
            </div>
          </div>

          <nav className="mt-8 space-y-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                item.match?.some((prefix) => pathname.startsWith(prefix));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-neutral-400">↗</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-neutral-200 bg-white px-8 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white">
                ST
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">SustainTable</p>
                <p className="text-xs text-neutral-500">B2B Traceability Suite</p>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                Demo
              </span>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50"
            >
              Log out
            </button>
          </header>

          <main className="flex-1 bg-neutral-50 px-8 py-10">
            <div className="mx-auto w-full max-w-6xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppShell;
