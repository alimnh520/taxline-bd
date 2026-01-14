'use client';
import React from "react";

export default function Card() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* Card 1 */}
                <FlipBox
                    image="https://s25.postimg.cc/frbd9towf/cta-2.png"
                    title="Custom Domains"
                    description="A short sentence describing this callout is."
                />

                {/* Card 2 */}
                <FlipBox
                    image="https://s25.postimg.cc/hj4c4qnov/cta-3.png"
                    title="Never Sleeps"
                    description="A short sentence describing this callout is."
                />

                {/* Card 3 */}
                <FlipBox
                    image="https://s25.postimg.cc/l2q9ujy4f/cta-4.png"
                    title="Dedicated"
                    description="A short sentence describing this callout is."
                />

            </div>
        </div>
    );
}

// Reusable FlipBox component
function FlipBox({ image, title, description }) {
    return (
        <div className="w-80 h-[475px] perspective">
            <div className="relative w-full h-full transition-transform duration-700 ease-in-out transform-style preserve-3d hover:rotate-y-180">

                {/* Front Side */}
                <div
                    className="absolute w-full h-full rounded-lg bg-cover bg-center backface-hidden flex flex-col justify-center items-center text-white"
                    style={{ backgroundImage: `url('${image}')` }}
                >
                    <div className="text-center p-6">
                        <h3 className="text-3xl font-bold mb-4">{title}</h3>
                        <p className="text-lg mb-6">{description}</p>
                        <img
                            src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                            alt="arrow"
                            className="w-12 h-12 mx-auto"
                        />
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute w-full h-full rounded-lg bg-cover bg-center backface-hidden rotate-y-180 flex flex-col justify-center items-center text-white"
                    style={{ backgroundImage: `url('${image}')` }}
                >
                    <div className="text-center p-6">
                        <h3 className="text-3xl font-bold mb-4">{title}</h3>
                        <p className="text-lg mb-6">{description}</p>
                        <button className="px-6 py-3 border-2 border-white rounded-md font-bold uppercase hover:bg-white hover:text-gray-900 transition">
                            Learn More
                        </button>
                    </div>
                </div>

            </div>

            {/* Tailwind Custom Styles for 3D Flip */}
            <style jsx>{`

      `}</style>
        </div>
    );
}
