'use client'
import React from "react";
import { ExternalLink, Shield, Globe, FileText, Lock, BanknoteIcon, FileCheck, Building } from "lucide-react";

const GovernmentLinks = () => {
    const links = [
        {
            name: "ই-টিডিএস",
            url: "https://etds.gov.bd/",
            icon: <FileText size={18} />,
            color: "from-blue-500 to-cyan-500",
            description: "ট্যাক্স ডিডাকশন অ্যাট সোর্স"
        },
        {
            name: "ই-টিআইএন",
            url: "https://secure.incometax.gov.bd/TINHome",
            icon: <Lock size={18} />,
            color: "from-emerald-500 to-green-500",
            description: "ট্যাক্স আইডেন্টিফিকেশন নম্বর"
        },
        {
            name: "এ-চালান",
            url: "https://ibas.finance.gov.bd/acs/",
            icon: <FileCheck size={18} />,
            color: "from-purple-500 to-pink-500",
            description: "অনলাইন চালান সিস্টেম"
        },
        {
            name: "এনবিআর ওয়েবসাইট",
            url: "https://nbr.gov.bd/",
            icon: <Building size={18} />,
            color: "from-red-500 to-orange-500",
            description: "জাতীয় রাজস্ব বোর্ড"
        },
        {
            name: "সোনালী ব্যাংক পেমেন্ট",
            url: "https://nbr.sblesheba.com/IncomeTax/Payment",
            icon: <BanknoteIcon size={18} />,
            color: "from-amber-500 to-yellow-500",
            description: "কর পেমেন্ট সিস্টেম"
        },
        {
            name: "ই-রিটার্ন ওয়েবসাইট",
            url: "https://etaxnbr.gov.bd/#/auth/sign-in",
            icon: <Globe size={18} />,
            color: "from-indigo-500 to-blue-500",
            description: "ইলেকট্রনিক রিটার্ন"
        },
        {
            name: "রিটার্ন ভেরিফাই",
            url: "https://etaxnbr.gov.bd/#/submission-verification",
            icon: <Shield size={18} />,
            color: "from-teal-500 to-emerald-500",
            description: "রিটার্ন যাচাইকরণ"
        },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">

            {/* Header Section */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
                    <Shield size={16} />
                    সরকারি পোর্টাল লিংক
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    প্রয়োজনীয় <span className="text-blue-600">সরকারি লিংক</span>
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    কর সংক্রান্ত সকল সরকারি ওয়েবসাইটের সরাসরি প্রবেশ লিংক। নিরাপদ ও প্রমাণিত।
                </p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {links.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Link Card Content */}
                        <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                                {link.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-1">
                                    <h4 className="font-bold text-gray-800 text-lg group-hover:text-blue-700 transition-colors">
                                        {link.name}
                                    </h4>
                                    <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                                </div>
                                <p className="text-sm text-gray-600 mb-3">
                                    {link.description}
                                </p>
                                <div className="text-xs text-blue-600 font-medium">
                                    সরাসরি ভিজিট করুন →
                                </div>
                            </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-blue-100 transition-colors">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500 flex items-center gap-1">
                                    <Shield size={12} />
                                    নিরাপদ সংযোগ
                                </span>
                                <span className="text-xs text-gray-500">
                                    সরকারি ওয়েবসাইট
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="text-blue-600" size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-blue-800 mb-2">গুরুত্বপূর্ণ নির্দেশনা</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                সকল লিংক সরকারি পোর্টালের সরাসরি সংযোগ
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                ব্যবহারের পূর্বে URL যাচাই করুন
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                ব্যক্তিগত তথ্য সুরক্ষিত রাখুন
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                সন্দেহজনক লিংকে ক্লিক করবেন না
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                    সর্বশেষ আপডেট: {new Date().toLocaleDateString('bn-BD')} • তথ্যসূত্র: জাতীয় রাজস্ব বোর্ড
                </p>
            </div>
        </div>
    );
};

export default GovernmentLinks;