'use client'

import { useEffect, useState } from "react";

export function Section98() {
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

            <h1 className="my-1 font-bold text-2xl py-1">সেলুলার মোবাইল ফোন অপারেটর, টাওয়ার শেয়ারিং কোম্পানি ইত্যাদি কর্তৃক পরিশোধিত অর্থের উপর কর কর্তন</h1>
            <strong className="text-sm">ধারা : ৯৮</strong>
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
                                <span className="text-red-600"><strong>সেলুলার মোবাইল ফোন অপারেটর কর্তৃক পরিশোধিত অর্থের উপর কর কর্তন -</strong>এটি শিরোনাম ছিল ২০২৪-২০২৫ করবর্ষ পর্যন্ত</span>
                            </p>

                            <p>কোনো সেলুলার মোবাইল ফোন অপারেটর কোম্পানির প্রধান নির্বাহী কোনো আয় বন্টন বা কোনো লাইসেন্স ফি বা অন্য কোনো ফি বা চার্জ, যে নামেই অভিহিত করা হউক না কেন, বাবদ নিয়ন্ত্রক কর্তৃপক্ষকে জমা বা অর্থ পরিশোধকালে, যাহা আগে ঘটে, উক্ত পরিমাণ <span className="text-red-600">অর্থের ২০% (বিশ শতাংশ) হারে </span>কর কর্তন করিবেন।</p>

                            <h5 className="font-semibold mt-6">মন্তব্য :</h5>

                            <div className="text-red-600">আলোচ্য করবর্ষে উক্ত ধারার কর কর্তনের হার ১০% হতে পরিবর্তন করে ২০% হারে পরিবর্তন করা হয়েছে</div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p>কোনো সেলুলার মোবাইল ফোন অপারেটর, টাওয়ার শেয়ারিং কোম্পানি ইত্যাদি কোম্পানির প্রধান নির্বাহী কোনো আয় বন্টন বা কোনো লাইসেন্স ফি বা অন্য কোনো ফি বা চার্জ, যে নামেই অভিহিত করা হউক না কেন, বাবদ নিয়ন্ত্রক কর্তৃপক্ষকে জমা বা অর্থ পরিশোধকালে, যাহা আগে ঘটে, উক্ত পরিমাণ <span className="text-red-600">অর্থের ২০% (বিশ শতাংশ) হারে </span>কর কর্তন করিবেন।</p>

                            <h5 className="font-semibold mt-6">মন্তব্য :</h5>

                            <div className="text-red-600">
                                আইনের শিরোনাম ও অভ্যন্তরীণ সংশোধন করা হয়েছে।
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '3' ? 'block' : 'hidden'} space-y-4`}>

                            <p><span className="text-red-600"><strong>সেলুলার মোবাইল ফোন অপারেটর কর্তৃক পরিশোধিত অর্থের উপর কর কর্তন -</strong>এটি শিরোনাম ছিল ২০২৪-২০২৫ করবর্ষ পর্যন্ত</span></p>

                            <p>কোনো সেলুলার মোবাইল ফোন অপারেটর কোম্পানির প্রধান নির্বাহী কোনো আয় বন্টন বা কোনো লাইসেন্স ফি বা অন্য কোনো ফি বা চার্জ, যে নামেই অভিহিত করা হউক না কেন, বাবদ নিয়ন্ত্রক কর্তৃপক্ষকে জমা বা অর্থ পরিশোধকালে, যাহা আগে ঘটে, উক্ত পরিমাণ অর্থের<span className="text-red-600">&nbsp;১০% (দশ শতাংশ)&nbsp;</span>হারে কর কর্তন করিবেন।</p>

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
                        ১। আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে উক্ত ধারার কর কর্তনের হার ১০% হতে পরিবর্তন করে ২০% হারে পরিবর্তন করা হয়েছে
                    </p>
                    <p className="mt-5">২। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬)</p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}