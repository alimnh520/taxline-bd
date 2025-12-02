'use client'
import React from "react";

const GovernmentLinks = () => {
    const links = [
        { name: "ই-টিডিএস", url: "https://etds.gov.bd/" },
        { name: "ই-টিআইএন", url: "https://secure.incometax.gov.bd/TINHome" },
        { name: "এ-চালান", url: "https://ibas.finance.gov.bd/acs/" },
        { name: "এনবিআর ওয়েবসাইট", url: "https://nbr.gov.bd/" },
        { name: "সোনালী ব্যাংক পেমেন্ট", url: "https://nbr.sblesheba.com/IncomeTax/Payment" },
        { name: "ই-রিটার্ন ওয়েবসাইট", url: "https://etaxnbr.gov.bd/#/auth/sign-in" },
        { name: "রিটার্ন ভেরিফাই", url: "https://etaxnbr.gov.bd/#/submission-verification" },
    ];

    return (
        <div className="shadow-lg rounded-lg py-8 my-4 bg-white w-10/12">
            <h4 className="text-center text-2xl font-bold mb-4">প্রয়োজনীয় সরকারি লিংক</h4>
            <div className="flex flex-wrap justify-center gap-3">
                {links.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default GovernmentLinks;
