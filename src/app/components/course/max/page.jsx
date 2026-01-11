'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useContext, useState } from "react";
import { ContextProvider } from "@/app/Provider";
import Bkash from "../Bkash";

export default function PackageCheckout() {
    const { userInfo } = useContext(ContextProvider);
    const [type, setType] = useState('');

    const pkg = {
        name: "TaxLine BD – Full Access",
        price: "৳২০০ / ১ বছর",
        features: [
            "আয়কর আইন ২০২৩, মূসক আইন ২০১২, কাস্টম আইন ২০২৩",
            "অর্থ আইন, এসআরও, পরিপত্র, নির্দেশিকা",
            "করবর্ষভিত্তিক আইন পরিবর্তন (১৯৮৪–২০২৩)",
            "ব্যক্তি ও কোম্পানি করহার",
            "উৎসে কর, ন্যূনতম কর, সারচার্জ, জরিমানা",
            "রেয়াতযোগ্য বিনিয়োগ ও কর রেয়াত তথ্য",
            "Tax Planning, কর রেয়াত ও ব্যবসায়িক খরচ ক্যালকুলেটর",
            "গাড়ি কর, পরিবেশ সারচার্জ, আঞ্চলিক ন্যূনতম কর",
            "ব্যক্তি ও প্রতিষ্ঠান ফর্ম",
            "কর অফিস, কর অঞ্চল, আপিল, ট্রাইব্যুনাল, ADR",
            "e-TIN, e-TDS, e-Challan, e-Return, Verify",
            "NBR ওয়েবসাইট ও সোনালী ব্যাংক পেমেন্ট লিংক",
            "বিশেষ ক্যালকুলেটর, নোটিস ও প্রয়োজনীয় সরকারি লিংক",
        ],
        shortFeatures: [
            "আয়কর, ভ্যাট, কাস্টমস সব আইন",
            "ব্যক্তি + কোম্পানি কর",
            "স্মার্ট ক্যালকুলেটর",
            "সরকারি ই-সার্ভিস লিংক",
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-start relative">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Left: Package Details */}
                <Card className="md:col-span-2 rounded-2xl shadow-lg">
                    <CardContent className="p-6">
                        <h1 className="text-2xl font-bold mb-2">{pkg.name}</h1>
                        <p className="text-gray-600 mb-4">
                            এক পেমেন্টে সকল কর আইন, ক্যালকুলেটর ও সরকারি সার্ভিস আনলক করুন।
                        </p>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                            <p className="text-green-700 font-semibold text-lg">প্যাকেজ মূল্য: {pkg.price}</p>
                        </div>

                        <h2 className="text-xl font-semibold mb-4">এই প্যাকেজে যা যা থাকছে</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {pkg.features.map((f) => (
                                <li key={f} className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle className="text-green-600 w-5 h-5" />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <h3 className="font-semibold mb-3">Ultra-Short (মোবাইল / কার্ড ভিউ)</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {pkg.shortFeatures.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-gray-700">
                                        <CheckCircle className="text-green-600 w-5 h-5" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <img src="/website-logo.png" className="h-12 -ml-3" alt="" />
                            <p className="text-gray-600 italic text-lg leading-relaxed">
                                আপনাকে দিচ্ছে পূর্ণাঙ্গ ডিজিটাল ট্যাক্স সল্যুশন – আইন, ফর্ম, হিসাব, পেমেন্ট ও ভেরিফিকেশন সব এক জায়গায়।
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Right: Payment Options */}
                <Card className="rounded-2xl shadow-lg">
                    <CardContent className="p-6">
                        <h2 className="text-xl font-bold mb-4">পেমেন্ট মেথড নির্বাচন করুন</h2>

                        {/* bKash */}
                        <div className="border rounded-xl p-4 mb-4 hover:shadow transition">
                            <div className="flex items-center gap-3 mb-2">
                                <img src="/payment/bkash.png" alt="bKash" className="h-8" />
                                <span className="font-semibold">বিকাশ</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                আপনার বিকাশ একাউন্ট দিয়ে নিরাপদে পেমেন্ট করুন।
                            </p>
                            <Button className="w-full bg-pink-600 hover:bg-pink-700" onClick={() => {
                                if (!userInfo) return window.location.href = '/components/login';
                                setType('bkash')
                            }}>বিকাশ দিয়ে পেমেন্ট করুন</Button>
                        </div>

                        {/* Nagad */}
                        <div className="border rounded-xl p-4 mb-4 hover:shadow transition">
                            <div className="flex items-center gap-3 mb-2">
                                <img src="/payment/nagad.png" alt="Nagad" className="h-8" />
                                <span className="font-semibold">নগদ</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                আপনার নগদ ওয়ালেট ব্যবহার করে সহজেই পেমেন্ট করুন।
                            </p>
                            <Button className="w-full bg-orange-600 hover:bg-orange-700" onClick={() => setType('nagad')}>নগদ দিয়ে পেমেন্ট করুন</Button>
                        </div>

                        {/* Card */}
                        <div className="border rounded-xl p-4 hover:shadow transition">
                            <div className="flex items-center gap-3 mb-2">
                                <img src="/payment/card.png" alt="Card" className="h-8" />
                                <span className="font-semibold">ডেবিট / ক্রেডিট কার্ড</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                                ভিসা, মাস্টারকার্ড এবং অন্যান্য কার্ড সাপোর্ট করে।
                            </p>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setType('card')}>কার্ড দিয়ে পেমেন্ট করুন</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {type === 'bkash' && <Bkash method={{ type, setType, packageType: 'max' }} />}
        </div>
    );
}
