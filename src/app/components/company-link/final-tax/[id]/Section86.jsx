'use client'

import { useEffect, useState } from "react";

export function Section86() {
    const [selectedYear, setSelectedYear] = useState('1');

    const printSection = () => {
        const originalContents = document.body.innerHTML;

        const section = document.getElementById('sectionContent');
        const cloneSection = section.cloneNode(true);

        const selectBox = cloneSection.querySelector('#selectedMinimumTaxAmountId');
        if (selectBox) {
            selectBox.innerHTML = '';
            const option = document.createElement('option');
            option.value = selectedYear;
            option.text = selectedYear === '1' ? '২০২৪ - ২০২৫' : selectedYear === '2' ? '২০২৫ - ২০২৬' : '২০২৩ - ২০২৪';
            selectBox.appendChild(option);
            selectBox.value = selectedYear;
        }

        document.body.innerHTML = '';
        document.body.appendChild(cloneSection);

        // Logo
        const logo = document.createElement('img');
        logo.src = '/TaxLine_BD-PNG.png';
        logo.alt = 'BDTaxation Logo';
        logo.className = 'md:h-24 h-[70px] object-contain';
        document.body.prepend(logo);

        // Watermark
        const watermark = document.createElement('div');
        watermark.className = 'watermark';
        watermark.innerText = 'TaxLine_BD';
        document.body.prepend(watermark);

        // Styles
        const style = document.createElement('style');
        style.innerHTML = `
        body { font-size: 12px; font-family: sans-serif; position: relative; min-height: 100vh;}
        .watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-30deg);
            font-size: 5rem;
            color: rgba(0,0,0,0.05);
            pointer-events: none;
            z-index: 0;
        }
        img { display: block; margin: 0 auto 20px; max-height: 100px; }
    `;
        document.head.prepend(style);

        window.print();

        // Restore original content
        document.body.innerHTML = originalContents;
        window.location.reload();
    };



    return (
        <div className="col-md-6 order-1 order-md-2" id="sectionContent" >

            {/* Print Button */}
            <button
                className="btn btn-secondary print:hidden bg-[#ff0000] px-4 py-2 text-white rounded-md"
                onClick={printSection}
            >
                Print
            </button>

            <h1 className="my-1 font-bold text-2xl py-1">চাকরির আয় হইতে উৎসে কর কর্তন</h1>
            <strong className="text-sm">ধারা : ৮৬</strong>
            <hr className="my-1 text-gray-100" />

            <div className="row g-1">
                <div className="col-md-12">
                    <div className="mb-3 row flex items-center justify-between">
                        <label className="block  font-semibold">করবর্ষ</label>
                        <div className="w-2/4">
                            <select
                                id="selectedMinimumTaxAmountId"
                                className="w-full border border-green-500 outline-none appearance-none rounded px-3 py-1.5"
                                value={selectedYear}
                                onChange={(e) => {
                                    setSelectedYear(e.target.value);
                                }}
                            >
                                <option value="1">২০২৪ - ২০২৫</option>
                                <option value="2">২০২৫ - ২০২৬</option>
                                <option value="3">২০২৩ - ২০২৪ </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 mt-6 text-sm">
                    <div className="w-full">

                        <div className={`text-justify ${selectedYear === '2' ? 'block' : 'hidden'} space-y-4`}>

                            <p>(১) কোনো প্রাপককে "চাকরি হইতে আয়" খাতের অধীন কোনো চাকরির অর্থ পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি, উক্ত অর্থ পরিশোধের সময়, উক্ত খাতের অধীন প্রাপকের প্রাক্কলিত মোট আয়ের উপর প্রযোজ্য করের গড় হারে কর কর্তন করিবেন।</p>

                            <p>(২) বিলুপ্ত (করবর্ষ: ২০২৪-২০২৫)</p>

                            <p>(৩) যেইক্ষেত্রে কোনো সরকারি কর্মকর্তা আয়নকারী ও ব্যয়নকারী কর্মকর্তা (ডিডিও) হিসাবে কার্য সম্পাদন করিয়াছেন বা সরকার বা অন্য কোনো কর্তৃপক্ষের নিকট হইতে "চাকরি হইতে আয়" উত্তোলন করিবার জন্য নিজের বা অন্য কোনো সরকারি অধীনস্তের জন্য বিল প্রস্তুত বা স্বাক্ষর করিয়াছেন, সেইক্ষেত্রে তিনি উক্ত বিল তৈরি বা স্বাক্ষরের সময়, উক্ত আয়বর্ষের জন্য প্রদেয় বার্ষিক বেতন যদি করমুক্ত সীমা অতিক্রম করে, তাহা হইলে উক্ত আয়বর্ষের আনুমানিক মোট আয়ের জন্য প্রযোজ্য করের গড় হারে কর কর্তন করিবেন।</p>

                            <p>
                                (৪) উপ-ধারা (১) এবং (৩) এর অধীন কোনো কর্তনের সময়,
                                <span className="text-red-600"> চলতি আয়বর্ষের </span>
                                কোনো উদ্বৃত বা ঘাটতির সহিত সমন্বয়ের জন্য উদ্বৃত্ত বা ঘাটতির সমপরিমাণ অর্থ বৃদ্ধি বা হ্রাস করা যাইবে।
                            </p>

                            <p>
                                (৫) যেইক্ষেত্রে এই আইনের অধীন প্রদেয় অগ্রিম করসহ, এই ধারার অধীন ইতোমধ্যে উৎসে কর প্রদান করা হইয়াছে এবং কোনো কর্মচারীর সম্ভাব্য মোট আয়ের উপর প্রযোজ্য কর উক্তরূপে প্রদেয় করের পরিমাণের কাছাকাছি বলিয়া বিবেচিত হয়, সেইক্ষেত্রে উপকর কমিশনার উক্ত কর্মচারী কর্তৃক দাখিলকৃত আবেদন এবং প্রদত্ত প্রমাণাদির ভিত্তিতে, অবশিষ্ট আয়বর্ষের জন্য এই মর্মে প্রত্যয়নপত্র জারি করিতে পারিবেন যে, উক্ত কর্মচারীর নিকট হইতে কোনো কর কর্তন করা হইবে না বা কম হারে কর কর্তন করা হইবে।
                            </p>

                            <h5 className="font-semibold mt-6">মন্তব্য :</h5>

                            <div className="text-red-600">উপ-ধারা (৪) সংশোধন করা হয়েছে</div>

                        </div>

                        <div className={`text-justify ${selectedYear === '1' ? 'block' : 'hidden'} space-y-4`}>

                            <p>
                                <br />
                                (১) কোনো প্রাপককে "চাকরি হইতে আয়" খাতের অধীন কোনো চাকরির অর্থ পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি, উক্ত অর্থ পরিশোধের সময়, উক্ত খাতের অধীন প্রাপকের
                                <span className="text-red-600"> প্রাক্কলিত </span>
                                মোট আয়ের উপর প্রযোজ্য করের গড় হারে কর কর্তন করিবেন।
                            </p>

                            <p>
                                <span className="text-red-600">
                                    (২) উক্ত উপ-ধারাটি আলোচ্য করবর্ষে বিলুপ্ত করা হইয়াছে।
                                </span>
                            </p>

                            <p>
                                (৩) যেইক্ষেত্রে কোনো সরকারি কর্মকর্তা আয়নকারী ও ব্যয়নকারী কর্মকর্তা (ডিডিও) হিসাবে কার্য সম্পাদন করিয়াছেন বা সরকার বা অন্য কোনো কর্তৃপক্ষের নিকট হইতে "চাকরি হইতে আয়" উত্তোলন করিবার জন্য নিজের বা অন্য কোনো সরকারি অধীনস্তের জন্য বিল প্রস্তুত বা স্বাক্ষর করিয়াছেন, সেইক্ষেত্রে তিনি উক্ত বিল তৈরি বা স্বাক্ষরের সময়, উক্ত আয়বর্ষের জন্য প্রদেয় বার্ষিক বেতন যদি করমুক্ত সীমা অতিক্রম করে, তাহা হইলে উক্ত আয়বর্ষের আনুমানিক মোট আয়ের জন্য প্রযোজ্য করের গড় হারে কর কর্তন করিবেন।
                            </p>

                            <p>
                                (৪) উপ-ধারা (১) এবং (৩) এর অধীন কোনো কর্তনের সময়, পূর্ববর্তী কোনো উদ্বৃত বা ঘাটতির সহিত সমন্বয়ের জন্য উদ্বৃত্ত বা ঘাটতির সমপরিমাণ অর্থ বৃদ্ধি বা হ্রাস করা যাইবে।
                            </p>

                            <p>
                                (৫) যেইক্ষেত্রে এই আইনের অধীন প্রদেয় অগ্রিম করসহ, এই ধারার অধীন ইতোমধ্যে উৎসে কর প্রদান করা হইয়াছে এবং কোনো কর্মচারীর সম্ভাব্য মোট আয়ের উপর প্রযোজ্য কর উক্তরূপে প্রদেয় করের পরিমাণের কাছাকাছি বলিয়া বিবেচিত হয়, সেইক্ষেত্রে উপকর কমিশনার উক্ত কর্মচারী কর্তৃক দাখিলকৃত আবেদন এবং প্রদত্ত প্রমাণাদির ভিত্তিতে, অবশিষ্ট আয়বর্ষের জন্য এই মর্মে প্রত্যয়নপত্র জারি করিতে পারিবেন যে, উক্ত কর্মচারীর নিকট হইতে কোনো কর কর্তন করা হইবে না বা কম হারে কর কর্তন করা হইবে।
                                <br /><br />
                            </p>

                            <h5 className="font-semibold mt-6">মন্তব্য :</h5>

                            <div className="text-red-600">
                                আলোচ্য করবর্ষে উক্ত ধারার উপ-ধারা (১) সংশোধন করা হয়েছে এবং উপ-ধারা (২) বিলুপ্ত করা হয়েছে
                            </div>

                        </div>

                        <div className={`text-justify ${selectedYear === '3' ? 'block' : 'hidden'} space-y-4`}>

                            <p>
                                <br />
                                (১) কোনো প্রাপককে "চাকরি হইতে আয়" খাতের অধীন কোনো চাকরির অর্থ পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি,
                                উক্ত অর্থ পরিশোধের সময়, উক্ত খাতের অধীন প্রাপকের
                                <span className="text-black"> আনুমানিক </span>
                                মোট আয়ের উপর প্রযোজ্য করের গড় হারে কর কর্তন করিবেন।
                            </p>

                            <p>
                                <span className="text-black">
                                    (২) স্বীকৃত ভবিষ্য তহবিলের পুঞ্জিভূত স্থিতি হইতে কোনো অর্থ পরিশোধের জন্য দায়িত্বপ্রাপ্ত ব্যক্তি দ্বিতীয় তফসিলের অংশ ৩ এর অনুচ্ছেদ ৬ এ উল্লিখিত প্রযোজ্য ক্ষেত্রে কর কর্তন করিবেন।
                                </span>
                            </p>

                            <p>
                                (৩) যেইক্ষেত্রে কোনো সরকারি কর্মকর্তা আয়নকারী ও ব্যয়নকারী কর্মকর্তা (ডিডিও) হিসাবে কার্য সম্পাদন করিয়াছেন
                                বা সরকার বা অন্য কোনো কর্তৃপক্ষের নিকট হইতে "চাকরি হইতে আয়" উত্তোলন করিবার জন্য নিজের বা অন্য কোনো সরকারি অধীনস্তের জন্য বিল প্রস্তুত বা স্বাক্ষর করিয়াছেন, সেইক্ষেত্রে তিনি উক্ত বিল তৈরি বা স্বাক্ষরের সময়,
                                উক্ত আয়বর্ষের জন্য প্রদেয় বার্ষিক বেতন যদি করমুক্ত সীমা অতিক্রম করে, তাহা হইলে উক্ত আয়বর্ষের আনুমানিক মোট আয়ের জন্য প্রযোজ্য করের গড় হারে কর কর্তন করিবেন।
                            </p>

                            <p>
                                (৪) উপ-ধারা (১) এবং (৩) এর অধীন কোনো কর্তনের সময়, পূর্ববর্তী কোনো উদ্বৃত বা ঘাটতির সহিত সমন্বয়ের জন্য উদ্বৃত্ত
                                বা ঘাটতির সমপরিমাণ অর্থ বৃদ্ধি বা হ্রাস করা যাইবে।
                            </p>

                            <p>
                                (৫) যেইক্ষেত্রে এই আইনের অধীন প্রদেয় অগ্রিম করসহ, এই ধারার অধীন ইতোমধ্যে উৎসে কর প্রদান করা হইয়াছে এবং
                                কোনো কর্মচারীর সম্ভাব্য মোট আয়ের উপর প্রযোজ্য কর উক্তরূপে প্রদেয় করের পরিমাণের কাছাকাছি বলিয়া বিবেচিত হয়, সেইক্ষেত্রে উপকর কমিশনার উক্ত কর্মচারী কর্তৃক দাখিলকৃত আবেদন এবং প্রদত্ত প্রমাণাদির ভিত্তিতে,
                                অবশিষ্ট আয়বর্ষের জন্য এই মর্মে প্রত্যয়নপত্র জারি করিতে পারিবেন যে, উক্ত কর্মচারীর নিকট হইতে কোনো কর কর্তন করা হইবে না
                                বা কম হারে কর কর্তন করা হইবে।
                                <br /><br />
                            </p>

                        </div>
                    </div>

                </div>
            </div>

            <ins
                className="adsbygoogle border no-print border-gray-200"
                style={{ display: "inline-block", width: "100%", height: "90px" }}
                data-ad-client="ca-pub-7809188873696785"
                data-ad-slot="7161102196"
            ></ins>

            <hr className="mt-6 text-gray-200" />

            <style>
                {`
                    #comment p {
                        color: red;
                    }
                `}
            </style>

            <div className="mt-6 text-sm">
                <strong>মন্তব্য : </strong>
                <span id="comment">
                    <p>
                        ১। আইনটি অর্থ আইন ২০২৪ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৪-২০২৫) আলোচ্য
                        করবর্ষে উক্ত ধারার উপ-ধারা (১) সংশোধন করা হয়েছে এবং উপ-ধারা (২) বিলুপ্ত করা হয়েছে।
                    </p>
                    <p className="mt-5">২। আইনটি অর্থ অধ্যাদেশ ২০২৫ দ্বারা সংশোধিত হয়েছে। (করবর্ষঃ ২০২৫-২০২৬)</p>
                </span>
            </div>

            <hr className="mt-6 text-gray-200" />
        </div>
    );
}