"use client";
import React from 'react';
import Image from 'next/image';

interface FacebookBrownIconProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

export default function FacebookBrownIcon({ 
  width = 32, 
  height = 32, 
  className = '', 
  alt = 'Facebook icon',
  onClick
}: FacebookBrownIconProps) {
  return (
    <Image
      src="/icons/facebook-brown.svg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onClick={onClick}
    />
  );
}