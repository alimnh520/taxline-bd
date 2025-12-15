'use client';

import GovernmentLinks from "@/app/components/GovtLink";
import { PersonalFeature } from "@/app/components/personal-link/PersonalFeature";
import TaxAccordions from "@/app/components/personal-link/PersonalTax";
import { useParams } from "next/navigation";
import { Section86 } from "./Section86";
import { Section87 } from "./Section87";
import { Section88 } from "./Section88";
import { Section89 } from "./Section89";
import { Section90 } from "./Section90";
import { Section91 } from "./Section91";
import { Section92 } from "./Section92";
import { Section93 } from "./Section93";
import { Section94 } from "./Section94";
import { Section95 } from "./Section95";

export default function PdfViewer() {
    const { id } = useParams();

    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex flex-col justify-start gap-y-8 mx-auto border-t border-t-gray-200">

                <PersonalFeature />

                <div className="flex flex-col md:flex-row items-start justify-between gap-x-10 w-10/12 mx-auto">

                    <div className="w-full md:w-1/3">
                        <TaxAccordions />
                    </div>

                    {id === "1" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section86 />
                        </div>
                    )}
                    {id === "2" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section87 />
                        </div>
                    )}
                    {id === "3" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section88 />
                        </div>
                    )}
                    {id === "4" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section89 />
                        </div>
                    )}
                    {id === "5" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section90 />
                        </div>
                    )}
                    {id === "6" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section91 />
                        </div>
                    )}
                    {id === "7" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section92 />
                        </div>
                    )}
                    {id === "8" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section93 />
                        </div>
                    )}
                    {id === "9" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section94 />
                        </div>
                    )}
                    {id === "10" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section95 />
                        </div>
                    )}
                </div>
            </div>

            <GovernmentLinks />
        </div>
    );
}
