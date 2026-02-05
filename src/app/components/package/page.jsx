'use client';

import { Animations } from "../Animations";
import { MyPackage } from "../MyPackage";
import { PersonalFeature } from "../personal-link/PersonalFeature";

export default function TaxLaw() {

    return (
        <div className="w-full mx-auto flex flex-col items-center justify-start">

            <Animations />
            <PersonalFeature />
            <div className="-mt-10 sm:-mt-16 w-full">
                <MyPackage/>
            </div>

        </div>
    );
}