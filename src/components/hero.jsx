"use client"
import Image from 'next/image'
import React from 'react'

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Hero() {
    return (
        <div>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Image src="/images/cova-software-QHa2BO6AlAg-unsplash (1).jpg" alt="banner" width={500} height={500} className='w-full h-[80vh] object-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/mike-petrucci-c9FQyqIECds-unsplash (1).jpg" alt="banner" width={500} height={500} className='w-full h-[80vh] object-cover' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
