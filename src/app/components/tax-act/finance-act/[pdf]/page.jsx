'use client';

import { Animations } from "@/app/components/Animations";
import { PersonalFeature } from "@/app/components/personal-link/PersonalFeature";
import { useParams } from "next/navigation";

export default function PdfViewer() {
    const { pdf } = useParams();

    // TDS Rules এর reverse order অনুযায়ী PDF লিংক
    const taxGuidelines = [
        { id: 1, title: '২০২৫ (সংশোধিত) তাং-০৬/১০/২০২৫', link: '/components/tax-act/finance-act/1' },
        { id: 2, title: '২০২৫ (সংশোধিত)', link: '/components/tax-act/finance-act/2' },
        { id: 3, title: '২০২৫', link: '/components/tax-act/finance-act/3' },
        { id: 4, title: '২০২৪', link: '/components/tax-act/finance-act/4' },
        { id: 5, title: '২০২৩', link: '/components/tax-act/finance-act/5' },
        { id: 6, title: '২০২২', link: '/components/tax-act/finance-act/6' },
        { id: 7, title: '২০২১', link: '/components/tax-act/finance-act/7' },
        { id: 8, title: '২০২০', link: '/components/tax-act/finance-act/8' },
        { id: 9, title: '২০১৯', link: '/components/tax-act/finance-act/9' },
        { id: 10, title: '২০১৮', link: '/components/tax-act/finance-act/10' },
        { id: 11, title: '২০১৭', link: '/components/tax-act/finance-act/11' },
        { id: 12, title: '২০১৬', link: '/components/tax-act/finance-act/12' },
        { id: 13, title: '২০১৫', link: '/components/tax-act/finance-act/13' },
    ];

    const currentPdf = taxGuidelines.find(item => item.id === parseInt(pdf));

    return (
        <div className="mx-auto flex flex-col items-center gap-y-5 bg-gray-100">

            <Animations />
            <PersonalFeature />

            <div className="w-11/12 md:w-10/12 mx-auto flex flex-col items-center gap-y-5 bg-gray-100 p-4">
                {currentPdf ? (
                    <>
                        <h1 className="text-2xl w-full border-b border-b-gray-200 pb-2 md:text-3xl font-bold text-center mb-6 text-gray-800">
                            {currentPdf.title}
                        </h1>
                        <iframe
                            src={`https://docs.google.com/gview?url=https://alimnh520.github.io/bd-api/Income_Tax_Act_2023.pdf&embedded=true`}
                            className="w-full"
                            height="800px"
                        ></iframe>
                    </>
                ) : (
                    <p className="text-red-500 text-center mt-10">সরাসরি PDF পাওয়া যায়নি।</p>
                )}
            </div>
        </div>
    );
}
