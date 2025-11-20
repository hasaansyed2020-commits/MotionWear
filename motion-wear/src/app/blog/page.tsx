'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Sneakers of 2024",
    excerpt: "Discover the most sought-after sneakers that defined this year's fashion trends.",
    category: "Trends",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: 2,
    title: "How to Choose the Perfect Running Shoes",
    excerpt: "A comprehensive guide to finding running shoes that match your style and needs.",
    category: "Guide",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 3,
    title: "Sneaker Care 101: Keep Your Kicks Fresh",
    excerpt: "Essential tips and tricks to maintain your sneakers and extend their lifespan.",
    category: "Care",
    author: "Alex Rodriguez",
    date: "2024-01-08",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 4,
    title: "Style Guide: Pairing Sneakers with Outfits",
    excerpt: "Master the art of sneaker styling with our comprehensive fashion guide.",
    category: "Style Tips",
    author: "Emma Davis",
    date: "2024-01-05",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/2404959/pexels-photo-2404959.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  }
]

const categories = ['All', 'Trends', 'Guide', 'Reviews', 'Style Tips', 'Care']

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary-50 
                            rounded-full mb-4">
                <TrendingUp size={18} className="text-primary-500" />
                <span className="text-sm font-semibold text-primary-600">
                  Latest Articles
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-6">
                Motion Wear Blog
              </h1>
              <p className="text-xl text-gray-600">
                Stay updated with the latest sneaker trends, style tips, and care guides
              </p>
            </motion.div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-2xl
                           focus:border-primary-500 focus:outline-none transition-colors
                           text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b-2 border-gray-100 sticky top-20 z-40 backdrop-blur-lg bg-white/90">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-white">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-primary-500 text-white text-sm font-bold rounded-lg">
                      Featured
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-lg">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4 hover:text-primary-600 transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500
                                    flex items-center justify-center text-white font-bold">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock size={14} />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <Link href={`/blog/${featuredPost.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white
                                 font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                      >
                        Read More
                        <ArrowRight size={18} />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
              Recent Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 
                                     text-xs font-semibold rounded-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 
                                 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500
                                      flex items-center justify-center text-white text-sm font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {post.author}
                        </span>
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="text-primary-500 font-semibold hover:gap-2 transition-all
                                   flex items-center gap-1"
                        >
                          Read
                          <ArrowRight size={16} />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold px-12 py-4 rounded-xl"
              >
                Load More Articles
              </motion.button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-500">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for the latest articles and exclusive deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl focus:outline-none"
              />
              <button className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl
                               hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
