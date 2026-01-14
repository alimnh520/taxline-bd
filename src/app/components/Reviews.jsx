'use client'

import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ContextProvider } from "../Provider";
import { useRouter } from "next/navigation";

export default function Reviews() {
    const { userInfo } = useContext(ContextProvider);
    const router = useRouter();
    const testimonialRef = useRef(null);
    const [review, setReview] = useState(false);
    const [comment, setComment] = useState('');
    const [star, setStar] = useState(0);
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [loadingReviews, setLoadingReviews] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch("/api/user/review");
                const data = await res.json();

                if (data.success) {
                    setReviews(data.message);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoadingReviews(false);
            }
        };

        fetchReviews();
    }, []);

    const submitReview = async () => {
        if (!userInfo) return router.push('components/login');
        if (!comment || !star) {
            alert("Please write comment & select star");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("/api/user/review", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    comment,
                    stars: star,
                    userInfo
                }),
            });

            const data = await res.json();

            if (data.success) {
                alert("Review submitted!");
                setReview(false);
                setComment("");
                setStar(0);
            } else {
                alert("Something went wrong");
            }

        } catch (err) {
            console.error(err);
            alert("Server error");
        } finally {
            setLoading(false);
        }
    };



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
                {reviews.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-[250px] flex flex-col bg-white shadow-lg p-4 border hover:shadow-xl transition-all">

                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={item.photo || "/user.png"}
                                    alt={item.name}
                                    className="w-14 h-14 rounded-full object-cover border"
                                />

                                <div className="flex-1">
                                    <div className="flex items-start justify-between w-full">
                                        <div>
                                            <h5 className="font-semibold">{item.name}</h5>
                                            <p className="text-sm text-gray-500">{item.email}</p>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-xs text-gray-400">
                                                {new Date(item.createdAt).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="h-[1px] w-full bg-gray-200 my-4"></div>

                            <p className="text-gray-600 flex-1 overflow-auto text-sm leading-relaxed">
                                “{item.comment}”
                            </p>

                            <div className="flex gap-1 mt-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <span
                                        key={i}
                                        className={`text-lg ${i <= item.star ? "text-yellow-400" : "text-gray-300"}`}
                                    >
                                        ★
                                    </span>
                                ))}
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
                    <div className="w-96 bg-white rounded-xl p-6 relative">

                        <button
                            onClick={() => setReview(false)}
                            className="absolute top-3 right-3 text-xl"
                        >
                            ✕
                        </button>

                        <h3 className="text-xl font-bold mb-4">Submit Your Review</h3>

                        {/* Stars */}
                        <div className="flex gap-2 mb-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <span
                                    key={i}
                                    onClick={() => setStar(i)}
                                    className={`text-3xl cursor-pointer transition ${i <= star ? "text-yellow-400" : "text-gray-300"
                                        }`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>

                        {/* Comment */}
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full border rounded p-3 h-28 outline-none"
                            placeholder="Write your comment..."
                        />

                        {/* Submit */}
                        <button
                            disabled={loading}
                            onClick={submitReview}
                            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>

                    </div>
                </div>
            )}

        </div>
    );
}
