"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBookOpen, FaFileInvoice, FaBalanceScale, FaGavel, FaChartLine, FaPercentage, FaUniversity, FaUserTie, FaBuilding, FaMoneyBillWave } from "react-icons/fa";

export const Feature = () => {
    const [hover, setHover] = useState(null);
    const [isRotate, setIsRotate] = useState(true);
    const [translateValue, setTranslateValue] = useState(160);
    const [rotation, setRotation] = useState(0);

    // Auto rotation effect
    useEffect(() => {
        if (isRotate) {
            const interval = setInterval(() => {
                setRotation(prev => (prev + 0.2) % 360);
            }, 30);
            return () => clearInterval(interval);
        }
    }, [isRotate]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setTranslateValue(120);
            } else {
                setTranslateValue(160);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const items = [
        {
            text: "আইকর আইন ২০২৩",
            link: "/components/tax-act/taxLaw",
            icon: <FaGavel className="text-lg mb-1" />,
            description: "নতুন আয়কর আইনের সকল ধারা ও বিধিমালা",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200"
        },
        {
            text: "মূসক ও সম্পূরক শুল্ক আইন ২০১২",
            link: "/components/tax-act/sulkoLaw",
            icon: <FaPercentage className="text-lg mb-1" />,
            description: "ভ্যাট ও সম্পূরক শুল্ক সম্পর্কিত আইন",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50",
            borderColor: "border-green-200"
        },
        {
            text: "কাস্টম আইন ২০২৩",
            link: "/components/tax-act/customLaw",
            icon: <FaBalanceScale className="text-lg mb-1" />,
            description: "সদ্য পাস হওয়া নতুন কাস্টম আইন",
            color: "from-purple-500 to-violet-500",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200"
        },
        {
            text: "আইকর নির্দেশিকা",
            link: "/components/tax-act/tax-guideline",
            icon: <FaBookOpen className="text-lg mb-1" />,
            description: "কর দাতাদের জন্য নির্দেশিকা",
            color: "from-amber-500 to-orange-500",
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200"
        },
        {
            text: "উৎসে কর বিধিমালা",
            link: "/components/tax-act/tds-rules",
            icon: <FaFileInvoice className="text-lg mb-1" />,
            description: "টিডিএস সম্পর্কিত সকল বিধিমালা",
            color: "from-red-500 to-pink-500",
            bgColor: "bg-red-50",
            borderColor: "border-red-200"
        },
        {
            text: "আয় কর এস আর ও",
            link: "/components/tax-act/income-tax-sro",
            icon: <FaUniversity className="text-lg mb-1" />,
            description: "এসআরও আইন ও সংশোধনী",
            color: "from-indigo-500 to-blue-500",
            bgColor: "bg-indigo-50",
            borderColor: "border-indigo-200"
        },
        {
            text: "পরিপত্র",
            link: "/components/tax-act/paripatra",
            icon: <FaChartLine className="text-lg mb-1" />,
            description: "জাতীয় রাজস্ব বোর্ডের পরিপত্র",
            color: "from-teal-500 to-cyan-500",
            bgColor: "bg-teal-50",
            borderColor: "border-teal-200"
        },
        {
            text: "ব্যক্তি করহার",
            link: "/components/personal-link/tax-rate",
            icon: <FaUserTie className="text-lg mb-1" />,
            description: "ব্যক্তি করদাতাদের কর হার",
            color: "from-lime-500 to-green-500",
            bgColor: "bg-lime-50",
            borderColor: "border-lime-200"
        },
        {
            text: "কোম্পানি করহার",
            link: "/components/company-link/company-tax",
            icon: <FaBuilding className="text-lg mb-1" />,
            description: "কোম্পানি ও প্রতিষ্ঠানের কর হার",
            color: "from-rose-500 to-pink-500",
            bgColor: "bg-rose-50",
            borderColor: "border-rose-200"
        },
        {
            text: "অর্থ আইন",
            link: "/components/tax-act/finance-act",
            icon: <FaMoneyBillWave className="text-lg mb-1" />,
            description: "জাতীয় বাজেট ও অর্থ আইন",
            color: "from-violet-500 to-purple-500",
            bgColor: "bg-violet-50",
            borderColor: "border-violet-200"
        },
    ];

    return (
        <div className="flex flex-col md:flex-row items-center relative justify-center mt-4 sm:mt-12 px-3 md:px-8 lg:px-12">

            {/* Left Content Panel */}
            <div className="hidden md:block w-80 lg:w-96 h-80 rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 shadow-xl">
                <div className="h-full flex flex-col justify-center">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-blue-800 mb-2">বাংলাদেশের কর ব্যবস্থা</h3>
                        <p className="text-blue-700/80 text-sm">
                            বাংলাদেশের আয়কর ব্যবস্থা একটি প্রগতিশীল ও উন্নয়নমুখী কাঠামো যা জাতীয় রাজস্ব বোর্ড (এনবিআর) দ্বারা পরিচালিত হয়।
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-blue-100">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 font-bold">৯</span>
                            </div>
                            <div>
                                <p className="font-semibold text-blue-800">কর বিভাগ</p>
                                <p className="text-xs text-blue-600">সারাদেশে বিস্তৃত</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-blue-100">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <span className="text-green-600 font-bold">২.৫%</span>
                            </div>
                            <div>
                                <p className="font-semibold text-green-800">জিডিপি অনুপাত</p>
                                <p className="text-xs text-green-600">কর রাজস্বের হার</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-blue-100">
                        <p className="text-xs text-blue-600/70 italic">
                            "সঠিক কর প্রদান দেশের উন্নয়নের চাবিকাঠি"
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Solar System */}
            <div className="relative z-10 mx-4 md:mx-8">
                {/* Orbit Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border-2 border-dashed ${isRotate ? 'animate-spin-slow' : ''}`}
                        style={{
                            borderColor: 'rgba(59, 130, 246, 0.2)',
                            animationDuration: '40s'
                        }} />
                </div>

                {/* Center Planet with Rotation */}
                <div className="relative w-[330px] h-[330px] md:w-[420px] md:h-[420px] flex items-center justify-center">
                    <div
                        className={`absolute w-32 h-32 md:w-40 md:h-40 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.3)]
                            flex items-center justify-center text-white font-bold text-center p-3
                            border-4 border-white bg-gradient-to-br from-blue-600 to-cyan-600`}
                        style={{
                            animationDuration: '20s',
                            transform: `rotate(${rotation}deg)`
                        }}
                    >
                        <div style={{ transform: `rotate(-${rotation}deg)` }}>
                            <img
                                src="/logo.png"
                                alt="BDTaxation Logo"
                                className="md:h-36 h-[90px] object-contain"
                            />
                        </div>


                    </div>

                    {/* Orbit Items */}
                    {items.map((item, idx) => {
                        const angle = (idx / items.length) * 360;
                        const isActive = hover === idx;
                        const currentAngle = angle + rotation;

                        return (
                            <Link
                                key={idx}
                                href={`${item.link}`}
                                onMouseEnter={() => {
                                    setHover(idx);
                                    setIsRotate(false);
                                }}
                                onMouseLeave={() => {
                                    setHover(null);
                                    setIsRotate(true);
                                }}
                                className="absolute transition-all duration-500 origin-center z-10"
                                style={{
                                    transform: `rotate(${currentAngle}deg) translate(${translateValue}px) rotate(-${currentAngle}deg)`
                                }}
                            >
                                <div
                                    className={`
                                        w-[85px] h-[85px] md:w-[105px] md:h-[105px]
                                        rounded-full flex flex-col items-center justify-center text-center
                                        text-[11px] md:text-[13px] px-2 font-semibold
                                        bg-gradient-to-br ${item.color} text-white
                                        border-2 ${item.borderColor} shadow-lg transition-all duration-300 cursor-pointer
                                        ${isActive ? "scale-125 shadow-[0_0_25px_rgba(var(--color-primary),0.5)] z-20" : "scale-100 hover:scale-110"}
                                        group
                                    `}
                                >
                                    <div className="mb-1 transform group-hover:scale-125 transition-transform">
                                        {item.icon}
                                    </div>
                                    <p>{item.text}</p>

                                    {/* Tooltip */}
                                    {isActive && (
                                        <div className={`absolute -bottom-20 z-50 left-1/2 transform -translate-x-1/2 w-48 p-3 rounded-lg shadow-xl ${item.bgColor} border ${item.borderColor}`}>
                                            <p className="text-xs font-medium text-gray-800">{item.description}</p>
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-gradient-to-br ${item.color}"></div>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Right Content Panel */}
            <div className="hidden md:block w-80 lg:w-96 h-80 rounded-2xl p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 shadow-xl">
                <div className="h-full flex flex-col justify-center">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold text-green-800 mb-2">কর সংস্কার ২০২৪</h3>
                        <p className="text-green-700/80 text-sm">
                            নতুন কর বছরের জন্য গুরুত্বপূর্ণ সংস্কার ও আপডেট সম্পর্কিত তথ্য।
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="p-3 bg-white/50 rounded-lg border border-green-100">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold text-green-800">কর অব্যাহতি সীমা</span>
                                <span className="text-green-600 font-bold">৪ লক্ষ</span>
                            </div>
                            <div className="w-full bg-green-100 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                        </div>

                        <div className="p-3 bg-white/50 rounded-lg border border-green-100">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold text-green-800">ই-টিন নিবন্ধন</span>
                                <span className="text-green-600 font-bold">৩৫ লক্ষ+</span>
                            </div>
                            <p className="text-xs text-green-600">নতুন কর বছর পর্যন্ত</p>
                        </div>

                        <div className="p-3 bg-white/50 rounded-lg border border-green-100">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-green-800">ডিজিটাল রিটার্ন</span>
                                <span className="text-green-600 font-bold">৯৫%</span>
                            </div>
                            <p className="text-xs text-green-600">ই-ফাইলিং এর হার</p>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-green-100">
                        <p className="text-xs text-green-600/70 italic">
                            "ডিজিটাল বাংলাদেশের ডিজিটাল কর ব্যবস্থা"
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile Stats Banner */}
            <div className="md:hidden mt-8 w-full max-w-md">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl">
                        <p className="text-sm font-semibold">কর বিভাগ</p>
                        <p className="text-2xl font-bold">৯ টি</p>
                        <p className="text-xs opacity-90">সারাদেশে</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl">
                        <p className="text-sm font-semibold">ই-টিন</p>
                        <p className="text-2xl font-bold">৩৫ লক্ষ+</p>
                        <p className="text-xs opacity-90">নিবন্ধিত</p>
                    </div>
                </div>
            </div>

            {/* Add custom animations */}
            <style jsx global>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow linear infinite;
                }
            `}</style>
        </div>
    );
}