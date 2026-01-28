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

export default function Promotion() {
  const swiperRef = useRef<SwiperType | null>(null);
  const images = Array.from({ length: 6 }, (_, i) => `/images/promotion/${i + 1}.jpg`);

  return (
    <section
      className="flex justify-center items-center py-[20.51px] px-[16.91px] md:py-[43.75px] md:px-[36.25px] lg:py-[70px] lg:px-[58px] mb-20"
      aria-labelledby="promotion-heading"
    >
      <h2 id="promotion-heading" className="sr-only">
        Offres promotionnelles Lamoon Thaï Spa
      </h2>
      <div className="relative w-[264.84px] h-[148.97px] md:w-[565px] md:h-[317.81px] lg:w-[904px] lg:h-[508.5px]">
        <Swiper
          modules={[Navigation, Pagination]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          className="w-full h-full overflow-hidden rounded-xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt="Offre promotionnelle Lamoon Thaï Spa"
                fill
                loading="lazy"
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
          className="swiper-button-prev-custom absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10 bg-white/15 backdrop-blur-[37.33px] w-[15.62px] h-[15.62px] md:w-[33.33px] md:h-[33.33px] lg:w-[53px] lg:h-[53px] rounded-full flex items-center justify-center"
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
          className="swiper-button-next-custom absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-10 bg-white/15 backdrop-blur-[37.33px] w-[15.62px] h-[15.62px] md:w-[33.33px] md:h-[33.33px] lg:w-[53px] lg:h-[53px] rounded-full flex items-center justify-center"
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
    </section>
  );
}
