'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export const Animations = () => {
    return (
        <div className='flex items-center px-5 justify-between w-full h-56 gap-x-2'>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper h-56 flex-1 shadow-[0px_5px_10px_rgba(0,0,0,0.5)]"
            >
                <SwiperSlide className='bg-red-500'>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-yellow-500'>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-blue-500'>Slide 3</SwiperSlide>
            </Swiper>

            <div className="w-[350px] h-full bg-blue-600 shadow-[0px_5px_10px_rgba(0,0,0,0.5)]"></div>
        </div>
    )
}
