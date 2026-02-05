import Image from "next/image";
import { FaFacebookF, FaGlobe, FaLinkedinIn, FaTwitter, FaYoutube, FaPhone, FaRegFileAlt, FaRegHandshake, FaHeadset } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Footer() {
    const services = {
        vat: [
            "BIN নিবন্ধন আবেদন (মুসক–২.১)",
            "BIN সংশোধন আবেদন (মুসক–২.৫)",
            "রিটার্ন দাখিল (মুসক–৪.৩, ৪.৪, ৬.৩)",
            "ভ্যাট নিরীক্ষা সহায়তা",
            "রিফান্ড / অ্যাডজাস্টমেন্ট",
            "ভ্যাট মামলার জবাব, নোটিশ, আপিল"
        ],
        tax: [
            "কর নিবন্ধন আবেদন (টিআইএন)",
            "আয়কর রিটার্ন দাখিল",
            "উৎসে কর বিবরণী (Withholding Tax)",
            "রিফান্ড ও অ্যাডজাস্টমেন্ট",
            "কর অডিট, মূল্যায়ন",
            "কর মামলা, নোটিশ, আপিল"
        ]
    };

    const socialLinks = [
        { icon: FaFacebookF, href: "https://www.facebook.com/share/1Bf67yNibh/", color: "bg-blue-600 hover:bg-blue-700", label: "Facebook" },
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/taxlinebd", color: "bg-blue-500 hover:bg-blue-600", label: "LinkedIn" },
        { icon: FaTwitter, href: "https://twitter.com", color: "bg-black hover:bg-gray-800", label: "Twitter" },
        { icon: FaYoutube, href: "https://www.youtube.com/@TaxLineBD", color: "bg-red-600 hover:bg-red-700", label: "YouTube" }
    ];

    const quickLinks = [
        { text: "হোম", href: "/" },
        { text: "সেবাসমূহ", href: "/services" },
        { text: "প্যাকেজ", href: "/packages" },
        { text: "যোগাযোগ", href: "/contact" },
        { text: "প্রাইভেসি পলিসি", href: "/privacy" },
        { text: "শর্তাবলী", href: "/terms" }
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 pt-12 pb-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex flex-col items-start gap-3">
                            <img
                                src="/website-logo.png"
                                alt="TaxLine BD Logo"
                                className="h-20 w-auto -ml-5"
                            />
                            <p className="text-sm text-emerald-400 font-medium">পূর্ণাঙ্গ কর সেবা প্রদান</p>
                        </div>

                        <p className="text-sm leading-relaxed text-gray-300">
                            VAT, TAX, Customs, BIN, TIN, রিটার্ন, অডিট, মামলা, ট্রাইব্যুনাল,
                            নিস্পত্তি, রিফান্ড, অ্যাডজাস্টমেন্টসহ পূর্ণাঙ্গ কর সেবা প্রদান করি।
                        </p>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-3">দ্রুত লিংক</h4>
                            <div className="flex flex-wrap gap-2">
                                {quickLinks.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.href}
                                        className="px-3 py-1 bg-gray-800 hover:bg-emerald-600 text-gray-300 hover:text-white text-xs rounded-full transition-colors"
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* VAT Services Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                                <HiOutlineDocumentText className="text-emerald-400" size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-white">
                                ভ্যাট (VAT) সংক্রান্ত সেবাসমূহ
                            </h4>
                        </div>
                        <ul className="space-y-3">
                            {services.vat.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 group">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tax Services Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center">
                                <FaRegFileAlt className="text-blue-400" size={18} />
                            </div>
                            <h4 className="text-lg font-bold text-white">
                                কর (TAX) সংক্রান্ত সেবাসমূহ
                            </h4>
                        </div>
                        <ul className="space-y-3">
                            {services.tax.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 group">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center">
                                <FaHeadset className="text-red-400" size={18} />
                            </div>
                            <h4 className="text-lg font-bold text-white">
                                যোগাযোগ
                            </h4>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 group">
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                                    <FaPhone className="text-emerald-400 group-hover:text-white" size={14} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">মোবাইল</p>
                                    <a href="tel:+8801737263347" className="text-white font-medium hover:text-emerald-400 transition-colors">
                                        +৮৮০ ১৭৩৭-২৬৩৩৪৭
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-center gap-3 group">
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                                    <GoMail className="text-emerald-400 group-hover:text-white" size={14} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">ইমেইল</p>
                                    <a href="mailto:taxlinebd.info@gmail.com" className="text-white font-medium hover:text-emerald-400 transition-colors">
                                        taxlinebd.info@gmail.com
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-center gap-3 group">
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                                    <FaGlobe className="text-emerald-400 group-hover:text-white" size={14} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">ওয়েবসাইট</p>
                                    <a
                                        href="http://taxlinebd.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white font-medium hover:text-emerald-400 transition-colors"
                                    >
                                        taxlinebd.com
                                    </a>
                                </div>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div>
                            <p className="text-sm text-gray-400 mb-3">আমাদের সাথে যুক্ত থাকুন</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${social.color} w-10 h-10 flex items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} TaxLine BD — All Rights Reserved.
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            বাংলাদেশের পূর্ণাঙ্গ কর সেবা প্রদানকারী প্রতিষ্ঠান
                        </p>
                    </div>

                    {/* Badges */}
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                            <p className="text-xs text-gray-300 flex items-center gap-1">
                                <FaRegHandshake className="text-emerald-400" />
                                <span>নিরাপদ ও নির্ভরযোগ্য</span>
                            </p>
                        </div>
                        <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                            <p className="text-xs text-gray-300 flex items-center gap-1">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                                <span>২৪/৭ সাপোর্ট</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back to Top */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
                    aria-label="Back to top"
                >
                    ↑
                </button>
            </div>
        </footer>
    );
}