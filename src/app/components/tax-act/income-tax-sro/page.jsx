'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import sroList from './IncomeTaxSro.json';
import { Animations } from '../../Animations';
import { Feature } from '../../Feature';

export default function IncomeTaxSRO() {
    const router = useRouter();
    const [search, setSearch] = useState({
        sroNo: '',
        date: '',
        description: '',
    });
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 20;
    const filteredList = sroList.filter(
        (item) =>
            item.sroNo.includes(search.sroNo) &&
            item.date.includes(search.date) &&
            item.description.includes(search.description)
    );

    const totalPages = Math.ceil(filteredList.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredList.slice(startIndex, startIndex + itemsPerPage);

    function toBanglaNumber(number) {
        const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return number.toString().split('').map(digit => banglaDigits[digit] || digit).join('');
    }


    return (
        <div className="mx-auto flex flex-col items-center gap-y-5 bg-gray-100">

            <Animations />
            <Feature />

            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
                আয় কর এস আর ও
            </h1>

            {/* 🔍 Search Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <input
                    type="text"
                    placeholder="SRO No"
                    className="border border-green-600 outline-none rounded-md p-2 w-full"
                    value={search.sroNo}
                    onChange={(e) => setSearch({ ...search, sroNo: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Date"
                    className="border border-green-600 outline-none rounded-md p-2 w-full"
                    value={search.date}
                    onChange={(e) => setSearch({ ...search, date: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Search by Description"
                    className="border border-green-600 outline-none rounded-md p-2 w-full"
                    value={search.description}
                    onChange={(e) => setSearch({ ...search, description: e.target.value })}
                />
            </div>

            {/* 📊 Table */}
            <div className="overflow-x-auto border-gray-200 p-4">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="bg-gray-800 text-white text-center border border-gray-800">
                            <th className="border border-gray-200 py-2 w-12">SL</th>
                            <th className="border border-gray-200 px-2 py-2">SRO No</th>
                            <th className="border border-gray-200 px-2 py-2">Date</th>
                            <th className="border border-gray-200 px-2 py-2">Description</th>
                            <th className="border border-gray-200 px-2 py-2">Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((item, index) => (
                                <tr
                                    key={item.id}
                                    onClick={() =>
                                        router.push(`https://bdtaxation.com/income-tax-sro/${item.id}`)
                                    }
                                    className="hover:bg-gray-100 cursor-pointer transition"
                                >
                                    <td className="border border-gray-200 text-center py-2">
                                        {toBanglaNumber(startIndex + index + 1)}
                                    </td>
                                    <td className="border border-gray-200 text-green-800 px-2 py-2">
                                        {item.sroNo}
                                    </td>
                                    <td className="border border-gray-200 text-center px-2 py-2">
                                        {item.date}
                                    </td>
                                    <td className="border border-gray-200 px-2 py-2">
                                        {item.description}
                                    </td>
                                    <td className="border border-gray-200 px-2 py-2 text-gray-600">
                                        {item.comment}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="text-center py-6 text-gray-500">
                                    কোনো ফলাফল পাওয়া যায়নি।
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* 📄 Pagination */}
            <div className="w-full p-4 flex justify-between items-center mt-6 text-sm text-gray-600">
                <p className="text-[11px] text-gray-400">
                    Showing <span>{startIndex + 1}</span> to{' '}
                    <span>{Math.min(startIndex + itemsPerPage, filteredList.length)}</span> of{' '}
                    <span>{filteredList.length}</span> results
                </p>

                <div className="flex items-center text-green-800">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className={`py-3 px-4 border-l border-t border-b rounded-tl-md rounded-bl-md border-gray-200 ${currentPage === 1
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                    >
                        ‹
                    </button>

                    <div className="grid grid-flow-col auto-cols-max">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`p-3 border ${currentPage === page
                                    ? 'border-green-800 bg-green-800 text-white'
                                    : 'border-gray-200 bg-gray-100 hover:bg-gray-200'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className={`py-3 px-4 border-t border-b border-r rounded-tr-md rounded-br-md border-gray-200 ${currentPage === totalPages
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
}
