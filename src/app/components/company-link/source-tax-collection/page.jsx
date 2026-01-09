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
        { id: 120, number: "১২০", title: "আমদানিকারকদের নিকট হইতে কর সংগ্রহ" },
        { id: 121, number: "১২১", title: "জনশক্তি রপ্তানি হইতে কর সংগ্রহ" },
        { id: 122, number: "১২২", title: "ক্লিয়ারিং ও ফরওয়ার্ডিং এজেন্টদের নিকট হইতে কর সংগ্রহ" },
        { id: 123, number: "১২৩", title: "রপ্তানি আয় হইতে কর সংগ্রহ" },
        { id: 124, number: "১২৪", title: "কোনো সেবা, রেভিনিউ শেয়ারিং, ইত্যাদি বাবদ বিদেশ হইতে প্রেরিত আয় হইতে কর কর্তন" },
        { id: 125, number: "১২৫", title: "সম্পত্তি হস্তান্তর, ইত্যাদি হইতে কর সংগ্রহ" },
        { id: 126, number: "১২৬", title: "ডেভেলপার বা রিয়েল এস্টেট ডেভেলপারের নিকট হইতে কর সংগ্রহ" },
        { id: 127, number: "১২৭", title: "সরকারি স্ট্যাম্প, কোর্ট ফি, কার্টিজ পেপার বাবদ পরিশোধিত কমিশন হইতে কর সংগ্রহ" },
        { id: 128, number: "১২৮", title: "সম্পত্তির ইজারা হইতে কর সংগ্রহ" },
        { id: 129, number: "১২৯", title: "সিগারেট উৎপাদনকারী হইতে কর সংগ্রহ" },
        { id: 130, number: "১৩০", title: "ইট প্রস্তুতকারকের নিকট হইতে কর সংগ্রহ" },
        { id: 131, number: "১৩১", title: "ট্রেড লাইসেন্স প্রদান বা নবায়নের সময় কর সংগ্রহ" },
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
        // এখানে তুমি নিজের লজিক অনুযায়ী রাউট করতে পারো
        router.push(`/components/company-link/source-tax-collection/${id}`);
    };

    return (
        <div className="flex flex-col justify-start items-center gap-y-8 mx-auto border-t border-t-gray-200">

            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-center gap-x-5 w-10/12">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/3 p-4">
                    <h1 className="text-center text-3xl font-semibold mb-3">উৎসে কর সংগ্রহের খাতসমূহ</h1>
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
                                    <th className="border border-black w-[70%] py-2 px-1 text-center">শিরোনাম</th>
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
