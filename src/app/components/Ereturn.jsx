import Link from "next/link";

export const govLinks = [
    { title: "ই-টিডিএস", link: "https://etds.nbr.gov.bd" },
    { title: "ই-টিআইএন", link: "https://secure.incometax.gov.bd" },
    { title: "এ-চালান", link: "https://echallan.gov.bd" },
    { title: "এনবিআর ওয়েবসাইট", link: "https://nbr.gov.bd" },
    { title: "সোনালী ব্যাংক পেমেন্ট", link: "https://spg.sonalibank.com.bd" },
    { title: "ই-রিটার্ন ওয়েবসাইট", link: "https://etax.nbr.gov.bd" },
    { title: "রিটার্ন ভেরিফাই", link: "https://etax.nbr.gov.bd/verify" }
];

export const personalTaxLinks = [
    { title: "বেতন হতে কর কর্তন", link: "/components/personal-link/salary" },
    { title: "ব্যক্তি করহার", link: "/components/tax-act/tax-rate" },
    { title: "চূড়ান্ত করের খাতসমূহ", link: "/components/personal-link/final-tax" },
    { title: "সারচার্জ", link: "/components/personal-link/surcharge" },
    { title: "কর রেয়াত ক্যালকুলেটর", link: "/components/personal-link/tax-rebate" },
    { title: "কর রেয়াত তথ্য", link: "/components/personal-link/tax-info" },
    { title: "ব্যক্তিগত গাড়ির কর", link: "/components/personal-link/private-car-tax" },
    { title: "বাণিজ্যিক গাড়ির কর", link: "/components/personal-link/commercial-car-tax" },
    { title: "পরিবেশ সারচার্জের হার", link: "/components/personal-link/env-surcharge" },
    { title: "আঞ্চলিক ন্যূনতম কর", link: "/components/personal-link/regional-min-tax" },
    { title: "হ্রাসকৃত আয় ও কর", link: "/components/personal-link/reduced-income-tax" },
    { title: "ব্যক্তি ফর্ম", link: "/components/personal-link/personal-form" }
];

export const Ereturn = () => {
    return (
        <div className="w-full h-auto px-5 mt-10 flex flex-col items-center gap-y-4">

            <div className="ribbon text-2xl font-bold text-white tracking-wide pb-5 drop-shadow-2xl">
                ই-রিটার্ন কর্ণার
            </div>

            {/* Top Grid */}
            <div className="grid w-full h-52 grid-cols-4 gap-6 py-6">
                {[
                    "আইটি খাতের আয় ই-রিটার্ন সিস্টেমে কিভাবে ইনপুট করবেন",
                    "জিপিএফ সুদ বাবদ আয় ই-রিটার্ন সিস্টেমে কিভাবে দেখাতে হবে",
                    "পেনশন বাবদ আয় ই-রিটার্ন সিস্টেমে কিভাবে দেখাতে হবে?",
                    "ডেভেলপার হতে প্রাপ্ত সাইনিং মানি বাবদ প্রাপ্ত আয় ই-রিটার্ন সিস্টে..."
                ].map((text, i) => (
                    <div
                        key={i}
                        className="w-full h-full flex border border-[#172d13] rounded-xl bg-[#172d13] shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex-col items-start"
                    >
                        <div className="h-40 w-full bg-gradient-to-br from-orange-100 to-blue-100 rounded-t-xl"></div>
                        <p className="flex-1 flex items-center justify-start text-sm px-3 py-2 text-white font-medium">{text}</p>
                    </div>
                ))}
            </div>

            <Link
                href=""
                className="px-4 py-2.5 mt-10 self-end font-semibold text-sm bg-linear-to-r from-[#172d13] to-[#172d13b7] hover:shadow-2xl hover:bg-[#172d13] rounded-lg shadow text-white transition-all duration-300"
            >
                View More
            </Link>

            <div className="w-full h-auto flex flex-col lg:flex-row items-start justify-between gap-7 mt-6">

                {/* Left side links */}
                <div className="w-full lg:w-[330px] h-auto flex flex-col justify-start">

                    <div className="ribbon2 text-center py-2 text-white text-lg font-semibold rounded-md shadow-sm">
                        <p>প্রয়োজনীয় সরকারি লিংক</p>
                    </div>

                    <div className="w-full h-auto flex flex-col gap-y-2 mt-4">
                        {govLinks.map((item, i) => (
                            <Link
                                key={i}
                                href={item.link}
                                target="_blank"
                                className="bg-[#172d13] text-white border border-[#172d13] text-start px-3 py-2.5 flex items-center gap-x-2 text-[15px] hover:scale-[1.02] hover:shadow-md transition-all duration-300 rounded-full"
                            >
                                <img src="/logo/green-check.png" alt="" className="w-5 opacity-80" />
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right side cards */}
                <div className="flex-1 h-auto">

                    <div className="ribbon2 text-center py-2 text-white text-lg font-semibold rounded-md shadow-sm">
                        <p>ব্যক্তি করদাতার জন্য প্রযোজ্য</p>
                    </div>

                    <div className="w-full h-72 mt-5 grid items-center justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 px-6">
                        {personalTaxLinks.map((item, i) => (
                            <Link
                                key={i}
                                href={item.link}
                                className="bg-[#172d13b7] h-full w-full rounded-t-xl rounded-b-[20px] hover:scale-105 hover:shadow-xl border border-blue-100 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden"
                            >
                                <div className="flex-1 px-1 text-center flex flex-col gap-y-6 items-center justify-center">
                                    <img src="/logo/green-check.png" className="w-6 opacity-80" alt="" />
                                    <p className="text-white font-medium">{item.title}</p>
                                </div>
                                <p className="text-[11px] bg-[#172d13] py-0.5 text-white w-full text-center font-semibold">
                                    BDTaxation
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
