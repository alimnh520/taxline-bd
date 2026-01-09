'use client'

import { useEffect, useState } from "react";

export function Section128() {
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

            <h1 className="my-1 font-bold text-2xl py-1">সম্পত্তির ইজারা হইতে কর সংগ্রহ</h1>
            <strong className="text-sm">ধারা : ১২৮</strong>
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

                            <p className="text-justify">Registration Act, 1908 (Act No. XVI of 1908) এর অধীন নিবন্ধনের জন্য দায়িত্বপ্রাপ্ত কর্মকর্তা অন্যূন ১০ (দশ) বৎসরের মেয়াদের কোনো স্থাবর সম্পত্তির ইজারা সম্পর্কিত কোনো দলিল নিবন্ধন করিবেন না, যদি না উক্তরূপ সম্পত্তির ইজারা মূল্যের উপর ৪% (চার শতাংশ) হারে <span className="text-red-600">ইজারাদার কর্তৃক </span>কর পরিশোধ করা হয়।</p>
                            <h5>মন্তব্য : </h5>
                            <div className="text-red-600">আলোচ্য করবর্ষে উক্ত আইনের শব্দের সংশোধন করা হয়েছে।</div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>


                            <p className="text-justify">Registration Act, 1908 (Act No. XVI of 1908) এর অধীন নিবন্ধনের জন্য দায়িত্বপ্রাপ্ত কর্মকর্তা অন্যূন ১০ (দশ) বৎসরের মেয়াদের কোনো স্থাবর সম্পত্তির ইজারা সম্পর্কিত কোনো দলিল নিবন্ধন করিবেন না, যদি না উক্তরূপ সম্পত্তির ইজারা মূল্যের উপর ৪% (চার শতাংশ) হারে <span className="text-red-600">ইজারাদাতা <span className="text-red-600">কর্তৃক </span></span>কর পরিশোধ করা হয়:</p>
                            <p className="text-justify ml-10">তবে শর্ত থাকে যে, যেইক্ষেত্রে কোনো আয়বর্ষে এই ধারার অধীন উৎসে কর কর্তনযোগ্য প্রাপক বা প্রাপকের আয় করমুক্ত বা হ্রাসকৃত হারে করারোপযোগ্য, সেইক্ষেত্রে বোর্ড, সেইরূপ কোনো প্রাপকের আবেদনের ভিত্তিতে, এই মর্মে সনদ প্রদান করিবে যে উক্ত ব্যক্তিকে প্রদেয় কোনো অর্থ, যাহা এই ধারার অধীন কর কর্তনযোগ্য, কর কর্তন ব্যতিরেকে বা হ্রাসকৃত হারে কর্তন করিয়া পরিশোধ করা যাইবে।</p>
                            <h5>মন্তব্য : </h5>
                            <div className="text-red-600">শব্দের সংশোধন ও শর্ত যোগ করা হয়েছে</div>

                        </div>

                        <div className={`text-justify ${selectedYear === '3' ? 'block' : 'hidden'} space-y-4 pb-10`}>

                            <p className="text-justify">
                                Registration Act, 1908 (Act No. XVI of 1908) এর অধীন নিবন্ধনের জন্য দায়িত্বপ্রাপ্ত কর্মকর্তা অন্যূন ১০ (দশ) বৎসরের মেয়াদের কোনো স্থাবর সম্পত্তির ইজারা সম্পর্কিত কোনো দলিল নিবন্ধন করিবেন না, যদি না উক্তরূপ সম্পত্তির ইজারা মূল্যের উপর ৪% (চার শতাংশ) হারে কর পরিশোধ করা হয়।
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
                        ১। আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে উক্ত আইনের শব্দের সংশোধন করা হয়েছে।
                    </p>
                    <p className="mt-5">২। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬) </p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}