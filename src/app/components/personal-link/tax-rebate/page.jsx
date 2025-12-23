'use client'
import React, { useState } from "react";
import { PersonalFeature } from "../PersonalFeature";
import TaxAccordions from "../PersonalTax";
import GovernmentLinks from "../../GovtLink";
import { Animations } from "../../Animations";

export default function Page() {

    const [netIncome, setNetIncome] = useState("");
    const [netInvestment, setNetInvestment] = useState("");

    // Numeric values
    const income = parseFloat(netIncome) || 0;
    const investment = parseFloat(netInvestment) || 0;

    // Eligible investment calculations
    const maxByIncome = income * 0.30;       // 30% of income
    const maxByLaw = 1500000;                // Maximum 15 lakh
    const eligibleInvestment = Math.min(investment, maxByIncome, maxByLaw);

    // Start tax rebate calculation slab-wise
    let rebate = 0;
    let remaining = eligibleInvestment;

    // 1st 2,50,000 → 15%
    if (remaining > 0) {
        const slab1 = Math.min(remaining, 250000);
        rebate += slab1 * 0.15;
        remaining -= slab1;
    }

    // Next 5,00,000 → 12%
    if (remaining > 0) {
        const slab2 = Math.min(remaining, 500000);
        rebate += slab2 * 0.12;
        remaining -= slab2;
    }

    // Rest → 10%
    if (remaining > 0) {
        rebate += remaining * 0.10;
    }

    // Convert English number to Bangla
    const toBanglaNumber = (num) => {
        return num.toString().replace(/[0-9]/g, d => "০১২৩৪৫৬৭৮৯"[d]);
    };

    // Final Rebate Logic
    const finalRebate =
        netInvestment === ""      // যদি বিনিয়োগ ঘর ফাঁকা থাকে
            ? income * 0.03        // → নীট আয়ের ৩% রিবেট
            : rebate;              // → স্ল্যাব অনুযায়ী রিবেট

    return (
        <div className="flex flex-col justify-start items-center gap-y-8 w-full mx-auto border-t border-t-gray-200">
            <Animations />
            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-between gap-x-10 w-10/12 -mt-15">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="col-md-6 order-1 order-md-2 w-full md:w-1/2 mx-auto">
                    <div className="my-2">
                        <div className="border border-gray-100 rounded shadow bg-white max-w-[600px] mx-auto">

                            {/* Header */}
                            <div className="bg-green-700 text-white text-center py-3 rounded-t">
                                <h1 className="text-4xl font-bold">কর রেয়াত ক্যালকুলেটর</h1>
                            </div>

                            {/* Body */}
                            <div className="grid grid-cols-12 gap-3 p-4 pb-0">

                                {/* Net Income */}
                                <div className="col-span-6 relative">
                                    <label htmlFor="net_income" className="block mb-1">
                                        করযোগ্য নীট আয়:
                                    </label>
                                    <span className="absolute left-2 -mt-px top-9 text-lg text-gray-500">৳</span>
                                    <input
                                        id="net_income"
                                        type="text"
                                        value={netIncome}
                                        onChange={(e) => setNetIncome(e.target.value)}
                                        placeholder="0.00"
                                        className="pl-6 block w-full border border-green-600 rounded-md py-2 px-2 shadow-sm outline-none"
                                    />
                                </div>

                                {/* Net Investment */}
                                <div className="col-span-6 relative">
                                    <label htmlFor="net_investment" className="block mb-1">
                                        রেয়াতযোগ্য মোট বিনিয়োগ:
                                    </label>
                                    <span className="absolute left-2 -mt-px top-9 text-lg text-gray-500">৳</span>
                                    <input
                                        id="net_investment"
                                        type="text"
                                        value={netInvestment}
                                        onChange={(e) => setNetInvestment(e.target.value)}
                                        placeholder="0.00"
                                        className="pl-6 block w-full border border-green-600 rounded-md py-2 px-2 shadow-sm outline-none"
                                    />
                                </div>

                                <div className="col-span-12 mt-5">
                                    <p className="text-center text-gray-600">
                                        কর রেয়াত গণনা হবে নিয়ম অনুযায়ী যোগ্য বিনিয়োগের ভিত্তিতে
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="border-t p-4 mt-16 text-center bg-gray-100 border-t-gray-200">
                                <h3 className="text-3xl font-bold">
                                    কর রিবেট : {toBanglaNumber(finalRebate.toFixed(2))} টাকা
                                </h3>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <GovernmentLinks />

        </div>
    );
}
