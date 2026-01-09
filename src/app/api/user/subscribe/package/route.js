import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/connectDb";
import UserInfo from "@/models/user";

export async function POST(request) {
    try {
        const { type, packageType } = await request.json();
        console.log('type is : ', type, 'package Type is : ', packageType);
        return NextResponse.json(
            { success: true, message: "সফল হয়েছে!" },
            { status: 200 }
        );

    } catch (error) {
        console.error("❌ Verification error:", error);
        return NextResponse.json(
            { success: false, message: "সার্ভারে কোনো ত্রুটি ঘটেছে!" },
            { status: 500 }
        );
    }
}
