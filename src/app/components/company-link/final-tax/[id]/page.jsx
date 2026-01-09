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
import { Section96 } from "./Section96";
import { Section97 } from "./Section97";
import { Section98 } from "./Section98";
import { Section99 } from "./Section99";
import { Section100 } from "./Section100";
import { Section101 } from "./Section101";
import { Section102 } from "./Section102";
import { Section103 } from "./Section103";
import { Section104 } from "./Section104";
import { Section105 } from "./Section105";
import { Section106 } from "./Section106";
import { Section107 } from "./Section107";
import { Section108 } from "./Section108";
import { Section109 } from "./Section109";
import { Section110 } from "./Section110";
import { Section111 } from "./Section111";
import { Section112 } from "./Section112";
import { Section113 } from "./Section113";
import { Section114 } from "./Section114";
import { Section115 } from "./Section115";
import { Section116 } from "./Section116";
import { Section117 } from "./Section117";
import { Section118 } from "./Section118";

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
                    {id === "11" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section96 />
                        </div>
                    )}
                    {id === "12" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section97 />
                        </div>
                    )}
                    {id === "13" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section98 />
                        </div>
                    )}
                    {id === "14" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section99 />
                        </div>
                    )}
                    {id === "15" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section100 />
                        </div>
                    )}
                    {id === "16" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section101 />
                        </div>
                    )}
                    {id === "17" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section102 />
                        </div>
                    )}
                    {id === "18" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section103 />
                        </div>
                    )}
                    {id === "19" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section104 />
                        </div>
                    )}
                    {id === "20" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section105 />
                        </div>
                    )}
                    {id === "21" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section106 />
                        </div>
                    )}
                    {id === "22" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section107 />
                        </div>
                    )}
                    {id === "23" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section108 />
                        </div>
                    )}
                    {id === "24" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section109 />
                        </div>
                    )}
                    {id === "25" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section110 />
                        </div>
                    )}
                    {id === "26" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section111 />
                        </div>
                    )}
                    {id === "27" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section112 />
                        </div>
                    )}
                    {id === "28" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section113 />
                        </div>
                    )}
                    {id === "29" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section114 />
                        </div>
                    )}
                    {id === "30" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section115 />
                        </div>
                    )}
                    {id === "31" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section116 />
                        </div>
                    )}
                    {id === "32" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section117 />
                        </div>
                    )}
                    {id === "33" && (
                        <div className="w-full md:w-2/3 mx-auto p-4">
                            <Section118 />
                        </div>
                    )}
                </div>
            </div>

            <GovernmentLinks />
        </div>
    );
}
