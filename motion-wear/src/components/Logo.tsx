import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'small' | 'large' | 'footer';
  className?: string;
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  const heights = {
    small: '38px',
    default: '52px',
    large: '71px',
    footer: '58px'
  };

  return (
    <Link 
      href="/" 
      className={`inline-block ${className}`}
    >
      <img
        src="/logo.png"
        alt="Motion Wear - Where Style Meets Comfort"
        style={{ 
          height: heights[variant],
          width: 'auto',
          display: 'block'
        }}
        className="object-contain hover:scale-105 transition-transform duration-300"
      />
    </Link>
  );
}
