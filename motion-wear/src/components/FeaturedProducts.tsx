'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, ArrowRight, Star } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    category: "Men's Running",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    badge: "Bestseller",
    rating: 4.9,
    colors: ["#000000", "#FFFFFF", "#FF0000"]
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    category: "Men's Training",
    price: 200,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    badge: "New",
    rating: 4.8,
    colors: ["#000000", "#FFFFFF", "#0000FF"]
  },
  {
    id: 3,
    name: "Puma RS-X",
    category: "Men's Lifestyle",
    price: 150,
    originalPrice: 190,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80",
    badge: "Sale",
    rating: 4.7,
    colors: ["#FF0000", "#FFFFFF", "#00FF00"]
  },
  {
    id: 4,
    name: "New Balance 990",
    category: "Men's Casual",
    price: 175,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    badge: "Popular",
    rating: 4.9,
    colors: ["#808080", "#FFFFFF", "#000000"]
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 md:mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
              Trending Now
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Most loved sneakers this season
            </p>
          </div>
          <motion.a
            href="/products"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 text-primary-500 
                     font-semibold hover:gap-3 transition-all text-base md:text-lg"
          >
            View All
            <ArrowRight size={20} />
          </motion.a>
        </div>

        {/* Products Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
              }}
              className="group bg-white rounded-2xl overflow-hidden 
                       shadow-md hover:shadow-2xl transition-shadow duration-300"
              style={{ 
                willChange: 'transform',
                transform: 'translateZ(0)',
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={index < 2}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                  }}
                  quality={85}
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 
                                bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold 
                                rounded-lg shadow-lg">
                    {product.badge}
                  </div>
                )}

                {/* Favorite Button */}
                <button className="absolute top-4 right-4 w-10 h-10 
                                 bg-white/90 backdrop-blur-sm rounded-full
                                 flex items-center justify-center
                                 hover:bg-white hover:scale-110 transition-all
                                 opacity-0 group-hover:opacity-100">
                  <Heart size={18} className="text-gray-700" />
                </button>

                {/* Quick Add to Cart */}
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-4 left-4 right-4 
                           bg-gradient-to-r from-primary-500 to-secondary-500
                           text-white font-semibold py-3 rounded-xl
                           flex items-center justify-center gap-2
                           opacity-0 group-hover:opacity-100 transition-all
                           shadow-lg hover:shadow-xl"
                >
                  <ShoppingCart size={18} />
                  Quick Add
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Colors */}
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-gray-300
                               hover:scale-110 transition-transform cursor-pointer"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <Link href="/products" className="sm:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full bg-gradient-to-r from-primary-500 to-secondary-500 
                     text-white font-bold py-4 px-6 rounded-xl text-center text-base 
                     shadow-lg active:shadow-xl transition-all"
          >
            View All Products →
          </motion.button>
        </Link>
      </div>
    </section>
  )
}
