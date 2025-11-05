"use client";
import React from 'react';
import Image from 'next/image';

interface TiktokWhiteIconProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

export default function TiktokWhiteIcon({ 
  width = 48, 
  height = 48, 
  className = '', 
  alt = 'Tiktok icon',
  onClick
}: TiktokWhiteIconProps) {
  return (
    <Image
      src="/icons/tiktok-white.svg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onClick={onClick}
    />
  );
}