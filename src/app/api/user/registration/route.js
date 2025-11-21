import jwt from "jsonwebtoken";
import { sendEmail } from "@/lib/sendMails";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDb";
import UserInfo from "@/models/user";

export async function POST(request) {
    try {
        const { username, phone, email } = await request.json();

        // 🔍 ১️⃣ ইনপুট যাচাই
        if (!username || username.trim().length < 3) {
            return NextResponse.json(
                { success: false, message: "সঠিক নাম প্রদান করুন (কমপক্ষে ৩ অক্ষর)!" },
                { status: 400 }
            );
        }

        const phoneRegex = /^(\+?88)?01[3-9]\d{8}$/;
        if (!phone || !phoneRegex.test(phone)) {
            return NextResponse.json(
                { success: false, message: "সঠিক মোবাইল নাম্বার প্রদান করুন (+880...)" },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: "সঠিক ইমেইল ঠিকানা প্রদান করুন!" },
                { status: 400 }
            );
        }

        await connectDB();

        const existingUser = await UserInfo.findOne({
            $or: [{ email }, { mobile: phone }],
        });

        if (existingUser) {
            return NextResponse.json(
                { success: false, message: "এই ইমেইল বা ফোন আগে থেকেই রেজিস্টার্ড!" },
                { status: 400 }
            );
        }

        // 🔢 ২️⃣ ৬-সংখ্যার OTP তৈরি
        const otp = Math.floor(100000 + Math.random() * 900000);

        // ✉️ ৩️⃣ ইমেইল পাঠানো
        try {
            await sendEmail({ email, otp });
        } catch (mailError) {
            console.error("❌ Email sending failed:", mailError);
            return NextResponse.json(
                { success: false, message: "ইমেইল পাঠানো ব্যর্থ হয়েছে!" },
                { status: 500 }
            );
        }

        // 🔐 ৪️⃣ JWT দিয়ে ইউজার ইনফো + OTP এনকোড করা
        const tokenPayload = { otp, username, phone, email };
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
            expiresIn: "5m", // ৫ মিনিটের মধ্যে OTP মেয়াদ শেষ হবে
        });

        // 🍪 ৫️⃣ রেসপন্স তৈরি ও কুকি সেট করা
        const response = NextResponse.json({
            success: true,
            message: "OTP সফলভাবে পাঠানো হয়েছে! অনুগ্রহ করে যাচাই করুন।",
        });

        response.cookies.set("user_info", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 5 * 60, // ৫ মিনিট
        });

        return response;
    } catch (error) {
        console.error("❌ Server error:", error);
        return NextResponse.json(
            { success: false, message: "সার্ভারে কোনো ত্রুটি ঘটেছে!" },
            { status: 500 }
        );
    }
}
