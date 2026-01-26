import type { ReactNode } from "react";
import { cookies } from "next/headers";

import AppShell from "@/components/AppShell";
import { authCookieName } from "@/lib/auth";

const RestaurantLayout = ({ children }: { children: ReactNode }) => {
  const cookieStore = cookies();
  const role = cookieStore.get(authCookieName)?.value;

  return <AppShell role={role === "restaurant" ? "restaurant" : "restaurant"}>{children}</AppShell>;
};

export default RestaurantLayout;
