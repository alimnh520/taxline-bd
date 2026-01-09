'use client'

import { useEffect, useState } from "react";

export function Section136() {
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

            <h1 className="my-1 font-bold text-2xl py-1">স্টক এক্সচেঞ্জের শেয়ারহোল্ডারদের শেয়ার স্থানান্তর হইতে কর সংগ্রহ</h1>
            <strong className="text-sm">ধারা : ১৩৬</strong>
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

                            <p className="text-justify"><span className="text-red-600">(১) স্টক এক্সচেঞ্জের প্রধান নির্বাহী কর্মকর্তা এক্সচেঞ্জস ডিমিউচুয়ালাইজেশন আইন, ২০১৩ (২০১৩ সনের ১৫ নং আইন) এর অধীন প্রতিষ্ঠিত স্টক এক্সচেঞ্জের শেয়ারহোল্ডারের শেয়ার হস্তান্তর হইতে উদ্ভূত কোনো লাভ বা মুনাফার উপর উক্ত শেয়ার হস্তান্তরকালে বা হস্তান্তরের ঘোষণা প্রদানকালে বা উক্তরূপ হস্তান্তরের সম্মতি প্রদানকালে, যাহা আগে ঘটে, ১৫% (পনেরো শতাংশ) হারে কর কর্তন করিবেন।</span></p>
                            <p className="text-justify">(২) উপ-ধারা (১) এর অধীন <span className="text-red-600">লাভ বা মুনাফা</span> গণনার উদ্দেশ্যে এক্সচেঞ্জস ডিমিউচুয়ালাইজেশন আইন, ২০১৩ (২০১৩ সনের ১৫নং আইন) কার্যকর হইবার পূর্বের শেয়ারের অর্জন মূল্যকে উক্ত শেয়ারের অর্জন মূল্য হিসাবে গ্রহণ করা হইবে।</p>
                            <h5>মন্তব্য : </h5>
                            <div className="text-red-600">উপ-ধারা (১) প্রতিস্থাপন করা হয়েছে এবং উপ-ধারা (২) সংশোধন করা হয়েছে</div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p className="text-justify">(১) স্টক এক্সচেঞ্জের প্রধান নির্বাহী কর্মকর্তা এক্সচেঞ্জস ডিমিউচুয়ালাইজেশন আইন, ২০১৩ (২০১৩ সনের ১৫ নং আইন) এর অধীন প্রতিষ্ঠিত স্টক এক্সচেঞ্জের শেয়ারহোল্ডারের শেয়ার হস্তান্তর হইতে উদ্ভূত কোনো লভ্যাংশ এবং প্রাপ্তির উপর শেয়ার হস্তান্তর, শেয়ার ঘোষণা বা উক্ত শেয়ার বিনিময় করিবার সময়, যাহা আগে ঘটে, ১৫% (পনেরো শতাংশ) হারে কর কর্তন করিবেন।</p>
                            <p className="text-justify">(২) উপ-ধারা (১) এর অধীন শেয়ারের লভ্যাংশ এবং প্রাপ্তি গণনার উদ্দেশ্যে এক্সচেঞ্জস ডিমিউচুয়ালাইজেশন আইন, ২০১৩ (২০১৩ সনের ১৫নং আইন) কার্যকর হইবার পূর্বের শেয়ারের অর্জন মূল্যকে উক্ত শেয়ারের অর্জন মূল্য হিসাবে গ্রহণ করা হইবে।</p>
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