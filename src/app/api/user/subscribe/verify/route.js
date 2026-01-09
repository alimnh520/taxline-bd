import { connectDB } from "@/lib/connectDb";
import UserInfo from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const token = request.cookies.get("taxlinebd")?.value;
        if (!token) {
            return NextResponse.json(
                { success: false, message: "লগইন টোকেন পাওয়া যায়নি!" },
                { status: 401 }
            );
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            console.error("❌ JWT verify failed:", error);
            return NextResponse.json(
                { success: false, message: "টোকেন মেয়াদোত্তীর্ণ বা অবৈধ!" },
                { status: 403 }
            );
        }

        const { user_id } = decoded;

        if (!user_id) {
            return NextResponse.json(
                { success: false, message: "User ID টোকেনে পাওয়া যায়নি!" },
                { status: 400 }
            );
        }

        await connectDB();

        const userInfo = await UserInfo.findById(user_id).lean();
        

        if (!userInfo.course) {
            return NextResponse.json(
                { success: false, message: "ইউজারের প্যাকেজ নেই" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "ইউজারের তথ্য সফলভাবে পাওয়া গেছে।",
            data: userInfo,
        });

    } catch (error) {
        console.error("⚠️ Server error:", error);
        return NextResponse.json(
            { success: false, message: "সার্ভারে সমস্যা হয়েছে, পরে আবার চেষ্টা করুন।" },
            { status: 500 }
        );
    }
}
