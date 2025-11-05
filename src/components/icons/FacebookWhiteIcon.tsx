"use client";
import React from 'react';
import Image from 'next/image';

interface FacebookWhiteIconProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

export default function FacebookWhiteIcon({ 
  width = 48, 
  height = 48, 
  className = '', 
  alt = 'Facebook icon',
  onClick
}: FacebookWhiteIconProps) {
  return (
    <Image
      src="/icons/facebook-white.svg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onClick={onClick}
    />
  );
}