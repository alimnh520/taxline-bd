'use client'

import React, { useState } from "react";
import { PersonalFeature } from "../../personal-link/PersonalFeature";
import TaxAccordions from "../../personal-link/PersonalTax";
import GovernmentLinks from "../../GovtLink";
import { useRouter } from "next/navigation";

export default function MinimumTaxHeads() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const sections = [
        { id: 88, number: "৮৮", title: "অংশগ্রহণ তহবিল, কল্যাণ তহবিল ও  শ্রমিক কল্যাণ ফাউন্ডেশন  তহবিলে প্রদত্ত অর্থ হইতে উৎসে কর্তন" },
        { id: 89, number: "৮৯", title: "ঠিকাদার, সরবরাহকারী ইত্যাদিকে প্রদত্ত অর্থ হইতে কর কর্তন" },
        { id: 90, number: "৯০", title: "সেবার ক্ষেত্রে পরিশোধ হইতে কর্তন" },
        { id: 91, number: "৯১", title: "স্পর্শাতীত সম্পত্তির জন্য পরিশোধিত অর্থ হইতে কর্তন" },
        { id: 92, number: "৯২", title: "প্রচার মাধ্যমের বিজ্ঞাপন আয় হইতে কর কর্তন" },
        { id: 94, number: "৯৪", title: "কমিশন, ডিসকাউন্ট, ফি, ইত্যাদি হইতে কর্তন বা উৎসে কর সংগ্রহ" },
        { id: 95, number: "৯৫", title: "ট্রাভেল এজেন্টের নিকট হইতে কর সংগ্রহ" },
        { id: 100, number: "১০০", title: "বিমার কমিশনের অর্থ হইতে কর্তন" },
        { id: 101, number: "১০১", title: "সাধারণ বিমা কোম্পানি জরিপকারীদের ফি, ইত্যাদি হইতে কর কর্তন" },
        { id: 102, number: "১০২", title: "সঞ্চয়ী আমানত ও স্থায়ী আমানত, ইত্যাদি হইতে কর কর্তন" },
        { id: 105, number: "১০৫", title: "সঞ্চয় পত্রের মুনাফা হইতে কর কর্তন" },
        { id: 106, number: "১০৬", title: "সিকিউরিটিজের সুদ হইতে উৎসে কর কর্তন" },
        { id: 108, number: "১০৮", title: "আন্তর্জাতিক ফোন কলের জন্য প্রাপ্ত অর্থ হইতে কর কর্তন" },
        { id: 110, number: "১১০", title: "কনভেনশন হল, কনফারেন্স সেন্টার, ইত্যাদি হইতে সেবা প্রদানের জন্য কর কর্তন" },
        { id: 111, number: "১১১", title: "সম্পত্তি অধিগ্রহণের ক্ষতিপূরণ হইতে উৎসে কর কর্তন" },
        { id: 112, number: "১১২", title: "নগদ রপ্তানি ভর্তুকির উপর উৎসে কর কর্তন" },
        { id: 113, number: "১১৩", title: "পরিবহন মাশুল ফরওয়ার্ড এজেন্সি কমিশন হইতে কর কর্তন" },
        { id: 114, number: "১১৪", title: "বিদ্যুৎ ক্রয়ের বিপরীতে কর কর্তন" },
        { id: 115, number: "১১৫", title: "রিয়েল এস্টেট উন্নয়নকারীর (ডেভেলপার) নিকট হইতে ভূমির মালিক কর্তৃক প্রাপ্ত আয় হইতে কর কর্তন" },
        { id: 116, number: "১১৬", title: "বিদেশি ক্রেতার এজেন্টকে প্রদত্ত কমিশন বা পারিশ্রমিক হইতে কর কর্তন" },
        { id: 117, number: "১১৭", title: "লভ্যাংশ হইতে কর কর্তন" },
        { id: 118, number: "১১৮", title: "লটারি, ইত্যাদি হইতে প্রাপ্ত আয় হইতে কর কর্তন" },
        { id: 120, number: "১২০", title: "আমদানিকারকদের নিকট হইতে কর সংগ্রহ" },
        { id: 121, number: "১২১", title: "জনশক্তি রপ্তানি হইতে কর সংগ্রহ" },
        { id: 122, number: "১২২", title: "ক্লিয়ারিং ও ফরওয়ার্ডিং এজেন্টদের নিকট হইতে কর সংগ্রহ" },
        { id: 123, number: "১২৩", title: "রপ্তানি আয় হইতে কর সংগ্রহ" },
        { id: 124, number: "১২৪", title: "কোনো সেবা, রেভিনিউ শেয়ারিং, ইত্যাদি বাবদ বিদেশ হইতে প্রেরিত আয় হইতে কর কর্তন" },
        { id: 125, number: "১২৫", title: "সম্পত্তি হস্তান্তর, ইত্যাদি হইতে কর সংগ্রহ" },
        { id: 126, number: "১২৬", title: "ডেভেলপার বা  রিয়েল এস্টেট ডেভেলপারের নিকট হইতে কর সংগ্রহ" },
        { id: 127, number: "১২৭", title: "সরকারি স্ট্যাম্প, কোর্ট ফি, কার্টিজ পেপার বাবদ পরিশোধিত কমিশন হইতে কর সংগ্রহ" },
        { id: 128, number: "১২৮", title: "সম্পত্তির ইজারা হইতে কর সংগ্রহ" },
        { id: 129, number: "১২৯", title: "সিগারেট উৎপাদনকারী হইতে কর সংগ্রহ" },
        { id: 132, number: "১৩২", title: "কোনো নিবাসীর জাহাজ ব্যবসা হইতে কর সংগ্রহ" },
        { id: 133, number: "১৩৩", title: "প্রকাশ্য নিলামের বিক্রি হইতে কর সংগ্রহ" },
        { id: 134, number: "১৩৪", title: "শেয়ার হস্তান্তর হইতে কর সংগ্রহ" },
        { id: 135, number: "১৩৫", title: "সিকিউরিটিজ হস্তান্তর হইতে কর সংগ্রহ" },
        { id: 136, number: "১৩৬", title: "স্টক এক্সচেঞ্জের শেয়ারহোল্ডারদের শেয়ার স্থানান্তর হইতে কর সংগ্রহ" },
        { id: 137, number: "১৩৭", title: "স্টক এক্সচেঞ্জের সদস্যদের নিকট হইতে কর সংগ্রহ" },
        { id: 138, number: "১৩৮", title: "বাণিজ্যিকভাবে পরিচালিত মোটরযান হইতে কর সংগ্রহ" },
        { id: 139, number: "১৩৯", title: "নৌযান পরিচালনা হইতে কর সংগ্রহ" },
    ];

    const handleRowClick = (id) => {
        router.push(`/components/company-link/minimum-tax-heads/${id}`);
    };

    return (
        <div className="flex flex-col justify-start items-center gap-y-8 mx-auto border-t border-t-gray-200">

            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-center gap-x-5 w-10/12">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/3 p-4">
                    <h1 className="text-center text-3xl font-semibold mb-1">নূন্যতম করের খাতসমূহ</h1>
                    <p className="text-center mb-3">
                        ধারা : <a href="/tax-act-section/208" className="text-blue-600 underline" target="_blank">১৬৩</a>
                    </p>

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
                                    <th className="border border-black w-[10%] py-2 px-1">ধারা</th>
                                    <th className="border border-black w-[90%] py-2 px-1 text-center">শিরোনাম</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sections
                                    .filter(section =>
                                        section.number.includes(search) || section.title.includes(search)
                                    )
                                    .map((section) => (
                                        <tr
                                            key={section.id}
                                            className="hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleRowClick(section.id)}
                                        >
                                            <td className="border border-black text-center py-2 px-1">{section.number}</td>
                                            <td className="border border-black py-2 px-1">{section.title}</td>
                                        </tr>
                                    ))}

                                {sections.filter(section =>
                                    section.number.includes(search) || section.title.includes(search)
                                ).length === 0 && (
                                        <tr>
                                            <td className="border px-2 py-2 text-center" colSpan={2}>
                                                কোনো রেকর্ড পাওয়া যায়নি
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <GovernmentLinks />
        </div>
    );
}
