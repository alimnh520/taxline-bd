'use client'

import { useEffect, useState } from "react";

export function Section139() {

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
                নৌযান পরিচালনা হইতে কর সংগ্রহ
            </h1>
            <strong className="text-sm">ধারা : ১৩৯</strong>
            <hr className="my-1 text-gray-100" />

            <div className="row g-1">
                <div className="col-md-12 mt-6 text-sm">
                    <div className="w-full text-justify space-y-4">
                        <p className="text-justify mb-4">
                            (১) Inland Shipping Ordinance, 1976 (Ordinance No. LXXII of 1976) এর অধীন দায়িত্বপ্রাপ্ত ব্যক্তি উক্ত Ordinance এর
                            section 9 এর অধীন কোনো নৌযানকে সার্ভে সার্টিফিকেট প্রদান করিবেন না বা section 12 এর অধীন সার্ভে সার্টিফিকেট
                            নবায়ন করিবেন না, যদি না সার্ভে সার্টিফিকেট প্রাপ্তি বা সার্ভে সার্টিফিকেট নবায়নের আবেদনের সহিত নিম্নবর্ণিত
                            সারণীতে উল্লিখিত হারে পরিশোধিত অগ্রিম কর জমার চালান সংযুক্ত করা হয়, যথা:-
                        </p>

                        <p className="text-justify font-bold mb-2">সারণী</p>

                        <div className="overflow-x-auto mb-4">
                            <table className="min-w-full border border-gray-300 text-left">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 px-2 py-1 w-1/12">ক্রমিক নং</th>
                                        <th className="border border-gray-300 px-2 py-1 w-5/12">নৌযানের বর্ণনা</th>
                                        <th className="border border-gray-300 px-2 py-1 w-6/12 text-center">অগ্রিম কর (টাকা)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-2 py-1">১।</td>
                                        <td className="border border-gray-300 px-2 py-1">
                                            অভ্যন্তরীণ নৌ-পথে যাত্রী পরিবহনে নিয়োজিত নৌ-যানের ক্ষেত্রে
                                        </td>
                                        <td className="border border-gray-300 px-2 py-1 text-center">
                                            যাত্রী প্রতি ১২৫ (একশত পঁচিশ) টাকা
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-2 py-1">২।</td>
                                        <td className="border border-gray-300 px-2 py-1">
                                            অভ্যন্তরীণ নৌ-পথে মালামাল পরিবহনে নিয়োজিত কার্গো, কন্টেইনার (মাল্টিপারপাস) বা কোস্টারের ক্ষেত্রে
                                        </td>
                                        <td className="border border-gray-300 px-2 py-1 text-center">
                                            মালামাল পরিবহনের ক্ষমতার ভিত্তিতে গ্রস টনেজ প্রতি ১৭০ (একশত সত্তর) টাকা
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-2 py-1">৩।</td>
                                        <td className="border border-gray-300 px-2 py-1">
                                            অভ্যন্তরীণ নৌ পথে মালামাল পরিবহনে নিয়োজিত ডাম্পবার্জের ক্ষেত্রে
                                        </td>
                                        <td className="border border-gray-300 px-2 py-1 text-center">
                                            মালামাল পরিবহনের ক্ষমতার ভিত্তিতে গ্রস টনেজ প্রতি ১২৫ (একশত পঁচিশ) টাকা
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-justify mb-2">
                            (২) যেইক্ষেত্রে একাধিক বৎসরের জন্য সার্ভে সার্টিফিকেট প্রদান বা সার্ভে সার্টিফিকেট নবায়ন করা হয় সেইক্ষেত্রে
                            উপ-ধারা (১) এর অধীন পরিশোধতব্য কর সার্ভে সার্টিফিকেট প্রদান বা সার্ভে সার্টিফিকেট নবায়নের বৎসরের পরবর্তী
                            বৎসর বা কোনো বৎসরের ৩০ জুন তারিখ বা তৎপূর্বে সংগ্রহ করিতে হইবে।
                        </p>

                        <p className="text-justify mb-2">
                            (৩) যেইক্ষেত্রে কোনো বৎসর কোনো ব্যক্তি উপ-ধারা (২) অনুযায়ী অগ্রিম কর পরিশোধে ব্যর্থ হন, সেইক্ষেত্রে পরবর্তী
                            বৎসরে উক্ত ব্যক্তি কর্তৃক পরিশোধিতব্য অগ্রিম করের পরিমাণ ক+খ নিয়মে নির্ধারিত হইবে, যেখানে-
                        </p>
                        <p className="pl-10 text-justify mb-1">
                            ক = পূর্ববর্তী বৎসর বা বৎসরগুলোতে অপরিশোধিত অগ্রিম করের পরিমাণ, এবং
                        </p>
                        <p className="pl-10 text-justify mb-4">
                            খ = পরিশোধের বৎসরে উপ-ধারা (১) অনুযায়ী পরিশোধিতব্য অগ্রিম করের পরিমাণ।
                        </p>

                        <p className="text-justify mb-2">
                            (৪) এই ধারায় “নৌ-যান (Inland Ship)” এবং “অভ্যন্তরীণ নৌ-পথ (Inland Water)” বলিতে Inland Shipping Ordinance, 1976 (Ordinance No. LXXII of 1976) এ সংজ্ঞায়িত যথাক্রমে “Inland Ship” এবং “Inland Water” কে বুঝাইবে।
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