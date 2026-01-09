'use client'

import { useEffect, useState } from "react";

export function Section134() {
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

            <h1 className="my-1 font-bold text-2xl py-1">শেয়ার হস্তান্তর হইতে কর সংগ্রহ</h1>
            <strong className="text-sm">ধারা : ১৩৪</strong>
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

                            <p className="text-justify">নিবাসী কোনো ব্যক্তি হইতে অপর কোনো ব্যক্তির নিকট তালিকাভুক্ত নহে এইরূপ কোনো কোম্পানির শেয়ার হস্তান্তর নিবন্ধনের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি উক্তরূপ হস্তান্তর নিবন্ধন করিবেন না, যদি না হস্তান্তরকারী নিবাসী ব্যক্তি হস্তান্তরিত শেয়ারের অভিহিত মূল্য এবং ন্যায্য মূল্যের&nbsp; উপর ১৫% (পনেরো শতাংশ) হারে কর জমা প্রদানের চালান নিবন্ধনের আবেদনের সহিত সংযুক্ত করেন।</p>
                            <p className="text-justify"><strong>ব্যাখ্যা:</strong> এই ধারার উদ্দেশ্যেপূরণকল্পে,-</p>
                            <p className="text-justify">(ক)<strong> “অভিহিত মূল্য”</strong> অর্থ ইস্যুকারী কর্তৃক নির্ধারিত মূল্য এবং অতিরিক্ত কোনো অর্থ ইহার অন্তর্ভুক্ত হইবে যদি উহা-</p>
                            <p className="ml-10">(অ) ব্যাংক ট্রান্সফারের মাধ্যমে সম্পন্ন করা হয়; এবং</p>
                            <p className="ml-10">(আ) করদাতার আয়কর রিটার্নে যথাযথভাবে প্রদর্শিত হয়;</p>
                            <p className="text-justify">(খ)<strong> “ন্যায্য মূল্য” </strong>অর্থ শেয়ার হস্তান্তরের পূর্বে কৃত মূল্যায়ন প্রতিবেদনে (valuation report) পেশাদার মূল্যায়নকারী (Professional valuer) দ্বারা নির্ধারিত ন্যায্য মূল্য;</p>
                            <p className="text-justify"><span className="text-red-600">(গ) <strong>“পেশাদার মূল্যায়নকারী (Professional valuer)”</strong> বলিতে বাংলাদেশ ব্যাংক বা বাংলাদেশ সিকিউরিটিজ এন্ড এক্সচেঞ্জ কমিশন কর্তৃক স্বীকৃত কোনো পেশাদার মূল্যায়নকারীকে বুঝাইবে।</span></p>
                            <h5>মন্তব্য : </h5>
                            <div className="text-red-600">আলোচ্য করবর্ষে উক্ত আইনের ব্যাখ্যার (গ) প্রতিস্থাপন করা হয়েছে।</div>
                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p className="text-justify"><span>নিবাসী কোনো ব্যক্তি হইতে অপর কোনো ব্যক্তির নিকট তালিকাভুক্ত নহে এইরূপ কোনো কোম্পানির শেয়ার হস্তান্তর নিবন্ধনের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি উক্তরূপ হস্তান্তর নিবন্ধন করিবেন না, যদি না হস্তান্তরকারী নিবাসী ব্যক্তি হস্তান্তরিত শেয়ারের অভিহিত মূল্য এবং ন্যায্য মূল্যের <span className="text-red-600">পার্থক্যের </span>উপর ১৫% (পনেরো শতাংশ) হারে কর জমা প্রদানের চালান নিবন্ধনের আবেদনের সহিত সংযুক্ত করেন।</span></p>
                            <p className="text-justify"><span><strong>ব্যাখ্যা:</strong> এই ধারার উদ্দেশ্যেপূরণকল্পে,-</span></p>
                            <p className="text-justify"><span>(ক)<strong> “অভিহিত মূল্য”</strong> অর্থ ইস্যুকারী কর্তৃক নির্ধারিত মূল্য এবং অতিরিক্ত কোনো অর্থ ইহার অন্তর্ভুক্ত হইবে যদি উহা-</span></p>
                            <p className="ml-10"><span>(অ) ব্যাংক ট্রান্সফারের মাধ্যমে সম্পন্ন করা হয়; এবং</span></p>
                            <p className="ml-10"><span>(আ) করদাতার আয়কর রিটার্নে যথাযথভাবে প্রদর্শিত হয়;</span></p>
                            <p className="text-justify"><span>(খ)<strong> “ন্যায্য মূল্য” </strong>অর্থ শেয়ার হস্তান্তরের পূর্বে কৃত মূল্যায়ন প্রতিবেদনে (valuation report) পেশাদার মূল্যায়নকারী (Professional valuer) দ্বারা নির্ধারিত ন্যায্য মূল্য;</span></p>
                            <p className="text-justify"><span>(গ) <strong>“পেশাদার মূল্যায়নকারী (Professional valuer)”</strong> বলিতে বাংলাদেশ ব্যাংক বা বাংলাদেশ সিকিউরিটিজ এন্ড এক্সচেঞ্জ কমিশন কর্তৃক স্বীকৃত কোনো পেশাদার মূল্যায়নকারীকে বুঝাইবে।</span></p>
                            <h5>মন্তব্য : </h5>
                            <div className="text-red-600">শব্দ সংযোজন করা হয়েছে</div>

                        </div>

                        <div className={`text-justify ${selectedYear === '3' ? 'block' : 'hidden'} space-y-4 pb-10`}>


                            <p className="text-justify">নিবাসী কোনো ব্যক্তি হইতে অপর কোনো ব্যক্তির নিকট তালিকাভুক্ত নহে এইরূপ কোনো কোম্পানির শেয়ার হস্তান্তর নিবন্ধনের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি উক্তরূপ হস্তান্তর নিবন্ধন করিবেন না, যদি না হস্তান্তরকারী নিবাসী ব্যক্তি হস্তান্তরিত শেয়ারের অভিহিত মূল্য এবং ন্যায্য মূল্যের&nbsp; উপর ১৫% (পনেরো শতাংশ) হারে কর জমা প্রদানের চালান নিবন্ধনের আবেদনের সহিত সংযুক্ত করেন।</p>
                            <p className="text-justify"><strong>ব্যাখ্যা:</strong> এই ধারার উদ্দেশ্যেপূরণকল্পে,-</p>
                            <p className="text-justify">(ক)<strong> “অভিহিত মূল্য”</strong> অর্থ ইস্যুকারী কর্তৃক নির্ধারিত মূল্য এবং অতিরিক্ত কোনো অর্থ ইহার অন্তর্ভুক্ত হইবে যদি উহা-</p>
                            <p className="ml-10">(অ) ব্যাংক ট্রান্সফারের মাধ্যমে সম্পন্ন করা হয়; এবং</p>
                            <p className="ml-10">(আ) করদাতার আয়কর রিটার্নে যথাযথভাবে প্রদর্শিত হয়;</p>
                            <p className="text-justify">(খ)<strong> “ন্যায্য মূল্য” </strong>অর্থ শেয়ার হস্তান্তরের পূর্বে কৃত মূল্যায়ন প্রতিবেদনে (valuation report) পেশাদার মূল্যায়নকারী (Professional valuer) দ্বারা নির্ধারিত ন্যায্য মূল্য;</p>
                            <p className="text-justify"><span >(গ) <strong>“পেশাদার মূল্যায়নকারী (Professional valuer)”</strong> বলিতে বাংলাদেশ ব্যাংক কর্তৃক স্বীকৃত কোনো পেশাদার মূল্যায়নকারীকে বুঝাইবে।</span></p>
                            <p className="text-justify">&nbsp;</p>

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
                        ১। আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে উক্ত আইনের ব্যাখ্যার (গ) প্রতিস্থাপন করা হয়েছে।
                    </p>
                    <p className="mt-5">২। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬) </p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}