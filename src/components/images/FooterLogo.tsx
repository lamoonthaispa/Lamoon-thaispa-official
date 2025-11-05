"use client";
import React from 'react';
import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

export default function FooterLogo({ 
  width = 360, 
  height = 91.7, 
  className = '', 
  alt = 'Logo',
  onClick
}: LogoProps) {
  return (
    <Image
      src="/footer-logo.jpg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onClick={onClick}
    />
  );
}