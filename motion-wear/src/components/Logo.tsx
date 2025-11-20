import Link from 'next/link';

interface LogoProps {
  variant?: 'navbar' | 'footer' | 'loading' | 'error' | 'small';
  isDark?: boolean;
  className?: string;
  clickable?: boolean;
}

export default function Logo({ 
  variant = 'navbar', 
  isDark = false, 
  className = '',
  clickable = true 
}: LogoProps) {
  
  // Size configurations for different placements
  const sizes = {
    navbar: {
      emoji: 'text-3xl md:text-4xl',
      mainText: 'text-xl md:text-2xl',
      subText: 'text-xs md:text-sm',
      gap: 'gap-2 md:gap-3'
    },
    footer: {
      emoji: 'text-3xl',
      mainText: 'text-2xl',
      subText: 'text-sm',
      gap: 'gap-3'
    },
    loading: {
      emoji: 'text-6xl md:text-8xl',
      mainText: 'text-5xl md:text-7xl',
      subText: 'text-xl md:text-2xl',
      gap: 'gap-4'
    },
    error: {
      emoji: 'text-5xl md:text-7xl',
      mainText: 'text-4xl md:text-5xl',
      subText: 'text-lg md:text-xl',
      gap: 'gap-3 md:gap-4'
    },
    small: {
      emoji: 'text-2xl',
      mainText: 'text-lg',
      subText: 'text-xs',
      gap: 'gap-2'
    }
  };

  const size = sizes[variant];

  // Text colors based on dark mode
  const textColors = {
    main: isDark 
      ? 'text-white' 
      : 'bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent',
    sub: isDark ? 'text-gray-300' : 'text-gray-600'
  };

  const LogoContent = () => (
    <div className={`flex items-center ${size.gap} group ${className}`}>
      {/* Sneaker Emoji */}
      <span className={`${size.emoji} transform group-hover:scale-110 transition-transform duration-300`}>
        👟
      </span>
      
      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className={`${size.mainText} font-bold ${textColors.main} group-hover:scale-105 transition-transform duration-300`}>
          MOTION
        </span>
        <span className={`${size.subText} font-semibold tracking-wider ${textColors.sub}`}>
          WEAR
        </span>
      </div>
    </div>
  );

  if (clickable) {
    return (
      <Link href="/" className="inline-flex">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}
