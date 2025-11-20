import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#d6e0ff',
          300: '#b3c7ff',
          400: '#8aa3ff',
          500: '#667eea',
          600: '#5568d3',
          700: '#4451b8',
          800: '#363e96',
          900: '#2d3379',
        },
        secondary: {
          500: '#764ba2',
          600: '#643d8a',
          700: '#523172',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'hero': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'purple': '0 8px 20px rgba(102, 126, 234, 0.35)',
        'purple-lg': '0 12px 28px rgba(102, 126, 234, 0.45)',
      },
      animation: {
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(25deg)' },
          '50%': { transform: 'translateY(-30px) rotate(25deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
