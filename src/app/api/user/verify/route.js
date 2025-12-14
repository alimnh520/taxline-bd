import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/connectDb";
import UserInfo from "@/models/user";

export async function POST(request) {
    try {
        const { otp } = await request.json();
        if (!otp) {
            return NextResponse.json(
                { success: false, message: "OTP প্রদান করা হয়নি!" },
                { status: 400 }
            );
        }

        const token = request.cookies.get("user_info")?.value;
        if (!token) {
            return NextResponse.json(
                { success: false, message: "OTP সেশন পাওয়া যায়নি!" },
                { status: 401 }
            );
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            console.error("JWT verify failed:", error);
            return NextResponse.json(
                { success: false, message: "OTP মেয়াদ শেষ বা অবৈধ টোকেন!" },
                { status: 403 }
            );
        }

        const { username, phone, email, otp: storedOtp } = decoded;

        if (parseInt(otp) !== parseInt(storedOtp)) {
            return NextResponse.json(
                { success: false, message: "OTP সঠিক নয়! আবার চেষ্টা করুন।" },
                { status: 400 }
            );
        }

        await connectDB();

        const newUser = new UserInfo({
            username,
            mobile: phone,
            email,
        });

        await newUser.save();

        const loginToken = jwt.sign(
            { user_id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" } // ৭ দিন মেয়াদ
        );

        const response = NextResponse.json({
            success: true,
            message: "রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে!",
        });

        response.cookies.set("user_info", "", {
            httpOnly: true,
            expires: new Date(0),
            path: "/",
        });

        response.cookies.set("3f_associates_login", loginToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 7 * 24 * 60 * 60, // ৭ দিন
        });

        return response;
    } catch (error) {
        console.error("❌ Verification error:", error);
        return NextResponse.json(
            { success: false, message: "সার্ভারে কোনো ত্রুটি ঘটেছে!" },
            { status: 500 }
        );
    }
}
