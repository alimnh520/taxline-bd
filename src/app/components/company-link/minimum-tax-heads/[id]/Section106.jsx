'use client'

import { useEffect, useState } from "react";

export function Section106() {
    const [selectedYear, setSelectedYear] = useState('1');

    const printSection = () => {
        const originalContents = document.body.innerHTML;

        const section = document.getElementById('sectionContent');
        const cloneSection = section.cloneNode(true);

        const selectBox = cloneSection.querySelector('#selectedMinimumTaxAmountId');
        if (selectBox) {
            selectBox.innerHTML = '';
            const option = document.createElement('option');
            option.value = selectedYear;
            option.text = selectedYear === '1' ? '২০২৫ - ২০২৬' : '২০২৩ - ২০২৪';
            selectBox.appendChild(option);
            selectBox.value = selectedYear;
        }

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

        // Restore original content
        document.body.innerHTML = originalContents;
        window.location.reload();
    };



    return (
        <div className="col-md-6 order-1 order-md-2" id="sectionContent" >

            {/* Print Button */}
            <button
                className="btn btn-secondary print:hidden bg-[#ff0000] px-4 py-2 text-white rounded-md"
                onClick={printSection}
            >
                Print
            </button>

            <h1 className="my-1 font-bold text-2xl py-1">সিকিউরিটিজের সুদ হইতে উৎসে কর কর্তন </h1>
            <strong className="text-sm">ধারা : ১০৬</strong>
            <hr className="my-1 text-gray-100" />

            <div className="row g-1">
                <div className="col-md-12">
                    <div className="mb-3 row flex items-center justify-between">
                        <label className="block  font-semibold">করবর্ষ</label>
                        <div className="w-2/4">
                            <select
                                id="selectedMinimumTaxAmountId"
                                className="w-full border border-green-500 outline-none appearance-none rounded px-3 py-1.5"
                                value={selectedYear}
                                onChange={(e) => {
                                    setSelectedYear(e.target.value);
                                }}
                            >
                                <option value="1">২০২৫ - ২০২৬</option>
                                <option value="2">২০২৩ - ২০২৪ </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 mt-6 text-sm">
                    <div className="w-full">

                        <div className={`text-justify ${selectedYear === '1' ? 'block' : 'hidden'} space-y-4`}>

                            <div className="col-md-12 space-y-4 text-gray-800">
                                <p className="text-justify">
                                    সরকারি সিকিউরিটিজ অথবা সরকার বা বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন কর্তৃক অনুমোদিত
                                    সিকিউরিটিজ ইস্যুর দায়িত্বপ্রাপ্ত কোনো ব্যক্তি ডিসকাউন্ট, সুদ বা মুনাফা পরিশোধ বা ক্রেডিটকালে,
                                    যাহা আগে ঘটে,
                                    <span className="text-red-600 font-medium">
                                        {" "}নিম্নবর্ণিত সারণীতে উল্লিখিত হারে উৎসে কর কর্তন করিয়া সরকারি কোষাগারে জমা প্রদান করিবেন, যথা
                                    </span>
                                </p>

                                <p className="text-center text-red-600 font-bold">সারণী</p>

                                <div className="overflow-x-auto">
                                    <table className="w-full border border-black border-collapse text-sm">
                                        <thead>
                                            <tr className="text-center text-red-600 font-semibold">
                                                <th className="border border-black py-2">ক্রমিক নং</th>
                                                <th className="border border-black py-2">প্রাপকের ধরন</th>
                                                <th className="border border-black py-2">কর কর্তনের হার</th>
                                            </tr>
                                            <tr className="text-center text-red-600">
                                                <th className="border border-black py-1">(১)</th>
                                                <th className="border border-black py-1">(২)</th>
                                                <th className="border border-black py-1">(৩)</th>
                                            </tr>
                                        </thead>

                                        <tbody className="text-red-600">
                                            <tr>
                                                <td className="border border-black text-center py-2">১।</td>
                                                <td className="border border-black py-2 px-2">
                                                    কোম্পানি করদাতার ক্ষেত্রে
                                                </td>
                                                <td className="border border-black py-2 px-2">
                                                    ১৫% (পনেরো শতাংশ)
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black text-center py-2">২।</td>
                                                <td className="border border-black py-2 px-2">
                                                    কোম্পানি ব্যতীত অন্যান্য করদাতার ক্ষেত্রে
                                                </td>
                                                <td className="border border-black py-2 px-2">
                                                    ১০% (দশ শতাংশ)
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="font-bold text-red-600">
                                    নোট: ০৬/১০/২০২৫ ইং তারিখ পর্যন্ত আইনটি ছিলঃ
                                </p>

                                <p className="text-justify">
                                    সরকারি সিকিউরিটিজ অথবা সরকার বা বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন কর্তৃক অনুমোদিত
                                    সিকিউরিটিজ ইস্যুর দায়িত্বপ্রাপ্ত কোনো ব্যক্তি ডিসকাউন্ট, সুদ বা মুনাফা পরিশোধ বা ক্রেডিটকালে,
                                    যাহা আগে ঘটে,
                                    <span className="text-red-600 font-semibold"> ১০% (দশ শতাংশ)</span>
                                    {" "}হারে কর কর্তন করিবেন।
                                </p>

                                <h5 className="font-semibold">মন্তব্য :</h5>

                                <div className="text-red-600 whitespace-pre-line">
                                    ১। সংশোধিত
                                    {"\n"}২। আইনটি ০৬/১০/২০২৫ তারিখে পুনরায় সংশোধন করা হয়েছৈ।
                                </div>
                            </div>

                            <h5 className="font-semibold mt-6">মন্তব্য :</h5>

                            <div className="text-red-600">
                                আলোচ্য করবর্ষে উক্ত আইনটি বিলুপ্ত করা হয়েছে
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <div className="col-md-12 space-y-4 text-gray-800 leading-relaxed">
                                <p>সরকারি সিকিউরিটিজ অথবা সরকার বা বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন কর্তৃক অনুমোদিত সিকিউরিটিজ ইস্যুর দায়িত্বপ্রাপ্ত কোনো ব্যক্তি ডিসকাউন্ট, সুদ বা মুনাফা পরিশোধ বা ক্রেডিটকালে, যাহা আগে ঘটে, ৫% (পাঁচ শতাংশ) হারে কর কর্তন করিবেন।</p>
                            </div>

                        </div>
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

            <div className="mt-6 text-sm">
                <strong>মন্তব্য : </strong>
                <span id="comment">
                    <p>
                        আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে উক্ত আইনটি বিলুপ্ত করা হয়েছে
                    </p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}