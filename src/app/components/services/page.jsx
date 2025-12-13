'use client';

import { PersonalFeature } from "../personal-link/PersonalFeature";
import BDTaxationPage from "../services";

export default function TaxLaw() {

    return (
        <div className="w-full mx-auto flex flex-col items-center justify-start">

            <PersonalFeature />
            <div className="-mt-10 sm:-mt-20">
                <BDTaxationPage />
            </div>
        </div>
    );
}