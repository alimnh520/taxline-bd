"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [isSend, setIsSend] = useState(false);
    const router = useRouter();

    // === OTP Send ===
    const sendEmail = async () => {
        try {
            setMessage("");
            setStatus("info");

            if (!email) {
                setMessage("অনুগ্রহ করে ইমেইলটি দিন!");
                setStatus("error");
                return;
            }

            const res = await fetch("/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }), // ✅ শুধু email পাঠাচ্ছে
            });

            const data = await res.json();
            setMessage(data.message);
            setStatus(data.success ? "success" : "error");
            setIsSend(data.success);
        } catch (error) {
            console.error(error);
            setMessage("সার্ভারে কোনো সমস্যা ঘটেছে! অনুগ্রহ করে আবার চেষ্টা করুন।");
            setStatus("error");
        }
    };

    // === OTP Verify ===
    const verifyOtp = async () => {
        try {
            setMessage("");
            setStatus("info");

            if (!otp) {
                setMessage("অনুগ্রহ করে OTP কোডটি দিন!");
                setStatus("error");
                return;
            }

            const res = await fetch("/api/user/login-verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ otp }), // ✅ শুধু otp পাঠাচ্ছে
            });

            const data = await res.json();
            setMessage(data.message);
            setStatus(data.success ? "success" : "error");

            if (data.success) {
                router.push("/components/user/dashboard"); 
            }
        } catch (error) {
            console.error(error);
            setMessage("সার্ভারে কোনো সমস্যা ঘটেছে! অনুগ্রহ করে আবার চেষ্টা করুন।");
            setStatus("error");
        }
    };

    return (
        <div className="px-4">
            {/* Breadcrumb Section */}
            <div className="bg-gray-50 py-6 h-48 flex flex-col gap-y-3 items-center justify-center">
                <div className="max-w-6xl mx-auto px-4 text-xs text-gray-500">
                    <span className="text-gray-400">HOME</span> <span className="mx-1">›</span>
                    <span className="text-green-600">Login</span>
                </div>
                <h1 className="text-3xl font-bold">Login</h1>
            </div>

            {/* Main Section */}
            <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-start">
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>

                    <label className="block mb-1">
                        Email <span className="text-red-500">*</span>
                    </label>

                    {!isSend && (
                        <div className="flex mb-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email Account"
                                className="border border-gray-300 rounded-l-md px-4 py-2 w-full outline-none focus:border-green-600"
                            />
                            <button
                                onClick={sendEmail}
                                className="bg-green-700 w-40 text-white border border-green-700 px-5 rounded-r-md font-semibold hover:bg-green-800 transition"
                            >
                                Send OTP
                            </button>
                        </div>
                    )}

                    {message && (
                        <div
                            className={`rounded-lg border px-4 py-3 my-4 text-sm shadow-sm transition-all duration-300 
                            ${status === "success"
                                    ? "bg-green-50 border-green-500 text-green-800"
                                    : status === "error"
                                        ? "bg-red-50 border-red-500 text-red-800"
                                        : "bg-blue-50 border-blue-400 text-blue-800"
                                }`}
                        >
                            {message}
                        </div>
                    )}

                    {isSend && (
                        <div>
                            <label className="block mb-1">
                                OTP <span className="text-red-500">*</span>
                            </label>
                            <div className="flex mb-3">
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="Enter 6 digit OTP code"
                                    className="border border-gray-300 rounded-l-md px-4 py-2 w-full outline-none focus:border-green-600"
                                />
                                <button
                                    onClick={verifyOtp}
                                    className="bg-green-700 w-32 text-white border border-green-700 px-5 rounded-r-md font-semibold hover:bg-green-800 transition"
                                >
                                    Verify
                                </button>
                            </div>
                        </div>
                    )}

                    <p className="text-xs text-gray-500 leading-relaxed mb-6">
                        Your personal data will be used to support your experience throughout this website,
                        to manage access to your account, and for other purposes described in our{" "}
                        <a href="#" className="text-green-700 underline">
                            privacy policy
                        </a>.
                    </p>

                    <p className="text-sm text-gray-800">
                        আপনার অ্যাকাউন্ট নেই?{" "}
                        <Link href="/components/registration" className="text-green-700 font-semibold">
                            রেজিস্ট্রেশন করুন
                        </Link>
                    </p>
                </div>

                {/* Right Banner */}
                <div className="border h-72 rounded-lg shadow-sm flex items-center justify-between bg-gradient-to-r from-green-700 to-green-600 text-white relative overflow-hidden">
                    <div className="bg-white text-green-700 font-bold text-5xl px-6 py-10 rounded-2xl shadow-lg">
                        NO <br /> ADS
                    </div>
                    <div className="ml-6 text-right text-gray-900 bg-white/90 rounded-xl p-4">
                        <img src="/logo.png" alt="BDTaxation" className="w-32 mx-auto mb-2" />
                        <p className="text-sm font-semibold mb-2">
                            আটো এস মূলে ওয়েবসাইট ব্রাউজ করতে এখনই সাবস্ক্রাইব করুন
                        </p>
                        <button className="bg-green-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-800">
                            সাবস্ক্রাইব
                        </button>
                        <p className="text-xs mt-2">ধন্যবাদ</p>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="bg-white border-t py-6 mt-6">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h3 className="font-semibold mb-3 text-gray-800">প্রয়োজনীয় সরকারি লিংক</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "ই-টিডিএস",
                            "ই-টিআইএন",
                            "এ-চালান",
                            "এনবিআর ওয়েবসাইট",
                            "সোনালী ব্যাংক পেমেন্ট",
                            "ই-রিটার্ন ওয়েবসাইট",
                            "রিটার্ন তৈরির ফাইল",
                        ].map((item, idx) => (
                            <button
                                key={idx}
                                className="bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-700"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
