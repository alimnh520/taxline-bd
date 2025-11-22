"use client";

import Image from "next/image";
import Link from "next/link";

export default function AllCourses() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-start">
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
            <div className="w-10/12 mx-auto flex flex-col items-center sm:items-start justify-start">
                <div className="mt-10 w-[95%] sm:w-96 bg-white shadow p-3 border border-gray-100 hover:shadow-lg transition">
                    <div className="relative">
                        <Image
                            src="/course-thumb.jpg" // 👉 এখানে নিজের ইমেজ দিন (public/course-thumb.jpg)
                            alt="Course Image"
                            width={350}
                            height={200}
                            className="rounded-lg"
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
                                src="/logo.jpg"
                                alt="Logo"
                                width={30}
                                height={30}
                                className="rounded-full"
                            />
                            <div className="ml-2">
                                <p className="text-sm font-semibold text-green-700">
                                    BD Taxation Team
                                </p>
                                <p className="text-xs text-gray-500">Expert in tax</p>
                            </div>
                        </div>

                        <div className="mt-3 flex items-center gap-2">
                            <p className="text-green-700 font-semibold text-lg">300.00৳</p>
                            <p className="text-gray-400 line-through text-sm">900.00৳</p>
                        </div>

                        <Link href="/components/course/course-details" className="w-full border font-medium border-blue-600 text-blue-600 text-center text-base py-2 hover:bg-blue-600 hover:text-white">
                            কোর্স বিস্তারিত
                        </Link>
                    </div>
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


        </div>
    );
}
