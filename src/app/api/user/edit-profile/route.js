import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import cloudinary from "@/cloudinary/cloudConfig";
import { UploadImage } from "@/cloudinary/cloudUpload";
import { connectDB } from "@/lib/connectDb";
import UserInfo from "@/models/user";

// 🧠 ১.৫MB = 1.5 * 1024 * 1024 bytes
const MAX_IMAGE_SIZE = 1.5 * 1024 * 1024;

export async function POST(request) {
    try {
        // ✅ 1️⃣ ফর্মডাটা রিসিভ করা
        const formData = await request.formData();

        const name = formData.get("name");
        const gender = formData.get("gender");
        const dob = formData.get("dob");
        const officePhone = formData.get("officePhone");
        const address = formData.get("address");
        const nid = formData.get("nid");
        const tin = formData.get("tin");
        const presentAddress = formData.get("presentAddress");
        const permanentAddress = formData.get("permanentAddress");
        const fatherName = formData.get("fatherName");
        const motherName = formData.get("motherName");
        const spouseName = formData.get("spouseName");
        const spouseTin = formData.get("spouseTin");
        const profileImage = formData.get("profileImage");

        const token = request.cookies.get("3f_associates_login")?.value;
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
        if (userData?.public_url) {
            try {
                await cloudinary.uploader.destroy(userData.public_url, {
                    resource_type: "image",
                });
            } catch (err) {
                console.warn("⚠ পুরোনো ছবি ডিলিট করতে সমস্যা:", err.message);
            }
        }

        let uploadResult = null;
        if (profileImage && profileImage.size > 0) {
            if (profileImage.size > MAX_IMAGE_SIZE) {
                return NextResponse.json(
                    { success: false, message: "ছবির সাইজ ১.৫MB এর বেশি হতে পারবে না!" },
                    { status: 400 }
                );
            }

            uploadResult = await UploadImage(profileImage);
        }

        await UserInfo.findByIdAndUpdate(
            user_id,
            {
                $set: {
                    username: name,
                    gender,
                    dob,
                    officePhone,
                    address,
                    nid,
                    tin,
                    presentAddress,
                    permanentAddress,
                    fatherName,
                    motherName,
                    spouseName,
                    spouseTin,
                    ...(uploadResult && {
                        profileImage: uploadResult.secure_url,
                        public_url: uploadResult.public_id,
                    }),
                },
            },
            { new: true }
        );

        return NextResponse.json({ message: "✅ Profile updated successfully!", success: true });
    } catch (error) {
        console.error("❌ Server error:", error);
        return NextResponse.json(
            { message: "failed", success: false, error: error.message },
            { status: 500 }
        );
    }
}
