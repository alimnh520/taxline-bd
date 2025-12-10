// /components/personal-link/reduced-income-tax/page.js
import React from "react";
import { PersonalFeature } from "../PersonalFeature";
import TaxAccordions from "../PersonalTax";

export default function page() {
    return (
        <div className="flex flex-col justify-start items-center gap-y-8 w-full mx-auto border-t border-t-gray-200">

            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-center gap-x-10 w-10/12">

                {/* Accordion Section */}
                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/3 mx-auto p-4">
                    <h1 className="text-center text-2xl font-bold">ফর্ম</h1>

                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Search..."
                        className="form-input w-full my-3 px-3 py-2 border border-green-600 rounded-md outline-none"
                    />

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 table-auto">
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="border px-4 py-2 w-[5%]">ক্রমিক</th>
                                    <th className="border px-4 py-2 w-[55%] text-center">শিরোনাম</th>
                                    <th className="border px-4 py-2 w-[20%] text-center">ফাইলের ধরন</th>
                                    <th className="border px-4 py-2 w-[20%] text-center">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        serial: '১',
                                        title: 'মাসিক উৎসে কর রিটার্ন ফরম - বাংলা',
                                        type: 'উভয়',
                                        link: 'https://alimnh520.github.io/bd-api/1.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '২',
                                        title: 'আয়কর রিটার্ন (কোম্পানি ব্যতীত অন্যান্য করদাতার জন্য প্রযোজ্য)-বাংলা',
                                        type: 'ব্যক্তি',
                                        link: 'https://alimnh520.github.io/bd-api/2.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '৩',
                                        title: 'আয়কর রিটার্ন (কোম্পানি ব্যতীত অন্যান্য করদাতার জন্য প্রযোজ্য) - বাংলা',
                                        type: 'ব্যক্তি',
                                        link: 'https://alimnh520.github.io/bd-api/3.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '৪',
                                        title: 'আয়কর রিটার্ন - ১ পাতা (কোম্পানি ব্যতীত অন্যান্য করদাতার জন্য প্রযোজ্য)- ইংরেজী',
                                        type: 'ব্যক্তি',
                                        link: 'https://alimnh520.github.io/bd-api/4.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '৫',
                                        title: 'আয়কর রিটার্ন - ১ পাতা (কোম্পানি ব্যতীত অন্যান্য করদাতার জন্য প্রযোজ্য) - ইংরেজী',
                                        type: 'ব্যক্তি',
                                        link: 'https://alimnh520.github.io/bd-api/5.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '৬',
                                        title: 'আয়কর রিটার্ন প্রাপ্তি স্বীকার পত্র/প্রত্যয়নপত্র ইংরেজী',
                                        type: 'উভয়',
                                        link: 'https://alimnh520.github.io/bd-api/6.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '৭',
                                        title: 'আয়কর রিটার্ন প্রাপ্তি স্বীকার পত্র/প্রত্যয়নপত্র ইংরেজী',
                                        type: 'উভয়',
                                        link: 'https://alimnh520.github.io/bd-api/7.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '৮',
                                        title: 'আয়কর রিটার্ন প্রাপ্তি স্বীকার পত্র/প্রত্যয়নপত্র- বাংলা',
                                        type: 'উভয়',
                                        link: 'https://alimnh520.github.io/bd-api/8.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '৯',
                                        title: 'আয়কর রিটার্ন প্রাপ্তি স্বীকার পত্র/প্রত্যয়নপত্র- বাংলা',
                                        type: 'উভয়',
                                        link: 'https://alimnh520.github.io/bd-api/9.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '১০',
                                        title: 'আয়কর রিটার্ন (কোম্পানি ব্যতীত অন্যান্য করদাতার জন্য প্রযোজ্য)- ইংরেজী',
                                        type: 'ব্যক্তি',
                                        link: 'https://alimnh520.github.io/bd-api/10.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '১১',
                                        title: 'আয়কর রিটার্ন (কোম্পানি ব্যতীত অন্যান্য করদাতার জন্য প্রযোজ্য)- ইংরেজী',
                                        type: 'ব্যক্তি',
                                        link: 'https://alimnh520.github.io/bd-api/11.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '১২',
                                        title: 'আয়কর রিটার্ন - ১ পাতা (কোম্পানি ব্যতীত অন্যান্য করদাতার জন্য প্রযোজ্য)- বাংলা',
                                        type: 'ব্যক্তি',
                                        link: 'https://alimnh520.github.io/bd-api/12.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '১৩',
                                        title: 'আয়কর রিটার্ন - ১ পাতা (কোম্পানি ব্যতীত অন্যান্য করদাতার জন্য প্রযোজ্য)- বাংলা',
                                        type: 'ব্যক্তি',
                                        link: 'https://alimnh520.github.io/bd-api/13.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '১৪',
                                        title: 'মাসিক উৎসে কর রিটার্ন ফরম - বাংলা',
                                        type: 'উভয়',
                                        link: 'https://alimnh520.github.io/bd-api/14.pdf',
                                        icon: 'pdf'
                                    },
                                    {
                                        serial: '১৫',
                                        title: 'মাসিক উৎসে কর রিটার্ন ফরম - বাংলা (নবায়নকৃত ২০২৪)',
                                        type: 'উভয়',
                                        link: 'https://alimnh520.github.io/bd-api/15.pdf',
                                        icon: 'pdf'
                                    }
                                ].map((item) => (
                                    <tr key={item.serial}>
                                        <td className="border px-4 py-2 text-center">{item.serial}</td>
                                        <td className="border px-4 py-2">{item.title}</td>
                                        <td className="border px-4 py-2 text-center">{item.type}</td>
                                        <td className="border px-4 py-2 text-center">
                                            <a href={item.link} target="_blank">
                                                <img
                                                    src={`https://bdtaxation.com/website/img/icons/download-${item.icon}.svg`}
                                                    alt={`Download ${item.icon.toUpperCase()}`}
                                                    className="mx-auto"
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
}
