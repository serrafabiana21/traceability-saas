"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { clearAuth, UserRole } from "@/lib/auth";

const navConfig: Record<UserRole, { label: string; href: string }[]> = {
  restaurant: [
    { label: "Overview", href: "/restaurant" },
    { label: "Ingredients", href: "/restaurant/ingredients" },
    { label: "Dishes", href: "/restaurant/dishes" },
    { label: "Claims", href: "/restaurant/claims" },
    { label: "Uploads", href: "/restaurant/uploads" },
  ],
  supplier: [
    { label: "Overview", href: "/supplier" },
    { label: "Products", href: "/supplier/products" },
    { label: "Deliveries", href: "/supplier/deliveries" },
    { label: "Uploads", href: "/supplier/uploads" },
  ],
};

const roleLabel: Record<UserRole, string> = {
  restaurant: "Restaurant",
  supplier: "Supplier",
};

export type AppShellProps = {
  role: UserRole;
  children: ReactNode;
};

export const AppShell = ({ role, children }: AppShellProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    clearAuth();
    router.push("/login");
  };

  return (
    <div className="appShell">
      <aside className="appSidebar">
        <div className="appBrand">
          <div className="appBrandMark" />
          <div>
            <p className="appBrandTitle">Traceability</p>
            <p className="appBrandSubtitle">{roleLabel[role]} Portal</p>
          </div>
        </div>

        <nav className="appNav">
          {navConfig[role].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`appNavItem ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button type="button" className="appLogout" onClick={handleLogout}>
          Log out
        </button>
      </aside>

      <main className="appMain">
        <div className="appContent">{children}</div>
      </main>
    </div>
  );
};

export default AppShell;
