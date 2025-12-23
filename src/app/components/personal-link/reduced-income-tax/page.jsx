'use client'
import React from "react";
import TaxAccordions from "../PersonalTax";
import { PersonalFeature } from "../PersonalFeature";
import GovernmentLinks from "../../GovtLink";
import { useRouter } from "next/navigation";
import { Animations } from "../../Animations";

const reducedIncomeHeads = [
    { id: 1, title: "হাঁস-মুরগীর খামার, হাঁস-মুরগী, চিংড়ী ও মাছের হ্যাচারী (hatchery) এবং মৎস্য চাষ হতে আয়ের জন্য হ্রাসকৃত কর" },
    { id: 2, title: "অ্যাসেট ম্যানেজমেন্ট কোম্পানির মিউচুয়াল ফান্ড ব্যবস্থাপনা ফি বাবদ অর্জিত আয়ের উপর করহার হ্রাস" },
    { id: 3, title: "পণ্য রপ্তানির বিভিন্ন খাতে প্রদেয় করের হ্রাস" },
    { id: 4, title: "পাটজাত দ্রব্য উৎপাদিত শিল্প প্রতিষ্ঠানের রপ্তানির বিপরীতে অর্জিত আয়ের বিপরীতে করহার হ্রাস" },
    { id: 5, title: "সুতা উৎপাদন, সুতা ডায়িং, ফিনিশিং, কোনিং, কাপড় তৈরী, কাপড় ডায়িং, প্রিন্টিং অথবা উক্তরূপ ব্যবসায়ে নিয়োজিত কোম্পানীর প্রদেয় করের হার হ্রাস" },
    { id: 6, title: "পিলেটেড পোল্ট্রি ফিড উৎপাদন, গবাদি পশু, চিংড়ি ও মাছের পিলেটেড ফুড উৎপাদন, বীজ উৎপাদন, স্থানীয়ভাবে উৎপাদিত বীজ বিপণন, গবাদি পশুর খামার, দুগ্ধ ও দুগ্ধজাত দ্রব্যের খামার, ব্যাঙ উৎপাদন খামার, উদ্যান খামার প্রকল্প, তুঁত গাছের চাষ, মৌমাছির চাষ প্রকল্প, রেশম গুটিপোকা পালনের খামার, ছত্রাক উৎপাদন খামার এবং ফুল ও লাতাপাতার চাষ হতে আয়" },
    { id: 7, title: "কোম্পানি, ব্যক্তিসংঘ ও ট্রাস্ট ব্যতিত অন্যান্য করদাতাদের শেয়ার ব্যবসা হতে মূলধনী আয়ের বিপরীতে কর" },
    { id: 8, title: "কোম্পানি, ব্যক্তিসংঘ ও ট্রাস্ট ব্যতিত অন্যান্য করদাতাদের মূলধনি আয়ের বিপরীতে কর" },
    { id: 9, title: "কোম্পানি, ব্যক্তিসংঘ ও ট্রাস্ট জাতীয় করদাতাদের মূলধনি আয়ের বিপরীতে কর" },
    { id: 10, title: "খুচরা যন্ত্রাংশসহ পূর্ণাঙ্গ ফ্রিজার, রেফ্রিজারেটর, মোটরসাইকেল, এয়ারকন্ডিশন ও কম্প্রেসর তৈরী শিল্পের আয়ের বিপরীতে কর" },
];


const ReducedIncomePage = () => {

    function englishToBanglaNumber(number) {
        const eng = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const bang = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

        return number.toString().split('').map(char => {
            const index = eng.indexOf(char);
            return index !== -1 ? bang[index] : char;
        }).join('');
    }

    const router = useRouter();

    const handleRowClick = (id) => {
        router.push(`/components/personal-link/reduced-income-tax/${id}`);
    };

    return (
        <div className="flex flex-col justify-start items-center gap-y-8 w-full mx-auto border-t border-t-gray-200">
            <Animations />
            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-between gap-x-10 w-10/12 -mt-15">

                {/* Accordion Section */}
                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                {/* Table Section */}
                <div className="w-full md:w-2/3 p-4">
                    <h1 className="text-center text-4xl font-bold mb-6">হ্রাসকৃত আয় ও কর</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 table-auto">
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="w-1/12 px-4 py-2 border">ক্রমিক</th>
                                    <th className="w-11/12 px-4 py-2 border text-center">শিরোনাম</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reducedIncomeHeads.map((item, idx) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleRowClick(item.id)}
                                    >
                                        <td className="text-center border px-4 py-2">{englishToBanglaNumber(idx + 1)}</td>
                                        <td className="border px-4 py-2">{item.title}</td>
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

export default ReducedIncomePage;
