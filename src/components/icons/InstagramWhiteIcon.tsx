"use client";
import React from 'react';
import Image from 'next/image';

interface InstagramWhiteIconProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

export default function InstagramWhiteIcon({ 
  width = 48, 
  height = 48, 
  className = '', 
  alt = 'Facebook icon',
  onClick
}: InstagramWhiteIconProps) {
  return (
    <Image
      src="/icons/instagram-white.svg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onClick={onClick}
    />
  );
}