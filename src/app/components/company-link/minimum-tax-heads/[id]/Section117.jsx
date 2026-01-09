'use client'

import { useEffect, useState } from "react";

export function Section117() {
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

            <h1 className="my-1 font-bold text-2xl py-1">লভ্যাংশ হইতে কর কর্তন</h1>
            <strong className="text-sm">ধারা : ১১৭</strong>
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

                            <p className="text-justify">বাংলাদেশ নিবন্ধিত কোনো কোম্পানি বা অন্য কোনো কোম্পানির মুখ্য কর্মকর্তা (প্রধান নির্বাহী), কোনো শেয়ারহোল্ডারকে <span className="text-red-600">বা ইউনিট হোল্ডারকে </span>কোনো লভ্যাংশ প্রদানকালে, কোনো নিবাসী বা অনিবাসী বাংলাদেশির ক্ষেত্রে, উক্ত লভ্যাংশ হইতে কর কর্তন করিবেন,-</p>

                            <p className="text-justify">(ক) শেয়ারহোল্ডার <span className="text-red-600">বা ইউনিট হোল্ডার</span> যদি কোনো কোম্পানি হয়, তাহা হইলে কোম্পানির উপর প্রযোজ্য হারে;</p>

                            <p className="text-justify">(খ) শেয়ারহোল্ডার <span className="text-red-600">বা ইউনিট হোল্ডার&nbsp;</span>যদি কোম্পানি ব্যতীত কোনো ব্যক্তি হয়, উক্তরূপ লভ্যাংশ গ্রহণকারী ব্যক্তি করদাতা শনাক্তকরণ নম্বরধারী (টিআইএন) হইলে ১০% (দশ শতাংশ) হারে বা উক্তরূপ লভ্যাংশ গ্রহণকারী ব্যক্তি করদাতা শনাক্তকরণ নম্বরধারী (টিআইএন) না হইলে ১৫% (পনেরো শতাংশ) হারে কর কর্তন করিতে হইবে:</p>

                            <p className="text-justify">তবে শর্ত থাকে যে, এই ধারার বিধান কোনো কোম্পানির কর লভ্যাংশ বিতরণের ক্ষেত্রে প্রযোজ্য হইবেনা, যদি উক্ত কর লভ্যাংশ ষষ্ঠ তফসিলের <a href="/tax-act-section/435">অংশ ১</a> এর দফা ৩২ এর অধীন কর অব্যাহতি প্রাপ্ত হইয়া থাকে।</p>

                            <p className="text-justify">মন্তব্য : </p>
                            <p className="text-red-600">দফা (ক) ও (খ) সংশোধিত</p>

                        </div>
                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p className="text-justify">
                                বাংলাদেশ নিবন্ধিত কোনো কোম্পানি বা অন্য কোনো কোম্পানির মুখ্য কর্মকর্তা (প্রধান নির্বাহী), কোনো শেয়ারহোল্ডারকে কোনো লভ্যাংশ প্রদানকালে, কোনো নিবাসী বা অনিবাসী বাংলাদেশির ক্ষেত্রে, উক্ত লভ্যাংশ হইতে কর কর্তন করিবেন,-
                            </p>

                            <p className="text-justify">
                                (ক) শেয়ারহোল্ডার যদি কোনো কোম্পানি হয়, তাহা হইলে কোম্পানির উপর প্রযোজ্য হারে;
                            </p>

                            <p className="text-justify">
                                (খ) শেয়ারহোল্ডার যদি কোম্পানি ব্যতীত কোনো ব্যক্তি হয়, উক্তরূপ লভ্যাংশ গ্রহণকারী ব্যক্তি করদাতা শনাক্তকরণ নম্বরধারী (টিআইএন) হইলে ১০% (দশ শতাংশ) হারে বা উক্তরূপ লভ্যাংশ গ্রহণকারী ব্যক্তি করদাতা শনাক্তকরণ নম্বরধারী (টিআইএন) না হইলে ১৫% (পনেরো শতাংশ) হারে কর কর্তন করিতে হইবে:
                            </p>

                            <p className="text-justify">
                                তবে শর্ত থাকে যে, এই ধারার বিধান কোনো কোম্পানির কর লভ্যাংশ বিতরণের ক্ষেত্রে প্রযোজ্য হইবেনা, যদি উক্ত কর লভ্যাংশ ষষ্ঠ তফসিলের <a href="" className="text-red-600 hover:underline"> অংশ ১</a>  এর দফা ৩২ এর অধীন কর অব্যাহতি প্রাপ্ত হইয়া থাকে।
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
                        ১। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬)
                    </p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}