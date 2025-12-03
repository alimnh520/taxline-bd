'use client'
import React, { useState } from "react";
import TaxAccordions from "../PersonalTax";
import { PersonalFeature } from "../PersonalFeature";
import GovernmentLinks from "../../GovtLink";

export default function page() {

    const [selectedId, setSelectedId] = useState(3);

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
                                    <col className="w-[12%]" />
                                    <col className="w-[67%]" />
                                    <col className="w-[21%]" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="border border-black px-2 py-1">ক্রমিক নং</th>
                                        <th className="border border-black px-2 py-1">গাড়ির ধরন</th>
                                        <th className="border border-black px-2 py-1">অগ্রিম কর (টাকা)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="border border-black py-1">১।</td><td className="border border-black text-left">৫২ আসনের অধিক আসন বিশিষ্ট বাস</td><td className="border border-black py-1">২৫ (পঁচিশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">২।</td><td className="border border-black text-left">৫২ আসনের অধিক আসন নহে এইরূপ বাস</td><td className="border border-black py-1">২০ (বিশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৩।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত বাস</td><td className="border border-black py-1">৫০ (পঞ্চাশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৪।</td><td className="border border-black text-left">ডাবল ডেকার বাস</td><td className="border border-black py-1">২৫ (পঁচিশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৫।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত মিনিবাস/কোস্টার</td><td className="border border-black py-1">২৫ (পঁচিশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৬।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ মিনিবাস/কোস্টার</td><td className="border border-black py-1">১২ (বার) হাজার ৫০০ (পাঁচশত)</td></tr>
                                    <tr><td className="border border-black py-1">৭।</td><td className="border border-black text-left">প্রাইম মুভার</td><td className="border border-black py-1">৩৫ (পঁয়ত্রিশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৮।</td><td className="border border-black text-left">৫ (পাঁচ) টনের অধিন পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td><td className="border border-black py-1">৩০ (ত্রিশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৯।</td><td className="border border-black text-left">১.৫ (দেড়) টনের অধিক, তবে ৫ (পাঁচ) টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td><td className="border border-black py-1">১৫ (পনের) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">১০।</td><td className="border border-black text-left">১.৫ (দেড়) টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td><td className="border border-black py-1">৭ (সাত) হাজার ৫০০ (পাঁচশত)</td></tr>
                                    <tr><td className="border border-black py-1">১১।</td><td className="border border-black text-left">পিকআপ ভ্যান, হিউম্যান হলার, ম্যাক্সি বা অটো রিক্সা</td><td className="border border-black py-1">৭ (সাত) হাজার ৫০০ (পাঁচশত)</td></tr>
                                    <tr><td className="border border-black py-1">১২।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত ট্যাক্সিক্যাব</td><td className="border border-black py-1">১৫ (পনের) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">১৩।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ ট্যাক্সিক্যাব</td><td className="border border-black py-1">৭ (সাত) হাজার ৫০০ (পাঁচশত)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {selectedId === parseInt(2) && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse text-center">
                                <colgroup>
                                    <col className="w-[9%]" />
                                    <col className="w-[46%]" />
                                    <col className="w-[22%]" />
                                    <col className="w-[23%]" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="border border-black px-2 py-1">ক্রমিক নং</th>
                                        <th className="border border-black px-2 py-1">গাড়ির ধরন</th>
                                        <th className="border border-black px-2 py-1">অগ্রিম কর (টাকা)</th>
                                        <th className="border border-black px-2 py-1">রিটার্ন দাখিলের প্রমাণ প্রদর্শনের ব্যর্থতায়</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="border border-black py-1">১।</td><td className="border border-black text-left">৫২ আসনের অধিক আসন বিশিষ্ট বাস</td><td className="border border-black py-1">১৬ (ষোল) হাজার</td><td className="border border-black py-1">২৪ (চব্বিশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">২।</td><td className="border border-black text-left">৫২ আসনের অধিক আসন নহে এইরূপ বাস</td><td className="border border-black py-1">১১ (এগার) হাজার ৫০০ (পাঁচশত)</td><td className="border border-black py-1">১৭ (সতের) হাজার ২০০ (পাঁচশত) ৫০ (পঞ্চাশ)</td></tr>
                                    <tr><td className="border border-black py-1">৩।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত বাস</td><td className="border border-black py-1">৩৭ (সাঁইত্রিশ) হাজার ৫০০ (পাঁচশত)</td><td className="border border-black py-1">৫৬ (ছাপ্পান্ন) হাজার ২০০ (পাঁচশত) ৫০ (পঞ্চাশ)</td></tr>
                                    <tr><td className="border border-black py-1">৪।</td><td className="border border-black text-left">ডাবল ডেকার বাস</td><td className="border border-black py-1">১৬ (ষোল) হাজার</td><td className="border border-black py-1">২৪ (চব্বিশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৫।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত মিনিবাস/কোস্টার</td><td className="border border-black py-1">১৬ (ষোল) হাজার</td><td className="border border-black py-1">২৪ (চব্বিশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৬।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ মিনিবাস/কোস্টার</td><td className="border border-black py-1">৬ (ছয়) হাজার ৫০০ (পাঁচশত)</td><td className="border border-black py-1">৯ (নয়) হাজার ৭০০ (সাতশত) ৫০ (পঞ্চাশ)</td></tr>
                                    <tr><td className="border border-black py-1">৭।</td><td className="border border-black text-left">প্রাইম মুভার</td><td className="border border-black py-1">২৪ (চব্বিশ) হাজার</td><td className="border border-black py-1">৩৬ (ছত্রিশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৮।</td><td className="border border-black text-left">৫ (পাঁচ) টনের অধিন পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td><td className="border border-black py-1">১৬ (ষোল) হাজার</td><td className="border border-black py-1">২৪ (চব্বিশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৯।</td><td className="border border-black text-left">১.৫ (দেড়) টনের অধিক, তবে ৫ (পাঁচ) টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td><td className="border border-black py-1">৯ (নয়) হাজার ৫০০ (পাঁচশত)</td><td className="border border-black py-1">১৪ (চৌদ্দ) হাজার ২০০ (পাঁচশত) ৫০ (পঞ্চাশ)</td></tr>
                                    <tr><td className="border border-black py-1">১০।</td><td className="border border-black text-left">১.৫ (দেড়) টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td><td className="border border-black py-1">৪ (চার) হাজার</td><td className="border border-black py-1">৬ (ছয়) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">১১।</td><td className="border border-black text-left">পিকআপ ভ্যান, হিউম্যান হলার, ম্যাক্সি বা অটো রিক্সা</td><td className="border border-black py-1">৪ (চার) হাজার</td><td className="border border-black py-1">৬ (ছয়) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">১২।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত ট্যাক্সিক্যাব</td><td className="border border-black py-1">১১ (এগার) হাজার ৫০০ (পাঁচশত)</td><td className="border border-black py-1">১৭ (সতের) হাজার ২০০ (পাঁচশত) ৫০ (পঞ্চাশ)</td></tr>
                                    <tr><td className="border border-black py-1">১৩।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ ট্যাক্সিক্যাব</td><td className="border border-black py-1">৪ (চার) হাজার</td><td className="border border-black py-1">৬ (ছয়) হাজার</td></tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {selectedId === parseInt(1) && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-black border-collapse text-center">
                                <colgroup>
                                    <col className="w-[9%]" />
                                    <col className="w-[58%]" />
                                    <col className="w-[33%]" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th className="border border-black px-2 py-1">ক্রমিক নং</th>
                                        <th className="border border-black px-2 py-1">গাড়ির ধরন</th>
                                        <th className="border border-black px-2 py-1">অগ্রিম কর (টাকা)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="border border-black py-1">১।</td><td className="border border-black text-left">৫২ আসনের অধিক আসন বিশিষ্ট বাস</td><td className="border border-black py-1">১৬ (ষোল) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">২।</td><td className="border border-black text-left">৫২ আসনের অধিক আসন নহে এইরূপ বাস</td><td className="border border-black py-1">১১ (এগার) হাজার ৫০০ (পাঁচশত)</td></tr>
                                    <tr><td className="border border-black py-1">৩।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত বাস</td><td className="border border-black py-1">৩৭ (সাঁইত্রিশ) হাজার ৫০০ (পাঁচশত)</td></tr>
                                    <tr><td className="border border-black py-1">৪।</td><td className="border border-black text-left">ডাবল ডেকার বাস</td><td className="border border-black py-1">১৬ (ষোল) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৫।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত মিনিবাস/কোস্টার</td><td className="border border-black py-1">১৬ (ষোল) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৬।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ মিনিবাস/কোস্টার</td><td className="border border-black py-1">৬ (ছয়) হাজার ৫০০ (পাঁচশত)</td></tr>
                                    <tr><td className="border border-black py-1">৭।</td><td className="border border-black text-left">প্রাইম মুভার</td><td className="border border-black py-1">২৪ (চব্বিশ) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৮।</td><td className="border border-black text-left">৫ (পাঁচ) টনের অধিন পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td><td className="border border-black py-1">১৬ (ষোল) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">৯।</td><td className="border border-black text-left">১.৫ (দেড়) টনের অধিক, তবে ৫ (পাঁচ) টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td><td className="border border-black py-1">৯ (নয়) হাজার ৫০০ (পাঁচশত)</td></tr>
                                    <tr><td className="border border-black py-1">১০।</td><td className="border border-black text-left">১.৫ (দেড়) টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td><td className="border border-black py-1">৪ (চার) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">১১।</td><td className="border border-black text-left">পিকআপ ভ্যান, হিউম্যান হলার, ম্যাক্সি বা অটো রিক্সা</td><td className="border border-black py-1">৪ (চার) হাজার</td></tr>
                                    <tr><td className="border border-black py-1">১২।</td><td className="border border-black text-left">শীতাতপ নিয়ন্ত্রিত ট্যাক্সিক্যাব</td><td className="border border-black py-1">১১ (এগার) হাজার ৫০০ (পাঁচশত)</td></tr>
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
