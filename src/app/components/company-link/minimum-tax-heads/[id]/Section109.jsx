'use client'

import { useEffect, useState } from "react";

export function Section109() {
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

            <h1 className="my-1 font-bold text-2xl py-1">ভাড়া হইতে উৎসে কর কর্তন </h1>
            <strong className="text-sm">ধারা : ১০৯</strong>
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
                                (১) যেইক্ষেত্রে কোনো নির্দিষ্ট ব্যক্তি-
                            </p>

                            <p className="pl-10 text-justify">(ক) কোনো গৃহ সম্পত্তি;</p>
                            <p className="pl-10 text-justify">(খ) হোটেল বা গেস্ট হাউজ;</p>
                            <p className="pl-10 text-justify">(গ) খালি স্থান বা প্ল্যান্ট বা যন্ত্রপাতি; বা</p>
                            <p className="pl-10 text-justify">(ঘ) সরকারি জলাধার ব্যতীত অন্য কোনো জলাধার,</p>

                            <p className="text-justify">
                                ভাড়া করেন সেইক্ষেত্রে উক্ত ব্যক্তি উক্ত সম্পত্তির ভাড়া পরিশোধকালে প্রদেয় ভাড়ার উপর
                                <span className="text-red-600 font-medium">
                                    {" "}১০% (দশ শতাংশ) হারে
                                </span>
                                {" "}কর কর্তন করিবেন।
                            </p>

                            <p className="text-justify">
                                (২) যেইক্ষেত্রে সংশ্লিষ্ট বৎসরের কর নির্ধারণের পর দেখা যায় যে,
                                <span className="text-red-600 font-medium"> সম্পত্তির</span>
                                {" "}মালিক কর্তৃক কোনো কর প্রদেয় নাই বা প্রদত্ত করের পরিমাণ প্রদেয় কর অপেক্ষা অধিক হয়,
                                সেইক্ষেত্রে নিম্নবর্ণিত হারে কর্তিত অর্থ ফেরত প্রদান করা হইবে,-
                            </p>

                            <p className="pl-10 text-justify">
                                (ক) কোনো কর প্রদেয় না হইলে, সম্পূর্ণ অংশ; বা
                            </p>

                            <p className="pl-10 text-justify">
                                (খ) কর্তিত করের পরিমাণ প্রদেয় কর অপেক্ষে অধিক হইলে, যতটুকু অধিক সেইটুকু।
                            </p>

                            <p className="text-justify text-red-600">
                                (৩) যেইক্ষেত্রে, উপকর কমিশনার এতদুদ্দেশ্যে কৃত আবেদনের ভিত্তিতে, নির্ধারিত ফরমে
                                সরল বিশ্বাসে এই মর্মে সনদ প্রদান করেন যে, উক্ত বৎসরে গৃহ সম্পত্তির মালিকের কোনো করযোগ্য আয় নাই
                                বা এই আইনের বিধানাবলি সাপেক্ষে উহা আয়কর মুক্ত, সেইক্ষেত্রে প্রদত্ত সনদ বাতিল না হওয়া পর্যন্ত
                                উপ-ধারা (১) এর অধীন উক্ত সম্পত্তির ভাড়া হইতে প্রাপ্ত আয়ের উপর কর কর্তনযোগ্য হইবে না।
                            </p>

                            <p className="text-justify">
                                (৪) এই ধারার উদ্দেশ্যপূরণকল্পে, "ভাড়া" অর্থ কোনো পরিশোধ, উহা যে নামেই অভিহিত হউক না কেন,
                                যাহা কোনো লিজ, ভোগ স্বত্ত (tenancy) বা কোনো চুক্তি বা সমঝোতার মাধ্যমে কোনো আসবাবপত্র,
                                জিনিসপত্র এবং ভূমিসহ কোনো ভবন ব্যবহারের জন্য প্রদান করা হয়।
                            </p>

                            <h5 className="font-semibold mt-4">মন্তব্য :</h5>

                            <div className="text-red-600">
                                উপ-ধারা (১) ও (২) সংশোধন করা হয়েছে এবং উপ-ধারা (৩) প্রতিস্থাপন করা হয়েছে।
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p className="text-justify">
                                (১) যেইক্ষেত্রে কোনো নির্দিষ্ট ব্যক্তি-
                            </p>

                            <p className="pl-10 text-justify">(ক) কোনো গৃহ সম্পত্তি;</p>
                            <p className="pl-10 text-justify">(খ) হোটেল বা গেস্ট হাউজ;</p>
                            <p className="pl-10 text-justify">(গ) খালি স্থান বা প্ল্যান্ট বা যন্ত্রপাতি; বা</p>
                            <p className="pl-10 text-justify">(ঘ) সরকারি জলাধার ব্যতীত অন্য কোনো জলাধার,</p>

                            <p className="text-justify">
                                ভাড়া করেন সেইক্ষেত্রে উক্ত ব্যক্তি উক্ত সম্পত্তির ভাড়া পরিশোধকালে প্রদেয় ভাড়ার উপর
                                <span className="font-medium"> ৫% (পাঁচ শতাংশ)</span>
                                {" "}হারে কর কর্তন করিবেন।
                            </p>

                            <p className="text-justify">
                                (২) যেইক্ষেত্রে সংশ্লিষ্ট বৎসরের কর নির্ধারণের পর দেখা যায় যে, গৃহ সম্পত্তির মালিক কর্তৃক
                                কোনো কর প্রদেয় নাই বা প্রদত্ত করের পরিমাণ প্রদেয় কর অপেক্ষা অধিক হয়, সেইক্ষেত্রে
                                নিম্নবর্ণিত হারে কর্তিত অর্থ ফেরত প্রদান করা হইবে,-
                            </p>

                            <p className="pl-10 text-justify">
                                (ক) কোনো কর প্রদেয় না হইলে, সম্পূর্ণ অংশ; বা
                            </p>

                            <p className="pl-10 text-justify">
                                (খ) কর্তিত করের পরিমাণ প্রদেয় কর অপেক্ষে অধিক হইলে, যতটুকু অধিক সেইটুকু।
                            </p>

                            <p className="text-justify">
                                (৩) যেইক্ষেত্রে, উপকর কমিশনার এতদুদ্দেশ্যে কৃত আবেদনের ভিত্তিতে, নির্ধারিত ফরমে
                                সদ্‌বিশ্বাসে এই মর্মে সনদ প্রদান করেন যে, উক্ত বৎসরে গৃহ সম্পত্তির মালিকের কোনো
                                মূল্যায়নযোগ্য আয় নাই বা এই আইনের বিধাবাবলি সাপেক্ষে উহা আয়কর মুক্ত, সেইক্ষেত্রে
                                উপ-ধারা (১) এর অধীন প্রদত্ত সনদ বাতিল না হওয়া পর্যন্ত উক্ত গৃহ সম্পত্তির ভাড়া হইতে
                                প্রাপ্ত আয়ের উপর কর কর্তনযোগ্য হইবে না।
                            </p>

                            <p className="text-justify">
                                (৪) এই ধারার উদ্দেশ্যপূরণকল্পে, "ভাড়া" অর্থ কোনো পরিশোধ, উহা যে নামেই অভিহিত হউক না কেন,
                                যাহা কোনো লিজ, ভোগ স্বত্ত (tenancy) বা কোনো চুক্তি বা সমঝোতার মাধ্যমে কোনো আসবাবপত্র,
                                জিনিসপত্র এবং ভূমিসহ কোনো ভবন ব্যবহারের জন্য প্রদান করা হয়।
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