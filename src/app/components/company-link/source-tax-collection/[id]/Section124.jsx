'use client'

import { useEffect, useState } from "react";

export function Section124() {
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

            <h1 className="my-1 font-bold text-2xl py-1">কোনো সেবা, রেভিনিউ শেয়ারিং, ইত্যাদি বাবদ বিদেশ হইতে প্রেরিত আয় হইতে কর কর্তন</h1>
            <strong className="text-sm">ধারা : ১২৪</strong>
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

                            <p className="text-justify mb-3">
                                ফি, সেবা চার্জ বা পারিশ্রমিক, তাহা যে নামেই অভিহিত হউক না কেন, বা যেকোনো নামে বা প্রকৃতির রেভিনিউ শেয়ারিং এর মাধ্যমে নিম্নবর্ণিত কাজের বিনিময়ে বিদেশ হইতে প্রেরিত অর্থ কোনো ব্যক্তির হিসাবে পরিশোধ বা জমা প্রদানের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি প্রাপকের হিসাবে অর্থ পরিশোধ বা জমা প্রদানকালে উক্ত পরিশোধিত বা জমাকৃত অর্থের উপর{" "}
                                <span className="text-red-600">৭.৫% (সাত দশমিক পাঁচ শতাংশ)</span> হারে কর কর্তন করিবেন, যথা:-
                            </p>

                            <p className="pl-10 text-justify mb-1">(ক) বাংলাদেশে প্রদত্ত কোনো সেবার জন্য;</p>
                            <p className="pl-10 text-justify mb-1">(খ) কোনো নিবাসী ব্যক্তি কর্তৃক কোনো বিদেশি ব্যক্তিকে পরিষেবা প্রদান বা কোনো কাজের জন্য;</p>
                            <p className="pl-10 text-justify mb-3">(গ) বিজ্ঞাপন বা অন্য কোনো উদ্দেশ্যে কোনো অনলাইন প্লাটফর্ম ব্যবহারের অনুমতি প্রদানের জন্য:</p>

                            <p className="text-justify mb-3">তবে শর্ত থাকে যে,-</p>

                            <p className="text-justify text-red-600 mb-1">(১) ফ্রেইট ফরওয়ার্ড এজেন্ট কর্তৃক গৃহীত অর্থঃ</p>
                            <p className="pl-10 text-red-600 text-justify mb-1">(অ) যদি শুধু কমিশণ হয় উক্ত কমিশনের উপর ১০% (দশ শতাংশ) হারে কর সংগ্রহ করিতে হইবে;</p>
                            <p className="pl-10 text-red-600 text-justify mb-3">(খ) যদি গ্রস বিল বা কমিশনসহ গ্রস বিল হয় উক্ত বিলের উপর ২.৫% (দুই দশমিক পাঁচ শতাংশ) হারে কর সংগ্রহ করিতে হইবে;</p>

                            <p className="text-red-600 text-justify mb-1">(২) বিদেশ হইতে প্রেরিত নিম্নবর্ণিত অর্থের বিপরীতে কোনো কর্তন করা যাইবে না, যথা:-</p>
                            <p className="pl-10 text-red-600 text-justify mb-1">(অ) ষষ্ঠ তফসিলের অংশ ১ এর দফা (১২), (১৭), (২১) ও (৩৩) দ্বারা মোট আয় বহির্ভূত অর্থ;</p>
                            <p className="pl-10 text-red-600 text-justify mb-3">(আ) কোনো শিক্ষা বা গবেষণা প্রতিষ্ঠান কর্তৃক গৃহীত কোনো দান বা অনুদান হয়।</p>

                            <h5 className="mb-1 font-semibold">মন্তব্য :</h5>
                            <div className="text-red-600 mb-4">
                                আলোচ্য করবর্ষে উক্ত আইনের শতকরা হার ১০% হতে ৭.৫% হারে পরিবর্তন করা হয়েছে এবং শর্তাংশ (১) ও শর্তাংশ (২) প্রতিস্থাপন করা হয়েছে
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p className="text-justify mb-3">
                                ফি, সেবা চার্জ বা পারিশ্রমিক{" "}
                                <span className="text-red-600">বা প্রাপ্তি,</span> তাহা যে নামেই অভিহিত হউক না কেন, বা যেকোনো নামে বা প্রকৃতির রেভিনিউ শেয়ারিং এর মাধ্যমে নিম্নবর্ণিত কাজের বিনিময়ে বিদেশ হইতে প্রেরিত অর্থ কোনো ব্যক্তির হিসাবে পরিশোধ বা জমা প্রদানের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি প্রাপকের হিসাবে অর্থ পরিশোধ বা জমা প্রদানকালে উক্ত পরিশোধিত বা জমাকৃত অর্থের উপর ৭.৫% (সাত দশমিক পাঁচ শতাংশ) হারে কর কর্তন করিবেন, যথা:-
                            </p>

                            <p className="pl-10 text-justify mb-1">(ক) বাংলাদেশে প্রদত্ত কোনো সেবার জন্য;</p>
                            <p className="pl-10 text-justify mb-1">
                                (খ) কোনো নিবাসী ব্যক্তি কর্তৃক কোনো বিদেশি ব্যক্তিকে পরিষেবা প্রদান
                                <span className="text-red-600">, কোনো সম্পত্তি ভাড়া প্রদান</span> বা কোনো কাজের জন্য;
                            </p>
                            <p className="pl-10 text-justify mb-3">(গ) বিজ্ঞাপন বা অন্য কোনো উদ্দেশ্যে কোনো অনলাইন প্লাটফর্ম ব্যবহারের অনুমতি প্রদানের জন্য:</p>

                            <p className="text-justify mb-3">তবে শর্ত থাকে যে,-</p>

                            <p className="text-red-600 text-justify mb-3">
                                (১) ফ্রেইট ফরওয়ার্ড এজেন্ট কর্তৃক গৃহীত গ্রস বিল বা কমিশনসহ গ্রস বিলে বিলের উপর ১.৫% (এক দশমিক পাঁচ শতাংশ) হারে সংগ্রহ করিতে হইবে।
                            </p>

                            <p className="text-justify mb-3">(২) বিদেশ হইতে প্রেরিত নিম্নবর্ণিত অর্থের বিপরীতে কোনো কর্তন করা যাইবে না, যথা:-</p>
                            <p className="pl-10 text-justify mb-1">(অ) ষষ্ঠ তফসিলের অংশ ১ এর দফা (১২), (১৭), (২১) ও (৩৩) দ্বারা মোট আয় বহির্ভূত অর্থ;</p>
                            <p className="pl-10 text-justify mb-3">(আ) কোনো শিক্ষা বা গবেষণা প্রতিষ্ঠান কর্তৃক গৃহীত কোনো দান বা অনুদান হয়।</p>

                            <h5 className="mb-1 font-semibold">মন্তব্য :</h5>
                            <div className="text-red-600 mb-4">
                                আইনের ভেতরের অংশ, দফা(খ) সংশোধন করা হয়েছে এবং শর্তাশ (১) প্রতিস্থাপন করা হয়েছে।
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '3' ? 'block' : 'hidden'} space-y-4 pb-10`}>

                            <p className="text-justify mb-3">
                                ফি, সেবা চার্জ বা পারিশ্রমিক, তাহা যে নামেই অভিহিত হউক না কেন, বা যেকোনো নামে বা প্রকৃতির রেভিনিউ শেয়ারিং এর মাধ্যমে নিম্নবর্ণিত কাজের বিনিময়ে বিদেশ হইতে প্রেরিত অর্থ কোনো ব্যক্তির হিসাবে পরিশোধ বা জমা প্রদানের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি প্রাপকের হিসাবে অর্থ পরিশোধ বা জমা প্রদানকালে উক্ত পরিশোধিত বা জমাকৃত অর্থের উপর{" "}
                                <span className="text-black">১০% (দশ শতাংশ)</span> হারে কর কর্তন করিবেন, যথা:-
                            </p>

                            <p className="pl-10 text-justify mb-1">(ক) বাংলাদেশে প্রদত্ত কোনো সেবার জন্য;</p>
                            <p className="pl-10 text-justify mb-1">(খ) কোনো নিবাসী ব্যক্তি কর্তৃক কোনো বিদেশি ব্যক্তিকে পরিষেবা প্রদান বা কোনো কাজের জন্য;</p>
                            <p className="pl-10 text-justify mb-3">(গ) বিজ্ঞাপন বা অন্য কোনো উদ্দেশ্যে কোনো অনলাইন প্লাটফর্ম ব্যবহারের অনুমতি প্রদানের জন্য:</p>

                            <p className="text-justify mb-3">তবে শর্ত থাকে যে,-</p>

                            <p className="text-black text-justify mb-3">
                                (১) ম্যানুফ্যাকচারিং, প্রসেস বা কনভারশন, পূর্ত কাজ, নির্মাণ, প্রকৌশল বা সমজাতীয় অন্য কোনো কাজের জন্য সম্পাদিত চুক্তির বিপরীতে বিদেশ হইতে বাংলাদেশে প্রেরিত অর্থ প্রাপকের হিসাবে অর্থ পরিশোধ বা জমা প্রদানকালে উক্ত পরিশোধিত বা জমাকৃত অর্থের উপর ৭.৫% (সাত দশমিক পাঁচ শতাংশ) হারে কর কর্তন করিতে হইবে:
                            </p>

                            <p className="text-justify mb-3">(২) বিদেশ হইতে প্রেরিত নিম্নবর্ণিত অর্থের বিপরীতে কোনো কর্তন করা যাইবে না, যথা:-</p>

                            <p className="pl-10 text-justify mb-1">
                                (অ) ষষ্ঠ তফসিলের{" "}
                                <a href="/tax-act-section/435" className="text-blue-600 underline">
                                    অংশ ১
                                </a>{" "}
                                এর দফা ১৭ ও ৩৩ দ্বারা মোট আয় বহির্ভূত অর্থ;
                            </p>

                            <p className="pl-10 text-justify mb-1">
                                (আ) কোনো নিবাসীর সফটওয়্যার বা সেবার বিক্রয়লব্ধ অর্থ, যদি উক্ত বিক্রয় বা সেবা হইতে প্রাপ্ত আয় ষষ্ঠ তফসিলের{" "}
                                <a href="/tax-act-section/435" className="text-blue-600 underline">
                                    অংশ ১
                                </a>{" "}
                                এর দফা ২১ এর মোট আয় বহির্ভূত অর্থ হয়।
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
                        ১। আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে উক্ত আইনের শতকরা হার ১০% হতে ৭.৫% হারে পরিবর্তন করা হয়েছে এবং শর্তাংশ (১) ও শর্তাংশ (২) প্রতিস্থাপন করা হয়েছে।
                    </p>
                    <p className="mt-5">২। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬) </p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}