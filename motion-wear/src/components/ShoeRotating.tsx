'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

// Shoe angles - 5 different views
const shoeImages = [
  { angle: 'Side View', image: '/images/shoes/angle-1.jpg' },
  { angle: 'Front View', image: '/images/shoes/angle-2.jpg' },
  { angle: 'Top View', image: '/images/shoes/angle-3.jpg' },
  { angle: 'Bottom View', image: '/images/shoes/angle-4.jpg' },
  { angle: 'Top-Down View', image: '/images/shoes/angle-5.jpg' },
];

interface ShoeRotatingProps {
  autoRotate?: boolean;
  rotationSpeed?: number;
}

export default function ShoeRotating({ 
  autoRotate = true, 
  rotationSpeed = 2500 
}: ShoeRotatingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto rotation
  useEffect(() => {
    if (isAutoRotating && !isHovered) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % shoeImages.length);
      }, rotationSpeed);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoRotating, isHovered, rotationSpeed]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % shoeImages.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + shoeImages.length) % shoeImages.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Container */}
      <div 
        className="relative w-full max-w-3xl h-full perspective-2000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Slider */}
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                rotateY: { duration: 0.5 },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Shoe Image */}
              <div className="relative w-full h-full">
                <img
                  src={shoeImages[currentIndex].image}
                  alt={shoeImages[currentIndex].angle}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                
                {/* Shadow */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-12 bg-gradient-to-r from-transparent via-black/30 to-transparent blur-2xl"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all z-10 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-purple-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all z-10 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-purple-600" />
          </button>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-10">
          {/* Angle Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl"
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">🔄</span>
              <span className="font-bold text-gray-800">
                {shoeImages[currentIndex].angle}
              </span>
            </div>
          </motion.div>

          {/* Dot Navigation */}
          <div className="flex gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl">
            {shoeImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-600 to-purple-800 w-8 h-3'
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Top Left - Auto Rotate Toggle */}
        <button
          onClick={toggleAutoRotate}
          className={`absolute top-6 left-6 px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition-all z-10 flex items-center gap-2 ${
            isAutoRotating
              ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white'
              : 'bg-white/90 text-gray-800 hover:bg-white'
          }`}
        >
          <RotateCw className={`w-4 h-4 ${isAutoRotating ? 'animate-spin' : ''}`} />
          <span className="text-sm font-bold">
            {isAutoRotating ? 'Auto Rotate' : 'Manual'}
          </span>
        </button>

        {/* Top Right - 360° Badge */}
        <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-purple-900 text-white px-5 py-2 rounded-full shadow-lg text-sm font-bold z-10">
          360° VIEW
        </div>

        {/* Brand Badge */}
        <div className="absolute top-20 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg z-10">
          <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
            Nike Training
          </span>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      {/* Keyboard Hint */}
      <div className="absolute bottom-32 right-6 bg-white/80 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <span>←</span>
          <span>→</span>
          <span className="font-medium">Navigate</span>
        </div>
      </div>
    </div>
  );
}
