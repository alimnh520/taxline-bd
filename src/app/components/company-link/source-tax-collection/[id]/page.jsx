'use client';

import GovernmentLinks from "@/app/components/GovtLink";
import { PersonalFeature } from "@/app/components/personal-link/PersonalFeature";
import TaxAccordions from "@/app/components/personal-link/PersonalTax";
import { useParams } from "next/navigation";
import { Section120 } from "./Section120";
import { Section121 } from "./Section121";
import { Section122 } from "./Section122";
import { Section123 } from "./Section123";
import { Section124 } from "./Section124";
import { Section125 } from "./Section125";
import { Section126 } from "./Section126";
import { Section127 } from "./Section127";
import { Section128 } from "./Section128";
import { Section129 } from "./Section129";
import { Section130 } from "./Section130";
import { Section131 } from "./Section131";
import { Section132 } from "./Section132";
import { Section133 } from "./Section133";
import { Section134 } from "./Section134";
import { Section135 } from "./Section135";
import { Section136 } from "./Section136";
import { Section137 } from "./Section137";
import { Section138 } from "./Section138";
import { Section139 } from "./Section139";

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

                    {id === '120' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section120 />
                        </div>
                    )}
                    {id === '121' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section121 />
                        </div>
                    )}
                    {id === '122' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section122 />
                        </div>
                    )}
                    {id === '123' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section123 />
                        </div>
                    )}
                    {id === '124' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section124 />
                        </div>
                    )}
                    {id === '125' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section125 />
                        </div>
                    )}
                    {id === '126' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section126 />
                        </div>
                    )}
                    {id === '127' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section127 />
                        </div>
                    )}
                    {id === '128' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section128 />
                        </div>
                    )}
                    {id === '129' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section129 />
                        </div>
                    )}
                    {id === '130' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section130 />
                        </div>
                    )}
                    {id === '131' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section131 />
                        </div>
                    )}
                    {id === '132' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section132 />
                        </div>
                    )}
                    {id === '133' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section133 />
                        </div>
                    )}
                    {id === '134' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section134 />
                        </div>
                    )}
                    {id === '135' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section135 />
                        </div>
                    )}
                    {id === '136' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section136 />
                        </div>
                    )}
                    {id === '137' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section137 />
                        </div>
                    )}
                    {id === '138' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section138 />
                        </div>
                    )}
                    {id === '139' && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section139 />
                        </div>
                    )}
                </div>
            </div>

            <GovernmentLinks />
        </div>
    );
}
