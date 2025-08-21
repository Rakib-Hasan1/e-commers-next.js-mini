"use client"
import Image from 'next/image'
import React from 'react'

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Hero() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Image src="/images/8852145.jpg" alt="banner" width={500} height={500} className='w-full h-[80vh] object-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/8852951.jpg" alt="banner" width={500} height={500} className='w-full h-[80vh] object-cover' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
