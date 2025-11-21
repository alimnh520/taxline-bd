import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/connectDb";
import UserInfo from "@/models/user";

export async function POST(request) {
    try {
        // 🧩 ১️⃣ ফ্রন্টএন্ড থেকে OTP নেওয়া
        const { otp } = await request.json();
        if (!otp) {
            return NextResponse.json(
                { success: false, message: "OTP প্রদান করা হয়নি!" },
                { status: 400 }
            );
        }

        // 🍪 ২️⃣ কুকি থেকে টোকেন বের করা (OTP টোকেন)
        const token = request.cookies.get("user_info")?.value;
        if (!token) {
            return NextResponse.json(
                { success: false, message: "OTP সেশন পাওয়া যায়নি!" },
                { status: 401 }
            );
        }

        // 🔐 ৩️⃣ টোকেন ডিকোড করা
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

        // 🔢 ৪️⃣ OTP মিলানো
        if (parseInt(otp) !== parseInt(storedOtp)) {
            return NextResponse.json(
                { success: false, message: "OTP সঠিক নয়! আবার চেষ্টা করুন।" },
                { status: 400 }
            );
        }

        // 🧠 ৫️⃣ ডাটাবেজ কানেক্ট করা
        await connectDB();

        // 🔍 ইউজার খোঁজা
        const user_info = await UserInfo.findOne({ email });
        if (!user_info) {
            return NextResponse.json(
                { success: false, message: "এই ইমেইল দিয়ে কোনো ইউজার পাওয়া যায়নি!" },
                { status: 404 }
            );
        }

        // 🪪 ৬️⃣ লগইন টোকেন তৈরি
        const loginToken = jwt.sign(
            { user_id: user_info._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" } // ৭ দিন মেয়াদ
        );

        // ✅ ৭️⃣ রেসপন্স তৈরি
        const response = NextResponse.json({
            success: true,
            message: "OTP যাচাই সফল হয়েছে! আপনি এখন লগইন আছেন।",
        });

        // 🧹 OTP টোকেন ক্লিয়ার করা
        response.cookies.set("user_info", "", {
            httpOnly: true,
            expires: new Date(0),
            path: "/",
        });

        // 🔐 নতুন লগইন কুকি সেট
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
