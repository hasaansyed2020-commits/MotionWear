'use client'

import { motion } from 'framer-motion'
import { Truck, Shield, Zap, Heart } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100. Fast delivery in 2-3 days.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Authentic Products",
    description: "100% genuine sneakers from official brands.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Zap,
    title: "Latest Trends",
    description: "New arrivals every week. Stay ahead of fashion.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Heart,
    title: "Premium Comfort",
    description: "Engineered for all-day comfort and style.",
    color: "from-pink-500 to-rose-500"
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
            Why Choose Motion Wear
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of style, comfort, and authenticity
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl text-center group 
                       hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl 
                            bg-gradient-to-br ${feature.color}
                            flex items-center justify-center
                            group-hover:scale-110 group-hover:rotate-6 
                            transition-transform duration-300`}>
                <feature.icon size={28} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
