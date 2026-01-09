'use client'

import { useEffect, useState } from "react";

export function Section125() {
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

            <h1 className="my-1 font-bold text-2xl py-1">সম্পত্তি হস্তান্তর, ইত্যাদি হইতে কর সংগ্রহ</h1>
            <strong className="text-sm">ধারা : ১২৫</strong>
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

                            <p className="text-justify mb-3 text-red-600">
                                (১) Registration Act, 1908 (Act No. XVI of 1908) এর section 17 এর sub-section (1) এর clauses (b), (c) বা (d) এর অধীন দলিল দস্তাবেজ নিবন্ধনের জন্য দায়িত্বপ্রাপ্ত কোনো নিবন্ধন কর্মকর্তা কোনো দলিল দস্তাবেজ নিবন্ধন করিবেন না , যদিনা সম্পত্তি হস্তান্তকারী নির্ধারিত হারে কর পরিশোধ করেন।
                            </p>

                            <p className="text-justify mb-3">(২) এই ধারার অধীন কর সংগ্রহের ক্ষেত্রে, করের হার-</p>

                            <p className="pl-10 text-justify mb-1">(ক) জমির ক্ষেত্রে কাঠা প্রতি ১.৬৫ (এক দশমিক পয়ষট্টি শতাংশ) ২০ (বিশ) লক্ষ টাকা;</p>
                            <p className="pl-10 text-justify mb-1">(খ) কোনো স্থাপনা, ভবন, ফ্ল্যাট, অ্যাপার্টমেন্ট বা ফ্লোর স্পেস এর ক্ষেত্রে প্রতি বর্গমিটার ১ (এক) হাজার টাকা; অথবা</p>
                            <p className="pl-10 text-justify mb-3">(গ) দলিলে উল্লিখিত মূল্যের উপর ১০% (দশ শতাংশ),</p>

                            <p className="text-justify mb-3">যাহা অধিক হয়, তাহা অতিক্রম করিবে না।</p>

                            <p className="text-justify mb-3">(৩) এই ধারার কোনো কিছুই নিম্নরূপ কোনো দলিলের ক্ষেত্রে প্রযোজ্য হইবে না, যথা:-</p>

                            <p className="pl-10 text-justify mb-1">(ক) বন্ধকী সম্পত্তি বিক্রয়ের ক্ষমতাপ্রাপ্ত কোনো ব্যাংক বা আর্থিক প্রতিষ্ঠান কর্তৃক বিক্রয়;</p>
                            <p className="pl-10 text-justify mb-1">(খ) ঋণের বিপরীতে কোনো ব্যাংক বা আর্থিক প্রতিষ্ঠানের নিকট প্রদত্ত বন্ধকী সম্পদ;</p>
                            <p className="pl-10 text-justify mb-3">(গ) সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন বা সরকার কর্তৃক অনুমোদিত সুকুক ইস্যুর নিমিত্ত গঠিত কোনো ট্রাস্ট বা স্পেশাল পারপাজ ভেহিকল হইতে অথবা কোনো ট্রাস্ট বা স্পেশাল পারপাজ ভেহিকল বরাবর কোনো সম্পত্তি হস্তান্তর।</p>

                            <h5 className="mt-4">মন্তব্য :</h5>
                            <div className="text-red-600">
                                আলোচ্য করবর্ষে উক্ত আইনের উপ-ধারা (১) প্রতিস্থাপন করা হয়েছে।
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>


                            <p className="text-justify"><span className="">(১) Registration Act, 1908 (Act No. XVI of 1908) এর section 17 এর sub-section (1) এর clauses (b), (c) বা (d) এর অধীন দলিল দস্তাবেজ নিবন্ধনের জন্য দায়িত্বপ্রাপ্ত কোনো নিবন্ধন কর্মকর্তা কোনো দলিল দস্তাবেজ নিবন্ধন করিবেন না , যদিনা সম্পত্তি হস্তান্তকারী নির্ধারিত হারে কর পরিশোধ করেন।</span></p>
                            <p className="text-justify"><span className="">(২) এই ধারার অধীন কর সংগ্রহের ক্ষেত্রে, করের হার-</span></p>
                            <p className="ml-20"><span className="">(ক) জমির ক্ষেত্রে <span className="text-red-600">শতাংশ প্রতি ১২ (বারো) </span>লক্ষ টাকা;</span></p>
                            <p className="ml-20"><span className="">(খ) কোনো স্থাপনা, ভবন, ফ্ল্যাট, অ্যাপার্টমেন্ট বা ফ্লোর স্পেস এর ক্ষেত্রে প্রতি বর্গমিটার ১ (এক) হাজার টাকা; অথবা</span></p>
                            <p className="ml-20"><span className="">(গ) দলিলে উল্লিখিত মূল্যের উপর ১০% (দশ শতাংশ),</span></p>
                            <p className="text-justify"><span className="">যাহা অধিক হয়, তাহা অতিক্রম করিবে না।</span></p>
                            <p className="text-justify"><span className="">(৩) এই ধারার কোনো কিছুই নিম্নরূপ কোনো দলিলের ক্ষেত্রে প্রযোজ্য হইবে না, যথা:-</span></p>
                            <p className="ml-20"><span className="">(ক) বন্ধকী সম্পত্তি বিক্রয়ের ক্ষমতাপ্রাপ্ত কোনো ব্যাংক বা আর্থিক প্রতিষ্ঠান কর্তৃক বিক্রয়;</span></p>
                            <p className="ml-20"><span className="">(খ) ঋণের বিপরীতে কোনো ব্যাংক বা আর্থিক প্রতিষ্ঠানের নিকট প্রদত্ত বন্ধকী সম্পদ;</span></p>
                            <p className="ml-20"><span className="">(গ) সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন বা সরকার কর্তৃক অনুমোদিত সুকুক ইস্যুর নিমিত্ত গঠিত কোনো ট্রাস্ট বা স্পেশাল পারপাজ ভেহিকল হইতে অথবা কোনো ট্রাস্ট বা স্পেশাল পারপাজ ভেহিকল বরাবর কোনো সম্পত্তি হস্তান্তর।</span></p><h5>মন্তব্য : </h5>
                            <div>উপ-দফা ২(ক) সংশোধন করা হয়েছে।</div>

                        </div>

                        <div className={`text-justify ${selectedYear === '3' ? 'block' : 'hidden'} space-y-4 pb-10`}>

                            <p className="text-justify"><span className="text-red-700">(১) Registration Act, 1908 (Act No. XVI of 1908) এর section 17 এর sub-section (1) এর clauses (b), (c) বা (d) এর অধীন দলিল দস্তাবেজ নিবন্ধনের জন্য দায়িত্বপ্রাপ্ত কোনো নিবন্ধন কর্মকর্তা, নির্ধারিত হারে কর পরিশোধ ব্যতীত, কোনো দলিল দস্তাবেজ নিবন্ধন করিবেন না।</span></p>
                            <p className="text-justify">(২) এই ধারার অধীন কর সংগ্রহের ক্ষেত্রে, করের হার-</p>
                            <p className="ml-20">(ক) জমির ক্ষেত্রে কাঠা প্রতি ১.৬৫ (এক দশমিক পয়ষট্টি শতাংশ) ২০ (বিশ) লক্ষ টাকা;</p>
                            <p className="ml-20">(খ) কোনো স্থাপনা, ভবন, ফ্ল্যাট, অ্যাপার্টমেন্ট বা ফ্লোর স্পেস এর ক্ষেত্রে প্রতি বর্গমিটার ১ (এক) হাজার টাকা; অথবা</p>
                            <p className="ml-20">(গ) দলিলে উল্লিখিত মূল্যের উপর ১০% (দশ শতাংশ),</p>
                            <p className="text-justify">যাহা অধিক হয়, তাহা অতিক্রম করিবে না।</p>
                            <p className="text-justify">(৩) এই ধারার কোনো কিছুই নিম্নরূপ কোনো দলিলের ক্ষেত্রে প্রযোজ্য হইবে না, যথা:-</p>
                            <p className="ml-20">(ক) বন্ধকী সম্পত্তি বিক্রয়ের ক্ষমতাপ্রাপ্ত কোনো ব্যাংক বা আর্থিক প্রতিষ্ঠান কর্তৃক বিক্রয়;</p>
                            <p className="ml-20">(খ) ঋণের বিপরীতে কোনো ব্যাংক বা আর্থিক প্রতিষ্ঠানের নিকট প্রদত্ত বন্ধকী সম্পদ;</p>
                            <p className="ml-20">(গ) সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন বা সরকার কর্তৃক অনুমোদিত সুকুক ইস্যুর নিমিত্ত গঠিত কোনো ট্রাস্ট বা স্পেশাল পারপাজ ভেহিকল হইতে অথবা কোনো ট্রাস্ট বা স্পেশাল পারপাজ ভেহিকল বরাবর কোনো সম্পত্তি হস্তান্তর।</p>

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
                        ১। সম্পত্তি অধিগ্রহণের ক্ষতিপূরণের বিপরীতে কর্তিত কর চূড়ান্ত করদায় হিসেবে বিবেচিত।
                    </p>
                    <p className="mt-5">২। সম্পত্তি হস্তান্তর হতে কর আদায়ের সংশোধন।  </p>
                    <p className="mt-5">৩। আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য করবর্ষে উক্ত আইনের উপ-ধারা (১) প্রতিস্থাপন করা হয়েছে।</p>
                    <p className="mt-5">৪। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬) </p>
                </span>

                <table className="min-w-full border border-gray-300 table-auto mt-10">
                    <caption className="caption-top text-left text-blue-700 font-semibold mb-2">
                        তথ্যসূত্র
                    </caption>
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-3 py-2 text-center">ক্রমিক</th>
                            <th className="border border-gray-300 px-3 py-2 text-left">মন্তব্য</th>
                            <th className="border border-gray-300 px-3 py-2 text-left">আয় কর এস আর ও</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-3 py-2 text-center">১</td>
                            <td className="border border-gray-300 px-3 py-2">সম্পত্তি অধিগ্রহণ</td>
                            <td className="border border-gray-300 px-3 py-2">
                                <a
                                    href="income-tax-sro/6"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    এস. আর. ও. নং ১৭-আইন/আয়কর-২৪/২০২৪
                                </a>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-3 py-2 text-center">২</td>
                            <td className="border border-gray-300 px-3 py-2">সম্পত্তি হস্তান্তর</td>
                            <td className="border border-gray-300 px-3 py-2">
                                <a
                                    href="income-tax-sro/9"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    এস. আর. ও. নং ৩২৯-আইন/আয়কর-২২/২০২৩
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