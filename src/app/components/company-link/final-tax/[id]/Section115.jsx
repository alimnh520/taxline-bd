'use client'

import { useEffect, useState } from "react";

export function Section115() {

    const printSection = () => {
        const originalContents = document.body.innerHTML;
        const section = document.getElementById('sectionContent');
        const cloneSection = section.cloneNode(true);
        document.body.innerHTML = '';
        document.body.appendChild(cloneSection);

        // Logo
        const logo = document.createElement('img');
        logo.src = '/logo.png';
        logo.alt = 'BDTaxation Logo';
        logo.className = 'md:h-24 h-[70px] object-contain';
        document.body.prepend(logo);

        // Watermark
        const watermark = document.createElement('div');
        watermark.className = 'watermark';
        watermark.innerText = 'TaxLine_BD';
        document.body.prepend(watermark);

        // Styles
        const style = document.createElement('style');
        style.innerHTML = `
        body { font-size: 12px; font-family: sans-serif; position: relative; min-height: 100vh;}
        .watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-30deg);
            font-size: 5rem;
            color: rgba(0,0,0,0.05);
            pointer-events: none;
            z-index: 0;
        }
        img { display: block; margin: 0 auto 20px; max-height: 100px; }
    `;
        document.head.prepend(style);
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload();
    };



    return (
        <div className="col-md-6 order-1 order-md-2" id="sectionContent">
            {/* Print Button */}
            <button
                className="btn btn-secondary print:hidden bg-[#ff0000] px-4 py-2 text-white rounded-md"
                onClick={() =>
                    printSection('sectionContent', 'সংসদ সদস্যদের সম্মানী হইতে কর কর্তন')
                }
            >
                Print
            </button>

            <h1 className="my-1 font-bold text-2xl py-1">
                রিয়েল এস্টেট উন্নয়নকারীর (ডেভেলপার) নিকট হইতে ভূমির মালিক কর্তৃক প্রাপ্ত আয় হইতে কর কর্তন
            </h1>
            <strong className="text-sm">ধারা : ১১৫</strong>
            <hr className="my-1 text-gray-100" />

            <div className="row g-1">
                <div className="col-md-12 mt-6 text-sm">
                    <div className="w-full text-justify space-y-4">
                        <p className="text-justify">
                            যেইক্ষেত্রে রিয়েল এস্টেট বা ভূমি উন্নয়ন (ল্যান্ড ডেভেলপমেন্ট) ব্যবসার সহিত জড়িত কোনো ব্যক্তি সাইনিং মানি, পণমূল্য (subsistence money), বাড়ির ভাড়া বা অন্য কোনো ব্যবসা প্রতিষ্ঠানের মালিকানাধীন ভূমি উন্নয়নের উদ্দেশ্যে পাওয়ার অফ অ্যাটর্নি বা কোনো চুক্তি বা কোনো লিখিত চুক্তি দ্বারা প্রাপ্ত ক্ষমতাবলে, উহা যে নামেই অভিহিত হউক না কেন, ভূমি মালিককে কোনো অর্থ প্রদান করে, সেইক্ষেত্রে উক্তরূপে অর্থ প্রদানকালে মোট অর্থের উপর ১৫% (পনেরো শতাংশ) হারে কর কর্তন করা হইবে।
                        </p>
                    </div>
                </div>
            </div>

            <ins
                className="adsbygoogle border no-print mt-6 border-gray-200"
                style={{ display: "inline-block", width: "100%", height: "90px" }}
                data-ad-client="ca-pub-7809188873696785"
                data-ad-slot="7161102196"
            ></ins>

            <hr className="mt-6 text-gray-200" />

            <style>
                {`
                    #comment p {
                        color: red;
                    }
                `}
            </style>
        </div>
    );
}