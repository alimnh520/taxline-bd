import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
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

        pkg: {
            type: String,
            enum: ["basic", "standard", "premium"],
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

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
