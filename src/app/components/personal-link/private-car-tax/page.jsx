'use client'
import React, { useState } from "react";
import TaxAccordions from "../PersonalTax";
import { PersonalFeature } from "../PersonalFeature";
import GovernmentLinks from "../../GovtLink";
import { Animations } from "../../Animations";

export default function page() {

    const [selectedId, setSelectedId] = useState(3);

    const handleChange = (e) => {
        setSelectedId(parseInt(e.target.value));
    };

    return (
        <div className="flex flex-col justify-start items-center gap-y-8 w-full mx-auto border-t border-t-gray-200">
            <Animations />
            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-center w-full -mt-15">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/4 p-4">
                    <h1 className="text-center text-4xl font-bold mb-6">কর রেয়াত তথ্য</h1>

                    <div className="w-full mb-6 flex items-center justify-between">
                        <label className="block  font-semibold">করবর্ষ</label>
                        <div className="w-2/3">
                            <select
                                id="selectedTaxRebateId"
                                className="w-full border border-green-500 outline-none appearance-none rounded px-3 py-2"
                                value={selectedId}
                                onChange={handleChange}
                            >
                                <option value={3}>২০২৫-২০২৬</option>
                                <option value={2}>২০২৪-২০২৫</option>
                                <option value={1}>২০২৩-২০২৪</option>
                            </select>
                        </div>
                    </div>
                    {selectedId === parseInt(3) && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse text-center">
                                <colgroup>
                                    <col className="w-[8%]" />
                                    <col className="w-[59%]" />
                                    <col className="w-[33%]" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="border border-black px-2 py-1">ক্রমিক নং</th>
                                        <th className="border border-black px-2 py-1">গাড়ির ধরন ও ইঞ্জিন ক্যাপাসিটি</th>
                                        <th className="border border-black px-2 py-1">অগ্রিম কর (টাকা)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-black">১।</td>
                                        <td className="border border-black text-left">
                                            ১৫০০ সিসি বা ৭৫ কিলোওয়াটের উর্ধ্বে নহে এইরূপ প্রতিটি মোটরযানের জন্য
                                        </td>
                                        <td className="border border-black">২৫ (পঁচিশ) হাজার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">২।</td>
                                        <td className="border border-black text-left">
                                            ১৫০০ সিসি বা ৭৫ কিলোওয়াটের উর্ধ্বে, তবে ২০০০ সিসি বা ১০০ কিলোওয়াটের উর্ধ্বে নহে এইরূপ প্রতিটি মোটরযানের জন্য
                                        </td>
                                        <td className="border border-black">৫০ (পঞ্চাশ) হাজার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">৩।</td>
                                        <td className="border border-black text-left">
                                            ২০০০ সিসি বা ১০০ কিলোওয়াটের উর্ধ্বে, তবে ২৫০০ সিসি বা ১২৫ কিলোওয়াটের উর্ধ্বে নহে এইরূপ প্রতিটি মোটরযানের জন্য
                                        </td>
                                        <td className="border border-black">৭৫ (পঁচাত্তর) হাজার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">৪।</td>
                                        <td className="border border-black text-left">
                                            ২৫০০ সিসি বা ১২৫ কিলোওয়াটের উর্ধ্বে, তবে ৩০০০ সিসি বা ১৫০ কিলোওয়াটের উর্ধ্বে নহে এইরূপ প্রতিটি মোটরযানের জন্য
                                        </td>
                                        <td className="border border-black">১ (এক) লক্ষ ২৫ (পঁচিশ) হাজার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">৫।</td>
                                        <td className="border border-black text-left">
                                            ৩০০০ সিসি বা ১৫০ কিলোওয়াটের উর্ধ্বে, তবে ৩৫০০ সিসি বা ১৭৫ কিলোওয়াটের উর্ধ্বে নহে এইরূপ প্রতিটি মোটরযানের জন্য
                                        </td>
                                        <td className="border border-black">১ (এক) লক্ষ ৫০ (পঞ্চাশ) হাজার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">৬।</td>
                                        <td className="border border-black text-left">
                                            ৩৫০০ সিসি বা ১৭৫ কিলোওয়াটের উর্ধ্বে প্রতিটি মোটরযানের জন্য
                                        </td>
                                        <td className="border border-black">২ (দুই) লক্ষ</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">৭।</td>
                                        <td className="border border-black text-left">মাইক্রোবাস প্রতিটির জন্য</td>
                                        <td className="border border-black">৩০ (ত্রিশ) হাজার</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-justify mt-5">
                                নোটঃ কোনো স্বাভাবিক ব্যক্তি নিজ নামে বা অন্য কোনো ব্যক্তির সাথে যৌথভাবে একাধিক মোটরযানের মালিক হলে, উক্ত ব্যক্তিকে একের অধিক প্রতিটি মোটরযানের জন্য ৫০% অধিক হারে কর পরিশোধ করতে হবে।
                            </p>
                        </div>
                    )}
                    {[1, 2].includes(selectedId) && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse text-center">
                                <colgroup>
                                    <col className="w-[8%]" />
                                    <col className="w-[59%]" />
                                    <col className="w-[33%]" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="border border-black px-2 py-1">ক্রমিক নং</th>
                                        <th className="border border-black px-2 py-1">গাড়ির ধরন ও ইঞ্জিন ক্যাপাসিটি</th>
                                        <th className="border border-black px-2 py-1">অগ্রিম কর (টাকা)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-black">১।</td>
                                        <td className="border border-black text-left">
                                            ১৫০০ সিসি বা ৭৫ কিলোওয়াটের উর্ধ্বে নহে এইরূপ প্রতিটি মোটরযানের জন্য
                                        </td>
                                        <td className="border border-black">২৫ (পঁচিশ) হাজার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">২।</td>
                                        <td className="border border-black text-left">
                                            ১৫০০ সিসি বা ৭৫ কিলোওয়াটের উর্ধ্বে, তবে ২০০০ সিসি বা ১০০ কিলোওয়াটের উর্ধ্বে নহে এইরূপ প্রতিটি মোটরযানের জন্য
                                        </td>
                                        <td className="border border-black">৫০ (পঞ্চাশ) হাজার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">৩।</td>
                                        <td className="border border-black text-left">
                                            ২০০০ সিসি বা ১০০ কিলোওয়াটের উর্ধ্বে, তবে ২৫০০ সিসি বা ১২৫ কিলোওয়াটের উর্ধ্বে নহে এইরূপ প্রতিটি মোটরযানের জন্য
                                        </td>
                                        <td className="border border-black">৭৫ (পঁচাত্তর) হাজার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">৪।</td>
                                        <td className="border border-black text-left">
                                            ২৫০০ সিসি বা ১২৫ কিলোওয়াটের উর্ধ্বে, তবে ৩০০০ সিসি বা ১৫০ কিলোওয়াটের উর্ধ্বে নহে এইরূপ প্রতিটি মোটরযানের জন্য
                                        </td>
                                        <td className="border border-black">১ (এক) লক্ষ ২৫ (পঁচিশ) হাজার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">৫।</td>
                                        <td className="border border-black text-left">
                                            ৩০০০ সিসি বা ১৫০ কিলোওয়াটের উর্ধ্বে, তবে ৩৫০০ সিসি বা ১৭৫ কিলোওয়াটের উর্ধ্বে নহে এইরূপ প্রতিটি মোটরযানের জন্য
                                        </td>
                                        <td className="border border-black">১ (এক) লক্ষ ৫০ (পঞ্চাশ) হাজার</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">৬।</td>
                                        <td className="border border-black text-left">
                                            ৩৫০০ সিসি বা ১৭৫ কিলোওয়াটের উর্ধ্বে প্রতিটি মোটরযানের জন্য
                                        </td>
                                        <td className="border border-black">২ (দুই) লক্ষ</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black">৭।</td>
                                        <td className="border border-black text-left">মাইক্রোবাস প্রতিটির জন্য</td>
                                        <td className="border border-black">৩০ (ত্রিশ) হাজার</td>
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
