'use client'
import React, { useState } from "react";
import TaxAccordions from "../PersonalTax";
import { PersonalFeature } from "../PersonalFeature";
import GovernmentLinks from "../../GovtLink";

export default function page() {

    const [selectedId, setSelectedId] = useState(5);

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
                    <h1 className="text-center text-4xl font-bold mb-6">পরিবেশ সারচার্জের হার</h1>

                    <div className="w-full mb-6 flex items-center justify-between">
                        <label className="block  font-semibold">করবর্ষ</label>
                        <div className="w-2/3">
                            <select
                                id="selectedTaxRebateId"
                                className="w-full border border-green-500 outline-none appearance-none rounded px-3 py-2"
                                value={selectedId}
                                onChange={handleChange}
                            >
                                <option value={5}>২০২৭-২০২৮</option>
                                <option value={4}>২০২৬-২০২৭</option>
                                <option value={3}>২০২৫-২০২৬</option>
                                <option value={2}>২০২৪-২০২৫</option>
                                <option value={1}>২০২৩-২০২৪</option>
                            </select>
                        </div>
                    </div>
                    {[4, 5].includes(selectedId) && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse text-center">
                                <colgroup>
                                    <col className="w-[9%]" />
                                    <col className="w-[71%]" />
                                    <col className="w-[20%]" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="border border-black px-2 py-1">ক্রমিক নং</th>
                                        <th className="border border-black px-2 py-1">মোটর গাড়ির বর্ণনা</th>
                                        <th className="border border-black px-2 py-1">পরিবেশ সারচার্জের হার (টাকায়)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-black py-2">১।</td>
                                        <td className="border border-black text-left">১৫০০ সিসি বা ৭৫ কিলোওয়াট পর্যন্ত প্রতিটি মোটর গাড়ির জন্য</td>
                                        <td className="border border-black py-2">২৫,০০০</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black py-2">২।</td>
                                        <td className="border border-black text-left">১৫০০ সিসির অধিক কিন্তু ২০০০ সিসির অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                        <td className="border border-black py-2">৫০,০০০</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black py-2">৩।</td>
                                        <td className="border border-black text-left">২০০০ সিসির অধিক কিন্তু ২৫০০ সিসির অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                        <td className="border border-black py-2">৭৫,০০০</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black py-2">৪।</td>
                                        <td className="border border-black text-left">২৫০০ সিসির অধিক কিন্তু ৩০০০ সিসির অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                        <td className="border border-black py-2">১,৫০,০০০</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black py-2">৫।</td>
                                        <td className="border border-black text-left">৩০০০ সিসির অধিক কিন্তু ৩৫০০ সিসির অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                        <td className="border border-black py-2">২,০০,০০০</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black py-2">৬।</td>
                                        <td className="border border-black text-left">৩৫০০ সিসির অধিক এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                        <td className="border border-black py-2">৩,৫০,০০০</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {[1, 2, 3].includes(selectedId) && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse text-center">
                                <colgroup>
                                    <col className="w-[9%]" />
                                    <col className="w-[71%]" />
                                    <col className="w-[20%]" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="border border-black px-2 py-1">ক্রমিক নং</th>
                                        <th className="border border-black px-2 py-1">মোটর গাড়ির বর্ণনা</th>
                                        <th className="border border-black px-2 py-1">পরিবেশ সারচার্জের হার (টাকায়)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-black py-2">১।</td>
                                        <td className="border border-black text-left">১৫০০ সিসি বা ৭৫ কিলোওয়াট পর্যন্ত প্রতিটি মোটর গাড়ির জন্য</td>
                                        <td className="border border-black py-2">২৫,০০০</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black py-2">২।</td>
                                        <td className="border border-black text-left">১৫০০ সিসি বা ৭৫ কিলোওয়াটের অধিক কিন্তু ২০০০ সিসি বা ১০০ কিলোওয়াটের অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                        <td className="border border-black py-2">৫০,০০০</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black py-2">৩।</td>
                                        <td className="border border-black text-left">২০০০ সিসি বা ১০০ কিলোওয়াটের অধিক কিন্তু ২৫০০ সিসি বা ১২৫ কিলোওয়াটের অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                        <td className="border border-black py-2">৭৫,০০০</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black py-2">৪।</td>
                                        <td className="border border-black text-left">২৫০০ সিসি বা ১২৫ কিলোওয়াটের অধিক কিন্তু ৩০০০ সিসি বা ১৫০ কিলোওয়াটের অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                        <td className="border border-black py-2">১,৫০,০০০</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black py-2">৫।</td>
                                        <td className="border border-black text-left">৩০০০ সিসি বা ১৫০ কিলোওয়াটের অধিক কিন্তু ৩৫০০ সিসি বা ১৭৫ কিলোওয়াটের অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                        <td className="border border-black py-2">২,০০,০০০</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black py-2">৬।</td>
                                        <td className="border border-black text-left">৩৫০০ সিসি বা ১৭৫ কিলোওয়াটের অধিক এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                        <td className="border border-black py-2">৩,৫০,০০০</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {selectedId === parseInt(2) && (
                        <div className="overflow-x-auto">
                        </div>
                    )}
                    {selectedId === parseInt(1) && (
                        <div className="overflow-x-auto">
                        </div>
                    )}
                </div>
            </div>
            <GovernmentLinks />
        </div>
    )

}
