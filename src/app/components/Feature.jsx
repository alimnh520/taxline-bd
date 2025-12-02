"use client";
import Link from "next/link";
import { useState } from "react";

export const Feature = () => {
    const [hover, setHover] = useState(null);
    const [isRotate, setIsRotate] = useState(true);

    const items = [
        { text: "আইকর আইন ২০২৩", link: "taxLaw" },
        { text: "মূসক ও সম্পূরক শুল্ক আইন ২০১২", link: "sulkoLaw" },
        { text: "কাস্টম আইন ২০২৩", link: "customLaw" },
        { text: "আইকর নির্দেশিকা", link: "tax-guideline" },
        { text: "উৎসে কর বিধিমালা", link: "tds-rules" },
        { text: "আয় কর এস আর ও", link: "income-tax-sro" },
        { text: "পরিপত্র", link: "paripatra" },
        { text: "ব্যক্তি করহার", link: "tax-rate" },
        { text: "কোম্পানি করহার", link: "company-tax" },
        { text: "অর্থ আইন", link: "finance-act" },
    ];

    return (
        <div className="flex flex-col items-center mt-12 px-3 space-y-10">

            <div className={`relative w-[330px] h-[330px] md:w-[420px] md:h-[420px] flex items-center justify-center`}>

                {/* Center Planet */}
                <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full 
                    bg-gradient-to-br from-green-500 to-green-800 shadow-xl
                    flex items-center justify-center text-white font-bold text-center p-3 text-lg">
                    TaxLine BD
                </div>

                {/* Orbit Items */}
                {items.map((item, idx) => {
                    const angle = (idx / items.length) * 360;
                    const isActive = hover === idx;

                    return (
                        <Link
                            key={idx}
                            href={`/components/tax-act/${item.link}`}
                            onMouseEnter={() => {
                                setHover(idx);
                                setIsRotate(false);
                            }}
                            onMouseLeave={() => {
                                setHover(null);
                                setIsRotate(true);
                            }}
                            className="absolute transition-all duration-300 origin-center z-10"
                            style={{
                                transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`
                            }}
                        >
                            <div
                                className={`
                                    w-[85px] h-[85px] md:w-[105px] md:h-[105px]
                                    rounded-full flex items-center justify-center text-center
                                    text-[11px] md:text-[13px] px-3 font-semibold
                                    bg-gradient-to-br from-red-500 to-red-700 text-white
                                    border-2 border-pink-200 shadow-lg transition-all duration-300 cursor-pointer
                                    ${isActive ? "scale-125 shadow-[0_0_20px_#ff5b5b]" : "scale-100"}
                                `}
                            >
                                {item.text}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
