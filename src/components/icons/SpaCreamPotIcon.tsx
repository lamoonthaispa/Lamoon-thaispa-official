"use client";
import React from 'react';
import Image from 'next/image';

interface SpaCreamPotIconProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

export default function SpaCreamPotIcon({ 
  width = 150, 
  height = 150, 
  className = '', 
  alt = 'Spa cream pot icon',
  onClick
}: SpaCreamPotIconProps) {
  return (
    <Image
      src="/icons/spa-cream-pot.svg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onClick={onClick}
    />
  );
}