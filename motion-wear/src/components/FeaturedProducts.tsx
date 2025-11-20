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
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/2404959/pexels-photo-2404959.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Popular",
    rating: 4.9,
    colors: ["#808080", "#FFFFFF", "#000000"]
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
              Trending Now
            </h2>
            <p className="text-lg text-gray-600">
              Most loved sneakers this season
            </p>
          </div>
          <motion.a
            href="/products"
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-primary-500 
                     font-semibold hover:gap-3 transition-all"
          >
            View All
            <ArrowRight size={20} />
          </motion.a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden 
                       shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
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
        <Link href="/products">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden mt-8 w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-4 rounded-xl text-center"
          >
            View All Products
          </motion.button>
        </Link>
      </div>
    </section>
  )
}
