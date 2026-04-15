import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fr"] as const;
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") ?? "";
  // Simple check: if the browser prefers French, serve French
  if (acceptLang.toLowerCase().startsWith("fr")) return "fr";
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip _next internals, api routes, and static files
    "/((?!_next|api|favicon\\.ico|images|logos|.*\\..*).*)",
  ],
};
