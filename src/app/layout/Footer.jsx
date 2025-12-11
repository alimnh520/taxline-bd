import Image from "next/image";
import { FaFacebookF, FaGlobe, FaHome, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 pt-8 pb-6 mt-10 border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Logo / About */}
                    <article className="float-left space-x-3">
                        <Image
                            src="/TaxLine_BD-PNG.png"
                            alt="TaxLine BD Logo"
                            width={120}
                            height={120}
                            className="rounded-lg"
                        />

                        <p className="mt-4 text-sm leading-6 text-gray-300">
                            VAT, TAX, Customs, BIN, TIN, রিটার্ন, অডিট, মামলা, ট্রাইব্যুনাল,
                            নিস্পত্তি, রিফান্ড, অ্যাডজাস্টমেন্টসহ পূর্ণাঙ্গ কর সেবা প্রদান করি।
                        </p>
                    </article>

                    {/* VAT SERVICE */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-600">
                            ভ্যাট (VAT) সংক্রান্ত সেবাসমূহ
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-300 leading-6">
                            <li>• BIN নিবন্ধন আবেদন (মুসক–২.১)</li>
                            <li>• BIN সংশোধন আবেদন (মুসক–২.৫)</li>
                            <li>• রিটার্ন দাখিল (মুসক–৪.৩, ৪.৪, ৬.৩)</li>
                            <li>• ভ্যাট নিরীক্ষা সহায়তা</li>
                            <li>• রিফান্ড / অ্যাডজাস্টমেন্ট</li>
                            <li>• ভ্যাট মামলার জবাব, নোটিশ, আপিল</li>
                        </ul>
                    </div>

                    {/* TAX SERVICE */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-600">
                            কর (TAX) সংক্রান্ত সেবাসমূহ
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-300 leading-6">
                            <li>• কর নিবন্ধন আবেদন (টিআইএন)</li>
                            <li>• আয়কর রিটার্ন দাখিল</li>
                            <li>• উৎসে কর বিবরণী (Withholding Tax)</li>
                            <li>• রিফান্ড ও অ্যাডজাস্টমেন্ট</li>
                            <li>• কর অডিট, মূল্যায়ন</li>
                            <li>• কর মামলা, নোটিশ, আপিল</li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-600">
                            যোগাযোগ
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-300 leading-6">
                            <li><FaHome className="text-base -mt-0.5 inline" /> প্রধান কার্যালয়: ৩৭, শামসুর রহমান রোড (৩য় তলা), খুলনা-৯১০০ </li>
                            <li><FaPhone className="text-base -mt-0.5 inline"/> মোবাইল: +880 1322-887800</li>
                            <li> <GoMail className="text-base -mt-0.5 inline"/> Email: taxlinebd.info@gmail.com</li>
                            <li><FaGlobe className="text-base -mt-0.5 inline"/> Website: taxlinebd.com</li>
                        </ul>

                        {/* SOCIAL */}
                        <div className="flex space-x-4 mt-4 text-gray-300">
                            <a href="#" className="hover:text-white size-10 bg-blue-700 flex items-center justify-center rounded-full group">
                                <FaFacebookF size={18} className="group-hover:scale-125 transition-all duration-300" />
                            </a>
                            <a href="#" className="hover:text-white size-10 bg-red-500 flex items-center justify-center rounded-full group">
                                <FaLinkedinIn size={18} className="group-hover:scale-125 transition-all duration-300" />
                            </a>
                            <a href="#" className="hover:text-white size-10 bg-red-700 flex items-center justify-center rounded-full group">
                                <FaYoutube size={18} className="group-hover:scale-125 transition-all duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* BRANCH LIST */}
                <div className="mt-10 border-t border-gray-700 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                        আমাদের শাখাসমূহ
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-gray-300">

                        {/* কর্পোরেট অফিস */}
                        <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                            <h5 className="font-semibold text-white mb-2 border-b border-b-gray-700">কর্পোরেট অফিস</h5>
                            <p><FaHome className="text-base -mt-1.5 inline" /> ৩৭, শামসুর রহমান রোড (৩য় তলা), খুলনা-৯১০০ </p>
                            <p><FaPhone className="text-base -mt-0.5 inline"/>  +৮৮০ ১৬১১-০৬০ ৪৫৪</p>
                        </div>

                        {/* মিরপুর অফিস */}
                        <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                            <h5 className="font-semibold text-white mb-2 border-b border-b-gray-700">যশোর অফিস</h5>
                            <p><FaHome className="text-base -mt-1.5 inline" /> ১১, রেল রোড (৩য় তলা), বাগমারা পাড়া, যশোর</p>
                            <p><FaPhone className="text-base -mt-0.5 inline"/>  +880 1511-060 454</p>
                        </div>

                        {/* বনানী অফিস */}
                        <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                            <h5 className="font-semibold text-white mb-2 border-b border-b-gray-700">রাজশাহী অফিস</h5>
                            <p><FaHome className="text-base -mt-1.5 inline" /> ৯২/এ, সেক্টর-২ (৩য় তলা), উপশহর হাউজিং এস্টেট বোয়ালিয়া, রাজশাহী</p>
                            <p><FaPhone className="text-base -mt-0.5 inline"/>  +880 1511-060 454</p>
                        </div>

                        {/* চট্টগ্রাম অফিস */}
                        <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                            <h5 className="font-semibold text-white mb-2 border-b border-b-gray-700">চট্টগ্রাম অফিস</h5>
                            <p><FaHome className="text-base -mt-1.5 inline" /> জাহান বিল্ডিং (৩য় তলা), <br /> ২৩, শেখ মুজিব সড়ক, <br /> আগ্রাবাদ সি/এ, চট্টগ্রাম</p>
                            <p><FaPhone className="text-base -mt-0.5 inline"/>  +880 1511-060 454</p>
                        </div>

                        {/* ঢাকায় আরও শাখা */}
                        <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                            <h5 className="font-semibold text-white mb-2 border-b border-b-gray-700">ঢাকা অফিস (পল্টন)</h5>
                            <p><FaHome className="text-base -mt-1.5 inline" /> রুপায়ন এফ.পি.এ.বি. টাওয়ার (লেভেল-৬), ০২, বক্স কালভার্ট রোড, নয়া পল্টন, ঢাকা </p>
                            <p><FaPhone className="text-base -mt-0.5 inline"/>  +880 1511-060 454</p>
                        </div>

                        <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                            <h5 className="font-semibold text-white mb-2 border-b border-b-gray-700">ঢাকা অফিস (উত্তরা)</h5>
                            <p><FaHome className="text-base -mt-1.5 inline" /> গৃহলক্ষ্মী (লেভেল-৪) বাড়ি নং ২৯, রোড ২, সেক্টর ৩, উত্তরা, ঢাকা-১২৩০</p>
                            <p><FaPhone className="text-base -mt-0.5 inline"/>  +880 1511-060 454</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10 text-gray-400 text-sm">
                    © {new Date().getFullYear()} TaxLine BD — All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
