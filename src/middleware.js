import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
    const pathName = request.nextUrl.pathname;
    const token = request.cookies.get("3f_associates_login")?.value;

    const subscriptionRequiredPaths = [
        "/components/tax-act/tax-rate",
        "/components/tax-act/company-tax",
        "/components/package/basic",
        "/components/package/standard",
        '/components/personal-link',
        '/components/company-link'
    ];

    if (token && (
        pathName.startsWith("/components/registration") ||
        pathName.startsWith("/components/login")
    )) {
        return NextResponse.redirect(new URL("/components/user/dashboard", request.url));
    }

    if (pathName.startsWith("/components/user/dashboard")) {
        if (!token) {
            return NextResponse.redirect(new URL("/components/login", request.url));
        }

        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET);
            await jwtVerify(token, secret);
        } catch {
            return NextResponse.redirect(new URL("/components/login", request.url));
        }

        return NextResponse.next();
    }

    if (subscriptionRequiredPaths.some(p => pathName.startsWith(p))) {
        if (!token) {
            return NextResponse.redirect(new URL("/components/login", request.url));
        }

        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET);
            await jwtVerify(token, secret);
        } catch {
            return NextResponse.redirect(new URL("/components/login", request.url));
        }

        const verifyURL = new URL("/api/user/subscribe/verify", request.url);

        const userPackage = await fetch(verifyURL, {
            method: "GET",
            headers: { "Cookie": request.headers.get("cookie") ?? "" }
        });

        const isSubscribe = await userPackage.json();

        if (!isSubscribe.success) {
            return NextResponse.redirect(new URL("/components/package", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/components/registration",
        "/components/login",
        "/components/user/dashboard/:path*",
        "/components/package/basic",
        "/components/package/standard",
        "/components/personal-link/:path*",
        "/components/company-link/:path*",
    ],
};
