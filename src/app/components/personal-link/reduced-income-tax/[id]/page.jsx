'use client';

import { useParams } from "next/navigation";
import { PersonalFeature } from "../../PersonalFeature";
import TaxAccordions from "../../PersonalTax";
import Link from "next/link";
import GovernmentLinks from "@/app/components/GovtLink";
import { Animations } from "@/app/components/Animations";

export default function PdfViewer() {
    const { id } = useParams();

    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex flex-col w-full justify-start gap-y-8 mx-auto border-t border-t-gray-200">
                <Animations />
                <PersonalFeature />

                <div className="flex flex-col md:flex-row items-start justify-center gap-x-10 w-10/12 mx-auto -mt-15">

                    <div className="w-full md:w-1/3">
                        <TaxAccordions />
                    </div>

                    {
                        id === '1' && (
                            <div className="w-full md:w-2/3 mx-auto p-4">
                                <h2 className="text-center text-xl md:text-2xl font-semibold mb-4">
                                    হাঁস-মুরগীর খামার, হাঁস-মুরগী, চিংড়ী ও মাছের হ্যাচারী (hatchery) এবং মৎস্য চাষ হতে আয়ের জন্য হ্রাসকৃত কর
                                </h2>

                                <p className="text-black font-semibold">
                                    এস. আর. ও. নং ১৫১-আইন/আয়কর-৬/২০২৫, তারিখঃ ২৬ মে, ২০২৫ এর মাধ্যমে উক্ত খাতে হ্রাসকৃত হারে কর প্রদানের সুবিধা
                                    বাতিল করা হয়েছে। উক্ত খাতে এখন থেকে সাধারণ হারে কর প্রযোজ্য হবে।
                                </p>

                                <p className="mt-4 text-red-600 font-bold">
                                    ২০২৪-২০২৫ করবর্ষ পর্যন্ত নিম্নরূপ করহার ছিলঃ
                                </p>

                                <div className="overflow-x-auto mt-4">
                                    <table className="w-full border border-black">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border border-black text-center p-2 font-semibold">
                                                    আয়ের পরিমাণ
                                                </th>
                                                <th className="border border-black text-center p-2 font-semibold">
                                                    আয়করের হার
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-black p-2">
                                                    প্রথম ১০ লক্ষ টাকা পর্যন্ত আয়ের উপর
                                                </td>
                                                <td className="border border-black text-center p-2">শূন্য</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">
                                                    পরবর্তী ১০ লক্ষ টাকা পর্যন্ত আয়ের উপর
                                                </td>
                                                <td className="border border-black text-center p-2">৫%</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">
                                                    পরবর্তী ১০ লক্ষ টাকা পর্যন্ত আয়ের উপর
                                                </td>
                                                <td className="border border-black text-center p-2">১০%</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-black p-2">
                                                    অবশিষ্ট আয়ের উপর
                                                </td>
                                                <td className="border border-black text-center p-2">১৫%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <hr className="my-6 border-gray-300" />

                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-400">
                                        <caption className="caption-top text-left font-semibold mb-2">
                                            তথ্যসূত্র
                                        </caption>

                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border p-2">ক্রমিক</th>
                                                <th className="border p-2">মন্তব্য</th>
                                                <th className="border p-2">আয় কর এস আর ও</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border p-2">১</td>
                                                <td className="border p-2">চলমান</td>
                                                <td className="border p-2">
                                                    <a
                                                        href="https://bdtaxation.com/income-tax-sro/26"
                                                        className="text-blue-600 underline"
                                                    >
                                                        এস,আর,ও নং-১৫৭-আইন/আয়কর/২০২২
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2">২</td>
                                                <td className="border p-2">বাতিলকৃত এসআরও</td>
                                                <td className="border p-2">
                                                    <a
                                                        href="https://bdtaxation.com/income-tax-sro/198"
                                                        className="text-blue-600 underline"
                                                    >
                                                        এস. আর. ও. নং ১৫১-আইন/আয়কর-৬/২০২৫
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                    {
                        id === '2' && (
                            <div className="w-full md:w-2/3 mx-auto p-4">
                                <h2 className="text-center text-xl md:text-2xl font-semibold mb-4">
                                    অ্যাসেট ম্যানেজমেন্ট কোম্পানির মিউচুয়াল ফান্ড ব্যবস্থাপনা ফি বাবদ অর্জিত আয়ের উপর করহার হ্রাস
                                </h2>

                                <p className="text-black">
                                    অ্যাসেট ম্যানেজমেন্ট কোম্পানিসমূহ কর্তৃক কেবল মিউচুয়াল ফান্ড ব্যবস্থাপনা ফি বাবদ অর্জিত আয়ের উপর
                                    কর হার হ্রাস করে ১৫% ধার্য্য করা হয়েছে।
                                </p>

                                <hr className="my-6 border-gray-300" />

                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-400">
                                        <caption className="caption-top text-left font-semibold mb-2">
                                            তথ্যসূত্র
                                        </caption>

                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border p-2">ক্রমিক</th>
                                                <th className="border p-2">মন্তব্য</th>
                                                <th className="border p-2">আয় কর এস আর ও</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border p-2">১</td>
                                                <td className="border p-2">রেফারেন্স</td>
                                                <td className="border p-2">
                                                    <a
                                                        href="https://bdtaxation.com/income-tax-sro/4"
                                                        className="text-blue-600 underline"
                                                    >
                                                        এস. আর. ও. নং ৪৯-আইন/আয়কর-২৬/২০২৪
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                    {
                        id === '3' && (
                            <div className="w-full md:w-1/2 order-1 md:order-2 p-4">

                                <h2 className="text-center text-xl md:text-2xl font-semibold mb-4">
                                    পণ্য রপ্তানির বিভিন্ন খাতে প্রদেয় করের হ্রাস
                                </h2>

                                <p className="mb-4">
                                    পণ্য রপ্তানির বিভিন্ন খাতের বিপরীতে আয়ের উপর নিম্নরূপ করহার হ্রাস করা হয়েছে
                                </p>

                                {/* --- Main Table --- */}
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-400 border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="border p-2 text-center font-semibold w-3/4">
                                                    করদাতার ধরণ
                                                </th>
                                                <th className="border p-2 text-center font-semibold w-1/4">
                                                    করহার
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr>
                                                <td className="border p-3">
                                                    স্বাভাবিক ব্যক্তি, ফার্ম ও হিন্দু অবিভক্ত পরিবার
                                                </td>
                                                <td className="border p-3 text-center">
                                                    উক্ত আয়ের ৫০% করমুক্ত হবে
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border p-3">
                                                    স্বাভাবিক ব্যক্তি, ফার্ম ও হিন্দু অবিভক্ত পরিবার ব্যতিত অন্যান্য করদাতা
                                                </td>
                                                <td className="border p-3 text-center">
                                                    ১২%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border p-3">
                                                    স্বাভাবিক ব্যক্তি, ফার্ম ও হিন্দু অবিভক্ত পরিবার ব্যতিত অন্যান্য করদাতা কর্তৃক লিডারশিপ ইন এনার্জি অ্যান্ড এনভায়রনমেন্ট ডিজাইন (LEED) ছাড়পত্র কারখানায় উৎপাদিত পণ্য রপ্তানির বিপরীতে
                                                </td>
                                                <td className="border p-3 text-center">
                                                    ১০%
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>

                                <hr className="my-6" />

                                {/* --- Reference Table --- */}
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-400">
                                        <caption className="caption-top text-left font-semibold mb-2">
                                            তথ্যসূত্র
                                        </caption>

                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border p-2">ক্রমিক</th>
                                                <th className="border p-2">মন্তব্য</th>
                                                <th className="border p-2">আয় কর এস আর ও</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border p-2">১</td>
                                                <td className="border p-2">রেফারেন্স</td>
                                                <td className="border p-2">
                                                    <a href="https://bdtaxation.com/income-tax-sro/5" className="text-blue-600 underline">
                                                        এস. আর. ও. নং ৪৪-আইন/আয়কর-২৫/২০২৪
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        )
                    }
                    {
                        id === '4' && (
                            <div className="w-full md:w-1/2 order-1 md:order-2 mx-auto p-4">

                                <h2 className="text-center text-xl md:text-2xl font-semibold mb-4">
                                    পাটজাত দ্রব্য উৎপাদিত শিল্প প্রতিষ্ঠানের রপ্তানির বিপরীতে অর্জিত আয়ের বিপরীতে করহার হ্রাস
                                </h2>

                                <p className="mb-4">
                                    পাটজাত দ্রব্য উৎপাদিত শিল্প প্রতিষ্ঠানের রপ্তানির বিপরীতে অর্জিত আয়ের বিপরীতে করহার হ্রাস করে
                                    কোম্পানি করদাতা ও কোম্পানি ব্যতিত অন্য করদাতার ক্ষেত্রে করহার ১০% ধার্য্য করা হয়েছে।
                                </p>

                                <hr className="my-6 border-gray-300" />

                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-400">
                                        <caption className="caption-top font-semibold mb-2 text-left">
                                            তথ্যসূত্র
                                        </caption>

                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border p-2">ক্রমিক</th>
                                                <th className="border p-2">মন্তব্য</th>
                                                <th className="border p-2">আয় কর এস আর ও</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border p-2">১</td>
                                                <td className="border p-2">রেফারেন্স</td>
                                                <td className="border p-2">
                                                    <a href="https://bdtaxation.com/income-tax-sro/11"
                                                        className="text-blue-600 underline">
                                                        এস. আর. ও. নং ৩০৪-আইন/আয়কর-১৮/২০২৩
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        )
                    }
                    {
                        id === '5' && (
                            <div className="w-full md:w-2/3 mx-auto p-4">
                                <h2 className="text-center text-lg font-semibold">
                                    সুতা উৎপাদন, সুতা ডায়িং, ফিনিশিং, কোনিং, কাপড় তৈরী, কাপড় ডায়িং, প্রিন্টিং অথবা উক্তরূপ ব্যবসায়ে নিয়োজিত কোম্পানীর প্রদেয় করের হার হ্রাস
                                </h2>

                                <p className="mt-4">
                                    সুতা উৎপাদন, সুতা ডায়িং, ফিনিশিং, কোনিং, কাপড় তৈরী, কাপড় ডায়িং, প্রিন্টিং অথবা উক্তরূপ ব্যবসায়ে নিয়োজিত কোম্পানীর ব্যবসা হতে আয়ের উপর করহার ১৫% হারে ধার্য্য করা হয়েছে।
                                </p>

                                <hr className="my-6" />

                                <table className="table-auto border border-gray-300 w-full text-left">
                                    <caption className="caption-top text-blue-600 font-medium mb-2">তথ্যসূত্র</caption>
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border px-4 py-2">ক্রমিক</th>
                                            <th className="border px-4 py-2">মন্তব্য</th>
                                            <th className="border px-4 py-2">আয় কর এস আর ও</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">১</td>
                                            <td className="border px-4 py-2">রেফারেন্স</td>
                                            <td className="border px-4 py-2">
                                                <a href="https://bdtaxation.com/income-tax-sro/24" className="text-blue-500 hover:underline">
                                                    এস.আর.ও নং-১৫৯-আইন/আয়কর/২০২২
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        )
                    }
                    {
                        id === '6' && (
                            <div className="w-full md:w-2/3 mx-auto p-4">
                                <h2 className="text-center text-lg font-semibold">
                                    পিলেটেড পোল্ট্রি ফিড উৎপাদন, গবাদি পশু, চিংড়ি ও মাছের পিলেটেড ফুড উৎপাদন, বীজ উৎপাদন, স্থানীয়ভাবে উৎপাদিত বীজ বিপণন, গবাদি পশুর খামার, দুগ্ধ ও দুগ্ধজাত দ্রব্যের খামার, ব্যাঙ উৎপাদন খামার, উদ্যান খামার প্রকল্প, তুঁত গাছের চাষ, মৌমাছির চাষ প্রকল্প, রেশম গুটিপোকা পালনের খামার, ছত্রাক উৎপাদন খামার এবং ফুল ও লাতাপাতার চাষ হতে আয়
                                </h2>

                                <p className="mt-4 text-black font-semibold">
                                    এস. আর. ও. নং ১৫১-আইন/আয়কর-৬/২০২৫, তারিখঃ ২৬ মে, ২০২৫ এর মাধ্যমে উক্ত খাতে হ্রাসকৃত হারে কর প্রদানের সুবিধা বাতিল করা হয়েছে। উক্ত খাতে এখন থেকে সাধারণ হারে কর প্রযোজ্য হবে।
                                </p>

                                <p className="mt-4 text-red-600 font-bold">
                                    ২০২৪-২০২৫ করবর্ষ পর্যন্ত নিম্নরূপ করহার ছিলঃ
                                </p>

                                <table className="table-auto border border-black w-full text-left mt-4">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border px-4 py-2 text-center">আয়ের পরিমাণ</th>
                                            <th className="border px-4 py-2 text-center">আয়করের হার</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">প্রথম ১০ লক্ষ টাকা পর্যন্ত আয়ের উপর</td>
                                            <td className="border px-4 py-2 text-center">৩%</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">পরবর্তী ২০ লক্ষ টাকা পর্যন্ত আয়ের উপর</td>
                                            <td className="border px-4 py-2 text-center">১০%</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">অবশিষ্ট আয়ের উপর</td>
                                            <td className="border px-4 py-2 text-center">১৫%</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <hr className="my-6" />

                                <table className="table-auto border border-gray-300 w-full text-left">
                                    <caption className="caption-top text-blue-600 font-medium mb-2">তথ্যসূত্র</caption>
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border px-4 py-2">ক্রমিক</th>
                                            <th className="border px-4 py-2">মন্তব্য</th>
                                            <th className="border px-4 py-2">আয় কর এস আর ও</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">১</td>
                                            <td className="border px-4 py-2">রেফারেন্স</td>
                                            <td className="border px-4 py-2">
                                                <a href="https://bdtaxation.com/income-tax-sro/92" className="text-blue-500 hover:underline">
                                                    এস, আর, ও নং ১৯৯-আইন/আয়কর/২০১৫
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">২</td>
                                            <td className="border px-4 py-2">উক্ত এসআরও দ্বারা বাতিল করা হয়েছে</td>
                                            <td className="border px-4 py-2">
                                                <a href="https://bdtaxation.com/income-tax-sro/198" className="text-blue-500 hover:underline">
                                                    এস. আর. ও. নং ১৫১-আইন/আয়কর-৬/২০২৫
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        )
                    }
                    {
                        id === '7' && (
                            <div className="w-full md:w-2/3 mx-auto p-4">
                                <h2 className="text-center text-lg font-semibold">
                                    কোম্পানি, ব্যক্তিসংঘ ও ট্রাস্ট ব্যতিত অন্যান্য করদাতাদের শেয়ার ব্যবসা হতে মূলধনী আয়ের বিপরীতে কর
                                </h2>

                                <p className="mt-4 text-justify">
                                    আয়কর আইন, ২০২৩ এর <a href="/tax-act-section/442" className="text-blue-500 hover:underline">সপ্তম তফসীল</a> এর ১ (গ) অনুযায়ী মাধ্যমে কোম্পানি, ব্যক্তিসংঘ ও ট্রাস্ট ব্যতিত অন্যান্য করদাতাদের স্টক এক্সচেঞ্জে তালিকাভুক্ত সিকিউরিটিজ লেনদেন হতে অর্জিত মূলধনী আয়ের উপর ১৫% হারে কর প্রদান করতে হবে। তবে আয়কর আইন, ২০২৩ এর <a href="/tax-act-section/435" className="text-blue-500 hover:underline">ষষ্ঠ তফসীল, অংশ-১</a> এর ৩৬(ক) অনুযায়ী প্রাপ্ত আয়ের মধ্যে ৫০ লক্ষ টাকা করমুক্ত থাকবে। ৫০ লক্ষ টাকার অধিক কোন প্রাপ্তি হলে উক্ত টাকার উপর ১৫% হারে কর প্রযোজ্য হবে।
                                </p>

                                <p className="mt-2 text-justify">
                                    বিষয়টি অর্থ অধ্যাদেশ, ২০২৫ এর মাধ্যমে জারী করা হয়েছে।
                                </p>

                                <hr className="my-6" />

                                <table className="table-auto border border-gray-300 w-full text-left">
                                    <caption className="caption-top text-blue-600 font-medium mb-2">তথ্যসূত্র</caption>
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border px-4 py-2">ক্রমিক</th>
                                            <th className="border px-4 py-2">মন্তব্য</th>
                                            <th className="border px-4 py-2">আয় কর এস আর ও</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* কোনো তথ্য না থাকলে খালি থাকবে */}
                                    </tbody>
                                </table>
                            </div>

                        )
                    }
                    {
                        id === '8' && (
                            <div className="w-full md:w-2/3 mx-auto p-4">
                                <h2 className="text-center text-lg font-semibold">
                                    কোম্পানি, ব্যক্তিসংঘ ও ট্রাস্ট ব্যতিত অন্যান্য করদাতাদের মূলধনি আয়ের বিপরীতে কর
                                </h2>

                                <p className="mt-4 text-justify">
                                    আয়কর আইন, ২০২৩ এর <a href="/tax-act-section/442" className="text-blue-500 hover:underline">সপ্তম তফসীল</a> এর ১ (গ) অনুযায়ী কোম্পানী, ব্যক্তিসংঘ ও ট্রাস্ট জাতীয় করদাতাদের অর্জিত মূলধনি আয়ের উপর নিম্নরূপে কর প্রদান করতে হবে।
                                </p>

                                <p className="mt-2 text-justify">
                                    ১। মূলধনি পরিসম্পদ অর্জন বা প্রাপ্তির অনধিক ৫(পাঁচ) বছরের মধ্যে পরিসম্পদ হস্তান্তর হলে উক্ত মূলধনি আয় মোট আয়ের অন্তর্ভূক্ত হবে এবং মোট আয়ের উপর নিয়মিত হারে কর প্রযোজ্য হবে।
                                </p>

                                <p className="mt-2 text-justify">
                                    ২। মূলধনি পরিসম্পদ অর্জন বা প্রাপ্তির ৫(পাঁচ) বছরের অধিক হলে পরিসম্পদ হস্তান্তর হলে উক্ত মূলধনি আয়ের উপর ১৫% হারে কর প্রযোজ্য হবে।
                                </p>

                                <p className="mt-2 text-justify">
                                    বিষয়টি অর্থ অধ্যাদেশ, ২০২৫ এর মাধ্যমে জারী করা হয়েছে।
                                </p>

                                <hr className="my-6" />

                                <table className="table-auto border border-gray-300 w-full text-left">
                                    <caption className="caption-top text-blue-600 font-medium mb-2">তথ্যসূত্র</caption>
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border px-4 py-2">ক্রমিক</th>
                                            <th className="border px-4 py-2">মন্তব্য</th>
                                            <th className="border px-4 py-2">আয় কর এস আর ও</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* কোনো তথ্য না থাকলে খালি থাকবে */}
                                    </tbody>
                                </table>
                            </div>

                        )
                    }
                    {
                        id === '9' && (
                            <div className="w-full md:w-2/3 mx-auto p-4">
                                <h2 className="text-center text-lg font-semibold">
                                    কোম্পানি, ব্যক্তিসংঘ ও ট্রাস্ট জাতীয় করদাতাদের মূলধনি আয়ের বিপরীতে কর
                                </h2>

                                <p className="mt-4 text-justify">
                                    আয়কর আইন, ২০২৩ এর <a href="/tax-act-section/442" className="text-blue-500 hover:underline">সপ্তম তফসীল</a> এর ১ (ক) অনুযায়ী কোম্পানী, ব্যক্তিসংঘ ও ট্রাস্ট জাতীয় করদাতাদের অর্জিত মূলধনি আয়ের উপর ১৫% হারে কর প্রদান করতে হবে। বিষয়টি অর্থ অধ্যাদেশ, ২০২৫ এর মাধ্যমে জারী করা হয়েছে।
                                </p>

                                <hr className="my-6" />

                                <table className="table-auto border border-gray-300 w-full text-left">
                                    <caption className="caption-top text-blue-600 font-medium mb-2">তথ্যসূত্র</caption>
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border px-4 py-2">ক্রমিক</th>
                                            <th className="border px-4 py-2">মন্তব্য</th>
                                            <th className="border px-4 py-2">আয় কর এস আর ও</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* কোনো তথ্য না থাকলে খালি থাকবে */}
                                    </tbody>
                                </table>
                            </div>

                        )
                    }
                    {
                        id === '10' && (
                            <div className="w-full md:w-2/3 mx-auto p-4">
                                <h2 className="text-center text-lg font-semibold">
                                    খুচরা যন্ত্রাংশসহ পূর্ণাঙ্গ ফ্রিজার, রেফ্রিজারেটর, মোটরসাইকেল, এয়ারকন্ডিশন ও কম্প্রেসর তৈরী শিল্পের আয়ের বিপরীতে কর
                                </h2>

                                <p className="mt-4">
                                    খুচরা যন্ত্রাংশসহ পূর্ণাঙ্গ ফ্রিজার, রেফ্রিজারেটর, মোটরসাইকেল, এয়ারকন্ডিশন ও কম্প্রেসর তৈরী শিল্পের আয়কর হার ২০% করা হয়েছে।
                                </p>

                                <hr className="my-6" />

                                <table className="table-auto border border-gray-300 w-full text-left">
                                    <caption className="caption-top text-blue-600 font-medium mb-2">তথ্যসূত্র</caption>
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border px-4 py-2">ক্রমিক</th>
                                            <th className="border px-4 py-2">মন্তব্য</th>
                                            <th className="border px-4 py-2">আয় কর এস আর ও</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 py-2">১</td>
                                            <td className="border px-4 py-2">রেফারেন্স</td>
                                            <td className="border px-4 py-2">
                                                <a href="https://bdtaxation.com/income-tax-sro/183" className="text-blue-500 hover:underline">
                                                    এস. আর. ও. নং ১২-আইন/আয়কর-৬২/২০২৫
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        )
                    }
                </div>
            </div>
            <GovernmentLinks />
        </div>
    )
}