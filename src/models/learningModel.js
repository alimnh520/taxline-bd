import mongoose from "mongoose";

const learnSchema = new mongoose.Schema(
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

        course: {
            type: String,
            enum: ["mini", "max", "ultra"],
            required: true,
        },

        paymentType: {
            type: String,
            enum: ["bkash", "nagad", "card"],
            required: true,
        },

        amount: {
            type: Number,
            required: true,
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

const Learn = mongoose.models.Learn || mongoose.model("Learn", learnSchema);

export default Learn;
