'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, User, Eye, EyeOff, Chrome, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signup form submitted:', formData)
    // Add signup logic here
  }

  const benefits = [
    { icon: CheckCircle, text: 'Exclusive member discounts' },
    { icon: CheckCircle, text: 'Early access to new releases' },
    { icon: CheckCircle, text: 'Free shipping on orders over $100' },
    { icon: CheckCircle, text: 'Birthday rewards' }
  ]

  return (
    <main className="min-h-screen flex items-center justify-center py-20 px-6 
                   bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Brand Card with Logo */}
            <div className="relative rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 
                            p-12 text-white">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                  <img
                    src="/updated_logo.png"
                    alt="Motion Wear"
                    className="h-32 w-auto object-contain"
                    style={{
                      filter: 'brightness(0) invert(1)'
                    }}
                  />
                </div>
                
                <h2 className="text-4xl font-extrabold mb-4 text-center">
                  Join Motion Wear
                </h2>
                <p className="text-xl mb-10 text-center opacity-90">
                  Where Every Step Matters
                </p>

                {/* Benefits */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Member Benefits:</h3>
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <benefit.icon size={18} className="text-white" />
                      </div>
                      <p className="text-lg leading-relaxed">{benefit.text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold">50K+</div>
                    <div className="text-sm opacity-90">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-sm opacity-90">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">4.9★</div>
                    <div className="text-sm opacity-90">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400 rounded-3xl rotate-12 opacity-80"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-400 rounded-2xl -rotate-12 opacity-80"
            />
          </div>
        </motion.div>

        {/* Right Side - Signup Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">
              Create Your Account
            </h1>
            <p className="text-gray-600 mb-8 text-center">
              Join thousands of satisfied customers today
            </p>

            {/* Social Signup */}
            <div className="space-y-3 mb-8">
              <button className="w-full flex items-center justify-center gap-3 px-6 py-4
                               border-2 border-gray-200 rounded-xl font-semibold
                               hover:border-gray-300 hover:bg-gray-50 transition-all">
                <Chrome size={20} />
                Sign up with Google
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-sm text-gray-500 font-medium">
                  Or sign up with email
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl
                               focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl
                               focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl
                             focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl
                             focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
                             hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl
                             focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 
                             hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                    className="w-5 h-5 rounded border-gray-300 text-primary-500 
                             focus:ring-primary-500 mt-0.5" 
                    required
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link href="/terms" className="text-primary-500 font-semibold hover:underline">
                      Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link href="/privacy" className="text-primary-500 font-semibold hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white 
                         py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Create Account
              </motion.button>
            </form>

            {/* Security Note */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <Shield size={16} />
              <span>Your data is secure and encrypted</span>
            </div>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-primary-500 font-semibold hover:underline">
                  Log in
                </Link>
              </p>
            </div>

            {/* Back to Home */}
            <div className="mt-4 text-center">
              <Link href="/" className="text-sm text-gray-600 hover:text-primary-500">
                ← Back to Home
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  )
}
