'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export const Animations = () => {
    return (
        <div className='flex flex-col md:flex-row items-center px-2 mt-2 md:px-5 justify-between w-full h-auto md:h-56 gap-y-3 md:gap-x-2'>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper h-40 md:h-56 w-full md:flex-1 shadow-[0px_5px_10px_rgba(0,0,0,0.5)]"
            >
                <SwiperSlide className='bg-red-500'>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-yellow-500'>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-blue-500'>Slide 3</SwiperSlide>
            </Swiper>

            <div className="w-full md:w-[350px] h-40 md:h-full bg-blue-600 hidden sm:block shadow-[0px_5px_10px_rgba(0,0,0,0.5)]"></div>
        </div>
    )
}
