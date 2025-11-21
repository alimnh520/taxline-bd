'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Animations } from '../../Animations';
import { Feature } from '../../Feature';

const tdsRules = [
    { id: 1, title: 'উৎসে কর- ২০২৩', link: '/components/tax-act/tds-rules/1' },
    { id: 2, title: 'উৎসে কর ২০২৪', link: '/components/tax-act/tds-rules/2' },
    { id: 3, title: 'উৎসে কর বিধিমালা, ২০২৪ (সংশোধিত)', link: '/components/tax-act/tds-rules/3' },
    { id: 4, title: 'উৎসে কর বিধিমালা, ২০২৪ এর অধিকতর সংশোধন (১৫/০৯/২০২৫)', link: '/components/tax-act/tds-rules/4' },
    { id: 5, title: 'উৎসে কর বিধিমালা, ২০২৪ এর অধিকতর সংশোধন (১৫/০৯/২০২৫)', link: '/components/tax-act/tds-rules/5' },
    { id: 6, title: 'উৎসে কর বিধিমালা, ২০২৪ এর অধিকতর সংশোধন (২৪/০৬/২০২৫)', link: '/components/tax-act/tds-rules/6' },
];

export default function TdsRulesTable() {
    const router = useRouter();

    return (
        <div className="mx-auto flex flex-col items-center gap-y-5 bg-gray-100">

            <Animations />
            <Feature />

            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
                TDS Rules
            </h1>

            <div className="overflow-x-auto pb-5">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-2 w-1/12 text-center">ক্রমিক</th>
                            <th className="px-4 py-2 text-center">করবর্ষ</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tdsRules.slice().reverse().map((rule, index) => (
                            <tr
                                key={rule.id}
                                onClick={() => router.push(rule.link)}
                                className="hover:bg-gray-100 cursor-pointer transition-colors"
                            >
                                <td className="px-4 py-2 text-center border-r border-gray-200">{index + 1}</td>
                                <td className="px-4 py-2 text-black font-medium">{rule.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
