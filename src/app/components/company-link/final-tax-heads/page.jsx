'use client'

import React, { useState } from "react";
import { PersonalFeature } from "../../personal-link/PersonalFeature";
import TaxAccordions from "../../personal-link/PersonalTax";
import GovernmentLinks from "../../GovtLink";
import { useRouter } from "next/navigation";

export default function FinalTaxHeads() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const sections = [
        { id: 1, number: "১", title: "সম্পত্তি অধিগ্রহণ এর ক্ষতিপূরণ হতে অর্জিত আয়" },
        { id: 2, number: "২", title: "রিটার্ন দাখিলে অব্যাহতি প্রাপ্ত ব্যক্তিগণ" },
        { id: 3, number: "৩", title: "সঞ্চয়পত্র হতে অর্জিত মুনাফা" },
        { id: 4, number: "৪", title: "রপ্তানির বিপরীতে প্রাপ্ত নগদ ভর্তুকি" },
        { id: 5, number: "৫", title: "সম্পত্তি হস্তান্তর হতে/জমি বিক্রয় হতে অর্জিত মূলধনি আয়" },
        { id: 6, number: "৬", title: "বাণিজ্যিকভাবে পরিচালিত মোটরযান হতে কর সংগ্রহ" },
    ];

    const handleRowClick = (id) => {
        router.push(`/components/company-link/final-tax-heads/${id}`);
    };

    return (
        <div className="flex flex-col justify-start items-center gap-y-8 mx-auto border-t border-t-gray-200">

            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-center gap-x-5 w-10/12">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/3 p-4">
                    <h1 className="text-center text-3xl font-semibold mb-3">চূড়ান্ত করের খাতসমূহ</h1>

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
                                    <th className="border border-black w-[10%] py-2 px-1">ক্রমিক</th>
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
