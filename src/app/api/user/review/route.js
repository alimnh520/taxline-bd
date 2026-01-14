import { connectDB } from "@/lib/connectDb";
import review from "@/models/review";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { comment, stars, userInfo } = await req.json();

        if (!comment || !stars || !userInfo) {
            return NextResponse.json({ success: false, message: "Missing data" }, { status: 400 });
        }

        await connectDB();

        const newReview = new review({

            user_id: userInfo._id,

            name: userInfo.username,

            photo: userInfo.profileImage,

            comment,

            star: stars,

            mobile: userInfo.mobile,

            email: userInfo.email,

        });

        await newReview.save();

        return NextResponse.json({ success: true, message: "Review submitted" });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}


export async function GET(req) {
    try {
        await connectDB();
        const reviews = await review.find({}).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, message: reviews });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}
