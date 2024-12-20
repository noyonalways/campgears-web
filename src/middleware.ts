import { JwtPayload } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/auth";

interface ExtendedJwtPayload extends JwtPayload {
  role: string;
}

const authRoutes = ["/auth/login", "/auth/register", "/auth/forget-password"];

const roleBasedRoutes = {
  user: [
    "/user/profile",
    "/user/orders",
    "/user/overview",
    "/user/wishlist",
    "/user/address",
  ],
  admin: [
    "/user/profile",
    "/user/orders",
    "/user/overview",
    "/user/wishlist",
    "/user/address",
  ],
  "super-admin": [
    "/user/profile",
    "/user/orders",
    "/user/overview",
    "/user/wishlist",
    "/user/address",
  ],
};

type Role = keyof typeof roleBasedRoutes;

export async function middleware(request: NextRequest) {
  const { pathname } = request?.nextUrl;

  const user = (await getCurrentUser()) as ExtendedJwtPayload;

  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/auth/login?redirect=${pathname}`, request.url)
      );
    }
  }

  if (user?.role && roleBasedRoutes[user?.role as Role]) {
    const routes = roleBasedRoutes[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/user/:path*", "/auth/:path*"],
};
