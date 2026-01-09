import { NextResponse } from "next/server";

export async function GET() {
    const response = NextResponse.json({
        success: true,
        message: "লগআউট সম্পন্ন হয়েছে!",
    });

    response.cookies.set("taxlinebd", "", {
        httpOnly: true,
        expires: new Date(0),
        path: "/",
    });
    return response;
}