"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GallerySlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const images = Array.from({ length: 5 }, (_, i) => `/images/gallery-slider/${i + 1}.jpg`);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        className="w-full h-[210.94px] md:h-[450px] lg:h-[720px] overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt=""
              fill
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.slidePrev();
          }
        }}
        className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/15 backdrop-blur-[37.33px] w-[15.62px] h-[15.62px] md:w-[33.33px] md:h-[33.33px] lg:w-[53px] lg:h-[53px] rounded-full flex items-center justify-center"
      >
        <ChevronLeft 
          className="text-white md:hidden " 
          size={10}
        />
        <span className="hidden md:inline lg:hidden">
          <ChevronLeft 
            className="text-white" 
            size={20}
          />
        </span>
        <span className="hidden lg:inline">
          <ChevronLeft 
            className="text-white" 
            size={32}
          />
        </span>
      </button>
      
      <button
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.slideNext();
          }
        }}
        className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/15 backdrop-blur-[37.33px] w-[15.62px] h-[15.62px] md:w-[33.33px] md:h-[33.33px] lg:w-[53px] lg:h-[53px] rounded-full flex items-center justify-center"
      >
        <ChevronRight 
          className="text-white md:hidden" 
          size={10}
        />
        <span className="hidden md:inline lg:hidden">
          <ChevronRight 
            className="text-white" 
            size={20}
          />
        </span>
        <span className="hidden lg:inline">
          <ChevronRight 
            className="text-white" 
            size={32}
          />
        </span>
      </button>
    </div>
  );
}
