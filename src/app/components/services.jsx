"use client";
import { CheckCircle } from "lucide-react";
import React from "react";

function ServiceCard({ title, desc, icon }) {
    return (
        <div className="p-2 sm:p-6 rounded-2xl bg-[#dff3e9] border border-[#17982f] shadow hover:shadow-2xl transition w-full h-full sm:-skew-x-12">
            <div className="flex items-start gap-4 sm:skew-x-12">
                {/* <div className="text-3xl">{icon}</div> */}
                <div className="mt-1 text-emerald-600 hidden md:block">
                    <CheckCircle size={22} />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 text-lg">{title}</h4>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default function BDTaxationPage() {
    return (
        <div className="mt-5 sm:mt-8 sm:py-8 py-4">
            <main>

                {/* SERVICES SECTION */}
                <section id="services" className="max-w-6xl mx-auto space-y-6 sm:space-y-10 px-6 sm:mt-5">

                    <div className="w-full flex justify-center">
                        <div className="ribbon text-lg md:text-2xl font-bold text-white tracking-wide pb-2 md:pb-5 drop-shadow-2xl">TaxLine BD — এর প্রধান সেবা</div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                        <ServiceCard
                            title="Income Tax Calculation"
                            desc="গ্রস বেতন থেকে সব ধরনের ছাড়, রিবেট, ও আইনসম্মত কাটা হিসাব করে সঠিক কর নির্ধারণ।"
                        />
                        <ServiceCard
                            title="Return Preparation & Submission"
                            desc="আয়কর রিটার্ন পূরণ, যাচাই, প্রয়োজনীয় ডকুমেন্ট তৈরি, এবং অনলাইন ই-রিটার্ন সাবমিট পর্যন্ত সম্পূর্ণ সেবা।"
                        />
                        <ServiceCard
                            title="Expatriate / Foreigner Tax Support"
                            desc="বিদেশি নাগরিক বা প্রবাসীদের জন্য বিশেষায়িত ট্যাক্স গাইড: বাসিন্দা স্ট্যাটাস, কর ছাড়, ডাবল ট্যাক্স ট্রিটি ইত্যাদি।"
                        />
                        <ServiceCard
                            title="Payroll & Salary Deduction Setup"
                            desc="যেকোনো প্রতিষ্ঠানের জন্য পূর্ণাঙ্গ বেতন কাঠামো, ট্যাক্স কাটা, বোনাস ক্যালকুলেশন ও সরকারি আইন অনুযায়ী সেটআপ।"
                        />
                        <ServiceCard
                            title="Audit & Compliance Support"
                            desc="কর অডিট হলে ডকুমেন্ট প্রুফ, ব্যাখ্যা, শুনানি প্রস্তুতি থেকে শুরু করে সম্পূর্ণ আইনি সহায়তা।"
                        />
                        <ServiceCard
                            title="Govt. Notices & Tax Updates"
                            desc="ফাইন্যান্স অ্যাক্ট, নতুন নোটিশ, সংশোধিত ট্যাক্স রেট, SRO — সব আপডেট দ্রুত সরবরাহ।"
                        />
                        <ServiceCard
                            title="Tax Planning & Investment Guidance"
                            desc="আইনসম্মত কর সেভিংস, রিবেট পাওয়ার উপায়, সঞ্চয় স্কিম, বিনিয়োগ পরিকল্পনা ইত্যাদির গাইডেন্স।"
                        />
                        <ServiceCard
                            title="Corporate & Business Tax"
                            desc="কোম্পানি, পার্টনারশিপ, এনজিও – সবার জন্য রিটার্ন ফাইলিং, হিসাব যাচাই, ট্যাক্স রিবেট ও কম্প্লায়েন্স।"
                        />
                        <ServiceCard
                            title="TIN, BIN, Tax Certificate Support"
                            desc="e-TIN, BIN, ট্যাক্স সার্টিফিকেট, কর শনাক্তকরণ, এবং সরকারি ভেরিফিকেশন সহ সম্পূর্ণ প্রসেসিং।"
                        />
                    </div>
                </section>

            </main>
        </div>
    );
}
