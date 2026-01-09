'use client';

import GovernmentLinks from "@/app/components/GovtLink";
import { PersonalFeature } from "@/app/components/personal-link/PersonalFeature";
import TaxAccordions from "@/app/components/personal-link/PersonalTax";
import { useParams } from "next/navigation";
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

                    {id === '88' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '89' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '90' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '91' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '92' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '94' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '95' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '100' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '101' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '102' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '105' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '106' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '108' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '110' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '111' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '112' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '113' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '114' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '115' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '116' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '117' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '118' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '120' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '121' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '122' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '123' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '124' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '125' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '126' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '127' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '128' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '129' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '132' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '133' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '134' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '135' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '136' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '137' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '138' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                    {id === '139' && <div className="w-full md:w-2/3 mx-auto p-4"><Section88/></div>}
                </div>
            </div>

            <GovernmentLinks />
        </div>
    );
}
