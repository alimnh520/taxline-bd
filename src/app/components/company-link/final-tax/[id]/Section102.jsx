'use client'

import { useEffect, useState } from "react";

export function Section102() {
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

            <h1 className="my-1 font-bold text-2xl py-1">সঞ্চয়ী আমানত ও স্থায়ী আমানত, ইত্যাদি হইতে কর কর্তন</h1>
            <strong className="text-sm">ধারা : ১০২</strong>
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
                                (<span className="text-red-600">১</span>) এই আইন বা বাংলাদেশে বলবৎ অন্য কোনো
                                আইনে যাহা কিছুই থাকুক না কেন, বাংলাদেশের কোনো আইনের অধীন কোনো প্রকার
                                ব্যাংকিং, ইন্সুরেন্স, লিজিং, ফাইন্যান্সিং, ডাক ও ব্যাংকিং, সমবয় বা মোবাইল
                                ফাইন্যান্সিয়াল সার্ভিসেস কার্যক্রম পরিচালনাকারী কোনো ব্যক্তি, অথবা কোনো
                                প্রকারের আমানত (deposit) এর বিপরীতে সুদ বা মুনাফা পরিশোধকারী কোনো ব্যক্তি,
                                অন্য কোনো নিবাসী ব্যক্তিকে কোনো প্রকারের সুদ বা মুনাফা পরিশোধ করিলে, সুদ বা
                                মুনাফা পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি সুদ বা মুনাফা কোনো ব্যক্তির
                                হিসাবে ক্রেডিটের সময় বা সুদ বা মুনাফা পরিশোধের সময়, যাহা পূর্বে ঘটে,
                                নিম্নবর্ণিত সারণীতে উল্লিখিত হারে উৎসে কর কর্তন করিয়া সরকারি কোষাগারে জমা
                                প্রদান করিবেন, যথা:
                            </p>

                            {/* Table Title */}
                            <h3 className="text-center font-semibold text-red-600">সারণী</h3>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full border border-black border-collapse text-sm">
                                    <thead>
                                        <tr className="text-center text-red-600">
                                            <th className="border border-black px-2 py-1">ক্রমিক নং</th>
                                            <th className="border border-black px-2 py-1">প্রাপকের ধরণ</th>
                                            <th className="border border-black px-2 py-1">কর কর্তনের হার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black px-2 py-1 text-center">১</td>
                                            <td className="border border-black px-2 py-1">
                                                ট্রাস্ট, ব্যক্তিসংঘ ও কোম্পানির ক্ষেত্রে
                                            </td>
                                            <td className="border border-black px-2 py-1">
                                                ২০% (বিশ শতাংশ)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-2 py-1 text-center">২</td>
                                            <td className="border border-black px-2 py-1">
                                                প্রাথমিক শিক্ষা প্রতিষ্ঠান, চার্টার্ড অ্যাকাউন্টেন্ট বা কস্ট অ্যান্ড
                                                ম্যানেজমেন্ট অ্যাকাউন্টেন্ট বা চার্টার্ড সেক্রেটারীজ ইন্সটিটিউট
                                            </td>
                                            <td className="border border-black px-2 py-1">
                                                ১০% (দশ শতাংশ)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-2 py-1 text-center">৩</td>
                                            <td className="border border-black px-2 py-1">
                                                ক্রমিক নং ১ ও ২ এ উল্লিখিত হয় নাই এইরূপ অন্যান্য ব্যক্তির ক্ষেত্রে
                                            </td>
                                            <td className="border border-black px-2 py-1">
                                                ১০% (দশ শতাংশ)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Sub Sections */}
                            <p>
                                (২) এই ধারার কোনো কিছুই নিম্নবর্ণিত ক্ষেত্রে প্রযোজ্য হইবে না, যথা:
                            </p>

                            <p className="pl-10">
                                (ক) সরকার বা সরকারের পূর্বানুমোদনক্রমে তফসিলভুক্ত কোনো ব্যাংক কর্তৃক
                                স্পন্সরকৃত কোনো ডিপোজিট পেনশন স্কিম হইতে উদ্ভূত কোনো সুদ বা মুনাফা; অথবা
                            </p>

                            <p className="pl-10">
                                (খ) বোর্ড কর্তৃক, সাধারণ বা বিশেষ আদেশ দ্বারা, অন্য কোনোভাবে কর অব্যাহতিপ্রাপ্ত
                                কোনো নির্দিষ্ট প্রাপক বা প্রাপক শ্রেণি।
                            </p>

                            <p>
                                (৩) এই ধারার উদ্দেশ্যপূরণকল্পে, নাবালকের আইনানুগ অভিভাবকের রিটার্ন দাখিলের
                                প্রমাণ নাবালকের রিটার্ন দাখিলের প্রমাণ হিসাবে গণ্য হইবে।
                            </p>

                            {/* Comment Section */}
                            <h5 className="font-semibold">মন্তব্য :</h5>
                            <p className="text-red-600">
                                আলোচ্য করবর্ষে উক্ত ধারার উপ-ধারা (১) প্রতিস্থাপন করা হয়েছে
                            </p>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p>
                                (১) এই আইন বা বাংলাদেশে বলবৎ অন্য কোনো আইনে যাহা কিছুই থাকুক না কেন,
                                বাংলাদেশের কোনো আইনের অধীন কোনো প্রকার ব্যাংকিং, ইন্সুরেন্স, লিজিং,
                                ফাইন্যান্সিং, ডাক ও ব্যাংকিং, সমবয় বা মোবাইল ফাইন্যান্সিয়াল সার্ভিসেস
                                কার্যক্রম পরিচালনাকারী কোনো ব্যক্তি, অথবা কোনো প্রকারের আমানত (deposit)
                                এর বিপরীতে সুদ বা মুনাফা পরিশোধকারী কোনো ব্যক্তি, অন্য কোনো নিবাসী ব্যক্তিকে
                                কোনো প্রকারের সুদ বা মুনাফা পরিশোধ করিলে, সুদ বা মুনাফা পরিশোধের জন্য
                                দায়িত্বপ্রাপ্ত ব্যক্তি সুদ বা মুনাফা কোনো ব্যক্তির হিসাবে ক্রেডিটের সময় বা
                                সুদ বা মুনাফা পরিশোধের সময়, যাহা পূর্বে ঘটে, নিম্নবর্ণিত সারণীতে উল্লিখিত
                                হারে উৎসে কর কর্তন করিয়া সরকারি কোষাগারে জমা প্রদান করিবেন, যথা:
                            </p>

                            {/* Table Title */}
                            <h3 className="text-center font-semibold">সারণী</h3>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full border border-black border-collapse text-sm">
                                    <thead>
                                        <tr className="text-center text-red-600">
                                            <th className="border border-black px-2 py-2">ক্রমিক নং</th>
                                            <th className="border border-black px-2 py-2">প্রাপকের ধরণ</th>
                                            <th className="border border-black px-2 py-2">কর কর্তনের হার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black px-2 py-2 text-center">১</td>
                                            <td className="border border-black px-2 py-2">
                                                ট্রাস্ট, ব্যক্তিসংঘ ও কোম্পানির ক্ষেত্রে
                                            </td>
                                            <td className="border border-black px-2 py-2">
                                                ২০% (বিশ শতাংশ)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-2 py-2 text-center">২</td>
                                            <td className="border border-black px-2 py-2">
                                                অন্যান্য ক্ষেত্রে
                                            </td>
                                            <td className="border border-black px-2 py-2">
                                                ১০% (দশ শতাংশ)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Sub Section (2) */}
                            <p className="text-red-600">
                                (২) যেইক্ষেত্রে কোনো আয়বর্ষে এই ধারার অধীন উৎসে কর কর্তনযোগ্য প্রাপক বা
                                প্রাপকের আয় করমুক্ত বা হ্রাসকৃত হারে করারোপযোগ্য, সেইক্ষেত্রে উক্ত প্রাপকের
                                আবেদনের ভিত্তিতে বোর্ড যাচাই সাপেক্ষে, ক্ষেত্রমত, এই মর্মে সনদ প্রদান করিবে
                                যে উক্ত ব্যক্তিকে প্রদেয় কোনো অর্থ যাহা হইতে এই ধারার অধীন কর কর্তন করিতে
                                হইবে উহা কোনো কর কর্তন ব্যতিরেকে বা হ্রাসকৃত হারে কর্তনযোগ্য।
                            </p>

                            {/* Sub Section (3) */}
                            <p>
                                (৩) এই ধারার উদ্দেশ্যপূরণকল্পে, নাবালকের আইনানুগ অভিভাবকের রিটার্ন দাখিলের
                                প্রমাণ নাবালকের রিটার্ন দাখিলের প্রমাণ হিসাবে গণ্য হইবে।
                            </p>

                            {/* Comment */}
                            <h5 className="font-semibold">মন্তব্য :</h5>
                            <p className="text-red-600">
                                উপ-ধারা (২) ও (৩) প্রতিস্থাপন করা হয়েছে।
                            </p>

                        </div>

                        <div className={`text-justify ${selectedYear === '3' ? 'block' : 'hidden'} space-y-4`}>

                            <p>
                                (১) এই আইন বা বাংলাদেশে বলবৎ অন্য কোনো আইনে যাহা কিছুই থাকুক না কেন, কোনো
                                নিবাসী ব্যক্তিকে কোনো ব্যাংক, কো-অপারেটিভ ব্যাংক, ইসলামী নীতি মোতাবেক
                                পরিচালিত কোনো ব্যাংক, নন-ব্যাংকিং আর্থিক প্রতিষ্ঠান, কোনো লিজিং কোম্পানি
                                অথবা কোনো হাউজিং ফাইন্যান্স কোম্পানি কোনো সঞ্চয়ী আমানত, স্থায়ী আমানত,
                                মেয়াদী আমানত বা অন্য কোনো প্রকার আমানতের বিপরীতে কোনো সুদ বা মুনাফা
                                পরিশোধ করিলে, সুদ বা মুনাফা পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি সুদ বা
                                মুনাফা কোনো ব্যক্তির হিসাবে ক্রেডিটের সময় অথবা সুদ বা মুনাফা পরিশোধের
                                সময়, যাহা পূর্বে ঘটে, নিম্নবর্ণিত সারণীতে উল্লিখিত হারে উৎসে কর কর্তন
                                করিয়া সরকারি কোষাগারে জমা করিবেন—
                            </p>

                            {/* Table Title */}
                            <h3 className="font-semibold">সারণী</h3>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full border border-black border-collapse text-sm">
                                    <thead>
                                        <tr className="font-semibold">
                                            <th className="border border-black px-2 py-2">ক্রমিক নং</th>
                                            <th className="border border-black px-2 py-2">প্রাপকের ধরণ</th>
                                            <th className="border border-black px-2 py-2">কর কর্তনের হার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black px-2 py-2">১</td>
                                            <td className="border border-black px-2 py-2">
                                                কোম্পানির ক্ষেত্রে
                                            </td>
                                            <td className="border border-black px-2 py-2">
                                                ২০% (বিশ শতাংশ)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-2 py-2">২</td>
                                            <td className="border border-black px-2 py-2">
                                                কোম্পানি ব্যতীত অন্যান্য ব্যক্তির ক্ষেত্রে
                                            </td>
                                            <td className="border border-black px-2 py-2">
                                                ১০% (দশ শতাংশ)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-2 py-2">৩</td>
                                            <td className="border border-black px-2 py-2">
                                                সরকারি বিশ্ববিদ্যালয়, মান্থলি পে অর্ডারভূক্ত কোনো শিক্ষা প্রতিষ্ঠান,
                                                চার্টার্ড অ্যাকাউন্টেন্ট বা কস্ট অ্যান্ড ম্যানেজমেন্ট অ্যাকাউন্টেন্ট
                                                বা চার্টার্ড সেক্রেটারীজ ইনস্টিটিউটের ক্ষেত্রে
                                            </td>
                                            <td className="border border-black px-2 py-2">
                                                ১০% (দশ শতাংশ)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black px-2 py-2">৪</td>
                                            <td className="border border-black px-2 py-2">
                                                স্বীকৃত ভবিষ্য তহবিল, অনুমোদিত আনুতোষিক তহবিল, অনুমোদিত বার্ধক্য
                                                তহবিল ও পেনশন তহবিলের ক্ষেত্রে
                                            </td>
                                            <td className="border border-black px-2 py-2">
                                                ৫% (পাঁচ শতাংশ)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Sub-section (2) */}
                            <p>
                                (২) এই ধারার কোনো কিছুই নিম্নবর্ণিত ক্ষেত্রে প্রযোজ্য হইবে না, যথা:
                            </p>

                            <p className="pl-10">
                                (ক) সরকার বা সরকারের পূর্বানুমোদনক্রমে তফসিলভুক্ত কোনো ব্যাংক কর্তৃক
                                স্পন্সরকৃত কোনো ডিপোজিট পেনশন স্কিম হইতে উদ্ভূত কোনো সুদ বা মুনাফা; অথবা
                            </p>

                            <p className="pl-10">
                                (খ) বোর্ড কর্তৃক, সাধারণ বা বিশেষ আদেশ দ্বারা, অন্য কোনোভাবে কর
                                অব্যাহতিপ্রাপ্ত কোনো নির্দিষ্ট প্রাপক বা প্রাপক শ্রেণি।
                            </p>

                            {/* Sub-section (3) */}
                            <p>
                                (৩) এই ধারার উদ্দেশ্যপূরণকল্পে, নাবালকের আইনানুগ অভিভাবকের রিটার্ন দাখিলের
                                প্রমাণ নাবালকের রিটার্ন দাখিলের প্রমাণ হিসাবে গণ্য হইবে।
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
                        ১। আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে উক্ত ধারার উপ-ধারা (১) প্রতিস্থাপন করা হয়েছে
                    </p>
                    <p className="mt-5">২। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬)</p>
                </span>
                <table className="w-full border border-gray-300 border-collapse text-sm mt-8">
                    {/* Caption */}
                    <caption className="caption-top mb-2 text-left font-semibold text-blue-600">
                        তথ্যসূত্র
                    </caption>

                    {/* Table Head */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-3 py-2 text-left">
                                ক্রমিক
                            </th>
                            <th className="border border-gray-300 px-3 py-2 text-left">
                                মন্তব্য
                            </th>
                            <th className="border border-gray-300 px-3 py-2 text-left">
                                আয় কর এস আর ও
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-3 py-2">১</td>
                            <td className="border border-gray-300 px-3 py-2 text-justify">
                                আয়কর আইন, ২০২৩ এর ধারা-১৬৬(২) অনুযায়ী সে সকল করদাতাগণের রিটার্ন
                                দাখিল হতে অব্যহতি প্রদান করা হয়েছে সে সকল করদাতার সুদের বিপরীতে
                                কর্তিত কর চূড়ান্ত করদায় হিসেবে বিবেচিত।
                            </td>
                            <td className="border border-gray-300 px-3 py-2">
                                <a
                                    href="https://bdtaxation.com/income-tax-sro/16"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    এস.আর.ও নং-২৫৩-আইন/আয়কর-০৯/২০২৩
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}