'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";

export default function ClientList() {
    const company = [
        '/company-logo/logo3.png',
        '/company-logo/logo1-1.png',
        '/company-logo/logo2-1.png',
        '/company-logo/logo5.png',
        '/company-logo/logo4-1.png',
        '/company-logo/logo3.png',
        '/company-logo/logo5.png',
    ];

    return (
        <div className="w-11/12 mx-auto py-10">
            <h2 className="text-3xl font-bold ml-5">
                Our Clients
            </h2>

            <div className="relative flex items-center">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 h-32 w-24 bg-gradient-to-r from-gray-300 to-transparent z-10 pointer-events-none"></div>

                {/* Swiper */}
                <Swiper
                    modules={[Autoplay, Mousewheel]}
                    slidesPerView={5}
                    spaceBetween={10}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    mousewheel={{ invert: false }}
                    grabCursor={true}
                    className="w-full py-8"
                >
                    {company.map((item, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div className="h-32 w-48 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                                <img
                                    src={item}
                                    alt={`Company ${index + 1}`}
                                    className="max-h-24 max-w-full object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Right Fade */}
                <div className="absolute right-0 top-0 h-32 w-24 bg-gradient-to-l from-gray-300 to-transparent z-10 pointer-events-none"></div>
            </div>
        </div>
    );
}
