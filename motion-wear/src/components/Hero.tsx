'use client'

import Shoe3D from './Shoe3D'
import ScrollIndicator from './ScrollIndicator'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const handleExplore = () => {
    console.log('Explore clicked')
    // Navigate to shop page
  }

  const handleLearnMore = () => {
    console.log('Learn more clicked')
    // Navigate to about page
  }

  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="max-w-xl text-center lg:text-left">
            {/* Brand Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-hero 
                         font-extrabold text-gray-900 mb-3 md:mb-4 tracking-tight">
              MOTION WEAR
            </h1>

            {/* Tagline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-display 
                         font-extrabold mb-4 md:mb-6 gradient-text">
              Where Style Meets Comfort
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed 
                        mb-8 md:mb-10 max-w-md mx-auto lg:mx-0">
              Discover premium sneakers and joggers from the world&apos;s top brands. 
              Experience extraordinary comfort and style with our curated collection 
              of footwear designed for the modern athlete and fashion enthusiast.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16 
                          justify-center lg:justify-start">
              <button 
                onClick={handleExplore}
                className="btn-primary w-full sm:w-auto"
              >
                Explore Now
              </button>
              <button 
                onClick={handleLearnMore}
                className="btn-secondary group w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight 
                    size={18} 
                    className="transition-transform duration-300 group-hover:translate-x-1" 
                  />
                </span>
              </button>
            </div>

            {/* Scroll Indicator - Hidden on mobile */}
            <div className="hidden lg:block">
              <ScrollIndicator />
            </div>
          </div>

          {/* Right Side - 3D Shoe */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] 
                        flex items-center justify-center">
            <Shoe3D />
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              {/* Gradient Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] 
                            md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] 
                            rounded-full bg-gradient-to-br from-primary-500/15 to-secondary-500/15 
                            blur-3xl" />
              
              {/* Dot Pattern - Hidden on mobile */}
              <div className="hidden md:block absolute top-1/2 left-1/2 
                            -translate-x-1/2 -translate-y-1/2 
                            w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-30"
                   style={{
                     backgroundImage: 'radial-gradient(circle, #E5E7EB 2px, transparent 2px)',
                     backgroundSize: '40px 40px',
                   }} />
              
              {/* Floating Shapes - Hidden on mobile */}
              <div className="hidden lg:block absolute top-[10%] right-[15%] 
                            w-16 h-16 lg:w-20 lg:h-20 rounded-[20px] 
                            bg-primary-500/10 rotate-[25deg] animate-float" />
              
              <div className="hidden lg:block absolute bottom-[15%] left-[10%] 
                            w-20 h-20 lg:w-24 lg:h-24 rounded-[20px] 
                            bg-primary-500/10 -rotate-[15deg] animate-float"
                   style={{ animationDelay: '1s', animationDuration: '8s' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
