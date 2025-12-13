'use client';

import { Animations } from "@/app/components/Animations";
import { PersonalFeature } from "@/app/components/personal-link/PersonalFeature";
import { useParams } from "next/navigation";

export default function PdfViewer() {
    const { pdf } = useParams();

    const taxGuidelines = [
        { id: 1, year: '২০২৫-২০২৬', link: 'https://alimnh520.github.io/bd-api/Income%20Tax%20Nirdeshika%202025-2026_compressed.pdf' },
        { id: 2, year: '২০২৪-২০২৫', link: 'https://alimnh520.github.io/bd-api/আয়কর_নির্দেশিকা_২০২৪-২০২৫.pdf' },
        { id: 3, year: '২০২৩-২০২৪', link: 'https://alimnh520.github.io/bd-api/আয়কর নির্দেশিকা ২০২৩-২০২৪.pdf' },
        { id: 4, year: '২০২২-২০২৩', link: 'https://alimnh520.github.io/bd-api/আয়কর নির্দেশিকা ২০২২-২০২৩.pdf' },
        { id: 5, year: '২০২১-২০২২', link: 'https://alimnh520.github.io/bd-api/আয়কর নির্দেশিকা ২০২১-২০২২.pdf' },
        { id: 6, year: '২০২০-২০২১', link: 'https://alimnh520.github.io/bd-api/আয়কর নির্দেশিকা ২০২০-২০২১.pdf' },
        { id: 7, year: '২০১৯-২০২০', link: 'https://alimnh520.github.io/bd-api/আয়কর নির্দেশিকা ২০১৯-২০২০.pdf' },
        { id: 8, year: '২০১৮-২০১৯', link: 'https://alimnh520.github.io/bd-api/আয়কর নির্দেশিকা ২০১৮-২০১৯.pdf' },
        { id: 9, year: '২০১৭-২০১৮', link: 'https://alimnh520.github.io/bd-api/আয়কর নির্দেশিকা ২০১৭-২০১৮.pdf' },
        { id: 10, year: '২০১৬-২০১৭', link: 'https://alimnh520.github.io/bd-api/আয়কর নির্দেশিকা ২০১৬-২০১৭.pdf' },
    ];

    const currentPdf = taxGuidelines.find(item => item.id === parseInt(pdf));

    return (
        <div className="mx-auto flex flex-col items-center gap-y-5 bg-gray-100">

            <Animations />
            <PersonalFeature/>

            <h1 className="text-2xl w-full border-b border-b-gray-200 pb-2 md:text-3xl font-bold text-center mb-6 text-gray-800">
                আয়কর নির্দেশিকা {currentPdf.year}
            </h1>

            {currentPdf ? (
                <iframe
                    src={`https://docs.google.com/gview?url=${currentPdf.link}&embedded=true`}
                    className="w-full"
                    height="800px"
                ></iframe>
            ) : (
                <p className="text-red-500 text-center">সরাসরি PDF পাওয়া যায়নি।</p>
            )}
        </div>
    );
}
