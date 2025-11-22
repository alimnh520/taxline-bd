'use client'
import Link from "next/link";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
export const Question = () => {

    const [question1, setQuestion1] = useState(false);
    const [question2, setQuestion2] = useState(false);
    const [question3, setQuestion3] = useState(false);
    const [question4, setQuestion4] = useState(false);
    const [question5, setQuestion5] = useState(false);
    const [question6, setQuestion6] = useState(false);
    const [question7, setQuestion7] = useState(false);
    const [question8, setQuestion8] = useState(false);

    return (
        <div className="w-full flex flex-col items-center px-5 mt-8">

            <div className="ribbon text-xl md:text-2xl font-bold text-white tracking-wide pb-2 md:pb-5 drop-shadow-2xl">Frequently Ask Question</div>

            <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-x-5">
                <div className="w-full h-auto mt-5 flex flex-col gap-y-1.5">
                    <div className="w-full flex flex-col border border-gray-200 overflow-hidden rounded-md ">
                        <button className="bg-white hover:bg-[#172d13b7] text-black hover:text-white text-Orange-800 cursor-pointer w-full py-2.5 relative flex items-center justify-start px-3" onClick={() => {
                            setQuestion1(!question1)
                            setQuestion2(false);
                            setQuestion3(false);
                            setQuestion4(false);
                            setQuestion5(false);
                            setQuestion6(false);
                            setQuestion7(false);
                            setQuestion8(false);
                        }}>কর রেয়াত কি এবং পরিগণনার পদ্ধতি কি? <span className={`text-3xl absolute ${question1 ? 'rotate-180' : 'rotate-0'} transition-all duration-300 right-2 sm:right-5`}><RiArrowDownSLine /></span> </button>
                        <div className={`w-full flex flex-col gap-y-6 text-[15px] ${question1 ? 'h-[1100px] sm:h-[800px] py-5 px-3 border-t' : 'h-0'} border-t-gray-200 transition-all duration-300 `}>
                            <p className="">কর রেয়াত কি?</p>
                            <p className="">একজন করদাতা তার বাৎসরিক আয়ের উপর কর প্রদান করে থাকেন। প্রদেয় কর হতে একটি অঙ্ক করদাতা কম পরিশোধ করতে পারেন। করদাতা যে পরিমাণ অঙ্ক কর কম প্রদান করেন তাই কর রেয়াত। তবে কর রেয়াত পেতে হলে করদাতাকে অবশ্যই সরকার অনুমোদিত যেসকল খাতে বিনিয়োগ করলে কর রেয়াত পাওয়া যায় সেসকল খাতে বিনিয়োগ করতে হবে।</p>
                            <p className="">কর রেয়াত পরিগণনার পদ্ধতি কি?</p>
                            <p className="">আয়কর আইন, ২০২৩ এর&nbsp; <Link className="text-green-800 hover:underline decoration-green-800" href="/tax-act-section/445">ষষ্ঠ তফসিল এর অংশ ৩</Link> অনুযায়ী বিনিয়োগ করা হলে বিনিয়োগের সূত্র নিম্নরূপঃ</p>
                            <p className="">(ক) কর অব্যাহতি প্রাপ্ত আয়, হ্রাসকৃত করহার প্রযোজ্য এইরূপ আয়, অংশীদারী ফার্মের আয় এবং চূড়ান্ত করদায় প্রযোজ্য এইরূপ আয় বাদ দিয়া পরিগণিত&nbsp; মোট আয়ের = ৩%</p>
                            <p className="">(খ) কোনো আয়বর্ষে&nbsp; <Link className="text-green-800 hover:underline decoration-green-800" href="/tax-act-section/445">ষষ্ঠ তফসিল এর অংশ ৩</Link> অনুসারে করদাতার মোট বিনিয়োগ ও ব্যয়ের পরিমাণের উপর = ১৫% অথবা</p>
                            <p className="">(গ) সর্বোচ্চ ১০ লক্ষ টাকার মধ্যে যেটি কম সেটি কর রেয়াত পাবেন।</p>
                            <p className="">&nbsp;</p>
                            <p className=""><span className="text-red-600">অর্থ আইন, ২০২৪ এর মাধ্যমে নিম্নরূপ সুবিধা প্রদান করা হয়েছে</span></p>
                            <p className=""><span className="">(১) কোনো করদাতা নিয়োগকারী কর্তৃপক্ষ হিসাবে প্রতিষ্ঠানে কর্মরত মোট জনবলের অন্যুন ১০% (দশ শতাংশ) অথবা ২৫ (পঁচিশ) জনের অধিক কর্মচারী প্রতিবন্ধী ব্যক্তিগণের মধ্য হইতে নিয়োগ করিলে উক্ত করদাতাকে প্রদেয় করের ৫% (পাঁচ শতাংশ) অথবা প্রতিবন্ধী ব্যক্তি-কর্মচারীগণের পরিশোধিত মোট বেতনের ৭৫% (পঁচাত্তর শতাংশ), যাহা কম, কর রেয়াত প্রদান করা হইবে।</span></p>
                            <p className=""><span className="">(২) কোনো করদাতা নিয়োগকারী কর্তৃপক্ষ হিসাবে প্রতিষ্ঠানে কর্মরত মোট জনবলের অন্যুন ১০% (দশ শতাংশ) অথবা ২৫ (পঁচিশ) জনের অধিক কর্মচারী তৃতীয় লিঙ্গের ব্যক্তিগণের মধ্য হইতে নিয়োগ করিলে উক্ত করদাতাকে প্রদেয় করের ৫% (পাঁচ শতাংশ) অথবা তৃতীয় লিঙ্গের কর্মচারীগণের পরিশোধিত মোট বেতনের ৭৫% (পঁচাত্তর শতাংশ), যাহা কম, কর রেয়াত প্রদান করা হইবে।</span></p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col border border-gray-200 overflow-hidden rounded-md ">
                        <button className="bg-white hover:bg-[#172d13b7] text-black hover:text-white cursor-pointer w-full py-2.5 relative flex items-center justify-start px-3" onClick={() => {
                            setQuestion1(false)
                            setQuestion2(!question2);
                            setQuestion3(false);
                            setQuestion4(false);
                            setQuestion5(false);
                            setQuestion6(false);
                            setQuestion7(false);
                            setQuestion8(false);
                        }}>
                            শেয়ার বা ইউনিট হস্তান্তর হতে অর্জিত আয় করমুক্ত কিনা?
                            <span className={`text-3xl absolute ${question2 ? 'rotate-180' : 'rotate-0'} transition-all duration-300 right-2 sm:right-5`}><RiArrowDownSLine /></span> </button>
                        <div className={`w-full flex flex-col gap-y-6 text-[15px] ${question2 ? 'h-[280px] sm:h-[180px] py-5 px-3 border-t' : 'h-0'} border-t-gray-200 transition-all duration-300 `}>
                            <p className="">আয়কর আইন, ২০২৩ এর <Link href="/tax-act-section/435" className="text-green-800 hover:underline decoration-green-800">ষষ্ঠ তফসীল, অংশ-১</Link> এর ৩৬(ক) অনুযায়ী কোন স্বাভাবিক ব্যক্তি কর্তৃক স্টক এক্সচেঞ্জে তালিকাভুক্ত সিকিউরিটিজ লেনদনে হতে কোন আয় অর্জিত হলে উক্ত আয়ের ৫০ লক্ষ টাকা করমুক্ত। তবে এর অধিক গৃহীত হলে উক্ত আয়ের উপর ১৫% হারে কর প্রদান করতে হবে।&nbsp;</p>
                            <p className="">তবে কোনো কোম্পানি বা তহবিলের স্পন্সর, ডিরেক্টর বা প্লেসমেন্ট শেয়ার বা ইউনিটের ক্ষেত্রে এই করমুক্তির বিধান প্রযোজ্য হবে ।</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col border border-gray-200 overflow-hidden rounded-md ">
                        <button className="bg-white hover:bg-[#172d13b7] text-black hover:text-white cursor-pointer w-full py-2.5 relative flex items-center justify-start px-3" onClick={() => {
                            setQuestion1(false)
                            setQuestion2(false);
                            setQuestion3(!question3);
                            setQuestion4(false);
                            setQuestion5(false);
                            setQuestion6(false);
                            setQuestion7(false);
                            setQuestion8(false);
                        }}>
                            রেমিটেন্স আয়ের বিপরীতে কোন কর দিতে হবে কিনা?
                            <span className={`text-3xl absolute ${question3 ? 'rotate-180' : 'rotate-0'} transition-all duration-300 right-2 sm:right-5`}><RiArrowDownSLine /></span> </button>
                        <div className={`w-full flex flex-col gap-y-6 text-[15px] ${question3 ? 'h-[150px] sm:h-[110px] py-5 px-3 border-t' : 'h-0'} border-t-gray-200 transition-all duration-300 `}>
                            <p className="">আয়কর আইন, ২০২৩ এর ষষ্ঠ তফসীল অংশ-১ এর দফা (১৭) অনুযায়ী কোন করদাতা কর্তৃক বিদেশে উপার্জিত কোন আয় যা তিনি বৈদেশিক রেমিটেন্স সম্পর্কিত বিদ্যমান আইন অনুসারে এনেছেন, উক্ত আয়ের উপর কোন কর দিতে হবে না।</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col border border-gray-200 overflow-hidden rounded-md ">
                        <button className="bg-white hover:bg-[#172d13b7] text-black hover:text-white cursor-pointer w-full py-2.5 relative flex items-center justify-start px-3" onClick={() => {
                            setQuestion1(false)
                            setQuestion2(false);
                            setQuestion3(false);
                            setQuestion4(!question4);
                            setQuestion5(false);
                            setQuestion6(false);
                            setQuestion7(false);
                            setQuestion8(false);
                        }}>
                            ব্যক্তি বলতে কি বুঝায়?
                            <span className={`text-3xl absolute ${question4 ? 'rotate-180' : 'rotate-0'} transition-all duration-300 right-2 sm:right-5`}><RiArrowDownSLine /></span> </button>
                        <div className={`w-full flex flex-col gap-y-6 text-[15px] ${question4 ? 'h-[680px] sm:h-[480px] py-5 px-3 border-t' : 'h-0'} border-t-gray-200 transition-all duration-300 `}>
                            <p className="">আয়কর আইন, ২০২৩ এর <Link href="/tax-act-section/185" className="text-green-800 hover:underline decoration-green-800">ধারা ১৪০</Link> অনুযায়ী&nbsp; “নির্দিষ্ট ব্যক্তি” অর্থ-</p>
                            <p className="pl-12">(ক) কোনো কোম্পানি, ফার্ম, ব্যক্তিসংঘ, ট্রাস্ট বা তহবিল;</p>
                            <p className="pl-12">(খ) পাবলিক-প্রাইভেট পার্টনারশীপ;</p>
                            <p className="pl-12">(গ) কোনো বিদেশি ঠিকাদার, বিদেশি এন্টারপ্রাইজ বা বাংলাদেশের বাহিরে প্রতিষ্ঠিত কোনো সংঘ বা সংস্থা;</p>
                            <p className="pl-12">(ঘ) কোনো হাসপাতাল, ক্লিনিক বা ডায়াগনস্টিক সেন্টার;</p>
                            <p className="pl-12">(ঙ) বার্ষিক এক কোটি টাকার অধিক টার্নওভার বিশিষ্ট কোনো ই-কমার্স প্লাটফর্ম, যাহা অন্য কোনো নির্দিষ্ট ব্যক্তি নহে, যে নামেই অভিহিত হউক না কেন;</p>
                            <p className="pl-12">(চ) বার্ষিক ১ (এক) কোটি টাকার অধিক টার্নওভার বিশিষ্ট হোটেল, <span className="text-red-600">রিসোর্ট, মোটেল, রেষ্টুরেন্ট, কনভেনশন স্টোর,&nbsp;</span>ট্রান্সপোর্ট এজেন্সি;</p>
                            <p className="pl-12">(ছ) কৃষক নহেন এইরূপ কোনো ব্যক্তি যিনি তামাক পাতা, সিগারেট, বিড়ি, জর্দা, গুল ও অন্যান্য তামাক জাতীয় পণ্য উৎপাদন এবং সরবরাহে জড়িত;</p>
                        </div>
                    </div>

                </div>

                {/* part 2 */}

                <div className="w-full h-auto mt-5 flex flex-col gap-y-1.5">
                    <div className="w-full flex flex-col border border-gray-200 overflow-hidden rounded-md ">
                        <button className="bg-white hover:bg-[#172d13b7] text-black hover:text-white cursor-pointer w-full py-2.5 relative flex items-center justify-start px-3" onClick={() => {
                            setQuestion5(!question5);
                            setQuestion6(false);
                            setQuestion7(false);
                            setQuestion8(false);
                            setQuestion1(false);
                            setQuestion2(false);
                            setQuestion3(false);
                            setQuestion4(false);
                        }}>
                            কোন খাতের আয়ের উপর বিনিয়োগজনিত কর রেয়াত দাবী করা যাবে?
                            <span className={`text-3xl absolute ${question5 ? 'rotate-180' : 'rotate-0'} transition-all duration-300 right-2 sm:right-5`}><RiArrowDownSLine /></span> </button>
                        <div className={`w-full flex flex-col gap-y-6 text-[15px] ${question5 ? 'h-[150px] sm:h-[120px] py-5 px-3 border-t' : 'h-0'} border-t-gray-200 transition-all duration-300 `}>
                            <p className="">নিয়মিত উৎসের আয়ের উপর কর রেয়াত দাবী করা যাবে। কর অব্যাহতি প্রাপ্ত আয়, হ্রাসকৃত করহার প্রযোজ্য আয়, অংশীদারী ফার্ম বা ব্যক্তিসংঘ হতে আয় এবং চূড়ান্ত করদায় প্রযোজ্য হয় এরূপ আয়ের বিপরীতে সৃষ্ট করদায়ের বিপরীতে বিনিয়োগজনিত কর রেয়াত দাবী করা যাবে না।</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col border border-gray-200 overflow-hidden rounded-md ">
                        <button className="bg-white hover:bg-[#172d13b7] text-black hover:text-white cursor-pointer w-full py-2.5 relative flex items-center justify-start px-3" onClick={() => {
                            setQuestion5(false);
                            setQuestion6(!question6);
                            setQuestion7(false);
                            setQuestion8(false);
                            setQuestion1(false)
                            setQuestion2(false);
                            setQuestion3(false);
                            setQuestion4(false);
                        }}>
                            চাকুরী ক্ষেত্রে মোটরগাড়ী সুবিধা প্রাপ্ত হলে কত টাকা আয় হবে?
                            <span className={`text-3xl absolute ${question6 ? 'rotate-180' : 'rotate-0'} transition-all duration-300 right-2 sm:right-5`}><RiArrowDownSLine /></span> </button>
                        <div className={`w-full flex flex-col gap-y-6 text-[15px] ${question6 ? 'h-[380px] sm:h-[280px] py-5 px-3 border-t' : 'h-0'} border-t-gray-200 transition-all duration-300 `}>
                            <p className="">কোন বেতনভোগী করদাতা যদি প্রতিষ্ঠান হতে মোটরগাড়ী সুবিধা পেয়ে থাকেন তাহলে একটি অঙ্ক আয় হিসেবে যোগ হবে। যা নিম্নরূপঃ</p>
                            <p className="">১। ১৫০০ সিসি পর্যন্ত গাড়ীর বিপরীতে প্রতি মাসে ১৫ (পনের) হাজার টাকা।&nbsp;</p>
                            <p className="">২। ১৫০০ সিসির অধিক কিন্ত ২০০০ সিসি পর্যন্ত গাড়ীর বিপরীতে প্রতি মাসে ২০ (বিশ) হাজার টাকা।&nbsp;</p>
                            <p className="">৩। ২০০০ সিসির অধিক কিন্ত ২৫০০ সিসি পর্যন্ত গাড়ীর বিপরীতে প্রতি মাসে ৩০ (ত্রিশ) হাজার টাকা।&nbsp;</p>
                            <p className="">৪। ২৫০০ সিসির অধিক গাড়ীর বিপরীতে প্রতি মাসে ৫০ (পঁঞ্চাশ) হাজার টাকা।</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col border border-gray-200 overflow-hidden rounded-md ">
                        <button className="bg-white hover:bg-[#172d13b7] text-black hover:text-white cursor-pointer w-full py-2.5 relative flex items-center justify-start px-3" onClick={() => {
                            setQuestion5(false);
                            setQuestion6(false);
                            setQuestion7(!question7);
                            setQuestion8(false);
                            setQuestion1(false)
                            setQuestion2(false);
                            setQuestion3(false);
                            setQuestion4(false);
                        }}>
                            ২০২৫-২০২৬ করবর্ষে মহিলা করদাতার কর হার কত?
                            <span className={`text-3xl absolute ${question7 ? 'rotate-180' : 'rotate-0'} transition-all duration-300 right-2 sm:right-5`}><RiArrowDownSLine /></span> </button>
                        <div className={`w-full flex flex-col gap-y-6 text-[15px] ${question7 ? 'h-[900px] sm:h-[630px] py-5 px-3 border-t' : 'h-0'} border-t-gray-200 transition-all duration-300 `}>
                            <div className="m-0 text-justify">
                                <p className="text-center mb-3">
                                    মহিলা করদাতাদের করহার (২০২৫-২০২৬ করবর্ষ)
                                </p>

                                <div className="overflow-x-auto">
                                    <table className="w-full border border-black border-collapse text-sm">
                                        <thead>
                                            <tr className="">
                                                <th className="border border-black text-center font-normal px-2 py-3">ক্রমিক নং</th>
                                                <th className="border border-black text-center font-normal px-2 py-3">আয়ের পরিমাণ</th>
                                                <th className="border border-black text-center font-normal px-2 py-3">করহার</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr className="bg-gray-100 hover:bg-gray-300">
                                                <td className="border border-black text-center px-2 py-4">(ক)</td>
                                                <td className="border border-black px-2 py-4 space-y-5 pb-5">
                                                    <p>মহিলা করদাতার প্রথম ৪,০০,০০০/- টাকা পর্যন্ত মোট আয়ের উপর</p>
                                                    <p className="mt-1 leading-7">
                                                        কোনো প্রতিবন্ধী ব্যক্তির পিতামাতা বা আইনানুগ অভিভাবকের
                                                        প্রত্যেক সন্তান/পোষ্যের জন্য করমুক্ত আয়ের সীমা ৫০,০০০/- টাকা অধিক হইবে;
                                                        প্রতিবন্ধী ব্যক্তির পিতা ও মাতা উভয়েই করদাতা হইলে যেকোনো একজন এই সুবিধা ভোগ করিবেন
                                                    </p>
                                                </td>
                                                <td className="border border-black text-center px-2 py-4">শূন্য</td>
                                            </tr>

                                            <tr className="hover:bg-gray-300">
                                                <td className="border border-black text-center px-2 py-3">(খ)</td>
                                                <td className="border border-black px-2 py-3">পরবর্তী ১,০০,০০০ টাকা পর্যন্ত মোট আয়ের উপর</td>
                                                <td className="border border-black text-center px-2 py-3">৫%</td>
                                            </tr>

                                            <tr className="bg-gray-100 hover:bg-gray-300">
                                                <td className="border border-black text-center px-2 py-3">(গ)</td>
                                                <td className="border border-black px-2 py-3">পরবর্তী ৪,০০,০০০ টাকা পর্যন্ত মোট আয়ের উপর</td>
                                                <td className="border border-black text-center px-2 py-3">১০%</td>
                                            </tr>

                                            <tr className="hover:bg-gray-300">
                                                <td className="border border-black text-center px-2 py-3">(ঘ)</td>
                                                <td className="border border-black px-2 py-3">পরবর্তী ৫,০০,০০০ টাকা পর্যন্ত মোট আয়ের উপর</td>
                                                <td className="border border-black text-center px-2 py-3">১৫%</td>
                                            </tr>

                                            <tr className="bg-gray-100 hover:bg-gray-300">
                                                <td className="border border-black text-center px-2 py-3">(ঙ)</td>
                                                <td className="border border-black px-2 py-3">পরবর্তী ৫,০০,০০০ টাকা পর্যন্ত মোট আয়ের উপর</td>
                                                <td className="border border-black text-center px-2 py-3">২০%</td>
                                            </tr>

                                            <tr className="hover:bg-gray-300">
                                                <td className="border border-black text-center px-2 py-3">(চ)</td>
                                                <td className="border border-black px-2 py-3">পরবর্তী ২০,০০,০০০ টাকা পর্যন্ত মোট আয়ের উপর</td>
                                                <td className="border border-black text-center px-2 py-3">২৫%</td>
                                            </tr>

                                            <tr className="bg-gray-100 hover:bg-gray-300">
                                                <td className="border border-black text-center px-2 py-3">(ছ)</td>
                                                <td className="border border-black px-2 py-3">অবশিষ্ট মোট আয়ের উপর</td>
                                                <td className="border border-black text-center px-2 py-3">৩০%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-justify mt-3">
                                    উল্লিখিত করহার করদাতার মর্যাদা নির্বিশেষে সিগারেট, বিড়ি, জর্দা, গুলসহ
                                    সকল প্রকার তামাকজাত পণ্য প্রস্তুতকারক করদাতার উক্ত ব্যবসা হতে অর্জিত আয়ের
                                    ক্ষেত্রে প্রযোজ্য হবে না।
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col border border-gray-200 overflow-hidden rounded-md ">
                        <button className="bg-white hover:bg-[#172d13b7] text-black hover:text-white cursor-pointer w-full py-2.5 relative flex items-center justify-start px-3" onClick={() => {
                            setQuestion5(false);
                            setQuestion6(false);
                            setQuestion7(false);
                            setQuestion8(!question8);
                            setQuestion1(false)
                            setQuestion2(false);
                            setQuestion3(false);
                            setQuestion4(false);
                        }}>

                            আইটি খাতে আয়ের ক্ষেত্রে কি কোন কর প্রদান করতে হবে?

                            <span className={`text-3xl absolute ${question8 ? 'rotate-180' : 'rotate-0'} transition-all duration-300 right-2 sm:right-5`}><RiArrowDownSLine /></span> </button>
                        <div className={`w-full flex flex-col gap-y-6 text-[15px] ${question8 ? 'h-[1380px] sm:h-[1080px] py-5 px-3 border-t' : 'h-0'} border-t-gray-200 transition-all duration-300 `}>
                            <div>
                                <div className="">অর্থ আইন, ২০২৪ এর মাধ্যমে আইটি সেক্টরের বিভিন্ন খাতের আয়কে ১, জুলাই ২০২৪ হইতে ৩০ জুন, ২০২৭ পর্যন্ত করমুক্ত সুবিধা প্রদান করা হয়েছে। খাতগুলি নিম্নরূপঃ</div>
                                <div className="">&nbsp;</div>
                            </div>
                            <div>
                                <div className="">(ক) এআই বেসড সলিউশন ডেভেলপমেন্ট (AI based solution developement);</div>
                            </div>
                            <div>
                                <div className="">(খ) ব্লকচেইন বেসড সলিউশন ডেভেলপমেন্ট (blockchain based solution developement);</div>
                            </div>
                            <div>
                                <div className="">(গ) রোবোটিক্স প্রসেস আউটসোর্সিং (robotics process outsourcing);</div>
                            </div>
                            <div>
                                <div className="">(ঘ) সফটওয়্যার অ্যাজ এ সার্ভিস (software as a service);</div>
                            </div>
                            <div>
                                <div className="">(ঙ) সাইবার সিকিউরিটি সার্ভিস (cyber security service);</div>
                            </div>
                            <div>
                                <div className="">(চ) ডিজিটাল ডেটা এনালাইটিক্স ও ডেটা সাইয়েন্স (digital data analytics and data science);</div>
                            </div>
                            <div>
                                <div className="">(ছ) মোবাইল অ্যাপ্লিকেশন ডেভেলপমেন্ট সার্ভিস (mobile application development service);</div>
                            </div>
                            <div>
                                <div className="">(জ) সফটওয়্যার ডেভেলপমেন্ট ও কাস্টমাইজেশন (software developement and customization);</div>
                            </div>
                            <div>
                                <div className="">(ঝ) সফটওয়্যার টেস্ট ল্যাব সার্ভিস (software test lab service);</div>
                            </div>
                            <div>
                                <div className="">(ঞ) ওয়েব লিস্টিং, ওয়েবসাইট ডেভেলপমেন্ট ও সার্ভিস (web listing, website developemtn and service)</div>
                            </div>
                            <div>
                                <div className="">(ট) আইটি সহায়তা ও সফটওয়্যার মেইনটেইন্যান্স সার্ভিস (IT assistance and software maintenance service)</div>
                            </div>
                            <div>
                                <div className="">(ঠ) জিওগ্রাফিক ইনফরমেশন সার্ভিস (geographic information service)</div>
                            </div>
                            <div>
                                <div className="">(ড) ডিজিটাল এনিমেশন ডেভেলপমেন্ট (digital animation development)</div>
                            </div>
                            <div>
                                <div className="">(ঢ) ডিজিটাল গ্রাফিক্স ডিজাইন (digital graphics design)</div>
                            </div>
                            <div>
                                <div className="">(ণ) ডিজিটাল ডাটা এন্ট্রি ও প্রসেসিং (digital data entry and processing);</div>
                            </div>
                            <div>
                                <div className="">(ত) ই-লার্নিং প্লাটফর্ম ও ই-পাব্লিকেশন (e-learning platform and e-publication)</div>
                            </div>
                            <div>
                                <div className="">(থ) আইটি ফ্রিল্যান্সিং (IT freelancing);</div>
                            </div>
                            <div>
                                <div className="">(দ) কল সেন্টার সার্ভিস (call center service);</div>
                            </div>
                            <div>
                                <div className="">(ধ) ডকুমেন্ট কনভার্সন, ইমেজিং ও ডিজিটাল আর্কাইভিং (document conversion, imaging and digital archiving);</div>
                                <div className="">&nbsp;</div>
                            </div>
                            <div>
                                <div className="" >&nbsp;</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}