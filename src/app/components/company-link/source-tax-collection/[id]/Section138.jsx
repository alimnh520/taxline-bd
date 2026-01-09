'use client'

import { useEffect, useState } from "react";

export function Section138() {
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

            <h1 className="my-1 font-bold text-2xl py-1">বাণিজ্যিকভাবে পরিচালিত মোটরযান হইতে কর সংগ্রহ</h1>
            <strong className="text-sm">ধারা : ১৩৮</strong>
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
                            <p className="text-justify mb-4">
                                (১) উপ-ধারা (২) এর বিধান সাপেক্ষে, মোটরযান নিবন্ধন বা ফিটনেস নবায়নের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি বা কর্তৃপক্ষ
                                মোটরযানের নিবন্ধন বা ফিটনেস নবায়ন করিবেন না, যদি না নিম্নবর্ণিত সারণীতে উল্লিখিত হারে পরিশোধিত অগ্রিম করের
                                চালান মোটরযানের নিবন্ধন বা ফিটনেস নবায়নের আবেদনের সহিত দাখিল করা হয়, যথা:-
                            </p>

                            <p className="text-center font-bold mb-2">সারণী</p>

                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full border border-gray-300 text-left">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 px-2 py-1 w-1/12">ক্রমিক নং</th>
                                            <th className="border border-gray-300 px-2 py-1 w-6/12">গাড়ির ধরন</th>
                                            <th className="border border-gray-300 px-2 py-1 w-5/12">অগ্রিম কর (টাকা)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">১।</td>
                                            <td className="border border-gray-300 px-2 py-1">৫২ আসনের অধিক আসন বিশিষ্ট বাস</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">২৫ (পঁচিশ) হাজার</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">২।</td>
                                            <td className="border border-gray-300 px-2 py-1">৫২ আসনের অধিক আসন নহে এইরূপ বাস</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">২০ (বিশ) হাজার</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৩।</td>
                                            <td className="border border-gray-300 px-2 py-1">শীতাতপ নিয়ন্ত্রিত বাস</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">৫০ (পঞ্চাশ) হাজার</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৪।</td>
                                            <td className="border border-gray-300 px-2 py-1">ডাবল ডেকার বাস</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">২৫ (পঁচিশ) হাজার</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৫।</td>
                                            <td className="border border-gray-300 px-2 py-1">শীতাতপ নিয়ন্ত্রিত মিনিবাস/কোস্টার</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">২৫ (পঁচিশ) হাজার</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৬।</td>
                                            <td className="border border-gray-300 px-2 py-1">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ মিনিবাস/কোস্টার</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">১২,৫০০ (বার হাজার পাঁচশত)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৭।</td>
                                            <td className="border border-gray-300 px-2 py-1">প্রাইম মুভার</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">৩৫ (পঁয়ত্রিশ) হাজার</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৮।</td>
                                            <td className="border border-gray-300 px-2 py-1">৫ টনের অধিক পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">৩০ (ত্রিশ) হাজার</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৯।</td>
                                            <td className="border border-gray-300 px-2 py-1">১.৫ টনের অধিক, তবে ৫ টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">১৫ (পনের) হাজার</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">১০।</td>
                                            <td className="border border-gray-300 px-2 py-1">১.৫ টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">৭,৫০০ (সাত হাজার পাঁচশত)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">১১।</td>
                                            <td className="border border-gray-300 px-2 py-1">পিকআপ ভ্যান, হিউম্যান হলার, ম্যাক্সি বা অটো রিক্সা</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">৭,৫০০ (সাত হাজার পাঁচশত)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">১২।</td>
                                            <td className="border border-gray-300 px-2 py-1">শীতাতপ নিয়ন্ত্রিত ট্যাক্সিক্যাব</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">১৫ (পনের) হাজার</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">১৩।</td>
                                            <td className="border border-gray-300 px-2 py-1">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ ট্যাক্সিক্যাব</td>
                                            <td className="border border-gray-300 px-2 py-1 text-red-600 font-semibold">৭,৫০০ (সাত হাজার পাঁচশত)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-justify mb-2">
                                (২) যেইক্ষেত্রে একাধিক বৎসরের জন্য নিবন্ধন প্রদান বা ফিটনেস নবায়ন করা হয় সেইক্ষেত্রে উপ-ধারা (১) এর অধীন
                                পরিশোধিতব্য কর নিবন্ধন প্রদান বা ফিটনেস নবায়নের বৎসরের পরবর্তী বৎসর বা বৎসরগুলোর ৩০ জুন তারিখ বা তৎপূর্বে
                                সংগ্রহ করিতে হইবে।
                            </p>

                            <p className="text-justify mb-2">
                                (৩) যেইক্ষেত্রে কোনো বৎসর কোনো ব্যক্তি উপ-ধারা (২) অনুযায়ী অগ্রিম কর পরিশোধে ব্যর্থ হন, সেইক্ষেত্রে পরবর্তী
                                বৎসরে উক্ত ব্যক্তি কর্তৃক পরিশোধিতব্য অগ্রিম করের পরিমাণ ক+খ নিয়মে নির্ধারিত হইবে, যেখানে-
                            </p>
                            <p className="pl-10 text-justify mb-1">ক = পূর্ববর্তী বৎসর বা বৎসরগুলোতে অপরিশোধিত অগ্রিম করের পরিমাণ, এবং</p>
                            <p className="pl-10 text-justify mb-4">খ = পরিশোধের বৎসরে উপ-ধারা (১) অনুযায়ী পরিশোধিতব্য অগ্রিম করের পরিমাণ।</p>

                            <p className="text-justify mb-2 text-red-600 font-semibold">
                                (৪) উপ-ধারা (১) এর অধীন অগ্রিম কর সংগ্রহ করা যাইবে না, যদি মোটরযানটি নিম্নবর্ণিত ব্যক্তি বা প্রতিষ্ঠানের হয়, যথা:-
                            </p>

                            <ul className="pl-10 list-disc text-red-600 mb-4 space-y-1">
                                <li>সরকার;</li>
                                <li>সরকার বা স্থানীয় সরকারের অধীন কোনো প্রকল্প, কর্মসূচি বা কার্যক্রম;</li>
                                <li>কোনো বৈদেশিক কূটনীতিক, বাংলাদেশে কোনো কূটনৈতিক মিশন, জাতিসংঘ ও ইহার অঙ্গ সংগঠনের দপ্তরসমূহ;</li>
                                <li>বাংলাদেশের কোনো বিদেশি উন্নয়ন অংশীজন এবং ইহার সংযুক্ত দপ্তর বা দপ্তরসমূহ;</li>
                                <li>
                                    <a href="/tax-act-section/211" className="underline">ধারা ১৬৬</a> এর উপ-ধারা (২) অনুসারে রিটার্ন দাখিল হইতে
                                    অব্যাহতিপ্রাপ্ত করদাতাগণ;
                                </li>
                                <li>অগ্রিম কর পরিশোধ করিতে হইবে না মর্মে বোর্ড হইতে সার্টিফিকেট গ্রহণকারী কোনো প্রতিষ্ঠান।</li>
                            </ul>

                            <h5 className="font-semibold mb-1">মন্তব্য :</h5>
                            <div className="text-red-600 mb-4">উপ-ধারা (১) এর সারণী ও উপ-ধারা (৪) প্রতিস্থাপন করা হয়েছে</div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p className="text-justify mb-4">
                                (১) উপ-ধারা (২) এর বিধান সাপেক্ষে, মোটরযান নিবন্ধন বা ফিটনেস নবায়নের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি বা কর্তৃপক্ষ
                                মোটরযানের নিবন্ধন বা ফিটনেস নবায়ন করিবেন না, যদি না নিম্নবর্ণিত সারণীতে উল্লিখিত হারে পরিশোধিত অগ্রিম করের
                                চালান মোটরযানের নিবন্ধন বা ফিটনেস নবায়নের আবেদনের সহিত দাখিল করা হয়, যথা:-
                            </p>

                            <p className="text-justify font-bold mb-2">সারণী</p>

                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full border border-gray-300 text-left">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 px-2 py-1 w-1/12">ক্রমিক নং</th>
                                            <th className="border border-gray-300 px-2 py-1 w-6/12">গাড়ির ধরন</th>
                                            <th className="border border-gray-300 px-2 py-1 w-5/12">অগ্রিম কর (টাকা)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">১।</td>
                                            <td className="border border-gray-300 px-2 py-1">৫২ আসনের অধিক আসন বিশিষ্ট বাস</td>
                                            <td className="border border-gray-300 px-2 py-1">১৬ (ষোল) হাজার</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">২।</td>
                                            <td className="border border-gray-300 px-2 py-1">৫২ আসনের অধিক আসন নহে এইরূপ বাস</td>
                                            <td className="border border-gray-300 px-2 py-1">১১,৫০০ (এগারো হাজার পাঁচশত)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৩।</td>
                                            <td className="border border-gray-300 px-2 py-1">শীতাতপ নিয়ন্ত্রিত বাস</td>
                                            <td className="border border-gray-300 px-2 py-1">৩৭,৫০০ (সাঁইত্রিশ হাজার পাঁচশত)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৪।</td>
                                            <td className="border border-gray-300 px-2 py-1">ডাবল ডেকার বাস</td>
                                            <td className="border border-gray-300 px-2 py-1">১৬,০০০ (ষোল হাজার)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৫।</td>
                                            <td className="border border-gray-300 px-2 py-1">শীতাতপ নিয়ন্ত্রিত মিনিবাস/কোস্টার</td>
                                            <td className="border border-gray-300 px-2 py-1">১৬,০০০ (ষোল হাজার)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৬।</td>
                                            <td className="border border-gray-300 px-2 py-1">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ মিনিবাস/কোস্টার</td>
                                            <td className="border border-gray-300 px-2 py-1">৬,৫০০ (ছয় হাজার পাঁচশত)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৭।</td>
                                            <td className="border border-gray-300 px-2 py-1">প্রাইম মুভার</td>
                                            <td className="border border-gray-300 px-2 py-1">২৪,০০০ (চব্বিশ হাজার)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৮।</td>
                                            <td className="border border-gray-300 px-2 py-1">৫ টনের অধিক পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                            <td className="border border-gray-300 px-2 py-1">১৬,০০০ (ষোল হাজার)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">৯।</td>
                                            <td className="border border-gray-300 px-2 py-1">১.৫ টনের অধিক, তবে ৫ টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                            <td className="border border-gray-300 px-2 py-1">৯,৫০০ (নয় হাজার পাঁচশত)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">১০।</td>
                                            <td className="border border-gray-300 px-2 py-1">১.৫ টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                            <td className="border border-gray-300 px-2 py-1">৪,০০০ (চার হাজার)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">১১।</td>
                                            <td className="border border-gray-300 px-2 py-1">পিকআপ ভ্যান, হিউম্যান হলার, ম্যাক্সি বা অটো রিক্সা</td>
                                            <td className="border border-gray-300 px-2 py-1">৪,০০০ (চার হাজার)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">১২।</td>
                                            <td className="border border-gray-300 px-2 py-1">শীতাতপ নিয়ন্ত্রিত ট্যাক্সিক্যাব</td>
                                            <td className="border border-gray-300 px-2 py-1">১১,৫০০ (এগারো হাজার পাঁচশত)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-2 py-1">১৩।</td>
                                            <td className="border border-gray-300 px-2 py-1">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ ট্যাক্সিক্যাব</td>
                                            <td className="border border-gray-300 px-2 py-1">৪,০০০ (চার হাজার)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-justify mb-2">
                                (২) যেইক্ষেত্রে একাধিক বৎসরের জন্য নিবন্ধন প্রদান বা ফিটনেস নবায়ন করা হয় সেইক্ষেত্রে উপ-ধারা (১) এর অধীন
                                পরিশোধিতব্য কর নিবন্ধন প্রদান বা ফিটনেস নবায়নের বৎসরের পরবর্তী বৎসর বা বৎসরগুলোর ৩০ জুন তারিখ বা তৎপূর্বে
                                সংগ্রহ করিতে হইবে।
                            </p>

                            <p className="text-justify mb-2">
                                (৩) যেইক্ষেত্রে কোনো বৎসর কোনো ব্যক্তি উপ-ধারা (২) অনুযায়ী অগ্রিম কর পরিশোধে ব্যর্থ হন, সেইক্ষেত্রে পরবর্তী
                                বৎসরে উক্ত ব্যক্তি কর্তৃক পরিশোধিতব্য অগ্রিম করের পরিমাণ ক+খ নিয়মে নির্ধারিত হইবে, যেখানে-
                            </p>
                            <p className="pl-10 text-justify mb-1">ক = পূর্ববর্তী বৎসর বা বৎসরগুলোতে অপরিশোধিত অগ্রিম করের পরিমাণ, এবং</p>
                            <p className="pl-10 text-justify mb-4">খ = পরিশোধের বৎসরে উপ-ধারা (১) অনুযায়ী পরিশোধিতব্য অগ্রিম করের পরিমাণ।</p>

                            <p className="text-justify mb-2">
                                (৪) উপ-ধারা (১) এর অধীন অগ্রিম কর সংগ্রহ করা যাইবে না, যদি মোটরযানটি নিম্নবর্ণিত ব্যক্তি বা প্রতিষ্ঠানের হয়, যথা:-
                            </p>

                            <ul className="pl-10 list-disc mb-4 space-y-1">
                                <li>সরকার বা স্থানীয় কর্তৃপক্ষ;</li>
                                <li>সরকার বা স্থানীয় সরকারের অধীন কোনো প্রকল্প, কর্মসূচি বা কার্যক্রম;</li>
                                <li>কোনো বৈদেশিক কূটনীতিক, বাংলাদেশে কোনো কূটনৈতিক মিশন, জাতিসংঘ ও ইহার অঙ্গ সংগঠনের দপ্তরসমূহ;</li>
                                <li>বাংলাদেশের কোনো বিদেশি উন্নয়ন অংশীজন এবং ইহার সংযুক্ত দপ্তর বা দপ্তরসমূহ;</li>
                                <li>সরকারের এমপিওভুক্ত (Monthly Payment Order) কোনো শিক্ষা প্রতিষ্ঠান;</li>
                                <li>সরকারি বিশ্ববিদ্যালয় (public university);</li>
                                <li>গেজেটভুক্ত যুদ্ধাহত মুক্তিযোদ্ধা; বা</li>
                                <li>অগ্রিম কর পরিশোধ করিতে হইবে না মর্মে বোর্ড হইতে সার্টিফিকেট গ্রহণকারী কোনো প্রতিষ্ঠান।</li>
                            </ul>
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