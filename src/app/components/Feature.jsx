"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Feature = () => {
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

            <div className="ribbon text-xl md:text-2xl font-bold text-white tracking-wide pb-2 md:pb-5 drop-shadow-2xl">
                আমাদের জনপ্রিয় ফিচারসমূহ
            </div>

            <div className="w-full flex flex-wrap items-center justify-center gap-5 md:gap-x-5 text-white border-b border-b-gray-200 pb-6 md:pb-8">

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
                            className={`w-[95px] h-[95px] 
                               md:w-[105px] md:h-[105px]
                                border-[6px] md:border-[10px]
                                border-[#d9ffd38f] rotate-45 bg-[#11270de8]
                                rounded-4xl flex items-center justify-center
                                transform transition-transform duration-300 ${scaleClass}
                                cursor-pointer
                            `}
                        >
                            <p className="-rotate-45 text-[13px] text-center text-white transition-colors duration-300 hover:text-[#ffe8c4]">
                                {item.text}
                            </p>
                        </Link>
                    );
                })}
            </div>

            {/* <button
                onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://bdtaxation.com/uploads/TDS_Rules,_2023.pdf';
                    link.download = 'আয়কর নির্দেশিকা ২০১৬-২০১৭.pdf';
                    link.click();
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                PDF ডাউনলোড করো
            </button> */}

        </div>
    );
};
