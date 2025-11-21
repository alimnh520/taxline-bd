'use client';

import { Animations } from "@/app/components/Animations";
import { Feature } from "@/app/components/Feature";
import { useParams } from "next/navigation";

export default function PdfViewer() {
    const { pdf } = useParams();

    // TDS Rules এর reverse order অনুযায়ী PDF লিংক
    const taxGuidelines = [
        { id: 6, title: 'উৎসে কর বিধিমালা, ২০২৪ এর অধিকতর সংশোধন (২৪/০৬/২০২৫)', link: 'https://alimnh520.github.io/bd-api/57903_97276.pdf' },
        { id: 5, title: 'উৎসে কর বিধিমালা, ২০২৪ এর অধিকতর সংশোধন (১৫/০৯/২০২৫)', link: 'https://alimnh520.github.io/bd-api/58704_27150.pdf' },
        { id: 4, title: 'উৎসে কর বিধিমালা, ২০২৪ এর অধিকতর সংশোধন (১৫/০৯/২০২৫)', link: 'https://alimnh520.github.io/bd-api/58705_46865.pdf' },
        { id: 3, title: 'উৎসে কর বিধিমালা, ২০২৪ (সংশোধিত)', link: 'https://alimnh520.github.io/bd-api/tax%20source%202024%20updated.pdf' },
        { id: 2, title: 'উৎসে কর ২০২৪', link: 'https://alimnh520.github.io/bd-api/TDS-Rules-2024.pdf' },
        { id: 1, title: 'উৎসে কর- ২০২৩', link: 'https://alimnh520.github.io/bd-api/TDS_Rules,_2023.pdf' },
    ];

    const currentPdf = taxGuidelines.find(item => item.id === parseInt(pdf));

    return (
        <div className="mx-auto flex flex-col items-center gap-y-5 bg-gray-100">
            <Animations />
            <Feature />
            {currentPdf ? (
                <>
                    <h1 className="text-2xl w-full border-b border-b-gray-200 pb-2 md:text-3xl font-bold text-center mb-6 text-gray-800">
                        {currentPdf.title}
                    </h1>
                    <iframe
                        src={`https://docs.google.com/gview?url=${currentPdf.link}&embedded=true`}
                        className="w-full"
                        height="800px"
                    ></iframe>
                </>
            ) : (
                <p className="text-red-500 text-center mt-10">সরাসরি PDF পাওয়া যায়নি।</p>
            )}
        </div>
    );
}
