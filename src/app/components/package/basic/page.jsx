'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useContext, useState } from "react";
import Bkash from "../Bkash";
import { ContextProvider } from "@/app/Provider";

export default function PackageCheckout() {
    const { userInfo } = useContext(ContextProvider);
    const [type, setType] = useState('');
    const pkg = {
        name: "বেসিক",
        price: "৳২০০০",
        features: [
            "টিআইএন রেজিস্ট্রেশন",
            "ইন্ডিভিজুয়াল ট্যাক্স ফাইলিং",
            "কর্পোরেট ট্যাক্স",
            "ট্যাক্স রিটার্ন প্রস্তুতকরণ",
            "ট্যাক্স পরামর্শ",
        ],
    };

    const handleBkashPayment = async () => {
        if (!userInfo) return window.location.href = '/components/login';

        try {
            const data = {
                transaction_id: "DAQ5HS5O3D"
            };

            const response = await axios.post(
                "http://payment.zappay.top/api/payment/verify",
                data,
                {
                    maxBodyLength: Infinity,
                    headers: {
                        "Content-Type": "application/json",
                        "API-KEY": "gnXi7etgWNhFyFGZFrOMYyrmnF4A1eGU5SC2QRmUvILOlNc2Ef",
                        "SECRET-KEY": "Secret key From API credentials",
                        "BRAND-KEY": "ic5aA9fryBfcOb2zLYmrtXmag22OpiRelZSWowUa4voYvrBD2k"
                    }
                }
            );

            console.log("✅ Verify Response:", response.data);
            return response.data;

        } catch (error) {
            console.error("❌ Verify Error:");

            if (error.response) {
                console.error("Status:", error.response.status);
                console.error("Data:", error.response.data);
            } else {
                console.error(error.message);
            }

            return null;
        }
    };


    return (
        <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-start relative">

            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left: Package Details */}
                <Card className="md:col-span-2 rounded-2xl shadow-lg">
                    <CardContent className="p-6">
                        <h1 className="text-2xl font-bold mb-2">{pkg.name} প্যাকেজ</h1>
                        <p className="text-gray-600 mb-4">
                            বাংলাদেশে আপনার ট্যাক্স ও কমপ্লায়েন্স সংক্রান্ত সকল কাজের জন্য সম্পূর্ণ সমাধান।
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
                                এই প্যাকেজের মাধ্যমে আপনি টিআইএন রেজিস্ট্রেশন, ইন্ডিভিজুয়াল ও কর্পোরেট ট্যাক্স সাপোর্ট,
                                ট্যাক্স রিটার্ন প্রস্তুতকরণ এবং প্রফেশনাল ট্যাক্স পরামর্শ সেবা পাবেন। আমাদের এক্সপার্ট টিম
                                আপনার হয়ে সম্পূর্ণ প্রক্রিয়াটি সম্পন্ন করবে এবং বাংলাদেশ ট্যাক্স আইনের সাথে পূর্ণ
                                সম্মতি নিশ্চিত করবে।
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
                            <Button className="w-full bg-pink-600 hover:bg-pink-700" onClick={handleBkashPayment}>বিকাশ দিয়ে পেমেন্ট করুন</Button>
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
            {type === 'bkash' && <Bkash method={{ type, setType, packageType: 'basic' }} />}
        </div>
    );
}
