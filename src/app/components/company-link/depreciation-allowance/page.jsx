'use client'

import { useEffect, useState } from "react";
import { PersonalFeature } from "../../personal-link/PersonalFeature";
import TaxAccordions from "../../personal-link/PersonalTax";
import GovernmentLinks from "../../GovtLink";
import React from "react";


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
        logo.src = '/website-logo.png';
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

                                        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="bg-blue-600 text-white">
                                                        <th className="border border-gray-300 p-3 text-center font-bold" style={{ width: '15%' }}>
                                                            ক্রমিক নং
                                                        </th>
                                                        <th className="border border-gray-300 p-3 text-center font-bold" style={{ width: '60%' }}>
                                                            পরিসম্পদের শ্রেণি
                                                        </th>
                                                        <th className="border border-gray-300 p-3 text-center font-bold" style={{ width: '25%' }}>
                                                            হার (অবলোপিত মূল্যের %)
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {tableData.map((item, index) => (
                                                        <React.Fragment key={item.serial || index}>
                                                            <tr>
                                                                <td className="border border-gray-300 p-3 text-center">{item.serial}</td>
                                                                <td className="border border-gray-300 p-3">{item.asset}</td>
                                                                <td className="border border-gray-300 p-3 text-center font-bold">
                                                                    {item.rate && <span>{item.rate}%</span>}
                                                                </td>
                                                            </tr>

                                                            {/* Sub Items */}
                                                            {item.subItems && item.subItems.map((subItem, subIndex) => (
                                                                <tr key={`${item.serial}-${subIndex}`}>
                                                                    <td className="border border-gray-300 p-3 text-center"></td>
                                                                    <td className="border border-gray-300 p-3 pl-8">
                                                                        {subItem.asset}
                                                                    </td>
                                                                    <td className="border border-gray-300 p-3 text-center font-bold">
                                                                        {subItem.rate && <span>{subItem.rate}%</span>}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </React.Fragment>
                                                    ))}
                                                </tbody>
                                            </table>

                                        </div>

                                        <p className="mt-5">মন্তব্য : </p>
                                        <p className="text-red-600">ক্রমিক নং ৬ এর (খ) (আ) সংশোধন করা হয়েছে</p>


                                    </div>

                                    <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                                        <p className="text-justify font-nirmala">কোনো পরিসম্পদের অবলোপিত মূল্যের উপর নিম্নবর্ণিত সারণীতে উল্লিখিত হারে সাধারণ অবচয় ভাতা পরিগণনা করা হইবে, যথা:-</p>

                                        <p className="text-center font-bold font-nirmala">সারণী</p>

                                        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="bg-blue-600 text-white">
                                                        <th className="border border-gray-300 p-3 text-center font-bold" style={{ width: '15%' }}>
                                                            ক্রমিক নং
                                                        </th>
                                                        <th className="border border-gray-300 p-3 text-center font-bold" style={{ width: '60%' }}>
                                                            পরিসম্পদের শ্রেণি
                                                        </th>
                                                        <th className="border border-gray-300 p-3 text-center font-bold" style={{ width: '25%' }}>
                                                            হার (অবলোপিত মূল্যের %)
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* Row 1 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">১।</td>
                                                        <td className="border border-gray-300 p-3">ইমারত (এই সারণীতে অন্য কোনো ভাবে নির্দিষ্ট না থাকিলে)</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">৫</td>
                                                    </tr>

                                                    {/* Row 2 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">২।</td>
                                                        <td className="border border-gray-300 p-3">কারখানা ভবন</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">১০</td>
                                                    </tr>

                                                    {/* Row 3 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">৩।</td>
                                                        <td className="border border-gray-300 p-3">আসবাবপত্র ও ফিটিংস</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">১০</td>
                                                    </tr>

                                                    {/* Row 4 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">৪।</td>
                                                        <td className="border border-gray-300 p-3">অফিসের সরঞ্জাম</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">১০</td>
                                                    </tr>

                                                    {/* Row 5 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">৫।</td>
                                                        <td className="border border-gray-300 p-3">যন্ত্রপাতি, স্থাপনা ও সরঞ্জাম (এই সারণীতে অন্য কোনোভাবে নির্দিষ্ট না থাকিলে)</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">১০</td>
                                                    </tr>

                                                    {/* Row 6 - সমুদ্রগামী জাহাজ (with sub items) */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center align-top" rowSpan="5">৬।</td>
                                                        <td className="border border-gray-300 p-3">সমুদ্রগামী জাহাজ</td>
                                                        <td className="border border-gray-300 p-3 text-center"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 pl-8">(ক) নূতন</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">৫</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 pl-8">(খ) পুরাতন ক্রয়ের সময় যাহার বয়স-</td>
                                                        <td className="border border-gray-300 p-3 text-center"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 pl-12">(অ) অনধিক ১০ বৎসর</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">১০</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 pl-12">(আ) ১০ বৎসর বা ততোধিক</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">২০</td>
                                                    </tr>

                                                    {/* Row 7 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">৭।</td>
                                                        <td className="border border-gray-300 p-3">এক্স-রে, ইলেক্ট্রথেরাপিউটিক ও উহার খুচরা যন্ত্রাংশসহ অন্যান্য মেডিক্যাল যন্ত্রপাতি</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">২০</td>
                                                    </tr>

                                                    {/* Row 8 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">৮।</td>
                                                        <td className="border border-gray-300 p-3">ব্যাটারি চালিত এ্যাপারেটাস ও রিচার্জেবল ব্যটারি</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">৩০</td>
                                                    </tr>

                                                    {/* Row 9 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">৯।</td>
                                                        <td className="border border-gray-300 p-3">অডিও-ভিজুয়াল পণ্য উৎপাদন ও প্রদর্শনের জন্য ব্যবহৃত যন্ত্রপাতি</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">২০</td>
                                                    </tr>

                                                    {/* Row 10 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">১০।</td>
                                                        <td className="border border-gray-300 p-3">ভাড়ায় চালিত ব্যতীত সকল প্রকার মোটরযান</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">১০</td>
                                                    </tr>

                                                    {/* Row 11 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">১১।</td>
                                                        <td className="border border-gray-300 p-3">ভাড়ায় চালিত সকল প্রকার মোটরযান</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">২০</td>
                                                    </tr>

                                                    {/* Row 12 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">১২।</td>
                                                        <td className="border border-gray-300 p-3">প্রিন্টার, মনিটর ও আনুষঙ্গিক আইটেমসহ কম্পিউটার হার্ডওয়ার</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">২৫</td>
                                                    </tr>

                                                    {/* Row 13 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">১৩।</td>
                                                        <td className="border border-gray-300 p-3">প্রফেশনাল ও রেফারেন্স বই</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">২৫</td>
                                                    </tr>

                                                    {/* Row 14 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">১৪।</td>
                                                        <td className="border border-gray-300 p-3">এয়ারক্রাফ্ট, এ্যারোইঞ্জিন ও এরিয়াল ফাটোগ্রাফিক যন্ত্রপাতি</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">৩০</td>
                                                    </tr>

                                                    {/* Row 15 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">১৫।</td>
                                                        <td className="border border-gray-300 p-3">কাঁচ বা প্লাসটিক পণ্য বা কনক্রিট পাইপ তৈরিতে ব্যবহৃত ছাঁচ</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">৩০</td>
                                                    </tr>

                                                    {/* Row 16 - খনিজতেল সম্পর্কিত (with sub items) */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center align-top" rowSpan="3">১৬।</td>
                                                        <td className="border border-gray-300 p-3">খনিজতেল সম্পর্কিত</td>
                                                        <td className="border border-gray-300 p-3 text-center"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 pl-8">(ক) মাটির নীচে স্থাপিত সরঞ্জামাদি</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold text-red-600">১০০</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 pl-8">(খ) বহনযোগ্য বয়লার, খনন যন্ত্র, ওয়েলহেড ট্যাংক ও রিগসহ মাটির উপরে স্থাপিত অন্যান্য সরঞ্জামাদি</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">২৫</td>
                                                    </tr>

                                                    {/* Row 17 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">১৭।</td>
                                                        <td className="border border-gray-300 p-3">সেতু</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">২</td>
                                                    </tr>

                                                    {/* Row 18 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">১৮।</td>
                                                        <td className="border border-gray-300 p-3">রাস্তা</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">২</td>
                                                    </tr>

                                                    {/* Row 19 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">১৯।</td>
                                                        <td className="border border-gray-300 p-3">ফ্লাইওভার</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">২</td>
                                                    </tr>

                                                    {/* Row 20 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">২০।</td>
                                                        <td className="border border-gray-300 p-3">পেভমেন্ট রানওয়ে, ট্যাক্সিওয়ে</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">২.৫</td>
                                                    </tr>

                                                    {/* Row 21 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">২১।</td>
                                                        <td className="border border-gray-300 p-3">এ্যাপ্রোন, টারম্যাক</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">২.৫</td>
                                                    </tr>

                                                    {/* Row 22 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">২২।</td>
                                                        <td className="border border-gray-300 p-3">বোর্ডিং ব্রিজ</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">১০</td>
                                                    </tr>

                                                    {/* Row 23 */}
                                                    <tr>
                                                        <td className="border border-gray-300 p-3 text-center">২৩।</td>
                                                        <td className="border border-gray-300 p-3">যোগাযোগ ও অনুসন্ধান সহায়ক এবং অন্যান্য সরঞ্জাম</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">৫</td>
                                                    </tr>

                                                    {/* Row 24 */}
                                                    <tr className="bg-gray-50">
                                                        <td className="border border-gray-300 p-3 text-center">২৪।</td>
                                                        <td className="border border-gray-300 p-3 font-medium">এই সারণীতে উল্লিখিত হয় নাই এইরূপ সকল ভৌত পরিসম্পদ</td>
                                                        <td className="border border-gray-300 p-3 text-center font-bold">১০%</td>
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