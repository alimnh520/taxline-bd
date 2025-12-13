"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Feature = () => {
    const [hover, setHover] = useState(null);
    const [isRotate, setIsRotate] = useState(true);
    const [translateValue, setTranslateValue] = useState(160);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) { // md breakpoint এর নিচে
                setTranslateValue(120);
            } else {
                setTranslateValue(160);
            }
        };

        handleResize(); // প্রথম render এ call
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


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
        <div className="flex items-center relative justify-center mt-4 sm:mt-12 px-3">

            <div className="w-full hidden h-96 px-5 absolute sm:flex items-center justify-center overflow-hidden">
                <div className="w-full h-96 bg-blue-700 shadow-[2px_2px_10px_rgba(0,0,0,0.5)]"></div>
            </div>
            <div className="w-[480px] h-[480px] hidden sm:block bg-white rounded-full absolute"></div>

            <div className={`relative w-[330px] h-[330px] z-10 md:w-[420px] md:h-[420px] flex items-center justify-center`}>

                {/* Center Planet */}
                <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full shadow-[2px_2px_20px_rgba(0,0,0,0.2)]
                    flex items-center justify-center text-white font-bold text-center p-3 text-lg">
                    <img src="/favicon.ico" alt="BDTaxation Logo" className="md:h-24 h-[70px] object-contain" />
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
                                transform: `rotate(${angle}deg) translate(${translateValue}px) rotate(-${angle}deg)`
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
