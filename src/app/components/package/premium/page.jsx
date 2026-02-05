'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    CheckCircle,
    Shield,
    Clock,
    Headphones,
    Building,
    CreditCard,
    Smartphone,
    Wallet,
    FileText,
    Users,
    Globe,
    Award,
    Briefcase,
    Landmark,
    Scale,
    FileCheck,
    BarChart,
    Package,
    Star,
    Crown,
    Phone
} from "lucide-react"
import { useState } from "react"
import Bkash from "../Bkash"

export default function PremiumPackageCheckout() {
    const [type, setType] = useState('')
    const [loading, setLoading] = useState(false)

    const pkg = {
        name: "প্রিমিয়াম কর্পোরেট প্যাকেজ",
        price: "৳১৫,০০০",
        originalPrice: "৳২৫,০০০",
        features: [
            {
                title: "কোম্পানি রেজিস্ট্রেশন",
                description: "প্রাইভেট/পাবলিক লিমিটেড কোম্পানি রেজিস্ট্রেশন",
                icon: <Building className="w-5 h-5" />
            },
            {
                title: "IRC & ERC সার্ভিস",
                description: "ইমপোর্ট/এক্সপোর্ট রেজিস্ট্রেশন সার্টিফিকেট",
                icon: <Globe className="w-5 h-5" />
            },
            {
                title: "বিজনেস অডিট",
                description: "পূর্ণাঙ্গ ব্যবসায়িক অডিট সার্ভিস",
                icon: <FileCheck className="w-5 h-5" />
            },
            {
                title: "ফাইন্যান্সিয়াল অডিট",
                description: "আর্থিক বিবরণী অডিট ও সার্টিফিকেশন",
                icon: <BarChart className="w-5 h-5" />
            },
            {
                title: "বিজনেস কমপ্লায়েন্স",
                description: "সম্পূর্ণ ব্যবসায়িক আইনি আনুগত্য",
                icon: <Scale className="w-5 h-5" />
            },
            {
                title: "কাস্টম আইন সেবা",
                description: "কাস্টমস আইন সম্পর্কিত সকল সেবা",
                icon: <Landmark className="w-5 h-5" />
            },
            {
                title: "কাস্টম বন্ড সার্ভিস",
                description: "কাস্টমস বন্ড প্রসেসিং ও ম্যানেজমেন্ট",
                icon: <Briefcase className="w-5 h-5" />
            },
            {
                title: "রিফান্ড অ্যাডজাস্টমেন্ট",
                description: "কাস্টমস ও ভ্যাট রিফান্ড প্রসেসিং",
                icon: <FileText className="w-5 h-5" />
            },
            {
                title: "ট্যাক্স আপিল ও ট্রাইব্যুনাল",
                description: "ট্যাক্স আপিল ও ট্রাইব্যুনাল কেস ম্যানেজমেন্ট",
                icon: <Scale className="w-5 h-5" />
            },
            {
                title: "ইমপোর্ট/এক্সপোর্ট সার্টিফিকেট",
                description: "সমস্ত ইমপোর্ট-এক্সপোর্ট সার্টিফিকেশন",
                icon: <Package className="w-5 h-5" />
            },
            {
                title: "ট্রেড লাইসেন্স ও ট্রেডমার্ক",
                description: "ট্রেড লাইসেন্স নবায়ন ও ট্রেডমার্ক রেজিস্ট্রেশন",
                icon: <Award className="w-5 h-5" />
            },
            {
                title: "RJSC রেজিস্ট্রেশন",
                description: "রেজিস্ট্রার অব জয়েন্ট স্টক কোম্পানিজ সার্ভিস",
                icon: <Building className="w-5 h-5" />
            },
            {
                title: "অ্যাকাউন্টিং সার্ভিস",
                description: "পূর্ণাঙ্গ অ্যাকাউন্টিং ও ফাইন্যান্স ম্যানেজমেন্ট",
                icon: <BarChart className="w-5 h-5" />
            },
            {
                title: "সফটওয়্যার ইমপ্লিমেন্টেশন",
                description: "অ্যাকাউন্টিং সফটওয়্যার ইন্সটলেশন ও ট্রেনিং",
                icon: <Briefcase className="w-5 h-5" />
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
            description: 'বিকাশ মার্চেন্ট থেকে পেমেন্ট'
        },
        {
            id: 'nagad',
            name: 'নগদ',
            icon: '/payment/nagad.png',
            color: 'bg-gradient-to-r from-orange-500 to-orange-600',
            hoverColor: 'hover:from-orange-600 hover:to-orange-700',
            description: 'নগদ বিজনেস অ্যাকাউন্ট থেকে পেমেন্ট'
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

    const handlePayment = (methodId) => {
        if (methodId === 'bkash') {
            setType('bkash')
        } else {
            // WhatsApp এ রিডাইরেক্ট
            window.open('https://wa.me/8801737263347?text=প্রিমিয়াম প্যাকেজ সম্পর্কে বিস্তারিত জানতে চাই', '_blank')
        }
    }

    const handleWhatsAppPayment = () => {
        window.open('https://wa.me/8801737263347?text=প্রিমিয়াম প্যাকেজ কিনতে চাই, দয়া করে সহায়তা করুন', '_blank')
    }

    const handleDirectCall = () => {
        window.open('tel:+8801737263347', '_blank')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 p-4 md:p-8">
            {/* হেডার */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white">
                        <Crown className="w-5 h-5" />
                        <span className="font-semibold">এক্সক্লুসিভ কর্পোরেট প্যাকেজ</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        সম্পূর্ণ কর্পোরেট ব্যবস্থাপনা সমাধান
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        বড় ব্যবসা ও কোম্পানির জন্য একটি পূর্ণাঙ্গ লিগ্যাল, ট্যাক্স, অডিট ও কমপ্লায়েন্স সল্যুশন
                    </p>
                </div>

                {/* প্রগ্রেস বার */}
                <div className="flex justify-center mt-8">
                    <div className="flex items-center w-full max-w-md">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                                ১
                            </div>
                            <span className="mt-2 text-sm font-medium text-purple-600">প্যাকেজ সিলেক্ট</span>
                        </div>
                        <div className="flex-1 h-1 bg-purple-200 mx-4"></div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                                ২
                            </div>
                            <span className="mt-2 text-sm font-medium text-purple-600">কনসালটেশন</span>
                        </div>
                        <div className="flex-1 h-1 bg-purple-200 mx-4"></div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">
                                ৩
                            </div>
                            <span className="mt-2 text-sm font-medium text-gray-500">কাস্টমাইজড অফার</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* বামপাশ: প্যাকেজ ডিটেইলস */}
                <div className="lg:col-span-2 space-y-6">
                    {/* মূল কার্ড - প্রিমিয়াম থিম */}
                    <Card className="rounded-2xl shadow-2xl border-0 overflow-hidden bg-gradient-to-br from-white to-purple-50 relative">
                        {/* প্রিমিয়াম ব্যাজ */}
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-full transform rotate-12 shadow-lg">
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4" />
                                <span className="font-bold">এক্সক্লুসিভ</span>
                            </div>
                        </div>
                        
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                                            কর্পোরেট
                                        </div>
                                        <div className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                                            সম্পূর্ণ সমাধান
                                        </div>
                                        <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                                            ২০+ সার্ভিস
                                        </div>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {pkg.name}
                                    </h2>
                                    <p className="text-gray-600 mt-2 max-w-2xl">
                                        ইমপোর্ট-এক্সপোর্ট, ম্যানুফ্যাকচারিং, ট্রেডিং এবং সকল ধরনের বড় ব্যবসার জন্য
                                        ডিজাইন করা সম্পূর্ণ ব্যবস্থাপনা সমাধান
                                    </p>
                                </div>

                                <div className="mt-4 md:mt-0">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-purple-700">
                                            {pkg.price}
                                        </span>
                                        <span className="text-lg text-gray-400 line-through">
                                            {pkg.originalPrice}
                                        </span>
                                        <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                                            ৪০% ছাড়
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1">মাসিক কিস্তিতে পরিশোধের সুযোগ রয়েছে</p>
                                </div>
                            </div>

                            {/* বিশেষ বৈশিষ্ট্য */}
                            <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <Crown className="w-6 h-6 text-purple-600" />
                                    <h3 className="text-lg font-semibold text-purple-800">প্রিমিয়াম সুবিধাসমূহ</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        <span className="text-gray-700">ডেডিকেটেড একাউন্ট ম্যানেজার</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        <span className="text-gray-700">২৪/৭ প্রায়োরিটি সাপোর্ট</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        <span className="text-gray-700">কাস্টমাইজড সার্ভিস প্যাকেজ</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        <span className="text-gray-700">মাসিক প্রোগ্রেস রিপোর্ট</span>
                                    </div>
                                </div>
                            </div>

                            {/* ফিচার্স গ্রিড */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {pkg.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg group-hover:bg-purple-200 transition duration-300">
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

                            {/* অতিরিক্ত সুবিধা */}
                            <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <Award className="w-6 h-6 text-yellow-400" />
                                    <h3 className="text-lg font-semibold">এক্সট্রা ভ্যালু অ্যাডেড সার্ভিস</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">ফ্রি বিজনেস কনসালটেশন</h4>
                                            <p className="text-gray-300 text-sm">মাসে ৪ ঘন্টা ফ্রি কনসালটেশন</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">ট্রেনিং সেশন</h4>
                                            <p className="text-gray-300 text-sm">স্টাফ ট্রেনিং ও ওয়ার্কশপ</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">ডকুমেন্টেশন সাপোর্ট</h4>
                                            <p className="text-gray-300 text-sm">সমস্ত ডকুমেন্ট প্রস্তুতি</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">সরকারি অফিস ভিজিট</h4>
                                            <p className="text-gray-300 text-sm">সরকারি অফিসে প্রতিনিধিত্ব</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* গ্যারান্টি সেকশন */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold text-center">কর্পোরেট গ্যারান্টি</h4>
                            <p className="text-sm opacity-90 text-center mt-2">সম্পূর্ণ আইনি সুরক্ষা গ্যারান্টি</p>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold text-center">ডেডিকেটেড টিম</h4>
                            <p className="text-sm opacity-90 text-center mt-2">আপনার জন্য বিশেষায়িত টিম</p>
                        </div>

                        <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold text-center">সম্পূর্ণ সমাধান</h4>
                            <p className="text-sm opacity-90 text-center mt-2">এক জায়গায় সকল ব্যবসায়িক সেবা</p>
                        </div>
                    </div>
                </div>

                {/* ডানপাশ: পেমেন্ট ও কনসালটেশন */}
                <div className="space-y-6">
                    {/* কনসালটেশন কার্ড */}
                    <Card className="rounded-2xl shadow-xl border-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                        <CardContent className="p-6">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Crown className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold">এক্সক্লুসিভ কনসালটেশন</h2>
                                <p className="text-gray-300 mt-2">
                                    এই প্যাকেজের জন্য বিনামূল্যে এক্সপার্ট কনসালটেশন
                                </p>
                            </div>

                            <div className="space-y-4">
                                <Button
                                    onClick={handleDirectCall}
                                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 text-lg font-semibold"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    সরাসরি কথা বলুন
                                </Button>

                                <Button
                                    onClick={handleWhatsAppPayment}
                                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-6 text-lg font-semibold"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                                    </svg>
                                    WhatsApp এ কনসালটেশন
                                </Button>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-700">
                                <h4 className="font-semibold mb-3 text-center">কনসালটেশন সুবিধা</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm">বিনামূল্যে ব্যবসায়িক অ্যানালাইসিস</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm">কাস্টমাইজড সার্ভিস প্ল্যান</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm">কিস্তিতে পেমেন্টের অপশন</span>
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    {/* পেমেন্ট কার্ড */}
                    <Card className="rounded-2xl shadow-xl border-0 sticky top-6">
                        <CardContent className="p-6">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-gray-900">পেমেন্ট অপশন</h2>
                                <div className="mt-4">
                                    <div className="flex justify-between items-center py-3 border-b">
                                        <span className="text-gray-600">প্রিমিয়াম প্যাকেজ</span>
                                        <span className="font-semibold">{pkg.originalPrice}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b">
                                        <span className="text-gray-600">কর্পোরেট ছাড়</span>
                                        <span className="font-semibold text-green-600">-৳১০,০০০</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-lg font-semibold text-gray-900">মোট প্রদেয়</span>
                                        <span className="text-2xl font-bold text-purple-700">{pkg.price}</span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                                    <p className="text-sm text-purple-700 font-medium text-center">
                                        💰 ৩ কিস্তিতে পেমেন্টের সুযোগ: ৫,০০০ x ৩ মাস
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    দ্রুত পেমেন্ট করুন
                                </h3>

                                <div className="space-y-4">
                                    {paymentMethods.map((method) => (
                                        <button
                                            key={method.id}
                                            onClick={() => handlePayment(method.id)}
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

                                <div className="mt-8">
                                    <h4 className="font-semibold text-gray-900 mb-3">বিশেষ নোট</h4>
                                    <div className="space-y-3 text-sm text-gray-600">
                                        <div className="flex items-start gap-2">
                                            <Star className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                            <p>প্রিমিয়াম প্যাকেজ কেনার আগে অবশ্যই আমাদের সাথে কথা বলুন</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Star className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                            <p>আপনার ব্যবসার ধরন অনুযায়ী সার্ভিস কাস্টোমাইজ করা হবে</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Star className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                            <p>কিস্তিতে পেমেন্টের জন্য আলাদা চুক্তি সাক্ষরিত হবে</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <Headphones className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-1">সরাসরি যোগাযোগ</h4>
                                            <p className="text-sm text-yellow-700">
                                                এই প্যাকেজ সম্পর্কে বিস্তারিত জানতে কল করুন:
                                            </p>
                                            <Button
                                                variant="outline"
                                                className="w-full mt-2 border-yellow-300 text-yellow-700 hover:bg-yellow-50"
                                                onClick={handleDirectCall}
                                            >
                                                <Phone className="w-4 h-4 mr-2" />
                                                কল করুন: +৮৮০ ১৭৩৭-২৬৩৩৪৭
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* BKash পপআপ */}
            {type === 'bkash' && (
                <Bkash method={{ type, setType, packageType: 'premium' }} />
            )}
        </div>
    )
}