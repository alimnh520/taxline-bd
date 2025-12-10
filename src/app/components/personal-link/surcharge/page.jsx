// /components/personal-link/reduced-income-tax/page.js
'use client'
import React from "react";
import { PersonalFeature } from "../PersonalFeature";
import TaxAccordions from "../PersonalTax";

import { useState } from "react";
import GovernmentLinks from "../../GovtLink";


export default function page() {

    const [taxYear, setTaxYear] = useState("২০২৭-২০২৮");

    const years = [
        "২০২৭-২০২৮", "২০২৬-২০২৭", "২০২৫-২০২৬", "২০২৪-২০২৫", "২০২৩-২০২৪",
        "২০২২-২০২৩", "২০২১-২০২২", "২০২০-২০২১", "২০১৯-২০২০", "২০১৮-২০১৯",
        "২০১৭-২০১৮", "২০১৬-২০১৭", "২০১৫-২০১৬", "২০১৪-২০১৫", "২০১৩-২০১৪",
        "২০১২-২০১৩", "২০১১-২০১২"
    ];


    return (
        <div className="flex flex-col justify-start items-center gap-y-8 mx-auto border-t border-t-gray-200">

            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-center gap-x-5 w-10/12">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/3 p-4">
                    <h1 className="text-center text-4xl font-bold mb-6">সারচার্জের হার</h1>

                    <div className="mb-6 flex items-center justify-between">
                        <label className="block w-3/6 font-semibold text-center">করবর্ষ</label>
                        <select
                            className="w-3/6 border border-green-500 outline-none appearance-none rounded px-3 py-2"
                            value={taxYear}
                            onChange={(e) => setTaxYear(e.target.value)}
                        >
                            {years.map((yr) => (
                                <option key={yr} value={yr}>{yr}</option>
                            ))}
                        </select>
                    </div>

                    {
                        (taxYear === "২০২৭-২০২৮" || taxYear === "২০২৬-২০২৭") && (
                            <div className="col-12">
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-black border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="border border-black text-center font-bold w-3/4">
                                                    সম্পদ
                                                </th>
                                                <th className="border border-black text-center font-bold w-1/4">
                                                    সারচার্জের হার
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (ক) নিট পরিসম্পদের মূল্যমান ৪ (চার) কোটি টাকা পর্যন্ত
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    শূন্য
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    <p>(খ) নিট পরিসম্পদের মূল্যমান ৪ (চার) কোটি টাকার অধিক কিন্তু ১০ (দশ) কোটি টাকার অধিক নহে;</p>
                                                    <p>বা, স্বীয় নামে একের অধিক মোটর গাড়ি</p>
                                                    <p>বা, মোট ৮০০০ বর্গফুটের অধিক আয়তনের গৃহ-সম্পত্তি</p>
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ১০%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (গ) নিট পরিসম্পদের মূল্যমান ১০ (দশ) কোটি টাকার অধিক কিন্তু ২০ (বিশ) কোটি টাকার অধিক নহে;
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ২০%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (ঘ) নিট পরিসম্পদের মূল্যমান ২০ (বিশ) কোটি টাকার অধিক কিন্তু ৫০ (পঞ্চাশ) কোটি টাকার অধিক নহে;
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ৩০%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (ঙ) নিট পরিসম্পদের মূল্যমান ৫০ (পঞ্চাশ) কোটি টাকার অধিক হইলে
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ৩৫%
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-4 space-y-2 text-[15px] leading-relaxed">
                                    <p>ক{') '}সিগারেট, বিড়ি, জর্দা, গুলসহ সকল প্রকার তামাকজাত দ্রব্য পণ্য প্রস্তুতকারক করদাতার আয়ের উপর ২.৫% হারে সারচার্জ প্রদেয় হবে।</p>

                                    <p>খ{') '}কোনো স্কুল, কলেজ, বিশ্ববিদ্যালয়সহ সকল শিক্ষা প্রতিষ্ঠানে প্রতিবন্ধী ব্যক্তিগনের গম্যতার ক্ষেত্রে দেশে বলবৎ আইনি বিধান অনুযায়ী উপযুক্ত ব্যবস্থা না রাখলে উক্ত প্রতিষ্ঠানের অর্জিত আয়ের উপর ২.৫% হারে সারচার্জ প্রদেয় হবে।</p>

                                    <p className="text-red-600 font-bold">
                                        বিঃ দ্রঃ নূন্যতম কর সারচার্জের ভিত্তি হবে না।
                                    </p>
                                </div>
                            </div>
                        )
                    }
                    {
                        taxYear === "২০২৫-২০২৬" && (
                            <div className="col-12">
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-black border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="border border-black text-center font-bold w-3/4">
                                                    সম্পদ
                                                </th>
                                                <th className="border border-black text-center font-bold w-1/4">
                                                    সারচার্জের হার
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (ক) নিট পরিসম্পদের মূল্যমান ৪ (চার) কোটি টাকা পর্যন্ত
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    শূন্য
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    <p>(খ) নিট পরিসম্পদের মূল্যমান ৪ (চার) কোটি টাকার অধিক কিন্তু ১০ (দশ) কোটি টাকার অধিক নহে;</p>
                                                    <p>বা, স্বীয় নামে একের অধিক মোটর গাড়ি</p>
                                                    <p>বা, মোট ৮০০০ বর্গফুটের অধিক আয়তনের গৃহ-সম্পত্তি</p>
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ১০%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (গ) নিট পরিসম্পদের মূল্যমান ১০ (দশ) কোটি টাকার অধিক কিন্তু ২০ (বিশ) কোটি টাকার অধিক নহে;
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ২০%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (ঘ) নিট পরিসম্পদের মূল্যমান ২০ (বিশ) কোটি টাকার অধিক কিন্তু ৫০ (পঞ্চাশ) কোটি টাকার অধিক নহে;
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ৩০%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (ঙ) নিট পরিসম্পদের মূল্যমান ৫০ (পঞ্চাশ) কোটি টাকার অধিক হইলে
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ৩৫%
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                    {
                        taxYear === "২০২৪-২০২৫" && (
                            <div className="col-12">
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-black border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="border border-black text-center font-bold w-3/4">
                                                    সম্পদ
                                                </th>
                                                <th className="border border-black text-center font-bold w-1/4">
                                                    সারচার্জের হার
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (ক) নিট পরিসম্পদের মূল্যমান ৪ (চার) কোটি টাকা পর্যন্ত
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    শূন্য
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    <p>(খ) নিট পরিসম্পদের মূল্যমান ৪ (চার) কোটি টাকার অধিক কিন্তু ১০ (দশ) কোটি টাকার অধিক নহে;</p>
                                                    <p>বা, স্বীয় নামে একের অধিক মোটর গাড়ি</p>
                                                    <p>বা, মোট ৮০০০ বর্গফুটের অধিক আয়তনের গৃহ-সম্পত্তি</p>
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ১০%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (গ) নিট পরিসম্পদের মূল্যমান ১০ (দশ) কোটি টাকার অধিক কিন্তু ২০ (বিশ) কোটি টাকার অধিক নহে;
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ২০%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (ঘ) নিট পরিসম্পদের মূল্যমান ২০ (বিশ) কোটি টাকার অধিক কিন্তু ৫০ (পঞ্চাশ) কোটি টাকার অধিক নহে;
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ৩০%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (ঙ) নিট পরিসম্পদের মূল্যমান ৫০ (পঞ্চাশ) কোটি টাকার অধিক হইলে
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ৩৫%
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 space-y-2 text-[15px] leading-relaxed">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>তামাকজাত পন্য প্রস্তুতকারক ব্যবসায়ের জন্য অর্জিত আয়ের ২.৫% হারে সারচার্জ।</li>
                                        <li>স্কুল, কলেজ, বিশ্ববিদ্যালয়সহ সকল শিক্ষাপ্রতিষ্ঠানে প্রতিবন্ধী ব্যক্তিগণের গম্যতার ক্ষেত্রে দেশে বলবৎ আইনি বিধান অনুযায়ী উপযুক্ত ব্যবস্থা না রাখলে উক্ত প্রতিষ্ঠানের অর্জিত আয়ের উপর ২.৫% হারে সারচার্জ।</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                    {
                        taxYear === "২০২৩-২০২৪" && (
                            <div className="col-12">
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-black border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="border border-black text-center font-bold w-3/4">
                                                    সম্পদ
                                                </th>
                                                <th className="border border-black text-center font-bold w-1/4">
                                                    সারচার্জের হার
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (ক) নিট পরিসম্পদের মূল্যমান ৪ (চার) কোটি টাকা পর্যন্ত
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    শূন্য
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    <p>(খ) নিট পরিসম্পদের মূল্যমান ৪ (চার) কোটি টাকার অধিক কিন্তু ১০ (দশ) কোটি টাকার অধিক নহে;</p>
                                                    <p>বা, স্বীয় নামে একের অধিক মোটর গাড়ি</p>
                                                    <p>বা, মোট ৮০০০ বর্গফুটের অধিক আয়তনের গৃহ-সম্পত্তি</p>
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ১০%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (গ) নিট পরিসম্পদের মূল্যমান ১০ (দশ) কোটি টাকার অধিক কিন্তু ২০ (বিশ) কোটি টাকার অধিক নহে;
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ২০%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (ঘ) নিট পরিসম্পদের মূল্যমান ২০ (বিশ) কোটি টাকার অধিক কিন্তু ৫০ (পঞ্চাশ) কোটি টাকার অধিক নহে;
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ৩০%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-black px-2 py-2">
                                                    (ঙ) নিট পরিসম্পদের মূল্যমান ৫০ (পঞ্চাশ) কোটি টাকার অধিক হইলে
                                                </td>
                                                <td className="border border-black text-center px-2 py-2">
                                                    ৩৫%
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 space-y-2 text-[15px] leading-relaxed">
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>তামাকজাত পন্য প্রস্তুতকারক ব্যবসায়ের জন্য অর্জিত আয়ের ২.৫% হারে সারচার্জ।</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                    {
                        (taxYear === "২০২২-২০২৩" || taxYear === "২০২১-২০২২") && (
                            <div className="col-12">
                                <table className="w-full border border-black border-collapse">
                                    <colgroup>
                                        <col style={{ width: '75%' }} />
                                        <col style={{ width: '25%' }} />
                                    </colgroup>
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-black p-2 text-center font-bold">সম্পদ</th>
                                            <th className="border border-black p-2 text-center font-bold">সারচার্জের হার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black p-3">(ক) নিট পরিসম্পদের মূল্য্যমান ৩ (তিন) কোটি টাকা পর্যন্ত</td>
                                            <td className="border border-black p-3 text-center">শূন্য</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(খ) নিট পরিসম্পদের মূল্যমান ৩ (তিন) কোটি টাকার অধিক কিন্তু ১০ (দশ) কোটি টাকার অধিক নহে;</p>
                                                <p>বা, স্বীয় নামে একের অধিক মোটর গাড়ি</p>
                                                <p>বা, কোন সিটি কর্পোরেশন এলাকায় মোট ৮০০০ বর্গফুটের অধিক আয়তনের গৃহ-সম্পত্তি</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">১০%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">(গ) নিট পরিসম্পদের মূল্যমান ১০ (দশ) কোটি টাকার অধিক কিন্তু ২০ (বিশ) কোটি টাকার অধিক নহে;</td>
                                            <td className="border border-black p-3 text-center">২০%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">(ঘ) নিট পরিসম্পদের মূল্যমান ২০ (বিশ) কোটি টাকার অধিক কিন্তু ৫০ (পঞ্চাশ) কোটি টাকার অধিক নহে;</td>
                                            <td className="border border-black p-3 text-center">৩০%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">(ঙ) নিট পরিসম্পদের মূল্যমান ৫০ (পঞ্চাশ) কোটি টাকার অধিক হইলে</td>
                                            <td className="border border-black p-3 text-center">৩৫%</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <ul className="list-disc list-inside mt-4 text-[15px] leading-relaxed">
                                    <li>তামাকজাত পন্য প্রস্তুতকারক ব্যবসায়ের জন্য অর্জিত আয়ের ২.৫% হারে সারচার্জ।</li>
                                </ul>
                            </div>
                        )
                    }

                    {
                        taxYear === "২০২০-২০২১" && (
                            <div className="col-12">
                                <table className="w-full border border-black border-collapse">
                                    <colgroup>
                                        <col style={{ width: '50%' }} />
                                        <col style={{ width: '25%' }} />
                                        <col style={{ width: '25%' }} />
                                    </colgroup>
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-black p-2 text-center font-bold">সম্পদ</th>
                                            <th className="border border-black p-2 text-center font-bold">সারচার্জের হার</th>
                                            <th className="border border-black p-2 text-center font-bold">ন্যূনতম সারচার্জ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black p-3">(ক) নিট পরিসম্পদের মূল্যমান ৩ (তিন) কোটি টাকা পর্যন্ত</td>
                                            <td className="border border-black p-3 text-center">শূন্য</td>
                                            <td className="border border-black p-3 text-center" rowSpan={3}>৩,০০০ টাকা</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(খ) নিট পরিসম্পদের মূল্যমান ৩ (তিন) কোটি টাকার অধিক কিন্তু ৫ (পাঁচ) কোটি টাকার অধিক নহে;</p>
                                                <p>বা, স্বীয় নামে একের অধিক মোটর গাড়ি</p>
                                                <p>বা, কোন সিটি কর্পোরেশন এলাকায় মোট ৮০০০ বর্গফুটের অধিক আয়তনের গৃহ-সম্পত্তি</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">১০%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(গ) নিট পরিসম্পদের মূল্যমান ৫ (পাঁচ) কোটি টাকার অধিক কিন্তু ১০ (দশ) কোটি টাকার অধিক নহে;</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">১৫%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(ঘ) নিট পরিসম্পদের মূল্যমান ১০ (দশ) কোটি টাকার অধিক কিন্তু ১৫ (পনের) কোটি টাকার অধিক নহে;</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">২০%</td>
                                            <td className="border border-black p-3 text-center" rowSpan={3}>৫,০০০ টাকা</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(ঙ) নিট পরিসম্পদের মূল্যমান ১৫ (পনের) কোটি টাকার অধিক কিন্তু ২০ (বিশ) কোটি টাকার অধিক নহে</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">২৫%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(চ) নিট পরিসম্পদের মূল্যমান ২০ (বিশ) কোটি টাকার অধিক হইলে</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">৩০%</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <ul className="list-disc list-inside mt-4 space-y-2 text-[15px]">
                                    <li>
                                        নিট পরিসম্পদ ৫০ (পঞ্চাশ) কোটি টাকা বা তার উর্ধ্বে সেসকল করদাতার সারচার্জ এর পরিমাণ হবে
                                        উক্ত করদাতার নিট পরিসম্পদের ০.১% অথবা আয়কর প্রযোজ্য এরূপ আয়ের উপর প্রযোজ্য আয়করের ৩০% হারে প্রদেয় সারচার্জ, এ দুটির মধ্যে যেটি বেশি।
                                    </li>
                                    <li>
                                        তামাকজাত পন্য প্রস্তুতকারক ব্যবসায়ের জন্য অর্জিত আয়ের ২.৫% হারে সারচার্জ।
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                    {
                        taxYear === "২০১৯-২০২০" && (
                            <div className="col-12">
                                <table className="w-[87%] border border-black border-collapse">
                                    <colgroup>
                                        <col style={{ width: '72.88%' }} />
                                        <col style={{ width: '13.03%' }} />
                                        <col style={{ width: '13.97%' }} />
                                    </colgroup>
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-black p-2 text-center font-bold">সম্পদ</th>
                                            <th className="border border-black p-2 text-center font-bold">সারচার্জের হার</th>
                                            <th className="border border-black p-2 text-center font-bold">ন্যূনতম সারচার্জ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black p-3">(ক) নিট পরিসম্পদের মূল্যমান ৩ (তিন) কোটি টাকা পর্যন্ত</td>
                                            <td className="border border-black p-3 text-center">শূন্য</td>
                                            <td className="border border-black p-3 text-center" rowSpan={3}>৩,০০০ টাকা</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(খ) নিট পরিসম্পদের মূল্যমান ৩ (তিন) কোটি টাকার অধিক কিন্তু ৫ (পাঁচ) কোটি টাকার অধিক নহে;</p>
                                                <p>বা, স্বীয় নামে একের অধিক মোটর গাড়ি</p>
                                                <p>বা, কোন সিটি কর্পোরেশন এলাকায় মোট ৮০০০ বর্গফুটের অধিক আয়তনের গৃহ-সম্পত্তি</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">১০%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(গ) নিট পরিসম্পদের মূল্যমান ৫ (পাঁচ) কোটি টাকার অধিক কিন্তু ১০ (দশ) কোটি টাকার অধিক নহে;</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">১৫%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(ঘ) নিট পরিসম্পদের মূল্যমান ১০ (দশ) কোটি টাকার অধিক কিন্তু ১৫ (পনের) কোটি টাকার অধিক নহে;</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">২০%</td>
                                            <td className="border border-black p-3 text-center" rowSpan={3}>৫,০০০ টাকা</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(ঙ) নিট পরিসম্পদের মূল্যমান ১৫ (পনের) কোটি টাকার অধিক কিন্তু ২০ (বিশ) কোটি টাকার অধিক নহে</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">২৫%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(চ) নিট পরিসম্পদের মূল্যমান ২০ (বিশ) কোটি টাকার অধিক হইলে</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">৩০%</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <ul className="list-disc list-inside mt-4 space-y-2 text-[15px]">
                                    <li>
                                        নিট পরিসম্পদ ৫০ (পঞ্চাশ) কোটি টাকা বা তার উর্ধ্বে সেসকল করদাতার সারচার্জ এর পরিমাণ হবে উক্ত করদাতার নিট পরিসম্পদের ০.১% অথবা আয়কর প্রযোজ্য এরূপ আয়ের উপর প্রযোজ্য আয়করের ৩০% হারে প্রদেয় সারচার্জ, এ দুটির মধ্যে যেটি বেশি।
                                    </li>
                                    <li>
                                        তামাকজাত পন্য প্রস্তুতকারক ব্যবসায়ের জন্য অর্জিত আয়ের ২.৫% হারে সারচার্জ।
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                    {
                        taxYear === "২০১৮-২০১৯" && (
                            <div className="col-12">
                                <table className="w-[87%] border border-black border-collapse">
                                    <colgroup>
                                        <col style={{ width: '72.88%' }} />
                                        <col style={{ width: '13.03%' }} />
                                        <col style={{ width: '13.97%' }} />
                                    </colgroup>
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-black p-2 text-center font-bold">সম্পদ</th>
                                            <th className="border border-black p-2 text-center font-bold">সারচার্জের হার</th>
                                            <th className="border border-black p-2 text-center font-bold">ন্যূনতম সারচার্জ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black p-3">(ক) নিট পরিসম্পদের মূল্যমান দুই কোটি পঁচিশ লক্ষ (২.২৫ কোটি) টাকা পর্যন্ত</td>
                                            <td className="border border-black p-3 text-center">শূন্য</td>
                                            <td className="border border-black p-3 text-center" rowSpan={3}>৩,০০০ টাকা</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(খ) নিট পরিসম্পদের মূল্যমান দুই কোটি পঁচিশ লক্ষ (২.২৫ কোটি) টাকার অধিক কিন্তু ৫ (পাঁচ) কোটি টাকার অধিক নহে;</p>
                                                <p>বা, স্বীয় নামে একের অধিক মোটর গাড়ি</p>
                                                <p>বা, কোন সিটি কর্পোরেশন এলাকায় মোট ৮০০০ বর্গফুটের অধিক আয়তনের গৃহ-সম্পত্তি</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">১০%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(গ) নিট পরিসম্পদের মূল্যমান ৫ (পাঁচ) কোটি টাকার অধিক কিন্তু ১০ (দশ) কোটি টাকার অধিক নহে;</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">১৫%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(ঘ) নিট পরিসম্পদের মূল্যমান ১০ (দশ) কোটি টাকার অধিক কিন্তু ১৫ (পনের) কোটি টাকার অধিক নহে;</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">২০%</td>
                                            <td className="border border-black p-3 text-center" rowSpan={3}>৫,০০০ টাকা</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(ঙ) নিট পরিসম্পদের মূল্যমান ১৫ (পনের) কোটি টাকার অধিক কিন্তু ২০ (বিশ) কোটি টাকার অধিক নহে</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">২৫%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black p-3">
                                                <p>(চ) নিট পরিসম্পদের মূল্যমান ২০ (বিশ) কোটি টাকার অধিক হইলে</p>
                                            </td>
                                            <td className="border border-black p-3 text-center">৩০%</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <ul className="list-disc list-inside mt-4 space-y-2 text-[15px]">
                                    <li>তামাকজাত পন্য প্রস্তুতকারক ব্যবসায়ের জন্য অর্জিত আয়ের ২.৫% হারে সারচার্জ।</li>
                                </ul>
                            </div>
                        )
                    }
                    {
                        taxYear === "২০১৭-২০১৮" && (
                            <div className="col-12">
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-300 text-sm">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border px-4 py-2 text-center font-semibold">সম্পদ</th>
                                                <th className="border px-4 py-2 text-center font-semibold">সারচার্জের হার</th>
                                                <th className="border px-4 py-2 text-center font-semibold">ন্যূনতম সারচার্জ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border px-4 py-2">(ক) নিট পরিসম্পদের মূল্যমান দুই কোটি পঁচিশ লক্ষ (২.২৫ কোটি) টাকা পর্যন্ত</td>
                                                <td className="border px-4 py-2 text-center">শূন্য</td>
                                                <td className="border px-4 py-2 text-center" rowSpan={6}>৩,০০০ টাকা</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">(খ) নিট পরিসম্পদের মূল্যমান ২.২৫ কোটি টাকার অধিক কিন্তু ৫ কোটি টাকার অধিক নহে</td>
                                                <td className="border px-4 py-2 text-center">১০%</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">(গ) নিট পরিসম্পদের মূল্যমান ৫ কোটি টাকার অধিক কিন্তু ১০ কোটি টাকার অধিক নহে</td>
                                                <td className="border px-4 py-2 text-center">১৫%</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">(ঘ) নিট পরিসম্পদের মূল্যমান ১০ কোটি টাকার অধিক কিন্তু ১৫ কোটি টাকার অধিক নহে</td>
                                                <td className="border px-4 py-2 text-center">২০%</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">(ঙ) নিট পরিসম্পদের মূল্যমান ১৫ কোটি টাকার অধিক কিন্তু ২০ কোটি টাকার অধিক নহে</td>
                                                <td className="border px-4 py-2 text-center">২৫%</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">(চ) নিট পরিসম্পদের মূল্যমান ২০ কোটি টাকার অধিক হইলে</td>
                                                <td className="border px-4 py-2 text-center">৩০%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <ul className="list-disc mt-4 pl-6 text-sm">
                                    <li>তামাকজাত পন্য প্রস্তুতকারক ব্যবসায়ের জন্য অর্জিত আয়ের ২.৫% হারে সারচার্জ।</li>
                                </ul>
                            </div>
                        )
                    }
                    {
                        taxYear === "২০১৬-২০১৭" && (
                            <div className="col-12">
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-300 text-sm">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border px-4 py-2 text-center font-semibold">সম্পদ</th>
                                                <th className="border px-4 py-2 text-center font-semibold">সারচার্জের হার</th>
                                                <th className="border px-4 py-2 text-center font-semibold">ন্যূনতম সারচার্জ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border px-4 py-2">(ক) নিট পরিসম্পদের মূল্যমান দুই কোটি পঁচিশ লক্ষ (২.২৫ কোটি) টাকা পর্যন্ত</td>
                                                <td className="border px-4 py-2 text-center">শূন্য</td>
                                                <td className="border px-4 py-2 text-center" rowSpan={6}>৩,০০০ টাকা</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">(খ) নিট পরিসম্পদের মূল্যমান ২.২৫ কোটি টাকার অধিক কিন্তু ৫ কোটি টাকার অধিক নহে</td>
                                                <td className="border px-4 py-2 text-center">১০%</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">(গ) নিট পরিসম্পদের মূল্যমান ৫ কোটি টাকার অধিক কিন্তু ১০ কোটি টাকার অধিক নহে</td>
                                                <td className="border px-4 py-2 text-center">১৫%</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">(ঘ) নিট পরিসম্পদের মূল্যমান ১০ কোটি টাকার অধিক কিন্তু ১৫ কোটি টাকার অধিক নহে</td>
                                                <td className="border px-4 py-2 text-center">২০%</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">(ঙ) নিট পরিসম্পদের মূল্যমান ১৫ কোটি টাকার অধিক কিন্তু ২০ কোটি টাকার অধিক নহে</td>
                                                <td className="border px-4 py-2 text-center">২৫%</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">(চ) নিট পরিসম্পদের মূল্যমান ২০ কোটি টাকার অধিক হইলে</td>
                                                <td className="border px-4 py-2 text-center">৩০%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                    {
                        taxYear === "২০১৫-২০১৬" && (
                            <div className="col-12">
                                <table className="w-full border border-gray-400">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-400 p-2 text-center font-semibold">
                                                সম্পদ
                                            </th>
                                            <th className="border border-gray-400 p-2 text-center font-semibold">
                                                সারচার্জের হার
                                            </th>
                                            <th className="border border-gray-400 p-2 text-center font-semibold">
                                                ন্যূনতম সারচার্জ
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                নিট পরিসম্পদের মূল্যমান দুই কোটি পঁচিশ লক্ষ (২.২৫ কোটি) টাকা পর্যন্ত
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">শূন্য</td>
                                            <td
                                                className="border border-gray-400 p-2 text-center align-middle"
                                                rowSpan="5"
                                            >
                                                ৩,০০০ টাকা
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                নিট পরিসম্পদের মূল্যমান দুই কোটি পঁচিশ লক্ষ (২.২৫ কোটি) টাকার অধিক কিন্তু ১০ (দশ) কোটি টাকার অধিক নহে;
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">১০%</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                নিট পরিসম্পদের মূল্যমান ১০ (দশ) কোটি টাকার অধিক কিন্তু ২০ (বিশ) কোটি টাকার অধিক নহে;
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">১৫%</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                নিট পরিসম্পদের মূল্যমান ২০ (বিশ) কোটি টাকার অধিক কিন্তু ৩০ (ত্রিশ) কোটি টাকার অধিক নহে;
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">২০%</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                নিট পরিসম্পদের মূল্যমান ৩০ (ত্রিশ) কোটি টাকার অধিক হইলে
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">২৫%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                    {
                        taxYear === "২০১৪-২০১৫" && (
                            <div className="col-12">
                                <table className="w-full border border-gray-400">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-400 p-2 text-center font-semibold">
                                                সম্পদ
                                            </th>
                                            <th className="border border-gray-400 p-2 text-center font-semibold">
                                                সারচার্জের হার
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                (ক) নিট পরিসম্পদের মূল্যমান ২ (দুই) কোটি টাকা পর্যন্ত
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">শূন্য</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                (খ) নিট পরিসম্পদের মূল্যমান ২ (দুই) কোটি টাকার অধিক কিন্তু ১০ (দশ) কোটি টাকার অধিক নহে;
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">১০%</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                (গ) নিট পরিসম্পদের মূল্যমান ১০ (দশ) কোটি টাকার অধিক কিন্তু ২০ (বিশ) কোটি টাকার অধিক নহে;
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">১৫%</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                (ঘ) নিট পরিসম্পদের মূল্যমান ২০ (বিশ) কোটি টাকার অধিক কিন্তু ৩০ (ত্রিশ) কোটি টাকার অধিক নহে;
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">২০%</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                (ঙ) নিট পরিসম্পদের মূল্যমান ৩০ (ত্রিশ) কোটি টাকার অধিক হইলে
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">২৫%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                    {
                        taxYear === "২০১৩-২০১৪" && (
                            <div className="col-12">
                                <table className="w-full border border-gray-400">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-400 p-2 text-center font-semibold">
                                                সম্পদ
                                            </th>
                                            <th className="border border-gray-400 p-2 text-center font-semibold">
                                                সারচার্জের হার
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                (ক) নিট পরিসম্পদের মূল্যমান ২ (দুই) কোটি টাকা পর্যন্ত
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">
                                                শূন্য
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                (খ) নিট পরিসম্পদের মূল্যমান ২ (দুই) কোটি টাকার অধিক কিন্তু ১০ (দশ) কোটি টাকার অধিক নহে;
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">
                                                ১০%
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                (গ) নিট  পরিসম্পদের মূল্যমান ১০ (দশ) কোটি টাকার অধিক হইলে
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">
                                                ১৫%
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                    {
                        (taxYear === "২০১২-২০১৩" || taxYear === "২০১১-২০১২") && (
                            <div className="col-12">
                                <table className="w-full border border-gray-400">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-400 p-2 text-center font-semibold">
                                                সম্পদ
                                            </th>
                                            <th className="border border-gray-400 p-2 text-center font-semibold">
                                                সারচার্জের হার
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-400 p-2">
                                                (ক) নিট পরিসম্পদের মূল্যমান ২ (দুই) কোটি টাকা পর্যন্ত অধিক হইলে
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center">
                                                ১০%
                                            </td>
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
    );
}
