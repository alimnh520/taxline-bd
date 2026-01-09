'use client'

import { useEffect, useState } from "react";

export function Section104() {
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
            option.text = selectedYear === '1' ? '২০২৬ - ২০২৫' : '২০২৩ - ২০২৪';
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

            <h1 className="my-1 font-bold text-2xl py-1">নিবাসীর সুদ আয় হইতে কর কর্তন</h1>
            <strong className="text-sm">ধারা : ১০৪</strong>
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
                                <p className="text-red-600">(১) যেইক্ষেত্রে কোনো নির্দিষ্ট ব্যক্তি ব্যাংক বা ফাইন্যান্স কোম্পানি ব্যতীত অন্য কোনো ব্যক্তিকে কোনো ঋণ বা ঋণ গ্রহণের বিপরীতে সুদ বা মুনাফা পরিশোধ করেন, সেইক্ষেত্রে উক্ত সুদ বা মুনাফা পরিশোধকালে উক্ত নির্দিষ্ট ব্যক্তি পরিশোধিত সুদ বা মুনাফার উপর ১০% (দশ শতাংশ) হারে কর কর্তন করিবেন।</p>

                                <p >(২) বোর্ড করদাতার আবেদনের প্রেক্ষিতে যাচাই সাপেক্ষে, এই মর্মে লিখিত সার্টিফিকেট প্রদান করিতে পারিবে যে, এই <span className="text-red-600">ধারার </span>অধীন করদাতার প্রাপ্য অর্থের উপর কর কর্তন প্রযোজ্য হইবে না বা হ্রাসকৃত হারে কর কর্তন প্রযোজ্য হইবে।</p>
                            </div>

                            <h5 className="font-semibold mt-6">মন্তব্য :</h5>

                            <div className="text-red-600">
                                উপ-ধারা (১) প্রতিস্থাপন করা হয়েছে এবং উপ-ধারা (২) সংশোধন করা হয়েছে
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <div className="col-md-12 space-y-4 text-gray-800 leading-relaxed">
                                <p>(১) যেইক্ষেত্রে কোনো নির্ধারিত ব্যক্তি ব্যাংক বা আর্থিক প্রতিষ্ঠান ব্যতীত অন্য কোনো ব্যক্তিকে কোনো ঋণ বা ঋণ গ্রহণের বিপরীতে সুদ পরিশোধ করেন, সেইক্ষেত্রে উক্ত সুদ পরিশোধকালে পরিশোধিত সুদের উপর ১০% (দশ শতাংশ) হারে কর কর্তন করিবেন।</p>

                                <p>(২) বোর্ড করদাতার আবেদনের প্রেক্ষিতে যাচাই সাপেক্ষে, এই মর্মে লিখিত সার্টিফিকেট প্রদান করিতে পারিবে যে, এই ধারা অধীন করদাতার প্রাপ্য অর্থের উপর কর কর্তন প্রযোজ্য হইবে না বা হ্রাসকৃত হারে কর কর্তন প্রযোজ্য হইবে।</p>
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