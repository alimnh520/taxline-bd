'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    CheckCircle,
    Shield,
    Clock,
    Headphones,
    FileText,
    Building,
    CreditCard,
    Smartphone,
    Wallet,
    BarChart,
    FileCheck,
    Users,
    Globe
} from "lucide-react"
import { useContext, useState } from "react"
import Bkash from "../Bkash"
import { useRouter } from "next/navigation"
import { ContextProvider } from "@/app/Provider"

export default function StandardPackageCheckout() {
    const router = useRouter();
    const { userInfo } = useContext(ContextProvider)
    const [type, setType] = useState('')
    const [loading, setLoading] = useState(false)

    const pkg = {
        name: "স্ট্যান্ডার্ড প্যাকেজ",
        price: "৳৩০০০",
        originalPrice: "৳৫০০০",
        features: [
            {
                title: "বিআইএন (BIN) রেজিস্ট্রেশন",
                description: "ব্যবসার জন্য বাধ্যতামূলক BIN নিবন্ধন",
                icon: <Building className="w-5 h-5" />
            },
            {
                title: "মাসিক ভ্যাট রিটার্ন প্রসেসিং",
                description: "মাসিক ভ্যাট রিটার্ন প্রস্তুতি ও প্রসেসিং",
                icon: <BarChart className="w-5 h-5" />
            },
            {
                title: "অনলাইন ভ্যাট রিটার্ন সাবমিশন",
                description: "NBR পোর্টালে অনলাইন সাবমিশন",
                icon: <Globe className="w-5 h-5" />
            },
            {
                title: "ভ্যাট অডিট সাপোর্ট",
                description: "ভ্যাট অডিটের জন্য পূর্ণ প্রস্তুতি ও সহায়তা",
                icon: <FileCheck className="w-5 h-5" />
            },
            {
                title: "ভ্যাট কনসালটেন্সি",
                description: "বিশেষজ্ঞ ভ্যাট পরামর্শ সেবা",
                icon: <Users className="w-5 h-5" />
            },
            {
                title: "৬ মাস সাপোর্ট",
                description: "ক্রয়ের পর ৬ মাস পর্যন্ত সাপোর্ট",
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 p-4 md:p-8">
            {/* হেডার */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        স্ট্যান্ডার্ড প্যাকেজ - ভ্যাট ও ব্যবসা সমাধান
                    </h1>
                    <p className="text-gray-600">
                        আপনার ব্যবসার জন্য সম্পূর্ণ ভ্যাট ম্যানেজমেন্ট সমাধান
                    </p>
                </div>

                {/* প্রগ্রেস বার */}
                <div className="flex justify-center mt-8">
                    <div className="flex items-center w-full max-w-md">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                                ১
                            </div>
                            <span className="mt-2 text-sm font-medium text-red-600">প্যাকেজ সিলেক্ট</span>
                        </div>
                        <div className="flex-1 h-1 bg-red-200 mx-4"></div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                                ২
                            </div>
                            <span className="mt-2 text-sm font-medium text-red-600">পেমেন্ট</span>
                        </div>
                        <div className="flex-1 h-1 bg-red-200 mx-4"></div>
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
                    {/* মূল কার্ড - রেড থিম */}
                    <Card className="rounded-2xl shadow-xl border-0 overflow-hidden bg-gradient-to-br from-white to-red-50">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                                            ব্যবসার জন্য সর্বোত্তম
                                        </div>
                                        <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                                            BIN + ভ্যাট সমাধান
                                        </div>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {pkg.name}
                                    </h2>
                                    <p className="text-gray-600 mt-2">
                                        আপনার ব্যবসার ভ্যাট ও কমপ্লায়েন্স ব্যবস্থাপনার জন্য একটি পূর্ণাঙ্গ সমাধান
                                    </p>
                                </div>

                                <div className="mt-4 md:mt-0">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-red-700">
                                            {pkg.price}
                                        </span>
                                        <span className="text-lg text-gray-400 line-through">
                                            {pkg.originalPrice}
                                        </span>
                                        <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                                            ৪০% ছাড়
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1">সকল সরকারী ফিস ও ভ্যাট অন্তর্ভুক্ত</p>
                                </div>
                            </div>

                            {/* বিশেষ বৈশিষ্ট্য */}
                            <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
                                <h3 className="text-lg font-semibold text-red-800 mb-3">🎯 এই প্যাকেজের জন্য উপযুক্ত</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="text-gray-700">নতুন ব্যবসা শুরু করছেন</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="text-gray-700">BIN রেজিস্ট্রেশন প্রয়োজন</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="text-gray-700">মাসিক ভ্যাট রিটার্ন ফাইলিং</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="text-gray-700">ভ্যাট কমপ্লায়েন্স ম্যানেজমেন্ট</span>
                                    </div>
                                </div>
                            </div>

                            {/* ফিচার্স গ্রিড */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                {pkg.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-4 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-red-100 text-red-600 rounded-lg">
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

                            {/* বিস্তারিত তথ্য */}
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">বিস্তারিত বিবরণ</h3>
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <p className="text-gray-700 leading-relaxed">
                                        এই স্ট্যান্ডার্ড প্যাকেজের মাধ্যমে আপনি BIN রেজিস্ট্রেশন, মাসিক ভ্যাট রিটার্ন প্রস্তুত ও
                                        অনলাইন সাবমিশন, ভ্যাট অডিট এবং প্রফেশনাল ভ্যাট কনসালটেন্সি সেবা পাবেন। আমাদের অভিজ্ঞ টিম
                                        আপনার ব্যবসার ভ্যাট সংক্রান্ত সকল কাজ সম্পূর্ণভাবে ম্যানেজ করবে এবং আইন অনুযায়ী পূর্ণ
                                        কমপ্লায়েন্স নিশ্চিত করবে। বিশেষ করে যেসব ব্যবসায় ভ্যাট রেজিস্ট্রেশন বাধ্যতামূলক,
                                        তাদের জন্য এই প্যাকেজটি আদর্শ সমাধান।
                                    </p>
                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            <span className="text-gray-700">মাসিক ভ্যাট রিটার্ন সময়মত সাবমিশন</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            <span className="text-gray-700">ভ্যাট অডিটের জন্য সম্পূর্ণ প্রস্তুতি</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            <span className="text-gray-700">NBR এর সাথে সরাসরি সমন্বয়</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                            <span className="text-gray-700">ডিজিটাল ডকুমেন্টেশন সিস্টেম</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* গ্যারান্টি সেকশন */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-red-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900">ভ্যাট কমপ্লায়েন্স গ্যারান্টি</h4>
                            <p className="text-sm text-gray-600 mt-2">১০০% আইনি কমপ্লায়েন্স নিশ্চিত</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-6 h-6 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900">দ্রুত সার্ভিস</h4>
                            <p className="text-sm text-gray-600 mt-2">BIN রেজিস্ট্রেশন ৩-৫ কর্মদিবসে</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-purple-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900">ডেডিকেটেড একাউন্ট ম্যানেজার</h4>
                            <p className="text-sm text-gray-600 mt-2">আপনার জন্য বিশেষ প্রতিনিধি</p>
                        </div>
                    </div>
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
                                        <span className="text-gray-600">স্ট্যান্ডার্ড প্যাকেজ</span>
                                        <span className="font-semibold">{pkg.originalPrice}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b">
                                        <span className="text-gray-600">বিশেষ ছাড়</span>
                                        <span className="font-semibold text-green-600">-৳২০০০</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-lg font-semibold text-gray-900">মোট প্রদেয়</span>
                                        <span className="text-2xl font-bold text-red-700">{pkg.price}</span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-green-50 rounded-xl">
                                    <p className="text-sm text-green-700 font-medium">
                                        আজ পেমেন্ট করলে ১ মাস ফ্রি সাপোর্ট এক্সটেনশন
                                    </p>
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
                                                            const target = e.target
                                                            target.style.display = 'none'
                                                            const parent = target.parentElement
                                                            if (parent) {
                                                                parent.innerHTML = method.id === 'bkash' ? 'bK' : method.id === 'nagad' ? 'NG' : 'CD'
                                                                parent.className = "bg-white/20 p-2 rounded-lg text-white font-bold"
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


                                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                    <h4 className="font-semibold text-blue-800 mb-2">📞 সরাসরি হেল্পলাইন</h4>
                                    <p className="text-sm text-blue-700 mb-3">
                                        পেমেন্ট সংক্রান্ত যেকোনো সমস্যায় কল করুন:
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                                        onClick={() => window.open('tel:+8801737263347')}
                                    >
                                        <Phone className="w-4 h-4 mr-2" />
                                        কল করুন: +৮৮০ ১৭৩৭-২৬৩৩৪৭
                                    </Button>
                                </div>

                                <p className="text-center text-gray-500 text-sm mt-4">
                                    পেমেন্ট সম্পন্ন করলে আপনাকে স্বয়ংক্রিয়ভাবে কনফার্মেশন পেজে নিয়ে যাওয়া হবে
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* হেল্প কার্ড */}
                    <Card className="rounded-2xl shadow-sm border">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Headphones className="w-6 h-6 text-red-600" />
                                <h4 className="font-semibold text-gray-900">স্ট্যান্ডার্ড প্যাকেজ সম্পর্কে</h4>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                    <p className="text-sm text-gray-600">
                                        BIN রেজিস্ট্রেশন সাধারণত ৩-৫ কর্মদিবসে সম্পন্ন হয়
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                    <p className="text-sm text-gray-600">
                                        মাসিক ভ্যাট রিটার্ন প্রতিমাসের ১৫ তারিখের মধ্যে সাবমিট করা হয়
                                    </p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                    <p className="text-sm text-gray-600">
                                        ভ্যাট অডিট সাপোর্টে আমাদের টিম আপনার সাথে থাকবে
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 p-4 bg-yellow-50 rounded-xl">
                                <p className="text-sm text-yellow-800 text-center font-medium">
                                    ⚡ প্রথম ১০টি অর্ডারে ১ মাস ফ্রি এক্সটেনশন
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* BKash পপআপ */}
            {type === 'bkash' && (
                <Bkash method={{ type, setType, packageType: 'standard' }} />
            )}
        </div>
    )
}

// Phone আইকন কম্পোনেন্ট যোগ করুন
function Phone(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}