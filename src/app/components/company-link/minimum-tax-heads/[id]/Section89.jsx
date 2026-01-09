'use client'

import { useEffect, useState } from "react";

export function Section89() {

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
                ঠিকাদার, সরবরাহকারী ইত্যাদিকে প্রদত্ত অর্থ হইতে কর কর্তন
            </h1>
            <strong className="text-sm">ধারা : ৮৯</strong>
            <hr className="my-1 text-gray-100" />

            <div className="col-md-12 text-sm">
                <p className="text-justify mb-3">
                    যেইক্ষেত্রে কোনো নির্দিষ্ট ব্যক্তি কর্তৃক কোনো নিবাসীকে নিম্নবর্ণিত কারণে কোনো অর্থ পরিশোধ করা হয়-
                </p>

                <ul className="list-none space-y-2 pl-4">
                    <li className="text-justify">
                        (ক) অংশ ৭ এর অন্য কোনো ধারায় উল্লিখিত পরিষেবা প্রদান বা সরবরাহের জন্য চুক্তি ব্যতীত অন্য কোনো চুক্তি সম্পাদন;
                    </li>
                    <li className="text-justify">
                        (খ) পণ্য সরবরাহ;
                    </li>
                    <li className="text-justify">
                        (গ) উৎপাদন, প্রক্রিয়াকরণ বা রূপান্তর;
                    </li>
                    <li className="text-justify">
                        (ঘ) মুদ্রণ, প্যাকেজিং বা বাঁধাই,
                    </li>
                </ul>

                <p className="text-justify mt-4">
                    সেইক্ষেত্রে উক্ত পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি উক্তরূপ অর্থ প্রদান বা
                    ক্রেডিটকালে ভিত্তিমূল্যের উপর নির্ধারিত, অনধিক
                    <span className="font-semibold"> ১০% (দশ শতাংশ) </span>
                    হারে কর কর্তন করিবেন।
                </p>

                <p className="mt-4 font-semibold text-red-600">
                    বিস্তারিত দেখতে{" "}
                    <a
                        href="/supplier-tax"
                        className="text-red-600 underline hover:text-red-700 transition"
                    >
                        এই লিংকে
                    </a>
                </p>
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