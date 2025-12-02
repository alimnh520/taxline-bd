"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const PersonalFeature = () => {
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const router = useRouter();

    const diamondLinks = [
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
        <div className="mx-auto flex mt-10 gap-y-10 flex-col items-center justify-center flex-wrap px-2">
            <div className="w-full flex flex-wrap items-center justify-center gap-5 md:gap-x-2 text-white pb-6 md:pb-8">

                {diamondLinks.map((item, idx) => {
                    const scaleClass =
                        hoveredIdx === null
                            ? "scale-100"
                            : hoveredIdx === idx
                                ? "scale-105"
                                : "scale-90";

                    return (
                        <Link
                            href={`/components/tax-act/${item.link}`}
                            key={idx}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            className={`w-[85px] h-[85px] md:w-[105px] md:h-[105px]
        rounded-full flex items-center justify-center text-center
        text-[11px] md:text-[13px] px-3 font-semibold
        bg-gradient-to-br from-red-500 to-red-700 text-white
        border-2 border-pink-200 transition-all duration-300 cursor-pointer relative ${hoveredIdx === idx && 'animate-feature'} ${scaleClass}`}>

                            <div
                                className="absolute top-full w-20 h-3 rounded-full bg-black blur-md opacity-70"
                            ></div>


                            <p className="text-[13px] text-center text-white transition-colors duration-300 hover:text-[#ffe8c4]">
                                {item.text}
                            </p>
                        </Link>

                    );
                })}
            </div>
        </div>
    );
};