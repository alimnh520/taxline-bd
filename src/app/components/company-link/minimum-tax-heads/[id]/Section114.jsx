'use client'

import { useEffect, useState } from "react";

export function Section114() {
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
            option.text = selectedYear === '1' ? '২০২৪ - ২০২৫' : selectedYear === '2' ? '২০২৫ - ২০২৬' : '২০২৩ - ২০২৪';
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

            <h1 className="my-1 font-bold text-2xl py-1">বিদ্যুৎ ক্রয়ের বিপরীতে কর কর্তন </h1>
            <strong className="text-sm">ধারা : ১১৪</strong>
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
                                <option value="1">২০২৪ - ২০২৫</option>
                                <option value="2">২০২৫ - ২০২৬</option>
                                <option value="3">২০২৩ - ২০২৪ </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 mt-6 text-sm">
                    <div className="w-full">

                        <div className={`text-justify ${selectedYear === '1' ? 'block' : 'hidden'} space-y-4`}>

                            <p>
                                (১) এই আইনে যাহা কিছুই থাকুক না কেন, বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড বা বিদ্যুৎ বিতরণে নিয়োজিত অন্য কোনো ব্যক্তি <span className="text-red-600">অথবা ক্যাপটিভ বিদ্যুৎ উৎপাদনকারী হইতে বিদ্যুৎ ক্রয় করেন এইরূপ কোন নির্দিষ্ট ব্যক্তি</span>, বিদ্যুৎ ক্রয়ের অর্থ পরিশোধকালে প্রদেয় অর্থের ৬% (ছয় শতাংশ) হারে কর সংগ্রহ, কর্তন বা পরিশোধ করিবে।
                            </p>

                            <p>
                                (২) যেইক্ষেত্রে কোনো ব্যক্তির বিদ্যুৎ উৎপাদন হইতে কোনো আয়বর্ষের আয় এই আইনের কোনো বিধানের অধীন কর অব্যাহতি প্রাপ্ত, সেইক্ষেত্রে করদাতার আবেদনের প্রেক্ষিতে, বোর্ড, উক্ত আয়বর্ষের আয় কোনোরূপ সংগ্রহ বা কর্তন ব্যতীত অথবা আনুপাতিকভাবে হ্রাসকৃত হারে সংগ্রহ বা কর্তন প্রযোজ্য হইবে মর্মে প্রত্যয়ন করিতে পারিবে।
                            </p>

                            <h5 className="font-semibold mt-6">মন্তব্য :</h5>

                            <div className="text-red-600">
                                আলোচ্য করবর্ষে উক্ত আইনটির শব্দের সংশোধন করা হয়েছে
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p className="text-justify">
                                (১) এই আইনে যাহা কিছুই থাকুক না কেন, বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড বা বিদ্যুৎ বিতরণে নিয়োজিত অন্য কোনো ব্যক্তি অথবা ক্যাপটিভ বিদ্যুৎ উৎপাদনকারী হইতে বিদ্যুৎ ক্রয় করেন এইরূপ কোন নির্দিষ্ট ব্যক্তি, বিদ্যুৎ ক্রয়ের অর্থ পরিশোধকালে প্রদেয় অর্থের <span className="text-red-600">৪% (চার শতাংশ) </span>হারে কর সংগ্রহ, কর্তন বা পরিশোধ করিবে।
                            </p>

                            <p className="text-justify">
                                (২) যেইক্ষেত্রে কোনো ব্যক্তির বিদ্যুৎ উৎপাদন হইতে কোনো আয়বর্ষের আয় এই আইনের কোনো বিধানের অধীন কর অব্যাহতি প্রাপ্ত, সেইক্ষেত্রে করদাতার আবেদনের প্রেক্ষিতে, বোর্ড, উক্ত আয়বর্ষের আয় কোনোরূপ সংগ্রহ বা কর্তন ব্যতীত অথবা আনুপাতিকভাবে হ্রাসকৃত হারে সংগ্রহ বা কর্তন প্রযোজ্য হইবে মর্মে প্রত্যয়ন করিতে পারিবে।
                            </p>

                            <h5 className="font-semibold mt-6">মন্তব্য :</h5>

                            <div className="text-red-600">সংশোধিত</div>

                        </div>

                        <div className={`text-justify ${selectedYear === '3' ? 'block' : 'hidden'} space-y-4 pb-10`}>

                            <p className="text-justify">
                                (১) এই আইনে যাহা কিছুই থাকুক না কেন, বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড বা বিদ্যুৎ বিতরণে নিয়োজিত অন্য কোনো ব্যক্তি , বিদ্যুৎ ক্রয়ের অর্থ পরিশোধকালে প্রদেয় অর্থের ৬% (ছয় শতাংশ) হারে কর সংগ্রহ, কর্তন বা পরিশোধ করিবে।
                            </p>

                            <p className="text-justify">
                                (২) যেইক্ষেত্রে কোনো ব্যক্তির বিদ্যুৎ উৎপাদন হইতে কোনো আয়বর্ষের আয় এই আইনের কোনো বিধানের অধীন কর অব্যাহতি প্রাপ্ত, সেইক্ষেত্রে করদাতার আবেদনের প্রেক্ষিতে, বোর্ড, উক্ত আয়বর্ষের আয় কোনোরূপ সংগ্রহ বা কর্তন ব্যতীত অথবা আনুপাতিকভাবে হ্রাসকৃত হারে সংগ্রহ বা কর্তন প্রযোজ্য হইবে মর্মে প্রত্যয়ন করিতে পারিবে।
                            </p>

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
                        ১। আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে উক্ত আইনটির শব্দের সংশোধন করা হয়েছে।
                    </p>
                    <p className="mt-5">২। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬)</p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}