'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import Bkash from "../Bkash";

export default function PremiumPackageCheckout() {
    const [type, setType] = useState('');
    const pkg = {
        name: "প্রিমিয়াম",
        price: "৳১৫,০০০",
        features: [
            "কোম্পানি রেজিস্ট্রেশন",
            "IRC ও ERC সার্ভিস",
            "বিজনেস অডিট",
            "ফাইন্যান্সিয়াল অডিট",
            "বিজনেস কমপ্লায়েন্স",
            "কাস্টম আইন সংক্রান্ত সেবা",
            "কাস্টম বন্ড",
            "রিফান্ড অ্যাডজাস্টমেন্ট",
            "ট্যাক্স আপিল ও ট্রাইব্যুনাল",
            "ইমপোর্ট / এক্সপোর্ট সার্টিফিকেট",
            "ট্রেড লাইসেন্স ও ট্রেডমার্ক",
            "কোম্পানি আইন, RJSC রেজিস্ট্রেশন ও শেয়ার ট্রান্সফার",
            "অ্যাকাউন্টিং ও অন্যান্য কনসালটেন্সি সার্ভিস",
            "অ্যাকাউন্টিং সার্ভিস ও সফটওয়্যার ইমপ্লিমেন্টেশন",
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-start">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left: Package Details */}
                <Card className="md:col-span-2 rounded-2xl shadow-lg">
                    <CardContent className="p-6">
                        <h1 className="text-2xl font-bold mb-2">{pkg.name} প্যাকেজ</h1>
                        <p className="text-gray-600 mb-4">
                            বড় ব্যবসা ও কোম্পানির জন্য একটি পূর্ণাঙ্গ লিগ্যাল, ট্যাক্স ও কমপ্লায়েন্স সল্যুশন।
                        </p>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                            <p className="text-green-700 font-semibold text-lg">মূল্য: {pkg.price}</p>
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
                            <h3 className="font-semibold mb-2">বিস্তারিত</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                এই প্রিমিয়াম প্যাকেজটি মূলত বড় বিজনেস, ইমপোর্ট-এক্সপোর্ট কোম্পানি এবং কর্পোরেট
                                প্রতিষ্ঠানের জন্য ডিজাইন করা হয়েছে। এখানে কোম্পানি রেজিস্ট্রেশন থেকে শুরু করে
                                কাস্টমস, ট্যাক্স, অডিট, অ্যাকাউন্টিং, সফটওয়্যার ইমপ্লিমেন্টেশন এবং সকল ধরনের লিগ্যাল
                                ও কমপ্লায়েন্স সার্ভিস অন্তর্ভুক্ত রয়েছে।
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
                            <Button className="w-full bg-pink-600 hover:bg-pink-700" onClick={() => setType('bkash')}>
                                বিকাশ দিয়ে পেমেন্ট করুন
                            </Button>
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
                            <Button className="w-full bg-orange-600 hover:bg-orange-700">
                                নগদ দিয়ে পেমেন্ট করুন
                            </Button>
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
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                কার্ড দিয়ে পেমেন্ট করুন
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            {type === 'bkash' && <Bkash method={{ type, setType, packageType: 'premium' }} />};
        </div>
    );
}
