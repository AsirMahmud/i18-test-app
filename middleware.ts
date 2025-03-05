import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./next-i18next.config.mjs";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const locale = request.cookies.get("NEXT_LOCALE")?.value || i18n.defaultLocale;

    if (!i18n.locales.includes(locale)) {
        return NextResponse.redirect(new URL(`/${i18n.defaultLocale}${pathname}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"], // Apply middleware to all pages
};
