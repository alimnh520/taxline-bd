'use client'
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const BusinessCalculator = () => {
    return (
        <div className="w-full h-auto flex flex-col items-start gap-y-8 px-5 mt-8">
            <div className="w-full h-auto flex flex-col sm:flex-row sm:items-start items-center justify-between gap-x-7">

                <div className="w-[330px] h-auto flex flex-col justify-start">
                    <div className="ribbon2 text-center py-1 sm:py-2 text-white text-lg font-semibold rounded-md shadow-sm"><p>ব্যবসায়ে অনুমোদনযোগ্য খরচ সম্পর্কিত ক্যালকুলেটর</p></div>


                    <div className="w-full h-auto flex flex-col gap-y-1.5 mt-4">
                        <Link href="" className="bg-[#172d13] text-white border border-[#fff] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> আপ্যায়ন ব্যয়</Link>
                        <Link href="" className="bg-[#172d13] text-white border border-[#fff] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" />নমুনা ব্যয়</Link>
                        <Link href="" className="bg-[#172d13] text-white border border-[#fff] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> প্রচারণামূলক ব্যয়</Link>
                        <Link href="" className="bg-[#172d13] text-white border border-[#fff] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> বিদেশ ভ্রমণ ব্যয়</Link>
                        <Link href="" className="bg-[#172d13] text-white border border-[#fff] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> রয়্যালিটি ও অন্যান্য ব্যয়</Link>
                        <Link href="" className="bg-[#172d13] text-white border border-[#fff] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> হেড অফিস ও অন্যান্য ব্যয়</Link>
                    </div>

                </div>
                <div className="flex-1 h-auto mt-5 sm:mt-0">
                    <div className="ribbon2 text-center py-2 text-white text-lg font-semibold rounded-md shadow-sm"><p>কোম্পানির করদাতার জন্য প্রযোজ্য</p></div>
                    <div className="w-full sm:h-[280px] mt-5 grid sm:grid-cols-6 grid-cols-2 sm:grid-rows-2 px-5 gap-3 sm:px-12">
                        <Link href="" className="bg-[#172d13b7] h-28 sm:h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                            <div className="flex-1 bg-transparent px-1 text-center flex flex-col gap-y-6 items-center justify-center text-white">
                                <img src="/logo/green-check.png" className="w-6" alt="" />
                                <p className="text-sm">কোম্পানি কর হার</p>
                            </div>
                            <p className="text-[11px] bg-[#172d13] py-0.5 text-white w-full text-center font-semibold">BDTaxation</p>
                        </Link>
                        <Link href="" className="bg-[#172d13b7] h-28 sm:h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                            <div className="flex-1 bg-transparent px-1 text-center flex flex-col gap-y-6 items-center justify-center text-white">
                                <img src="/logo/green-check.png" className="w-6" alt="" />
                                <p className="text-sm">নূন্যতম করের পরিমাণ</p>
                            </div>
                            <p className="text-[11px] bg-[#172d13] py-0.5 text-white w-full text-center font-semibold">BDTaxation</p>
                        </Link>
                        <Link href="" className="bg-[#172d13b7] h-28 sm:h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                            <div className="flex-1 bg-transparent px-1 text-center flex flex-col gap-y-6 items-center justify-center text-white">
                                <img src="/logo/green-check.png" className="w-6" alt="" />
                                <p className="text-sm">কর কর্তনের খাতসমূহ</p>
                            </div>
                            <p className="text-[11px] bg-[#172d13] py-0.5 text-white w-full text-center font-semibold">BDTaxation</p>
                        </Link>
                        <Link href="" className="bg-[#172d13b7] h-28 sm:h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                            <div className="flex-1 bg-transparent px-1 text-center flex flex-col gap-y-6 items-center justify-center text-white">
                                <img src="/logo/green-check.png" className="w-6" alt="" />
                                <p className="text-sm">উৎসে কর সংগ্রহের খাতসমূহ</p>
                            </div>
                            <p className="text-[11px] bg-[#172d13b7] py-0.5 text-white w-full text-center font-semibold">BDTaxation</p>
                        </Link>
                        <Link href="" className="bg-[#172d13b7] h-28 sm:h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                            <div className="flex-1 bg-transparent px-1 text-center flex flex-col gap-y-6 items-center justify-center text-white">
                                <img src="/logo/green-check.png" className="w-6" alt="" />
                                <p className="text-sm">চূড়ান্ত করের খাতসমূহ</p>
                            </div>
                            <p className="text-[11px] bg-[#172d13] py-0.5 text-white w-full text-center font-semibold">BDTaxation</p>
                        </Link>
                        <Link href="" className="bg-[#172d13b7] h-28 sm:h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                            <div className="flex-1 bg-transparent px-1 text-center flex flex-col gap-y-6 items-center justify-center text-white">
                                <img src="/logo/green-check.png" className="w-6" alt="" />
                                <p className="text-sm">নূন্যতম করের খাতসমূহ</p>
                            </div>
                            <p className="text-[11px] bg-[#172d13] py-0.5 text-white w-full text-center font-semibold">BDTaxation</p>
                        </Link>
                        <Link href="" className="bg-[#172d13b7] h-28 sm:h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                            <div className="flex-1 bg-transparent px-1 text-center flex flex-col gap-y-6 items-center justify-center text-white">
                                <img src="/logo/green-check.png" className="w-6" alt="" />
                                <p className="text-sm">হ্রাসকৃত আয় ও কর</p>
                            </div>
                            <p className="text-[11px] bg-[#172d13] py-0.5 text-white w-full text-center font-semibold">BDTaxation</p>
                        </Link>
                        <Link href="" className="bg-[#172d13b7] h-28 sm:h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                            <div className="flex-1 bg-transparent px-1 text-center flex flex-col gap-y-6 items-center justify-center text-white">
                                <img src="/logo/green-check.png" className="w-6" alt="" />
                                <p className="text-sm">অব্যাহতি প্রাপ্ত আয়</p>
                            </div>
                            <p className="text-[11px] bg-[#172d13] py-0.5 text-white w-full text-center font-semibold">BDTaxation</p>
                        </Link>
                        <Link href="" className="bg-[#172d13b7] h-28 sm:h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                            <div className="flex-1 bg-transparent px-1 text-center flex flex-col gap-y-6 items-center justify-center text-white">
                                <img src="/logo/green-check.png" className="w-6" alt="" />
                                <p className="text-sm">বাণিজ্যিক গাড়ি কর</p>
                            </div>
                            <p className="text-[11px] bg-[#172d13] py-0.5 text-white w-full text-center font-semibold">BDTaxation</p>
                        </Link>
                        <Link href="" className="bg-[#172d13b7] h-28 sm:h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                            <div className="flex-1 bg-transparent px-1 text-center flex flex-col gap-y-6 items-center justify-center text-white">
                                <img src="/logo/green-check.png" className="w-6" alt="" />
                                <p className="text-sm">পরিবেশ সারচার্জের হার</p>
                            </div>
                            <p className="text-[11px] bg-[#172d13] py-0.5 text-white w-full text-center font-semibold">BDTaxation</p>
                        </Link>
                        <Link href="" className="bg-[#172d13b7] h-28 sm:h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                            <div className="flex-1 bg-transparent px-1 text-center flex flex-col gap-y-6 items-center justify-center text-white">
                                <img src="/logo/green-check.png" className="w-6" alt="" />
                                <p className="text-sm">অবচয় ভাতার হার</p>
                            </div>
                            <p className="text-[11px] bg-[#172d13] py-0.5 text-white w-full text-center font-semibold">BDTaxation</p>
                        </Link>
                        <Link href="" className="bg-[#172d13b7] h-28 sm:h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden">
                            <div className="flex-1 bg-transparent px-1 text-center flex flex-col gap-y-6 items-center justify-center text-white">
                                <img src="/logo/green-check.png" className="w-6" alt="" />
                                <p className="text-sm">প্রতিষ্ঠান ফর্ম</p>
                            </div>
                            <p className="text-[11px] bg-[#172d13] py-0.5 text-white w-full text-center font-semibold">BDTaxation</p>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="w-full grid sm:grid-cols-3 grid-cols-1 sm:gap-x-7 gap-5">
                <div className="w-full flex flex-col items-start">
                    <div className="ribbon2 text-center py-2 text-white text-lg font-semibold rounded-md shadow-sm"><p>কর অফিস সম্পর্কিত</p></div>
                    <div className="w-full h-auto flex flex-col gap-y-1.5 mt-4">
                        <Link href="" className="bg-[#172d13b7] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> কর অঞ্চল</Link>
                        <Link href="" className="bg-[#172d13b7] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" />আপীল</Link>
                        <Link href="" className="bg-[#172d13b7] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> আইকর আইনে আপীল ট্রাইব্যুনাল</Link>
                        <Link href="" className="bg-[#172d13b7] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> ট্যাক্স হাইকোর্ট</Link>
                        <Link href="" className="bg-[#172d13b7] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> এডিআর</Link>
                    </div>
                </div>
                <div className="w-full flex flex-col items-start">
                    <div className="ribbon2 text-center py-2 text-white text-lg font-semibold rounded-md shadow-sm"><p>বিশেষ আইটেম</p></div>
                    <div className="w-full h-auto flex flex-col gap-y-1.5 mt-4">
                        <Link href="" className="bg-[#172d13b7] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> বাংলাদেশের সকল বাণিজ্যিক ব্যাংকের তালিকা</Link>
                        <Link href="" className="bg-[#172d13b7] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" />জিপিরেট</Link>
                        <Link href="" className="bg-[#172d13b7] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> পিডব্লিউডি হার</Link>
                        <Link href="" className="bg-[#172d13b7] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> এরিয়া কনভার্টার</Link>
                        <Link href="" className="bg-[#172d13b7] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> নোটিস</Link>
                    </div>
                </div>
                <div className="w-full flex flex-col items-start">
                    <div className="ribbon2 text-center py-2 text-white text-lg font-semibold rounded-md shadow-sm"><p>বিশেষ ক্যালকুলেটর</p></div>
                    <div className="w-full h-auto flex flex-col gap-y-1.5 mt-4">
                        <Link href="" className="bg-[#172d13b7] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> পুনঃউন্মোচন তারিখ ক্যালকুলেটর</Link>
                        <Link href="" className="bg-[#172d13b7] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-base rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" />আয় গোপনের জরিমানা</Link>
                    </div>
                </div>
            </div>


            <Swiper
                slidesPerView={1} // মোবাইল ডিফল্ট
                spaceBetween={10}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 10 }, // ছোট ট্যাবলেট
                    768: { slidesPerView: 3, spaceBetween: 10 }, // বড় ট্যাবলেট
                    1024: { slidesPerView: 4, spaceBetween: 10 }, // ল্যাপটপ
                    1280: { slidesPerView: 5, spaceBetween: 10 }, // বড় স্ক্রিন
                }}
                className="mySwiper w-full h-60 gap-6 mt-3"
            >
                {[
                    "জিপিএফ সুদ বাবদ আয় ই-রিটার্ন সিস্টেমে কিভাবে দেখাতে হবে",
                    "পেনশন বাবদ আয় ই-রিটার্ন সিস্টেমে কিভাবে দেখাতে হবে?",
                    "ডেভেলপার হতে প্রাপ্ত সাইনিং মানি বাবদ প্রাপ্ত আয় ই-রিটার্ন সিস্টে...",
                    "শেয়ার ক্রয়বিক্রয় ব্যবসা হতে প্রাপ্ত আয় ই-রিটার্ন সিস্টেমে কিভাবে...",
                    "শেয়ার ক্রয়বিক্রয় ব্যবসা হতে প্রাপ্ত আয় ই-রিটার্ন সিস্টেমে কিভাবে...",
                    "শেয়ার ক্রয়বিক্রয় ব্যবসা হতে প্রাপ্ত আয় ই-রিটার্ন সিস্টেমে কিভাবে...",
                    "শেয়ার ক্রয়বিক্রয় ব্যবসা হতে প্রাপ্ত আয় ই-রিটার্ন সিস্টেমে কিভাবে...",
                    "শেয়ার ক্রয়বিক্রয় ব্যবসা হতে প্রাপ্ত আয় ই-রিটার্ন সিস্টেমে কিভাবে..."
                ].map((text, index) => (
                    <SwiperSlide
                        key={index}
                        className="min-w-60 max-h-52 flex border border-[#172d13] rounded-xl bg-[#172d13] shadow hover:shadow-lg flex-col items-start"
                    >
                        <div className="h-40 w-full bg-gradient-to-br from-orange-100 to-blue-100 rounded-t-xl"></div>
                        <p className="flex-1 flex items-center justify-start text-sm px-3 py-2 text-white font-medium">
                            {text}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Link href="" className="px-4 py-3 mt-0 mt-3 self-center font-semibold text-sm bg-linear-to-r from-[#172d13] to-[#172d13b7] hover:shadow-2xl hover:bg-[#172d13] rounded-lg shadow text-white transition-all duration-300">View More Video</Link>

        </div>
    )
}