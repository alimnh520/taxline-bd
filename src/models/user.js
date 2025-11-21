import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        mobile: { type: String, required: true },
        email: { type: String, required: true, unique: true },

        gender: { type: String, required: true },
        dob: { type: String },
        officePhone: { type: String, required: true },
        address: { type: String },
        profileImage: { type: String },
        public_url: { type: String },

        // Identification Numbers
        nid: { type: String, required: true },
        tin: { type: String },
        presentAddress: { type: String, required: true },
        permanentAddress: { type: String, required: true },

        // Other Information
        fatherName: { type: String },
        motherName: { type: String },
        spouseName: { type: String },
        spouseTin: { type: String },

        course: { type: Boolean, default: false }
    },
    { timestamps: true }
);

const UserInfo = mongoose.models.UserInfo || mongoose.model("UserInfo", userSchema);

export default UserInfo;