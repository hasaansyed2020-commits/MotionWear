'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart, Truck, Shield, Star, Check, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  const [selectedColor, setSelectedColor] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = {
    name: "Nike Air Max 270",
    category: "Men's Running Shoes",
    brand: "Nike",
    price: 180,
    originalPrice: 220,
    rating: 4.9,
    reviews: 324,
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Red", hex: "#FF0000" }
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2404959/pexels-photo-2404959.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      "Air cushioning technology for superior comfort",
      "Breathable mesh upper for ventilation",
      "Durable rubber outsole for traction",
      "Lightweight design for all-day wear"
    ],
    description: "The Nike Air Max 270 delivers visible cushioning under every step. The design draws inspiration from two icons of big Air: the Air Max 180 and Air Max 93. It showcases Nike's largest heel Air unit yet for a super-soft ride that feels as impossible as it looks.",
    inStock: true,
    stockCount: 15
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          
          {/* Back Button */}
          <Link href="/products">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-500 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Products
            </motion.button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm">
            
            {/* Left: Images */}
            <div>
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square bg-gray-100 rounded-3xl overflow-hidden mb-6 relative"
              >
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                
                {/* Wishlist Button */}
                <button className="absolute top-6 right-6 w-14 h-14 
                                 bg-white/90 backdrop-blur-sm rounded-full
                                 flex items-center justify-center
                                 hover:scale-110 transition-transform shadow-lg">
                  <Heart size={24} />
                </button>

                {/* Discount Badge */}
                {product.originalPrice && (
                  <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl shadow-lg">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </motion.div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-2xl overflow-hidden border-2 
                             transition-all ${
                      selectedImage === index
                        ? 'border-primary-500 scale-105'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image src={img} alt="" width={200} height={200} className="object-cover w-full h-full" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div>
              {/* Breadcrumb */}
              <div className="text-sm text-gray-500 mb-4">
                Home / Men&apos;s Shoes / Running / {product.name}
              </div>

              {/* Brand */}
              <div className="text-sm font-semibold text-primary-500 mb-2">
                {product.brand}
              </div>

              {/* Product Name */}
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6">{product.category}</p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-lg font-semibold">{product.rating}</span>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                <span className="text-5xl font-extrabold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-gray-900">Color:</span>
                  <span className="text-gray-600">{product.colors[selectedColor].name}</span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-12 h-12 rounded-full border-4 transition-all ${
                        selectedColor === index
                          ? 'border-primary-500 scale-110'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-gray-900">Size:</span>
                  <a href="#" className="text-primary-500 text-sm font-medium hover:underline">
                    Size Guide
                  </a>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`aspect-square rounded-xl border-2 font-semibold transition-all ${
                        selectedSize === size
                          ? 'border-primary-500 bg-primary-500 text-white scale-105'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <span className="font-semibold text-gray-900 mb-4 block">Quantity:</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-6 py-3 hover:bg-gray-100 transition-colors font-bold"
                    >
                      -
                    </button>
                    <span className="px-8 py-3 font-bold border-x-2 border-gray-200">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-6 py-3 hover:bg-gray-100 transition-colors font-bold"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-green-600 font-medium">
                    ✓ {product.stockCount} items available
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ShoppingCart size={24} />
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 border-2 border-gray-300 rounded-xl 
                           hover:border-primary-500 hover:text-primary-500 transition-colors"
                >
                  <Heart size={24} />
                </motion.button>
              </div>

              {/* Features */}
              <div className="bg-gray-50 p-6 rounded-2xl mb-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Truck, text: "Free Shipping Over $100" },
                    { icon: Shield, text: "100% Authentic" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 
                                    rounded-xl flex items-center justify-center">
                        <item.icon size={20} className="text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Features:</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Description:</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
