'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'small' | 'large' | 'footer';
  className?: string;
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  const sizes = {
    small: { width: 120, height: 40 },
    default: { width: 180, height: 60 },
    large: { width: 240, height: 80 },
    footer: { width: 200, height: 67 }
  };

  const size = sizes[variant];

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src="https://www.genspark.ai/api/files/s/6nihDxKs?cache_control=3600"
        alt="Motion Wear - Where Style Meets Comfort"
        width={size.width}
        height={size.height}
        priority
        className="w-auto h-auto object-contain hover:scale-105 transition-transform duration-300"
      />
    </Link>
  );
}
