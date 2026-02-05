'use client'

import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ContextProvider } from "../Provider";
import { useRouter } from "next/navigation";
import { Star, MessageSquare, ChevronLeft, ChevronRight, Send, X, User, Calendar } from "lucide-react";

export default function Reviews() {
    const { userInfo } = useContext(ContextProvider);
    const router = useRouter();
    const swiperRef = useRef(null);
    const [reviewModal, setReviewModal] = useState(false);
    const [comment, setComment] = useState('');
    const [stars, setStars] = useState(0);
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
        if (!comment || !stars) {
            alert("Please write a comment and select a star rating");
            return;
        }

        try {
            setLoading(true);
            const res = await fetch("/api/user/review", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    comment,
                    stars,
                    userInfo
                }),
            });

            const data = await res.json();
            if (data.success) {
                alert("Review submitted successfully!");
                setReviewModal(false);
                setComment("");
                setStars(0);
                // Refresh reviews
                const refreshRes = await fetch("/api/user/review");
                const refreshData = await refreshRes.json();
                if (refreshData.success) {
                    setReviews(refreshData.message);
                }
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

    const handleStarClick = (rating) => {
        setStars(rating);
    };

    const StarRating = ({ rating }) => {
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                        key={i}
                        size={16}
                        className={`${i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">

            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                    <MessageSquare size={16} />
                    ক্লায়েন্টের মতামত
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    আমাদের <span className="text-emerald-600">ক্লায়েন্টরা কি বলেন</span>
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    আমাদের সেবা সম্পর্কে আমাদের মূল্যবান ক্লায়েন্টদের প্রতিক্রিয়া ও পরামর্শ
                </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600">{reviews.length}+</div>
                    <div className="text-sm text-gray-600">মোট রিভিউ</div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600">৪.৯</div>
                    <div className="text-sm text-gray-600">গড় রেটিং</div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600">১০০%</div>
                    <div className="text-sm text-gray-600">সন্তুষ্টি</div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600">১০০%</div>
                    <div className="text-sm text-gray-600">প্রতিক্রিয়া</div>
                </div>
            </div>

            {/* Reviews Slider */}
            <div className="relative mb-12">
                {/* Navigation Buttons */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 flex justify-between pointer-events-none">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors pointer-events-auto"
                    >
                        <ChevronLeft size={24} className="text-gray-700" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors pointer-events-auto"
                    >
                        <ChevronRight size={24} className="text-gray-700" />
                    </button>
                </div>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={24}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="py-4"
                >
                    {loadingReviews ? (
                        // Loading Skeletons
                        [1, 2, 3].map((i) => (
                            <SwiperSlide key={i}>
                                <div className="h-64 bg-gray-100 rounded-2xl animate-pulse"></div>
                            </SwiperSlide>
                        ))
                    ) : reviews.length > 0 ? (
                        reviews.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="group h-full bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-100 flex items-center justify-center">
                                                {item.photo ? (
                                                    <img
                                                        src={item.photo}
                                                        alt={item.name}
                                                        className="w-14 h-14 rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <User size={28} className="text-emerald-600" />
                                                )}
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                                                <Star size={12} className="text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h5 className="font-bold text-gray-900">{item.name}</h5>
                                                    <p className="text-sm text-gray-500 truncate">{item.email}</p>
                                                </div>
                                                <div className="flex items-center gap-1 text-sm text-gray-400">
                                                    <Calendar size={14} />
                                                    <span>
                                                        {new Date(item.createdAt).toLocaleDateString("bn-BD")}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <StarRating rating={item.star} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Review Text */}
                                    <div className="relative">
                                        <div className="absolute -top-3 left-0 text-4xl text-emerald-100">"</div>
                                        <p className="text-gray-600 leading-relaxed pl-4 line-clamp-4">
                                            {item.comment}
                                        </p>
                                    </div>

                                    {/* Decorative Bottom */}
                                    <div className="mt-6 pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-400">
                                                TaxLine BD ক্লায়েন্ট
                                            </span>
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <div className="col-span-3 text-center py-12">
                            <MessageSquare size={48} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-gray-500">কোনো রিভিউ পাওয়া যায়নি</p>
                            <p className="text-sm text-gray-400 mt-2">প্রথম রিভিউ দিতে বাটনে ক্লিক করুন</p>
                        </div>
                    )}
                </Swiper>
            </div>

            {/* Submit Review Button */}
            <div className="text-center">
                <button
                    onClick={() => setReviewModal(true)}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    <MessageSquare size={20} />
                    আপনার মতামত দিন
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Review Modal */}
            {reviewModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md animate-scale-in">
                        {/* Modal Header */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                                        <MessageSquare className="text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">আপনার মতামত দিন</h3>
                                        <p className="text-sm text-gray-500">আমাদের সেবা সম্পর্কে আপনার অভিজ্ঞতা শেয়ার করুন</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setReviewModal(false)}
                                    className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                                >
                                    <X size={20} className="text-gray-500" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            {/* Star Rating */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    রেটিং দিন
                                </label>
                                <div className="flex gap-2 justify-center">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleStarClick(i)}
                                            className={`text-4xl transition-transform hover:scale-110 ${i <= stars ? "text-yellow-400" : "text-gray-300"}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                                <div className="text-center mt-2 text-sm text-gray-500">
                                    {stars === 0 && "স্টার সিলেক্ট করুন"}
                                    {stars === 1 && "খুবই খারাপ"}
                                    {stars === 2 && "খারাপ"}
                                    {stars === 3 && "মধ্যম"}
                                    {stars === 4 && "ভাল"}
                                    {stars === 5 && "অসাধারণ!"}
                                </div>
                            </div>

                            {/* Comment Input */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    আপনার মতামত
                                </label>
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="w-full border border-gray-300 rounded-xl p-4 h-32 resize-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                                    placeholder="আমাদের সেবা সম্পর্কে আপনার মতামত লিখুন..."
                                    maxLength={500}
                                />
                                <div className="text-right mt-2 text-sm text-gray-500">
                                    {comment.length}/500
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                disabled={loading || !comment || !stars}
                                onClick={submitReview}
                                className={`w-full py-3 rounded-xl font-semibold transition-all ${loading || !comment || !stars
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg"
                                    }`}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        সাবমিট হচ্ছে...
                                    </span>
                                ) : (
                                    "মতামত সাবমিট করুন"
                                )}
                            </button>

                            {/* Login Prompt */}
                            {!userInfo && (
                                <p className="mt-4 text-center text-sm text-gray-500">
                                    রিভিউ দিতে আপনাকে <span className="text-emerald-600 font-medium">লগইন</span> করতে হবে
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}