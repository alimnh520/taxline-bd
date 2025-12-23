'use client';

import { Animations } from "../../Animations";
import GovernmentLinks from "../../GovtLink";
import { PersonalFeature } from "../PersonalFeature";
import TaxAccordions from "../PersonalTax";

export default function TaxLaw() {

    return (
        <div className="flex flex-col justify-start gap-y-8 items-center mx-auto border-t border-t-gray-200">
            <Animations />
            <PersonalFeature />

            <div className="flex items-start justify-between gap-x-8 -mt-15">

                <TaxAccordions />

                <div className="max-w-3xl p-4 flex flex-col gap-y-6">

                    {/* Salary Tax Calculator Card */}
                    <div className="w-full mx-auto">
                        <div className="bg-white border border-green-600 rounded-lg shadow p-0 overflow-hidden" style={{ maxWidth: 600, margin: "0 auto" }}>
                            {/* Header */}
                            <div className="bg-green-600 text-white text-center p-4 rounded-t-lg">
                                <h1 className="text-xl font-bold leading-tight">
                                    বেতনের বিপরীতে কর কর্তন <br />2025 - 26
                                </h1>
                            </div>

                            {/* Form Inputs */}
                            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <label htmlFor="payerCategory" className="block text-sm font-medium text-gray-700 mb-1">
                                        করদাতার শ্রেণী:
                                    </label>

                                    <select
                                        id="payerCategory"
                                        className="mt-1 block w-full border appearance-none border-green-600 rounded-md py-2 px-2 shadow-sm focus:ring-green-500 focus:border-green-800 outline-none"
                                    >
                                        <option value="350000">সাধারণ করদাতা</option>
                                        <option value="400000">মহিলা এবং 65 বছরের উপরে</option>
                                        <option value="475000">শারীরিকভাবে প্রতিবন্ধী/তৃতীয় লিঙ্গ</option>
                                        <option value="500000">মুক্তিযোদ্ধা</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="incomePlace" className="block text-sm font-medium text-gray-700 mb-1">
                                        আয়ের জায়গা:
                                    </label>
                                    <select
                                        id="incomePlace"
                                        className="mt-1 block w-full border appearance-none border-green-600 rounded-md py-2 px-2 shadow-sm focus:ring-green-500 focus:border-green-800 outline-none"
                                    >
                                        <option value="5000">ঢাকা ও চট্টগ্রাম সিটি কর্পোরেশন</option>
                                        <option value="4000">অন্যান্য সিটি কর্পোরেশন</option>
                                        <option value="3000">সিটি কর্পোরেশনের বাইরে</option>
                                    </select>
                                </div>

                                <div className="relative">
                                    <label htmlFor="monthly_salary" className="block text-sm font-medium text-gray-700 mb-1">
                                        মাসিক বেতন:
                                    </label>
                                    <span className="absolute left-2 top-1/2 -translate-y-0.5 transform text-lg text-gray-500">৳</span>
                                    <input
                                        id="monthly_salary"
                                        type="number"
                                        min="0"
                                        className="mt-1 pl-5 block w-full border border-green-600 rounded-md py-2 px-2 shadow-sm outline-none"
                                    />
                                </div>

                                <div className=" relative">
                                    <label htmlFor="alreadyPaid" className="block text-sm font-medium text-gray-700 mb-1">
                                        উৎসে পরিশোধিত কর :
                                    </label>
                                    <span className="absolute left-2 top-1/2 -translate-y-0.5 transform text-lg text-gray-500">৳</span>
                                    <input
                                        id="alreadyPaid"
                                        type="number"
                                        min="0"
                                        className="mt-1 pl-5 block w-full border border-green-600 rounded-md py-2 px-2 shadow-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Monthly Tax Output */}
                            <div className="p-4 bg-gray-100 mt-6 text-center text-2xl font-semibold">
                                মাসিক কর্তনকৃত করের পরিমান : ০.০০ টাকা
                            </div>

                        </div>

                        {/* Bottom Button */}
                        <div className="mt-6 text-center">
                            <a
                                href="https://bdtaxation.com/calculator/tax-deduction-against-salary-24-25"
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Calculate Your 2024-25 Salary Tax
                            </a>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="pt-5 prose max-w-full">
                        <h2 className="text-2xl font-bold text-center mb-4">বেতন কর ক্যালকুলেটর সম্পর্কে</h2>
                        <p>
                            আয়কর আইন, ২০২৩-এর ধারা ৮৬ এবং ৮৭ অনুযায়ী, সংসদ সদস্যদের বেতন ও সম্মানী থেকে প্রতি মাসে উৎসে কর কর্তনের ব্যবস্থা করা হয়েছে।
                            কর কর্তনের বিষয়টি প্রতি মাসে গড় হারের ভিত্তিতে ক্যালকুলেট করার জন্য নির্দেশনা প্রদান করা হয়েছে।
                        </p>
                        <p>
                            বেতন কর ক্যালকুলেটরটি হিসাব করে যে, একজন কর্মরত করদাতা মাসিক কত কর কর্তন করবে। একজন করদাতার মাসিক বেতন বার্ষিক ভিত্তিতে যোগ করা হয় এবং করমুক্ত পরিমাণ সর্বোচ্চ ৩% বা ট্যাক্সযোগ্য আয়ের ক্ষেত্রে সর্বোচ্চ ১০ লাখ টাকা হিসেবে ধারা অনুযায়ী নির্ধারিত হয়।
                            এই দুই ধাপের হিসাব দেখায় যে প্রতি মাসে কত কর কর্তন হবে।
                        </p>
                        <p>
                            কর সম্পর্কে পর্যাপ্ত জ্ঞান নেই? চিন্তা নেই। আমাদের বেতন কর ক্যালকুলেটর টুলের মাধ্যমে, আপনি মাসিক কত কর কর্তন হবে তা দেখতে পারবেন।
                            শুধু আপনার মোট বেতন ও ভাতা প্রবেশ করান, এবং কর কর্তনকারী সংস্থা মাসিক ভিত্তিতে A-Challan এর মাধ্যমে সেই পরিমাণ বেতন থেকে কর্তন ও জমা দেবে।
                        </p>
                    </div>

                </div>
            </div>
            <GovernmentLinks />
        </div>

    );
}