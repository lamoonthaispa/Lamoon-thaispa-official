'use client'

import messages from '@/content/messages.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from "@/components/Card"

export default function Cards() {
  const section_intro_cards = messages.landing.section_intro.cards
  
  const cardEntries = Object.entries(section_intro_cards)
    .filter(([key]) => key !== 'button')
    .map(([key, cardData]) => {
      const card = cardData as {
        type: string;
        title: string;
        description: string;
        image: string;
        durations: { time: string; price: string }[];
      };
      return { key, card };
    });

  return (
    <div className='w-full'>
      <Swiper
        className="w-full"
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={true}
        initialSlide={1}
        breakpoints={{
          820: {
            spaceBetween: 20,
          },
          1300: {
            spaceBetween: 48,
          },
        }}
      >
        {cardEntries.map(({ key, card }) => (
          <SwiperSlide key={key} style={{ width: 'auto' }} className="flex justify-center">
            <Card
              type={card.type}
              title={card.title}
              description={card.description}
              image={card.image}
              durations={card.durations}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}