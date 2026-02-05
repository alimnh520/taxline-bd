'use client'
import Link from "next/link";
import { useRef, useState } from "react";
import { RiArrowDownSLine, RiQuestionLine, RiFileListLine, RiCalculatorLine } from "react-icons/ri";
import {
    FaMoneyBillWave,    // 💰
    FaChartLine,        // 📈
    FaGlobe,            // 🌍
    FaUser,             // 👤
    FaChartBar,         // 📊
    FaCar,              // 🚗
    FaFemale,           // 👩
    FaLaptopCode        // 💻
} from "react-icons/fa";

export const Question = () => {
    const [openQuestion, setOpenQuestion] = useState(1);

    const answerRef = useRef();

    const handlePrint = () => {
        const printContents = answerRef.current.innerHTML;
        const newWin = window.open('', '', 'width=800,height=600');
        newWin.document.write('<html><head><title>প্রিন্ট</title>');
        newWin.document.write(`
  <style>
    body{font-family:sans-serif;padding:20px;}
    table{border-collapse:collapse;width:100%;}
    td,th{border:1px solid #ccc;padding:8px;}
    th{background:#eee;}
    .no-print, .print-hidden { display: none !important; }
  </style>
`);

        newWin.document.write('</head><body>');
        newWin.document.write(printContents);
        newWin.document.write('</body></html>');
        newWin.document.close();
        newWin.focus();
        newWin.print();
        newWin.close();
    };


    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert('লিংক কপি হয়েছে!'))
            .catch(() => alert('কপি করতে পারি নি'));
    };


    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'কর সম্পর্কিত প্রশ্নোত্তর',
                text: 'এই প্রশ্নের উত্তর দেখুন',
                url: window.location.href, // এখনকার পেজের লিংক
            })
                .then(() => console.log('শেয়ার সম্পন্ন'))
                .catch((err) => console.log('Error sharing:', err));
        } else {
            // যদি ব্রাউজার support না করে
            alert('আপনার ব্রাউজারে শেয়ার সুবিধা নেই, লিংক কপি করুন: ' + window.location.href);
        }
    };



    const questions = [
        { id: 1, question: "কর রেয়াত কি এবং পরিগণনার পদ্ধতি কি?", category: "কর রেয়াত", icon: <FaMoneyBillWave className="text-green-600" /> },
        { id: 2, question: "শেয়ার বা ইউনিট হস্তান্তর হতে অর্জিত আয় করমুক্ত কিনা?", category: "শেয়ার বাজার", icon: <FaChartLine className="text-green-600" /> },
        { id: 3, question: "রেমিটেন্স আয়ের বিপরীতে কোন কর দিতে হবে কিনা?", category: "বিদেশী আয়", icon: <FaGlobe className="text-green-600" /> },
        { id: 4, question: "ব্যক্তি বলতে কি বুঝায়?", category: "সংজ্ঞা", icon: <FaUser className="text-green-600" /> },
        { id: 5, question: "কোন খাতের আয়ের উপর বিনিয়োগজনিত কর রেয়াত দাবী করা যাবে?", category: "বিনিয়োগ", icon: <FaChartBar className="text-green-600" /> },
        { id: 6, question: "চাকুরী ক্ষেত্রে মোটরগাড়ী সুবিধা প্রাপ্ত হলে কত টাকা আয় হবে?", category: "সুবিধা", icon: <FaCar className="text-green-600" /> },
        { id: 7, question: "২০২৫-২০২৬ করবর্ষে মহিলা করদাতার কর হার কত?", category: "মহিলা কর", icon: <FaFemale className="text-green-600" /> },
        { id: 8, question: "আইটি খাতে আয়ের ক্ষেত্রে কি কোন কর প্রদান করতে হবে?", category: "আইটি সেক্টর", icon: <FaLaptopCode className="text-green-600" /> }
    ];


    const questionDetails = {
        1: {
            title: "কর রেয়াত কি এবং পরিগণনার পদ্ধতি কি?",
            content: `কর রেয়াত হল করদাতার প্রদেয় কর থেকে একটি নির্দিষ্ট অঙ্ক কম প্রদান করার সুযোগ। করদাতা সরকার অনুমোদিত বিশেষ খাতে বিনিয়োগ করলে এই সুবিধা পাওয়া যায়।

পরিগণনার পদ্ধতি:
• কর অব্যাহতি প্রাপ্ত আয়, হ্রাসকৃত করহার প্রযোজ্য আয়, অংশীদারী ফার্মের আয় এবং চূড়ান্ত করদায় প্রযোজ্য আয় বাদ দিয়ে পরিগণিত মোট আয়ের ৩%
• ষষ্ঠ তফসিল এর অংশ ৩ অনুসারে বিনিয়োগ ও ব্যয়ের পরিমাণের উপর ১৫%
• সর্বোচ্চ ১০ লক্ষ টাকার মধ্যে যেটি কম

নতুন সুবিধা (অর্থ আইন, ২০২৪):
✓ প্রতিবন্ধী ব্যক্তি নিয়োগে ৫% কর রেয়াত
✓ তৃতীয় লিঙ্গের ব্যক্তি নিয়োগে ৫% কর রেয়াত`
        },
        2: {
            title: "শেয়ার বা ইউনিট হস্তান্তর হতে অর্জিত আয় করমুক্ত কিনা?",
            content: `সাধারণ ব্যক্তির জন্য:
✓ স্টক এক্সচেঞ্জে তালিকাভুক্ত সিকিউরিটিজ লেনদন থেকে অর্জিত আয়ের প্রথম ৫০ লক্ষ টাকা করমুক্ত
✓ ৫০ লক্ষ টাকার বেশি হলে ১৫% হারে কর

ব্যতিক্রম:
✗ কোম্পানি বা তহবিলের স্পন্সর, ডিরেক্টর বা প্লেসমেন্ট শেয়ার/ইউনিটের ক্ষেত্রে এই সুবিধা প্রযোজ্য নয়`
        },
        3: {
            title: "রেমিটেন্স আয়ের বিপরীতে কোন কর দিতে হবে কিনা?",
            content: `বিদেশে উপার্জিত আয় যা বৈদেশিক রেমিটেন্স সম্পর্কিত বিদ্যমান আইন অনুসারে বাংলাদেশে আনা হয়েছে, সেই আয়ের উপর কোনো কর দিতে হবে না।

শর্তাবলী:
✓ বৈধ উপায়ে উপার্জিত আয় হতে হবে
✓ সরকার অনুমোদিত চ্যানেলে রেমিট করতে হবে
✓ প্রয়োজনীয় ডকুমেন্টেশন থাকতে হবে`
        },
        4: {
            title: "ব্যক্তি বলতে কি বুঝায়?",
            content: `আয়কর আইন, ২০২৩ অনুযায়ী "নির্দিষ্ট ব্যক্তি" বলতে বুঝায়:

• কোম্পানি, ফার্ম, ব্যক্তিসংঘ, ট্রাস্ট বা তহবিল
• পাবলিক-প্রাইভেট পার্টনারশীপ
• বিদেশি ঠিকাদার বা বিদেশি এন্টারপ্রাইজ
• হাসপাতাল, ক্লিনিক বা ডায়াগনস্টিক সেন্টার
• বার্ষিক ১ কোটি টাকার অধিক টার্নওভার বিশিষ্ট ই-কমার্স প্লাটফর্ম
• বার্ষিক ১ কোটি টাকার অধিক টার্নওভার বিশিষ্ট হোটেল, রিসোর্ট, রেস্টুরেন্ট
• তামাক জাতীয় পণ্য উৎপাদন ও সরবরাহে জড়িত ব্যক্তি`
        },
        5: {
            title: "কোন খাতের আয়ের উপর বিনিয়োগজনিত কর রেয়াত দাবী করা যাবে?",
            content: `যেসব খাতের আয়ের উপর কর রেয়াত দাবী করা যাবে:
✓ নিয়মিত উৎসের আয়
✓ ব্যবসায়িক আয়
✓ পেশাগত আয়
✓ বেতনভিত্তিক আয়

যেসব খাতের আয়ের উপর দাবী করা যাবে না:
✗ কর অব্যাহতি প্রাপ্ত আয়
✗ হ্রাসকৃত করহার প্রযোজ্য আয়
✗ অংশীদারী ফার্ম বা ব্যক্তিসংঘ হতে প্রাপ্ত আয়
✗ চূড়ান্ত করদায় প্রযোজ্য আয়`
        },
        6: {
            title: "চাকুরী ক্ষেত্রে মোটরগাড়ী সুবিধা প্রাপ্ত হলে কত টাকা আয় হবে?",
            content: `মোটরগাড়ী সুবিধার বিপরীতে মাসিক আয়ের হিসাব:

গাড়ীর ধরন | মাসিক আয়
--- | ---
১৫০০ সিসি পর্যন্ত | ১৫,০০০ টাকা
১৫০০-২০০০ সিসি | ২০,০০০ টাকা
২০০০-২৫০০ সিসি | ৩০,০০০ টাকা
২৫০০ সিসির অধিক | ৫০,০০০ টাকা

নোট: এই আয় করদাতার মোট আয়ের সাথে যোগ হবে এবং সেকশন-২২(২) অনুযায়ী কর দিতে হবে।`
        },
        7: {
            title: "২০২৫-২০২৬ করবর্ষে মহিলা করদাতার কর হার কত?",
            content: `মহিলা করদাতাদের জন্য কর স্ল্যাব (২০২৫-২০২৬):

আয়ের পরিসীমা | কর হার
--- | ---
প্রথম ৪,০০,০০০ টাকা | ০%
পরবর্তী ১,০০,০০০ টাকা | ৫%
পরবর্তী ৪,০০,০০০ টাকা | ১০%
পরবর্তী ৫,০০,০০০ টাকা | ১৫%
পরবর্তী ৫,০০,০০০ টাকা | ২০%
পরবর্তী ২০,০০,০০০ টাকা | ২৫%
অবশিষ্ট আয় | ৩০%

বিশেষ সুবিধা:
✓ প্রতিবন্ধী সন্তানের জন্য অতিরিক্ত ৫০,০০০ টাকা করমুক্ত
✓ তামাকজাত পণ্য ব্যবসায় এই হার প্রযোজ্য নয়`
        },
        8: {
            title: "আইটি খাতে আয়ের ক্ষেত্রে কি কোন কর প্রদান করতে হবে?",
            content: `আইটি সেক্টরের জন্য বিশেষ কর ছাড় (১ জুলাই ২০২৪ - ৩০ জুন ২০২৭):

করমুক্ত আইটি সেবাসমূহ:
• AI based solution development
• Blockchain based solution development
• Software as a Service (SaaS)
• Cyber security service
• Data analytics and data science
• Mobile application development
• Software development & customization
• IT freelancing services
• Call center services
• Digital graphics design
• E-learning platforms
• আরও ১০+ সেবা

শর্ত: এই সেবাসমূহ বাংলাদেশে প্রদান করতে হবে এবং বৈধভাবে রেজিস্ট্রেশন থাকতে হবে।`
        }
    };

    const categories = [
        { name: "সব", count: 8 },
        { name: "কর রেয়াত", count: 2 },
        { name: "শেয়ার বাজার", count: 1 },
        { name: "বিদেশী আয়", count: 1 },
        { name: "আইটি সেক্টর", count: 1 }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">

            {/* Header Section */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                        <RiQuestionLine className="text-2xl text-green-600" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            কর সম্পর্কিত প্রশ্নোত্তর
                        </h1>
                        <p className="text-gray-600 mt-2">
                            আয়কর আইনের সাধারণ প্রশ্ন ও বিস্তারিত উত্তর
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Sidebar - Question List */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm sticky top-6">

                        {/* Categories */}
                        <div className="p-5 border-b border-gray-100">
                            <h3 className="font-semibold text-gray-800 mb-3">বিষয়ভিত্তিক</h3>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        className="px-3 py-1.5 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition-colors"
                                    >
                                        {cat.name} ({cat.count})
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Question List */}
                        <div className="p-1">
                            <h3 className="font-semibold text-gray-800 px-4 py-3">সাধারণ প্রশ্নাবলী</h3>
                            <div className="space-y-1">
                                {questions.map((q) => (
                                    <button
                                        key={q.id}
                                        onClick={() => setOpenQuestion(q.id)}
                                        className={`w-full text-left p-4 rounded-lg transition-all ${openQuestion === q.id ? 'bg-green-50 border-l-4 border-green-500' : 'hover:bg-gray-50'}`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="text-xl mt-0.5">{q.icon}</span>
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-800 text-sm leading-snug">
                                                    {q.question}
                                                </div>
                                                <div className="mt-1">
                                                    <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                                                        {q.category}
                                                    </span>
                                                </div>
                                            </div>
                                            {openQuestion === q.id && (
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="p-5 border-t border-gray-100">
                            <h3 className="font-semibold text-gray-800 mb-3">দ্রুত সহায়তা</h3>
                            <div className="space-y-2">
                                <Link href="/tax-calculator" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <RiCalculatorLine className="text-green-600" />
                                    <span className="text-gray-700">কর ক্যালকুলেটর</span>
                                </Link>
                                <Link href="/tax-guide" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <RiFileListLine className="text-green-600" />
                                    <span className="text-gray-700">পূর্ণ গাইডলাইন</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Answer Details */}
                <div className="lg:col-span-2">
                    <div ref={answerRef} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

                        {/* Answer Header */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-gray-200">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <span className="text-2xl">{questions.find(q => q.id === openQuestion)?.icon}</span>
                                </div>
                                <div>
                                    <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-2">
                                        {questions.find(q => q.id === openQuestion)?.category}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                                        {questionDetails[openQuestion]?.title}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Answer Content */}
                        <div className="p-6 md:p-8">
                            <div className="prose max-w-none">
                                <div className="text-gray-700 leading-relaxed space-y-4">
                                    {questionDetails[openQuestion]?.content.split('\n\n').map((section, idx) => (
                                        <div key={idx} className="space-y-2">
                                            {section.split('\n').map((line, lineIdx) => (
                                                <div key={lineIdx} className={line.startsWith('✓') || line.startsWith('•') ? 'flex items-start gap-2' : ''}>
                                                    {line.startsWith('✓') ? (
                                                        <>
                                                            <span className="text-green-500 mt-0.5">✓</span>
                                                            <span className="text-gray-700">{line.substring(2)}</span>
                                                        </>
                                                    ) : line.startsWith('•') ? (
                                                        <>
                                                            <span className="text-gray-500 mt-0.5">•</span>
                                                            <span className="text-gray-700">{line.substring(2)}</span>
                                                        </>
                                                    ) : line.startsWith('✗') ? (
                                                        <>
                                                            <span className="text-red-500 mt-0.5">✗</span>
                                                            <span className="text-gray-700">{line.substring(2)}</span>
                                                        </>
                                                    ) : line.includes('|') ? (
                                                        <div className="overflow-x-auto">
                                                            <table className="w-full border-collapse">
                                                                <tbody>
                                                                    {line.split('\n').map((row, rowIdx) => (
                                                                        <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-gray-50' : ''}>
                                                                            {row.split('|').map((cell, cellIdx) => (
                                                                                <td key={cellIdx} className="border border-gray-200 px-3 py-2">
                                                                                    {cell.trim()}
                                                                                </td>
                                                                            ))}
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    ) : (
                                                        <p className={line.startsWith('---') ? 'text-gray-500 font-medium' : 'text-gray-700'}>
                                                            {line}
                                                        </p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="p-6 border-t border-gray-200 bg-gray-50">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">
                                        এই তথ্যটি আপডেট করা হয়েছে: {new Date().toLocaleDateString('bn-BD')}
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handlePrint}
                                        className="px-4 py-2 bg-white border border-green-200 text-green-700 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium print-hidden no-print"
                                    >
                                        প্রিন্ট করুন
                                    </button>

                                    <button
                                        onClick={handleShare}
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium print-hidden no-print"
                                    >
                                        শেয়ার করুন
                                    </button>

                                    <button
                                        onClick={handleCopyLink}
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium no-print"
                                    >
                                        লিংক কপি করুন
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Questions */}
                    <div className="mt-6">
                        <h3 className="font-semibold text-gray-800 mb-4">সম্পর্কিত প্রশ্নসমূহ</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {questions
                                .filter(q => q.id !== openQuestion)
                                .slice(0, 4)
                                .map((q) => (
                                    <button
                                        key={q.id}
                                        onClick={() => setOpenQuestion(q.id)}
                                        className="bg-white border border-gray-200 rounded-lg p-4 text-left hover:border-green-300 hover:shadow-sm transition-all"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="text-lg">{q.icon}</span>
                                            <div>
                                                <div className="font-medium text-gray-800 text-sm line-clamp-2">
                                                    {q.question}
                                                </div>
                                                <div className="mt-2">
                                                    <span className="text-xs text-green-600 font-medium">
                                                        বিস্তারিত পড়ুন →
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                    {/* Help Section */}
                    <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">আরও প্রশ্নের উত্তর প্রয়োজন?</h3>
                                <p className="text-gray-600">
                                    আমাদের বিশেষজ্ঞ দল আপনার প্রশ্নের উত্তর দিতে প্রস্তুত
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <Link
                                    href="/ask-expert"
                                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    বিশেষজ্ঞের সাথে কথা বলুন
                                </Link>
                                <Link
                                    href="/faq"
                                    className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors border border-blue-200"
                                >
                                    আরও FAQ দেখুন
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">৮+</div>
                    <div className="text-sm text-gray-600 mt-1">প্রশ্ন ক্যাটাগরি</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">৫০+</div>
                    <div className="text-sm text-gray-600 mt-1">মোট প্রশ্ন</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">২৪/৭</div>
                    <div className="text-sm text-gray-600 mt-1">সহায়তা প্রাপ্তি</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">১০০%</div>
                    <div className="text-sm text-gray-600 mt-1">সঠিক তথ্য</div>
                </div>
            </div>
        </div>
    );
};