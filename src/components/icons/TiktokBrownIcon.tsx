"use client";
import React from 'react';
import Image from 'next/image';

interface TiktokBrownIconProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

export default function TiktokBrownIcon({ 
  width = 32, 
  height = 32, 
  className = '', 
  alt = 'Tiktok icon',
  onClick
}: TiktokBrownIconProps) {
  return (
    <Image
      src="/icons/tiktok-brown.svg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onClick={onClick}
    />
  );
}