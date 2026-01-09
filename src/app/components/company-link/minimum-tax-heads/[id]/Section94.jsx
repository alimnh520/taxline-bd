'use client'

import { useEffect, useState } from "react";

export function Section94() {
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
            option.text = selectedYear === '1' ? '২০২৪ - ২০২৫' : '২০২৩ - ২০২৪';
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

            <h1 className="my-1 font-bold text-2xl py-1">কমিশন, ডিসকাউন্ট, ফি, ইত্যাদি হইতে কর্তন বা উৎসে কর সংগ্রহ </h1>
            <strong className="text-sm">ধারা : ৯৪</strong>
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
                                <option value="2">২০২৩ - ২০২৪ </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 mt-6 text-sm">
                    <div className="w-full">

                        <div className={`text-justify ${selectedYear === '1' ? 'block' : 'hidden'} space-y-4`}>

                            <div className="col-md-12 space-y-4 text-gray-800">
                                <p className="text-justify">
                                    (১) কোনো পরিবেশককে, উহা যে নামেই অভিহিত হউক না কেন, বা অন্য কোনো ব্যক্তিকে
                                    পণ্য বা সেবা সরবরাহ বা বিপণনের জন্য কমিশন, বাট্টা, ফি, প্রণোদনা বা কর্মদক্ষতা
                                    ভাতা বা কর্মদক্ষতা সম্পর্কিত অন্য কোনো প্রণোদনা বা এইরূপ প্রকৃতির অন্য কোনো
                                    অর্থ পরিশোধ বা একই প্রকৃতির সুবিধার মাধ্যমে কোনো কোম্পানি বা ফার্ম অর্থ
                                    পরিশোধকালে বা অনুমোদিত কোনো অঙ্কের অর্থ প্রদানকালে, অর্থ পরিশোধের জন্য
                                    দায়িত্বপ্রাপ্ত ব্যক্তি, পরিশোধযোগ্য পরিমাণ বা প্রদেয় অনুমোদিত অঙ্কের অর্থ
                                    বা অনুমোদিত সুবিধার আর্থিক মূল্য, ক্ষেত্রমত, এর উপর{" "}
                                    <span className="font-semibold text-red-600">
                                        শতকরা ১০% (দশ শতাংশ)
                                    </span>{" "}
                                    হারে কর কর্তন বা সংগ্রহ করিবে।
                                </p>

                                <p className="text-justify">
                                    (২) কোনো কোম্পানি বা ফার্মের পণ্য বিপণন বা বাজারজাতকরণের সহিত সম্পৃক্ত কোনো
                                    ব্যক্তিকে উক্ত কোম্পানি বা ফার্ম কোনো অর্থ পরিশোধকালে, অর্থ পরিশোধের জন্য
                                    দায়িত্বপ্রাপ্ত ব্যক্তি, পণ্য বিপণন বা বাজারজাতকরণের জন্য প্রাপ্ত অর্থের উপর{" "}
                                    <span className="font-semibold text-red-600">
                                        ১.৫% (এক দশমিক পাঁচ শতাংশ)
                                    </span>{" "}
                                    হারে কর কর্তন করিবেন।
                                </p>

                                <p className="text-justify">(৩) তেল বিপণন কোম্পানি ব্যতীত অন্য কোনো কোম্পানি বা ফার্ম, যাহা –</p>

                                <ul className="list-disc list-inside pl-4 space-y-1">
                                    <li>কোনো পরিবেশক; বা</li>
                                    <li>চুক্তির অধীন অন্য কোনো ব্যক্তি,</li>
                                </ul>

                                <p className="text-justify">
                                    <span className="text-red-600 font-medium">বা অন্য কোনো ব্যক্তি</span>{" "}
                                    কর্তৃক নির্ধারিত খুচরা মূল্য হইতে কম মূল্যে পণ্য বিক্রয় করে, উক্ত পরিবেশক বা
                                    উক্তরূপ অন্য কোনো ব্যক্তির নিকট হইতে <strong>খ × গ</strong> এর সমপরিমাণ
                                    মূল্যের উপর{" "}
                                    <span className="font-semibold text-red-600">
                                        ৫% (পাঁচ শতাংশ)
                                    </span>{" "}
                                    হারে কর সংগ্রহ করিবে, যেইক্ষেত্রে-
                                </p>

                                <ul className="list-disc list-inside pl-4 space-y-1">
                                    <li>
                                        <strong>খ</strong> = পরিবেশক বা অন্য কোনো ব্যক্তির নিকট কোম্পানি বা ফার্মের
                                        বিক্রয় মূল্য;
                                    </li>
                                    <li>
                                        <strong>গ</strong> = ৫% (পাঁচ শতাংশ);
                                    </li>
                                </ul>

                                <p className="text-justify">
                                    তবে শর্ত থাকে যে, সিগারেট প্রস্তুতকারক কোম্পানি বা ফার্মের পণ্য বিক্রয়কালে
                                    উক্ত পরিবেশক বা উক্তরূপ অন্য কোনো ব্যক্তির নিকট হইতে পরিবেশক বা অন্য কোনো
                                    ব্যক্তির নিকট পণ্যের বিক্রয় মূল্য এবং উক্ত কোম্পানি বা ফার্ম কর্তৃক নির্ধারিত
                                    খুচরা মূল্যের মধ্যে পার্থক্যের উপর{" "}
                                    <span className="font-semibold text-red-600">
                                        ৩% (তিন শতাংশ)
                                    </span>{" "}
                                    হারে কর সংগ্রহ করিবে।
                                </p>

                                {/* Comment Section */}
                                <div className="mt-6 border-l-4 border-red-500 bg-red-50 p-4 rounded">
                                    <h5 className="font-semibold mb-1">মন্তব্য :</h5>
                                    <p className="text-red-600 text-sm">
                                        আলোচ্য করবর্ষে আইনের শব্দসমূহ সংশোধন করা হয়েছে
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <div className="col-md-12 space-y-4 text-gray-800 leading-relaxed">
                                <p className="text-justify">
                                    (১) কোনো পরিবেশককে, উহা যে নামেই অভিহিত হউক না কেন, বা অন্য কোনো ব্যক্তিকে
                                    পণ্য বা সেবা সরবরাহ বা বিপণনের জন্য কমিশন, বাট্টা, ফি, প্রণোদনা বা কর্মদক্ষতা
                                    ভাতা বা কর্মদক্ষতা সম্পর্কিত অন্য কোনো প্রণোদনা বা এইরূপ প্রকৃতির অন্য কোনো
                                    অর্থ পরিশোধ বা একই প্রকৃতির সুবিধার মাধ্যমে কোনো কোম্পানি বা ফার্ম অর্থ
                                    পরিশোধকালে বা অনুমোদিত কোনো অঙ্কের অর্থ প্রদানকালে, অর্থ পরিশোধের জন্য
                                    দায়িত্বপ্রাপ্ত ব্যক্তি, পরিশোধযোগ্য পরিমাণ বা প্রদেয় অনুমোদিত অঙ্কের অর্থ
                                    বা অনুমোদিত সুবিধার আর্থিক মূল্য, ক্ষেত্রমত, এর উপর{" "}
                                    <span className="font-semibold text-red-600">
                                        শতকরা ১০% (দশ শতাংশ)
                                    </span>{" "}
                                    হারে কর কর্তন বা সংগ্রহ করিবে।
                                </p>

                                <p className="text-justify">
                                    (২) কোনো কোম্পানি বা ফার্মের পণ্য বিপণন বা বাজারজাতকরণের সহিত সম্পৃক্ত কোনো
                                    ব্যক্তিকে উক্ত কোম্পানি বা ফার্ম কোনো অর্থ পরিশোধকালে, অর্থ পরিশোধের জন্য
                                    দায়িত্বপ্রাপ্ত ব্যক্তি, পণ্য বিপণন বা বাজারজাতকরণের জন্য প্রাপ্ত অর্থের উপর{" "}
                                    <span className="font-semibold text-red-600">
                                        ১.৫% (এক দশমিক পাঁচ শতাংশ)
                                    </span>{" "}
                                    হারে কর কর্তন করিবেন।
                                </p>

                                <p className="text-justify">
                                    (৩) তেল বিপণন কোম্পানি ব্যতীত অন্য কোনো কোম্পানি বা ফার্ম, যাহা –
                                </p>

                                <ul className="list-disc list-inside pl-4 space-y-1">
                                    <li>কোনো পরিবেশক; বা</li>
                                    <li>চুক্তির অধীন অন্য কোনো ব্যক্তি,</li>
                                </ul>

                                <p className="text-justify">
                                    -এর নিকট উক্ত কোম্পানি বা ফার্ম কর্তৃক নির্ধারিত খুচরা মূল্য হইতে কম মূল্যে
                                    পণ্য বিক্রয় করে, উক্ত পরিবেশক বা উক্তরূপ অন্য কোনো ব্যক্তির নিকট হইতে{" "}
                                    <strong>খ × গ</strong> এর সমপরিমাণ মূল্যের উপর{" "}
                                    <span className="font-semibold text-red-600">
                                        ৫% (পাঁচ শতাংশ)
                                    </span>{" "}
                                    হারে কর সংগ্রহ করিবে, যেইক্ষেত্রে-
                                </p>

                                <ul className="list-disc list-inside pl-4 space-y-1">
                                    <li>
                                        <strong>খ</strong> = পরিবেশক বা অন্য কোনো ব্যক্তির নিকট কোম্পানি বা ফার্মের
                                        বিক্রয় মূল্য;
                                    </li>
                                    <li>
                                        <strong>গ</strong> = ৫% (পাঁচ শতাংশ);
                                    </li>
                                </ul>

                                <p className="text-justify">
                                    তবে শর্ত থাকে যে, সিগারেট প্রস্তুতকারক কোম্পানি বা ফার্মের পণ্য বিক্রয়কালে
                                    উক্ত পরিবেশক বা উক্তরূপ অন্য কোনো ব্যক্তির নিকট হইতে পরিবেশক বা অন্য কোনো
                                    ব্যক্তির নিকট পণ্যের বিক্রয় মূল্য এবং উক্ত কোম্পানি বা ফার্ম কর্তৃক নির্ধারিত
                                    খুচরা মূল্যের মধ্যে পার্থক্যের উপর{" "}
                                    <span className="font-semibold text-red-600">
                                        ৩% (তিন শতাংশ)
                                    </span>{" "}
                                    হারে কর সংগ্রহ করিবে।
                                </p>
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
                        আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে আইনের শব্দসমূহ সংশোধন করা হয়েছে
                    </p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}