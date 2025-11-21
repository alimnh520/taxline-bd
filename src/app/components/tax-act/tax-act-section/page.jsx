'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Animations } from '../../Animations';
import { Feature } from '../../Feature';

export default function IncomeVoluntaryDeclaration() {
    const router = useRouter();
    const [selectedYear, setSelectedYear] = useState('');

    const sections = [
        { id: 48, text: 'ধারা ২৪', link: '/tax-act-section/48' },
        { id: 171, text: 'ধারা ১৭১', link: '/tax-act-section/216' },
        { id: 212, text: 'ধারা ২১২', link: '/tax-act-section/258' },
        { id: 200, text: 'ধারা ২০০', link: '/tax-act-section/246' },
        { id: 311, text: 'ধারা ৩১১-৩১৩', link: '/tax-act-section/99' },
    ];

    const handleLink = (link) => {
        router.push(link);
    };

    return (
        <div className="mx-auto flex flex-col items-center gap-y-5 bg-gray-100">
            <Animations />
            <Feature />

            <div className="max-w-4xl mx-auto p-4" id="sectionContent">
                {/* Print Button */}
                <button
                    className="bg-gray-600 text-white px-4 py-2 rounded mb-4 no-print"
                    onClick={() => window.print()}
                >
                    Print
                </button>

                {/* Header */}
                <h1 className="my-1 font-bold text-xl">আয়ের স্বপ্রণোদিত প্রদর্শন</h1>
                <strong className="italic">ধারা : আয়ের স্বপ্রণোদিত প্রদর্শন</strong>
                <hr className="my-1 text-gray-200" />

                {/* Year Select */}
                <div className="mb-3 flex items-center mt-5">
                    <label htmlFor="yearId" className="w-1/3 font-medium">করবর্ষ</label>
                    <select
                        id="yearId"
                        className="w-80 border border-green-700 outline-none py-2.5 rounded px-2"
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        <option value="3">২০২৫ - ২০২৬</option>
                        <option value="0">২০২৩ - ২০২৪</option>
                    </select>
                </div>

                {/* Content */}

                {
                    selectedYear === '0' ? (
                        <div className="">
                            <p>এই আইনটি ২০২৫-২০২৬ করবর্ষে সংযোজন করা হয়েছে।</p>
                            {/* Ad placeholder */}
                            <div className="border no-print w-full h-24 my-4 flex items-center justify-center bg-gray-100">
                                Ad Placeholder (Google Ads)
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-2 mt-5 text-justify">
                            <div>
                                (১){' '}
                                <span
                                    className="text-green-800 hover:underline decoration-green-800 cursor-pointer"
                                    onClick={() => handleLink(sections[0].link)}
                                >
                                    {sections[0].text}
                                </span>{' '}
                                এ উল্লিখিত রিটার্ন বৈধ হিসাবে বিবেচিত হইবে, যদি-
                            </div>
                            <div className="pl-10">(ক) উক্ত ব্যক্তি রিটার্ন দাখিলের পূর্বে-</div>
                            <div className="pl-20">(অ) এইরূপ আয়সহ মোট আয়ের উপর পরিশোধযোগ্য কর পরিশোধ করেন; এবং</div>
                            <div className="pl-20">(আ) অপ্রদর্শিত আয়ের সমানুপাতিক করের ১০% (দশ শতাংশ) হারে জরিমানা পরিশোধ করেন;</div>
                            <div className="pl-10">
                                (খ){' '}
                                <span
                                    className="text-green-800 hover:underline decoration-green-800 cursor-pointer"
                                    onClick={() => handleLink(sections[1].link)}
                                >
                                    {sections[1].text}
                                </span>{' '}
                                এ উল্লিখিত সময়সীমার মধ্যে আয়ের রিটার্ন দাখিল করা হয়; এবং
                            </div>
                            <div className="pl-10">(গ) রিটার্নের সহিত নিম্নবর্ণিত বিষয়াদি উল্লেখপূর্বক একটি ঘোষণাপত্র সংযুক্ত করা হয়-</div>
                            <div className="pl-20">(অ) ঘোষণা প্রদানকারী ব্যক্তির নাম;</div>
                            <div className="pl-20">(আ) ঘোষিত আয়ের খাত ও পরিমাণ;</div>
                            <div className="pl-20">(ই) ঘোষিত আয়ের উপর পরিশোধিত কর ও জরিমানা।</div>

                            <div>
                                (২){' '}
                                <span
                                    className="text-green-800 hover:underline decoration-green-800 cursor-pointer"
                                    onClick={() => handleLink(sections[0].link)}
                                >
                                    {sections[0].text}
                                </span>{' '}
                                ও এই তফসিলের বিধানাবলি প্রযোজ্য হইবে না, যদি-
                            </div>
                            <div className="pl-10">
                                (ক) এইরূপ আয়ের রিটার্ন দাখিলের পূর্বে{' '}
                                <span
                                    className="text-green-800 hover:underline decoration-green-800 cursor-pointer"
                                    onClick={() => handleLink(sections[2].link)}
                                >
                                    {sections[2].text}
                                </span>{' '}
                                এর অধীন কোনো আয়, পরিসম্পদ বা ব্যয় গোপন করিবার বা কোনো আয় বা তাহার অংশবিশেষের উপর কর ফাঁকি নেওয়ার কারণে কোনো নোটিশ জারি করা হয়;
                            </div>
                            <div className="pl-10">
                                (খ) এইরূপ আয়ের রিটার্ন দাখিলের পূর্বে{' '}
                                <span
                                    className="text-green-800 hover:underline decoration-green-800 cursor-pointer"
                                    onClick={() => handleLink(sections[3].link)}
                                >
                                    {sections[3].text}
                                </span>{' '}
                                এর উপ-ধারা (২) এর অধীন কোনো ব্যাংক কোম্পানির উপর কোনো নোটিশ জারি করা হয়;
                            </div>
                            <div className="pl-10">
                                (গ) এইরূপ আয়ের রিটার্ন দাখিলের পূর্বে{' '}
                                <span
                                    className="text-green-800 hover:underline decoration-green-800 cursor-pointer"
                                    onClick={() => handleLink(sections[4].link)}
                                >
                                    {sections[4].text}
                                </span>{' '}
                                এর অধীন কোনো কার্যক্রম গ্রহণ করা হয়;
                            </div>
                            <div className="pl-10">(ঘ) এই অনুচ্ছেদের অধীন ঘোষিত কোনো আয়-</div>
                            <div className="pl-20">(অ) কোনো বৈধ উৎস হইতে উদ্ধৃত না হয়; বা</div>
                            <div className="pl-20">(আ) আপাতত বলবৎ অন্য কোনো আইনের অধীন অপরাধমুলক কার্যক্রম হইতে উদ্ধৃত হয়; বা</div>
                            <div className="pl-10">(ঙ) এই অনুচ্ছেদের অধীন ঘোষিত কোনো আয় সংশ্লিষ্ট করবর্ষে কর অব্যাহতি প্রাপ্ত হয়।</div>

                            <div>
                                (৩){' '}
                                <span
                                    className="text-green-800 hover:underline decoration-green-800 cursor-pointer"
                                    onClick={() => handleLink(sections[0].link)}
                                >
                                    {sections[0].text}
                                </span>{' '}
                                ও এই তফসিলের অধীন প্রদর্শিত আয় নিম্নবর্ণিত কার্যক্রমসহ যেকোনো উৎপাদনমূলক কার্যক্রম বা খাতে বিনিয়োগ করা যাইবে, যথা-
                            </div>
                            <div className="pl-10">(ক) শিল্পোদ্যোগ ও তাহার সম্প্রসারণ,</div>
                            <div className="pl-10">(খ) বিদ্যমান কোনো শিল্প-কারখানার প্রমিতকরণ, আধুনিকীকরণ, সংস্কার ও সম্প্রসারণ;</div>
                            <div className="pl-10">(গ) ইমারত বা অ্যাপার্টমেন্ট বা ভূমি;</div>
                            <div className="pl-10">(ঘ) বাংলাদেশ স্টক এক্সচেঞ্জে তালিকাভুক্ত সিকিউরিটিজ, বা</div>
                            <div className="pl-10">(ঙ) পণ্য ও সেবা উৎপাদনকারী কোনো ব্যবসা, বাণিজ্য বা শিল্পোদ্যোগ।</div>

                            {/* মন্তব্য */}
                            <h5 className="mt-4 font-semibold">মন্তব্য :</h5>
                            <div className="text-red-600 mb-2">এই আইনটি ২০২৫-২০২৬ করবর্ষে সংযোজন করা হয়েছে।</div>

                            {/* Ad placeholder */}
                            <div className="border no-print w-full h-24 my-4 flex items-center justify-center bg-gray-100">
                                Ad Placeholder (Google Ads)
                            </div>
                        </div>
                    )
                }

                <hr className="my-4 text-gray-200" />

                <div className='flex flex-col gap-y-3'>
                    <strong>মন্তব্য : </strong>
                    <span className="text-red-600">
                        আইনটি অর্থ অধ্যাদেশ, ২০২৫ এর সংশোধিত আদেশ দ্বারা সংযোজন করা হয়েছে
                    </span>
                </div>

                <hr className="my-4 text-gray-200" />

            </div>
        </div>
    );
}
