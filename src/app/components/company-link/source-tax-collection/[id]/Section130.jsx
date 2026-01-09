'use client'

import { useEffect, useState } from "react";

export function Section130() {
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

            <h1 className="my-1 font-bold text-2xl py-1">ইট প্রস্তুতকারকের নিকট হইতে কর সংগ্রহ</h1>
            <strong className="text-sm">ধারা : ১৩০</strong>
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

                            <p className="text-justify">
                                (১) ইট প্রস্তুত এবং ভাটা স্থাপন (নিয়ন্ত্রণ) আইন, ২০১৩ (২০১৩ সনের ৫৯ নং আইন)
                                এর অধীন ইট প্রস্তুত বা উৎপাদনের লাইসেন্স প্রদান বা নবায়নের জন্য দায়িত্বপ্রাপ্ত
                                কোনো ব্যক্তি এই ধরনের লাইসেন্স প্রদান বা নবায়ন করিবেন না, যদি না এই ধরনের
                                লাইসেন্স প্রদান বা নবায়নের আবেদনপত্রের সহিত-
                            </p>

                            <p className="pl-10 text-justify">
                                (অ) ইটভাটার আয়তন ও প্রকৃতি বা, প্রযোজ্য ক্ষেত্রে, ইট উৎপাদনের পদ্ধতি ও প্রকৃতি
                                উল্লেখপূর্বক একটি কর পরিশোধের সনদ সংযুক্ত থাকে; এবং
                            </p>

                            <p className="pl-10 text-justify">
                                (আ) নিম্নবর্ণিত সারণীতে উল্লিখিত হারে পরিশোধিত অগ্রিম করের এ-চালান সংযুক্ত থাকে:
                            </p>

                            <div className="overflow-x-auto my-4">
                                <table className="min-w-full border border-black border-collapse text-sm">
                                    <thead>
                                        <tr>
                                            <th className="border border-black px-2 py-1 text-left">ক্রমিক নং</th>
                                            <th className="border border-black px-2 py-1 text-left">ইটভাটার ধরণ</th>
                                            <th className="border border-black px-2 py-1 text-left">
                                                অগ্রিম করহার (টাকায়)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black px-2 py-1">১।</td>
                                            <td className="border border-black px-2 py-1">
                                                ১০৮০০০ (এক লক্ষ আট হাজার) ঘনফুট আয়তনের অধিক নহে এইরূপ মৌসুমী ইটভাটার ক্ষেত্রে
                                            </td>
                                            <td className="border border-black px-2 py-1">
                                                ৮০০০০ (আশি হাজার টাকা)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-2 py-1">২।</td>
                                            <td className="border border-black px-2 py-1">
                                                ১০৮০০০ (এক লক্ষ আট হাজার) ঘনফুট আয়তনের অধিক কিন্তু
                                                ১২৪০০০ (এক লক্ষ চব্বিশ হাজার) ঘনফুটের অধিক নহে এইরূপ মৌসুমী ইটভাটার ক্ষেত্রে
                                            </td>
                                            <td className="border border-black px-2 py-1">
                                                ১২০০০০ (এক লক্ষ বিশ হাজার টাকা)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-2 py-1">৩।</td>
                                            <td className="border border-black px-2 py-1">
                                                ১২৪০০০ (এক লক্ষ চব্বিশ হাজার) ঘনফুটের অধিক এইরূপ মৌসুমী ইটভাটার ক্ষেত্রে
                                            </td>
                                            <td className="border border-black px-2 py-1">
                                                ১৬০০০০ (এক লক্ষ ষাট হাজার টাকা)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-2 py-1">৪।</td>
                                            <td className="border border-black px-2 py-1">
                                                ক্রমিক নং ১, ২ ও ৩ এ উল্লিখিত হয় নাই এইরূপ ইটভাটার ক্ষেত্রে
                                            </td>
                                            <td className="border border-black px-2 py-1">
                                                ২২০০০০ (দুই লক্ষ বিশ হাজার টাকা)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-justify">
                                (২) যেইক্ষেত্রে কোনো বৎসরে একাধিক বৎসরের জন্য লাইসেন্স প্রদান বা নবায়ন করা হইবে,
                                সেইক্ষেত্রে লাইসেন্স গ্রহণ বা নবায়নের বৎসরের পরের বৎসর বা বৎসরসমূহের
                                ৩০ জুন তারিখের মধ্যে উপ-ধারা (১) এ উল্লিখিত হারে অগ্রিম কর চালানের মাধ্যমে
                                জমা করিতে হইবে।
                            </p>

                            <p className="text-justify">
                                (৩) যেইক্ষেত্রে কোনো বৎসরে ইট প্রস্তুতকারী বা উৎপাদনকারী ব্যক্তি উপ-ধারা (২)
                                অনুযায়ী অগ্রিম কর পরিশোধে ব্যর্থ হন, সেইক্ষেত্রে পরবর্তী বৎসরে উক্ত ব্যক্তি
                                কর্তৃক প্রদেয় অগ্রিম করের পরিমাণ ক + খ নিয়মে নির্ধারিত হইবে, যেখানে-
                            </p>

                            <p className="pl-10 text-justify">
                                ক = পূর্ববর্তী বৎসর বা বৎসরগুলোতে অপরিশোধিত অগ্রিম করের পরিমাণ, এবং
                            </p>

                            <p className="pl-10 text-justify">
                                খ = পরিশোধের বৎসরে উপ-ধারা (১) অনুযায়ী প্রদেয় অগ্রিম করের পরিমাণ।
                            </p>

                            <p className="text-justify">(৪) এই ধারার উদ্দেশ্যপূরণকল্পে,-</p>

                            <p className="pl-10 text-justify">
                                (ক) <strong>“আয়তন”</strong> অর্থ ইটভাটার দেয়ালের ভেতরের দৈর্ঘ্য, প্রস্থ ও উচ্চতার পরিমাপ;
                            </p>

                            <p className="pl-10 text-justify">
                                (খ) <strong>“ইটভাটা”</strong> অর্থ এইরূপ কোনো স্থান বা অবকাঠামো যেখানে ইট প্রস্তুত করা হয়;
                            </p>

                            <p className="pl-10 text-justify">
                                (গ) <strong>“মৌসুমী ইটভাটা”</strong> অর্থ এইরূপ কোনো ইটভাটা যেখানে শুষ্ক মৌসুমে হাতের
                                সাহায্যে ইট প্রস্তুতকরণসহ ইট পোড়ানো হয়।
                            </p>

                            <h5 className="mt-4 font-semibold">মন্তব্য :</h5>
                            <div className="text-red-600">
                                আলোচ্য করবর্ষে উক্ত আইনটি প্রতিস্থাপন করা হয়েছে।
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p className="text-justify"><span>ইট প্রস্তুত এবং ভাটা স্থাপন (নিয়ন্ত্রণ) আইন, ২০১৩ (২০১৩ সনের ৫৯ নং আইন) এর অধীন ইট তৈরির অনুমতি প্রদান বা অনুমতি নবায়নের জন্য দায়িত্বপ্রাপ্ত কোনো ব্যক্তি, উক্তরূপ অনুমতি প্রদান বা উহা নবায়ন করিবেন না, যদি না উক্তরূপ অনুমতি প্রদান বা উহার নবায়নের জন্য করা আবেদনের সহিত উপকর কমিশনার কর্তৃক প্রত্যয়িত ও নিম্নবর্ণিত হারে পরিশোধিত আয়কর চালান সহ পূর্ববতী করবর্ষের কর পরিশোধ সনদ প্রদান করা হয়, যথা:-</span></p>
                            <p className="text-justify"><span>(ক) এক সেকশন (one section) ইট ভাটার জন্য- ৪৫ (পয়তাল্লিশ) হাজার টাকা;</span></p>
                            <p className="text-justify"><span>(খ) দেড় সেকশন (one and half-section) ইট ভাটার জন্য- ৭০ (সত্তর) হাজার টাকা;</span></p>
                            <p className="text-justify"><span>(গ) দুই সেকশন (two section) ইট ভাটার জন্য- ৯০ (নব্বই) হাজার টাকা;</span></p>
                            <p className="text-justify"><span>(ঘ) স্বয়ংক্রিয় মেশিনের সাহায্যে ইট উৎপাদনকারী ভাটার জন্য- ১ (এক) লক্ষ ৫০ (পঞ্চাশ) হাজার টাকা।</span></p>
                            <p className="text-justify">&nbsp;</p>
                            <p>&nbsp;</p>

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
                        আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে উক্ত আইনটি প্রতিস্থাপন করা হয়েছে।
                    </p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}