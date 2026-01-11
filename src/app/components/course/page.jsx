"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AllCourses() {
    const packages = [
        {
            id: 1,
            title: "১৮০ দিন- ৬ মাস",
            desc: "ওয়েবসাইট এবং অ্যাপের সকল তথ্যের ফুল অ্যাক্সেস",
            oldPrice: '২০০',
            price: '১৫০',
            duration: "6 Months",
            link: "/mini",
        },
        {
            id: 2,
            title: "৩৬৫ দিন - ১ বছর",
            desc: "ওয়েবসাইট এবং অ্যাপের সকল তথ্যের ফুল অ্যাক্সেস",
            price: '২০০',
            oldPrice: '365',
            duration: "1 Year",
            link: "/max",
        },
        {
            id: 7,
            title: "৭৩০ দিন - ২ বছর",
            desc: "ওয়েবসাইট এবং অ্যাপের সকল তথ্যের ফুল অ্যাক্সেস",
            price: '৪০০',
            oldPrice: '৭৩০',
            duration: "2 Years",
            link: "/ultra",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-300 flex flex-col items-start relative">
            {/* Breadcrumb */}
            <div className="flex flex-col w-full gap-y-2 h-32 sm:h-40 bg-gray-100 items-center justify-center">
                <div className="text-xs text-gray-600">
                    <span className="text-green-600 font-semibold">হোম</span> &gt;{" "}
                    <span className="uppercase">All Courses</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-center">All Courses</h1>
            </div>

            {/* Course Card */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-7 p-10">
                <div className="bg-white shadow p-3 border border-gray-100 hover:shadow-lg transition">
                    <h1 className="text-center w-full text-2xl border-b border-b-gray-400">ভিডিও কোর্স</h1>
                    <div className="relative">
                        <img
                            src="/logo.png"
                            alt="Course Image"
                            className="rounded-lg w-full h-full object-cover object-center"
                        />
                        <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                            Featured
                        </span>
                    </div>

                    <div className="mt-3 w-full flex flex-col">
                        <p className="text-sm text-gray-800">
                            <span className="font-semibold text-yellow-500">★ ★ ★ ★ ☆</span>{" "}
                            <span className="text-gray-400 text-sm">(1)</span>
                        </p>
                        <h2 className=" text-gray-800 mt-1">
                            ২০২৪-২৫: প্রাইভেট চাকুরিজীবীর ট্যাক্স প্রস্তুতি
                        </h2>

                        <p className="text-xs text-gray-500 mt-1">
                            📚 ভিডিও কোর্স | 👨‍🎓 518 Students | 🎥 45 Lectures
                        </p>

                        <div className="flex items-center mt-3">
                            <Image
                                src="/favicon.ico"
                                alt="Logo"
                                width={30}
                                height={30}
                                className="rounded-full"
                            />
                            <div className="ml-2">
                                <p className="text-sm font-semibold text-green-700">
                                    TaxLine BD
                                </p>
                                <p className="text-xs text-gray-500">Expert in tax</p>
                            </div>
                        </div>

                        <div className="mt-3 flex items-center gap-2">
                            <p className="text-green-700 font-semibold text-3xl">300.00৳</p>
                            <p className="text-gray-400 line-through text-sm">900.00৳</p>
                        </div>

                        <Link href="/components/course/course-details" className="w-full mt-5 border font-medium border-blue-600 text-blue-600 text-center text-base py-2 hover:bg-blue-600 hover:text-white">
                            কোর্স বিস্তারিত
                        </Link>
                    </div>
                </div>
                {packages.map((pkg) => (
                    <div
                        key={pkg.id}
                        className="cursor-pointer"
                        onClick={() => window.location.href = `/components/course/${pkg.link}`}
                    >
                        <div className=" bg-white shadow p-3 border border-gray-100 hover:shadow-lg transition">

                            <img
                                src="/animation/banner1.png"
                                alt={pkg.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Content Section */}
                            <div className="p-4 flex flex-col justify-between h-full">
                                {/* Title & Description */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-1">{pkg.title}</h2>
                                    <p className="text-gray-600 text-base mb-3">{pkg.desc}</p>
                                </div>

                                {/* Seller Info */}
                                <div className="flex items-center mb-3">
                                    <Image
                                        src="/favicon.ico"
                                        alt="Seller Logo"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className="ml-2">
                                        <p className="text-sm font-semibold text-green-700">TaxLine BD</p>
                                        <p className="text-xs text-gray-500">Expert in tax</p>
                                    </div>
                                </div>

                                {/* Price & Duration */}
                                <div className="flex flex-col items-center mb-3">
                                    <div className="flex items-baseline gap-2">
                                        {pkg.oldPrice && (
                                            <span className="line-through text-gray-800 text-lg">৳{pkg.oldPrice}</span>
                                        )}
                                        <span className="font-extrabold text-green-700 text-4xl">৳{pkg.price}</span>
                                    </div>
                                    <span className="text-lg text-gray-500 mt-1">{pkg.duration}</span>
                                </div>

                                {/* Buy Button */}
                                <button className="w-full bg-green-600 text-white font-semibold rounded-lg py-2 text-base hover:bg-green-700 transition">
                                    কিনতে হবে
                                </button>
                            </div>
                        </div>
                    </div>
                ))}


            </div>

            <div className="mt-12 w-full bg-white shadow-lg p-6">
                <h2 className="text-center font-semibold text-gray-700 mb-4">
                    প্রযোজ্য সরকারি লিংক
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {[
                        "ই-টিডিএস",
                        "ই-টিআইএন",
                        "এ-চালান",
                        "এনবিআর ওয়েবসাইট",
                        "সোনালী ব্যাংক পেমেন্ট",
                        "ই-রিটার্ন ওয়েবসাইট",
                        "রিটার্ন নির্দেশিকা",
                    ].map((item, idx) => (
                        <button
                            key={idx}
                            className="bg-red-600 text-white text-sm px-3 py-2 rounded hover:bg-red-700"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>


        </div>
    );
}
