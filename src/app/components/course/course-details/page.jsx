"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CourseDetails() {
    const [openIndex, setOpenIndex] = useState(null);
    const [selectTab, setSelectTab] = useState('Syllabus');
    const [accept, setAccept] = useState(false);

    const syllabus = [
        "মডিউল ১: ট্যাক্স",
        "মডিউল ২: হোল্ডিং পরিচিতি",
        "মডিউল ৩: আয়কর বিষয়ক শব্দের পরিচিতি",
        "মডিউল ৪: চাকুরি খাতের আইন সংক্রান্ত",
        "মডিউল ৫: বেতন কর নির্ধারণ",
        "মডিউল ৬: রিটার্ন প্রস্তুতি",
        "মডিউল ৭: অন্যান্য আয়কর সম্পর্কিত বিষয় পর্যালোচনা",
        "মডিউল ৮: সারচার্জ",
        "মডিউল ৯: সম্পদ ও দায় বিবরণী",
        "মডিউল ১০: আয়কর রিটার্ন দাখিল (অনলাইন রিটার্ন)",
    ];

    const openPageText = [
        "স্বাগতম ভিডিও",
        "প্রোগ্রাম পরিচিতি"
    ]

    return (
        <div className="bg-gray-50 min-h-screen px-3 md:px-10">
            <div className="flex flex-col w-full gap-y-2 h-32 sm:h-40 bg-gray-100 items-center justify-center">
                <div className="text-xs text-gray-600">
                    <span className="text-green-600 font-semibold">হোম</span> &gt;{" "}
                    <span className="uppercase">২০২৫-২৬: প্রাইভেট চাকুরিজীবীর রিটার্ন প্রস্তুতি</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl text-center">২০২৫-২৬: প্রাইভেট চাকুরিজীবীর রিটার্ন প্রস্তুতি</h1>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {/* Left Section */}
                <div className="md:col-span-2 bg-white rounded-lg shadow p-4">
                    <Image
                        src="/logo.jpg"
                        alt="Course Banner"
                        width={800}
                        height={400}
                        className="h-72 rounded-lg mb-4"
                    />

                    {/* Tabs */}
                    <div className="flex border-b">
                        {["Syllabus", "Teachers (1)", "Reviews (1)"].map((tab, idx) => (
                            <button
                                key={idx}
                                className={`px-4 py-2 text-sm font-semibold ${tab === selectTab
                                    ? "border-b-2 border-green-600 bg-gray-300 text-green-700"
                                    : "text-gray-400"
                                    }`}
                                onClick={() => setSelectTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Syllabus */}
                    {
                        selectTab === "Syllabus" && (
                            <div className="mt-3">
                                {syllabus.map((item, index) => (
                                    <div
                                        key={index}
                                        className="border w-full border-gray-200 mb-2 text-sm overflow-hidden"
                                    >
                                        <button
                                            onClick={() =>
                                                setOpenIndex(openIndex === index ? null : index)
                                            }
                                            className="w-full text-left px-3 py-2 font-medium text-green-700 hover:bg-green-50"
                                        >
                                            {item}
                                        </button>
                                        {openIndex === index && (
                                            <Link href="" className="w-full px-4 py-2 bg-gray-50 text-gray-600 text-xs">
                                                {`>${openPageText[index]}`}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )
                    }

                    {
                        selectTab === "Teachers (1)" && (
                            <div className="mt-3">
                                <div className="w-60 h-auto p-2 flex border border-gray-200 flex-col items-start gap-y-3 justify-center">
                                    <img src="/logo.jpg" className="w-full h-40" alt="" />
                                    <p className="border-b border-b-gray-200 pb-2 text-sm w-full">TaxLine BD</p>
                                    <p className="border-b border-b-gray-200 pb-2 text-sm w-full">Expert in Tax</p>
                                    <p className="border-b border-b-gray-200 pb-2 text-sm w-full">15 years experience</p>
                                </div>
                            </div>
                        )
                    }

                </div>

                {/* Right Section */}
                <div className="bg-white shadow p-5">
                    <h2 className="text-green-700 text-2xl font-semibold w-full text-center pb-2 border-b border-b-gray-200">
                        ৳ 300{" "}
                        <span className="text-gray-400 line-through text-lg ml-1">
                            ৳ 900
                        </span>
                    </h2>
                    <p className="text-sm mt-2 bg-green-800/20 p-6 border leading-7 border-green-600">
                        আপনি একটি ফ্রি প্যাকেজ (১৮০ দিন - ৬ মাস) পাচ্ছেন!{" "}
                        <Link href="" className="px-3 border ml-4 mt-1 border-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-300 rounded py-2">
                            এখনই দেখুন
                        </Link>
                    </p>

                    <div className="mt-4 space-y-2 text-sm">
                        <div className="flex justify-between border-b border-b-gray-200 pb-2">
                            <span>Category</span> <span className="font-medium">রিটার্ন টিউটোরিয়াল</span>
                        </div>
                        <div className="flex justify-between border-b border-b-gray-200 pb-2">
                            <span>Duration</span> <span className="font-medium">3 Months</span>
                        </div>
                        <div className="flex justify-between border-b border-b-gray-200 pb-2">
                            <span>Modules</span> <span className="font-medium">13</span>
                        </div>
                        <div className="flex justify-between border-b border-b-gray-200 pb-2">
                            <span>Classes / Items</span> <span className="font-medium">45</span>
                        </div>
                        <div className="flex justify-between border-b border-b-gray-200 pb-2">
                            <span>Coupon Applied</span> <span className="font-medium">0</span>
                        </div>
                    </div>

                    <div className="flex items-center mt-3 space-x-2">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={accept}
                            onChange={(e) => setAccept(e.target.checked)} // ✅ এখানেই state আপডেট হবে
                            className="accent-green-600 w-4 h-4 cursor-pointer"
                        />
                        <label
                            htmlFor="terms"
                            className="text-sm text-gray-700 cursor-pointer select-none"
                        >
                            আমি শর্তাবলী পড়েছি এবং এতে সম্মত।
                        </label>
                    </div>

                    <button className={`w-full ${accept ? "bg-green-800 pointer-events-auto" : "bg-green-200 pointer-events-none"} hover:bg-green-800 text-white py-2 mt-4 rounded`}>
                        কোর্সে ভর্তি হন
                    </button>
                </div>
            </div>
        </div>
    );
}
