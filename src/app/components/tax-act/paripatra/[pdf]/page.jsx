'use client';

import { Animations } from "@/app/components/Animations";
import { Feature } from "@/app/components/Feature";
import { useParams } from "next/navigation";

export default function PdfViewer() {
    const { pdf } = useParams();

    // TDS Rules এর reverse order অনুযায়ী PDF লিংক
    const taxGuidelines = [
        { id: 1, title: 'করবর্ষ ২০২৫-২০২৬', link: '/components/tax-act/paripatra/1' },
        { id: 2, title: 'করবর্ষ ২০২৪-২০২৫', link: '/components/tax-act/paripatra/2' },
        { id: 3, title: 'করবর্ষ ২০২৩-২০২৪', link: '/components/tax-act/paripatra/3' },
        { id: 4, title: 'করবর্ষ ২০২২-২০২৩', link: '/components/tax-act/paripatra/4' },
        { id: 5, title: 'করবর্ষ ২০২১-২০২২', link: '/components/tax-act/paripatra/5' },
        { id: 6, title: 'করবর্ষ ২০২০-২০২১', link: '/components/tax-act/paripatra/6' },
        { id: 7, title: 'করবর্ষ ২০১৯-২০২০', link: '/components/tax-act/paripatra/7' },
        { id: 8, title: 'করবর্ষ ২০১৮-২০১৯', link: '/components/tax-act/paripatra/8' },
        { id: 9, title: 'করবর্ষ ২০১৭-২০১৮', link: '/components/tax-act/paripatra/9' },
        { id: 10, title: 'করবর্ষ ২০১৬-২০১৭', link: '/components/tax-act/paripatra/10' },
        { id: 11, title: 'করবর্ষ ২০১৫-২০১৬', link: '/components/tax-act/paripatra/11' },
        { id: 12, title: 'করবর্ষ ২০১৪-২০১৫', link: '/components/tax-act/paripatra/12' },
        { id: 13, title: 'করবর্ষ ২০১৩-২০১৪', link: '/components/tax-act/paripatra/13' },
        { id: 14, title: 'করবর্ষ ২০১২-২০১৩', link: '/components/tax-act/paripatra/14' },
    ];

    const currentPdf = taxGuidelines.find(item => item.id === parseInt(pdf));

    return (
        <div className="mx-auto flex flex-col items-center gap-y-5 bg-gray-100">

            <Animations />
            <Feature />
            
            {currentPdf ? (
                <div className="w-11/12 md:w-10/12 mx-auto flex flex-col items-center gap-y-5 bg-gray-100 p-4">
                    <h1 className="text-2xl w-full border-b border-b-gray-200 pb-2 md:text-3xl font-bold text-center mb-6 text-gray-800">
                        {currentPdf.title}
                    </h1>
                    <iframe
                        src={`https://docs.google.com/gview?url=https://alimnh520.github.io/bd-api/Income_Tax_Act_2023.pdf&embedded=true`}
                        className="w-full"
                        height="800px"
                    ></iframe>
                </div>
            ) : (
                <p className="text-red-500 text-center mt-10">সরাসরি PDF পাওয়া যায়নি।</p>
            )}
        </div>
    );
}
