'use client';

import { Animations } from "../Animations";
import { Feature } from "../Feature";
import { Subscription } from "../Subcription";

export default function TaxLaw() {

    return (
        <div className="w-full mx-auto flex flex-col items-center justify-start">

            <Animations />
            <Feature />

            <Subscription />

        </div>
    );
}