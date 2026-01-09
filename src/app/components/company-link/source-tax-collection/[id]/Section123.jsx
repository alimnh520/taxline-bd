'use client'

import { useEffect, useState } from "react";

export function Section123() {

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
                রপ্তানি আয় হইতে কর সংগ্রহ
            </h1>
            <strong className="text-sm">ধারা : ১২৩</strong>
            <hr className="my-1 text-gray-100" />

            <div className="row g-1">
                <div className="col-md-12 mt-6 text-sm">
                    <div className="w-full text-justify space-y-4">
                        <p className="text-justify">
                            (১) কোনো ব্যাংক, যেকোনো পণ্য রপ্তানিকারক কর্তৃক রপ্তানির মাধ্যমে প্রাপ্ত অর্থ রপ্তানিকারকের হিসাবে জমা প্রদানকালে মোট রপ্তানি আয়ের ১% (এক শতাংশ) হারে কর কর্তনপূর্বক তাহা সরকারি কোষাগারে জমা করিবে।
                        </p>
                        <p className="text-justify">
                            (২) যেইক্ষেত্রে, বোর্ড, আবেদনের ভিত্তিতে এই মর্মে লিখিতভাবে সনদ প্রদান করিয়া থাকে যে, রপ্তানিকারকের আয় এই আইনের অধীন কর অব্যাহতি প্রাপ্ত বা হ্রাসকৃতহারে করযোগ্য, তাহা হইলে ব্যাংক সনদে উল্লিখিত সময়ের জন্য করদাতার হিসাবে কোনো কর্তন ব্যতিরেকে বা সনদে উল্লিখিত হ্রাসকৃতহারে কর কর্তনপূর্বক উহা সরকারি কোষাগারে জমা করিবে।
                        </p>

                        <p className="text-red-600">মন্তব্য : </p>
                        <p>চামড়া ও চামড়াজাত পণ্য রপ্তানির বিপরীতে করহার হ্রাস করে ০.৫% করা হয়েছে।</p>

                        <table className="min-w-full border border-gray-300 table-auto text-sm">
                            <caption className="caption-top text-left text-lg font-semibold mb-2">তথ্যসূত্র</caption>
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-2 py-1 text-center">ক্রমিক</th>
                                    <th className="border px-2 py-1">মন্তব্য</th>
                                    <th className="border px-2 py-1">আয় কর এস আর ও</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-100">
                                    <td className="border px-2 py-1 text-center">১</td>
                                    <td className="border px-2 py-1">
                                        চামড়া ও চামড়াজাত পণ্য রপ্তানির বিপরীতে করহার হ্রাস করে ০.৫% করা হয়েছে।
                                    </td>
                                    <td className="border px-2 py-1">
                                        <a
                                            href="/income-tax-sro/3"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            এস. আর. ও. নং ৫০-আইন/আয়কর-২৭/২০২৪
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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