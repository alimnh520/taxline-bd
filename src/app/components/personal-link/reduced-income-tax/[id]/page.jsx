'use client';

import { useParams } from "next/navigation";
import { PersonalFeature } from "../../PersonalFeature";
import TaxAccordions from "../../PersonalTax";
import Link from "next/link";
import GovernmentLinks from "@/app/components/GovtLink";

export default function PdfViewer() {
    const { id } = useParams();

    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex flex-col justify-start gap-y-8 w-10/12 mx-auto border-t border-t-gray-200">

                <PersonalFeature />

                <div className="flex flex-col md:flex-row items-start justify-between gap-x-10 w-full">

                    <div className="w-full md:w-1/3">
                        <TaxAccordions />
                    </div>

                    {
                        id === '1' && (
                            <div className="">Hello</div>
                        )
                    }
                    {
                        id === '2' && (
                            <div className="">Hello</div>
                        )
                    }
                    {
                        id === '3' && (
                            <div className="">Hello</div>
                        )
                    }
                    {
                        id === '4' && (
                            <div className="">Hello</div>
                        )
                    }
                    {
                        id === '5' && (
                            <div className="">Hello</div>
                        )
                    }
                    {
                        id === '6' && (
                            <div className="">Hello</div>
                        )
                    }
                    {
                        id === '7' && (
                            <div className="">Hello</div>
                        )
                    }
                    {
                        id === '8' && (
                            <div className="">Hello</div>
                        )
                    }
                    {
                        id === '9' && (
                            <div className="">Hello</div>
                        )
                    }
                    {
                        id === '10' && (
                            <div className="">Hello</div>
                        )
                    }
                </div>
            </div>
            <GovernmentLinks />
        </div>
    )
}