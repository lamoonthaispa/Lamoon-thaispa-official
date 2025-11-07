"use client";

import { useMemo } from "react";
import Promotion from "@/components/Promotion";
import Header from "../components/Header";
import ServiceCards from "../components/ServiceCards";
import messages from "@/content/messages.json";
import { useMockCards } from "@/hooks/useMockCards";
import type { MockCard } from "@/lib/mockCards";

export default function InfoPage() {
  const { cards: mockCards } = useMockCards();

  // Get all unique service types from messages
  const serviceTypes = messages.info.types

  // Group cards by type with flexible matching
  const cardsByType = useMemo(() => {
    const normalize = (value: string) => value.toLowerCase().trim();

    return serviceTypes.map((type) => {
      const typeLower = normalize(type);

      const matchingCards = mockCards.filter((card: MockCard) => {
        const cardTypeLower = normalize(card.type);

        if (cardTypeLower === typeLower) return true;
        if (cardTypeLower === `${typeLower}s` || `${cardTypeLower}s` === typeLower) return true;
        if (cardTypeLower.includes(typeLower) || typeLower.includes(cardTypeLower)) return true;

        return false;
      });

      return {
        type,
        cards: matchingCards,
      };
    });
  }, [mockCards, serviceTypes]);

  return (
    <main className="flex flex-col bg-background">
      <Promotion />
      <Header />
      
      {cardsByType.map(({ type, cards }) => (
        cards.length > 0 && (
          <ServiceCards
            key={type}
            serviceType={type}
            cards={cards}
          />
        )
      ))}
    </main>
  )
}