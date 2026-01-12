import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDb";
import UserInfo from "@/models/user";
import Learn from "@/models/learningModel";
import Order from "@/models/orderModel";

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

        const learnCourse = await Learn.findOne({ user_id: user_id });

        const packageCourse = await Order.findOne({ user_id: user_id });

        const userInfo = await UserInfo.findById(user_id).lean();

        if (!userInfo) {
            return NextResponse.json(
                { success: false, message: "ইউজারের তথ্য পাওয়া যায়নি!" },
                { status: 404 }
            );
        }

        if (learnCourse) {
            const now = new Date();
            const startDate = new Date(learnCourse.purchaseDate || learnCourse.createdAt);

            let expireDate = new Date(startDate);

            if (learnCourse.course === "mini") {
                expireDate.setMonth(expireDate.getMonth() + 6);
            }
            else if (learnCourse.course === "max") {
                expireDate.setFullYear(expireDate.getFullYear() + 1);
            }
            else if (learnCourse.course === "ultra") {
                expireDate.setFullYear(expireDate.getFullYear() + 2);
            }

            if (now > expireDate) {
                await Learn.findByIdAndDelete(learnCourse._id);
                console.log("❌ Learn Course expired & deleted for user:", user_id);
            }
        }


        if (packageCourse) {
            const now = new Date();
            const startDate = new Date(packageCourse.purchaseDate || packageCourse.createdAt);

            let expireDate = new Date(startDate);
            expireDate.setMonth(expireDate.getMonth() + 1); // ✅ 1 month validity

            if (now > expireDate) {
                await Order.findByIdAndDelete(packageCourse._id);
                console.log("❌ Package expired & deleted for user:", user_id);
            }
        }

        return NextResponse.json({
            success: true,
            message: userInfo,
        });

    } catch (error) {
        console.error("⚠️ Server error:", error);
        return NextResponse.json(
            { success: false, message: "সার্ভারে সমস্যা হয়েছে, পরে আবার চেষ্টা করুন।" },
            { status: 500 }
        );
    }
}
