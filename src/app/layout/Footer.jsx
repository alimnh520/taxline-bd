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
                            src="/logo.png"
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
                            <li><FaPhone className="text-base -mt-0.5 inline"/> মোবাইল: +880 1737-263347</li>
                            <li> <GoMail className="text-base -mt-0.5 inline"/> Email: taxlinebd.info@gmail.com</li>
                            <li><FaGlobe className="text-base -mt-0.5 inline"/> Website: <a target="_blank" href="http://taxlinebd.com" className="underline text-red-600">taxlinebd.com</a></li>
                        </ul>

                        {/* SOCIAL */}
                        <div className="flex space-x-4 mt-4 text-gray-300">
                            <a href="https://www.facebook.com/share/1Bf67yNibh/" className="hover:text-white size-10 bg-blue-700 flex items-center justify-center rounded-full group">
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

                <div className="text-center mt-10 pt-4 text-gray-400 text-sm border-t border-t-gray-800">
                    © {new Date().getFullYear()} TaxLine BD — All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
