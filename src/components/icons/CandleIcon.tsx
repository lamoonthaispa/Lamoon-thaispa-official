"use client";
import React from 'react';
import Image from 'next/image';

interface CandleIconProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

export default function CandleIcon({ 
  width = 150, 
  height = 150, 
  className = '', 
  alt = 'Candle icon',
  onClick
}: CandleIconProps) {
  return (
    <Image
      src="/icons/candle.svg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onClick={onClick}
    />
  );
}