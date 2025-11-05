"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import messages from '@/content/messages.json'
import Divider from "./Divider";
import Card from "@/components/Card";

export default function Cards({
  serviceType,
  cards
}: {
  serviceType: string;
  cards: {
    title: string;
    description: string;
    type: string;
    prices: {
      '30m'?: number | null;
      '45m'?: number | null;
      '1h'?: number | null;
      '1h30'?: number | null;
    }
  }[]
}) {
  const loadMore = messages.info.loadMore

  // Convert prices object to durations array format
  const convertPricesToDurations = (prices: {
    '30m'?: number | null;
    '45m'?: number | null;
    '1h'?: number | null;
    '1h30'?: number | null;
  }) => {
    const durations: { time: string; price: string }[] = [];
    
    // Always show 30m, 1h, 1h30 (with price or "-")
    durations.push({
      time: "30min",
      price: prices['30m'] !== undefined && prices['30m'] !== null ? `${prices['30m']}€` : "-"
    });
    
    // Show 45m only if it exists
    if (prices['45m'] !== undefined && prices['45m'] !== null) {
      durations.push({
        time: "45min",
        price: `${prices['45m']}€`
      });
    }
    
    durations.push({
      time: "1h",
      price: prices['1h'] !== undefined && prices['1h'] !== null ? `${prices['1h']}€` : "-"
    });
    
    durations.push({
      time: "1h30",
      price: prices['1h30'] !== undefined && prices['1h30'] !== null ? `${prices['1h30']}€` : "-"
    });
    
    return durations;
  };

  return (
    <div className="flex flex-col gap-[6.22px] md:gap-[10px] lg:gap-[30px] w-full pb-3 pl-5 md:px-[35px] md:pb-5 lg:px-[58px] py-10">

      <div className="pr-5">
        <Divider /> 
      </div>
      
      <div className="flex flex-col w-full">

        {/* TITLE */}
        <div className="w-full flex justify-between items-center pr-5">
          <h1 className="text-info-text-title font-medium text-[19.92px] md:text-[32px] lg:text-5xl">
            { serviceType }
          </h1>

          <p className="lg:hidden font-medium underline text-[11px] md:text-xl">
            { loadMore }
          </p>

        </div>

        {/* CARDS - Swiper for mobile/tablet, Grid for desktop */}
        <div className="w-full lg:hidden mt-4">
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            breakpoints={{
              820: {
                spaceBetween: 24,
              },
            }}
            className="w-full"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }} className="flex justify-center">
                <Card
                  type={card.type}
                  title={card.title}
                  description={card.description}
                  image="/images/card-mock.jpg"
                  durations={convertPricesToDurations(card.prices)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* GRID - Desktop */}
        <div className="hidden lg:grid gap-6 w-full mt-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))' }}>
          {cards.map((card, index) => (
            <Card
              key={index}
              type={card.type}
              title={card.title}
              description={card.description}
              image="/images/card-mock.jpg"
              durations={convertPricesToDurations(card.prices)}
            />
          ))}
        </div>
        
      </div>


    </div>
  )
}