import Link from "next/link";
import { FaExternalLinkAlt, FaArrowRight, FaGlobe, FaFileInvoice, FaBuilding, FaUser, FaCalculator, FaCar, FaChartLine, FaMoneyBill, FaShieldAlt, FaLock, FaCheckCircle, FaArrowCircleRight } from "react-icons/fa";
import { MdVerified, MdPayment, MdWeb } from "react-icons/md";

export const govLinks = [
    { title: "ই-টিডিএস", link: "https://etds.gov.bd/login", icon: <FaFileInvoice />, color: "from-blue-500 to-cyan-500" },
    { title: "ই-টিআইএন", link: "https://secure.incometax.gov.bd/TINHome", icon: <FaLock />, color: "from-emerald-500 to-green-500" },
    { title: "এ-চালান", link: "https://www.achallan.gov.bd/acs/v2/general/home?ReturnUrl=%2Facs%2F", icon: <MdVerified />, color: "from-purple-500 to-pink-500" },
    { title: "এনবিআর ওয়েবসাইট", link: "https://nbr.gov.bd/", icon: <FaGlobe />, color: "from-red-500 to-orange-500" },
    { title: "সোনালী ব্যাংক পেমেন্ট", link: "https://nbr.sblesheba.com/IncomeTax/Payment", icon: <MdPayment />, color: "from-yellow-500 to-amber-500" },
    { title: "ই-রিটার্ন ওয়েবসাইট", link: "https://etaxnbr.gov.bd/#/auth/sign-in", icon: <FaArrowCircleRight />, color: "from-indigo-500 to-blue-500" },
    { title: "রিটার্ন ভেরিফাই", link: "https://etaxnbr.gov.bd/#/submission-verification", icon: <FaCheckCircle />, color: "from-teal-500 to-emerald-500" }
];

export const personalTaxLinks = [
    { title: "বেতন হতে কর কর্তন", link: "/components/personal-link/salary", icon: <FaMoneyBill />, color: "from-blue-500 to-cyan-500" },
    { title: "ব্যক্তি করহার", link: "/components/personal-link/tax-rate", icon: <FaChartLine />, color: "from-green-500 to-emerald-500" },
    { title: "চূড়ান্ত করের খাতসমূহ", link: "/components/personal-link/final-tax", icon: <FaShieldAlt />, color: "from-purple-500 to-violet-500" },
    { title: "সারচার্জ", link: "/components/personal-link/surcharge", icon: <FaCalculator />, color: "from-red-500 to-pink-500" },
    { title: "কর রেয়াত ক্যালকুলেটর", link: "/components/personal-link/tax-rebate", icon: <FaCalculator />, color: "from-amber-500 to-orange-500" },
    { title: "কর রেয়াত তথ্য", link: "/components/personal-link/tax-info", icon: <FaFileInvoice />, color: "from-indigo-500 to-blue-500" },
    { title: "ব্যক্তিগত গাড়ির কর", link: "/components/personal-link/private-car-tax", icon: <FaCar />, color: "from-teal-500 to-emerald-500" },
    { title: "বাণিজ্যিক গাড়ির কর", link: "/components/personal-link/commercial-car-tax", icon: <FaCar />, color: "from-rose-500 to-pink-500" },
    { title: "পরিবেশ সারচার্জের হার", link: "/components/personal-link/env-surcharge", icon: <MdVerified />, color: "from-lime-500 to-green-500" },
    { title: "আঞ্চলিক ন্যূনতম কর", link: "/components/personal-link/regional-min-tax", icon: <FaBuilding />, color: "from-violet-500 to-purple-500" },
    { title: "হ্রাসকৃত আয় ও কর", link: "/components/personal-link/reduced-income-tax", icon: <FaChartLine />, color: "from-cyan-500 to-blue-500" },
    { title: "ব্যক্তি ফর্ম", link: "/components/personal-link/personal-form", icon: <FaUser />, color: "from-emerald-500 to-green-500" }
];

const eReturnTutorials = [
    {
        title: "আইটি খাতের আয় ই-রিটার্ন সিস্টেমে কিভাবে ইনপুট করবেন",
        category: "টিউটোরিয়াল",
        duration: "৫ মিনিট",
        views: "১.২k",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "জিপিএফ সুদ বাবদ আয় ই-রিটার্ন সিস্টেমে কিভাবে দেখাতে হবে",
        category: "গাইডলাইন",
        duration: "৭ মিনিট",
        views: "৯৮০",
        color: "from-emerald-500 to-green-500"
    },
    {
        title: "পেনশন বাবদ আয় ই-রিটার্ন সিস্টেমে কিভাবে দেখাতে হবে?",
        category: "টিউটোরিয়াল",
        duration: "৬ মিনিট",
        views: "১.৫k",
        color: "from-purple-500 to-violet-500"
    },
    {
        title: "ডেভেলপার হতে প্রাপ্ত সাইনিং মানি বাবদ প্রাপ্ত আয় ই-রিটার্ন সিস্টেমে...",
        category: "এডভান্সড",
        duration: "১০ মিনিট",
        views: "৭৫০",
        color: "from-amber-500 to-orange-500"
    }
];

export const Ereturn = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                        <FaFileInvoice className="text-2xl text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                        ই-রিটার্ন কর্ণার
                    </h1>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    ই-রিটার্ন সম্পর্কিত সকল তথ্য, গাইডলাইন ও প্রয়োজনীয় লিংক একসাথে
                </p>
            </div>

            {/* Tutorial Grid Section */}
            <div className="mb-16">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                            ই-রিটার্ন টিউটোরিয়াল
                        </h2>
                        <p className="text-gray-500 text-center text-sm mt-1">সহজে শিখুন ই-রিটার্ন পদ্ধতি</p>
                    </div>
                    <Link
                        href="/e-return-tutorials"
                        className="group flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                    >
                        সব টিউটোরিয়াল দেখুন
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {eReturnTutorials.map((tutorial, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-48 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${tutorial.color} opacity-90`}>
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {tutorial.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-sm">
                                    <span>⏱️ {tutorial.duration}</span>
                                    <span>👁️ {tutorial.views}</span>
                                </div>
                                
                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-emerald-600 border-b-[10px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-bold text-gray-800 text-base leading-snug group-hover:text-emerald-700 transition-colors">
                                    {tutorial.title}
                                </h3>
                                <div className="flex items-center justify-between mt-4">
                                    <button className="text-sm font-semibold bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all">
                                        দেখুন
                                    </button>
                                    <span className="text-xs text-gray-500 flex items-center gap-1">
                                        <FaExternalLinkAlt className="w-3 h-3" />
                                        বিস্তারিত
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Government Links Section */}
                <div className="lg:col-span-1">
                    <div className="sticky top-6">
                        {/* Section Header */}
                        <div className="relative mb-8">
                            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-5 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <FaGlobe className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">প্রয়োজনীয় সরকারি লিংক</h3>
                                        <p className="text-emerald-100 text-sm">সরাসরি অফিসিয়াল সাইটে যান</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
                        </div>

                        {/* Links Grid */}
                        <div className="space-y-3">
                            {govLinks.map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 hover:shadow-xl hover:border-emerald-200 hover:-translate-x-1 transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-lg shadow-md`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                            <MdWeb className="w-3 h-3" />
                                            সরকারি ওয়েবসাইট
                                        </p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-emerald-100 flex items-center justify-center transition-colors">
                                        <FaExternalLinkAlt className="w-3 h-3 text-gray-500 group-hover:text-emerald-600" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Info Box */}
                        <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <FaLock className="text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-800">সুরক্ষিত সংযোগ</h4>
                                    <p className="text-blue-600 text-sm mt-1">
                                        সকল লিংক সরকারি ওয়েবসাইটের সরাসরি সংযোগ। নিরাপদে ব্রাউজ করুন।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personal Tax Links Section */}
                <div className="lg:col-span-2">
                    {/* Section Header */}
                    <div className="mb-8">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <FaUser className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">ব্যক্তি করদাতার জন্য প্রযোজ্য</h3>
                                        <p className="text-purple-100 text-sm">সকল প্রয়োজনীয় টুলস ও তথ্য</p>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <span className="font-bold text-lg">১২+</span>
                                        <span className="text-sm ml-2">সেবা</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {personalTaxLinks.map((item, i) => (
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
                                    <h4 className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-emerald-700 transition-colors">
                                        {item.title}
                                    </h4>

                                    {/* Bottom Badge */}
                                    <div className="mt-auto pt-3 w-full">
                                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 group-hover:from-emerald-50 group-hover:to-green-50 rounded-lg py-2 px-3 transition-all">
                                            <span className="text-xs font-semibold text-gray-600 group-hover:text-emerald-700 flex items-center justify-center gap-1">
                                                <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                বিস্তারিত দেখুন
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Corner Decoration */}
                                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-500 transform rotate-45 translate-x-3 -translate-y-3"></div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Stats & Info */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl p-5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <FaCalculator className="text-2xl text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">ক্যালকুলেটর টুলস</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        বিভিন্ন ধরনের কর ক্যালকুলেটর একসাথে
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <FaFileInvoice className="text-2xl text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">ফর্ম ও টেমপ্লেট</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        ডাউনলোডযোগ্য ফর্ম ও টেমপ্লেট
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-xl font-bold mb-2">দ্রুত সহায়তা প্রয়োজন?</h4>
                                <p className="text-gray-300 text-sm">
                                    ২৪/৭ সাপোর্ট ও গাইডলাইন পেতে এখনই যোগাযোগ করুন
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
                                    <FaArrowRight />
                                    লাইভ চ্যাট
                                </button>
                                <button className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors">
                                    কল ব্যাক রিকোয়েস্ট
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* View More Button */}
            <div className="mt-12 text-center">
                <Link
                    href="/all-tutorials"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                    <span>সমস্ত টিউটোরিয়াল ও গাইডলাইন দেখুন</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <p className="text-gray-500 text-sm mt-4">
                    প্রতিদিন নতুন টিউটোরিয়াল ও আপডেট যুক্ত হচ্ছে
                </p>
            </div>
        </div>
    );
};