'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Animations } from '../../Animations';
import { Feature } from '../../Feature';

// 📄 পরিপত্র ডেটা
const paripatraYears = [
    { id: 1, title: 'করবর্ষ ২০২৫-২০২৬', link: '/components/tax-act/paripatra/1' },
    { id: 2, title: 'করবর্ষ ২০২৪-২০২৫', link: '/components/tax-act/paripatra/2' },
    { id: 3, title: 'করবর্ষ ২০২৩-২০২৪', link: '/components/tax-act/paripatra/3' },
    { id: 4, title: 'করবর্ষ ২০২২-২০২৩', link: '/components/tax-act/paripatra/4' },
    { id: 5, title: 'করবর্ষ ২০২১-২০২২', link: '/components/tax-act/paripatra/5' },
    { id: 6, title: 'করবর্ষ ২০২০-২০২১', link: '/components/tax-act/paripatra/6' },
    { id: 7, title: 'করবর্ষ ২০১৯-২০২০', link: '/components/tax-act/paripatra/7' },
    { id: 8, title: 'করবর্ষ ২০১৮-২০১৯', link: '/components/tax-act/paripatra/8' },
    { id: 9, title: 'করবর্ষ ২০১৭-২০১৮', link: '/components/tax-act/paripatra/9' },
    { id: 10, title: 'করবর্ষ ২০১৬-২০১৭', link: '/components/tax-act/paripatra/10' },
    { id: 11, title: 'করবর্ষ ২০১৫-২০১৬', link: '/components/tax-act/paripatra/11' },
    { id: 12, title: 'করবর্ষ ২০১৪-২০১৫', link: '/components/tax-act/paripatra/12' },
    { id: 13, title: 'করবর্ষ ২০১৩-২০১৪', link: '/components/tax-act/paripatra/13' },
    { id: 14, title: 'করবর্ষ ২০১২-২০১৩', link: '/components/tax-act/paripatra/14' },
];


export default function ParipatraTable() {
    const router = useRouter();

    return (
        <div className="mx-auto flex flex-col items-center gap-y-5 bg-gray-100">

            <Animations />
            <Feature />

            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
                পরিপত্র
            </h1>

            <div className="overflow-x-auto w-8/12 pb-5">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-300 table-auto">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-2 w-1/12 text-center">ক্রমিক</th>
                            <th className="px-4 py-2 text-center">করবর্ষ</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {paripatraYears.map((year, index) => (
                            <tr
                                key={year.id}
                                onClick={() => router.push(year.link)}
                                className="hover:bg-gray-100 cursor-pointer transition-colors"
                            >
                                <td className="px-4 py-2 text-center border-r border-gray-200">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-2 text-black font-medium">{year.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
