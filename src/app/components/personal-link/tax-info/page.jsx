'use client'
import React, { useState } from "react";
import { PersonalFeature } from "../PersonalFeature";
import TaxAccordions from "../PersonalTax";
import GovernmentLinks from "../../GovtLink";

export default function page() {
    const [selectedTaxRebateId, setSelectedTaxRebateId] = useState(4);

    const handleChange = (e) => {
        setSelectedTaxRebateId(parseInt(e.target.value));
    };
    return (
        <div className="flex flex-col justify-start items-center gap-y-8 w-full mx-auto border-t border-t-gray-200">

            <PersonalFeature />

            <div className="flex flex-col md:flex-row items-start justify-center gap-x-5 w-full">

                <div className="w-full md:w-1/3">
                    <TaxAccordions />
                </div>

                <div className="w-full md:w-2/4 p-4">
                    <h1 className="text-center text-4xl font-bold mb-6">কর রেয়াত তথ্য</h1>

                    <div className="w-full mb-6 flex items-center justify-between">
                        <label className="block  font-semibold">করবর্ষ</label>
                        <div className="w-2/3">
                            <select
                                id="selectedTaxRebateId"
                                className="w-full border border-green-500 outline-none appearance-none rounded px-3 py-2"
                                value={selectedTaxRebateId}
                                onChange={handleChange}
                            >
                                <option value={4}>২০২৫-২০২৬</option>
                                <option value={3}>২০২৪-২০২৫</option>
                                <option value={2}>২০২৩-২০২৪</option>
                            </select>
                        </div>
                    </div>

                    {/* Description */}

                    {selectedTaxRebateId === parseInt(4) && (
                        <div className="space-y-2 text-justify mt-5">
                            <p>
                                আয়কর আইন, ২০২৩ এর ষষ্ঠ তফসিল এর অংশ ৩ অনুযায়ী বিনিয়োগ করা
                                হলে বিনিয়োগের সূত্র নিম্নরূপঃ
                            </p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;(ক) ০.০৩ x 'ক'; বা</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;(খ) ০.১৫ x 'খ'; বা</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;(গ) ১০ (দশ) লক্ষ টাকা,</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;এই তিনটির মধ্যে যাহা কম,</p>
                            <p>এইক্ষেত্রে-</p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'ক' =
                                কর অব্যাহতি প্রাপ্ত আয়, হ্রাসকৃত করহার প্রযোজ্য এইরূপ আয়,
                                অংশীদারী ফার্ম বা ব্যক্তিসংঘ হইতে প্রাপ্ত শেয়ার আয় এবং চূড়ান্ত
                                করদায় প্রযোজ্য এইরূপ আয় বাদ দিয়া পরিগণিত মোট আয়, এবং
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'খ' =
                                কোনো আয়বর্ষে ষষ্ঠ তফসিল এর অংশ ৩ অনুসারে করদাতার মোট বিনিয়োগ
                                ও ব্যয়ের পরিমাণ।
                            </p>
                            <p>&nbsp;</p>
                            <p className="text-red-600 font-bold">নোটঃ</p>
                            <p>
                                (১) কোনো করদাতা নিয়োগকারী কর্তৃপক্ষ হিসাবে প্রতিষ্ঠানে কর্মরত মোট
                                জনবলের অন্যুন ১০% (দশ শতাংশ) অথবা ২৫ (পঁচিশ) জনের অধিক
                                কর্মচারী প্রতিবন্ধী ব্যক্তিগণের মধ্য হইতে নিয়োগ করিলে উক্ত
                                করদাতাকে প্রদেয় করের ৫% (পাঁচ শতাংশ) অথবা প্রতিবন্ধী
                                ব্যক্তি-কর্মচারীগণের পরিশোধিত মোট বেতনের ৭৫% (পঁচাত্তর
                                শতাংশ), যাহা কম, কর রেয়াত প্রদান করা হইবে।
                            </p>
                            <p>
                                (২) কোনো করদাতা নিয়োগকারী কর্তৃপক্ষ হিসাবে প্রতিষ্ঠানে কর্মরত মোট
                                জনবলের অন্যুন ১০% (দশ শতাংশ) অথবা ২৫ (পঁচিশ) জনের অধিক
                                কর্মচারী তৃতীয় লিঙ্গের ব্যক্তিগণের মধ্য হইতে নিয়োগ করিলে উক্ত
                                করদাতাকে প্রদেয় করের ৫% (পাঁচ শতাংশ) অথবা তৃতীয় লিঙ্গের
                                কর্মচারীগণের পরিশোধিত মোট বেতনের ৭৫% (পঁচাত্তর শতাংশ), যাহা
                                কম, কর রেয়াত প্রদান করা হইবে।
                            </p>
                        </div>
                    )}
                    {selectedTaxRebateId === parseInt(3) && (
                        <div className="space-y-2 text-justify mt-5">
                            <p>
                                আয়কর আইন, ২০২৩ এর ষষ্ঠ তফসিল এর অংশ ৩ অনুযায়ী বিনিয়োগ করা হলে
                                বিনিয়োগের সূত্র নিম্নরূপঃ
                            </p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;(ক) ০.০৩ x 'ক'; বা</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;(খ) ০.১৫ x 'খ'; বা</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;(গ) ১০ (দশ) লক্ষ টাকা,</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;এই তিনটির মধ্যে যাহা কম,</p>
                            <p>এইক্ষেত্রে-</p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'ক' = কর
                                অব্যাহতি প্রাপ্ত আয়, হ্রাসকৃত করহার প্রযোজ্য এইরূপ আয় এবং নূন্যতম
                                কর প্রযোজ্য এইরূপ আয় বাদ দিয়া পরিগণিত মোট আয়, এবং
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'খ' =
                                কোনো আয়বর্ষে ষষ্ঠ তফসিল এর অংশ ৩ অনুসারে করদাতার মোট বিনিয়োগ ও
                                ব্যয়ের পরিমাণ।
                            </p>
                            <p>&nbsp;</p>
                            <p className="text-red-600 font-bold">
                                অর্থ আইন, ২০২৪ এর মাধ্যমে নিম্নরূপ সুবিধা প্রদান করা হয়েছে
                            </p>
                            <p>
                                (১) কোনো করদাতা নিয়োগকারী কর্তৃপক্ষ হিসাবে প্রতিষ্ঠানে কর্মরত মোট
                                জনবলের অন্যুন ১০% (দশ শতাংশ) অথবা ২৫ (পঁচিশ) জনের অধিক
                                কর্মচারী প্রতিবন্ধী ব্যক্তিগণের মধ্য হইতে নিয়োগ করিলে উক্ত করদাতাকে
                                প্রদেয় করের ৫% (পাঁচ শতাংশ) অথবা প্রতিবন্ধী ব্যক্তি-কর্মচারীগণের
                                পরিশোধিত মোট বেতনের ৭৫% (পঁচাত্তর শতাংশ), যাহা কম, কর রেয়াত
                                প্রদান করা হইবে।
                            </p>
                            <p>
                                (২) কোনো করদাতা নিয়োগকারী কর্তৃপক্ষ হিসাবে প্রতিষ্ঠানে কর্মরত মোট
                                জনবলের অন্যুন ১০% (দশ শতাংশ) অথবা ২৫ (পঁচিশ) জনের অধিক
                                কর্মচারী তৃতীয় লিঙ্গের ব্যক্তিগণের মধ্য হইতে নিয়োগ করিলে উক্ত
                                করদাতাকে প্রদেয় করের ৫% (পাঁচ শতাংশ) অথবা তৃতীয় লিঙ্গের
                                কর্মচারীগণের পরিশোধিত মোট বেতনের ৭৫% (পঁচাত্তর শতাংশ), যাহা কম,
                                কর রেয়াত প্রদান করা হইবে।
                            </p>
                        </div>
                    )}
                    {selectedTaxRebateId === parseInt(2) && (
                        <div className="space-y-2 text-justify mt-5">
                            <p>
                                আয়কর আইন, ২০২৩ এর ষষ্ঠ তফসিল এর অংশ ৩ অনুযায়ী বিনিয়োগ করা হলে
                                বিনিয়োগের সূত্র নিম্নরূপঃ
                            </p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;(ক) ০.০৩ x 'ক'; বা</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;(খ) ০.১৫ x 'খ'; বা</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;(গ) ১০ (দশ) লক্ষ টাকা,</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;এই তিনটির মধ্যে যাহা কম,</p>
                            <p>এইক্ষেত্রে-</p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'ক' =
                                কর অব্যাহতি প্রাপ্ত আয়, হ্রাসকৃত করহার প্রযোজ্য এইরূপ আয় এবং
                                নূন্যতম কর প্রযোজ্য এইরূপ আয় বাদ দিয়া পরিগণিত মোট আয়, এবং
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'খ' =
                                কোনো আয়বর্ষে ষষ্ঠ তফসিল এর অংশ ৩ অনুসারে করদাতার মোট বিনিয়োগ ও
                                ব্যয়ের পরিমাণ।
                            </p>
                        </div>
                    )}

                </div>
            </div>

            <GovernmentLinks />
        </div>
    );
}
