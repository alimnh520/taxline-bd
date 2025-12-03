'use client'
import React, { useState } from "react";
import TaxAccordions from "../PersonalTax";
import { PersonalFeature } from "../PersonalFeature";
import GovernmentLinks from "../../GovtLink";

export default function page() {

    const [selectedId, setSelectedId] = useState(15);

    const handleChange = (e) => {
        setSelectedId(parseInt(e.target.value));
    };

    return (
        <div className="flex flex-col justify-start items-center gap-y-8 w-full mx-auto border-t border-t-gray-200">

            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-center w-full">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/4 p-4">
                    <h1 className="text-center text-4xl font-bold mb-6">আঞ্চলিক ন্যূনতম কর</h1>

                    <div className="w-full mb-6 flex items-center justify-between">
                        <label className="block  font-semibold">করবর্ষ</label>
                        <div className="w-2/3">
                            <select
                                id="selectedTaxRebateId"
                                className="w-full border border-green-500 outline-none appearance-none rounded px-3 py-2"
                                value={selectedId}
                                onChange={handleChange}
                            >
                                <option value={15}>২০২৭-২০২৮</option>
                                <option value={14}>২০২৬-২০২৭</option>
                                <option value={13}>২০২৫-২০২৬</option>
                                <option value={12}>২০২৪-২০২৫</option>
                                <option value={11}>২০২৩-২০২৪</option>
                                <option value={10}>২০২২-২০২৩</option>
                                <option value={9}>২০২১-২০২২</option>
                                <option value={8}>২০২০-২০২১</option>
                                <option value={7}>২০১৯-২০২০</option>
                                <option value={6}>২০১৮-২০১৯</option>
                                <option value={5}>২০১৭-২০১৮</option>
                                <option value={4}>২০১৬-২০১৭</option>
                                <option value={3}>২০১৫-২০১৬</option>
                                <option value={2}>২০১৪-২০১৫</option>
                                <option value={1}>২০১৩-২০১৪</option>
                            </select>
                        </div>
                    </div>
                    {[15, 14].includes(selectedId) && (
                        <p>
                            করমুক্ত আয়ের সীমা অতিক্রম করলে নূন্যতম করের পরিমাণ ৫,০০০/- টাকা। তবে নূতন করদাতাগণের ক্ষেত্রে নূন্যতম করের পরিমাণ ১,০০০/- টাকা।
                        </p>
                    )}
                    {[13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].includes(selectedId) && (
                        <div className="col-span-12 overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse text-center">
                                <colgroup>
                                    <col className="w-[61%]" />
                                    <col className="w-[39%]" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="border border-black px-2 py-1">এলাকার বিবরণ</th>
                                        <th className="border border-black px-2 py-1">নূন্যতম কর (টাকা)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-black text-left">ঢাকা উত্তর সিটি কর্পোরেশন, ঢাকা দক্ষিণ সিটি কর্পোরেশন ও চট্টগ্রাম সিটি কর্পোরেশন</td>
                                        <td className="border border-black py-2">৫,০০০/-</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black text-left">অন্যান্য সিটি কর্পোরেশন</td>
                                        <td className="border border-black py-2">৪,০০০/-</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black text-left">সিটি কর্পোরেশন এর বাইরে</td>
                                        <td className="border border-black py-2">৩,০০০/-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )}
                </div>
            </div>
            <GovernmentLinks />
        </div>
    );
}
