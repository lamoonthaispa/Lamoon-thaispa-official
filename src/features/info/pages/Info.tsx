"use client";

import { useEffect, useState } from "react";
import Promotion from "@/components/Promotion"
import Header from "../components/Header"
import ServiceCards from "../components/ServiceCards"
import messages from "@/content/messages.json"

type CardData = {
  title: string;
  description: string;
  type: string;
  prices: {
    '30m'?: number | null;
    '45m'?: number | null;
    '1h'?: number | null;
    '1h30'?: number | null;
  }
}

export default function InfoPage() {
  const [mockCards, setMockCards] = useState<CardData[]>([]);

  useEffect(() => {
    fetch('/data/mock_cards.json')
      .then(res => res.json())
      .then(data => setMockCards(data))
      .catch(err => console.error('Error loading mock cards:', err));
  }, []);

  // Get all unique service types from messages
  const serviceTypes = messages.info.types

  // Group cards by type with flexible matching
  const cardsByType = serviceTypes.map(type => {
    // Match type flexibly (handles "Massage" vs "Massages", etc.)
    const matchingCards = mockCards.filter(card => {
      const cardTypeLower = card.type.toLowerCase().trim();
      const typeLower = type.toLowerCase().trim();
      // Exact match
      if (cardTypeLower === typeLower) return true;
      // Handle plural/singular variations
      if (cardTypeLower === typeLower + 's' || cardTypeLower + 's' === typeLower) return true;
      // Handle full string contains (for longer names)
      if (cardTypeLower.includes(typeLower) || typeLower.includes(cardTypeLower)) return true;
      return false;
    });
    
    return {
      type,
      cards: matchingCards
    };
  })

  return (
    <div className="flex flex-col bg-background">
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
    </div>
  )
}