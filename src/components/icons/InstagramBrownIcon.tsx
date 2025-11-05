"use client";
import React from 'react';
import Image from 'next/image';

interface InstagramBrownIconProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

export default function InstagramBrownIcon({ 
  width = 32, 
  height = 32, 
  className = '', 
  alt = 'Instagram icon',
  onClick
}: InstagramBrownIconProps) {
  return (
    <Image
      src="/icons/instagram-brown.svg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onClick={onClick}
    />
  );
}