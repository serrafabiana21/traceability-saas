import { NextRequest, NextResponse } from "next/server";

import { authCookieName } from "./lib/auth";

const roleForPath = (pathname: string) => {
  if (pathname.startsWith("/restaurant")) {
    return "restaurant";
  }
  if (pathname.startsWith("/supplier")) {
    return "supplier";
  }
  return null;
};

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const requiredRole = roleForPath(pathname);

  if (!requiredRole) {
    return NextResponse.next();
  }

  const role = request.cookies.get(authCookieName)?.value;

  if (!role || role !== requiredRole) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/restaurant/:path*", "/supplier/:path*"],
};
