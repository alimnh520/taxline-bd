import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserInfo_id",
            required: true,
        },

        name: {
            type: String,
            required: true,
        },

        avatar: {
            type: String,
            required: true,
        },

        mobile: {
            type: String,
        },

        paymentType: {
            type: String,
            enum: ["bkash", "nagad", "card"],
            required: true,
        },
        
        amount: {
            type: Number,
            default: 300,
        },

        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "cancelled"],
            default: "paid",
        },

        transactionId: {
            type: String,
        },

        purchaseDate: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
