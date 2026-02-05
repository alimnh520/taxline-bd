'use client'
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {
    FaCalculator,
    FaBuilding,
    FaChartLine,
    FaMoneyBill,
    FaShieldAlt,
    FaCar,
    FaTree,
    FaPercentage,
    FaFileAlt,
    FaLandmark,
    FaBalanceScale,
    FaGavel,
    FaUniversity,
    FaGlobeAsia,
    FaChartBar,
    FaCalendarAlt,
    FaExclamationTriangle,
    FaArrowRight,
    FaPlayCircle,
    FaExternalLinkAlt,
    FaRegCalendarCheck,
    FaRegChartBar
} from 'react-icons/fa';

import { MdAttachMoney, MdShowChart, MdBusiness } from 'react-icons/md';

export const BusinessCalculator = () => {

    const companyTaxLinks = [
        {
            title: "কোম্পানি কর হার",
            link: "/components/company-link/company-tax",
            icon: <FaPercentage />,
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "নূন্যতম করের পরিমাণ",
            link: "/components/company-link/minimum-tax",
            icon: <FaMoneyBill />,
            color: "from-emerald-500 to-green-500"
        },
        {
            title: "কর কর্তনের খাতসমূহ",
            link: "/components/company-link/final-tax",
            icon: <FaChartLine />,
            color: "from-purple-500 to-violet-500"
        },
        {
            title: "উৎসে কর সংগ্রহের খাতসমূহ",
            link: "/components/company-link/source-tax-collection",
            icon: <MdAttachMoney />,
            color: "from-red-500 to-pink-500"
        },
        {
            title: "চূড়ান্ত করের খাতসমূহ",
            link: "/components/company-link/final-tax-heads",
            icon: <FaFileAlt />,
            color: "from-amber-500 to-orange-500"
        },
        {
            title: "নূন্যতম করের খাতসমূহ",
            link: "/components/company-link/minimum-tax-heads",
            icon: <FaChartBar />,
            color: "from-indigo-500 to-blue-500"
        },
        {
            title: "হ্রাসকৃত আয় ও কর",
            link: "/components/company-link/",
            icon: <MdShowChart />,
            color: "from-teal-500 to-emerald-500"
        },
        {
            title: "অব্যাহতি প্রাপ্ত আয়",
            link: "/components/company-link/",
            icon: <FaShieldAlt />,
            color: "from-rose-500 to-pink-500"
        },
        {
            title: "বাণিজ্যিক গাড়ি কর",
            link: "/components/company-link/",
            icon: <FaCar />,
            color: "from-lime-500 to-green-500"
        },
        {
            title: "পরিবেশ সারচার্জের হার",
            link: "/components/company-link/environmental-surcharge",
            icon: <FaTree />,
            color: "from-violet-500 to-purple-500"
        },
        {
            title: "অবচয় ভাতার হার",
            link: "/components/company-link/depreciation-allowance",
            icon: <FaCalendarAlt />,
            color: "from-cyan-500 to-blue-500"
        },
        {
            title: "প্রতিষ্ঠান ফর্ম",
            link: "/components/company-link/",
            icon: <FaFileAlt />,
            color: "from-emerald-500 to-green-500"
        },
    ];

    const businessCalculators = [
        { title: "আপ্যায়ন ব্যয়", icon: <FaMoneyBill />, color: "from-blue-500 to-cyan-500" },
        { title: "নমুনা ব্যয়", icon: <FaChartLine />, color: "from-emerald-500 to-green-500" },
        { title: "প্রচারণামূলক ব্যয়", icon: <MdBusiness />, color: "from-purple-500 to-violet-500" },
        { title: "বিদেশ ভ্রমণ ব্যয়", icon: <FaGlobeAsia />, color: "from-amber-500 to-orange-500" },
        { title: "রয়্যালিটি ও অন্যান্য ব্যয়", icon: <FaUniversity />, color: "from-red-500 to-pink-500" },
        { title: "হেড অফিস ব্যয়", icon: <FaBuilding />, color: "from-indigo-500 to-blue-500" },
        { title: "অন্যান্য ব্যয়", icon: <FaCalculator />, color: "from-teal-500 to-emerald-500" },
    ];

    const taxOfficeLinks = [
        { title: "কর অঞ্চল", icon: <FaLandmark />, color: "from-blue-500 to-cyan-500" },
        { title: "আপীল", icon: <FaBalanceScale />, color: "from-emerald-500 to-green-500" },
        { title: "আইকর আইনে আপীল ট্রাইব্যুনাল", icon: <FaGavel />, color: "from-purple-500 to-violet-500" },
        { title: "ট্যাক্স হাইকোর্ট", icon: <FaUniversity />, color: "from-amber-500 to-orange-500" },
        { title: "এডিআর", icon: <FaShieldAlt />, color: "from-red-500 to-pink-500" },
    ];

    const specialItems = [
        { title: "বাংলাদেশের সকল বাণিজ্যিক ব্যাংকের তালিকা", icon: <FaUniversity />, color: "from-blue-500 to-cyan-500" },
        { title: "জিপিরেট", icon: <FaChartBar />, color: "from-emerald-500 to-green-500" },
        { title: "পিডব্লিউডি হার", icon: <FaPercentage />, color: "from-purple-500 to-violet-500" },
        { title: "এরিয়া কনভার্টার", icon: <FaGlobeAsia />, color: "from-amber-500 to-orange-500" },
        { title: "নোটিস", icon: <FaExclamationTriangle />, color: "from-red-500 to-pink-500" },
    ];

    const specialCalculators = [
        { title: "পুনঃউন্মোচন তারিখ ক্যালকুলেটর", icon: <FaRegCalendarCheck />, color: "from-blue-500 to-cyan-500" },
        { title: "আয় গোপনের জরিমানা", icon: <FaRegChartBar />, color: "from-emerald-500 to-green-500" },
    ];

    const videoTutorials = [
        {
            title: "জিপিএফ সুদ বাবদ আয় ই-রিটার্ন সিস্টেমে কিভাবে দেখাতে হবে",
            duration: "5:20",
            views: "1.2K",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "পেনশন বাবদ আয় ই-রিটার্ন সিস্টেমে কিভাবে দেখাতে হবে?",
            duration: "7:45",
            views: "980",
            color: "from-emerald-500 to-green-500"
        },
        {
            title: "ডেভেলপার হতে প্রাপ্ত সাইনিং মানি বাবদ প্রাপ্ত আয় ই-রিটার্ন সিস্টে...",
            duration: "8:30",
            views: "750",
            color: "from-purple-500 to-violet-500"
        },
        {
            title: "শেয়ার ক্রয়বিক্রয় ব্যবসা হতে প্রাপ্ত আয় ই-রিটার্ন সিস্টেমে কিভাবে...",
            duration: "10:15",
            views: "1.5K",
            color: "from-amber-500 to-orange-500"
        },
        {
            title: "বাণিজ্যিক ব্যাংকের কর দায় কিভাবে গণনা করবেন",
            duration: "12:45",
            views: "890",
            color: "from-red-500 to-pink-500"
        },
        {
            title: "কোম্পানি রিটার্ন ফাইলিং এর সম্পূর্ণ গাইডলাইন",
            duration: "15:30",
            views: "2.3K",
            color: "from-indigo-500 to-blue-500"
        },
    ];


    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">

            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <FaCalculator className="text-2xl text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        ব্যবসা গণনা কেন্দ্র
                    </h1>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    ব্যবসায়িক কর গণনা, খরচ বিশ্লেষণ ও কোম্পানি কর সংক্রান্ত সকল টুলস
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Sidebar - Calculators */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Business Calculators Section */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                                <FaCalculator className="text-xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">ব্যবসায়ে খরচ সম্পর্কিত ক্যালকুলেটর</h3>
                                <p className="text-gray-500 text-sm">সঠিক খরচ বিশ্লেষণ</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {businessCalculators.map((item, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="group flex items-center gap-4 p-3 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg hover:-translate-x-1 transition-all duration-300"
                                >
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800 group-hover:text-emerald-700">
                                            {item.title}
                                        </h4>
                                    </div>
                                    <FaArrowRight className="text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Tax Office Section */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center">
                                <FaLandmark className="text-xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">কর অফিস সম্পর্কিত</h3>
                                <p className="text-gray-500 text-sm">অফিসিয়াল প্রসিডিওর</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {taxOfficeLinks.map((item, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="group flex items-center gap-4 p-3 rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-lg hover:-translate-x-1 transition-all duration-300"
                                >
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800 group-hover:text-purple-700 text-sm">
                                            {item.title}
                                        </h4>
                                    </div>
                                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-purple-500 w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Middle Section - Company Tax Links */}
                <div className="lg:col-span-2">
                    {/* Company Tax Header */}
                    <div className="mb-8">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl shadow-lg">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <FaBuilding className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">কোম্পানির করদাতার জন্য প্রযোজ্য</h3>
                                        <p className="text-blue-100 text-sm">সকল ব্যবসায়িক কর টুলস</p>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <span className="font-bold text-lg">{companyTaxLinks.length}+</span>
                                        <span className="text-sm ml-2">সেবা</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Tax Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {companyTaxLinks.map((item, i) => (
                            <Link
                                key={i}
                                href={item.link}
                                className="group relative bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                            >
                                {/* Background Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>

                                {/* Content */}
                                <div className="relative z-10 p-4 h-full flex flex-col items-center text-center">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <div className="text-white text-xl">
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-blue-700 transition-colors">
                                        {item.title}
                                    </h4>

                                    {/* Bottom Badge */}
                                    <div className="mt-auto pt-3 w-full">
                                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-cyan-50 rounded-lg py-2 px-3 transition-all">
                                            <span className="text-xs font-semibold text-gray-600 group-hover:text-blue-700 flex items-center justify-center gap-1">
                                                <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                গণনা করুন
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Corner Decoration */}
                                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 transform rotate-45 translate-x-3 -translate-y-3"></div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Additional Sections Grid */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Special Items */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                    <FaChartBar className="text-xl text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">বিশেষ আইটেম</h4>
                                    <p className="text-gray-600 text-sm">অতিরিক্ত টুলস ও তথ্য</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                {specialItems.map((item, i) => (
                                    <Link
                                        key={i}
                                        href="#"
                                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors group"
                                    >
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-sm`}>
                                            {item.icon}
                                        </div>
                                        <span className="text-sm text-gray-700 group-hover:text-purple-700 flex-1">
                                            {item.title}
                                        </span>
                                        <FaExternalLinkAlt className="w-3 h-3 text-gray-400 group-hover:text-purple-500" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Special Calculators */}
                        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl p-5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                                    <FaCalculator className="text-xl text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">বিশেষ ক্যালকুলেটর</h4>
                                    <p className="text-gray-600 text-sm">এডভান্সড গণনা টুলস</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                {specialCalculators.map((item, i) => (
                                    <Link
                                        key={i}
                                        href="#"
                                        className="flex items-center gap-3 p-3 rounded-lg bg-white/50 hover:bg-white transition-colors group"
                                    >
                                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}>
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-semibold text-gray-800 group-hover:text-emerald-700">
                                                {item.title}
                                            </h5>
                                        </div>
                                        <FaArrowRight className="text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Tutorials Slider */}
            <div className="mt-16">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <FaPlayCircle className="text-blue-500" />
                            ব্যবসায়িক কর টিউটোরিয়াল
                        </h2>
                        <p className="text-gray-500 text-sm mt-1 text-center">ভিডিও দেখে সহজে শিখুন</p>
                    </div>
                    <Link
                        href="/all-tutorials"
                        className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                        সব ভিডিও দেখুন
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                    className="videoSwiper rounded-xl"
                >
                    {videoTutorials.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                                {/* Video Thumbnail */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-90`}>
                                        <div className="absolute inset-0 bg-black/10"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-blue-600 border-b-[10px] border-b-transparent ml-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Video Info */}
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-sm">
                                        <span>⏱️ {video.duration}</span>
                                        <span>👁️ {video.views}</span>
                                    </div>
                                </div>

                                {/* Video Content */}
                                <div className="p-5">
                                    <h3 className="font-bold text-gray-800 text-base leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                                        {video.title}
                                    </h3>
                                    <div className="flex items-center justify-between mt-4">
                                        <button className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all">
                                            দেখুন
                                        </button>
                                        <span className="text-xs text-gray-500 flex items-center gap-1">
                                            <FaPlayCircle className="w-3 h-3" />
                                            ভিডিও
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* View More Button */}
                <div className="text-center mt-8">
                    <Link
                        href="/business-tutorials"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                    >
                        <span>সমস্ত ব্যবসায়িক টিউটোরিয়াল দেখুন</span>
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <p className="text-gray-500 text-sm mt-4">
                        সাপ্তাহিক নতুন ভিডিও টিউটোরিয়াল যুক্ত হচ্ছে
                    </p>
                </div>
            </div>

        </div>
    )
}