"use client";

import { useEffect, useState } from "react";
import { fetchMockCards, type MockCard } from "@/lib/mockCards";

type UseMockCardsResult = {
  cards: MockCard[];
  loading: boolean;
  error: Error | null;
};

export function useMockCards(): UseMockCardsResult {
  const [cards, setCards] = useState<MockCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    fetchMockCards()
      .then((data) => {
        if (isMounted) {
          setCards(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error("Unknown error"));
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { cards, loading, error };
}

