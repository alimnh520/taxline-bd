'use client'

import { useEffect, useState } from "react";

export function Section95() {
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

            <h1 className="my-1 font-bold text-2xl py-1">ট্রাভেল এজেন্টের নিকট হইতে কর সংগ্রহ </h1>
            <strong className="text-sm">ধারা : ৯৫</strong>
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

                            <p className="text-justify">
                                (১) এই আইনের অন্যান্য বিধানাবলিতে যাহা কিছুই থাকুক না কেন, কমিশন বা ছাড় বা
                                অন্য কোনো সুবিধার মাধ্যমে, যে নামেই অভিহিত করা হউক না কেন, কোনো নিবাসীকে
                                অর্থ পরিশোধের জন্য দায়িত্বপ্রাপ্ত কোনো ব্যক্তি, উক্ত অর্থ পরিশোধকালে যাত্রী
                                টিকিট{" "}
                                <span className="font-semibold text-red-600">বিক্রয়ের</span> মাধ্যমে
                                রূপান্তরযোগ্য মোট অর্থের উপর{" "}
                                <span className="font-semibold text-red-600">
                                    ০.৩% (শূন্য দশমিক তিন শতাংশ)
                                </span>{" "}
                                হারে কর কর্তন বা অগ্রিম কর সংগ্রহ করিবেন।
                            </p>

                            <p className="text-justify">
                                (২) উপ-ধারা (১) এ উল্লিখিত টিকেট বিক্রয়ের মাধ্যমে{" "}
                                <span className="font-semibold text-red-600">প্রাপ্ত</span> ইনসেন্টিভ
                                বোনাস, পারফরমেন্স বোনাস বা অন্য কোনো সুবিধা, যে নামেই অভিহিত হউক না কেন,
                                এর অতিরিক্ত কোনো অর্থ পরিশোধিত হইলে উক্তরূপ অর্থ পরিশোধকালে অর্থ পরিশোধের
                                জন্য দায়িত্বপ্রাপ্ত ব্যক্তি <strong>ক / খ × গ</strong> এর সমপরিমাণ অর্থ
                                কর্তন করিবেন, যেখানে-
                            </p>

                            <div className="pl-8 space-y-2">
                                <p className="text-justify">
                                    <strong>ক</strong> = এই উপ-ধারাতে উল্লিখিত ইনসেন্টিভ বোনাস, পারফরমেন্স
                                    বোনাস বা অন্য কোনো সুবিধা,
                                </p>
                                <p className="text-justify">
                                    <strong>খ</strong> = কমিশন বা ডিসকাউন্ট বা উপ-ধারা (১) এ উল্লিখিত অন্য
                                    কোনো সুবিধার পরিমাণ, এবং
                                </p>
                                <p className="text-justify">
                                    <strong>গ</strong> = কমিশন বা ছাড় বা উপ-ধারা (১) এ উল্লিখিত অন্য কোনো
                                    সুবিধার উপর উৎস করের পরিমাণ।
                                </p>
                            </div>

                            <p className="text-justify">
                                (৩) টিকিট বা চার্জের মূল্য গণনাকালে কোনো প্রারম্ভিক ফি, ভ্রমণ কর, ফ্লাইট
                                সুরক্ষা বিমা, নিরাপত্তা কর এবং বিমানবন্দর কর বাবদ পরিশোধিত অর্থ মূল্য বা
                                চার্জ ইহার অন্তর্ভুক্ত হইবে না।
                            </p>

                            {/* COMMENT SECTION */}
                            <div className="mt-6 border-l-4 border-red-500 bg-red-50 p-4 rounded">
                                <h5 className="font-semibold text-red-600 mb-1">মন্তব্য :</h5>
                                <p className="text-red-600 text-sm">
                                    উপ-ধারা (১) ও (২) সংশোধন করা হয়েছে।
                                </p>
                            </div>
                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p className="text-justify">
                                (১) এই আইনের অন্যান্য বিধানাবলিতে যাহা কিছুই থাকুক না কেন, কমিশন বা ছাড় বা
                                অন্য কোনো সুবিধার মাধ্যমে, যে নামেই অভিহিত করা হউক না কেন, কোনো নিবাসীকে
                                অর্থ পরিশোধের জন্য দায়িত্বপ্রাপ্ত কোনো ব্যক্তি, উক্ত অর্থ পরিশোধকালে
                                যাত্রী টিকিট বিক্রয় বা{" "}
                                <span className="font-semibold text-red-600">
                                    কার্গো বিমানে পণ্য পরিবহণ সুবিধা
                                </span>{" "}
                                প্রদানের মাধ্যমে রূপান্তরযোগ্য মোট অর্থের উপর{" "}
                                <span className="font-semibold text-red-600">
                                    ০.৩% (শূন্য দশমিক তিন শতাংশ)
                                </span>{" "}
                                হারে কর কর্তন বা অগ্রিম কর সংগ্রহ করিবেন।
                            </p>

                            <p className="text-justify">
                                (২) উপ-ধারা (১) এ উল্লিখিত টিকেট বিক্রয়ের মাধ্যমে বা বিমানে কার্গো পরিবহণ
                                হইতে ইনসেন্টিভ বোনাস, পারফরমেন্স বোনাস বা অন্য কোনো সুবিধা, যে নামেই
                                অভিহিত হউক না কেন, এর অতিরিক্ত কোনো অর্থ পরিশোধিত হইলে উক্তরূপ অর্থ
                                পরিশোধকালে অর্থ পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি{" "}
                                <strong>ক / খ × গ</strong> এর সমপরিমাণ অর্থ কর্তন করিবেন, যেখানে-
                            </p>

                            <div className="pl-8 space-y-2">
                                <p className="text-justify">
                                    <strong>ক</strong> = এই উপ-ধারাতে উল্লিখিত ইনসেন্টিভ বোনাস, পারফরমেন্স
                                    বোনাস বা অন্য কোনো সুবিধা,
                                </p>
                                <p className="text-justify">
                                    <strong>খ</strong> = কমিশন বা ডিসকাউন্ট বা উপ-ধারা (১) এ উল্লিখিত অন্য
                                    কোনো সুবিধার পরিমাণ, এবং
                                </p>
                                <p className="text-justify">
                                    <strong>গ</strong> = কমিশন বা ছাড় বা উপ-ধারা (১) এ উল্লিখিত অন্য কোনো
                                    সুবিধার উপর উৎস করের পরিমাণ।
                                </p>
                            </div>

                            <p className="text-justify">
                                (৩) টিকিট বা চার্জের মূল্য গণনাকালে কোনো প্রারম্ভিক ফি, ভ্রমণ কর, ফ্লাইট
                                সুরক্ষা বিমা, নিরাপত্তা কর এবং বিমানবন্দর কর বাবদ পরিশোধিত অর্থ মূল্য বা
                                চার্জ ইহার অন্তর্ভুক্ত হইবে না।
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