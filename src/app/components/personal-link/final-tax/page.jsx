'use client'
import React from "react";
import TaxAccordions from "../PersonalTax";
import { PersonalFeature } from "../PersonalFeature";
import { useRouter } from "next/navigation";
import GovernmentLinks from "../../GovtLink";

const finalTaxHeads = [
    { id: 1, title: "সম্পত্তি অধিগ্রহণ এর ক্ষতিপূরণ হতে অর্জিত আয়" },
    { id: 2, title: "রিটার্ন দাখিলে অব্যাহতি প্রাপ্ত ব্যক্তিগণ" },
    { id: 3, title: "সঞ্চয়পত্র হতে অর্জিত মুনাফা" },
    { id: 4, title: "রপ্তানির বিপরীতে প্রাপ্ত নগদ ভর্তুকি" },
    { id: 5, title: "সম্পত্তি হস্তান্তর হতে/জমি বিক্রয় হতে অর্জিত মূলধনি আয়" },
    { id: 6, title: "বাণিজ্যিকভাবে পরিচালিত মোটরযান হতে কর সংগ্রহ" },
];

const FinalTaxTable = () => {
    const router = useRouter();

    const handleRowClick = (id) => {
        router.push(`/components/personal-link/final-tax/${id}`);
    };

    return (
        <div className="flex flex-col justify-start gap-y-8 items-center mx-auto border-t border-t-gray-200">

            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-between gap-x-10 w-10/12">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/3 p-4">
                    <h1 className="text-center text-2xl font-bold mb-4">চূড়ান্ত করের খাতসমূহ</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 table-auto">
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="w-1/12 px-4 py-2 border">ক্রমিক</th>
                                    <th className="w-11/12 px-4 py-2 border text-center">শিরোনাম</th>
                                </tr>
                            </thead>
                            <tbody>
                                {finalTaxHeads.map((head, idx) => (
                                    <tr
                                        key={head.id}
                                        className="hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleRowClick(head.id)}
                                    >
                                        <td className="text-center border px-4 py-2">{idx + 1}</td>
                                        <td className="border px-4 py-2">{head.title}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <GovernmentLinks />
        </div>
    );
};

export default FinalTaxTable;
