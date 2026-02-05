'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    CheckCircle,
    Shield,
    Clock,
    Headphones,
    FileText,
    TrendingUp,
    CreditCard,
    Smartphone,
    Wallet
} from "lucide-react"
import { useContext, useState } from "react"
import Bkash from "../Bkash"
import { ContextProvider } from "@/app/Provider"

export default function PackageCheckout() {
    const { userInfo } = useContext(ContextProvider)
    const [type, setType] = useState('')
    const [loading, setLoading] = useState(false)

    const pkg = {
        name: "বেসিক প্যাকেজ",
        price: "৳২০০০",
        originalPrice: "৳৩৫০০",
        features: [
            {
                title: "টিআইএন রেজিস্ট্রেশন",
                description: "বাংলাদেশ সরকারের আন্ডারে টিআইএন নিবন্ধন",
                icon: <FileText className="w-5 h-5" />
            },
            {
                title: "ইন্ডিভিজুয়াল ট্যাক্স ফাইলিং",
                description: "ব্যক্তিগত আয়কর রিটার্ন ফাইলিং",
                icon: <TrendingUp className="w-5 h-5" />
            },
            {
                title: "কর্পোরেট ট্যাক্স",
                description: "কোম্পানির জন্য কর পরামর্শ ও ফাইলিং",
                icon: <Shield className="w-5 h-5" />
            },
            {
                title: "ট্যাক্স রিটার্ন প্রস্তুতকরণ",
                description: "পেশাদার ট্যাক্স রিটার্ন প্রস্তুতি",
                icon: <CheckCircle className="w-5 h-5" />
            },
            {
                title: "ট্যাক্স পরামর্শ",
                description: "বিশেষজ্ঞ ট্যাক্স পরামর্শ সেবা",
                icon: <Headphones className="w-5 h-5" />
            },
            {
                title: "৩ মাস সাপোর্ট",
                description: "ক্রয়ের পর ৩ মাস পর্যন্ত সাপোর্ট",
                icon: <Clock className="w-5 h-5" />
            }
        ]
    }

    const paymentMethods = [
        {
            id: 'bkash',
            name: 'বিকাশ',
            icon: '/payment/bkash.png',
            color: 'bg-gradient-to-r from-pink-500 to-pink-600',
            hoverColor: 'hover:from-pink-600 hover:to-pink-700',
            description: 'বিকাশ অ্যাপ/মোবাইল থেকে পেমেন্ট করুন'
        },
        {
            id: 'nagad',
            name: 'নগদ',
            icon: '/payment/nagad.png',
            color: 'bg-gradient-to-r from-orange-500 to-orange-600',
            hoverColor: 'hover:from-orange-600 hover:to-orange-700',
            description: 'নগদ অ্যাপ/এমএফএস থেকে পেমেন্ট করুন'
        },
        {
            id: 'card',
            name: 'কার্ড/ব্যাংক',
            icon: '/payment/card.png',
            color: 'bg-gradient-to-r from-blue-500 to-blue-600',
            hoverColor: 'hover:from-blue-600 hover:to-blue-700',
            description: 'ক্রেডিট/ডেবিট কার্ড অথবা ব্যাংক ট্রান্সফার'
        }
    ]

    const handlePayment = async (method) => {
        if (!userInfo) return window.location.href = '/components/login'
        router.push('https://wa.me/8801737263347');
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
            {/* হেডার */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        প্যাকেজ সিলেক্ট করুন ও পেমেন্ট করুন
                    </h1>
                    <p className="text-gray-600">
                        ৩টি সহজ ধাপে আপনার প্রয়োজনীয় ট্যাক্স সেবা নিন
                    </p>
                </div>

                {/* প্রগ্রেস বার */}
                <div className="flex justify-center mt-8">
                    <div className="flex items-center w-full max-w-md">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                ১
                            </div>
                            <span className="mt-2 text-sm font-medium text-blue-600">প্যাকেজ সিলেক্ট</span>
                        </div>
                        <div className="flex-1 h-1 bg-blue-200 mx-4"></div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                ২
                            </div>
                            <span className="mt-2 text-sm font-medium text-blue-600">পেমেন্ট</span>
                        </div>
                        <div className="flex-1 h-1 bg-blue-200 mx-4"></div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">
                                ৩
                            </div>
                            <span className="mt-2 text-sm font-medium text-gray-500">কনফার্মেশন</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* বামপাশ: প্যাকেজ ডিটেইলস */}
                <div className="lg:col-span-2 space-y-6">
                    {/* মূল কার্ড */}
                    <Card className="rounded-2xl shadow-xl border-0 overflow-hidden bg-gradient-to-br from-white to-blue-50">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {pkg.name}
                                    </h2>
                                    <p className="text-gray-600 mt-2">
                                        বাংলাদেশে আপনার ট্যাক্স ও কমপ্লায়েন্স সংক্রান্ত সকল কাজের জন্য সম্পূর্ণ সমাধান
                                    </p>
                                </div>

                                <div className="mt-4 md:mt-0">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-blue-700">
                                            {pkg.price}
                                        </span>
                                        <span className="text-lg text-gray-400 line-through">
                                            {pkg.originalPrice}
                                        </span>
                                        <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                                            ৪৩% ছাড়
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1">ভ্যাট ও অন্যান্য ফিস অন্তর্ভুক্ত</p>
                                </div>
                            </div>

                            {/* ফিচার্স গ্রিড */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                {pkg.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                                                <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* গ্যারান্টি সেকশন */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900">১০০% সুরক্ষিত</h4>
                            <p className="text-sm text-gray-600 mt-2">এনক্রিপ্টেড ও নিরাপদ পেমেন্ট</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-6 h-6 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900">২৪/৭ সাপোর্ট</h4>
                            <p className="text-sm text-gray-600 mt-2">যেকোনো সময় সাহায্যের জন্য প্রস্তুত</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-purple-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900">মানি ব্যাক গ্যারান্টি</h4>
                            <p className="text-sm text-gray-600 mt-2">৭ দিনের মধ্যে সেবা না পেলে ফেরত</p>
                        </div>

                    </div>
                    {/* হেল্প কার্ড */}
                    <Card className="rounded-2xl shadow-sm border">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Headphones className="w-6 h-6 text-blue-600" />
                                <h4 className="font-semibold text-gray-900">সাহায্য প্রয়োজন?</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                                পেমেন্ট বা প্যাকেজ সম্পর্কে যেকোনো প্রশ্নে আমাদের সাথে যোগাযোগ করুন
                            </p>
                            <Button
                                variant="outline"
                                className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                                onClick={() => window.open('tel:+8801711060454')}
                            >
                                কল করুন: +৮৮০ ১৭৩৭-২৬৩৩৪৭
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* ডানপাশ: পেমেন্ট অপশন */}
                <div className="space-y-6">
                    {/* পেমেন্ট কার্ড */}
                    <Card className="rounded-2xl shadow-xl border-0 sticky top-6">
                        <CardContent className="p-6">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-gray-900">পেমেন্ট সারাংশ</h2>
                                <div className="mt-4">
                                    <div className="flex justify-between items-center py-3 border-b">
                                        <span className="text-gray-600">প্যাকেজ মূল্য</span>
                                        <span className="font-semibold">{pkg.originalPrice}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b">
                                        <span className="text-gray-600">ছাড়</span>
                                        <span className="font-semibold text-green-600">-৳১৫০০</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-lg font-semibold text-gray-900">মোট প্রদেয়</span>
                                        <span className="text-2xl font-bold text-blue-700">{pkg.price}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    পেমেন্ট মেথড নির্বাচন করুন
                                </h3>

                                <div className="space-y-4">
                                    {paymentMethods.map((method) => (
                                        <button
                                            key={method.id}
                                            onClick={() => handlePayment()}
                                            disabled={loading}
                                            className={`w-full p-4 rounded-xl text-white ${method.color} ${method.hoverColor} transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between shadow-md`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="bg-white/20 p-2 rounded-lg">
                                                    <img
                                                        src={method.icon}
                                                        alt={method.name}
                                                        className="h-6 w-6 object-contain"
                                                        onError={(e) => {
                                                            const target = e.target;
                                                            target.style.display = 'none';
                                                            const parent = target.parentElement;
                                                            if (parent) {
                                                                parent.innerHTML = method.id === 'bkash' ? 'bK' : method.id === 'nagad' ? 'NG' : 'CD';
                                                                parent.className = "bg-white/20 p-2 rounded-lg text-white font-bold";
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                <div className="text-left">
                                                    <div className="font-bold text-lg">{method.name}</div>
                                                    <div className="text-sm opacity-90">{method.description}</div>
                                                </div>
                                            </div>
                                            <div className="bg-white/20 p-2 rounded-full">
                                                {method.id === 'bkash' && <Smartphone className="w-5 h-5" />}
                                                {method.id === 'nagad' && <Wallet className="w-5 h-5" />}
                                                {method.id === 'card' && <CreditCard className="w-5 h-5" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <p className="text-center text-gray-500 text-sm mt-4">
                                    পেমেন্ট সম্পন্ন করলে আপনাকে স্বয়ংক্রিয়ভাবে কনফার্মেশন পেজে নিয়ে যাওয়া হবে
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* BKash পপআপ */}
            {type === 'bkash' && (
                <Bkash method={{ type, setType, packageType: 'basic' }} />
            )}
        </div>
    )
}