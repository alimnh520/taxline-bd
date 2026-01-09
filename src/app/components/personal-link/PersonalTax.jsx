'use client'
// components/TaxAccordion.js
import { TfiHandPointRight } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

// ব্যক্তিগত কর লিঙ্ক
const personalLinks = [
    { name: "বেতন হতে কর কর্তন", href: "/components/personal-link/salary" },
    { name: "ব্যক্তি করহার", href: "/components/tax-act/tax-rate" },
    { name: "চূড়ান্ত করের খাতসমূহ", href: "/components/personal-link/final-tax" },
    { name: "সারচার্জ", href: "/components/personal-link/surcharge" },
    { name: "কর রেয়াত ক্যালকুলেটর", href: "/components/personal-link/tax-rebate" },
    { name: "কর রেয়াত তথ্য", href: "/components/personal-link/tax-info" },
    { name: "ব্যক্তিগত গাড়ির কর", href: "/components/personal-link/private-car-tax" },
    { name: "বাণিজ্যিক গাড়ি কর", href: "/components/personal-link/commercial-car-tax" },
    { name: "পরিবেশ সারচার্জের হার", href: "/components/personal-link/env-surcharge" },
    { name: "আঞ্চলিক ন্যূনতম কর", href: "/components/personal-link/regional-min-tax" },
    { name: "হ্রাসকৃত আয় ও কর", href: "/components/personal-link/reduced-income-tax" },
    { name: "ব্যক্তি ফর্ম", href: "/components/personal-link/personal-form" },
];

// প্রতিষ্ঠান কর লিঙ্ক
const corporateLinks = [
    { name: "কোম্পানি কর হার", href: "company-tax-minimum-tax" },
    { name: "ন্যূনতম করের পরিমাণ", href: "minimum-tax-amount" },
    { name: "কর কর্তনের খাতসমূহ", href: "tax-deduction-rate" },
    { name: "উৎসে কর সংগ্রহের খাতসমূহ", href: "source-tax-collection" },
    { name: "চূড়ান্ত করের খাতসমূহ", href: "final-tax-heads" },
    { name: "নূন্যতম করের খাতসমূহ", href: "minimum-tax-heads" },
    { name: "হ্রাসকৃত আয় ও কর", href: "reduced-rate-incomes" },
    { name: "অব্যাহতি প্রাপ্ত আয়", href: "exempted-incomes" },
    { name: "বাণিজ্যিক গাড়ি কর", href: "company-car-tax" },
    { name: "পরিবেশ সারচার্জের হার", href: "environmental-surcharge" },
    { name: "প্রতিষ্ঠান ফর্ম", href: "forms?type=company" },
];

const aecLinks = [
    { name: "আপ্যায়ন ব্যয়", href: "calculator/aec/entertainment-cost" },
    { name: "নমুনা ব্যয়", href: "calculator/aec/sample-cost" },
    { name: "প্রচারণামূলক ব্যয়", href: "calculator/aec/promotional-cost" },
    { name: "বিদেশ ভ্রমণ ব্যয়", href: "calculator/aec/foreign-tour-cost" },
    { name: "রয়্যালিটি ও অন্যান্য ব্যয়", href: "calculator/aec/royalties-licence-technical-service" },
    { name: "হেড অফিস ও অন্যান্য ব্যয়", href: "calculator/aec/unregistered-bd-company-intra-group-expensese" },
];

const appealLinks = [
    { name: "কর অঞ্চল", href: "range-zone-circle" },
    { name: "আপীল", href: "" },
    { name: "আয়কর আইনে আপিল ট্রাইব্যুনাল", href: "" },
    { name: "ট্যাক্স হাইকোর্ট", href: "" },
    { name: "এডিআর", href: "income-tax-sro/137" },
];
const resourcesLinks = [
    { name: "বাংলাদেশের সকল বাণিজ্যিক ব্যাংকের তালিকা", href: "bank-list" },
    { name: "জিপি রেট", href: "gp-rate" },
    { name: "পিডব্লিউডি হার", href: "pwd-rate" },
    { name: "এরিয়া কনভার্টার", href: "area-converter" },
    { name: "নোটিশ", href: "notice-file" },
];
const penaltiesLinks = [
    { name: "পুনঃউন্মোচন তারিখ ক্যালকুলেটর", href: "calculator/reopen-date-calculator" },
    { name: "আয় গোপনের জরিমানা", href: "calculator/concealment-penalty" },
];

const nbrLinks = [
    { name: "এনবিআর স্পষ্টীকরণ", href: "nbr-clarifications" },
    { name: "জরুরী পাবলিকেশন্স", href: "nbr-publications" },
    { name: "কর অফিসিয়াল", href: "tax-officials" },
];






// Accordion কম্পোনেন্ট
function Accordion({ title, links, defaultOpenPath, height }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (defaultOpenPath.includes(pathname)) {
            setIsOpen(true);
        }
    }, [pathname, defaultOpenPath]);

    return (
        <div className="border-0 shadow p-2 rounded mb-3 w-72">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full relative text-left cursor-pointer font-bold text-gray-800 flex justify-between items-center"
            >
                {title}
                <span className={`transform transition-transform absolute right-1 text-xl ${isOpen ? "rotate-90" : "rotate-0"}`}>
                    <TfiHandPointRight />
                </span>
            </button>
            <ul className="mt-2 space-y-1 transition-all duration-300 overflow-hidden"
                style={{
                    height: isOpen ? `${height}px` : '0'
                }}
            >
                {links.map((link, idx) => (
                    <li key={idx}>
                        <a
                            href={link.href}
                            className="flex items-center text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-gray-100 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TfiHandPointRight className="mr-2 -mt-1 w-5" />
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// একাধিক অ্যাকর্ডিয়ন একসাথে ব্যবহার করা
export default function TaxAccordions() {
    return (
        <div className="px-2 mt-5">
            <Accordion title="ব্যক্তি করদাতার জন্য প্রযোজ্য" links={personalLinks} height={520} defaultOpenPath={["/components/personal-link/salary", "/components/tax-act/tax-rate", "/components/tax-act/tax-guideline", "/components/personal-link/final-tax", "/components/personal-link/surcharge", "/components/personal-link/tax-rebate", "/components/personal-link/tax-info", "/components/personal-link/commercial-car-tax", "/components/personal-link/private-car-tax", "/components/personal-link/env-surcharge", "/components/personal-link/regional-min-tax", "/components/personal-link/personal-form"]} />
            <Accordion title="কোম্পানির জন্য প্রযোজ্য" links={corporateLinks} height={500} defaultOpenPath={["/components/company-link/company-tax", "/components/company-link/minimum-tax", "/components/company-link/final-tax", "/components/company-link/source-tax-collection", "/components/company-link/final-tax-heads", "/components/company-link/minimum-tax-heads", "/components/company-link/company-car-tax", "/components/company-link/environmental-surcharge", "/components/company-link/depreciation-allowance"]} />
            <Accordion title=" ব্যবসায়ে খরচ সম্পর্কিত " links={aecLinks} height={260} defaultOpenPath={["/components/corporate-link",]} />
            <Accordion title=" কর অফিস সম্পর্কিত " links={appealLinks} height={230} defaultOpenPath={["/components/corporate-link",]} />
            <Accordion title=" বিশেষ আইটেম " links={resourcesLinks} height={230} defaultOpenPath={["/components/corporate-link",]} />
            <Accordion title=" বিশেষ ক্যালকুলেটর " links={penaltiesLinks} height={80} defaultOpenPath={["/components/corporate-link",]} />
            <Accordion title=" পাবলিকেশন্স " links={nbrLinks} height={130} defaultOpenPath={["/components/corporate-link",]} />
        </div>
    );
}
