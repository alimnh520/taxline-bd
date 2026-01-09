'use client'

import { useEffect, useState } from "react";

export function Section126() {
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

            <h1 className="my-1 font-bold text-2xl py-1">ডেভেলপার বা  রিয়েল এস্টেট ডেভেলপারের নিকট হইতে কর সংগ্রহ </h1>
            <strong className="text-sm">ধারা : ১২৬</strong>
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

                            <p className="text-justify"><span className="text-red-600">(<span className="text-red-600">১) Registration Act, 1908 (Act No. XVI of 1908) এর অধীন কোনো ভূমি, স্থাপনা, বাড়ি, ফ্ল্যাট, অ্যাপার্টমেন্ট অথবা ফ্লোর স্পেস হস্তান্তরের নিমিত্ত কোনো দলিল নিবন্ধনের জন্য দায়িত্বপ্রাপ্ত কোনো ব্যক্তি উক্তরূপ কোনো দলিল নিবন্ধন করিবেন না, যদি না ডেভেলপার কর্তৃক নির্ধারিত হারে কর পরিশোধ করা হয়।</span></span></p>
                            <p className="text-justify"><span className="text-red-600">(২) এই ধারার অধীন কর সংগ্রহের ক্ষেত্রে, করহার নিম্নবর্ণিত হারের অধিক হইবে না, যথা:-</span></p>
                            <p className="ml-20"><span className="text-red-600">(ক) আবাসিক উদ্দেশ্যে নির্মিত বা ব্যবহৃত স্থাপনা, বাড়ি, ফ্ল্যাট, অ্যাপার্টমেন্ট অথবা ফ্লোর স্পেসেরে ক্ষেত্রে বর্গমিটার প্রতি ১৬০০&nbsp; (এক হাজার ছয়শত) টাকা,</span></p>
                            <p className="ml-20"><span className="text-red-600">(খ) স্থাপনা, বাড়ি, ফ্ল্যাট, অ্যাপার্টমেন্ট অথবা ফ্লোর স্পেস আবাসিক উদ্দেশ্যে নির্মিত বা ব্যবহৃত না হইলে বর্গমিটার প্রতি ৬৫০০ (ছয় হাজার পাঁচশত) টাকা,</span></p>
                            <p className="ml-20"><span className="text-red-600">(গ) স্থাপনা, বাড়ি, ফ্ল্যাট, অ্যাপার্টমেন্ট অথবা ফ্লোর স্পেসের সহিত সংশ্লিষ্ট ভূমির ক্ষেত্রে দলিলমূল্যের ৫% (পাঁচ শতাংশ)</span></p>
                            <p className="text-justify"><span className="text-red-600">(৩) এই ধারার উদ্দেশ্যপূরণকল্পে, ”ডেভেলপার বা রিয়েল এস্টেট ডেভেলপার” বলিতে রিয়েল এস্টেট উন্নয়ন ও ব্যবস্থাপনা আইন, ২০১০ (২০১০ সনের ৪৮ নং আইন) এ বর্ণিত ডেভেলপার বা রিয়েল এস্টেট ডেভেলপারকে বুঝাইবে এবং যদি কোনো ব্যক্তি ডেভেলপার বা রিয়েল এস্টেট ডেভেলপারের অনুরূপ কার্যাবলি সম্পাদনপূর্বক তাহার নিজের বা অন্যের ভূমি উন্নয়ন করেন অথবা তাহার নিজের বা অন্যের ভূমিতে স্থাপনা, বাড়ি, ফ্ল্যাট, অ্যাপার্টমেন্ট অথবা ফ্লোর স্পেস নির্মাণ করেন; অথবা ভূমির মালিক বা স্থাপনা, বাড়ি, ফ্ল্যাট, অ্যাপার্টমেন্ট অথবা ফ্লোর স্পেসের মালিক ডেভেলপার বা কো-ডেভেলপারের ন্যায় আচরণ করেন, তাহা হইলে তিনিও ইহার অন্তর্ভূক্ত হইবেন।</span></p>
                            <h5>মন্তব্য : </h5>
                            <div className="text-red-600">আলোচ্য করবর্ষে উক্ত আইনের শিরোনাম পরিবর্তন করা হয়েছে এবং আইনটি প্রতিস্থাপন করা হয়েছে।</div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>


                            <p className="text-justify"><strong><span className="">রিয়েল এস্টেট বা ভূমি উন্নয়নকারীর নিকট হইতে কর সংগ্রহ <span className="bg-red-500">(মূল আইনে উক্ত শিরোনাম ছিল)</span></span></strong></p>
                            <p className="text-justify"><span className="">(১) Registration Act, 1908 (Act No. XVI of 1908) এর বিধান মোতাবেক কোনো ভূমি বা ভবন বা অ্যাপার্টমেন্ট হস্তান্তরের জন্য কোনো দলিল দস্তাবেজ নিবন্ধনের জন্য দায়িত্বপ্রাপ্ত কোনো ব্যক্তি, নির্ধারিত হারে কর প্রদান না করা পর্যন্ত, হস্তান্তরকারী কর্তৃক ভূমি উন্নয়ন ব্যবসায় নিয়োজিত কোনো ব্যক্তির নিকট হস্তান্তরের দলিলাদি নিবন্ধন করিবেন না।</span></p>
                            <p className="text-justify"><span className="">(২) এই ধারার অধীন কর সংগ্রহের ক্ষেত্রে, করের হার-</span></p>
                            <p className="ml-20"><span className="">(ক) আবাসিক উদ্দেশ্যে নির্মিত ভবন বা অ্যাপার্টমেন্টের ক্ষেত্রে ১ (এক) হাজার ৬০০ (ছয়শত) টাকা,</span></p>
                            <p className="ml-20"><span className="">(খ) আবাসিক উদ্দেশ্যে ব্যবহারের জন্য না হইলে ৬ (ছয়) হাজার ৫০০ (পাঁচশত) টাকা,</span></p>
                            <p className="ml-20"><span className="">(গ) ভবন বা অ্যাপার্টমেন্টের সহিত সংশ্লিষ্ট ভূমির ক্ষেত্রে দলিলমূল্যের ৫% (পাঁচ শতাংশ),</span></p>
                            <p className="ml-20"><span className="">এর অধিক হইবে না।</span></p>
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
                        আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে উক্ত আইনের শিরোনাম পরিবর্তন করা হয়েছে এবং আইনটি প্রতিস্থাপন করা হয়েছে।
                    </p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}