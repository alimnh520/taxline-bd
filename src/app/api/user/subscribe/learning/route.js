import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/connectDb";
import UserInfo from "@/models/user";
import Learn from "@/models/learningModel";

export async function POST(request) {
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

        const userData = await UserInfo.findById(user_id).lean();

        if (!userData) {
            return NextResponse.json(
                { success: false, message: "ইউজারের তথ্য পাওয়া যায়নি!" },
                { status: 404 }
            );
        }

        const body = await request.json();

        const { type, packageType } = body;

        let amount = 0;

        if (packageType === "mini") amount = 150;
        if (packageType === "max") amount = 200;
        if (packageType === "ultra") amount = 400;

        if (!amount || !type || !packageType) {
            return NextResponse.json(
                { success: false, message: "Invalid course!" },
                { status: 400 }
            );
        }

        const learnOrder = new Learn({

            user_id: userData._id,

            name: userData.username,

            avatar: userData.profileImage,

            mobile: userData.mobile,

            course: packageType,

            paymentType: type,

            amount,

        });
        
        await learnOrder.save();

        return NextResponse.json(
            {
                success: true,
                message: "✅ Order সফলভাবে সম্পন্ন হয়েছে!",
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("❌ Order API error:", error);

        return NextResponse.json(
            { success: false, message: "সার্ভারে সমস্যা হয়েছে!" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectDB();

        const orders = await Learn.find({}).sort({ createdAt: -1 });

        return NextResponse.json({
            success: true,
            data: orders,
        });
    } catch (error) {
        console.error("❌ Order GET error:", error);

        return NextResponse.json(
            { success: false, message: "সার্ভারে সমস্যা হয়েছে!" },
            { status: 500 }
        );
    }
}