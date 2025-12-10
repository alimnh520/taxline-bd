// /components/personal-link/reduced-income-tax/page.js
'use client'
import React, { useState } from "react";
import { PersonalFeature } from "../../personal-link/PersonalFeature";
import TaxAccordions from "../../personal-link/PersonalTax";
import GovernmentLinks from "../../GovtLink";
import { useRouter } from "next/navigation";

export default function Page() {

    const [search, setSearch] = useState('');

    const router = useRouter();

    const sections = [
        { id: "1", number: "৮৬", title: "চাকরির আয় হইতে উৎসে কর কর্তন" },
        { id: "2", number: "৮৭", title: "সংসদ সদস্যদের সম্মানী হইতে কর কর্তন" },
        { id: "3", number: "৮৮", title: "অংশগ্রহণ তহবিল, কল্যাণ তহবিল ও  শ্রমিক কল্যাণ ফাউন্ডেশন  তহবিলে প্রদত্ত অর্থ হইতে উৎসে কর্তন" },
        { id: "4", number: "৮৯", title: "ঠিকাদার, সরবরাহকারী ইত্যাদিকে প্রদত্ত অর্থ হইতে কর কর্তন" },
        { id: "5", number: "৯০", title: "সেবার ক্ষেত্রে পরিশোধ হইতে কর্তন" },
        { id: "6", number: "৯১", title: "স্পর্শাতীত সম্পত্তির জন্য পরিশোধিত অর্থ হইতে কর্তন" },
        { id: "7", number: "৯২", title: "প্রচার মাধ্যমের বিজ্ঞাপন আয় হইতে কর কর্তন" },
        { id: "8", number: "৯৩", title: "অভিনেতা, অভিনেত্রী, প্রযোজক, ইত্যাদি ব্যক্তিকে পরিশোধিত অর্থ হইতে কর্তন" },
        { id: "9", number: "৯৪", title: "কমিশন, ডিসকাউন্ট, ফি, ইত্যাদি হইতে কর্তন বা উৎসে কর সংগ্রহ" },
        { id: "10", number: "৯৫", title: "ট্রাভেল এজেন্টের নিকট হইতে কর সংগ্রহ" },
        { id: "11", number: "৯৬", title: "ঋণপত্রের কমিশন হিসাবে প্রাপ্ত অর্থ হইতে কর্তন" },
        { id: "12", number: "৯৭", title: "স্থানীয় ঋণপত্রের বিপরীতে পরিশোধিত অর্থ হইতে কর্তন" },
        { id: "13", number: "৯৮", title: "সেলুলার মোবাইল ফোন অপারেটর, টাওয়ার শেয়ারিং কোম্পানি ইত্যাদি কর্তৃক পরিশোধিত অর্থের উপর কর কর্তন" },
        { id: "14", number: "৯৯", title: "জীবন বিমা পলিসির প্রিমিয়ামের অতিরিক্ত কোনো পরিশোধ হইতে কর কর্তন" },
        { id: "15", number: "১০০", title: "বিমার কমিশনের অর্থ হইতে কর্তন" },
        { id: "16", number: "১০১", title: "সাধারণ বিমা কোম্পানি জরিপকারীদের ফি, ইত্যাদি হইতে কর কর্তন" },
        { id: "17", number: "১০২", title: "সঞ্চয়ী আমানত ও স্থায়ী আমানত, ইত্যাদি হইতে কর কর্তন" },
        { id: "18", number: "১০৩", title: "পোস্ট অফিস সঞ্চয় ব্যাংকে রক্ষিত অর্থের সুদ হইতে প্রাপ্ত আয়ের উপর উৎসে কর কর্তন" },
        { id: "19", number: "১০৪", title: "নিবাসীর সুদ আয় হইতে কর কর্তন" },
        { id: "20", number: "১০৫", title: "সঞ্চয় পত্রের মুনাফা হইতে কর কর্তন" },
        { id: "21", number: "১০৬", title: "সিকিউরিটিজের সুদ হইতে উৎসে কর কর্তন" },
        { id: "22", number: "১০৭", title: "বাংলাদেশ ব্যাংক বিলের প্রকৃত মূল্যের ছাড়ের উপর উৎসে কর কর্তন" },
        { id: "23", number: "১০৮", title: "আন্তর্জাতিক ফোন কলের জন্য প্রাপ্ত অর্থ হইতে কর কর্তন" },
        { id: "24", number: "১০৯", title: "ভাড়া হইতে উৎসে কর কর্তন" },
        { id: "25", number: "১১০", title: "কনভেনশন হল, কনফারেন্স সেন্টার, ইত্যাদি হইতে সেবা প্রদানের জন্য কর কর্তন" },
        { id: "26", number: "১১১", title: "সম্পত্তি অধিগ্রহণের ক্ষতিপূরণ হইতে উৎসে কর কর্তন" },
        { id: "27", number: "১১২", title: "নগদ রপ্তানি ভর্তুকির উপর উৎসে কর কর্তন" },
        { id: "28", number: "১১৩", title: "পরিবহন মাশুল ফরওয়ার্ড এজেন্সি কমিশন হইতে কর কর্তন" },
        { id: "29", number: "১১৪", title: "বিদ্যুৎ ক্রয়ের বিপরীতে কর কর্তন" },
        { id: "30", number: "১১৫", title: "রিয়েল এস্টেট উন্নয়নকারীর (ডেভেলপার) নিকট হইতে ভূমির মালিক কর্তৃক প্রাপ্ত আয় হইতে কর কর্তন" },
        { id: "31", number: "১১৬", title: "বিদেশি ক্রেতার এজেন্টকে প্রদত্ত কমিশন বা পারিশ্রমিক হইতে কর কর্তন" },
        { id: "32", number: "১১৭", title: "লভ্যাংশ হইতে কর কর্তন" },
        { id: "33", number: "১১৮", title: "লটারি, ইত্যাদি হইতে প্রাপ্ত আয় হইতে কর কর্তন" },
    ];

    const handleRowClick = (id) => {
        router.push(`/components/company-link/final-tax/${id}`);
    };

    return (
        <div className="flex flex-col justify-start items-center gap-y-8 mx-auto border-t border-t-gray-200">

            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-center gap-x-5 w-10/12">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/3 p-4">
                    <h1 className="text-center text-xl font-semibold mb-3">কর কর্তনের খাতসমূহ</h1>
                    <input
                        type="text"
                        className="form-control my-3 px-3 py-2 border border-green-600 outline-none rounded w-full"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-black table-auto text-sm">
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="border border-black w-[10%] py-2">ধারা</th>
                                    <th className="border border-black w-[70%] py-2 text-center">শিরোনাম</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sections
                                    .filter(section => section.number.includes(search) || section.title.includes(search))
                                    .map((section) => (
                                        <tr
                                            key={section.id}
                                            className="hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleRowClick(section.id)}
                                        >
                                            <td className="border border-black text-center py-2">{section.number}</td>
                                            <td className="border border-black py-2">{section.title}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <GovernmentLinks />
        </div>
    )
}
