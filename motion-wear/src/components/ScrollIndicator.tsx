'use client'

import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={handleScroll}
      className="flex flex-col items-center gap-2 text-gray-400 
               animate-bounce-slow hover:text-primary-500 transition-colors"
      aria-label="Scroll down"
    >
      <ChevronDown size={24} />
      <span className="text-sm font-medium">Scroll Down</span>
    </button>
  )
}
