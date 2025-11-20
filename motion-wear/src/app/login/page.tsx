'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, User, Eye, EyeOff, Chrome } from 'lucide-react'
import Link from 'next/link'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <main className="min-h-screen flex items-center justify-center py-20 px-6 
                   bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Brand Card */}
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 
                            flex items-center justify-center">
                <div className="text-center text-white p-12">
                  <h2 className="text-5xl font-extrabold mb-6">
                    MOTION WEAR
                  </h2>
                  <p className="text-2xl mb-8">
                    Where Style Meets Comfort
                  </p>
                  <div className="flex justify-center gap-8 text-sm">
                    <div>
                      <div className="text-3xl font-bold">10K+</div>
                      <div className="opacity-90">Customers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">500+</div>
                      <div className="opacity-90">Products</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">4.9</div>
                      <div className="opacity-90">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400 rounded-3xl rotate-12"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-400 rounded-2xl -rotate-12"
            />
          </div>
        </motion.div>

        {/* Right Side - Auth Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`text-lg font-bold transition-colors ${
                  isLogin ? 'text-primary-600' : 'text-gray-400'
                }`}
              >
                Login
              </button>
              <div className="w-px h-6 bg-gray-300" />
              <button
                onClick={() => setIsLogin(false)}
                className={`text-lg font-bold transition-colors ${
                  !isLogin ? 'text-primary-600' : 'text-gray-400'
                }`}
              >
                Sign Up
              </button>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">
              {isLogin ? 'Welcome Back!' : 'Create Account'}
            </h1>
            <p className="text-gray-600 mb-8 text-center">
              {isLogin 
                ? 'Enter your credentials to access your account' 
                : 'Join Motion Wear family today'
              }
            </p>

            {/* Social Login */}
            <div className="space-y-3 mb-8">
              <button className="w-full flex items-center justify-center gap-3 px-6 py-4
                               border-2 border-gray-200 rounded-xl font-semibold
                               hover:border-gray-300 hover:bg-gray-50 transition-all">
                <Chrome size={20} />
                Continue with Google
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-sm text-gray-500 font-medium">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name (Sign Up Only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl
                               focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

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
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl
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
                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl
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
              </div>

              {/* Remember Me & Forgot Password (Login Only) */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 
                                                      text-primary-500 focus:ring-primary-500" />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-primary-500 font-semibold 
                                                          hover:underline">
                    Forgot Password?
                  </Link>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-bold text-lg"
              >
                {isLogin ? 'Login' : 'Create Account'}
              </motion.button>
            </form>

            {/* Terms (Sign Up Only) */}
            {!isLogin && (
              <p className="mt-6 text-center text-sm text-gray-600">
                By signing up, you agree to our{' '}
                <Link href="/terms" className="text-primary-500 font-semibold hover:underline">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-primary-500 font-semibold hover:underline">
                  Privacy Policy
                </Link>
              </p>
            )}

            {/* Back to Home */}
            <div className="mt-6 text-center">
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
