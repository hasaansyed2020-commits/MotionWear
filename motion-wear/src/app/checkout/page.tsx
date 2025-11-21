'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Lock, Check, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card')

  const cartItems = [
    { name: "Nike Air Max 270", quantity: 1, price: 180, image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Adidas Ultraboost", quantity: 2, price: 200, image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800" }
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0
  const total = subtotal + shipping

  return (
    <>
      <Navbar />
      <main className="pt-52 pb-24 bg-gray-50 min-h-screen">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          
          {/* Logo Header - SUPER LARGE */}
          <div className="flex justify-center py-8">
            <img
              src="/updated_logo.png"
              alt="Motion Wear"
              className="h-36 w-auto object-contain"
              style={{
                background: 'transparent',
                maxHeight: '250px',
                minHeight: '216px',
                filter: 'contrast(1.1) saturate(1.15) brightness(1.05)',
                mixBlendMode: 'multiply',
                imageRendering: 'crisp-edges'
              }}
            />
          </div>
          
          {/* Progress Steps */}
          <div className="py-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              {[
                { num: 1, label: 'Shipping' },
                { num: 2, label: 'Payment' },
                { num: 3, label: 'Review' }
              ].map((s, index) => (
                <div key={s.num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center
                                   font-bold transition-all ${
                      step >= s.num
                        ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white scale-110'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step > s.num ? <Check size={24} /> : s.num}
                    </div>
                    <span className={`text-sm font-medium mt-2 ${
                      step >= s.num ? 'text-primary-600' : 'text-gray-500'
                    }`}>
                      {s.label}
                    </span>
                  </div>
                  {index < 2 && (
                    <ChevronRight className={`mx-4 ${
                      step > s.num ? 'text-primary-500' : 'text-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                
                {/* Step 1: Shipping Information */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Shipping Information
                    </h2>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                     focus:border-primary-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                     focus:border-primary-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                   focus:border-primary-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                   focus:border-primary-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                   focus:border-primary-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            City *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                     focus:border-primary-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            State *
                          </label>
                          <select
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                     focus:border-primary-500 focus:outline-none transition-colors"
                          >
                            <option value="">Select State</option>
                            <option value="NY">New York</option>
                            <option value="CA">California</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            ZIP Code *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                     focus:border-primary-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <motion.button
                        type="button"
                        onClick={() => setStep(2)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-bold text-lg"
                      >
                        Continue to Payment
                      </motion.button>
                    </form>
                  </motion.div>
                )}

                {/* Step 2: Payment Method */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Payment Method
                    </h2>

                    {/* Payment Method Selection */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <button
                        onClick={() => setPaymentMethod('card')}
                        className={`p-6 border-2 rounded-2xl transition-all ${
                          paymentMethod === 'card'
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <CreditCard size={32} className={paymentMethod === 'card' ? 'text-primary-500' : 'text-gray-400'} />
                        <div className="mt-2 font-semibold">Credit Card</div>
                      </button>
                      <button
                        onClick={() => setPaymentMethod('paypal')}
                        className={`p-6 border-2 rounded-2xl transition-all ${
                          paymentMethod === 'paypal'
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-2xl">💳</div>
                        <div className="mt-2 font-semibold">PayPal</div>
                      </button>
                    </div>

                    {/* Card Form */}
                    {paymentMethod === 'card' && (
                      <form className="space-y-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Card Number *
                          </label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                     focus:border-primary-500 focus:outline-none transition-colors"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Expiry Date *
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              required
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                       focus:border-primary-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              CVV *
                            </label>
                            <input
                              type="text"
                              placeholder="123"
                              required
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                       focus:border-primary-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Cardholder Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl
                                     focus:border-primary-500 focus:outline-none transition-colors"
                          />
                        </div>

                        <div className="flex gap-4">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 py-4 rounded-xl font-bold"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-bold"
                          >
                            Review Order
                          </button>
                        </div>
                      </form>
                    )}
                  </motion.div>
                )}

                {/* Step 3: Review Order */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Review Your Order
                    </h2>

                    <div className="space-y-6">
                      {/* Shipping Address */}
                      <div className="p-6 bg-gray-50 rounded-2xl">
                        <h3 className="font-bold text-gray-900 mb-3">Shipping Address</h3>
                        <p className="text-gray-600">
                          John Doe<br />
                          123 Fashion Street<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                      </div>

                      {/* Payment Method */}
                      <div className="p-6 bg-gray-50 rounded-2xl">
                        <h3 className="font-bold text-gray-900 mb-3">Payment Method</h3>
                        <p className="text-gray-600">
                          Credit Card ending in 3456
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => setStep(2)}
                          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 py-4 rounded-xl font-bold"
                        >
                          Back
                        </button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                        >
                          <Lock size={20} />
                          Place Order
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}

              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 pb-6 border-b-2 border-gray-100">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-gray-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <div className="font-bold text-gray-900">
                        ${item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b-2 border-gray-100">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-green-600">FREE</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-3xl font-extrabold text-gray-900">
                    ${total}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
