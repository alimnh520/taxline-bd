import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: false },
        mobile: { type: String, required: false },
        email: { type: String, required: false, unique: true },

        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user"
        },

        gender: { type: String, required: false },
        dob: { type: String },
        officePhone: { type: String, required: false },
        address: { type: String },
        profileImage: { type: String },
        public_url: { type: String },

        // Identification Numbers
        nid: { type: String, required: false },
        tin: { type: String },
        presentAddress: { type: String, required: false },
        permanentAddress: { type: String, required: false },

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