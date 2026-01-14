import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    name: {
        type: String,
        required: true
    },

    photo: String,

    comment: {
        type: String,
        required: true
    },

    star: { type: Number, required: true },

    mobile: {
        type: String,
        required: true
    },

    email: String,

}, {
    timestamps: true
});

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);
