"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

function ServiceCard({ title, desc }) {
    return (
        <div className="group relative h-full rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <div className="relative z-10 flex gap-4">
                <div className="mt-1 text-emerald-600">
                    <CheckCircle size={22} />
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                        {title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function BDTaxationPage() {
    return (
        <section
            id="services"
            className="relative bg-gradient-to-b from-emerald-50 to-white py-14 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-5">

                {/* SECTION HEADER */}
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
                        BDTaxation এর প্রধান সেবা
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base">
                        ব্যক্তিগত ও কর্পোরেট ট্যাক্স সল্যুশনের জন্য
                        নির্ভরযোগ্য, আইনসম্মত এবং আপডেটেড সেবা
                    </p>
                </div>

                {/* SERVICES GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
                    <ServiceCard
                        title="Income Tax Calculation"
                        desc="গ্রস বেতন থেকে সকল ছাড়, রিবেট ও আইনসম্মত হিসাব অনুযায়ী সঠিক আয়কর নির্ধারণ।"
                    />
                    <ServiceCard
                        title="Return Preparation & Submission"
                        desc="আয়কর রিটার্ন প্রস্তুত, যাচাই এবং অনলাইন ই-রিটার্ন সাবমিশন পর্যন্ত সম্পূর্ণ সেবা।"
                    />
                    <ServiceCard
                        title="Expatriate / Foreigner Tax Support"
                        desc="প্রবাসী ও বিদেশি নাগরিকদের জন্য রেসিডেন্সি স্ট্যাটাস, কর ছাড় ও ট্রিটি গাইড।"
                    />
                    <ServiceCard
                        title="Payroll & Salary Deduction Setup"
                        desc="প্রতিষ্ঠানের জন্য বেতন কাঠামো, ট্যাক্স কাটা, বোনাস ও কমপ্লায়েন্স সেটআপ।"
                    />
                    <ServiceCard
                        title="Audit & Compliance Support"
                        desc="কর অডিট, নোটিশ, শুনানি প্রস্তুতি ও ডকুমেন্টেশন সহ পূর্ণ আইনি সহায়তা।"
                    />
                    <ServiceCard
                        title="Govt. Notices & Tax Updates"
                        desc="নতুন ফাইন্যান্স অ্যাক্ট, SRO, নোটিশ ও সংশোধিত কর আপডেট দ্রুত প্রদান।"
                    />
                    <ServiceCard
                        title="Tax Planning & Investment Guidance"
                        desc="আইনসম্মত কর সেভিংস, রিবেট সুবিধা ও দীর্ঘমেয়াদি বিনিয়োগ পরিকল্পনা।"
                    />
                    <ServiceCard
                        title="Corporate & Business Tax"
                        desc="কোম্পানি, পার্টনারশিপ ও এনজিওদের জন্য রিটার্ন ফাইলিং ও কর্পোরেট কমপ্লায়েন্স।"
                    />
                    <ServiceCard
                        title="TIN, BIN & Tax Certificate"
                        desc="e-TIN, BIN, কর সার্টিফিকেট ও সরকারি ভেরিফিকেশন সহ সম্পূর্ণ প্রসেসিং।"
                    />
                </div>
            </div>
        </section>
    );
}
