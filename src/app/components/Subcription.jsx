'use client';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import Link from 'next/link';
import React, { useState } from 'react';

function lightenColor(hex, percent) {
    hex = hex.replace(/#/g, "");
    const num = parseInt(hex, 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00ff) + amt;
    const B = (num & 0x0000ff) + amt;
    return (
        "#" +
        (
            0x1000000 +
            (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 0 ? 0 : B) : 255)
        )
            .toString(16)
            .slice(1)
    );
}

function svgColor(color) {
    return (
        <svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" fill={color}>
            <defs>
                <mask id="xxx">
                    <circle cx="7" cy="12" r="40" fill="#fff" />
                </mask>

                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 13 -9"
                        result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>

                <path
                    id="wave"
                    d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
                />
            </defs>

            <use id="wave3" className="wave" href="#wave" x="0" y="-2" />
            <use id="wave2" className="wave" href="#wave" x="0" y="0" />

            <g className="gooeff">
                <circle className="drop drop1" cx="20" cy="2" r="1.8" />
                <circle className="drop drop2" cx="25" cy="2.5" r="1.5" />
                <circle className="drop drop3" cx="16" cy="2.8" r="1.2" />
                <use id="wave1" className="wave" href="#wave" x="0" y="1" />
            </g>
        </svg>
    );
}

const plans = [
    {
        name: 'Basic',
        price: '৳২০০০',
        features: ['TIN REGISTRATION', 'INDIVIDUAL TAX', 'CORPORATE TAX', 'TAX RETURN', 'TAX ADVISORY'],
        accent: '#32b44a',
        link: '/components/package/basic'
    },
    {
        name: 'Standard',
        price: '৳৩০০০',
        features: [
            'BIN REGISTRATION',
            'MONTHLY RETURN PROCESSING',
            'ONLINE RETURN SUBMISSION',
            'VAT AUDIT',
            'VAT CONSULTANCY'
        ],
        accent: '#ff0000',
        link: '/components/package/standard'
    },
    {
        name: 'Premium',
        price: '৳১৫০০০',
        features: [
            'COMPANY REGISTRATION',
            'TRADE LICENSE & TRADEMARK',
            'IRC & ERC SERVICES',
            'BUSINESS AUDIT',
            'FINANCIAL AUDIT',
            'ACCOUNTING SERVICE & SOFTWARE IMPLEMENTATION',
            'COMPANY LAW, RJSC REGISTRATION, SHARE TRANSFER',
            'ACCOUNTING SERVICES & OTHER CONSULTANCY SERVICES',
            'IMPORT/EXPORT CERTIFICATES',
            'LEGAL COMPLIANCE',
            'CUSTOM LAW',
            'REFUND ADJUSTMENT',
            'TAX APPEAL & TRIBUNAL',
        ],
        accent: '#17982f',
        link: '/components/package/premium'
    },
];

const gridLinks = [
    { text: "করবর্ষ অনুযায়ী আইনের পার্থক্য", link: "" },
    { text: "আয়ের স্বপ্রণোদিত প্রদর্শন", link: "tax-act-section" },
    { text: "পরিবর্তন ১৯৮৪ হতে ২০২৩", link: "" },
    { text: "বছর ভিক্তিক পরিগণনা", link: "" },
    { text: "Tax Planning Calculator", link: "" },
    { text: "রেয়াতযোগ্য বিনিয়োগ এর খাতসমূহ", link: "" },
    { text: "অ-নিবাসী কর হার", link: "" },
    { text: "আইটি সেক্টর করের তথ্য", link: "" },
    { text: "জরিমানাসমূহ", link: "" },
];

export function Subscription() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <div className="sm:w-10/12 w-full mx-auto px-4 sm:px-6 lg:px-8 md:space-y-16 space-y-7 py-6 md:py-16">

            {/* Grid Links */}
            <div className="w-full space-y-4 sm:space-y-8">

                <div className="w-full flex justify-center">
                    <div className="ribbon text-[16px] md:text-2xl font-bold text-white tracking-wide pb-2 md:pb-5 drop-shadow-2xl">ট্যাক্স সম্পর্কিত গুরুত্বপূর্ণ টপিকসমূহ</div>
                </div>

                {/* Two Column List Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-5">

                    {gridLinks.map((item, idx) => (
                        <Link
                            key={idx}
                            href={`/components/tax-act/${item.link}`}
                            className="
        relative 
        bg-[#32b44a]  overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_#4dff6a80] hover:-translate-y-1 flex items-center gap-4 sm:p-2 p-0.5 rounded-xl border border-[#32b44a]/40 shadow-sm hover:shadow-lg text-white  transition-all duration-300"
                        >

                            {/* Left Solid Icon Box */}
                            <div className="z-10 bg-white w-10 h-10 rounded-full border flex items-center justify-center border-[#0f6f3f33] shadow-lg ">
                                    <img src="/logo/green-check.png" className="w-8 opacity-100" alt="" />
                                </div>

                            {/* Text */}
                            <span className="font-semibold text-base z-10">
                                {item.text}
                            </span>

                            <span className="bg-[#2c9d41] rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 size-0 group-hover:size-80 transition-all duration-700 absolute button-effect"></span>

                        </Link>
                    ))}

                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="ribbon text-xl md:text-2xl font-bold text-white tracking-wide pb-2 md:pb-5 drop-shadow-2xl">আমাদের প্যাকেজসমূহ</div>
            </div>

            <div className="mt-5 sm:mt-10 flex flex-col sm:flex-row px-5 sm:px-0 items-start justify-between gap-5 sm:gap-8">
                {plans.map((plan, index) => {
                    const [hover, setHover] = useState(false);

                    const visibleFeatures =
                        index === 2
                            ? expandedIndex === 2
                                ? plan.features
                                : plan.features.slice(0, 5)
                            : plan.features;

                    return (
                        <div
                            key={plan.name}
                            className={`w-full h-[400px] sm:h-[540px] flex flex-col transition-all duration-300 ${(index === 2 && expandedIndex === 2) && 'h-[750px] sm:h-[1050px]'} ${index === 1 && 'sm:scale-110 hover:scale-[120%] z-10'} my-font rounded-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-white`}
                        >
                            <div
                                className="py-4 sm:py-6 h-32 sm:h-44 text-white relative"
                                style={{ backgroundColor: lightenColor(plan.accent, 20) }}
                            >
                                <div className="w-full px-4 sm:px-5 flex flex-col items-start justify-center">
                                    <div className="mt-2 sm:mt-4 flex items-baseline text-3xl sm:text-5xl drop-shadow-2xl font-extrabold">
                                        <p>{plan.price}</p>
                                    </div>
                                    {index === 2 && <p className="mt-2 sm:mt-4 ml-1 px-2 rounded-full sm:ml-2 sm:text-base" style={{
                                        backgroundColor: lightenColor(plan.accent, -10)
                                    }}>Starting from</p>}
                                </div>

                                <div
                                    className="
                            w-full h-10 sm:h-12 
                            -right-16 sm:-right-20 
                            top-0 absolute rotate-45 flex items-center justify-center"
                                    style={{ backgroundColor: plan.accent }}
                                >
                                    <h3 className="text-lg sm:text-2xl font-semibold ml-20 sm:ml-24">
                                        {plan.name}
                                    </h3>
                                </div>

                                <div className="-mt-4 sm:-mt-5">{svgColor(plan.accent)}</div>
                                <div
                                    className="w-full h-36 sm:h-44 absolute"
                                    style={{
                                        background: `linear-gradient(to bottom, ${lightenColor(plan.accent, 0)}, #ffffff)`
                                    }}
                                ></div>
                            </div>

                            <div className="flex-1 px-4 sm:px-6 py-5 sm:py-8 z-20">
                                <ul className="space-y-3 sm:space-y-4">
                                    {visibleFeatures.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="text-black font-semibold text-sm sm:text-base flex items-center justify-start gap-x-2"
                                        >
                                            <span
                                                style={{
                                                    backgroundColor: lightenColor(plan.accent, -10),
                                                    color: 'white',
                                                    borderRadius: "100%"
                                                }}
                                                className="text-lg sm:text-xl"
                                            >
                                                <IoCheckmarkCircleOutline />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}

                                    {index === 2 && plan.features.length > 5 && (
                                        <button
                                            className="font-semibold text-xs sm:text-sm hover:underline cursor-pointer"
                                            onClick={() =>
                                                setExpandedIndex(expandedIndex === 2 ? null : 2)
                                            }
                                            style={{ color: lightenColor(plan.accent, -10) }}
                                        >
                                            {expandedIndex === 2 ? "See Less" : "See More"}
                                        </button>
                                    )}
                                </ul>
                            </div>

                            <div className="px-4 sm:px-6 pb-6 bg-white relative -mt-5">
                                <Link href={plan.link}>
                                    <button
                                        type="button"
                                        className="w-full h-10 sm:h-12 cursor-pointer relative overflow-hidden text-white font-semibold text-sm sm:text-base rounded-full group transition-all duration-300 flex items-center justify-center"
                                        style={{
                                            backgroundColor: lightenColor(plan.accent, 20),
                                        }}
                                        onMouseEnter={() => setHover(true)}
                                        onMouseLeave={() => setHover(false)}
                                    >
                                        <span className="bg-white rounded-full size-0 group-hover:size-80 transition-all duration-700 absolute button-effect" style={{
                                            backgroundColor: lightenColor(plan.accent, -10)
                                        }}></span>
                                        <span className="z-10">Get Started</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div >
    );
}
