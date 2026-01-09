'use client'

import { useState } from "react";
import { PersonalFeature } from "../../personal-link/PersonalFeature";
import TaxAccordions from "../../personal-link/PersonalTax";
import GovernmentLinks from "../../GovtLink";

export default function page() {
    const [selectedYear, setSelectedYear] = useState('5');

    return (
        <div className="flex flex-col justify-start items-center gap-y-8 mx-auto border-t border-t-gray-200">

            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-center gap-x-5 w-10/12">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/3 p-4">
                    <h1 className="text-center text-3xl font-semibold mb-3">পরিবেশ সারচার্জের হার</h1>
                    <div className="row g-1">
                        <div className="col-md-12">
                            <div className="mb-3 row flex items-center justify-between">
                                <label className="block font-semibold">করবর্ষ</label>
                                <div className="w-2/4">
                                    <select
                                        id="selectedYearId"
                                        className="w-full border border-green-500 outline-none appearance-none rounded px-3 py-1.5"
                                        value={selectedYear}
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                    >
                                        <option value="5">২০২৭ - ২০২৮</option>
                                        <option value="4">২০২৬ - ২০২৭</option>
                                        <option value="3">২০২৫ - ২০২৬</option>
                                        <option value="2">২০২৪ - ২০২৫</option>
                                        <option value="1">২০২৩ - ২০২৪</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 mt-6 text-sm">
                            <div className="w-full">
                                <div className={`text-justify ${selectedYear === '5' || selectedYear === '4' ? 'block' : 'hidden'} space-y-4`}>
                                    <table className="border border-black w-full border-collapse">
                                        <colgroup>
                                            <col style={{ width: "8.60213%" }} />
                                            <col style={{ width: "70.8371%" }} />
                                            <col style={{ width: "20.4758%" }} />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="border border-black text-center py-2 font-semibold">ক্রমিক নং</th>
                                                <th className="border border-black text-center py-2 font-semibold">মোটর গাড়ির বর্ণনা</th>
                                                <th className="border border-black text-center py-2 font-semibold">পরিবেশ সারচার্জের হার (টাকায়)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-black text-center py-2 font-semibold">১।</td>
                                                <td className="border border-black px-2">১৫০০ সিসি বা ৭৫ কিলোওয়াট পর্যন্ত প্রতিটি মোটর গাড়ির জন্য</td>
                                                <td className="border border-black text-center py-2">২৫,০০০</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black text-center py-2 font-semibold">২।</td>
                                                <td className="border border-black px-2">১৫০০ সিসির অধিক কিন্তু ২০০০ সিসির অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                                <td className="border border-black text-center py-2">৫০,০০০</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black text-center py-2 font-semibold">৩।</td>
                                                <td className="border border-black px-2">২০০০ সিসির অধিক কিন্তু ২৫০০ সিসির অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                                <td className="border border-black text-center py-2">৭৫,০০০</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black text-center py-2 font-semibold">৪।</td>
                                                <td className="border border-black px-2">২৫০০ সিসির অধিক কিন্তু ৩০০০ সিসির অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                                <td className="border border-black text-center py-2">১,৫০,০০০</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black text-center py-2 font-semibold">৫।</td>
                                                <td className="border border-black px-2">৩০০০ সিসির অধিক কিন্তু ৩৫০০ সিসির অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                                <td className="border border-black text-center py-2">২,০০,০০০</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black text-center py-2 font-semibold">৬।</td>
                                                <td className="border border-black px-2">৩৫০০ সিসির অধিক এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                                <td className="border border-black text-center py-2">৩,৫০,০০০</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div className={`text-justify ${['1', '2', '3'].includes(selectedYear) ? 'block' : 'hidden'} space-y-4`}>

                                    <table className="border border-black w-full border-collapse">
                                        <colgroup>
                                            <col style={{ width: "8.60213%" }} />
                                            <col style={{ width: "70.8371%" }} />
                                            <col style={{ width: "20.4758%" }} />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="border border-black text-center font-semibold">ক্রমিক নং</th>
                                                <th className="border border-black text-center font-semibold">মোটর গাড়ির বর্ণনা</th>
                                                <th className="border border-black text-center font-semibold">পরিবেশ সারচার্জের হার (টাকায়)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-black text-center font-semibold">১।</td>
                                                <td className="border border-black py-1 px-2">১৫০০ সিসি বা ৭৫ কিলোওয়াট পর্যন্ত প্রতিটি মোটর গাড়ির জন্য</td>
                                                <td className="border border-black text-center">২৫,০০০</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black text-center font-semibold">২।</td>
                                                <td className="border border-black py-1 px-2">১৫০০ সিসি বা ৭৫ কিলোওয়াটের অধিক কিন্তু ২০০০ সিসি বা ১০০ কিলোওয়াটের অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                                <td className="border border-black text-center">৫০,০০০</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black text-center font-semibold">৩।</td>
                                                <td className="border border-black py-1 px-2">২০০০ সিসি বা ১০০ কিলোওয়াটের অধিক কিন্তু ২৫০০ সিসি বা ১২৫ কিলোওয়াটের অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                                <td className="border border-black text-center">৭৫,০০০</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black text-center font-semibold">৪।</td>
                                                <td className="border border-black py-1 px-2">২৫০০ সিসি বা ১২৫ কিলোওয়াটের অধিক কিন্তু ৩০০০ সিসি বা ১৫০ কিলোওয়াটের অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                                <td className="border border-black text-center">১,৫০,০০০</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black text-center font-semibold">৫।</td>
                                                <td className="border border-black py-1 px-2">৩০০০ সিসি বা ১৫০ কিলোওয়াটের অধিক কিন্তু ৩৫০০ সিসি বা ১৭৫ কিলোওয়াটের অধিক নহে এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                                <td className="border border-black text-center">২,০০,০০০</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black text-center font-semibold">৬।</td>
                                                <td className="border border-black py-1 px-2">৩৫০০ সিসি বা ১৭৫ কিলোওয়াটের অধিক এমন প্রতিটি মোটর গাড়ির জন্য</td>
                                                <td className="border border-black text-center">৩,৫০,০০০</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}></div>
                                <div className={`text-justify ${selectedYear === '1' ? 'block' : 'hidden'} space-y-4`}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <GovernmentLinks />
        </div>
    )
}
