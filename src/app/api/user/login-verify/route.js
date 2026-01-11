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

        const token = request.cookies.get("otp-time")?.value;
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

        const { email, otp: storedOtp } = decoded;

        if (parseInt(otp) !== parseInt(storedOtp)) {
            return NextResponse.json(
                { success: false, message: "OTP সঠিক নয়! আবার চেষ্টা করুন।" },
                { status: 400 }
            );
        }

        await connectDB();

        const user_info = await UserInfo.findOne({ email });
        if (!user_info) {
            return NextResponse.json(
                { success: false, message: "এই ইমেইল দিয়ে কোনো ইউজার পাওয়া যায়নি!" },
                { status: 404 }
            );
        }

        const loginToken = jwt.sign(
            {
                user_id: user_info._id,
                role: user_info.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        const response = NextResponse.json({
            success: true,
            message: "OTP যাচাই সফল হয়েছে! আপনি এখন লগইন আছেন।",
        });

        response.cookies.set("otp-time", "", {
            httpOnly: true,
            expires: new Date(0),
            path: "/",
        });

        response.cookies.set("taxlinebd", loginToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 7 * 24 * 60 * 60,
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
