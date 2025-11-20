'use client'

import { motion } from 'framer-motion'
import { Target, Heart, Award, Users, TrendingUp, Globe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-6">
                Our Story
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded in 2020, Motion Wear was born from a passion for combining 
                style with comfort. We believe everyone deserves footwear that 
                performs as good as it looks.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  description: "To provide premium, authentic sneakers that empower people to move with confidence and style every day."
                },
                {
                  icon: Heart,
                  title: "Our Vision",
                  description: "To become the most trusted destination for sneaker enthusiasts worldwide, known for quality and authenticity."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 p-10 rounded-3xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 
                              rounded-2xl flex items-center justify-center mb-6">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Award, title: "Authenticity", desc: "100% genuine products from trusted brands" },
                { icon: Users, title: "Community", desc: "Building connections with sneaker enthusiasts" },
                { icon: Heart, title: "Passion", desc: "Love for quality footwear and fashion" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 
                              rounded-full flex items-center justify-center mb-6">
                    <value.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, value: "10K+", label: "Happy Customers" },
                { icon: Award, value: "500+", label: "Products" },
                { icon: TrendingUp, value: "4.9/5", label: "Rating" },
                { icon: Globe, value: "50+", label: "Countries" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 
                              rounded-2xl flex items-center justify-center mb-4">
                    <stat.icon size={28} className="text-white" />
                  </div>
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
              Our Journey
            </h2>
            <div className="space-y-12">
              {[
                { year: "2020", title: "Founded", desc: "Motion Wear was born from a passion for quality footwear" },
                { year: "2021", title: "First 1000 Customers", desc: "Reached our first major milestone" },
                { year: "2022", title: "Expanded Collection", desc: "Added 200+ premium products to our catalog" },
                { year: "2024", title: "10K+ Happy Customers", desc: "Growing strong with global presence" }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8 items-center"
                >
                  <div className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-primary-500 to-secondary-500 
                              rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {milestone.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
