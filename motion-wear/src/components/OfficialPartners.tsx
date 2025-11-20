'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: "Nike",
    logo: "https://logo.clearbit.com/nike.com"
  },
  {
    name: "Adidas",
    logo: "https://logo.clearbit.com/adidas.com"
  },
  {
    name: "Puma",
    logo: "https://logo.clearbit.com/puma.com"
  },
  {
    name: "Reebok",
    logo: "https://logo.clearbit.com/reebok.com"
  },
  {
    name: "New Balance",
    logo: "https://logo.clearbit.com/newbalance.com"
  },
  {
    name: "Converse",
    logo: "https://logo.clearbit.com/converse.com"
  }
]

export default function OfficialPartners() {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 uppercase tracking-wide">
              Official Partner of Premium Brands
            </h2>
          </motion.div>
        </motion.div>

        {/* Infinite Sliding Logos */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Sliding Container */}
          <motion.div
            className="flex gap-16 md:gap-20"
            animate={{
              x: [0, -1500] // Adjusted for 6 partners
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear"
              }
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 group"
              >
                <div className="w-48 h-32 bg-white rounded-2xl shadow-md hover:shadow-2xl 
                              transition-all duration-300 flex items-center justify-center 
                              p-8 border border-gray-100 group-hover:border-primary-500">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      width={140}
                      height={70}
                      className="object-contain grayscale group-hover:grayscale-0 
                               transition-all duration-300 opacity-70 group-hover:opacity-100"
                      style={{ maxHeight: '80px', width: 'auto' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
