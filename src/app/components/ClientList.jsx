'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import { Building2, Users, Trophy, Star } from "lucide-react";

export default function ClientList() {
    const clients = [
        { logo: '/company-logo/logo3.png', name: 'বাংলাদেশ ব্যাংক', category: 'ব্যাংকিং' },
        { logo: '/company-logo/logo1-1.png', name: 'গাজী গ্রুপ', category: 'শিল্প' },
        { logo: '/company-logo/logo2-1.png', name: 'এশিয়ান পেইন্টস', category: 'উৎপাদন' },
        { logo: '/company-logo/logo5.png', name: 'ইসলামী ব্যাংক', category: 'ব্যাংকিং' },
        { logo: '/company-logo/logo4-1.png', name: 'সিমেন্ট ইন্ডাস্ট্রি', category: 'নির্মাণ' },
        { logo: '/company-logo/logo3.png', name: 'এসএসপি লিমিটেড', category: 'সেবা' },
        { logo: '/company-logo/logo5.png', name: 'ডেলটা লাইফ', category: 'বীমা' },
        { logo: '/company-logo/logo1-1.png', name: 'আকিজ গ্রুপ', category: 'শিল্প' },
        { logo: '/company-logo/logo2-1.png', name: 'সিটি ব্যাংক', category: 'ব্যাংকিং' },
    ];

    const stats = [
        { icon: <Building2 size={20} />, value: "১০০+", label: "কোম্পানি" },
        { icon: <Users size={20} />, value: "৯০০+", label: "সন্তুষ্ট ক্লায়েন্ট" },
        { icon: <Trophy size={20} />, value: "৬ বছর", label: "অভিজ্ঞতা" },
        { icon: <Star size={20} />, value: "৪.৯/৫", label: "রেটিং" },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4">
            
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                    <Users size={16} />
                    আমাদের সম্মানিত অংশীদার
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    যারা আমাদের <span className="text-emerald-600">বিশ্বাস করেন</span>
                </h2>
                
                <p className="text-gray-600 max-w-2xl mx-auto">
                    বাংলাদেশের শীর্ষস্থানীয় প্রতিষ্ঠানসমূহ তাদের কর ব্যবস্থাপনা আমাদের কাছে ন্যস্ত করেছেন
                </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {stats.map((stat, index) => (
                    <div 
                        key={index} 
                        className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg mb-3">
                            {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Logo Slider Section */}
            <div className="relative mb-16">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <Swiper
                    modules={[Autoplay, Mousewheel]}
                    spaceBetween={30}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    mousewheel={{ invert: false }}
                    grabCursor={true}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="w-full py-8"
                >
                    {clients.map((client, index) => (
                        <SwiperSlide key={index}>
                            <div className="group relative">
                                <div className="h-40 bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-200">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-h-16 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </div>
                                
                                {/* Hover Card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/95 to-green-600/95 rounded-2xl p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                                    <div className="text-white text-center">
                                        <div className="font-bold text-lg mb-1">{client.name}</div>
                                        <div className="text-sm text-emerald-100 mb-3">{client.category}</div>
                                        <div className="inline-flex items-center gap-1 text-amber-300">
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                        </div>
                                        <p className="text-xs text-emerald-100 mt-3">
                                            ৩ বছর ধরে আমাদের ক্লায়েন্ট
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">
                    আপনার প্রতিষ্ঠানকে যোগ করুন আমাদের সম্মানিত ক্লায়েন্ট লিস্টে
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-md">
                        সেবা সম্পর্কে জানুন
                    </button>
                    <button className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors border border-emerald-200">
                        যোগাযোগ করুন
                    </button>
                </div>
            </div>
        </div>
    );
}