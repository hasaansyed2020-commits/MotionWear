'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Shoe3DSimple() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateY = ((e.clientX - centerX) / rect.width) * 30;
    const rotateX = -((e.clientY - centerY) / rect.height) * 30;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* 3D Container */}
      <motion.div
        ref={containerRef}
        className="relative w-full max-w-2xl h-full perspective-1000 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Shoe Image with 3D Transform */}
        <motion.div
          className="relative w-full h-full preserve-3d"
          animate={{
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          {/* Main Shoe Image */}
          <div className="relative w-full h-full">
            <Image
              src="https://www.genspark.ai/api/files/s/txciaHAy"
              alt="Nike Training Shoe"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Shadow */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-transparent via-black/20 to-transparent blur-xl"></div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* UI Overlays */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl"
      >
        <div className="flex items-center space-x-3 text-sm">
          <span className="text-lg">✨</span>
          <span className="font-medium text-gray-700">
            Hover to interact
          </span>
        </div>
      </motion.div>

      {/* Brand Badge */}
      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
        <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
          Nike Training
        </span>
      </div>

      {/* 3D VIEW Badge */}
      <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-purple-900 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold">
        3D VIEW
      </div>
    </div>
  );
}
