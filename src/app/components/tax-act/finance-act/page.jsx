'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Animations } from '../../Animations';
import { PersonalFeature } from '../../personal-link/PersonalFeature';

// 📄 ডেটা লিস্ট
const financeActs = [
    { id: 1, title: '২০২৫ (সংশোধিত) তাং-০৬/১০/২০২৫', link: '/components/tax-act/finance-act/1' },
    { id: 2, title: '২০২৫ (সংশোধিত)', link: '/components/tax-act/finance-act/2' },
    { id: 3, title: '২০২৫', link: '/components/tax-act/finance-act/3' },
    { id: 4, title: '২০২৪', link: '/components/tax-act/finance-act/4' },
    { id: 5, title: '২০২৩', link: '/components/tax-act/finance-act/5' },
    { id: 6, title: '২০২২', link: '/components/tax-act/finance-act/6' },
    { id: 7, title: '২০২১', link: '/components/tax-act/finance-act/7' },
    { id: 8, title: '২০২০', link: '/components/tax-act/finance-act/8' },
    { id: 9, title: '২০১৯', link: '/components/tax-act/finance-act/9' },
    { id: 10, title: '২০১৮', link: '/components/tax-act/finance-act/10' },
    { id: 11, title: '২০১৭', link: '/components/tax-act/finance-act/11' },
    { id: 12, title: '২০১৬', link: '/components/tax-act/finance-act/12' },
    { id: 13, title: '২০১৫', link: '/components/tax-act/finance-act/13' },
];

export default function FinanceActTable() {
    const router = useRouter();

    return (
        <div className="mx-auto flex flex-col items-center gap-y-5 bg-gray-100">

            <Animations />
            <PersonalFeature />

            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
                অর্থবছর অনুযায়ী অর্থ আইন
            </h1>

            <div className="overflow-x-auto w-8/12 pb-5">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-2 w-1/12 text-center">ক্রমিক</th>
                            <th className="px-4 py-2 text-center">অর্থ বছর</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {financeActs.map((act, index) => (
                            <tr
                                key={act.id}
                                onClick={() => router.push(act.link)}
                                className="hover:bg-gray-100 cursor-pointer transition-colors"
                            >
                                <td className="px-4 py-2 text-center border-r border-gray-200">{index + 1}</td>
                                <td className="px-4 py-2 text-black font-medium">{act.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
