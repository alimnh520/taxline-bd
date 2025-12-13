'use client'

import { useEffect, useState } from "react";

export function Section87() {

    const printSection = () => {
        const originalContents = document.body.innerHTML;
        const section = document.getElementById('sectionContent');
        const cloneSection = section.cloneNode(true);
        document.body.innerHTML = '';
        document.body.appendChild(cloneSection);

        // Logo
        const logo = document.createElement('img');
        logo.src = '/TaxLine_BD-PNG.png';
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
                সংসদ সদস্যদের সম্মানী হইতে কর কর্তন
            </h1>
            <strong className="text-sm">ধারা : ৮৭</strong>
            <hr className="my-1 text-gray-100" />

            <div className="row g-1">
                <div className="col-md-12 mt-6 text-sm">
                    <div className="w-full text-justify space-y-4">
                        <p>
                            &nbsp;সংসদ সদস্যের সম্মানী হিসাবে কোনো অর্থ পরিশোধের জন্য
                            দায়িত্বপ্রাপ্ত কোনো ব্যক্তি উক্তরূপ অর্থ প্রদানকালে, প্রদেয়
                            সম্মানীর উপর, প্রযোজ্য পরিমাণে আয়কর প্রাপকের উক্ত আয়বর্ষের
                            আনুমানিক মোট সম্মানীর জন্য প্রযোজ্য করের গড় হারে কর্তন করিবেন।
                        </p>
                    </div>
                </div>
            </div>

            <ins
                className="adsbygoogle border no-print border-gray-200"
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