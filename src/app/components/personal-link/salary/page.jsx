'use client'
import React, { useEffect, useState } from "react";
import TaxAccordions from "../PersonalTax";
import { PersonalFeature } from "../PersonalFeature";
import GovernmentLinks from "../../GovtLink";
import { Animations } from "../../Animations";

export default function SalaryTaxCalculator() {
    // initial data taken from the provided HTML snapshot
    const payerCategoryOptions = [
        { value: 350000, label: "সাধারণ করদাতা" },
        { value: 400000, label: "মহিলা এবং 65 বছরের উপরে" },
        { value: 475000, label: "শারীরিকভাবে প্রতিবন্ধী/তৃতীয় লিঙ্গ" },
        { value: 500000, label: "মুক্তিযোদ্ধা" },
    ];

    const incomePlaceOptions = [
        { value: 5000, label: "ঢাকা ও চট্টগ্রাম সিটি কর্পোরেশন" },
        { value: 4000, label: "অন্যান্য সিটি কর্পোরেশন" },
        { value: 3000, label: "সিটি কর্পোরেশনের বাইরে" },
    ];

    // slabList interpreted as progressive tax brackets (annual)
    // original snapshot: {"100000":5,"400000":10,"500000":15,"500000.0000001":20,"2000000":25,"~":30}
    // we will normalize and sort by threshold. '~' denotes above last threshold rate
    const slabList = [
        { threshold: 100000, rate: 0.05 },
        { threshold: 400000, rate: 0.10 },
        { threshold: 500000, rate: 0.15 },
        { threshold: 500000.0000001, rate: 0.20 },
        { threshold: 2000000, rate: 0.25 },
        { threshold: Infinity, rate: 0.30 },
    ];

    const [selectedPayerCategory, setSelectedPayerCategory] = useState(350000);
    const [selectedIncomePlace, setSelectedIncomePlace] = useState(5000);
    const [monthlySalary, setMonthlySalary] = useState(0);
    const [alreadyPaid, setAlreadyPaid] = useState(0);
    const [monthlyDeductedTax, setMonthlyDeductedTax] = useState(0);
    const [annualTax, setAnnualTax] = useState(0);

    useEffect(() => {
        calculateTax();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedPayerCategory, selectedIncomePlace, monthlySalary, alreadyPaid]);

    function parseNumber(value) {
        const n = Number(String(value).replace(/[^0-9.\-]/g, ""));
        return isNaN(n) ? 0 : n;
    }

    function calculateProgressiveTax(taxableAmount) {
        if (taxableAmount <= 0) return 0;
        const ranges = [
            { from: 0, to: 100000, rate: 0.05 },
            { from: 100000, to: 400000, rate: 0.10 },
            { from: 400000, to: 500000, rate: 0.15 },
            { from: 500000, to: 2000000, rate: 0.20 },
            { from: 2000000, to: Infinity, rate: 0.30 }, // <- changed to 30%
        ];
        let tax = 0;
        for (let i = 0; i < ranges.length; i++) {
            const r = ranges[i];
            const lower = r.from;
            const upper = r.to;
            if (taxableAmount > lower) {
                const taxableInThisRange = Math.min(upper - lower, Math.max(0, taxableAmount - lower));
                tax += taxableInThisRange * r.rate;
            }
            if (upper === Infinity) break;
        }
        return tax;
    }


    function calculateTax() {
        const monthly = parseNumber(monthlySalary);
        const paid = parseNumber(alreadyPaid);
        const payerCategory = Number(selectedPayerCategory) || 0;
        const incomePlaceMonthly = Number(selectedIncomePlace) || 0;

        const annualSalary = monthly * 12;

        // We interpret selectedPayerCategory as an annual tax-free allowance (from snapshot values it looks like annual amounts)
        // selectedIncomePlace we will treat as monthly deduction (e.g., city allowance) -> converted to annual
        const annualIncomePlaceDeduction = incomePlaceMonthly * 12;

        const taxableAnnual = Math.max(0, annualSalary - payerCategory - annualIncomePlaceDeduction);

        const taxAnnual = calculateProgressiveTax(taxableAnnual);

        // alreadyPaid: treat as annual already paid amount if provided as annual, else if user enters monthly it's fine
        // Since original UI had 'alreadyPaid' likely as amount already paid this year, we will assume it's annual
        const netTaxAnnual = Math.max(0, taxAnnual - paid);

        const monthlyTax = netTaxAnnual / 12;

        setAnnualTax(Math.round(netTaxAnnual * 100) / 100);
        setMonthlyDeductedTax(Math.round(monthlyTax * 100) / 100);
    }

    return (
        <div className="flex flex-col justify-start gap-y-8 items-center mx-auto border-t border-t-gray-200">

            <Animations />
            <PersonalFeature />

            <div className="flex items-start justify-between -mt-15">


                <TaxAccordions />
                <div className="max-w-3xl p-4">
                    <div className="bg-white border border-green-600 rounded-lg shadow p-0 overflow-hidden" style={{ maxWidth: 600, margin: "0 auto" }}>
                        <div className="bg-green-600 text-white text-center p-4 rounded-t-lg">
                            <h1 className="text-xl font-bold">বেতনের বিপরীতে কর কর্তন <br />2025 - 26</h1>
                        </div>

                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="payerCategory" className="block text-sm font-medium text-gray-700">করদাতার শ্রেণী:</label>
                                <select
                                    id="payerCategory"
                                    value={selectedPayerCategory}
                                    onChange={(e) => setSelectedPayerCategory(Number(e.target.value))}
                                    className="mt-1 block w-full appearance-none rounded-md py-3 px-2 outline-none border border-green-600 shadow-sm focus:ring-green-500 focus:border-green-800"
                                >
                                    {payerCategoryOptions.map((opt) => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="incomePlace" className="block text-sm font-medium text-gray-700">আয়ের জায়গা:</label>
                                <select
                                    id="incomePlace"
                                    value={selectedIncomePlace}
                                    onChange={(e) => setSelectedIncomePlace(Number(e.target.value))}
                                    className="mt-1 block w-full appearance-none rounded-md py-3 px-2 outline-none border border-green-600 shadow-sm focus:ring-green-500 focus:border-green-800"
                                >
                                    {incomePlaceOptions.map((opt) => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="relative">
                                <label htmlFor="monthly_salary" className="block text-sm font-medium text-gray-700">মাসিক বেতন:</label>

                                <span className="absolute left-2 top-1/2 -translate-y-0.5 transform text-lg text-gray-500">৳</span>

                                <input
                                    id="monthly_salary"
                                    type="number"
                                    min="0"
                                    value={monthlySalary}
                                    onChange={(e) => setMonthlySalary(e.target.value)}
                                    className="mt-1 block w-full pl-5 rounded-md outline-none border border-green-600 appearance-none shadow-sm p-2"
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor="alreadyPaid" className="block text-sm font-medium text-gray-700">উৎসে পরিশোধিত কর :</label>
                                <span className="absolute left-2 top-1/2 -translate-y-0.5 transform text-lg text-gray-500">৳</span>
                                <input
                                    id="alreadyPaid"
                                    type="number"
                                    min="0"
                                    value={alreadyPaid}
                                    onChange={(e) => setAlreadyPaid(e.target.value)}
                                    className="mt-1 pl-5 block w-full rounded-md outline-none border border-green-600 appearance-none shadow-sm p-2"
                                />
                            </div>
                        </div>

                        <div className="p-4 bg-gray-100 mt-10">
                            <h3 className="text-center text-xl font-semibold">মাসিক কর্তনকৃত করের  পরিমান  : {monthlyDeductedTax.toFixed(2)} টাকা</h3>
                        </div>

                    </div>

                    <div className="mt-10 text-center">
                        <a
                            href="https://bdtaxation.com/calculator/tax-deduction-against-salary-24-25"
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Calculate Your 2024-25 Salary Tax
                        </a>
                    </div>

                    <div className="mt-10">
                        <div className="prose max-w-full">
                            <h2 className="text-center font-bold text-2xl">বেতন কর ক্যালকুলেটর সম্পর্কে</h2>
                            <p className="mt-3 text-justify">
                                আয়কর আইন, ২০২৩-এর ধারা ৮৬ এবং ৮৭ অনুযায়ী, সংসদ সদস্যদের বেতন ও সম্মানী থেকে প্রতি মাসে উৎসে কর কর্তনের ব্যবস্থা করা হয়েছে।
                                কর কর্তনের বিষয়টি প্রতি মাসে গড় হারের ভিত্তিতে ক্যালকুলেট করার জন্য নির্দেশনা প্রদান করা হয়েছে।
                            </p>

                            <p className="mt-3 text-justify">
                                বেতন কর ক্যালকুলেটরটি হিসাব করে যে, একজন কর্মরত করদাতা মাসিক কত কর কর্তন করবে। একজন করদাতার মাসিক বেতন বার্ষিক ভিত্তিতে যোগ করা হয় এবং করমুক্ত পরিমাণ সর্বোচ্চ ৩% বা ট্যাক্সযোগ্য আয়ের ক্ষেত্রে সর্বোচ্চ ১০ লাখ টাকা হিসেবে ধারা অনুযায়ী নির্ধারিত হয়।
                                এই দুই ধাপের হিসাব দেখায় যে প্রতি মাসে কত কর কর্তন হবে।
                            </p>

                            <p className="mt-3 text-justify">
                                কর সম্পর্কে পর্যাপ্ত জ্ঞান নেই? চিন্তা নেই। আমাদের বেতন কর ক্যালকুলেটর টুলের মাধ্যমে, আপনি মাসিক কত কর কর্তন হবে তা দেখতে পারবেন।
                                শুধু আপনার মোট বেতন ও ভাতা প্রবেশ করান, এবং কর কর্তনকারী সংস্থা মাসিক ভিত্তিতে A-Challan এর মাধ্যমে সেই পরিমাণ বেতন থেকে কর্তন ও জমা দেবে।
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <GovernmentLinks />
        </div>
    );
}
