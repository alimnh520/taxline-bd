import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDb";

export async function POST(req) {
    try {
        const { comment, stars } = await req.json();

        if (!comment || !stars) {
            return NextResponse.json({ success: false, message: "Missing data" }, { status: 400 });
        }

        return NextResponse.json({ success: true, message: "Review submitted" });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}
