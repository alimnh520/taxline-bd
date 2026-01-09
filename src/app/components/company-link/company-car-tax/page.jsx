'use client'

import { useEffect, useState } from "react";
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
                    <h1 className="text-center text-3xl font-semibold mb-3">বাণিজ্যিক গাড়ি কর</h1>
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
                                        <option value="2">২০২৪ - ২০২৫</option>
                                        <option value="3">২০২৩ - ২০২৪ </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 mt-6 text-sm">
                            <div className="w-full">

                                <div className={`text-justify ${selectedYear === '1' ? 'block' : 'hidden'} space-y-4`}>
                                    <table className="w-full border border-black border-collapse text-sm">
                                        <thead>
                                            <tr>
                                                <th className="border border-black p-2 text-center">ক্রমিক নং</th>
                                                <th className="border border-black p-2 text-center">গাড়ির ধরন</th>
                                                <th className="border border-black p-2 text-center">অগ্রিম কর (টাকা)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-black p-2">১।</td>
                                                <td className="border border-black p-2">৫২ আসনের অধিক আসন বিশিষ্ট বাস</td>
                                                <td className="border border-black p-2">২৫ (পঁচিশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">২।</td>
                                                <td className="border border-black p-2">৫২ আসনের অধিক আসন নহে এইরূপ বাস</td>
                                                <td className="border border-black p-2">২০ (বিশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">৩।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত বাস</td>
                                                <td className="border border-black p-2">৫০ (পঞ্চাশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">৪।</td>
                                                <td className="border border-black p-2">ডাবল ডেকার বাস</td>
                                                <td className="border border-black p-2">২৫ (পঁচিশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">৫।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত মিনিবাস/কোস্টার</td>
                                                <td className="border border-black p-2">২৫ (পঁচিশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">৬।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ মিনিবাস/কোস্টার</td>
                                                <td className="border border-black p-2">১২ (বার) হাজার ৫০০ (পাঁচশত)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">৭।</td>
                                                <td className="border border-black p-2">প্রাইম মুভার</td>
                                                <td className="border border-black p-2">৩৫ (পঁয়ত্রিশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">৮।</td>
                                                <td className="border border-black p-2">৫ (পাঁচ) টনের অধিন পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                                <td className="border border-black p-2">৩০ (ত্রিশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">৯।</td>
                                                <td className="border border-black p-2">১.৫ (দেড়) টনের অধিক, তবে ৫ (পাঁচ) টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                                <td className="border border-black p-2">১৫ (পনের) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">১০।</td>
                                                <td className="border border-black p-2">১.৫ (দেড়) টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                                <td className="border border-black p-2">৭ (সাত) হাজার ৫০০ (পাঁচশত)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">১১।</td>
                                                <td className="border border-black p-2">পিকআপ ভ্যান, হিউম্যান হলার, ম্যাক্সি বা অটো রিক্সা</td>
                                                <td className="border border-black p-2">৭ (সাত) হাজার ৫০০ (পাঁচশত)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">১২।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত ট্যাক্সিক্যাব</td>
                                                <td className="border border-black p-2">১৫ (পনের) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">১৩।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ ট্যাক্সিক্যাব</td>
                                                <td className="border border-black p-2">৭ (সাত) হাজার ৫০০ (পাঁচশত)</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                                <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>
                                    <table className="w-full border border-black border-collapse text-sm">
                                        <thead>
                                            <tr>
                                                <th className="border border-black p-2 text-center">ক্রমিক নং</th>
                                                <th className="border border-black p-2 text-center">গাড়ির ধরন</th>
                                                <th className="border border-black p-2 text-center">অগ্রিম কর (টাকা)</th>
                                                <th className="border border-black p-2 text-center">রিটার্ন দাখিলের প্রমাণ প্রদর্শনের ব্যর্থতায়</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-black p-2 text-center">১।</td>
                                                <td className="border border-black p-2">৫২ আসনের অধিক আসন বিশিষ্ট বাস</td>
                                                <td className="border border-black p-2">১৬ (ষোল) হাজার</td>
                                                <td className="border border-black p-2">২৪ (চব্বিশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">২।</td>
                                                <td className="border border-black p-2">৫২ আসনের অধিক আসন নহে এইরূপ বাস</td>
                                                <td className="border border-black p-2">১১(এগার) হাজার ৫০০ (পাঁচশত)</td>
                                                <td className="border border-black p-2">১৭(সতের) হাজার ২০০ (পাঁচশত) ৫০ (পঞ্চাশ)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৩।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত বাস</td>
                                                <td className="border border-black p-2">৩৭ (সাঁইত্রিশ) হাজার ৫০০ (পাঁচশত)</td>
                                                <td className="border border-black p-2">৫৬(ছাপ্পান্ন) হাজার ২০০ (পাঁচশত) ৫০ (পঞ্চাশ)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৪।</td>
                                                <td className="border border-black p-2">ডাবল ডেকার বাস</td>
                                                <td className="border border-black p-2">১৬ (ষোল) হাজার</td>
                                                <td className="border border-black p-2">২৪ (চব্বিশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৫।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত মিনিবাস/কোস্টার</td>
                                                <td className="border border-black p-2">১৬ (ষোল) হাজার</td>
                                                <td className="border border-black p-2">২৪ (চব্বিশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৬।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ মিনিবাস/কোস্টার</td>
                                                <td className="border border-black p-2">৬ (ছয়) হাজার ৫০০ (পাঁচশত)</td>
                                                <td className="border border-black p-2">৯(নয়) হাজার ৭০০ (সাতশত) ৫০ (পঞ্চাশ)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৭।</td>
                                                <td className="border border-black p-2">প্রাইম মুভার</td>
                                                <td className="border border-black p-2">২৪ (চব্বিশ) হাজার</td>
                                                <td className="border border-black p-2">৩৬(ছত্রিশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৮।</td>
                                                <td className="border border-black p-2">৫ (পাঁচ) টনের অধিন পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                                <td className="border border-black p-2">১৬ (ষোল) হাজার</td>
                                                <td className="border border-black p-2">২৪ (চব্বিশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৯।</td>
                                                <td className="border border-black p-2">১.৫ (দেড়) টনের অধিক, তবে ৫ (পাঁচ) টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                                <td className="border border-black p-2">৯ (নয়) হাজার ৫০০ (পাঁচশত)</td>
                                                <td className="border border-black p-2">১৪(চৌদ্দ) হাজার ২০০ (পাঁচশত) ৫০ (পঞ্চাশ)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">১০।</td>
                                                <td className="border border-black p-2">১.৫ (দেড়) টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                                <td className="border border-black p-2">৪ (চার) হাজার</td>
                                                <td className="border border-black p-2">৬(ছয়) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">১১।</td>
                                                <td className="border border-black p-2">পিকআপ ভ্যান, হিউম্যান হলার, ম্যাক্সি বা অটো রিক্সা</td>
                                                <td className="border border-black p-2">৪ (চার) হাজার</td>
                                                <td className="border border-black p-2">৬(ছয়) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">১২।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত ট্যাক্সিক্যাব</td>
                                                <td className="border border-black p-2">১১(এগার) হাজার ৫০০ (পাঁচশত)</td>
                                                <td className="border border-black p-2">১৭(সতের) হাজার ২০০ (পাঁচশত) ৫০ (পঞ্চাশ)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">১৩।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ ট্যাক্সিক্যাব</td>
                                                <td className="border border-black p-2">৪ (চার) হাজার</td>
                                                <td className="border border-black p-2">৬(ছয়) হাজার</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div className={`text-justify ${selectedYear === '3' ? 'block' : 'hidden'} space-y-4`}>
                                    <table className="w-full border border-black border-collapse text-sm">
                                        <thead>
                                            <tr>
                                                <th className="border border-black p-2 text-center">ক্রমিক নং</th>
                                                <th className="border border-black p-2 text-center">গাড়ির ধরন</th>
                                                <th className="border border-black p-2 text-center">অগ্রিম কর (টাকা)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-black p-2 text-center">১।</td>
                                                <td className="border border-black p-2">৫২ আসনের অধিক আসন বিশিষ্ট বাস</td>
                                                <td className="border border-black p-2">১৬ (ষোল) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">২।</td>
                                                <td className="border border-black p-2">৫২ আসনের অধিক আসন নহে এইরূপ বাস</td>
                                                <td className="border border-black p-2">১১(এগার) হাজার ৫০০ (পাঁচশত)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৩।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত বাস</td>
                                                <td className="border border-black p-2">৩৭ (সাঁইত্রিশ) হাজার ৫০০ (পাঁচশত)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৪।</td>
                                                <td className="border border-black p-2">ডাবল ডেকার বাস</td>
                                                <td className="border border-black p-2">১৬ (ষোল) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৫।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত মিনিবাস/কোস্টার</td>
                                                <td className="border border-black p-2">১৬ (ষোল) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৬।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত নহে এইরূপ মিনিবাস/কোস্টার</td>
                                                <td className="border border-black p-2">৬ (ছয়) হাজার ৫০০ (পাঁচশত)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৭।</td>
                                                <td className="border border-black p-2">প্রাইম মুভার</td>
                                                <td className="border border-black p-2">২৪ (চব্বিশ) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৮।</td>
                                                <td className="border border-black p-2">৫ (পাঁচ) টনের অধিন পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                                <td className="border border-black p-2">১৬ (ষোল) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">৯।</td>
                                                <td className="border border-black p-2">১.৫ (দেড়) টনের অধিক, তবে ৫ (পাঁচ) টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                                <td className="border border-black p-2">৯ (নয়) হাজার ৫০০ (পাঁচশত)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">১০।</td>
                                                <td className="border border-black p-2">১.৫ (দেড়) টনের অধিক নহে এইরূপ পেলোড ক্যাপাসিটি বিশিষ্ট ট্রাক, লরি বা ট্যাংক লরি</td>
                                                <td className="border border-black p-2">৪ (চার) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">১১।</td>
                                                <td className="border border-black p-2">পিকআপ ভ্যান, হিউম্যান হলার, ম্যাক্সি বা অটো রিক্সা</td>
                                                <td className="border border-black p-2">৪ (চার) হাজার</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2 text-center">১২।</td>
                                                <td className="border border-black p-2">শীতাতপ নিয়ন্ত্রিত ট্যাক্সিক্যাব</td>
                                                <td className="border border-black p-2">১১(এগার) হাজার ৫০০ (পাঁচশত)</td>
                                            </tr>
                                        </tbody>
                                    </table>

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
                    <hr className="mt-6 text-gray-200" />
                </div>
            </div>
            <GovernmentLinks />
        </div>
    );
}