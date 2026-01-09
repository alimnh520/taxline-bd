'use client'

import { useEffect, useState } from "react";
import { PersonalFeature } from "../../personal-link/PersonalFeature";
import TaxAccordions from "../../personal-link/PersonalTax";
import GovernmentLinks from "../../GovtLink";


const tableData = [
    { serial: "১।", asset: "ইমারত (এই সারণীতে অন্য কোনো ভাবে নির্দিষ্ট না থাকিলে)", rate: "৫" },
    { serial: "২।", asset: "কারখানা ভবন", rate: "১০" },
    { serial: "৩।", asset: "আসবাবপত্র ও ফিটিংস", rate: "১০" },
    { serial: "৪।", asset: "অফিসের সরঞ্জাম", rate: "১০" },
    { serial: "৫।", asset: "যন্ত্রপাতি, স্থাপনা ও সরঞ্জাম (এই সারণীতে অন্য কোনোভাবে নির্দিষ্ট না থাকিলে)", rate: "১০" },
    {
        serial: "৬।",
        asset: "সমুদ্রগামী জাহাজ",
        subItems: [
            { asset: "(ক) নূতন", rate: "৫" },
            { asset: "(খ) পুরাতন ক্রয়ের সময় যাহার বয়স-", rate: "" },
            { asset: "   (অ) অনধিক ১০ বৎসর", rate: "১০" },
            { asset: "   (আ) ১০ বৎসর এর অধিক", rate: "২০", highlight: true }
        ],
        rate: ""
    },
    { serial: "৭।", asset: "এক্স-রে, ইলেক্ট্রথেরাপিউটিক ও উহার খুচরা যন্ত্রাংশসহ অন্যান্য মেডিক্যাল যন্ত্রপাতি", rate: "২০" },
    { serial: "৮।", asset: "ব্যাটারি চালিত এ্যাপারেটাস ও রিচার্জেবল ব্যটারি", rate: "৩০" },
    { serial: "৯।", asset: "অডিও-ভিজুয়াল পণ্য উৎপাদন ও প্রদর্শনের জন্য ব্যবহৃত যন্ত্রপাতি", rate: "২০" },
    { serial: "১০।", asset: "ভাড়ায় চালিত ব্যতীত সকল প্রকার মোটরযান", rate: "১০" },
    { serial: "১১।", asset: "ভাড়ায় চালিত সকল প্রকার মোটরযান", rate: "২০" },
    { serial: "১২।", asset: "প্রিন্টার, মনিটর ও আনুষঙ্গিক আইটেমসহ কম্পিউটার হার্ডওয়ার", rate: "২৫" },
    { serial: "১৩।", asset: "প্রফেশনাল ও রেফারেন্স বই", rate: "২৫" },
    { serial: "১৪।", asset: "এয়ারক্রাফ্ট, এ্যারোইঞ্জিন ও এরিয়াল ফাটোগ্রাফিক যন্ত্রপাতি", rate: "৩০" },
    { serial: "১৫।", asset: "কাঁচ বা প্লাসটিক পণ্য বা কনক্রিট পাইপ তৈরিতে ব্যবহৃত ছাঁচ", rate: "৩০" },
    {
        serial: "১৬।",
        asset: "খনিজতেল সম্পর্কিত",
        subItems: [
            { asset: "(ক) মাটির নীচে স্থাপিত সরঞ্জামাদি", rate: "১০০" },
            { asset: "(খ) বহনযোগ্য বয়লার, খনন যন্ত্র, ওয়েলহেড ট্যাংক ও রিগসহ মাটির উপরে স্থাপিত অন্যান্য সরঞ্জামাদি", rate: "২৫" }
        ],
        rate: ""
    },
    { serial: "১৭।", asset: "সেতু", rate: "২" },
    { serial: "১৮।", asset: "রাস্তা", rate: "২" },
    { serial: "১৯।", asset: "ফ্লাইওভার", rate: "২" },
    { serial: "২০।", asset: "পেভমেন্ট রানওয়ে, ট্যাক্সিওয়ে", rate: "২.৫" },
    { serial: "২১।", asset: "এ্যাপ্রোন, টারম্যাক", rate: "২.৫" },
    { serial: "২২।", asset: "বোর্ডিং ব্রিজ", rate: "১০" },
    { serial: "২৩।", asset: "যোগাযোগ ও অনুসন্ধান সহায়ক এবং অন্যান্য সরঞ্জাম", rate: "৫" },
    { serial: "২৪।", asset: "এই সারণীতে উল্লিখিত হয় নাই এইরূপ সকল ভৌত পরিসম্পদ", rate: "১০%" }
];



export default function page() {
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

        <div className="flex flex-col justify-start items-center gap-y-8 mx-auto border-t border-t-gray-200">

            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-center gap-x-5 w-10/12">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/3 p-4">

                    <div className="col-md-6 order-1 order-md-2" id="sectionContent" >

                        {/* Print Button */}
                        <button
                            className="btn btn-secondary print:hidden bg-[#ff0000] px-4 py-2 text-white rounded-md"
                            onClick={printSection}
                        >
                            Print
                        </button>

                        <h1 className="my-1 font-bold text-2xl py-1">সাধারণ অবচয় ভাতার হার</h1>
                        <strong className="text-sm">ধারা : অনুচ্ছেদ-৪</strong>
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

                            <div className="col-md-12 mt-6">
                                <div className="w-full text-sm">

                                    <div className={`text-justify ${selectedYear === '1' ? 'block' : 'hidden'} space-y-4`}>
                                        <p className="text-justify font-nirmala">কোনো পরিসম্পদের অবলোপিত মূল্যের উপর নিম্নবর্ণিত সারণীতে উল্লিখিত হারে সাধারণ অবচয় ভাতা পরিগণনা করা হইবে, যথা:-</p>

                                        <p className="text-center font-bold font-nirmala">সারণী</p>

                                        <div className="divide-y divide-gray-100">
                                            {tableData.map((item, index) => (
                                                <div key={index}>
                                                    {/* Main Row */}
                                                    <div className="grid grid-cols-12 hover:bg-blue-50 transition-colors">
                                                        <div className="col-span-2 md:col-span-1 p-4 text-center border-r border-gray-100">
                                                            <div className="font-semibold text-gray-700">{item.serial}</div>
                                                        </div>

                                                        <div className="col-span-7 md:col-span-9 p-4 border-r border-gray-100">
                                                            <div className="text-gray-800">{item.asset}</div>
                                                        </div>

                                                        <div className="col-span-3 md:col-span-2 p-4 text-center">
                                                            {item.rate && (
                                                                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-sm">
                                                                    {item.rate}%
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {item.subItems && item.subItems.map((subItem, subIndex) => (
                                                        <div key={subIndex} className="grid grid-cols-12 hover:bg-gray-50 transition-colors">
                                                            <div className="col-span-2 md:col-span-1 p-3 text-center border-r border-gray-100">
                                                                {subIndex === 0 && <span className="text-gray-400">↳</span>}
                                                            </div>

                                                            <div className={`col-span-7 md:col-span-9 p-3 border-r border-gray-100 ${subIndex === item.subItems.length - 1 ? 'pb-4' : ''}`}>
                                                                <div className={`ml-4 ${subItem.highlight ? 'text-red-600 font-medium' : 'text-gray-700'}`}>
                                                                    {subItem.asset}
                                                                </div>
                                                            </div>

                                                            <div className="col-span-3 md:col-span-2 p-3 text-center">
                                                                {subItem.rate && (
                                                                    <span className={`inline-block px-3 py-1 rounded-full font-semibold text-sm ${subItem.rate === '১০০' ? 'bg-red-100 text-red-800' :
                                                                        subItem.rate === '২০' || subItem.rate === '৩০' ? 'bg-orange-100 text-orange-800' :
                                                                            'bg-blue-100 text-blue-800'
                                                                        }`}>
                                                                        {subItem.rate}%
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>

                                        <p className="mt-5">মন্তব্য : </p>
                                        <p className="text-red-600">ক্রমিক নং ৬ এর (খ) (আ) সংশোধন করা হয়েছে</p>


                                    </div>

                                    <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                                        <p className="text-justify mb-4">
                                            রয়্যালটি, ফ্র্যাঞ্চাইজ বা লাইসেন্স, ট্রেডমার্ক, পেটেন্ট, কপিরাইট,
                                            শিল্প নকশা, উদ্ভিদের জাত, ভৌগলিক নির্দেশক পণ্য বা মেধাসত্ত্ব সংক্রান্ত
                                            অন্য কোনো সম্পত্তি অথবা অভৌত বা অমূর্ত বা নিরাকার বিষয়ের জন্য অর্থ
                                            পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি, উক্ত অর্থ প্রদান বা ক্রেডিটের সময়
                                            নিম্নবর্ণিত সারণীতে উল্লিখিত হারে কর কর্তন করিবেন, যথা:-
                                        </p>

                                        <p className="font-semibold mb-2">সারণী</p>

                                        {/* Table Wrapper for Mobile Scroll */}
                                        <div className="overflow-x-auto">
                                            <table className="w-full border border-gray-300 text-sm">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th className="border border-gray-300 px-4 py-2 text-left">
                                                            পরিশোধের বর্ণনা
                                                        </th>
                                                        <th className="border border-gray-300 px-4 py-2 text-left">
                                                            কর কর্তনের হার
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2 text-justify">
                                                            (১)
                                                        </td>
                                                        <td className="border border-gray-300 px-4 py-2 text-justify">
                                                            (২)
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2 text-justify">
                                                            ভিত্তিমূল্যের পরিমাণ ২৫ (পঁচিশ) লক্ষ টাকা অতিক্রম না করিলে
                                                        </td>
                                                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                                                            ১০% (দশ শতাংশ)
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2 text-justify">
                                                            ভিত্তিমূল্যের পরিমাণ ২৫ (পঁচিশ) লক্ষ টাকা অতিক্রম করিলে
                                                        </td>
                                                        <td className="border border-gray-300 px-4 py-2 font-semibold">
                                                            ১২% (বার শতাংশ)
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                                    ১। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬)
                                </p>
                            </span>
                        </div>

                        <hr className="mt-6 text-gray-200" />
                    </div>
                </div>
            </div>
            <GovernmentLinks />
        </div>
    );
}