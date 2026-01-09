'use client'

import { useEffect, useState } from "react";

export function Section112() {

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
        <div className="col-md-6 order-1 space-y-5 order-md-2" id="sectionContent">
            {/* Print Button */}
            <button
                className="btn btn-secondary print:hidden bg-[#ff0000] px-4 py-2 text-white rounded-md"
                onClick={() =>
                    printSection('sectionContent', 'সংসদ সদস্যদের সম্মানী হইতে কর কর্তন')
                }
            >
                Print
            </button>

            <h1 className="my-1 font-bold text-lg">
                নগদ রপ্তানি ভর্তুকির উপর উৎসে কর কর্তন
            </h1>

            <strong className=" block">ধারা : ১১২</strong>

            {/* Content */}
            <div className="w-full">
                <p className="text-justify leading-relaxed">
                    রপ্তানি বৃদ্ধির জন্য রপ্তানিকারককে নগদ রপ্তানি ভর্তুকির কারণে যেকোনো
                    পরিমাণ অর্থ পরিশোধের জন্য দায়িত্বপ্রাপ্ত কোনো ব্যক্তি, অর্থ প্রদান
                    বা জমার সময়, প্রদেয় মোট অর্থের ১০% (দশ শতাংশ) হারে অগ্রিম কর কর্তন
                    বা সংগ্রহ করিবেন।
                </p>
            </div>

            {/* Divider */}

            {/* Reference Table */}
            <table className="w-full border border-gray-300 text-sm">
                <caption className="caption-top text-left font-semibold text-blue-600 mb-2">
                    তথ্যসূত্র
                </caption>
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-3 py-2">ক্রমিক</th>
                        <th className="border px-3 py-2">মন্তব্য</th>
                        <th className="border px-3 py-2">আয় কর এস আর ও</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-3 py-2 text-center">১</td>
                        <td className="border px-3 py-2">
                            রপ্তানির বিপরীতে প্রাপ্ত নগদ ভর্তুকির বিপরীতে কর্তিত কর চূড়ান্ত
                            করদায় হিসেবে বিবেচিত।
                        </td>
                        <td className="border px-3 py-2">
                            <a
                                href=""
                                className="text-blue-600 hover:underline"
                            >
                                এস.আর.ও নং-২৫৩-আইন/আয়কর-০৯/২০২৩
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}