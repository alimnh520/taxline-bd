import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    name: {
        type: String,
        required: true
    },
    fatherName: String,
    motherName: String,
    dateOfBirth: Date,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    nationality: {
        type: String,
        default: "Bangladeshi"
    },
    photo: String,

    nid: String,
    tin: {
        type: String,
        index: true
    },
    passport: String,
    birthCertificate: String,

    mobile: {
        type: String,
        required: true
    },
    email: String,
    presentAddress: String,
    permanentAddress: String,

    profession: String,
    companyName: String,
    designation: String,
    businessAddress: String,

    taxCircle: String,
    taxZone: String,
    previousReturnSubmitted: {
        type: Boolean,
        default: false
    },
    lastReturnYear: String,

    notes: String,
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }

}, {
    timestamps: true
});

export default mongoose.models.Client || mongoose.model("Client", clientSchema);
