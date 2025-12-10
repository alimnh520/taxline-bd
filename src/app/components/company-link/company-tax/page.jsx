// /components/personal-link/reduced-income-tax/page.js
'use client'
import React from "react";
import { useState } from "react";
import { PersonalFeature } from "../../personal-link/PersonalFeature";
import TaxAccordions from "../../personal-link/PersonalTax";
import GovernmentLinks from "../../GovtLink";


export default function page() {

    const [selectedYear, setSelectedYear] = useState('24');

    return (
        <div className="flex flex-col justify-start items-center gap-y-8 mx-auto border-t border-t-gray-200">

            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-center gap-x-5 w-10/12">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/3 p-4">
                    <h1 className="text-center text-4xl font-bold mb-6">কোম্পানি কর হার</h1>

                    <div className="w-full mb-6 flex items-center justify-between">
                        <label className="block  font-semibold">করবর্ষ</label>
                        <div className="w-2/3">
                            <select
                                id="selectedMinimumTaxAmountId"
                                className="w-full border border-green-500 outline-none appearance-none rounded px-3 py-2"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                            >
                                <option value="24">২০২৭-২০২৮</option>
                                <option value="23">২০২৬-২০২৭</option>
                                <option value="9">২০২৫-২০২৬</option>
                                <option value="8">২০২৪-২০২৫</option>
                                <option value="7">২০২৩-২০২৪</option>
                                <option value="6">২০২২-২০২৩</option>
                                <option value="16">২০২১-২০২২</option>
                                <option value="17">২০২০-২০২১</option>
                                <option value="18">২০১৯-২০২০</option>
                                <option value="19">২০১৮-২০১৯</option>
                                <option value="20">২০১৭-২০১৮</option>
                                <option value="21">২০১৬-২০১৭</option>
                                <option value="22">২০১৫-২০১৬</option>
                                <option value="15">২০১৪-২০১৫</option>
                                <option value="14">২০১৩-২০১৪</option>
                                <option value="13">২০১২-২০১৩</option>
                                <option value="12">২০১১-২০১২</option>
                                <option value="11">২০১০-২০১১</option>
                                <option value="10">২০০৯-২০১০</option>
                                <option value="5">২০০৮-২০০৯</option>
                                <option value="4">২০০৭-২০০৮</option>
                                <option value="3">২০০৬-২০০৭</option>
                                <option value="2">২০০৫-২০০৬</option>
                                <option value="1">২০০৪-২০০৫</option>
                            </select>
                        </div>
                    </div>

                    {(selectedYear === '24' || selectedYear === '23') && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse">
                                <colgroup>
                                    <col style={{ width: '9.68564%' }} />
                                    <col style={{ width: '51.147%' }} />
                                    <col style={{ width: '14.5285%' }} />
                                    <col style={{ width: '24.6389%' }} />
                                </colgroup>
                                <thead>
                                    <tr className="h-[53.3125px]">
                                        <th className="border border-black text-center font-bold">ক্রমিক নং</th>
                                        <th className="border border-black text-center font-bold">খাত</th>
                                        <th className="border border-black text-center font-bold">প্রযোজ্য করহার</th>
                                        <th className="border border-black text-center font-bold">শর্ত</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="align-top">
                                        <td className="border border-black text-center" rowSpan={3}><strong>ক</strong></td>
                                        <td className="border border-black">
                                            (অ) ক্রমিক নং-খ, গ ও ঘ ব্যতিত প্রত্যেকটি পাবলিকলি ট্রেডেড কোম্পানি- যাদের পরিশোধিত মূলধনের সর্বনিম্ন ১০% শেয়ার IPO বা Direct Listing এর মাধ্যমে হস্তান্তরিত হলে
                                        </td>
                                        <td className="border border-black text-center">২২.৫%</td>
                                        <td className="border border-black text-center">
                                            তবে শর্ত থাকে যে, বিবেচ্য আয়বর্ষে সকল প্রকার আয় ব্যাংক ট্রান্সফারের মাধ্যমে সম্পন্ন করলে উক্ত আয়ের করহার ২০% হবে।
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">(আ) অন্যান্য সকল পাবলিকলি ট্রেডেড কোম্পানির ক্ষেত্রে</td>
                                        <td className="border border-black text-center">২৭.৫%</td>
                                        <td className="border border-black text-center">
                                            তবে শর্ত থাকে যে, বিবেচ্য আয়বর্ষে সকল প্রকার আয় ব্যাংক ট্রান্সফারের মাধ্যমে সম্পন্ন করলে উক্ত আয়ের করহার ২৫% হবে।
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">
                                            (ই) উপরোক্ত “অ ও আ”-তে উল্লিখিত কোম্পানি ব্যতীত আয়কর আইন, ২০২৩ এর <a href="/tax-act-section/2" className="text-blue-600 underline">ধারা-২</a> এর দফা (৩১) এ সংজ্ঞায়িত কোম্পানীর ক্ষেত্রে
                                        </td>
                                        <td className="border border-black text-center">২৭.৫%</td>
                                        <td className="border border-black text-center">-</td>
                                    </tr>

                                    <tr className="align-top">
                                        <td className="border border-black text-center" rowSpan={3}><strong>খ</strong></td>
                                        <td className="border border-black"><strong>ব্যাংক, বিমা প্রতিষ্ঠান ও ফাইন্যান্স কোম্পানিসমূহ:</strong></td>
                                        <td className="border border-black text-center">&nbsp;</td>
                                        <td className="border border-black text-center">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">পাবলিকলি ট্রেডেড এইরূপ প্রত্যেকটি কোম্পানির ক্ষেত্রে</td>
                                        <td className="border border-black text-center">৩৭.৫%</td>
                                        <td className="border border-black text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">পাবলিকলি ট্রেডেড নয় এইরূপ প্রত্যেকটি কোম্পানির ক্ষেত্রে</td>
                                        <td className="border border-black text-center">৪০%</td>
                                        <td className="border border-black text-center">-</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-center"><strong>গ</strong></td>
                                        <td className="border border-black">সিগারেট, বিড়ি, জর্দা, গুলসহ সকল প্রকার তামাকজাত পণ্য প্রস্তুতকারী কোম্পানি</td>
                                        <td className="border border-black text-center">৪৫%</td>
                                        <td className="border border-black text-center">-</td>
                                    </tr>

                                    <tr className="align-top">
                                        <td className="border border-black text-center"><strong>ঘ</strong></td>
                                        <td className="border border-black">মোবাইল অপারেটর কোম্পানি-&nbsp;</td>
                                        <td className="border border-black text-center">৪৫%</td>
                                        <td className="border border-black">
                                            <p>তবে শর্ত থাকে যে, মোবাইল ফোন অপারেটর কোম্পানি যদি তার পরিশোধিত মূলধনের ১০% শেয়ার, যার মধ্যে Pre Initial Publice Offereing Placement ৫% এর অধিক থাকতে পারবে না, স্টক এক্সচেঞ্জের মাধ্যমে হস্তান্তর করতঃ Publicly Traded Company তে রূপান্তরিত হয় সেই ক্ষেত্রে করের হার হবে ৪০%।</p>
                                            <p>&nbsp;</p>
                                            <p>আরো শর্ত থাকে যে, যদি এইরূপ কোম্পানি তার পরিশোধিত মূলধনের ন্যূনতম ২৫% শেয়ার Initial Publice Offereing (IPO) এর মাধ্যমে হস্তান্তর করে, তাহলে এইরূপ কোম্পানি উক্ত হস্তান্তর সংশ্লিষ্ট বৎসরে প্রযোজ্য আয়করের উপর ১০% হারে আয়কর রেয়াত লাভ করবে।</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-center" colSpan={2}><span className="text-red-600 font-bold">কোম্পানী ব্যতীত অন্য শ্রেণীর করদাতা</span></td>
                                        <td className="border border-black text-center">&nbsp;</td>
                                        <td className="border border-black text-center">&nbsp;</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-center"><strong>১</strong></td>
                                        <td className="border border-black">সিগারেট, বিড়ি, জর্দা, গুলসহ সকল প্রকার তামাকজাত পণ্য প্রস্তুতকারক&nbsp;</td>
                                        <td className="border border-black text-center">৪৫%</td>
                                        <td className="border border-black text-center">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black text-center"><strong>২</strong></td>
                                        <td className="border border-black">ট্রাস্ট, ব্যক্তিসংঘ এবং ফার্ম</td>
                                        <td className="border border-black text-center">২৭.৫%</td>
                                        <td className="border border-black text-center">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black text-center"><strong>৩</strong></td>
                                        <td className="border border-black">সমবায় সমিতির ক্ষেত্রে</td>
                                        <td className="border border-black text-center">২০%</td>
                                        <td className="border border-black text-center">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black text-center"><strong>৪</strong></td>
                                        <td className="border border-black">বেসরকারি বিশ্ববিদ্যালয়, বেসরকারি মেডিক্যাল কলেজ, বেসরকারি ডেন্টাল কলেজ, বেসরকারি ইঞ্জিনিয়ারিং কলেজ বা কেবলমাত্র তথ্যপ্রযুক্তি বিষয়ে শিক্ষাদান নিয়োজিত বেসরকারি কলেজ</td>
                                        <td className="border border-black text-center">১০%</td>
                                        <td className="border border-black text-center">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black text-center">&nbsp;</td>
                                        <td className="border border-black" colSpan={3}><strong>লভ্যাংশ এর উপর- ২০% (<a href="/tax-act-section/147" className="text-blue-600 underline">ধারা-১০২</a>)</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>)
                    }
                    {selectedYear === '9' && (
                        <div className="col-12 overflow-x-auto">
                            <table className="table-auto border border-black w-full border-collapse">
                                <colgroup>
                                    <col style={{ width: "7.64656%" }} />
                                    <col style={{ width: "56.9244%" }} />
                                    <col style={{ width: "15.889%" }} />
                                    <col style={{ width: "19.5401%" }} />
                                </colgroup>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">ক্রমিক নং</td>
                                        <td className="border border-black font-bold">খাত</td>
                                        <td className="border border-black font-bold">প্রযোজ্য করহার</td>
                                        <td className="border border-black font-bold">শর্ত পরিপালনে</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">১</td>
                                        <td className="border border-black text-left">
                                            পাবলিকলি ট্রেডেড কোম্পানি- পরিশোধিত মূলধনের ১০% এর অধিক IPO এর মাধ্যমে স্থানান্তরিত হলে
                                        </td>
                                        <td className="border border-black">২২.৫%</td>
                                        <td className="border border-black text-center text-red-600 font-bold">(শর্ত-১) ২০%</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black text-left">
                                            পাবলিকলি ট্রেডেড কোম্পানি- পরিশোধিত মূলধনের ১০% বা এর কম IPO এর মাধ্যমে স্থানান্তরিত হলে
                                        </td>
                                        <td className="border border-black">২৫%</td>
                                        <td className="border border-black text-center text-red-600 font-bold">(শর্ত-১) ২২.৫%</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">২</td>
                                        <td className="border border-black text-left">এক ব্যক্তি কোম্পানি</td>
                                        <td className="border border-black">২২.৫%</td>
                                        <td className="border border-black text-center text-red-600 font-bold">(শর্ত-১) ২০%</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৩</td>
                                        <td className="border border-black text-left">
                                            আয়কর আইন, ২০২৩ এর <a href="/tax-act-section/2" className="text-blue-600 underline">ধারা-২</a> এর দফা (৩১) এ সংজ্ঞায়িত কোম্পানী
                                        </td>
                                        <td className="border border-black">২৭.৫%</td>
                                        <td className="border border-black text-center text-red-600 font-bold">(শর্ত-১) ২৫%</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold" rowSpan={6}>৪</td>
                                        <td className="border border-black text-red-600 font-bold">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান (মার্চেন্ট ব্যাংক ব্যতীত)</td>
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black">&nbsp;</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান - পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান - নন-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৪০%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black text-left">মার্চেন্ট ব্যাংক</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black text-left">সিগারেট, বিড়ি, জর্দা, গুলসহ সকল তামাকজাত পণ্য প্রস্তুতকারী কোম্পানি</td>
                                        <td className="border border-black">৪৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black text-left">মোবাইল অপারেটর কোম্পানি</td>
                                        <td className="border border-black">৪৫%</td>
                                        <td className="border border-black text-center text-red-600 font-bold">(শর্ত-২) ৪০%</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black" colSpan={2}><span className="text-red-600 font-bold">কোম্পানী ব্যতীত অন্য শ্রেণীর করদাতা</span></td>
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black">&nbsp;</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">১</td>
                                        <td className="border border-black text-left">সিগারেট, বিড়ি, জর্দা, গুলসহ সকল প্রকার তামাকজাত পণ্য প্রস্তুতকারক</td>
                                        <td className="border border-black">৪৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">২</td>
                                        <td className="border border-black text-left">ট্রাস্ট, তহবিল, ব্যক্তিসংঘ এবং অন্যান্য করারোপযোগ্য সত্তা</td>
                                        <td className="border border-black">২৭.৫%</td>
                                        <td className="border border-black text-center text-red-600 font-bold">(শর্ত-১) ২৫%</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৩</td>
                                        <td className="border border-black text-left">সমবায় সমিতির ক্ষেত্রে</td>
                                        <td className="border border-black">২০%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৪</td>
                                        <td className="border border-black text-left">
                                            বেসরকারি বিশ্ববিদ্যালয়, বেসরকারি মেডিক্যাল কলেজ, বেসরকারি ডেন্টাল কলেজ, বেসরকারি ইঞ্জিনিয়ারিং কলেজ বা কেবলমাত্র তথ্যপ্রযুক্তি বিষয়ে শিক্ষাদান নিয়োজিত বেসরকারি কলেজ
                                        </td>
                                        <td className="border border-black">১৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black text-left" colSpan={3}>
                                            <p className="text-red-600 font-bold">শর্ত-১: সকল প্রকার আয় ও প্রাপ্তি এবং প্রত্যেক একক লেনদেনে পাঁচ লক্ষ টাকার অধিক ও বার্ষিক সর্বমোট ছত্রিশ লক্ষ টাকার উর্ধ্বে সকল প্রকার ব্যয় ও বিনিয়োগ ব্যাংক ট্রান্সফারের মাধ্যমে সম্পন্ন করতে হবে।</p>
                                            <p className="text-red-600 font-bold">শর্ত-২ঃ</p>
                                            <p className="font-bold">(ক) পরিশোধিত মূলধনের নূন্যতম ১০% শেয়ার, যার মধ্যে Pre-Initail Public Offering Placement ৫% এর অধিক নয়, স্টক এক্সচেঞ্জের মাধ্যমে হস্তান্তর করত: Publicly Traded Company তে রূপান্তর হয়।</p>
                                            <p className="font-bold">(খ) তাছাড়াও যদি এইরূপ কোম্পানির পরিশোধিত মূলধনের নূন্যতম ২০% শেয়ার IPO এর মাধ্যমে হস্তান্তর করে, তাহলে কোম্পানি উক্ত হস্তান্তর সংশ্লিষ্ট বৎসরে প্রযোজ্য আয়করের উপর ১০% হারে আয়কর রেয়াত লাভ করবে।</p>
                                        </td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black" colSpan={3}><strong>লভ্যাংশ এর উপর- ২০%</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                    }
                    {selectedYear === '8' && (
                        <div className="col-12 overflow-x-auto">
                            <table className="table-auto border border-black w-full border-collapse">
                                <colgroup>
                                    <col style={{ width: "7.64656%" }} />
                                    <col style={{ width: "56.9244%" }} />
                                    <col style={{ width: "15.889%" }} />
                                    <col style={{ width: "19.5401%" }} />
                                </colgroup>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">ক্রমিক নং</td>
                                        <td className="border border-black font-bold">খাত</td>
                                        <td className="border border-black font-bold">প্রযোজ্য করহার</td>
                                        <td className="border border-black font-bold">শর্ত পরিপালনে</td>
                                    </tr>

                                    {/* ১ */}
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">১</td>
                                        <td className="border border-black text-left">
                                            পাবলিকলি ট্রেডেড কোম্পানি- পরিশোধিত মূলধনের ১০% এর অধিক IPO এর মাধ্যমে স্থানান্তরিত হলে
                                        </td>
                                        <td className="border border-black">২২.৫%</td>
                                        <td className="border border-black text-center text-red-600 font-bold">(শর্ত-১) ২০%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black text-left">
                                            পাবলিকলি ট্রেডেড কোম্পানি- পরিশোধিত মূলধনের ১০% বা এর কম IPO এর মাধ্যমে স্থানান্তরিত হলে
                                        </td>
                                        <td className="border border-black">২৫%</td>
                                        <td className="border border-black text-center text-red-600 font-bold">(শর্ত-১) ২২.৫%</td>
                                    </tr>

                                    {/* ২ */}
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">২</td>
                                        <td className="border border-black text-left">এক ব্যক্তি কোম্পানি</td>
                                        <td className="border border-black">২২.৫%</td>
                                        <td className="border border-black text-center text-red-600 font-bold">(শর্ত-১) ২০%</td>
                                    </tr>

                                    {/* ৩ */}
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৩</td>
                                        <td className="border border-black text-left">
                                            আয়কর আইন, ২০২৩ এর <a href="/tax-act-section/2" className="text-blue-600 underline">ধারা-২</a> এর দফা (৩১) এ সংজ্ঞায়িত কোম্পানী
                                        </td>
                                        <td className="border border-black">২৭.৫%</td>
                                        <td className="border border-black text-center text-red-600 font-bold">(শর্ত-১) ২৫%</td>
                                    </tr>

                                    {/* ৪ - ব্যাংক ইত্যাদি */}
                                    <tr className="text-center">
                                        <td className="border border-black font-bold" rowSpan={6}>৪</td>
                                        <td className="border border-black text-red-600 font-bold">
                                            ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান (মার্চেন্ট ব্যাংক ব্যতীত)
                                        </td>
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black">&nbsp;</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান - পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান - নন-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৪০%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black text-left">মার্চেন্ট ব্যাংক</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black text-left">সিগারেট, বিড়ি, জর্দা, গুলসহ সকল তামাকজাত পণ্য প্রস্তুতকারী কোম্পানি</td>
                                        <td className="border border-black">৪৫% + ২.৫% সারচার্জ</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black text-left">মোবাইল অপারেটর কোম্পানি</td>
                                        <td className="border border-black">৪৫%</td>
                                        <td className="border border-black text-center text-red-600 font-bold">(শর্ত-২) ৪০%</td>
                                    </tr>

                                    {/* কোম্পানী ব্যতীত */}
                                    <tr className="text-center">
                                        <td className="border border-black" colSpan={2}>
                                            <span className="text-red-600 font-bold">কোম্পানী ব্যতীত অন্য শ্রেণীর করদাতা</span>
                                        </td>
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black">&nbsp;</td>
                                    </tr>

                                    {/* অন্যান্য করদাতা */}
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">১</td>
                                        <td className="border border-black text-left">সিগারেট, বিড়ি, জর্দা, গুলসহ সকল প্রকার তামাকজাত পণ্য প্রস্তুতকারক</td>
                                        <td className="border border-black">৪৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">২</td>
                                        <td className="border border-black text-left">ট্রাস্ট, তহবিল, ব্যক্তিসংঘ এবং অন্যান্য করারোপযোগ্য সত্তা</td>
                                        <td className="border border-black">২৭.৫%</td>
                                        <td className="border border-black text-center text-red-600 font-bold">(শর্ত-১) ২৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৩</td>
                                        <td className="border border-black text-left">সমবায় সমিতির ক্ষেত্রে</td>
                                        <td className="border border-black">২০%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৪</td>
                                        <td className="border border-black text-left">
                                            বেসরকারি বিশ্ববিদ্যালয়, বেসরকারি মেডিক্যাল কলেজ, বেসরকারি ডেন্টাল কলেজ, বেসরকারি ইঞ্জিনিয়ারিং কলেজ বা কেবলমাত্র তথ্যপ্রযুক্তি বিষয়ে শিক্ষাদান নিয়োজিত বেসরকারি কলেজ
                                        </td>
                                        <td className="border border-black">১৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    {/* শর্ত-১, শর্ত-২ */}
                                    <tr>
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black text-left" colSpan={3}>
                                            <p className="text-red-600 font-bold">শর্ত-১: সকল প্রকার আয় ও প্রাপ্তি এবং প্রত্যেক একক লেনদেনে পাঁচ লক্ষ টাকার অধিক ও বার্ষিক সর্বমোট ছত্রিশ লক্ষ টাকার উর্ধ্বে সকল প্রকার ব্যয় ও বিনিয়োগ ব্যাংক ট্রান্সফারের মাধ্যমে সম্পন্ন করতে হবে।</p>
                                            <p className="text-red-600 font-bold">শর্ত-২ঃ</p>
                                            <p className="font-bold">(ক) পরিশোধিত মূলধনের নূন্যতম ১০% শেয়ার, যার মধ্যে Pre-Initail Public Offering Placement ৫% এর অধিক নয়, স্টক এক্সচেঞ্জের মাধ্যমে হস্তান্তর করত: Publicly Traded Company তে রূপান্তর হয়।</p>
                                            <p className="font-bold">(খ) তাছাড়াও যদি এইরূপ কোম্পানির পরিশোধিত মূলধনের নূন্যতম ২০% শেয়ার IPO এর মাধ্যমে হস্তান্তর করে, তাহলে কোম্পানি উক্ত হস্তান্তর সংশ্লিষ্ট বৎসরে প্রযোজ্য আয়করের উপর ১০% হারে আয়কর রেয়াত লাভ করবে।</p>
                                        </td>
                                    </tr>

                                    {/* লভ্যাংশ */}
                                    <tr className="text-center">
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black" colSpan={3}><strong>লভ্যাংশ এর উপর- ২০%</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                    }
                    {selectedYear === '7' && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse">
                                <colgroup>
                                    <col className="w-[7.65%]" />
                                    <col className="w-[56.92%]" />
                                    <col className="w-[15.88%]" />
                                    <col className="w-[19.54%]" />
                                </colgroup>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">ক্রমিক নং</td>
                                        <td className="border border-black font-bold">খাত</td>
                                        <td className="border border-black font-bold">প্রযোজ্য করহার</td>
                                        <td className="border border-black font-bold">শর্ত পরিপালনের ব্যর্থতায়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">১</td>
                                        <td className="border border-black text-left">পাবলিকলি ট্রেডেড কোম্পানি- পরিশোধিত মূলধনের ১০% এর অধিক IPO এর মাধ্যমে স্থানান্তরিত হলে</td>
                                        <td className="border border-black">২০%</td>
                                        <td className="border border-black">২২.৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black text-left">পাবলিকলি ট্রেডেড কোম্পানি- পরিশোধিত মূলধনের ১০% বা এর কম IPO এর মাধ্যমে স্থানান্তরিত হলে</td>
                                        <td className="border border-black">২২.৫%</td>
                                        <td className="border border-black">২৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">২</td>
                                        <td className="border border-black text-left">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black">২৭.৫%</td>
                                        <td className="border border-black">৩০%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৩</td>
                                        <td className="border border-black text-left">এক ব্যক্তি কোম্পানি</td>
                                        <td className="border border-black">২২.৫%</td>
                                        <td className="border border-black">২৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold" rowSpan={7}>৪</td>
                                        <td className="border border-black text-red-600 font-bold">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান</td>
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black">&nbsp;</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান (মার্চেন্ট ব্যাংক ব্যতীত) -পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান- নন-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৪০%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black text-left">মার্চেন্ট ব্যাংক</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black text-left">সিগারেট, বিড়ি, জর্দা, গুলসহ সকল তামাকজাত পণ্য প্রস্তুতকারী কোম্পানি</td>
                                        <td className="border border-black">৪৫% + ২.৫% সারচার্জ</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black text-left">পাবলিকলি ট্রেডেড মোবাইল অপারেটর কোম্পানি- পরিশোধিত মূলধনের নূন্যতম ১০% শেয়ার, যার মধ্যে Pre-Initail Public Offering Placement ৫% এর অধিক নয়</td>
                                        <td className="border border-black">৪০%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black text-left">নন-পাবলিকলি ট্রেডেড মোবাইল অপারেটর কোম্পানি</td>
                                        <td className="border border-black">৪৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black text-red-600 font-bold" colSpan={2}>কোম্পানী ব্যতীত অন্য শ্রেণীর করদাতা</td>
                                        <td className="border border-black">&nbsp;</td>
                                        <td className="border border-black">&nbsp;</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">১</td>
                                        <td className="border border-black text-left">সিগারেট, বিড়ি, জর্দা, গুলসহ সকল প্রকার তামাকজাত পণ্য প্রস্তুতকারক</td>
                                        <td className="border border-black">৪৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">২</td>
                                        <td className="border border-black text-left">ট্রাস্ট, তহবিল, ব্যক্তিসংঘ এবং অন্যান্য করারোপযোগ্য সত্তা</td>
                                        <td className="border border-black">২৭%</td>
                                        <td className="border border-black">৩০%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৩</td>
                                        <td className="border border-black text-left">সমবায় সমিতির ক্ষেত্রে</td>
                                        <td className="border border-black">১৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৪</td>
                                        <td className="border border-black text-left">বেসরকারি বিশ্ববিদ্যালয়, বেসরকারি মেডিক্যাল কলেজ, বেসরকারি ডেন্টাল কলেজ, বেসরকারি ইঞ্জিনিয়ারিং কলেজ বা কেবলমাত্র তথ্যপ্রযুক্তি বিষয়ে শিক্ষাদান নিয়োজিত বেসরকারি কলেজ</td>
                                        <td className="border border-black">১৫%</td>
                                        <td className="border border-black">শর্ত প্রযোজ্য নয়</td>
                                    </tr>

                                    <tr className="text-left">
                                        <td className="border border-black" colSpan={4}><span className="text-red-600 font-bold">শর্তঃ </span> সকল প্রকার আয় ও প্রাপ্তি এবং প্রত্যেক একক লেনদেনে পাঁচ লক্ষ টাকার অধিক ও বার্ষিক সর্বমোট ছত্রিশ লক্ষ টাকার উর্ধ্বে সকল প্রকার ব্যয় ও বিনিয়োগ ব্যাংক ট্রান্সফারের মাধ্যমে সম্পন্ন করতে হবে।</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black" colSpan={4}><strong>লভ্যাংশ এর উপর- ২০%</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '6' && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse">
                                <colgroup>
                                    <col className="w-[7.65%]" />
                                    <col className="w-[59.05%]" />
                                    <col className="w-[33.30%]" />
                                </colgroup>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">ক্রমিক নং</td>
                                        <td className="border border-black font-bold">খাত</td>
                                        <td className="border border-black font-bold">করহার</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">১</td>
                                        <td className="border border-black text-left">পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black">২০.৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">২</td>
                                        <td className="border border-black text-left">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black">২৭.৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold" rowSpan={11}>৩</td>
                                        <td className="border border-black font-bold text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান</td>
                                        <td className="border border-black">&nbsp;</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান- নন-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৪০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">মার্চেন্ট ব্যাংক</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">সিগারেট প্রস্তুতকারক প্রতিষ্ঠান</td>
                                        <td className="border border-black">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">মোবাইল অপারেটর কোম্পানি</td>
                                        <td className="border border-black">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">মোবাইল অপারেটর কোম্পানি- লিস্টেড এর ক্ষেত্রে</td>
                                        <td className="border border-black">৪০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">বিড়ি, জর্দা, গুলসহ সকল তামাকজাত দ্রব্য উৎপাদনকারী প্রতিষ্ঠান</td>
                                        <td className="border border-black">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">সমবায় সমিতি</td>
                                        <td className="border border-black">১৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">ব্যক্তিসংঘ</td>
                                        <td className="border border-black">২৭.৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">এক ব্যক্তি কোম্পানি</td>
                                        <td className="border border-black">২২.৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৪</td>
                                        <td className="border border-black text-left">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black">২০%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                    }
                    {selectedYear === '16' && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse">
                                <colgroup>
                                    <col className="w-[7.65%]" />
                                    <col className="w-[59.05%]" />
                                    <col className="w-[33.30%]" />
                                </colgroup>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">ক্রমিক নং</td>
                                        <td className="border border-black font-bold">খাত</td>
                                        <td className="border border-black font-bold">করহার</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">১</td>
                                        <td className="border border-black text-left">পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black">২২.৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">২</td>
                                        <td className="border border-black text-left">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black">৩০%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold" rowSpan={11}>৩</td>
                                        <td className="border border-black font-bold text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান</td>
                                        <td className="border border-black">&nbsp;</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান- নন-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৪০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">মার্চেন্ট ব্যাংক</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">সিগারেট প্রস্তুতকারক প্রতিষ্ঠান</td>
                                        <td className="border border-black">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">মোবাইল অপারেটর কোম্পানি</td>
                                        <td className="border border-black">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">মোবাইল অপারেটর কোম্পানি- লিস্টেড এর ক্ষেত্রে</td>
                                        <td className="border border-black">৪০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">বিড়ি, জর্দা, গুলসহ সকল তামাকজাত দ্রব্য উৎপাদনকারী প্রতিষ্ঠান</td>
                                        <td className="border border-black">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">সমবায় সমিতি</td>
                                        <td className="border border-black">১৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">ব্যক্তিসংঘ</td>
                                        <td className="border border-black">৩০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">এক ব্যক্তি কোম্পানি</td>
                                        <td className="border border-black">২৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৪</td>
                                        <td className="border border-black text-left">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black">২০%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '17' && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse">
                                <colgroup>
                                    <col className="w-[7.65%]" />
                                    <col className="w-[59.05%]" />
                                    <col className="w-[33.30%]" />
                                </colgroup>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">ক্রমিক নং</td>
                                        <td className="border border-black font-bold">খাত</td>
                                        <td className="border border-black font-bold">করহার</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">১</td>
                                        <td className="border border-black text-left">পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black">২৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">২</td>
                                        <td className="border border-black text-left">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black">৩২.৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold" rowSpan={10}>৩</td>
                                        <td className="border border-black font-bold text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান</td>
                                        <td className="border border-black">&nbsp;</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান- নন-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৪০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">মার্চেন্ট ব্যাংক</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">সিগারেট প্রস্তুতকারক প্রতিষ্ঠান</td>
                                        <td className="border border-black">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">মোবাইল অপারেটর কোম্পানি</td>
                                        <td className="border border-black">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">মোবাইল অপারেটর কোম্পানি- লিস্টেড এর ক্ষেত্রে</td>
                                        <td className="border border-black">৪০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">বিড়ি, জর্দা, গুলসহ সকল তামাকজাত দ্রব্য উৎপাদনকারী প্রতিষ্ঠান</td>
                                        <td className="border border-black">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">সমবায় সমিতি</td>
                                        <td className="border border-black">১৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">ব্যক্তিসংঘ</td>
                                        <td className="border border-black">৩২.৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৪</td>
                                        <td className="border border-black text-left">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black">২০%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                    }
                    {(selectedYear === '18' || selectedYear === '19') && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse">
                                <colgroup>
                                    <col className="w-[7.65%]" />
                                    <col className="w-[59.05%]" />
                                    <col className="w-[33.30%]" />
                                </colgroup>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="border border-black font-bold">ক্রমিক নং</td>
                                        <td className="border border-black font-bold">খাত</td>
                                        <td className="border border-black font-bold">করহার</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">১</td>
                                        <td className="border border-black text-left">পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black">২৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">২</td>
                                        <td className="border border-black text-left">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black">৩৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold" rowSpan={9}>৩</td>
                                        <td className="border border-black font-bold text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান</td>
                                        <td className="border border-black">&nbsp;</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান- নন-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black">৪০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">মার্চেন্ট ব্যাংক</td>
                                        <td className="border border-black">৩৭.৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">সিগারেট প্রস্তুতকারক প্রতিষ্ঠান</td>
                                        <td className="border border-black">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">মোবাইল অপারেটর কোম্পানি</td>
                                        <td className="border border-black">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">মোবাইল অপারেটর কোম্পানি- লিস্টেড এর ক্ষেত্রে</td>
                                        <td className="border border-black">৪০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">বিড়ি, জর্দা, গুলসহ সকল তামাকজাত দ্রব্য উৎপাদনকারী প্রতিষ্ঠান</td>
                                        <td className="border border-black">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-left">সমবায় সমিতি</td>
                                        <td className="border border-black">১৫%</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-black font-bold">৪</td>
                                        <td className="border border-black text-left">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black">২০%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '20' && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse ">
                                <colgroup>
                                    <col className="w-[7.65%]" />
                                    <col className="w-[59.05%]" />
                                    <col className="w-[33.3%]" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">ক্রমিক নং</td>
                                        <td className="border border-black px-2 py-1 font-bold">খাত</td>
                                        <td className="border border-black px-2 py-1 font-bold">করহার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">১</td>
                                        <td className="border border-black px-2 py-1">পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">২৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">২</td>
                                        <td className="border border-black px-2 py-1">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">৩৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold" rowSpan={8}>৩</td>
                                        <td className="border border-black px-2 py-1 font-bold">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান</td>
                                        <td className="border border-black px-2 py-1">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black px-2 py-1">৪০%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান-নন-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black px-2 py-1">৪২.৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1">মার্চেন্ট ব্যাংক</td>
                                        <td className="border border-black px-2 py-1">৩৭.৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1">সিগারেট প্রস্তুতকারক প্রতিষ্ঠান</td>
                                        <td className="border border-black px-2 py-1">৪৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1">মোবাইল অপারেটর কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">৪৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1">মোবাইল অপারেটর কোম্পানি-লিস্টেড</td>
                                        <td className="border border-black px-2 py-1">৪০%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1">বিড়ি, জর্দা, গুলসহ সকল তামাকজাত দ্রব্য উৎপাদনকারী প্রতিষ্ঠান</td>
                                        <td className="border border-black px-2 py-1">৪৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1">&nbsp;</td>
                                        <td className="border border-black px-2 py-1">সমবায় সমিতি</td>
                                        <td className="border border-black px-2 py-1">১৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">৪</td>
                                        <td className="border border-black px-2 py-1">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black px-2 py-1">২০%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '21' && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse">
                                <thead>
                                    <tr className="text-center">
                                        <th className="border border-black px-2 py-1">ক্রমিক নং</th>
                                        <th className="border border-black px-2 py-1">খাত</th>
                                        <th className="border border-black px-2 py-1">করহার</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="border border-black px-2 py-1">১</td>
                                        <td className="border border-black px-2 py-1 text-left">পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">২৫%</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black px-2 py-1">২</td>
                                        <td className="border border-black px-2 py-1 text-left">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">৩৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-center" rowSpan={8}>৩</td>
                                        <td className="border border-black px-2 py-1 font-bold">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান</td>
                                        <td className="border border-black px-2 py-1"></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black px-2 py-1">৪০%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান-নন-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black px-2 py-1">৪২.৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">মার্চেন্ট ব্যাংক</td>
                                        <td className="border border-black px-2 py-1">৩৭.৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">সিগারেট প্রস্তুতকারক প্রতিষ্ঠান</td>
                                        <td className="border border-black px-2 py-1">৪৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">মোবাইল অপারেটর কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">৪৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">মোবাইল অপারেটর কোম্পানি-লিস্টেড</td>
                                        <td className="border border-black px-2 py-1">৪০%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">বিড়ি, জর্দা, গুলসহ সকল তামাকজাত দ্রব্য উৎপাদনকারী প্রতিষ্ঠান</td>
                                        <td className="border border-black px-2 py-1">৪৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-center">&nbsp;</td>
                                        <td className="border border-black px-2 py-1 text-left">সমবায় সমিতি</td>
                                        <td className="border border-black px-2 py-1">১৫%</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black px-2 py-1">৪</td>
                                        <td className="border border-black px-2 py-1 text-left">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black px-2 py-1">২০%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '22' && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse">
                                <thead>
                                    <tr className="text-center">
                                        <th className="border border-black px-2 py-1">ক্রমিক নং</th>
                                        <th className="border border-black px-2 py-1">খাত</th>
                                        <th className="border border-black px-2 py-1">করহার</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="border border-black px-2 py-1">১</td>
                                        <td className="border border-black px-2 py-1 text-left">পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">২৫%</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black px-2 py-1">২</td>
                                        <td className="border border-black px-2 py-1 text-left">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">৩৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-center" rowSpan={8}>৩</td>
                                        <td className="border border-black px-2 py-1 font-bold">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান</td>
                                        <td className="border border-black px-2 py-1"></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black px-2 py-1">৪০%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান-নন-পাবলিকলি ট্রেডেড</td>
                                        <td className="border border-black px-2 py-1">৪২.৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">মার্চেন্ট ব্যাংক</td>
                                        <td className="border border-black px-2 py-1">৩৭.৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">সিগারেট প্রস্তুতকারক প্রতিষ্ঠান</td>
                                        <td className="border border-black px-2 py-1">৪৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">মোবাইল অপারেটর কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">৪৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">মোবাইল অপারেটর কোম্পানি-লিস্টেড</td>
                                        <td className="border border-black px-2 py-1">৪০%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 text-left">বিড়ি, জর্দা, গুলসহ সকল তামাকজাত দ্রব্য উৎপাদনকারী প্রতিষ্ঠান</td>
                                        <td className="border border-black px-2 py-1">৪৫%</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border border-black px-2 py-1">৪</td>
                                        <td className="border border-black px-2 py-1 text-left">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black px-2 py-1">২০%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '15' && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse ">
                                <colgroup>
                                    <col className="w-[7.65%]" />
                                    <col className="w-[40.45%]" />
                                    <col className="w-[51.9%]" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">ক্রমিক নং</td>
                                        <td className="border border-black px-2 py-1 font-bold">খাত</td>
                                        <td className="border border-black px-2 py-1 font-bold">করহার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">১</td>
                                        <td className="border border-black px-2 py-1">পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">২৭.৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">২</td>
                                        <td className="border border-black px-2 py-1">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">৩৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">৩</td>
                                        <td className="border border-black px-2 py-1">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান</td>
                                        <td className="border border-black px-2 py-1 text-left">
                                            <p>৪২.৫%</p>
                                            <p>(মার্চেন্ট ব্যাংক এর ক্ষেত্রে ৩৭.৫%)</p>
                                            <p>(সিগারেট প্রস্তুতকারক কোম্পানির ক্ষেত্রে ৪৫% ও লিস্টেড কোম্পানির ক্ষেত্রে ৪০%)</p>
                                            <p>(মোবাইল ফোন অপারেটর কোম্পানির ক্ষেত্রে ৪৫% ও লিস্টেড কোম্পানির ক্ষেত্রে ৪০%)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">৪</td>
                                        <td className="border border-black px-2 py-1">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black px-2 py-1">২০%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '14' && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse">
                                <colgroup>
                                    <col className="w-[7.65%]" />
                                    <col className="w-[40.45%]" />
                                    <col className="w-[51.9%]" />
                                </colgroup>
                                <tbody>
                                    <tr className="bg-gray-200 font-bold">
                                        <td className="border border-black px-2 py-1">ক্রমিক নং</td>
                                        <td className="border border-black px-2 py-1">খাত</td>
                                        <td className="border border-black px-2 py-1">করহার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">১</td>
                                        <td className="border border-black px-2 py-1">পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">২৭.৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">২</td>
                                        <td className="border border-black px-2 py-1">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black px-2 py-1">৩৭.৫%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">৩</td>
                                        <td className="border border-black px-2 py-1">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান</td>
                                        <td className="border border-black px-2 py-1 text-left">
                                            <p>৪২.৫%</p>
                                            <p>(মার্চেন্ট ব্যাংক এর ক্ষেত্রে ৩৭.৫%)</p>
                                            <p>(সিগারেট প্রস্তুতকারক কোম্পানির ক্ষেত্রে ৪৫% ও লিস্টেড কোম্পানির ক্ষেত্রে ৪০%)</p>
                                            <p>(মোবাইল ফোন অপারেটর কোম্পানীর ক্ষেত্রে ৪৫% ও লিস্টেড কোম্পানীর ক্ষেত্রে ৪০%)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black px-2 py-1 font-bold">৪</td>
                                        <td className="border border-black px-2 py-1">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black px-2 py-1">২০%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '13' && (
                        <div className="overflow-x-auto">
                            <table className="w-full border border-black border-collapse">
                                <colgroup>
                                    <col className="w-[7.64656%]" />
                                    <col className="w-[40.4479%]" />
                                    <col className="w-[51.9055%]" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ক্রমিক নং
                                        </td>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            খাত
                                        </td>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            করহার
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ১
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            পাবলিকলি ট্রেডেড কোম্পানি
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ২৭.৫%
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ২
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            নন-পাবলিকলি ট্রেডেড কোম্পানি
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ৩৭.৫%
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ৩
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান
                                        </td>
                                        <td className="border border-black h-[22.3906px] text-left">
                                            <p>৪২.৫%</p>
                                            <p>(মার্চেন্ট ব্যাংক এর ক্ষেত্রে ৩৭.৫%)</p>
                                            <p>(সিগারেট প্রস্তুতকারক কোম্পানির ক্ষেত্রে ৪২.৫% ও লিস্টেড কোম্পানির ক্ষেত্রে ৩৫%)</p>
                                            <p>(মোবাইল ফোন অপারেটর কোম্পানীর ক্ষেত্রে ৪৫% ও লিস্টেড কোম্পানীর ক্ষেত্রে ৩৫%)</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ৪
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            লভ্যাংশ এর উপর কর
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ২০%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '12' && (
                        <div className="overflow-x-auto">
                            <table className="w-full border border-black border-collapse">
                                <colgroup>
                                    <col className="w-[7.64656%]" />
                                    <col className="w-[37.7299%]" />
                                    <col className="w-[54.6236%]" />
                                </colgroup>

                                <tbody>
                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ক্রমিক নং
                                        </td>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            খাত
                                        </td>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            করহার
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ১
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            পাবলিকলি ট্রেডেড কোম্পানি
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ২৭.৫%
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ২
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            নন-পাবলিকলি ট্রেডেড কোম্পানি
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ৩৭.৫%
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ৩
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            <p>৪২.৫%</p>
                                            <p>(লিস্টেড সিগারেট প্রস্তুতকারক কোম্পানির ক্ষেত্রে ৩৫%)</p>
                                            <p>(মোবাইল ফোন অপারেটর কোম্পানীর ক্ষেত্রে ৪৫% ও লিস্টেড কোম্পানীর ক্ষেত্রে ৩৫%)</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ৪
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            লভ্যাংশ এর উপর কর
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ২০%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {(selectedYear === '11' || selectedYear === '10') && (
                        <div className="overflow-x-auto">
                            <table className="w-full border border-black border-collapse">
                                <colgroup>
                                    <col className="w-[7.64656%]" />
                                    <col className="w-[58.9635%]" />
                                    <col className="w-[33.305%]" />
                                </colgroup>

                                <tbody>
                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ক্রমিক নং
                                        </td>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            খাত
                                        </td>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            করহার
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ১
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            পাবলিকলি ট্রেডেড কোম্পানি
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ২৭.৫%
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ২
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            নন-পাবলিকলি ট্রেডেড কোম্পানি
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ৩৭.৫%
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ৩
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ৪২.৫% (মোবাইল ফোন অপারেটর কোম্পানীর ক্ষেত্রে ৪৫% ও লিস্টেড কোম্পানীর ক্ষেত্রে ৩৫%)
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black h-[22.3906px] text-center font-bold">
                                            ৪
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            লভ্যাংশ এর উপর কর
                                        </td>
                                        <td className="border border-black h-[22.3906px]">
                                            ২০%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '5' && (
                        <div className="overflow-x-auto">
                            <table
                                className="w-full border border-black border-collapse"
                                style={{ height: "156.734px" }}
                            >
                                <colgroup>
                                    <col style={{ width: "7.64656%" }} />
                                    <col style={{ width: "58.9635%" }} />
                                    <col style={{ width: "33.305%" }} />
                                </colgroup>

                                <tbody>
                                    <tr style={{ height: "22.3906px" }}>
                                        <td
                                            className="border border-black text-center font-bold"
                                            style={{ height: "22.3906px" }}
                                        >
                                            ক্রমিক নং
                                        </td>
                                        <td
                                            className="border border-black text-center font-bold"
                                            style={{ height: "22.3906px" }}
                                        >
                                            খাত
                                        </td>
                                        <td
                                            className="border border-black text-center font-bold"
                                            style={{ height: "22.3906px" }}
                                        >
                                            করহার
                                        </td>
                                    </tr>

                                    <tr style={{ height: "22.3906px" }}>
                                        <td
                                            className="border border-black text-center font-bold"
                                            style={{ height: "22.3906px" }}
                                        >
                                            ১
                                        </td>
                                        <td className="border border-black" style={{ height: "22.3906px" }}>
                                            পাবলিকলি ট্রেডেড কোম্পানি
                                        </td>
                                        <td className="border border-black" style={{ height: "22.3906px" }}>
                                            ২৭.৫%
                                        </td>
                                    </tr>

                                    <tr style={{ height: "22.3906px" }}>
                                        <td
                                            className="border border-black text-center font-bold"
                                            style={{ height: "22.3906px" }}
                                        >
                                            ২
                                        </td>
                                        <td className="border border-black" style={{ height: "22.3906px" }}>
                                            নন-পাবলিকলি ট্রেডেড কোম্পানি
                                        </td>
                                        <td className="border border-black" style={{ height: "22.3906px" }}>
                                            ৩৭.৫%
                                        </td>
                                    </tr>

                                    <tr style={{ height: "22.3906px" }}>
                                        <td
                                            className="border border-black text-center font-bold"
                                            style={{ height: "22.3906px" }}
                                        >
                                            ৩
                                        </td>
                                        <td className="border border-black" style={{ height: "22.3906px" }}>
                                            ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান
                                        </td>
                                        <td className="border border-black" style={{ height: "22.3906px" }}>
                                            ৪৫% (লিস্টেড মোবাইল ফোন অপারেটর কোম্পানীর ক্ষেত্রে ৩৫%)
                                        </td>
                                    </tr>

                                    <tr style={{ height: "22.3906px" }}>
                                        <td
                                            className="border border-black text-center font-bold"
                                            style={{ height: "22.3906px" }}
                                        >
                                            ৪
                                        </td>
                                        <td className="border border-black" style={{ height: "22.3906px" }}>
                                            লভ্যাংশ এর উপর কর
                                        </td>
                                        <td className="border border-black" style={{ height: "22.3906px" }}>
                                            ২০%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '4' && (
                        <div className="overflow-x-auto">
                            <table className="w-full border border-black border-collapse text-sm">
                                <thead>
                                    <tr>
                                        <th className="border border-black text-center py-2 font-semibold">ক্রমিক নং</th>
                                        <th className="border border-black text-center py-2 font-semibold">খাত</th>
                                        <th className="border border-black text-center py-2 font-semibold">করহার</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="border border-black text-center py-2 font-semibold">১</td>
                                        <td className="border border-black py-2">পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black py-2">৩০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-center py-2 font-semibold">২</td>
                                        <td className="border border-black py-2">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black py-2">৪০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-center py-2 font-semibold">৩</td>
                                        <td className="border border-black py-2">
                                            ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান
                                        </td>
                                        <td className="border border-black py-2">
                                            ৪৫% (লিস্টেড মোবাইল ফোন অপারেটর কোম্পানীর ক্ষেত্রে ৩৫%)
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-center py-2 font-semibold">৪</td>
                                        <td className="border border-black py-2">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black py-2">১৫%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '3' && (
                        <div className="overflow-x-auto">
                            <table className="w-full border border-black border-collapse text-sm">
                                <colgroup>
                                    <col className="w-[7.64656%]" />
                                    <col className="w-[58.9635%]" />
                                    <col className="w-[33.305%]" />
                                </colgroup>

                                <tbody>
                                    <tr>
                                        <td className="border border-black text-center font-semibold py-2">
                                            ক্রমিক নং
                                        </td>
                                        <td className="border border-black text-center font-semibold py-2">
                                            খাত
                                        </td>
                                        <td className="border border-black text-center font-semibold py-2">
                                            করহার
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-center font-semibold py-2">১</td>
                                        <td className="border border-black py-2">
                                            পাবলিকলি ট্রেডেড কোম্পানি
                                        </td>
                                        <td className="border border-black py-2">৩০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-center font-semibold py-2">২</td>
                                        <td className="border border-black py-2">
                                            নন-পাবলিকলি ট্রেডেড কোম্পানি
                                        </td>
                                        <td className="border border-black py-2">৪০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-center font-semibold py-2">৩</td>
                                        <td className="border border-black py-2">
                                            ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান
                                        </td>
                                        <td className="border border-black py-2">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black text-center font-semibold py-2">৪</td>
                                        <td className="border border-black py-2">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black py-2">১৫%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '2' && (
                        <div className="overflow-x-auto">
                            <table className="w-full border border-black border-collapse text-sm">
                                <colgroup>
                                    <col className="w-[7.64656%]" />
                                    <col className="w-[58.9635%]" />
                                    <col className="w-[33.305%]" />
                                </colgroup>

                                <tbody>
                                    <tr>
                                        <td className="border border-black py-2">ক্রমিক নং</td>
                                        <td className="border border-black py-2">খাত</td>
                                        <td className="border border-black py-2">করহার</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">১</td>
                                        <td className="border border-black py-2">পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black py-2">৩০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">২</td>
                                        <td className="border border-black py-2">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black py-2">৪০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">৩</td>
                                        <td className="border border-black py-2">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান</td>
                                        <td className="border border-black py-2">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">৪</td>
                                        <td className="border border-black py-2">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black py-2">১৫%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                    {selectedYear === '1' && (
                        <div className="overflow-x-auto">
                            <table className="w-full border border-black border-collapse text-sm">
                                <colgroup>
                                    <col className="w-[7.64656%]" />
                                    <col className="w-[58.9635%]" />
                                    <col className="w-[33.305%]" />
                                </colgroup>

                                <tbody>
                                    <tr>
                                        <td className="border border-black py-2">ক্রমিক নং</td>
                                        <td className="border border-black py-2">খাত</td>
                                        <td className="border border-black py-2">করহার</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">১</td>
                                        <td className="border border-black py-2">পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black py-2">৩০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">২</td>
                                        <td className="border border-black py-2">নন-পাবলিকলি ট্রেডেড কোম্পানি</td>
                                        <td className="border border-black py-2">৩৭.৫০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">৩</td>
                                        <td className="border border-black py-2">ব্যাংক, ইন্সুরেন্স ও আর্থিক প্রতিষ্ঠান</td>
                                        <td className="border border-black py-2">৪৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">৪</td>
                                        <td className="border border-black py-2">লভ্যাংশ এর উপর কর</td>
                                        <td className="border border-black py-2">১৫%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                    }
                </div>
            </div>
            <GovernmentLinks />
        </div>
    )
}