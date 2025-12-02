'use client';

import { useParams } from "next/navigation";
import { PersonalFeature } from "../../PersonalFeature";
import TaxAccordions from "../../PersonalTax";
import Link from "next/link";
import GovernmentLinks from "@/app/components/GovtLink";

export default function PdfViewer() {
    const { id } = useParams();

    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex flex-col justify-start gap-y-8 w-10/12 mx-auto border-t border-t-gray-200">

                <PersonalFeature />

                <div className="flex flex-col md:flex-row items-start justify-between gap-x-10 w-full">

                    <div className="w-full md:w-1/3">
                        <TaxAccordions />
                    </div>

                    {
                        id === '1' && (
                            <div className="w-full md:w-2/3 mx-auto p-4">
                                <h2 className="text-center text-2xl font-bold mb-4">
                                    সম্পত্তি অধিগ্রহণ এর ক্ষতিপূরণ হতে অর্জিত আয়
                                </h2>

                                <p className="text-justify mb-4 font-sans">
                                    যেকোনো স্বাভাবিক ব্যক্তি করদাতার সম্পত্তির অধিগ্রহণ এর ক্ষতিপূরণ হতে অর্জিত মূলধনি আয়ের বিপরীতে কর্তিত কর চূড়ান্ত করদায় হিসেবে বিবেচিত।
                                </p>

                                <p className="text-justify mb-4">
                                    <strong>রেফারেন্স: </strong>
                                    <Link href="/tax-act-section/208" className="text-blue-600 underline">
                                        ধারা-১৬৩(১১)
                                    </Link>
                                </p>

                                <p className="text-red-600 font-semibold mb-2">নোট:</p>
                                <p className="text-justify mb-4 text-red-600">
                                    ১। ইতিপূর্বে ২০২৪-২০২৫ করবর্ষ পর্যন্ত এস.আর.ও নং-১৭-আইন/আয়কর-২৪/২০২৪ এর মাধ্যমে চূড়ান্ত করদায় ছিল, যা এস.আর.ও নং ১৫১-আইন/আয়কর-৬/২০২৫ এর মাধ্যমে বাতিল করা হয়েছে।
                                </p>

                                <hr className="my-6 border-gray-300" />

                                {/* তথ্যসূত্র Table */}
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border border-gray-300 table-auto">
                                        <caption className="caption-top text-left font-semibold mb-2">তথ্যসূত্র</caption>
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="border px-4 py-2 text-center">ক্রমিক</th>
                                                <th className="border px-4 py-2 text-center">মন্তব্য</th>
                                                <th className="border px-4 py-2 text-center">আয় কর এস আর ও</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* যদি ডাইনামিক row থাকে তাহলে map ব্যবহার করা যাবে */}
                                            <tr>
                                                <td className="border px-4 py-2 text-center">১</td>
                                                <td className="border px-4 py-2">উদাহরণ মন্তব্য</td>
                                                <td className="border px-4 py-2 text-center">এস.আর.ও নং-১৫১</td>
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
                                <h2 className="text-center text-2xl font-bold mb-4">
                                    রিটার্ন দাখিলে অব্যাহতি প্রাপ্ত ব্যক্তিগণ
                                </h2>

                                <p className="text-justify mb-4 font-sans">
                                    আয়কর আইন, ২০২৩ এর{" "}
                                    <Link href="/tax-act-section/211" className="text-blue-600 underline">
                                        ধারা-১৬৬(২)
                                    </Link>{" "}
                                    অনুযায়ী, যে সকল করদাতাগণকে রিটার্ন দাখিল হতে অব্যহতি প্রদান করা হয়েছে,
                                    সে সকল করদাতার আয়কর আইন, ২০২৩ এর{" "}
                                    <Link href="/tax-act-section/57" className="text-blue-600 underline">
                                        ধারা ৩০
                                    </Link>{" "}
                                    এ উল্লেখিত আয়ের খাতসমূহের বিপরীতে এই আইনের অংশ-৭ এর অন্তর্ভুক্ত সকল ধারায় কর্তিত কর চূড়ান্ত কর দায় হিসেবে বিবেচিত হবে।
                                </p>

                                <p className="text-justify mb-4">
                                    <strong>রেফারেন্স: </strong>
                                    <Link href="/tax-act-section/208" className="text-blue-600 underline">
                                        ধারা-১৬৩(১১)
                                    </Link>
                                </p>

                                <p className="text-red-600 font-semibold mb-2">নোট:</p>
                                <p className="text-justify mb-4 text-red-600">
                                    ১। ইতিপূর্বে ২০২৪-২০২৫ করবর্ষ পর্যন্ত রিটার্ন দাখিল হতে অব্যহতি প্রাপ্ত ব্যক্তিগণের সঞ্চয়ী আমানত ও স্থায়ী আমানত ইত্যাদি থেকে অর্জিত সুদ এস.আর.ও নং-২৫৩-আইন/আয়কর-০৯/২০২৩ এর মাধ্যমে চূড়ান্ত করদায় ছিল, যা এস.আর.ও নং ১৫১-আইন/আয়কর-৬/২০২৫ এর মাধ্যমে বাতিল করা হয়েছে।
                                </p>

                                <hr className="my-6 border-gray-300" />

                                {/* তথ্যসূত্র Table */}
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border border-gray-300 table-auto">
                                        <caption className="caption-top text-left font-semibold mb-2">তথ্যসূত্র</caption>
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="border px-4 py-2 text-center">ক্রমিক</th>
                                                <th className="border px-4 py-2 text-center">মন্তব্য</th>
                                                <th className="border px-4 py-2 text-center">আয় কর এস আর ও</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Dynamic row-এ map ব্যবহার করতে পারো */}
                                            <tr>
                                                <td className="border px-4 py-2 text-center">১</td>
                                                <td className="border px-4 py-2">উদাহরণ মন্তব্য</td>
                                                <td className="border px-4 py-2 text-center">এস.আর.ও নং-১৫১</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                    {
                        id === '3' && (
                            <div className="w-full md:w-2/3 mx-auto p-4">
                                <h2 className="text-center text-2xl font-bold mb-4">
                                    সঞ্চয়পত্র হতে অর্জিত মুনাফা
                                </h2>

                                <p className="text-justify mb-4 font-sans">
                                    যেকোনো স্বাভাবিক ব্যক্তি করদাতার সঞ্চয়পত্র হতে অর্জিত মুনাফার বিপরীতে কর্তিত কর চূড়ান্ত করদায় হিসেবে বিবেচিত।
                                </p>

                                <p className="text-justify mb-4">
                                    <strong>রেফারেন্স: </strong>
                                    <Link href="/tax-act-section/208" className="text-blue-600 underline">
                                        ধারা-১৬৩(১১)
                                    </Link>
                                </p>

                                <p className="text-red-600 font-semibold mb-2">নোট:</p>
                                <p className="text-justify mb-4 text-red-600">
                                    ১। ইতিপূর্বে ২০২৪-২০২৫ করবর্ষ পর্যন্ত এস.আর.ও নং-২৫৩-আইন/আয়কর-০৯/২০২৩ এর মাধ্যমে চূড়ান্ত করদায় ছিল, যা এস.আর.ও নং ১৫১-আইন/আয়কর-৬/২০২৫ এর মাধ্যমে বাতিল করা হয়েছে।
                                </p>

                                <hr className="my-6 border-gray-300" />

                                {/* তথ্যসূত্র Table */}
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border border-gray-300 table-auto">
                                        <caption className="caption-top text-left font-semibold mb-2">তথ্যসূত্র</caption>
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="border px-4 py-2 text-center">ক্রমিক</th>
                                                <th className="border px-4 py-2 text-center">মন্তব্য</th>
                                                <th className="border px-4 py-2 text-center">আয় কর এস আর ও</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Dynamic row-এ map ব্যবহার করতে পারো */}
                                            <tr>
                                                <td className="border px-4 py-2 text-center">১</td>
                                                <td className="border px-4 py-2">উদাহরণ মন্তব্য</td>
                                                <td className="border px-4 py-2 text-center">এস.আর.ও নং-১৫১</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                    {
                        id === '4' && (
                            <div className="w-full md:w-2/3 mx-auto p-4">
                                <h2 className="text-center text-2xl font-semibold mb-4">
                                    রপ্তানির বিপরীতে প্রাপ্ত নগদ ভর্তুকি
                                </h2>

                                <p className="text-justify leading-relaxed">
                                    যেকোনো ব্যক্তি করদাতার রপ্তানির বিপরীতে প্রাপ্ত নগদ ভর্তুকির বিপরীতে
                                    কর্তিত কর চূড়ান্ত করদায় হিসেবে বিবেচিত।
                                </p>

                                <p className="my-4"></p>

                                <strong className="block text-justify mb-4">
                                    রেফারেন্স:{" "}
                                    <a href="/tax-act-section/208" className="text-blue-600 underline">
                                        ধারা-১৬৩(১১)
                                    </a>
                                </strong>

                                <p className="text-red-600 font-semibold">নোট:</p>

                                <p className="text-justify text-red-500 mb-4">
                                    ১। ইতিপূর্বে ২০২৪-২০২৫ করবর্ষ পর্যন্ত এস.আর.ও নং-২৫৩-আইন/আয়কর-০৯/২০২৩ এর
                                    মাধ্যমে চূড়ান্ত করদায় ছিল, যা এস.আর.ও নং ১৫১-আইন/আয়কর-৬/২০২৫ এর মাধ্যমে
                                    বাতিল করা হয়েছে।
                                </p>

                                <hr className="my-6" />

                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-300 text-sm">
                                        <caption className="caption-top font-semibold my-2">
                                            তথ্যসূত্র
                                        </caption>

                                        <thead className="bg-gray-200">
                                            <tr>
                                                <th className="border px-2 py-1">ক্রমিক</th>
                                                <th className="border px-2 py-1">মন্তব্য</th>
                                                <th className="border px-2 py-1">আয় কর এস আর ও</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td
                                                    className="border px-2 py-1 text-center text-gray-500"
                                                    colSpan={3}
                                                >
                                                    কোন তথ্য পাওয়া যায়নি
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
                                <h2 className="text-center text-2xl font-semibold mb-4">
                                    সম্পত্তি হস্তান্তর হতে/জমি বিক্রয় হতে অর্জিত মূলধনি আয়
                                </h2>

                                <p className="text-justify leading-relaxed">
                                    যেকোনো স্বাভাবিক ব্যক্তি করদাতার সম্পত্তি হস্তান্তর হতে অর্জিত
                                    মূলধনি আয়ের বিপরীতে কর্তিত কর চূড়ান্ত করদায় হিসেবে বিবেচিত।
                                </p>

                                <p className="my-4"></p>

                                <strong className="block text-justify mb-4">
                                    রেফারেন্স:{" "}
                                    <a href="/tax-act-section/208" className="text-blue-600 underline">
                                        ধারা-১৬৩(১১)
                                    </a>
                                </strong>

                                <p className="text-red-600 font-semibold">নোট:</p>

                                <p className="text-justify text-red-500 mb-4">
                                    ১। ইতিপূর্বে ২০২৪-২০২৫ করবর্ষ পর্যন্ত এস.আর.ও নং-২৮৬-আইন/আয়কর-১৬/২০২৩
                                    এর মাধ্যমে চূড়ান্ত করদায় ছিল, যা এস.আর.ও নং ১৫১-আইন/আয়কর-৬/২০২৫ এর
                                    মাধ্যমে বাতিল করা হয়েছে।
                                </p>

                                <hr className="my-6" />

                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-300 text-sm">
                                        <caption className="caption-top font-semibold my-2">
                                            তথ্যসূত্র
                                        </caption>

                                        <thead className="bg-gray-200">
                                            <tr>
                                                <th className="border px-2 py-1">ক্রমিক</th>
                                                <th className="border px-2 py-1">মন্তব্য</th>
                                                <th className="border px-2 py-1">আয় কর এস আর ও</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td
                                                    className="border px-2 py-1 text-center text-gray-500"
                                                    colSpan={3}
                                                >
                                                    কোন তথ্য পাওয়া যায়নি
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                    {
                        id === '6' && (
                            <div className="w-full md:w-2/3 mx-auto p-4">
                                <h2 className="text-center text-2xl font-semibold mb-4">
                                    বাণিজ্যিকভাবে পরিচালিত মোটরযান হতে কর সংগ্রহ
                                </h2>

                                <p className="text-justify leading-relaxed">
                                    যেকোনো ব্যক্তি করদাতার বাণিজ্যিকভাবে পরিচালিত মোটরযান হতে আয়ের
                                    বিপরীতে সংগৃহীত কর চূড়ান্ত করদায় হিসেবে বিবেচিত।
                                </p>

                                <p className="my-3"></p>

                                <p className="text-justify leading-relaxed">
                                    নোটঃ পরিগণিত আয়ের অধিক আয় প্রদর্শিত হলে উক্ত অধিক প্রদর্শিত আয়ের উপর
                                    নিয়মিত হারে কর পরিশোধ করতে হবে।
                                </p>

                                <p className="my-4"></p>

                                <strong className="block text-justify mb-4">
                                    রেফারেন্স:{" "}
                                    <a href="/tax-act-section/208" className="text-blue-600 underline">
                                        ধারা-১৬৩(১১)
                                    </a>
                                </strong>

                                <hr className="my-6" />

                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-300 text-sm">
                                        <caption className="caption-top font-semibold my-2">
                                            তথ্যসূত্র
                                        </caption>

                                        <thead className="bg-gray-200">
                                            <tr>
                                                <th className="border px-2 py-1">ক্রমিক</th>
                                                <th className="border px-2 py-1">মন্তব্য</th>
                                                <th className="border px-2 py-1">আয় কর এস আর ও</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td
                                                    className="border px-2 py-1 text-center text-gray-500"
                                                    colSpan={3}
                                                >
                                                    কোন তথ্য পাওয়া যায়নি
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }

                </div>

            </div>

            <GovernmentLinks />

        </div>
    )
}