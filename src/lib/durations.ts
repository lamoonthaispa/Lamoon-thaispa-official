export type DurationPriceMap = {
  "30m"?: number | null;
  "45m"?: number | null;
  "1h"?: number | null;
  "1h30"?: number | null;
};

export type DurationDisplay = {
  time: string;
  price: string;
};

const formatPrice = (value: number | null | undefined) =>
  value !== undefined && value !== null ? `${value}€` : "-";

export const mapPriceToDurations = (prices: DurationPriceMap): DurationDisplay[] => {
  const durations: DurationDisplay[] = [
    {
      time: "30min",
      price: formatPrice(prices["30m"]),
    },
  ];

  if (prices["45m"] !== undefined && prices["45m"] !== null) {
    durations.push({
      time: "45min",
      price: formatPrice(prices["45m"]),
    });
  }

  durations.push(
    {
      time: "1h",
      price: formatPrice(prices["1h"]),
    },
    {
      time: "1h30",
      price: formatPrice(prices["1h30"]),
    }
  );

  return durations;
};

