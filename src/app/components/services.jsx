"use client";
import React, { useState } from "react";
import { CheckCircle, Calculator, FileText, Globe, CreditCard, Shield, Bell, TrendingUp, Building, FileChartPie, Users, Headphones, Target, Zap, Clock } from "lucide-react";

function ServiceCard({ title, desc, icon: Icon, index, isHovered, onHover }) {
    return (
        <div
            className="group relative h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-200"
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-100/0 group-hover:from-emerald-50/40 group-hover:via-emerald-100/20 group-hover:to-emerald-200/10 transition-all duration-500" />

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-100 transform rotate-45 translate-x-4 -translate-y-4 group-hover:bg-emerald-200 transition-colors duration-500"></div>
            </div>

            <div className="relative z-10">
                {/* Icon with Animation */}
                <div className={`mb-5 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${isHovered === index
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                        : 'bg-emerald-50 text-emerald-600'
                    }`}>
                    <Icon size={24} />
                </div>

                {/* Title */}
                <h4 className={`text-lg font-bold mb-3 transition-colors duration-300 ${isHovered === index ? 'text-emerald-700' : 'text-gray-800'
                    }`}>
                    {title}
                </h4>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600 mb-4">
                    {desc}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-medium">
                    <span className={`transition-colors duration-300 ${isHovered === index ? 'text-emerald-600' : 'text-gray-500'
                        }`}>
                        বিস্তারিত জানুন
                    </span>
                    <div className={`w-4 h-4 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 ${isHovered === index ? 'text-emerald-600' : 'text-gray-400'
                        }`}>
                        →
                    </div>
                </div>
            </div>

            {/* Hover Indicator */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-b-2xl transform scale-x-0 transition-transform duration-500 ${isHovered === index ? 'scale-x-100' : ''
                }`}></div>
        </div>
    );
}

export default function BDTaxationPage() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            title: "আয়কর গণনা",
            desc: "গ্রস বেতন থেকে সকল ছাড়, রিবেট ও আইনসম্মত হিসাব অনুযায়ী সঠিক আয়কর নির্ধারণ।",
            icon: Calculator
        },
        {
            title: "রিটার্ন প্রস্তুতি ও জমা",
            desc: "আয়কর রিটার্ন প্রস্তুত, যাচাই এবং অনলাইন ই-রিটার্ন সাবমিশন পর্যন্ত সম্পূর্ণ সেবা।",
            icon: FileText
        },
        {
            title: "প্রবাসী কর সহায়তা",
            desc: "প্রবাসী ও বিদেশি নাগরিকদের জন্য রেসিডেন্সি স্ট্যাটাস, কর ছাড় ও ট্রিটি গাইড।",
            icon: Globe
        },
        {
            title: "বেতন ব্যবস্থাপনা",
            desc: "প্রতিষ্ঠানের জন্য বেতন কাঠামো, ট্যাক্স কাটা, বোনাস ও কমপ্লায়েন্স সেটআপ।",
            icon: CreditCard
        },
        {
            title: "অডিট ও কমপ্লায়েন্স",
            desc: "কর অডিট, নোটিশ, শুনানি প্রস্তুতি ও ডকুমেন্টেশন সহ পূর্ণ আইনি সহায়তা।",
            icon: Shield
        },
        {
            title: "সরকারি নোটিশ ও আপডেট",
            desc: "নতুন ফাইন্যান্স অ্যাক্ট, SRO, নোটিশ ও সংশোধিত কর আপডেট দ্রুত প্রদান।",
            icon: Bell
        },
        {
            title: "কর পরিকল্পনা ও বিনিয়োগ",
            desc: "আইনসম্মত কর সেভিংস, রিবেট সুবিধা ও দীর্ঘমেয়াদি বিনিয়োগ পরিকল্পনা।",
            icon: TrendingUp
        },
        {
            title: "কর্পোরেট ও ব্যবসায়িক কর",
            desc: "কোম্পানি, পার্টনারশিপ ও এনজিওদের জন্য রিটার্ন ফাইলিং ও কর্পোরেট কমপ্লায়েন্স।",
            icon: Building
        },
        {
            title: "TIN, BIN ও সার্টিফিকেট",
            desc: "e-TIN, BIN, কর সার্টিফিকেট ও সরকারি ভেরিফিকেশন সহ সম্পূর্ণ প্রসেসিং।",
            icon: FileChartPie
        },
        {
            title: "ব্যক্তি কর পরামর্শ",
            desc: "ব্যক্তিগত করদাতাদের জন্য বিশেষায়িত পরামর্শ ও ট্যাক্স প্ল্যানিং।",
            icon: Users
        },
        {
            title: "২৪/৭ সমর্থন",
            desc: "কোনো সময় যেকোনো প্রশ্নের উত্তর এবং জরুরী সহায়তা প্রদান।",
            icon: Headphones
        },
        {
            title: "লক্ষ্য নির্ধারণ",
            desc: "আপনার আর্থিক লক্ষ্য অনুযায়ী কাস্টমাইজড ট্যাক্স পরিকল্পনা।",
            icon: Target
        }
    ];

    return (
        <section className="relative bg-gradient-to-b from-white to-emerald-50/30 py-16 sm:py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-100/20 rounded-full blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* SECTION HEADER */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                        <Zap size={16} />
                        TaxLine BD
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        TaxLine BD এর <span className="text-emerald-600">প্রধান সেবা</span>
                    </h2>

                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        ব্যক্তিগত ও কর্পোরেট ট্যাক্স সল্যুশনের জন্য নির্ভরযোগ্য, আইনসম্মত এবং আপডেটেড সেবা
                    </p>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        <div className="bg-white/50 backdrop-blur-sm border border-emerald-100 rounded-xl p-4">
                            <div className="text-2xl font-bold text-emerald-600">১২+</div>
                            <div className="text-sm text-gray-600">সেবা ক্যাটাগরি</div>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm border border-emerald-100 rounded-xl p-4">
                            <div className="text-2xl font-bold text-emerald-600">১০০০+</div>
                            <div className="text-sm text-gray-600">সন্তুষ্ট ক্লায়েন্ট</div>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm border border-emerald-100 rounded-xl p-4">
                            <div className="text-2xl font-bold text-emerald-600">৯৯%</div>
                            <div className="text-sm text-gray-600">সাফল্যের হার</div>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm border border-emerald-100 rounded-xl p-4">
                            <div className="text-2xl font-bold text-emerald-600">২৪/৭</div>
                            <div className="text-sm text-gray-600">সহায়তা</div>
                        </div>
                    </div>
                </div>

                {/* SERVICES GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            desc={service.desc}
                            icon={service.icon}
                            index={index}
                            isHovered={hoveredCard}
                            onHover={setHoveredCard}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
                    {/* Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="text-emerald-200" size={24} />
                                    <h3 className="text-2xl font-bold">আজই শুরু করুন</h3>
                                </div>
                                <p className="text-emerald-100 text-lg mb-6 max-w-2xl">
                                    আপনার করের চাপ কমিয়ে আর্থিক স্বাধীনতার পথে এগিয়ে যান। আমাদের বিশেষজ্ঞ দল আপনার পাশে রয়েছে।
                                </p>
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-emerald-200" />
                                        <span>ফ্রি কনসাল্টেশন</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-emerald-200" />
                                        <span>নো-হিডেন চার্জ</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-emerald-200" />
                                        <span>মানি-ব্যাক গ্যারান্টি</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors shadow-lg">
                                    ফ্রি কনসাল্টেশন
                                </button>
                                <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                                    সার্ভিস দেখুন
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}