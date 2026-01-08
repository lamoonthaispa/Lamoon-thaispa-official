"use client";
import React from 'react';
import Image from 'next/image';

interface HerbsLeavesIconProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

export default function HerbsLeavesIcon({ 
  width = 100, 
  height = 100, 
  className = '', 
  alt = 'Herbs leaves icon',
  onClick
}: HerbsLeavesIconProps) {
  return (
    <Image
      src="/icons/herbs-leaves.svg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onClick={onClick}
    />
  );
}