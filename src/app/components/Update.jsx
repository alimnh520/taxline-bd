'use client'
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link"
import {
    FaNewspaper,
    FaFileContract,
    FaHandshake,
    FaBalanceScale,
    FaMapMarkedAlt,
    FaPercentage,
    FaListAlt,
    FaCalendarAlt,
    FaBuilding,
    FaUserTie,
    FaScroll,
    FaRegFileAlt,
    FaRegNewspaper,
    FaRegCalendarCheck,
    FaChartLine,
    FaBookOpen,
    FaRegClock
} from "react-icons/fa";
import { MdUpdate, MdAttachMoney, MdGavel, MdDescription } from "react-icons/md";

export const Update = () => {

    const updates = [
        {
            title: "Nbr Publication - বিদেশে অবস্থানরত বাংলাদেশী করদাতাদের জন্য অনলাইনে রিটার্ন দাখিল প্রক্রিয়ার সহজীকরণ বিজ্ঞপ্তি",
            date: "2025-10-23",
            category: "Publication",
            icon: <FaNewspaper />,
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Nbr Publication - নবসৃষ্ট কর অঞ্চলসমূহের আপিল অধিক্ষেত্র নির্ধারণ ও সকল আপিল অঞ্চলসমূহের আপিল অধিক্ষেত্রে পুনর্বিন্যাস সংক্রান্ত আদেশ",
            date: "2025-10-21",
            category: "Publication",
            icon: <FaBuilding />,
            color: "from-emerald-500 to-green-500"
        },
        {
            title: "Nbr Publication - জাতীয় রাজস্ব বোর্ড প্রণীত আয়কর আইন, ২০২৩ এর ইংরেজী ভার্সন",
            date: "2025-10-23",
            category: "Publication",
            icon: <FaBookOpen />,
            color: "from-purple-500 to-violet-500"
        },
        {
            title: "Income Tax SRO - জাতীয় রাজস্ব বোর্ড প্রণীত আয়কর আইন, ২০২৩ এর ইংরেজী ভার্সন ( এস. আর. ও. নং ৪০৪-আইন/২০২৫ )",
            date: "2025-10-16",
            category: "SRO",
            icon: <FaScroll />,
            color: "from-amber-500 to-orange-500"
        },
        {
            title: "Tax Official - দ্বিতীয় সচিব (কর) বদলী/পদায়ন",
            date: "2025-10-13",
            category: "Official",
            icon: <FaUserTie />,
            color: "from-red-500 to-pink-500"
        },
        {
            title: "Tax Official - যুগ্ম কর কমিশনার বদলী",
            date: "2025-10-09",
            category: "Official",
            icon: <MdGavel />,
            color: "from-indigo-500 to-blue-500"
        },
        {
            title: "Nbr Publication - অর্থ অধ্যাদেশ, ২০২৫ এর সংশোধন",
            date: "2025-10-06",
            category: "Publication",
            icon: <MdDescription />,
            color: "from-teal-500 to-emerald-500"
        },
        {
            title: "Income Tax SRO - উৎসে কর বিধিমালা, ২০২৪ এর উপবিধি ৮ সংশোধন করা হয়েছে ( এস. আর. ও. নং ৩৭৯-আইন/আয়কর-১৮/২০২৫ )",
            date: "2025-09-23",
            category: "SRO",
            icon: <FaRegFileAlt />,
            color: "from-rose-500 to-pink-500"
        },
    ];

    const tdsSections = [
        {
            title: "সরবরাহকারীর কর কর্তন",
            description: "আইকর আইনের ৮৯ নং ধারায় সরবরাহকারীর করহার ও বিধিমালা",
            icon: <FaFileContract />,
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "সেবার বিপরীতে কর কর্তন",
            description: "বিদ্যমান আইকর আইনের ৯০ ধারা অনুযায়ী সেবায় কর কর্তন",
            icon: <FaHandshake />,
            color: "from-emerald-500 to-green-500"
        },
        {
            title: "উৎসে কর কর্তনের ধারাসমূহ",
            description: "আয়কর আইনে উৎসে কর কর্তনের সকল প্রাসঙ্গিক ধারা",
            icon: <FaListAlt />,
            color: "from-purple-500 to-violet-500"
        },
        {
            title: "উৎসে কর কর্তনের অধিক্ষেত্র",
            description: "আইকর আইন-২০২৩ এর ধারা ২(৩১) এ উৎসে কর কর্তনের অধিক্ষেত্রসমূহ",
            icon: <FaMapMarkedAlt />,
            color: "from-amber-500 to-orange-500"
        },
        {
            title: "ধারা অনুযায়ী উৎসে কর কর্তনের পরিমান",
            description: "প্রতিটি ধারা অনুযায়ী কর কর্তনের নির্দিষ্ট হার ও পরিমাণ",
            icon: <FaPercentage />,
            color: "from-red-500 to-pink-500"
        },
        {
            title: "সর্বাধিক পরিচিত উৎসেকর কর্তনের খাতসমূহ",
            description: "সাধারণ ব্যবসায় সর্বাধিক ব্যবহৃত কর কর্তনের খাতসমূহ",
            icon: <FaBalanceScale />,
            color: "from-indigo-500 to-blue-500"
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                        <MdUpdate className="text-2xl text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                        সর্বশেষ আপডেট ও উৎসে কর তথ্য
                    </h1>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    জাতীয় রাজস্ব বোর্ডের নতুন ঘোষণা, পরিবর্তন ও উৎসে কর সংক্রান্ত সর্বশেষ তথ্য
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Latest Updates Section */}
                <div className="space-y-6">
                    {/* Section Header */}
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-5 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <FaRegNewspaper className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">সর্বশেষ আপডেট</h3>
                                <p className="text-emerald-100 text-sm">এনবিআর ও কর বিভাগের নতুন ঘোষণা</p>
                            </div>
                        </div>
                    </div>

                    {/* Updates List */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                        <div className="h-[500px] overflow-y-auto custom-scrollbar">
                            {updates.map((update, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="group flex items-start gap-4 p-5 border-b border-gray-100 hover:bg-emerald-50/50 transition-all duration-300"
                                >
                                    {/* Category Icon */}
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${update.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                                        {update.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        {/* Category Badge */}
                                        <div className="inline-flex items-center gap-1 mb-2">
                                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${update.category === 'Publication' ? 'bg-blue-100 text-blue-700' :
                                                update.category === 'SRO' ? 'bg-amber-100 text-amber-700' :
                                                    update.category === 'Official' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                                                }`}>
                                                {update.category}
                                            </span>
                                            <span className="text-xs text-gray-500 flex items-center gap-1">
                                                <FaRegCalendarCheck className="w-3 h-3" />
                                                {update.date}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h4 className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                                            {update.title}
                                        </h4>
                                    </div>

                                    {/* Arrow */}
                                    <RiArrowRightSLine className="text-2xl text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                </Link>
                            ))}
                        </div>

                        {/* View All Button */}
                        <div className="p-5 border-t border-gray-100">
                            <Link
                                href="/all-updates"
                                className="group flex items-center justify-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                            >
                                সব আপডেট দেখুন
                                <RiArrowRightSLine className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Stats Info */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <FaRegClock className="text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">রিয়েল-টাইম আপডেট</h4>
                                    <p className="text-blue-600 text-xs mt-1">২৪ ঘন্টার মধ্যে</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-xl p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <FaRegNewspaper className="text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">অফিসিয়াল সোর্স</h4>
                                    <p className="text-emerald-600 text-xs mt-1">এনবিআর থেকে সরাসরি</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TDS Sections */}
                <div className="space-y-6">
                    {/* Section Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-5 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <MdAttachMoney className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">উৎসে কর কর্তন সংক্রান্ত</h3>
                                <p className="text-blue-100 text-sm">Tax Deduction at Source (TDS)</p>
                            </div>
                        </div>
                    </div>

                    {/* TDS Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {tdsSections.map((section, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="group relative bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                            >
                                {/* Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}></div>

                                {/* Content */}
                                <div className="relative z-10 p-5 h-full opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 shadow-lg`}>
                                        <div className="text-white text-lg">
                                            {section.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-bold text-gray-800 text-base mb-2 group-hover:text-blue-700 transition-colors">
                                        {section.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {section.description}
                                    </p>

                                    {/* Action Button */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold text-blue-600 flex items-center gap-1">
                                            বিস্তারিত দেখুন
                                            <RiArrowRightSLine className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            Tax Act
                                        </span>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-cyan-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-5 text-white">
                                    <div className="text-xl font-bold mb-2">{section.title}</div>
                                    <p className="text-sm text-center mb-4">{section.description}</p>
                                    <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition-colors text-sm">
                                        সম্পূর্ণ গাইডলাইন
                                    </button>
                                </div>

                                {/* Corner Decoration */}
                                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 transform rotate-45 translate-x-3 -translate-y-3"></div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* TDS Info Section */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                <FaChartLine className="text-xl" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold">উৎসে কর নির্দেশিকা</h4>
                                <p className="text-gray-300 text-sm">সর্বশেষ হালনাগাদ হার ও বিধিমালা</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm">সাধারণ হার</span>
                                    <span className="text-emerald-300 font-bold">৫-১০%</span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm">বিশেষ হার</span>
                                    <span className="text-amber-300 font-bold">১৫%</span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-amber-400 h-2 rounded-full" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10">
                            <p className="text-sm text-gray-300">
                                <span className="text-emerald-300 font-semibold">নোট:</span> কর হার পণ্য ও সেবার ধরন অনুযায়ী পরিবর্তিত হয়
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Resources */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-5">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                            <FaCalendarAlt className="text-xl text-purple-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">সময়সূচী অনুসরণ</h4>
                            <p className="text-gray-600 text-sm mt-1">
                                কর দাখিল ও জমার শেষ তারিখ
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-5">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                            <FaRegFileAlt className="text-xl text-amber-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">ফর্ম ও টেমপ্লেট</h4>
                            <p className="text-gray-600 text-sm mt-1">
                                ডাউনলোডযোগ্য কর ফর্ম
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl p-5">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                            <FaHandshake className="text-xl text-cyan-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">বিশেষজ্ঞ পরামর্শ</h4>
                            <p className="text-gray-600 text-sm mt-1">
                                অনলাইন কনসাল্টেশন
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">দ্রুত তথ্য প্রয়োজন?</h4>
                        <p className="text-gray-600">
                            উৎসে কর সম্পর্কিত যেকোনো প্রশ্নের উত্তর পান মুহূর্তেই
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors flex items-center gap-2">
                            <FaBookOpen />
                            সম্পূর্ণ গাইডলাইন
                        </button>
                        <button className="bg-white text-emerald-600 font-semibold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors border border-emerald-200">
                            প্রশ্ন করুন
                        </button>
                        <button className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-900 transition-colors">
                            PDF ডাউনলোড
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}