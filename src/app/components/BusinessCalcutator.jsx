'use client'
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const BusinessCalculator = () => {

    const companyTaxLinks = [
        { title: "কোম্পানি কর হার", link: "/components/company-link/company-tax" },
        { title: "নূন্যতম করের পরিমাণ", link: "/components/company-link/minimum-tax" },
        { title: "কর কর্তনের খাতসমূহ", link: "/components/company-link/final-tax" },
        { title: "উৎসে কর সংগ্রহের খাতসমূহ", link: "/components/company-link/" },
        { title: "চূড়ান্ত করের খাতসমূহ", link: "/components/company-link/" },
        { title: "নূন্যতম করের খাতসমূহ", link: "/components/company-link/" },
        { title: "হ্রাসকৃত আয় ও কর", link: "/components/company-link/" },
        { title: "অব্যাহতি প্রাপ্ত আয়", link: "/components/company-link/" },
        { title: "বাণিজ্যিক গাড়ি কর", link: "/components/company-link/" },
        { title: "পরিবেশ সারচার্জের হার", link: "/components/company-link/" },
        { title: "অবচয় ভাতার হার", link: "/components/company-link/" },
        { title: "প্রতিষ্ঠান ফর্ম", link: "/components/company-link/" },
    ];


    return (
        <div className="w-full h-auto flex flex-col items-start gap-y-8 px-5 mt-8">
            <div className="w-full h-auto flex flex-col sm:flex-row sm:items-start items-center justify-between gap-x-7">

                <div className="w-[330px] h-auto flex flex-col justify-start">
                    <div className="ribbon2 text-center py-1 sm:py-2 text-[#ff0000] text-lg font-semibold rounded-md shadow-sm"><p>ব্যবসায়ে খরচ সম্পর্কিত ক্যালকুলেটর</p></div>


                    <div className="w-full h-auto flex flex-col gap-y-1.5 mt-4">
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> আপ্যায়ন ব্যয়</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" />নমুনা ব্যয়</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> প্রচারণামূলক ব্যয়</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> বিদেশ ভ্রমণ ব্যয়</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> রয়্যালিটি ও অন্যান্য ব্যয়</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> হেড অফিস ও অন্যান্য ব্যয়</Link>
                    </div>

                </div>
                <div className="flex-1 h-auto mt-5 sm:mt-0">
                    <div className="ribbon2 text-center py-2 text-[#ff0000] text-lg font-semibold rounded-md shadow-sm">
                        <p>কোম্পানির করদাতার জন্য প্রযোজ্য</p>
                    </div>

                    <div className="w-full mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 md:px-6">
                        {companyTaxLinks.map((item, i) => (
                            <Link
                                key={i}
                                href={item.link}
                                className="relative bg-gradient-to-br from-[#dff3e9b7] to-[#b0e8c9] h-36  w-full rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-[#a8e0c3] flex flex-col items-center justify-start pt-2 gap-y-3 overflow-hidden group"
                            >
                                {/* Top Icon */}
                                <div className="z-10 bg-white w-12 h-12 p-1 rounded-full border flex items-center justify-center border-[#0f6f3f33] shadow-lg group-hover:animate-bounce transition-transform duration-300">
                                    <img src="/logo/green-check.png" className="w-10 opacity-100" alt="" />
                                </div>

                                {/* Card Title */}
                                <p className="text-[#0f3f2f] text-sm font-semibold leading-snug text-center px-1">
                                    {item.title}
                                </p>

                                {/* Footer Badge */}
                                <span className="absolute w-full bottom-0 bg-[#0f6f3f] text-white text-[11px] font-semibold px-3 py-1 text-center shadow-md">
                                    BDTaxation
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>


            </div>

            <div className="w-full grid sm:grid-cols-3 grid-cols-1 sm:gap-x-7 gap-5">
                <div className="w-full flex flex-col items-start">
                    <div className="ribbon2 text-center py-2 text-[#ff0000] text-lg font-semibold rounded-md shadow-sm"><p>কর অফিস সম্পর্কিত</p></div>
                    <div className="w-full h-auto flex flex-col gap-y-1.5 mt-4">
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> কর অঞ্চল</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" />আপীল</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> আইকর আইনে আপীল ট্রাইব্যুনাল</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> ট্যাক্স হাইকোর্ট</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> এডিআর</Link>
                    </div>
                </div>
                <div className="w-full flex flex-col items-start">
                    <div className="ribbon2 text-center py-2 text-[#ff0000] text-lg font-semibold rounded-md shadow-sm"><p>বিশেষ আইটেম</p></div>
                    <div className="w-full h-auto flex flex-col gap-y-1.5 mt-4">
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> বাংলাদেশের সকল বাণিজ্যিক ব্যাংকের তালিকা</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" />জিপিরেট</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> পিডব্লিউডি হার</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> এরিয়া কনভার্টার</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> নোটিস</Link>
                    </div>
                </div>
                <div className="w-full flex flex-col items-start">
                    <div className="ribbon2 text-center py-2 text-[#ff0000] text-lg font-semibold rounded-md shadow-sm"><p>বিশেষ ক্যালকুলেটর</p></div>
                    <div className="w-full h-auto flex flex-col gap-y-1.5 mt-4">
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" /> পুনঃউন্মোচন তারিখ ক্যালকুলেটর</Link>
                        <Link href="" className="bg-[#dff3e9] text-[#ff0000] border border-[#17982f] px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"> <img src="/logo/green-check.png" alt="" className="w-5" />আয় গোপনের জরিমানা</Link>
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
                        className="min-w-60 max-h-52 flex border border-[#dff3e9] rounded-xl bg-[#dff3e9] shadow hover:shadow-lg transition-all duration-300 flex-col"
                    >
                        <div className="h-40 w-full bg-white rounded-t-xl"></div>
                        <p className="flex-1 flex items-center text-sm px-3 py-2 text-[#00440c] font-medium">
                            {text}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Link
                href=""
                className="px-4 py-3 self-center font-semibold text-sm bg-[#17982f] hover:shadow-2xl rounded-lg shadow text-white transition-all group flex items-center justify-center duration-300 relative overflow-hidden"
            >
                <span className="bg-[#005a11] rounded-full size-0 group-hover:size-28 transition-all duration-700 absolute button-effect"></span>
                <span className="z-10">View More Video</span>
            </Link>

        </div>
    )
}