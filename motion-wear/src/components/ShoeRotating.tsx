'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const shoeImages = [
  { id: 1, image: '/images/shoes/Shoe updated 2.png', name: 'Premium Collection' },
];

export default function ShoeRotating() {
  const [currentIndex] = useState(0);

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
      style={{
        perspective: '2500px',
        perspectiveOrigin: 'center',
        willChange: 'transform',
      }}
    >
      {/* Nike-Style Shoe Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className="relative w-full h-[600px] flex items-center justify-center overflow-visible"
        style={{ willChange: 'transform, opacity' }}
      >

        {/* Nike-Style Diagonal Floating Shoe */}
        <motion.div
          initial={{ 
            opacity: 0,
            y: 100,
            scale: 0.7
          }}
          animate={{ 
            opacity: 1,
            y: 0,
            scale: 1
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
            type: "spring",
            stiffness: 120,
            damping: 18
          }}
          className="relative w-full h-full flex items-center justify-center"
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Main Shoe Image with Nike-Style Transform - OPTIMIZED */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop"
            }}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              willChange: 'transform',
              transform: 'translateZ(0)', // GPU acceleration
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '200%',
                height: '200%',
                transform: 'perspective(1800px) rotateX(-12deg) rotateY(25deg) rotateZ(-30deg) scale(0.8) translateZ(80px)',
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <Image
                src={shoeImages[currentIndex].image}
                alt={shoeImages[currentIndex].name}
                fill
                priority
                className="object-contain"
                style={{
                  filter: 'drop-shadow(0px 25px 50px rgba(0, 0, 0, 0.35))',
                  imageRendering: 'crisp-edges',
                }}
                quality={95}
              />
            </div>
          </motion.div>
          
          {/* Optimized Ground Shadow */}
          <div 
            className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[80%] h-[35%] -z-10"
            style={{ 
              willChange: 'auto',
              transform: 'translateZ(0)',
            }}
          >
            <div className="absolute inset-0 bg-black/35 blur-[60px] rounded-full" 
                 style={{ transform: 'translateZ(0)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/25 via-orange-900/25 to-purple-900/25 blur-[40px] rounded-full" 
                 style={{ transform: 'translateZ(0)' }} />
          </div>
        </motion.div>

      </motion.div>

    </div>
  );
}
