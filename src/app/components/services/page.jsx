'use client';

import { usePathname } from "next/navigation";
import { PersonalFeature } from "../personal-link/PersonalFeature";
import BDTaxationPage from "../services";
import { useContext } from "react";
import { ContextProvider } from "@/app/Provider";

export default function TaxLaw() {
    const path = usePathname();
    const { userInfo } = useContext(ContextProvider);

    return (
        <div className="w-full mx-auto flex flex-col items-center justify-start">

            <PersonalFeature />
            <div className="">
                <BDTaxationPage />
            </div>
        </div>
    );
}