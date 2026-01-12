'use client'

import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ContextProvider } from "../Provider";

const testimonials = [
    {
        name: "Joynul Abedin",
        role: "Business",
        image: "/clients/client1.png",
        text: "This firm is most knowledgeable about VAT & Tax in Khulna City. They are very responsive to their clients."
    },
    {
        name: "Shorna Saha",
        role: "Business",
        image: "/clients/client2.png",
        text: "Getting perfect & accurate solution for VAT & Tax related service under one roof."
    },
    {
        name: "Dipankar Das",
        role: "Business",
        image: "/clients/client3.png",
        text: "This organization is trusted. They gave me best service for submitting VAT return."
    },
    {
        name: "Sohel Sheikh",
        role: "Business",
        image: "/clients/client4.png",
        text: "They are excellent for VAT service. I am very glad with their support."
    },
];

export default function Reviews() {
    const { userInfo } = useContext(ContextProvider);
    const testimonialRef = useRef(null);
    const [review, setReview] = useState(false);
    const [comment, setComment] = useState('');
    const [star, setStar] = useState(0);
    const [loading, setLoading] = useState(false);


    return (
        <div className="w-11/12 mx-auto py-10 relative">

            {/* ================= HEADER ROW ================= */}
            <div className="flex items-center justify-between mb-10">
                {/* Right Title */}
                <div className="text-right">
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">
                        Our Clients' Comments
                    </h2>
                </div>

                {/* Left Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={() => testimonialRef.current?.slidePrev()}
                        className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => testimonialRef.current?.slideNext()}
                        className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                    >
                        →
                    </button>
                </div>

            </div>

            <Swiper
                onSwiper={(swiper) => (testimonialRef.current = swiper)}
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mb-10"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-full bg-white shadow-lg p-6 border hover:shadow-xl transition-all">

                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-14 h-14 rounded-full object-cover border"
                                />
                                <div>
                                    <h5 className="font-semibold">{item.name}</h5>
                                    <p className="text-sm text-gray-500">{item.role}</p>
                                </div>
                            </div>

                            <div className="h-[1px] w-full bg-gray-200 my-4"></div>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                “{item.text}”
                            </p>

                            <div className="mt-4">
                                <img src="/stars.png" alt="stars" className="h-4" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button
                className="px-3 md:px-4 py-2 md:py-2.5 mt-2 md:mt-6 self-end font-semibold text-sm bg-[#17982f] hover:shadow-2xl shadow text-white transition-all group flex items-center justify-center duration-300 relative overflow-hidden"
                onClick={() => setReview(true)}
            >
                <span className="bg-[#005a11] rounded-full size-0 group-hover:size-28 transition-all duration-700 absolute button-effect"></span>
                <span className="z-10">Submit a Comment</span>
            </button>

            {review && (
                <div className="w-full h-screen fixed top-0 left-0 bg-black/80 flex items-center justify-center z-30">
                    <div className="w-96 h-96 bg-red-600">

                    </div>
                </div>
            )}
        </div>
    );
}
