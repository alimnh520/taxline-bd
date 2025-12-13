'use client';

import { Animations } from "../Animations";
import { PersonalFeature } from "../personal-link/PersonalFeature";
import { Subscription } from "../Subcription";

export default function TaxLaw() {

    return (
        <div className="w-full mx-auto flex flex-col items-center justify-start">

            <Animations />
            <PersonalFeature />
            <div className="-mt-10 sm:-mt-16 w-full">
                <Subscription />
            </div>

        </div>
    );
}