'use client'

import ShoeRotating from './ShoeRotating'
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
    <section className="min-h-screen pt-32 sm:pt-40 md:pt-52 pb-12 flex items-center">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="max-w-xl text-center lg:text-left order-2 lg:order-1">
            {/* Brand Name */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-hero 
                         font-extrabold text-gray-900 mb-2 sm:mb-3 md:mb-4 tracking-tight 
                         leading-tight">
              MOTION WEAR
            </h1>

            {/* Tagline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-display 
                         font-extrabold mb-3 sm:mb-4 md:mb-6 gradient-text 
                         leading-tight">
              Where Style Meets Comfort
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed 
                        mb-6 sm:mb-8 md:mb-10 max-w-md mx-auto lg:mx-0 px-2 sm:px-0">
              Discover premium sneakers and joggers from the world&apos;s top brands. 
              Experience extraordinary comfort and style with our curated collection 
              of footwear designed for the modern athlete and fashion enthusiast.
            </p>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 
                          justify-center lg:justify-start px-4 sm:px-0">
              <button 
                onClick={handleExplore}
                className="btn-primary w-full sm:w-auto text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8 
                         shadow-xl hover:shadow-2xl active:scale-95 transition-all"
              >
                Explore Now
              </button>
              <button 
                onClick={handleLearnMore}
                className="btn-secondary group w-full sm:w-auto text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8
                         active:scale-95 transition-all"
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

          {/* Right Side - Nike-Style Shoe Display - Mobile Optimized */}
          <div className="relative w-full h-[300px] xs:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] 
                        flex items-center justify-center overflow-visible order-1 lg:order-2">
            <ShoeRotating />
            
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
