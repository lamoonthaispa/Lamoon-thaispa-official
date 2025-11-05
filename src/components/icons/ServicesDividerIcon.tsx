"use client";
import React from 'react';
import Image from 'next/image';

interface ServicesDividerIconProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

export default function ServicesDividerIcon({ 
  width = 24, 
  height = 24, 
  className = '', 
  alt = 'Services Divider icon',
  onClick
}: ServicesDividerIconProps) {
  return (
    <Image
      src="/icons/services-divider-icon.svg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onClick={onClick}
    />
  );
}