import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
    const pathName = request.nextUrl.pathname;
    const token = request.cookies.get("taxlinebd")?.value;

    const subscriptionRequiredPaths = [
        "/components/tax-act/tax-rate",
        "/components/tax-act/company-tax",
        '/components/personal-link',
        '/components/company-link'
    ];

    // Prevent logged-in users from visiting registration/login
    if (token && (
        pathName.startsWith("/components/registration") ||
        pathName.startsWith("/components/login")
    )) {
        return NextResponse.redirect(new URL("/components/user/dashboard", request.url));
    }

    const protectedPaths = [
        "/components/user/dashboard",
        "/components/admin",
        ...subscriptionRequiredPaths
    ];

    if (protectedPaths.some(p => pathName.startsWith(p))) {
        if (!token) {
            return NextResponse.redirect(new URL("/components/login", request.url));
        }

        let payload;

        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET);
            const result = await jwtVerify(token, secret);
            payload = result.payload;
        } catch {
            return NextResponse.redirect(new URL("/components/login", request.url));
        }

        const role = payload.role;

        // Admin should not access /user/dashboard
        if (role === "admin" && pathName.startsWith("/components/user/dashboard")) {
            return NextResponse.redirect(new URL("/components/admin", request.url));
        }

        // Non-admin cannot access admin routes
        if (pathName.startsWith("/components/admin") && role !== "admin") {
            return NextResponse.redirect(new URL("/components/user/dashboard", request.url));
        }

        // Subscription check for non-admin users
        if (subscriptionRequiredPaths.some(p => pathName.startsWith(p)) && role !== "admin") {
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
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/components/registration",
        "/components/login",
        "/components/admin/:path*",
        "/components/user/dashboard/:path*",
        "/components/tax-act/:path*",
        // "/components/personal-link/:path*",
        // "/components/company-link/:path*",
    ],
};
