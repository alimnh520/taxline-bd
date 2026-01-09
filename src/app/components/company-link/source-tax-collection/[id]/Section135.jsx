'use client'

import { useEffect, useState } from "react";

export function Section135() {
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

            <h1 className="my-1 font-bold text-2xl py-1">সিকিউরিটিজ হস্তান্তর হইতে কর সংগ্রহ</h1>
            <strong className="text-sm">ধারা : ১৩৫</strong>
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

                            <p className="text-justify">(১) স্টক এক্সচেঞ্জ তালিকাভুক্ত কোনো কোম্পানি বা তহবিলের সিকিউরিটিজ হস্তান্তরের জন্য দায়িত্বপ্রাপ্ত কোনো ব্যক্তি সিকিউরিটিজ হস্তান্তরের জন্য দায়িত্বপ্রাপ্ত কোনো ব্যক্তি সিকিউরিটিজ হস্তান্তর করিবেন না, যদি না উক্ত হস্তান্তর কার্যকর করিবার পূর্বে হস্তান্তকারী কর্তৃক নিম্নবর্ণিত নিয়মে কর পরিশোধ করা হইয়া থাকে, যথা:-</p>
                            <p className="text-justify">ক= (খ - গ) <strong>×&nbsp;</strong>১০%, যেখানে,</p>
                            <p className="text-justify">ক= এই ধারার অধীন প্রদেয় করের পরিমাণ;</p>
                            <p className="text-justify">খ= সিকিউরিটিজের হস্তান্তর মূল্য;</p>
                            <p className="text-justify">গ= সিকিউরিটিজের অর্জন মূল্য।</p>
                            <p className="text-justify">(২) এই ধারার উদ্দেশ্যপূরণকল্পে,-</p>
                            <p className="ml-10">(ক) <strong>“সিকিউরিটিজ”</strong> অর্থ কোনো কোম্পানির বা তহবিলের স্পন্সর শেয়ারহোল্ডার, ডিরেক্টর শেয়ারহোল্ডার বা প্লেসমেন্ট শেয়ারহোল্ডার কর্তৃক ধারণকৃত উক্ত কোম্পানি বা তহবিলের সিকিউরিটিজ;</p>
                            <p className="ml-10">(খ) ”<strong>হস্তান্তর</strong>” অর্থ মাতা-পিতা ও সন্তান এবং স্বামী-স্ত্রীর মধ্যকার দান ব্যতীত অন্যান্য সকল প্রকার হস্তান্তর;</p>
                            <p className="ml-10">(গ) ”<strong>হস্তান্তর মূল্য</strong>” অর্থ-</p>
                            <p className="ml-20">(অ) বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন বা স্কট এক্সচেঞ্জ কর্তৃক হস্তান্তরের সম্মতি বা অনুমোদন প্রদানের দিনে সিকিউরিটিজের সমাপনী মূল্য (closing price): বা</p>
                            <p className="ml-20">(আ) বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন বা স্টক এক্সচেঞ্জ কর্তৃক সম্মতি প্রদানের দিনে সিকিউরিটিজের কোনো লেনদেন না হইলে সর্বশেষ যে দিন লেনদেন হইয়াছিল উক্ত দিনে সিকিউরিটিজের সমাপনী মূল্য।</p>
                            <h5>মন্তব্য : </h5>
                            <div className="text-red-600">আলোচ্য করবর্ষে উক্ত আইনটি প্রতিস্থাপন করা হয়েছে।</div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>


                            <p className="text-justify">(১) স্টক এক্সচেঞ্জ তালিকাভুক্ত কোনো কোম্পানি বা তহবিলের সিকিউরিটিজ হস্তান্তরের জন্য দায়িত্বপ্রাপ্ত কোনো ব্যক্তি সিকিউরিটিজ হস্তান্তরের জন্য দায়িত্বপ্রাপ্ত কোনো ব্যক্তি সিকিউরিটিজ হস্তান্তর করিবেন না, যদি না উক্ত হস্তান্তর কার্যকর করিবার পূর্বে হস্তান্তকারী কর্তৃক নিম্নবর্ণিত নিয়মে কর পরিশোধ করা হইয়া থাকে, যথা:-</p>
                            <p className="text-justify">ক= (খ - গ) <strong>×&nbsp;</strong><span className="text-red-600">১৫%,</span> যেখানে,</p>
                            <p className="text-justify">ক= এই ধারার অধীন প্রদেয় করের পরিমাণ;</p>
                            <p className="text-justify">খ= সিকিউরিটিজের হস্তান্তর মূল্য;</p>
                            <p className="text-justify">গ= সিকিউরিটিজের অর্জন মূল্য।</p>
                            <p className="text-justify">(২) এই ধারার উদ্দেশ্যপূরণকল্পে,-</p>
                            <p className="ml-10">(ক) <strong>“সিকিউরিটিজ”</strong> অর্থ কোনো কোম্পানির বা তহবিলের স্পন্সর শেয়ারহোল্ডার, ডিরেক্টর শেয়ারহোল্ডার বা প্লেসমেন্ট শেয়ারহোল্ডার কর্তৃক ধারণকৃত উক্ত কোম্পানি বা তহবিলের সিকিউরিটিজ;</p>
                            <p className="ml-10">(খ) ”<strong>হস্তান্তর</strong>” অর্থ মাতা-পিতা ও সন্তান, <span className="text-red-600">আপন ভাই অথবা আপন বোন </span>এবং স্বামী-স্ত্রীর মধ্যকার দান ব্যতীত অন্যান্য সকল প্রকার হস্তান্তর;</p>
                            <p className="ml-10">(গ) ”<strong>হস্তান্তর মূল্য</strong>” অর্থ-</p>
                            <p className="ml-20">(অ) বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন বা স্কট এক্সচেঞ্জ কর্তৃক হস্তান্তরের সম্মতি বা অনুমোদন প্রদানের দিনে সিকিউরিটিজের সমাপনী মূল্য (closing price): বা</p>
                            <p className="ml-20">(আ) বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন বা স্টক এক্সচেঞ্জ কর্তৃক সম্মতি প্রদানের দিনে সিকিউরিটিজের কোনো লেনদেন না হইলে সর্বশেষ যে দিন লেনদেন হইয়াছিল উক্ত দিনে সিকিউরিটিজের সমাপনী মূল্য।</p>
                            <h5>মন্তব্য : </h5>
                            <div className="text-red-600">শতকরা হার পরিবর্তন করা হয়েছে এবং উপ-ধারা (২খ) এর পর শব্দ সংযোজন করা হয়েছে</div>
                        </div>

                        <div className={`text-justify ${selectedYear === '3' ? 'block' : 'hidden'} space-y-4 pb-10`}>


                            <p className="text-justify"><span>(১) বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন বা, ক্ষেত্রমত, স্টক এক্সচেঞ্জ শেয়ার হস্তান্তর ঘোষণার সময় কোনো স্পন্সর শেয়ারহোল্ডার বা কোনো পরিচালক বা কোনো হোল্ডিং কোম্পানি স্পন্সর বা স্টক এক্সচেঞ্জে তালিকাভুক্ত মিউচুয়াল ফান্ড এর ইউনিট হস্তান্তরের অনুমতি মোতাবেক বা কোনো মিউচুয়াল ফান্ডের স্পন্সর বা ধারক হস্তান্তর মূল্য এবং সিকিউরিটিজ বা মিউচুয়াল ফান্ড ইউনিটের অধিগ্রহণের খরচের মধ্যে পার্থক্যের ৫% (পাঁচ শতাংশ) হারে কর সংগ্রহ করিবেন।</span></p>
                            <p className="text-justify"><span>(২) এই ধারার উদ্দেশ্যপূরণকল্পে-</span></p>
                            <p className="ml-10"><span>(ক) “হস্তান্তর" অর্থে উপহার, দান, উইল বা কোনো অপরিবর্তনীয় ট্রাস্টের অধীন স্থানান্তর অন্তর্ভুক্ত হইবে;</span></p>
                            <p className="ml-10"><span>(খ) কোনো সুরক্ষা বা মিউচুয়াল ফান্ড ইউনিটের "স্থানান্তর মূল্য" সিকিউরিটিজ এবং এক্সচেঞ্জ কমিশন বা স্টক এক্সচেঞ্জ কর্তৃক প্রদত্ত দিনের সম্মতিতে থাকা সিকিউরিটিজ বা মিউচুয়াল ফান্ড ইউনিটের সমাপনী মূল্য হিসাবে গণ্য করা হইবে, অথবা যেখানে এই ধরনের সিকিউরিটিজ বা মিউচুয়াল ফান্ড ইউনিট এইরূপ দিনে বিক্রি করা হয় না যখন সিকিউরিটিজ বা মিউচুয়াল ফান্ড ইউনিটের শেষ বিক্রি হয় উক্ত দিনের সমাপনী মূল্য।</span></p>
                            <p className="ml-10">&nbsp;</p>

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
                        ১। আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে উক্ত আইনটি প্রতিস্থাপন করা হয়েছে।
                    </p>
                    <p className="mt-5">২। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬) </p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}