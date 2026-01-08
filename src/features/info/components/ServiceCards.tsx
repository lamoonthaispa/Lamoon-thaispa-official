"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import messages from "@/content/messages.json";
import Divider from "./Divider";
import Card from "@/components/Card";
import { mapPriceToDurations, type DurationPriceMap } from "@/lib/durations";

const serviceSlugMap: Record<string, string> = {
  "Nos Soins du visage": "soin-du-visage",
  "Massages": "massage",
  "Epilation cire orientale (sucre)": "cire-orientale",
  "Teinture des cils et sourcils": "teinture",
  "Nos Gommages": "gommage",
};

function mapServiceToSlug(input: string): string {
  return serviceSlugMap[input] ?? input.toLowerCase().replace(/\s+/g, "-");
}

type ServicesDetailKeys = keyof typeof messages['services_detail'];

export default function Cards({
  serviceType,
  cards
}: {
  serviceType: string;
  cards: {
    title: string;
    description: string;
    type: string;
    prices: DurationPriceMap;
  }[]
}) {
  const loadMore = messages.info.loadMore
  const headingId = `service-cards-${serviceType
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/gi, "")}`
  
  const slug = mapServiceToSlug(serviceType) as ServicesDetailKeys;
  const image = messages.services_detail[slug]?.hero?.image || "/images/card-mock.jpg";

  return (
    <section
      className="flex flex-col gap-[6.22px] md:gap-[10px] lg:gap-[30px] w-full pb-3 pl-5 md:px-[35px] md:pb-5 lg:px-[58px] py-10"
      aria-labelledby={headingId}
    >
      <div className="pr-5">
        <Divider /> 
      </div>
      
      <div className="flex flex-col w-full">
        <header className="w-full flex justify-between items-center pr-5">
          <h2
            id={headingId}
            className="text-info-text-title font-medium text-[19.92px] md:text-[32px] lg:text-5xl"
          >
            { serviceType }
          </h2>

          <span className="lg:hidden font-medium underline text-[11px] md:text-xl" aria-hidden="true">
            { loadMore }
          </span>
        </header>

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
                  image={image}
                  durations={mapPriceToDurations(card.prices)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden lg:grid gap-6 w-full mt-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))' }}>
          {cards.map((card, index) => (
            <Card
              key={index}
              type={card.type}
              title={card.title}
              description={card.description}
              image={image}
              durations={mapPriceToDurations(card.prices)}
            />
          ))}
        </div>
        
      </div>


    </section>
  )
}