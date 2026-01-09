'use client'

import { useEffect, useState } from "react";

export function Section105() {

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
                সঞ্চয় পত্রের মুনাফা হইতে কর কর্তন
            </h1>
            <strong className="text-sm">ধারা : ১০৫</strong>
            <hr className="my-1 text-gray-100" />

            <div className="row g-1">
                <div className="col-md-12 mt-6 text-sm">
                    <div className="w-full text-justify space-y-4">
                        <p className="text-justify">
                            (১) এই আইনের অন্য কোনো বিধান বা অন্য কোনো আইনে অনুমোদিত বার্ধক্য তহবিল বা পেনশন তহবিল বা গ্র্যাচ্যুইটি তহবিল বা স্বীকৃত ভবিষ্য তহবিল বা শ্রমিক স্বার্থ অংশগ্রহণ তহবিলের অর্থ দ্বারা ক্রয়কৃত সঞ্চয়পত্রের উপর প্রাপ্ত মুনাফা কর অব্যাহতির বিষয়ে যাহা কিছুই থাকুক না কেন, সঞ্চয়পত্রের মুনাফা প্রদানের জন্য দায়িত্বপ্রাপ্ত কোনো ব্যক্তি উক্তরূপ অর্থ প্রদানকালে ১০% (দশ শতাংশ) হারে কর কর্তন করিবেন।
                        </p>
                        <p className="text-justify">
                            (২) কোনো আয়বর্ষে পেনশনার সঞ্চয়পত্রে পুঞ্জিভূত বিনিয়োগ ৫ (পাঁচ) লক্ষ টাকা অতিক্রম না করিলে, উক্তরূপ বিনিয়োগ হইতে অর্জিত মুনাফা হইতে এই ধারার অধীন কোনো কর কর্তন করা যাইবে না।
                        </p>
                        <p className="text-justify">
                            (৩) বৈদেশিক মুদ্রা উপার্জনকারীর উন্নয়ন বন্ড, মার্কিন ডলার প্রিমিয়াম বন্ড, মার্কিন ডলার বিনিয়োগ বন্ড, ইউরো প্রিমিয়াম বন্ড, ইউরো বিনিয়োগ বন্ড, পাউন্ড স্টার্লিং ইনভেস্টমেন্ট বন্ড বা পাউন্ড স্টার্লিং প্রিমিয়াম বন্ড হইতে উদ্ভূত সুদ বা লভ্যাংশ হইতে কোনো কর কর্তন করা যাইবে না।
                        </p>

                    </div>
                </div>
            </div>

            <table className="w-full border border-gray-300 border-collapse text-sm mt-8">
                {/* Caption */}
                <caption className="caption-top mb-2 text-left font-semibold text-blue-600">
                    তথ্যসূত্র
                </caption>

                {/* Table Head */}
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-3 py-2 text-left">
                            ক্রমিক
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left">
                            মন্তব্য
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left">
                            আয় কর এস আর ও
                        </th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-2">১</td>
                        <td className="border border-gray-300 px-3 py-2 text-justify">
                           সঞ্চয়পত্র হতে অর্জিত মুনাফার বিপরীতে কর্তিত কর চূড়ান্ত করদায় হিসেবে বিবেচিত।
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                            <a
                                href="https://bdtaxation.com/income-tax-sro/16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                এস.আর.ও নং-২৫৩-আইন/আয়কর-০৯/২০২৩
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <ins
                className="adsbygoogle border mt-6 no-print border-gray-200"
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