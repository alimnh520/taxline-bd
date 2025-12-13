'use client';

import GovernmentLinks from "@/app/components/GovtLink";
import { PersonalFeature } from "@/app/components/personal-link/PersonalFeature";
import TaxAccordions from "@/app/components/personal-link/PersonalTax";
import { useParams } from "next/navigation";
import { Section86 } from "./Section86";
import { Section87 } from "./Section87";
import { Section88 } from "./Section88";

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
                </div>
            </div>

            <GovernmentLinks />
        </div>
    );
}
