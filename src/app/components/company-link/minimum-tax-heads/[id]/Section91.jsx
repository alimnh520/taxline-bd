'use client'

import { useEffect, useState } from "react";

export function Section91() {
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

            <h1 className="my-1 font-bold text-2xl py-1">স্পর্শাতীত সম্পত্তির জন্য পরিশোধিত অর্থ হইতে কর্তন </h1>
            <strong className="text-sm">ধারা : ৯১</strong>
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

                            <p>
                                রয়্যালটি, ফ্র্যাঞ্চাইজ বা লাইসেন্স, ট্রেডমার্ক, পেটেন্ট, কপিরাইট, শিল্প নকশা, উদ্ভিদের জাত, ভৌগলিক নির্দেশক পণ্য বা মেধাসত্ত্ব সংক্রান্ত অন্য কোনো সম্পত্তি অথবা অভৌত বা অমূর্ত বা নিরাকার বিষয়ের জন্য অর্থ পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি, উক্ত অর্থ প্রদান বা ক্রেডিটের সময় <span className="text-red-600">ভিত্তিমূল্যের উপর ১০% (দশ শতাংশ) হারে কর কর্তন করিবেন।</span>
                            </p>

                            <h5 className="font-semibold mt-6">মন্তব্য :</h5>

                            <div className="text-red-600">
                                আইনের বক্তব্য সংশোধন করা হয়েছে এবং সারণী বিলুপ্ত করা হয়েছে।
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p className="text-justify mb-4">
                                রয়্যালটি, ফ্র্যাঞ্চাইজ বা লাইসেন্স, ট্রেডমার্ক, পেটেন্ট, কপিরাইট,
                                শিল্প নকশা, উদ্ভিদের জাত, ভৌগলিক নির্দেশক পণ্য বা মেধাসত্ত্ব সংক্রান্ত
                                অন্য কোনো সম্পত্তি অথবা অভৌত বা অমূর্ত বা নিরাকার বিষয়ের জন্য অর্থ
                                পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি, উক্ত অর্থ প্রদান বা ক্রেডিটের সময়
                                নিম্নবর্ণিত সারণীতে উল্লিখিত হারে কর কর্তন করিবেন, যথা:-
                            </p>

                            <p className="font-semibold mb-2">সারণী</p>

                            {/* Table Wrapper for Mobile Scroll */}
                            <div className="overflow-x-auto">
                                <table className="w-full border border-gray-300 text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2 text-left">
                                                পরিশোধের বর্ণনা
                                            </th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">
                                                কর কর্তনের হার
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2 text-justify">
                                                (১)
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2 text-justify">
                                                (২)
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2 text-justify">
                                                ভিত্তিমূল্যের পরিমাণ ২৫ (পঁচিশ) লক্ষ টাকা অতিক্রম না করিলে
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                                                ১০% (দশ শতাংশ)
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2 text-justify">
                                                ভিত্তিমূল্যের পরিমাণ ২৫ (পঁচিশ) লক্ষ টাকা অতিক্রম করিলে
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2 font-semibold">
                                                ১২% (বার শতাংশ)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
                        ১। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬)
                    </p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}