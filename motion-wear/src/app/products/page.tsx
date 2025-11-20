'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, Star, Grid3x3, List, SlidersHorizontal } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    category: "Men's Running",
    brand: "Nike",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 324,
    colors: ["#000000", "#FFFFFF", "#FF0000"]
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    category: "Men's Training",
    brand: "Adidas",
    price: 200,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    badge: "New",
    rating: 4.8,
    reviews: 256,
    colors: ["#000000", "#FFFFFF", "#0000FF"]
  },
  {
    id: 3,
    name: "Puma RS-X",
    category: "Men's Lifestyle",
    brand: "Puma",
    price: 150,
    originalPrice: 190,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80",
    badge: "Sale",
    rating: 4.7,
    reviews: 189,
    colors: ["#FF0000", "#FFFFFF", "#00FF00"]
  },
  {
    id: 4,
    name: "New Balance 990",
    category: "Men's Casual",
    brand: "New Balance",
    price: 175,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    badge: "Popular",
    rating: 4.9,
    reviews: 412,
    colors: ["#808080", "#FFFFFF", "#000000"]
  },
  {
    id: 5,
    name: "Reebok Classic",
    category: "Men's Casual",
    brand: "Reebok",
    price: 120,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&q=80",
    badge: "",
    rating: 4.6,
    reviews: 145,
    colors: ["#FFFFFF", "#000000"]
  },
  {
    id: 6,
    name: "Converse Chuck Taylor",
    category: "Men's Lifestyle",
    brand: "Converse",
    price: 90,
    originalPrice: 110,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    badge: "",
    rating: 4.8,
    reviews: 523,
    colors: ["#000000", "#FFFFFF", "#FF0000"]
  }
]

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')

  return (
    <>
      <Navbar />
      <main className="pt-52 pb-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              All Products
            </h1>
            <p className="text-lg text-gray-600">
              Discover our complete collection of premium sneakers
            </p>
          </motion.div>

          {/* Filters & Sort Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm">
            {/* Left: Filter Button */}
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-xl hover:border-primary-500 transition-colors">
              <SlidersHorizontal size={20} />
              <span className="font-medium">Filters</span>
            </button>

            {/* Center: Results Count */}
            <div className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{products.length}</span> products
            </div>

            {/* Right: Sort & View */}
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl font-medium focus:outline-none focus:border-primary-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Top Rated</option>
              </select>

              {/* View Toggle */}
              <div className="hidden md:flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <Grid3x3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden 
                         shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <Link href={`/products/${product.id}`}>
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
                    <button 
                      onClick={(e) => e.preventDefault()}
                      className="absolute top-4 right-4 w-10 h-10 
                                   bg-white/90 backdrop-blur-sm rounded-full
                                   flex items-center justify-center
                                   hover:bg-white hover:scale-110 transition-all
                                   opacity-0 group-hover:opacity-100">
                      <Heart size={18} className="text-gray-700" />
                    </button>

                    {/* Quick Add to Cart */}
                    <motion.button
                      onClick={(e) => e.preventDefault()}
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
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
                        {product.rating} ({product.reviews})
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
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex justify-center gap-2"
          >
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-12 h-12 rounded-xl font-semibold transition-all ${
                  page === 1
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-primary-500'
                }`}
              >
                {page}
              </button>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
