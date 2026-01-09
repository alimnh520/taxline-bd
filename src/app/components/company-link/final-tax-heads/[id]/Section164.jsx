'use client'

import { useEffect, useState } from "react";

export function Section164() {

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
                রিটার্ন দাখিলে অব্যাহতি প্রাপ্ত ব্যক্তিগণ
            </h1>
            <p className="text-justify"><span >আয়কর আইন, ২০২৩ এর <a className="text-red-600 underline" href="/tax-act-section/211">ধারা-১৬৬(২</a>) অনুযায়ী, যে সকল করদাতাগণকে রিটার্ন দাখিল হতে অব্যহতি প্রদান করা হয়েছে, সে সকল করদাতার আয়কর আইন, ২০২৩ এর <a href="/tax-act-section/57">ধারা ৩০</a> এ উল্লেখিত আয়ের খাতসমূহের বিপরীতে এই আইনের অংশ-৭ এর অন্তর্ভুক্ত সকল ধারায় কর্তিত কর চূড়ান্ত কর দায় হিসেবে বিবেচিত হবে।</span></p>

            <div className="row g-1">
                <div className="col-md-12 mt-6 text-sm">
                    <div className="w-full text-justify space-y-4">

                        <p className="text-justify text-lg"><strong><span >রেফারেন্স: <a className="text-red-500 underline" href="/tax-act-section/208">ধারা-১৬৩(১১)</a></span></strong></p>
                        <br />
                        <br />
                        <p className="text-red-600">নোট: </p>
                        <p className="text-red-600">১। ইতিপূর্বে ২০২৪-২০২৫ করবর্ষ পর্যন্ত রিটার্ন দাখিল হতে অব্যহতি প্রাপ্ত ব্যক্তিগণের সঞ্চয়ী আমানত ও স্থায়ী আমানত ইত্যাদি হতে অর্জিত সুদ হতে আয় এস.আর.ও নং-২৫৩-আইন/আয়কর-০৯/২০২৩ এর মাধ্যমে চূড়ান্ত করদায় ছিল, যা এস.আর.ও নং ১৫১-আইন/আয়কর-৬/২০২৫ এর মাধ্যমে বাতিল করা হয়েছে।  </p>
                    </div>

                    <br />
                    <table className="min-w-full border border-gray-300 table-auto text-sm">
                        <caption className="caption-top text-lg font-semibold text-blue-600 mb-2">
                            তথ্যসূত্র
                        </caption>
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="border border-gray-300 px-3 py-2 text-center w-[10%]">ক্রমিক</th>
                                <th className="border border-gray-300 px-3 py-2 text-center w-[60%]">মন্তব্য</th>
                                <th className="border border-gray-300 px-3 py-2 text-center w-[30%]">আয় কর এস আর ও</th>
                            </tr>
                        </thead>
                    </table>
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