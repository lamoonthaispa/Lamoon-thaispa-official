"use client";
import React from 'react';
import Image from 'next/image';

interface WomanHeadIconProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

export default function WomanHeadIcon({ 
  width = 150, 
  height = 150, 
  className = '', 
  alt = 'Woman head icon',
  onClick
}: WomanHeadIconProps) {
  return (
    <Image
      src="/icons/woman-head.svg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onClick={onClick}
    />
  );
}