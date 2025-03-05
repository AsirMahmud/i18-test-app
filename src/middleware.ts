import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { get } from "http";

function getLastPathSegment(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean); // Remove empty segments
  return segments.length > 0 ? segments[segments.length - 1] : "";
}
export default function middleware(req: NextRequest) {
  // Get the current pathname
  let pathname = getLastPathSegment(req.nextUrl.pathname);
  if (pathname == 'ar' || pathname == 'en') {
    pathname = '/'
  } else {
    pathname = `/${pathname}`
  }
  // Create the middleware response
  const res = createMiddleware(routing)(req);

  // Set the cookie with the current pathname
  res.cookies.set("currentPath", pathname, {
    path: "/", // Cookie is available site-wide
    httpOnly: false, // Allow access from client-side JavaScript
    // Use secure cookies in production
    sameSite: "lax", // Standard security
  });

  return res;
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"], // Match localized routes
};
