'use client';

import GovernmentLinks from "@/app/components/GovtLink";
import { PersonalFeature } from "@/app/components/personal-link/PersonalFeature";
import TaxAccordions from "@/app/components/personal-link/PersonalTax";
import { useParams } from "next/navigation";
import { Section163 } from "./Section163";
import { Section164 } from "./Section164";
import { Section165 } from "./Section165";
import { Section166 } from "./Section166";
import { Section167 } from "./Section167";
import { Section168 } from "./Section168";

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

                    {id === '1' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section163/>
                        </div>
                    )}
                    {id === '2' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section164/>
                        </div>
                    )}
                    {id === '3' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section165/>
                        </div>
                    )}
                    {id === '4' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section166/>
                        </div>
                    )}
                    {id === '5' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section167/>
                        </div>
                    )}
                    {id === '6' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section168/>
                        </div>
                    )}
                </div>
            </div>

            <GovernmentLinks />
        </div>
    );
}
