'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Animations } from '../../Animations';
import { PersonalFeature } from '../../personal-link/PersonalFeature';

const taxGuidelines = [
    { id: 1, year: '২০২৫-২০২৬', link: '/components/tax-act/tax-guideline/1' },
    { id: 2, year: '২০২৪-২০২৫', link: '/components/tax-act/tax-guideline/2' },
    { id: 3, year: '২০২৩-২০২৪', link: '/components/tax-act/tax-guideline/3' },
    { id: 4, year: '২০২২-২০২৩', link: '/components/tax-act/tax-guideline/4' },
    { id: 5, year: '২০২১-২০২২', link: '/components/tax-act/tax-guideline/5' },
    { id: 6, year: '২০২০-২০২১', link: '/components/tax-act/tax-guideline/6' },
    { id: 7, year: '২০১৯-২০২০', link: '/components/tax-act/tax-guideline/7' },
    { id: 8, year: '২০১৮-২০১৯', link: '/components/tax-act/tax-guideline/8' },
    { id: 9, year: '২০১৭-২০১৮', link: '/components/tax-act/tax-guideline/9' },
    { id: 10, year: '২০১৬-২০১৭', link: '/components/tax-act/tax-guideline/10' },
];


export default function IncomeTaxTable() {
    const router = useRouter();

    return (
        <div className="mx-auto flex flex-col items-center gap-y-5 bg-gray-100">

            <Animations />
            <PersonalFeature/>

            <h1 className="text-2xl w-full border-b border-b-gray-200 pb-2 md:text-3xl font-bold text-center mb-6 text-gray-800">
                আয়কর নির্দেশিকা
            </h1>

            <div className="overflow-x-auto w-8/12 pb-5">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-2 w-1/12 text-center">ক্রমিক</th>
                            <th className="px-4 py-2 text-center">করবর্ষ</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {taxGuidelines.map((item) => (
                            <tr
                                key={item.id}
                                onClick={() => router.push(item.link)}
                                className="hover:bg-gray-100 cursor-pointer transition-colors"
                            >
                                <td className="px-4 py-2 text-center border-r border-gray-200">{item.id}</td>
                                <td className="px-4 py-2 text-start text-sm font-medium">
                                    করবর্ষ {item.year}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
