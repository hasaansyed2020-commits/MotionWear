'use client';

import { motion } from 'framer-motion';

export default function ShoeRotating() {

  return (
    <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] flex items-center justify-center px-4 md:px-8">
      
      {/* 3D Container Card - Shoe overflows from right & bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full max-w-4xl h-[450px] md:h-[550px] overflow-visible"
        style={{
          perspective: '1500px',
        }}
      >
        {/* 3D Background Container - Beige/Tan like Figma */}
        <div 
          className="absolute inset-0 rounded-3xl shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D4BA 100%)',
            transform: 'rotateY(-5deg) rotateX(2deg)',
            transformStyle: 'preserve-3d',
            boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,0.05)',
          }}
        >
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-orange-100/10"></div>
          
          {/* Accent Border */}
          <div className="absolute inset-0 rounded-3xl border border-white/40"></div>
        </div>

        {/* Shoe Image - Large Tilted Overflow like Figma */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 35 }}
          animate={{ opacity: 1, scale: 1, rotate: 45 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="absolute -right-[30%] -bottom-[45%] md:-right-[35%] md:-bottom-[50%] z-10"
          style={{
            width: '220%',
            height: '220%',
          }}
        >
          <img
            src="/images/shoes/Shoe updated 2.png"
            alt="Nike Air Max"
            className="w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0px 50px 100px rgba(0, 0, 0, 0.4))',
              transformStyle: 'preserve-3d',
            }}
          />
        </motion.div>


        {/* Bottom Right Shadow */}
        <div className="absolute -right-[5%] -bottom-[5%] w-[60%] h-32 bg-gradient-to-r from-transparent via-black/15 to-transparent blur-3xl rounded-full z-0"></div>
      </motion.div>

      {/* Floating Animation Circles */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] right-[10%] w-16 h-16 md:w-20 md:h-20 bg-orange-400/30 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{ 
          y: [0, 25, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[20%] left-[5%] w-20 h-20 md:w-24 md:h-24 bg-purple-400/20 rounded-full blur-xl"
      />

    </div>
  );
}
