'use client'
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export function ProfilePage({ userInfo }) {
    const { register, handleSubmit, reset, watch } = useForm();
    const [previewImage, setPreviewImage] = useState(userInfo?.profileImage || null);

    // Watch the profileImage input
    const profileImageFile = watch("profileImage");

    useEffect(() => {
        if (profileImageFile && profileImageFile[0]) {
            const file = profileImageFile[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }, [profileImageFile]);


    const onSubmit = async (data) => {
        try {
            const formData = new FormData();

            // Add text fields
            Object.keys(data).forEach((key) => {
                if (key !== "profileImage") formData.append(key, data[key]);
            });

            // Add file
            if (data.profileImage && data.profileImage[0]) {
                formData.append("profileImage", data.profileImage[0]);
            }

            const res = await fetch("/api/user/edit-profile", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                window.location.reload();
                reset();
            } else {
                alert("❌ Failed to submit!");
            }
        } catch (error) {
            console.error(error);
            alert("⚠ Something went wrong!");
        }
    };

    return (
        <div className="flex-1 p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-green-800">
                General Information
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full" encType="multipart/form-data">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="font-medium">Name *</label>
                        <input
                            {...register("name")}
                            defaultValue={userInfo?.username}
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Phone *</label>
                        <input
                            {...register("phone")}
                            defaultValue={userInfo?.mobile}
                            disabled
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Email *</label>
                        <input
                            type="email"
                            {...register("email")}
                            defaultValue={userInfo?.email}
                            disabled
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Gender *</label>
                        <select
                            {...register("gender")}
                            defaultValue={userInfo?.gender || ""}
                            className="w-full border border-green-400 rounded p-2"
                        >
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-medium">Date of Birth</label>
                        <input
                            type="date"
                            {...register("dob")}
                            defaultValue={userInfo?.dob}
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Office Phone *</label>
                        <input
                            {...register("officePhone")}
                            defaultValue={userInfo?.officePhone}
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="font-medium">Address</label>
                        <input
                            {...register("address")}
                            defaultValue={userInfo?.address}
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="font-medium">Profile Image</label>
                        <input
                            type="file"
                            {...register("profileImage")}
                            accept="image/*"
                            className="w-full border border-green-400 rounded p-2"
                        />
                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Profile"
                                className="mt-2 w-24 h-24 rounded-full object-cover border"
                            />
                        )}
                    </div>
                </div>

                {/* Identification Numbers */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 border-b pb-2 text-green-800">
                    Identification Numbers
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="font-medium">NID/Passport *</label>
                        <input
                            {...register("nid")}
                            defaultValue={userInfo?.nid}
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="font-medium">TIN</label>
                        <input
                            {...register("tin")}
                            defaultValue={userInfo?.tin}
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Present Address *</label>
                        <textarea
                            {...register("presentAddress")}
                            defaultValue={userInfo?.presentAddress}
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Permanent Address *</label>
                        <textarea
                            {...register("permanentAddress")}
                            defaultValue={userInfo?.permanentAddress}
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>
                </div>

                {/* Other Information */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 border-b pb-2 text-green-800">
                    Other Information
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="font-medium">Father's Name</label>
                        <input
                            {...register("fatherName")}
                            defaultValue={userInfo?.fatherName}
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Mother's Name</label>
                        <input
                            {...register("motherName")}
                            defaultValue={userInfo?.motherName}
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Spouse Name</label>
                        <input
                            {...register("spouseName")}
                            defaultValue={userInfo?.spouseName}
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Spouse TIN (if Taxpayer)</label>
                        <input
                            {...register("spouseTin")}
                            defaultValue={userInfo?.spouseTin}
                            className="w-full border border-green-400 rounded p-2"
                        />
                    </div>
                </div>

                {/* Submit */}
                <div className="pt-4">
                    <button
                        type="submit"
                        className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
