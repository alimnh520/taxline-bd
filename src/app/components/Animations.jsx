'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { ChevronLeft, ChevronRight, ArrowRight, PlayCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const Animations = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const swiperRef = useRef(null);
    const router = useRouter();

    const slides = [
        {
            image: '/animation/banner-pc.png',
            title: 'ডিজিটাল কর ব্যবস্থাপনা',
            subtitle: 'সহজ ও নিরাপদ কর প্রক্রিয়া',
            cta: 'বিস্তারিত জানুন',
            color: 'from-blue-600/90 to-cyan-600/90',
            link: '/components/course'
        },
        {
            image: '/animation/banner-pc.png',
            title: 'ই-রিটার্ন ফাইলিং',
            subtitle: 'অনলাইনে সহজে রিটার্ন জমা দিন',
            cta: 'এখনই শুরু করুন',
            color: 'from-emerald-600/90 to-green-600/90',
            link: '/components/services'
        },
        {
            image: '/animation/banner-pc.png',
            title: 'কর্পোরেট কর সেবা',
            subtitle: 'আপনার ব্যবসার জন্য সম্পূর্ণ সমাধান',
            cta: 'সেবা দেখুন',
            color: 'from-purple-600/90 to-violet-600/90',
            link: '/components/package'
        }
    ]

    const loopSlides = [...slides, ...slides]

    const sideCards = [
        {
            image: '/animation/banner1.png',
            title: 'ট্যাক্স ক্যালকুলেটর',
            description: 'মুহূর্তেই আপনার কর হিসাব করুন',
            link: '/calculator'
        },
        {
            image: '/animation/banner2.png',
            title: 'গুরুত্বপূর্ণ আপডেট',
            description: 'সর্বশেষ কর আইন ও নোটিশ',
            link: '/updates'
        },
        {
            image: '/animation/banner1.png',
            title: 'ট্রেনিং ভিডিও',
            description: 'ই-রিটার্ন শেখার গাইড',
            link: '/tutorials'
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideNext()
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const handleSlideChange = (swiper) => {
        const realIndex = swiper.realIndex
        setActiveSlide(realIndex)
    }

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev()
        }
    }

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext()
        }
    }

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideToLoop(index)
        }
    }

    return (
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10'>

            {/* Main Banner Slider */}
            <div className='flex flex-col lg:flex-row gap-6'>

                {/* Main Slider */}
                <div className='flex-1 lg:w-9/12 h-full relative group'>
                    <div className='absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/10 rounded-2xl z-10 pointer-events-none'></div>

                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Autoplay, EffectFade]}
                        className="main-slider rounded-2xl overflow-hidden shadow-xl"
                        onSlideChange={handleSlideChange}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        effect={'fade'}
                        fadeEffect={{ crossFade: true }}
                        speed={800}
                    >
                        {loopSlides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative h-64 md:h-80 lg:h-96 w-full">
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                                        style={{ backgroundImage: `url('${slide.image}')` }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} mix-blend-overlay`}></div>

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex items-center">
                                        <div className="pl-8 md:pl-12 max-w-lg">
                                            <div className="mb-4">
                                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full mb-2">
                                                    {(index % slides.length) + 1}/{slides.length}
                                                </span>
                                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                                                    {slide.title}
                                                </h2>
                                                <p className="text-white/90 text-lg">
                                                    {slide.subtitle}
                                                </p>
                                            </div>

                                            <button onClick={() => router.push(slide.link)} className="group flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:gap-3">
                                                {slide.cta}
                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-20 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-20 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Side Cards Responsive Slider */}
                <div className='lg:w-3/12 lg:h-96'>
                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={16}
                        className='h-full'
                        breakpoints={{
                            0: {
                                direction: 'horizontal',
                                slidesPerView: 1.2,
                            },
                            1024: {
                                direction: 'vertical',
                                slidesPerView: 2.2,
                            },
                        }}
                    >
                        {[...sideCards, ...sideCards].map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
                                    <div className="relative h-32 md:h-40" onClick={() => router.push(card.link)} >
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${card.image}')` }}
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                                        <div className="absolute inset-0 p-4 flex flex-col justify-end">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="text-white font-bold text-lg mb-1">
                                                        {card.title}
                                                    </h3>
                                                    <p className="text-white/80 text-sm">
                                                        {card.description}
                                                    </p>
                                                </div>
                                                {index === 2 && (
                                                    <PlayCircle className="text-white/80 group-hover:text-white transition-colors" size={24} />
                                                )}
                                            </div>

                                            <div className="mt-3">
                                                <button className="text-sm text-white font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    দেখুন
                                                    <ArrowRight size={14} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}