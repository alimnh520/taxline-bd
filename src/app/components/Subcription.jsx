'use client';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from "next/navigation";
import { ContextProvider } from "../Provider";
import {
    FaBalanceScale,
    FaChartLine,
    FaHistory,
    FaCalculator,
    FaMoneyCheckAlt,
    FaGlobe,
    FaLaptopCode,
    FaExclamationTriangle,
    FaBookOpen,
    FaUserPlus, FaClipboardCheck, FaCrown,
} from "react-icons/fa";

const gridLinks = [
    {
        text: "করবর্ষ অনুযায়ী আইনের পার্থক্য",
        link: "",
        icon: <FaBalanceScale />
    },
    {
        text: "আয়ের স্বপ্রণোদিত প্রদর্শন",
        link: "tax-act-section",
        icon: <FaChartLine />
    },
    {
        text: "পরিবর্তন ১৯৮৪ হতে ২০২৩",
        link: "",
        icon: <FaHistory />
    },
    {
        text: "বছর ভিক্তিক পরিগণনা",
        link: "",
        icon: <FaCalculator />
    },
    {
        text: "Tax Planning Calculator",
        link: "",
        icon: <FaCalculator />
    },
    {
        text: "রেয়াতযোগ্য বিনিয়োগ এর খাতসমূহ",
        link: "",
        icon: <FaMoneyCheckAlt />
    },
    {
        text: "অ-নিবাসী কর হার",
        link: "",
        icon: <FaGlobe />
    },
    {
        text: "আইটি সেক্টর করের তথ্য",
        link: "",
        icon: <FaLaptopCode />
    },
    {
        text: "জরিমানাসমূহ",
        link: "",
        icon: <FaExclamationTriangle />
    },
];


const packages = [
    {
        name: 'Basic',
        price: '৳২০০০',
        features: ['TIN REGISTRATION', 'INDIVIDUAL TAX', 'CORPORATE TAX', 'TAX RETURN', 'TAX ADVISORY'],
        accent: '#32b44a',
        icon: <FaUserPlus className="text-lg mb-1" />,
        color: "from-green-500 to-emerald-500",
        borderColor: "border-green-200",
        description: "সাধারণ ব্যক্তির জন্য বেসিক প্যাকেজ",
        link: '/components/package/basic',
        bgColor: "#ecfdf5"
    },
    {
        name: 'Standard',
        price: '৳৩০০০',
        features: [
            'VAT AUDIT',
            'VAT CONSULTANCY',
            'BIN REGISTRATION',
            'MONTHLY RETURN PROCESSING',
            'ONLINE RETURN SUBMISSION',
        ],
        accent: '#ff0000',
        icon: <FaClipboardCheck className="text-lg mb-1" />,
        color: "from-red-500 to-pink-500",
        bgColor: "#fef2f2",
        borderColor: "border-red-200",
        description: "ছোট ও মাঝারি ব্যবসার জন্য স্ট্যান্ডার্ড প্যাকেজ",
        link: '/components/package/standard'
    },
    {
        name: 'Premium',
        price: '৳১৫০০০',
        features: [
            'CUSTOM LAW',
            'CUSTOM BOND',
            'BUSINESS AUDIT',
            'FINANCIAL AUDIT',
            'REFUND ADJUSTMENT',
            'IRC & ERC SERVICES',
            'BUSINESS COMPLIANCE',
            'COMPANY REGISTRATION',
            'TAX APPEAL & TRIBUNAL',
            'TRADE LICENSE & TRADEMARK',
            'IMPORT/EXPORT CERTIFICATES',
            'COMPANY LAW, RJSC REGISTRATION, SHARE TRANSFER',
            'ACCOUNTING SERVICES & OTHER CONSULTANCY SERVICES',
            'ACCOUNTING SERVICE & SOFTWARE IMPLEMENTATION',
        ],
        accent: '#17982f',
        icon: <FaCrown className="text-lg mb-1" />,
        color: "from-purple-500 to-violet-500",
        bgColor: "#f5f3ff",
        borderColor: "border-purple-200",
        description: "বড় ব্যবসা ও কর্পোরেশনের জন্য প্রিমিয়াম প্যাকেজ",
        link: '/components/package/premium'
    },
];

export function Subscription() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [hover, setHover] = useState(null);
    const [isRotate, setIsRotate] = useState(true);
    const [translateValue, setTranslateValue] = useState(160);
    const [rotation, setRotation] = useState(0);
    const [hoverDetailIndex, setHoverDetailIndex] = useState(null);
    const urlPath = usePathname();
    const { userInfo } = useContext(ContextProvider);
    const router = useRouter();

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


    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

            {/* Grid Links Section */}
            <div className={`w-full space-y-8 ${urlPath === '/components/package' ? 'hidden' : 'block'}`}>
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        গুরুত্বপূর্ণ কর সংক্রান্ত তথ্য
                    </h2>
                    <p className="text-gray-500">সর্বশেষ আপডেট ও প্রয়োজনীয় তথ্য</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gridLinks.map((item, idx) => (
                        <Link
                            key={idx}
                            href={`/components/tax-act/${item.link}`}
                            className="
                                group relative overflow-hidden
                                bg-gradient-to-br from-white to-emerald-50
                                border border-emerald-100
                                rounded-2xl p-5
                                hover:shadow-2xl hover:-translate-y-2
                                transition-all duration-500
                                hover:border-emerald-200
                                cursor-pointer
                            "
                        >
                            {/* Background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <div className="relative z-10 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br text-gray-700 from-emerald-100 to-green-100 flex items-center justify-center text-2xl">
                                    {item.icon}
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-800 text-base group-hover:text-emerald-700 transition-colors">
                                        {item.text}
                                    </h3>
                                    <div className="mt-2 flex items-center text-emerald-600 text-sm">
                                        <span>বিস্তারিত দেখুন</span>
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Hover effect */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Solar System Package Section */}
            <div className="flex flex-col items-center justify-center mt-8 px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        আমাদের সেবা প্যাকেজসমূহ
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        আপনার ব্যবসার প্রয়োজনে উপযুক্ত প্যাকেজ নির্বাচন করুন। আমাদের বিশেষজ্ঞ দল সার্বক্ষণিক আপনাকে সহায়তা প্রদান করবে।
                    </p>
                </div>

                {/* Solar System Container */}
                <div className="relative w-full max-w-4xl mx-auto">
                    {/* Orbit Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border-2 border-dashed `}
                            style={{
                                borderColor: 'rgba(59, 130, 246, 0.2)',
                                animationDuration: '40s'
                            }} />
                        <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full border border-dashed"
                            style={{ borderColor: 'rgba(16, 185, 129, 0.2)' }} />
                    </div>

                    {/* Center Planet */}
                    <div className="relative justify-self-center left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 w-[330px] h-[330px] md:w-[420px] md:h-[420px] flex items-center justify-center mx-auto">
                        <div
                            className={`absolute w-32 h-32 md:w-40 md:h-40 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.3)]
                                flex items-center justify-center text-white font-bold text-center p-3
                                border-4 border-white bg-gradient-to-br from-emerald-600 to-green-600`}
                            style={{
                                animationDuration: '20s',
                                transform: `rotate(${rotation}deg)`
                            }}
                        >
                            <div style={{ transform: `rotate(-${rotation}deg)` }}>
                                <div className="text-center">
                                    <FaCrown className="text-3xl md:text-4xl mb-2 ml-3" />
                                    <span className="text-sm md:text-base block">প্যাকেজ</span>
                                    <span className="text-xs opacity-90">নির্বাচন করুন</span>
                                </div>
                            </div>
                        </div>

                        {/* Package Orbit Items */}
                        {packages.map((pkg, idx) => {
                            const angle = (idx / packages.length) * 360;
                            const isActive = hover === idx;
                            const currentAngle = angle + rotation;

                            return (
                                <Link
                                    key={idx}
                                    href={pkg.link}
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
                                            bg-gradient-to-br ${pkg.color} text-white
                                            border-2 ${pkg.borderColor} shadow-lg transition-all duration-300 cursor-pointer
                                            ${isActive ? "scale-125 shadow-[0_0_25px_rgba(var(--color-primary),0.5)] z-20" : "scale-100 hover:scale-110"}
                                            group
                                        `}
                                    >
                                        <div className="mb-1 transform group-hover:scale-125 transition-transform">
                                            {pkg.icon}
                                        </div>
                                        <p className="font-bold">{pkg.name}</p>
                                        <p className="text-[10px] mt-1 opacity-90">{pkg.price}</p>

                                        {/* Tooltip */}
                                        {isActive && (
                                            <div className={`absolute backdrop-blur-lg bg-transparent -bottom-24 left-1/2 transform -translate-x-1/2 w-56 p-4 rounded-lg shadow-xl ${pkg.bgColor} border ${pkg.borderColor}`}>
                                                <h4 className="font-bold text-sm mb-2 text-gray-800">{pkg.name} প্যাকেজ</h4>
                                                <p className="text-xs text-gray-600 mb-3">{pkg.description}</p>
                                                <ul className="text-xs text-gray-700 space-y-1 z-20">
                                                    {pkg.features.slice(0, 3).map((feature, i) => (
                                                        <li key={i} className="flex items-center justify-start gap-1">
                                                            <IoCheckmarkCircleOutline className="text-emerald-500 " />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                    {pkg.features.length > 3 && (
                                                        <li className="text-emerald-600 font-semibold">
                                                            + আরও {pkg.features.length - 3} সেবা
                                                        </li>
                                                    )}
                                                </ul>
                                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-gradient-to-br from-emerald-500 to-green-500"></div>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>


                {/* Subscribe Button */}
                <div className="mt-12 text-center">
                    <button
                        className="
                            group relative inline-flex items-center justify-center
                            px-12 py-4
                            font-bold text-white text-lg
                            bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600
                            overflow-hidden
                            transition-all duration-500
                            rounded-full shadow-2xl
                            hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]
                            hover:scale-105
                        "
                        onClick={() => router.push('/components/package')}
                    >
                        <span
                            className="
                                absolute inset-0
                                bg-gradient-to-r from-transparent via-white/30 to-transparent
                                -translate-x-full group-hover:translate-x-full
                                transition-transform duration-700
                            "
                        />
                        <span className="relative z-10 flex items-center gap-2">
                            <FaCrown />
                            এখনই সাবস্ক্রাইব করুন
                        </span>
                    </button>
                </div>
            </div>

        </div>
    );
}