// /components/personal-link/reduced-income-tax/page.js
'use client'
import React from "react";
import { useState } from "react";
import { PersonalFeature } from "../../personal-link/PersonalFeature";
import TaxAccordions from "../../personal-link/PersonalTax";
import GovernmentLinks from "../../GovtLink";


export default function page() {

    const [selectedYear, setSelectedYear] = useState('1');

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
                                <option value="1">২০২৫-২০২৬</option>
                                <option value="2">২০২৪-২০২৫</option>
                                <option value="3">২০২৩-২০২৪</option>
                                <option value="4">২০২২-২০২৩</option>
                                <option value="5">২০২১-২০২২</option>
                                <option value="6">২০২০-২০২১</option>
                                <option value="7">২০১৯-২০২০</option>
                                <option value="8">২০১৮-২০১৯</option>
                                <option value="12">২০১৪-২০১৫</option>
                                <option value="13">২০১৩-২০১৪</option>
                                <option value="14">২০১২-২০১৩</option>
                                <option value="15">২০১১-২০১২</option>
                                <option value="16">২০১০-২০১১</option>
                                <option value="17">২০০৯-২০১০</option>
                                <option value="18">২০০৮-২০০৯</option>
                                <option value="19">২০০৭-২০০৮</option>
                                <option value="20">২০০৬-২০০৭</option>
                                <option value="21">২০০৫-২০০৬</option>
                                <option value="22">২০০৪-২০০৫</option>
                            </select>
                        </div>
                    </div>
                    {selectedYear === '1' && (
                        <div className="overflow-x-auto">
                            <table className="w-full border border-black border-collapse text-sm">
                                <colgroup>
                                    <col className="w-[39.5868%]" />
                                    <col className="w-[49.708%]" />
                                    <col className="w-[10.7052%]" />
                                </colgroup>

                                <tbody>
                                    <tr className="h-[76.7812px]">
                                        <td className="border border-black py-2">স্বাভাবিক ব্যক্তি করদাতা</td>
                                        <td className="border border-black py-2">
                                            অনূন্য ৪ (চার) কোটি টাকার গ্রস প্রাপ্তি রহিয়াছে (লাভ ক্ষতি নির্বিশেষে)
                                        </td>
                                        <td className="border border-black py-2 text-center">১%</td>
                                    </tr>

                                    <tr className="h-[77.7656px]">
                                        <td className="border border-black py-2">ট্রাস্ট, ফার্ম বা ব্যক্তিসংঘ</td>
                                        <td className="border border-black py-2">
                                            অনূন্য ৫০ (পঞ্চাশ) লক্ষ টাকার গ্রস প্রাপ্তি রহিয়াছে (লাভ ক্ষতি নির্বিশেষে)
                                        </td>
                                        <td className="border border-black py-2 text-center">১%</td>
                                    </tr>

                                    <tr className="h-[54.3906px]">
                                        <td className="border border-black py-2">কোম্পানী করদাতা</td>
                                        <td className="border border-black py-2">&nbsp;</td>
                                        <td className="border border-black py-2 text-center">&nbsp;</td>
                                    </tr>

                                    <tr className="h-[67.1719px]">
                                        <td className="border border-black py-2">
                                            সিগারেট, বিড়ি, চিবাইয়া খাওয়ার তামাক, ধোঁয়াবিহীন তামাক, গুল বা অন্য কোন তামাকজাত দ্রব্য প্রস্তুতকারক
                                        </td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">৩%</td>
                                    </tr>

                                    <tr className="h-[67.1719px]">
                                        <td className="border border-black py-2">
                                            কার্বোনেটেড বেভারেজ (carbonated beverage), মিষ্টি পানীয় (sweetened beverage) প্রস্তুতকারক
                                        </td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">৩%</td>
                                    </tr>

                                    <tr className="h-[22.3906px]">
                                        <td className="border border-black py-2">মোবাইল ফোন অপারেটর</td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">১.৫%</td>
                                    </tr>

                                    <tr className="h-[89.5625px]">
                                        <td className="border border-black py-2">
                                            সিগারেট, বিড়ি, চিবাইয়া খাওয়ার তামাক, ধোঁয়াবিহীন তামাক, গুল বা অন্য কোন তামাকজাত দ্রব্য প্রস্তুতকারক ব্যতীত অন্য কোন স্বাভাবিক ব্যক্তি করদাতা
                                        </td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">১%</td>
                                    </tr>

                                    <tr className="h-[22.3906px]">
                                        <td className="border border-black py-2">অন্য কোনো ক্ষেত্রে</td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">১%</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p className="mt-4 text-sm">
                                পণ্য উৎপাদনে নিয়োজিত কোনো শিল্প প্রতিষ্ঠানের ক্ষেত্রে বাণিজ্যিক উৎপাদন শুরুর প্রথম ৩ (তিন) বৎসরের জন্য, উক্ত হার হবে গ্রস প্রাপ্তির ০.১%।
                            </p>
                        </div>

                    )}
                    {selectedYear === '2' && (
                        <div className="overflow-x-auto">
                            <table className="w-full border border-black border-collapse text-sm">
                                <colgroup>
                                    <col className="w-[39.5868%]" />
                                    <col className="w-[49.708%]" />
                                    <col className="w-[10.7052%]" />
                                </colgroup>

                                <tbody>
                                    <tr className="h-[54.3906px]">
                                        <td className="border border-black py-2">ব্যক্তি করদাতা</td>
                                        <td className="border border-black py-2">
                                            অনূন্য ৩ (তিন) কোটি টাকার গ্রস প্রাপ্তি রহিয়াছে (লাভ ক্ষতি নির্বিশেষে)
                                        </td>
                                        <td className="border border-black py-2 text-center">০.৬০%</td>
                                    </tr>

                                    <tr className="h-[54.3906px]">
                                        <td className="border border-black py-2">ট্রাস্ট, ফার্ম বা ব্যক্তিসংঘ</td>
                                        <td className="border border-black py-2">
                                            অনূন্য ৫০ (পঞ্চাশ) লক্ষ টাকার গ্রস প্রাপ্তি রহিয়াছে (লাভ ক্ষতি নির্বিশেষে)
                                        </td>
                                        <td className="border border-black py-2 text-center">০.৬০%</td>
                                    </tr>

                                    <tr className="h-[22.3906px]">
                                        <td className="border border-black py-2">কোম্পানী করদাতা</td>
                                        <td className="border border-black py-2">&nbsp;</td>
                                        <td className="border border-black py-2 text-center">&nbsp;</td>
                                    </tr>

                                    <tr className="h-[44.7812px]">
                                        <td className="border border-black py-2">
                                            সিগারেট, বিড়ি, চিবাইয়া খাওয়ার তামাক, ধোঁয়াবিহীন তামাক বা অন্য কোন তামাকজাত দ্রব্য
                                        </td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">৩%</td>
                                    </tr>

                                    <tr className="h-[22.3906px]">
                                        <td className="border border-black py-2">কার্বোনেটেড বেভারেজ, মিষ্টি পানীয়</td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">৩%</td>
                                    </tr>

                                    <tr className="h-[22.3906px]">
                                        <td className="border border-black py-2">মোবাইল ফোন অপারেটর</td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">২%</td>
                                    </tr>

                                    <tr className="h-[67.1719px]">
                                        <td className="border border-black py-2">
                                            সিগারেট, বিড়ি, চিবাইয়া খাওয়ার তামাক, ধোঁয়াবিহীন তামাক বা অন্য কোন তামাকজাত দ্রব্য প্রস্তুতকারক ব্যতীত অন্য কোন স্বাভাবিক করদাতা
                                        </td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">০.২৫%</td>
                                    </tr>

                                    <tr className="h-[22.3906px]">
                                        <td className="border border-black py-2">অন্য কোনো ক্ষেত্রে</td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">০.৬০%</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p className="mt-4 text-sm">
                                পণ্য উৎপাদনে নিয়োজিত কোনো শিল্প প্রতিষ্ঠানের ক্ষেত্রে বাণিজ্যিক উৎপাদন শুরুর প্রথম ৩ (তিন) বৎসরের জন্য, উক্ত হার হবে গ্রস প্রাপ্তির ০.১%।
                            </p>
                        </div>

                    )}
                    {selectedYear === '3' && (
                        <div className="overflow-x-auto">
                            <table className="w-full border border-black border-collapse text-sm">
                                <colgroup>
                                    <col className="w-[39.5868%]" />
                                    <col className="w-[49.708%]" />
                                    <col className="w-[10.7052%]" />
                                </colgroup>

                                <tbody>
                                    <tr>
                                        <td className="border border-black py-2">ব্যক্তি করদাতা</td>
                                        <td className="border border-black py-2">
                                            অনূন্য ৩ (তিন) কোটি টাকার গ্রস প্রাপ্তি রহিয়াছে (লাভ ক্ষতি নির্বিশেষে)
                                        </td>
                                        <td className="border border-black py-2 text-center">০.৬০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">ফার্ম বা ব্যক্তিসংঘ</td>
                                        <td className="border border-black py-2">
                                            অনূন্য ৫০ (পঞ্চাশ) লক্ষ টাকার গ্রস প্রাপ্তি রহিয়াছে (লাভ ক্ষতি নির্বিশেষে)
                                        </td>
                                        <td className="border border-black py-2 text-center">০.৬০%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">কোম্পানী করদাতা</td>
                                        <td className="border border-black py-2">&nbsp;</td>
                                        <td className="border border-black py-2 text-center">&nbsp;</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">
                                            সিগারেট, বিড়ি, চিবাইয়া খাওয়ার তামাক, ধোঁয়াবিহীন তামাক বা অন্য কোন তামাকজাত দ্রব্য
                                        </td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">৩%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">কার্বোনেটেড বেভারেজ</td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">মোবাইল ফোন অপারেটর</td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">২%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">
                                            সিগারেট, বিড়ি, চিবাইয়া খাওয়ার তামাক, ধোঁয়াবিহীন তামাক বা অন্য কোন তামাকজাত দ্রব্য প্রস্তুতকারক ব্যতীত অন্য কোন স্বাভাবিক করদাতা
                                        </td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">০.২৫%</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-black py-2">অন্য কোনো ক্ষেত্রে</td>
                                        <td className="border border-black py-2">গ্রস প্রাপ্তির উপর (লাভ ক্ষতি নির্বিশেষে)</td>
                                        <td className="border border-black py-2 text-center">০.৬০%</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p className="mt-4 text-sm">
                                পণ্য উৎপাদনে নিয়োজিত কোনো শিল্প প্রতিষ্ঠানের ক্ষেত্রে বাণিজ্যিক উৎপাদন শুরুর প্রথম ৩ (তিন) বৎসরের জন্য, উক্ত হার হবে গ্রস প্রাপ্তির ০.১%।
                            </p>
                        </div>

                    )}
                    {['4','5','6','7','8'].includes(selectedYear) && (
                        <div className=""><p>০.৬০% (মোট প্রাপ্তির উপরে)</p></div>
                    )}
                    {selectedYear === '12' && (
                        <div className=""><p>০.৩০% (মোট প্রাপ্তির উপর)</p></div>
                    )}
                    {['13','14','15'].includes(selectedYear) && (
                        <div className=""><p>০.৫০% (মোট প্রাপ্তির উপর)</p></div>
                    )}
                    {['16','17'].includes(selectedYear) && (
                        <div className=""><p>৫,০০০ টাকা (লাভ-ক্ষতি নির্বিশেষে)</p></div>
                    )}
                    {selectedYear === '18' && (
                        <div className=""><p>প্রযোজ্য নয়।</p></div>
                    )}
                    {selectedYear === '19' && (
                        <div className=""><p>০.২৫% অথবা ৫,০০০/- টাকার মধ্যে যেটি বেশি</p></div>
                    )}
                    {selectedYear === '20' && (
                        <div className=""><p>০.৫০% অথবা ৫,০০০/- টাকার মধ্যে যেটি বেশি</p></div>
                    )}
                    {selectedYear === '21' && (
                        <div className=""><p>প্রযোজ্য নয়</p></div>
                    )}
                    {selectedYear === '22' && (
                        <div className=""><p>প্রযোজ্য নয়</p></div>
                    )}
                </div>
            </div>
        </div>
    )
}