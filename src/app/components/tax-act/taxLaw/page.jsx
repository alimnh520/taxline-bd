'use client';

import { Animations } from "../../Animations";
import { PersonalFeature } from "../../personal-link/PersonalFeature";

export default function TaxLaw() {

    return (
        <div className="mx-auto flex flex-col items-center gap-y-5 bg-gray-100">

            <Animations />
            <PersonalFeature/>

            <h1 className="text-4xl font-semibold">আইকর আইন ২০২৩</h1>

            <iframe
                src={`https://docs.google.com/gview?url=https://alimnh520.github.io/bd-api/Income_Tax_Act_2023.pdf&embedded=true`}
                className="w-full"
                height="800px"
            ></iframe>

        </div>
    );
}