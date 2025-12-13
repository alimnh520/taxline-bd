'use client'

import { useEffect, useState } from "react";

export function Section88() {
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
        logo.src = '/TaxLine_BD-PNG.png';
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

            <h1 className="my-1 font-bold text-2xl py-1">অংশগ্রহণ তহবিল, কল্যাণ তহবিল ও শ্রমিক কল্যাণ ফাউন্ডেশন তহবিলে প্রদত্ত অর্থ হইতে উৎসে কর্তন </h1>
            <strong className="text-sm">ধারা : ৮৮</strong>
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
                                বাংলাদেশে বিদ্যমান কোনো আইনে যাহা কিছুই থাকুক না কেন, শ্রম আইন, ২০০৬ এর ধারা ২৩৪ অনুযায়ী অংশগ্রহণ তহবিল, কল্যাণ তহবিল এবং শ্রমিক কল্যাণ ফাউন্ডেশন তহবিলে অর্থ পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি উক্তরূপ অর্থ পরিশোধ বা ক্রেডিটকালে ১০% (দশ শতাংশ) হারে কর কর্তন করিবেন।
                            </p>

                            <h5 className="font-semibold mt-6">মন্তব্য :</h5>

                            <div className="text-red-600">
                                আলোচ্য করবর্ষে উক্ত ধারা শিরোনাম পরিবর্তন করা হয়েছে এবং ধারাটি প্রতিস্থাপিত করা হয়েছে।
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p>
                                বাংলাদেশে বিদ্যমান কোনো আইনে যাহা কিছুই থাকুক না কেন, শ্রম আইন, ২০০৬ এর <a className="text-red-600" href="/tax-act-section/282">ধারা ২৩৪</a>  অনুযায়ী অংশগ্রহণ তহবিল, কল্যাণ তহবিল এবং শ্রমিক কল্যাণ ফাউন্ডেশন তহবিল হইতে ইহার কোনো সুবিধাভোগীকে অর্থ প্রদানকালে,  অর্থ পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি উক্তরূপ অর্থ পরিশোধ বা ক্রেডিটকালে ১০% (দশ শতাংশ) হারে কর কর্তন করিবেন।
                            </p>

                            <h5 className="font-semibold mt-6">মন্তব্য :</h5>

                            <div className="text-red-600">আইনটি প্রতিস্থাপন করা হয়েছে।</div>

                        </div>

                        <div className={`text-justify ${selectedYear === '3' ? 'block' : 'hidden'} space-y-4 pb-10`}>

                            <p>
                                <br />
                                শ্রমিক অংশগ্রহণ তহবিলে প্রদত্ত অর্থ হইতে উৎসে কর্তন <span className="text-red-600">(২০২৩-২০২৪ করবর্ষে উক্ত শিরোনাম ছিলো)</span>
                            </p>

                            <p>
                                এই আইনের অন্যান্য বিধানে বা বিদ্যমান অন্য কোনো আইনে শ্রমিক কল্যাণ তহবিলে অর্থ প্রদানের ক্ষেত্রে কর ছাড় সংক্রান্ত যাহা কিছুই থাকুক না কেন, শ্রমিক কল্যাণ তহবিল হইতে ইহার কোনো সুবিধাভোগীকে কোনো অর্থ প্রদানকালে, উক্তরূপে অর্থ পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি ১০% (দশ শতাংশ) হারে কর কর্তন করিবেন।
                            </p>

                        </div>
                    </div>

                </div>
            </div>

            <ins
                className="adsbygoogle border no-print border-gray-200"
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
                        ১। আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে উক্ত ধারা শিরোনাম পরিবর্তন করা হয়েছে এবং ধারাটি প্রতিস্থাপিত করা হয়েছে।
                    </p>
                    <p className="mt-5">২। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬) </p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}