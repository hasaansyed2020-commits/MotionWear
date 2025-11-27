'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { User, Mail, Phone, MapPin, Calendar, Package, Heart, Settings, LogOut, Edit2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    address: '123 Main Street, New York, NY 10001',
    joinDate: 'January 2024'
  })

  const orders = [
    {
      id: '#12345',
      date: 'Nov 15, 2024',
      status: 'Delivered',
      total: '$180',
      items: 2
    },
    {
      id: '#12344',
      date: 'Nov 10, 2024',
      status: 'In Transit',
      total: '$200',
      items: 1
    },
    {
      id: '#12343',
      date: 'Nov 5, 2024',
      status: 'Delivered',
      total: '$150',
      items: 3
    }
  ]

  const favorites = [
    { name: 'Nike Air Max 270', price: '$180', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80' },
    { name: 'Adidas Ultraboost', price: '$200', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&q=80' },
    { name: 'Puma RS-X', price: '$150', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&q=80' }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 pt-52 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* Profile Picture */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {userInfo.name.charAt(0)}
                </div>
                <h2 className="text-xl font-bold text-gray-900">{userInfo.name}</h2>
                <p className="text-sm text-gray-500">{userInfo.email}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === 'overview'
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <User size={20} />
                  <span className="font-medium">Overview</span>
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === 'orders'
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Package size={20} />
                  <span className="font-medium">Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === 'favorites'
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Heart size={20} />
                  <span className="font-medium">Favorites</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === 'settings'
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Settings size={20} />
                  <span className="font-medium">Settings</span>
                </button>
                
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/login"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
                  >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Personal Information</h3>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Edit2 size={18} />
                      <span>{isEditing ? 'Cancel' : 'Edit'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <User size={16} />
                        Full Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={userInfo.name}
                          onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                        />
                      ) : (
                        <p className="text-lg font-medium text-gray-900">{userInfo.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Mail size={16} />
                        Email Address
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={userInfo.email}
                          onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                        />
                      ) : (
                        <p className="text-lg font-medium text-gray-900">{userInfo.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Phone size={16} />
                        Phone Number
                      </label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={userInfo.phone}
                          onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                        />
                      ) : (
                        <p className="text-lg font-medium text-gray-900">{userInfo.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar size={16} />
                        Member Since
                      </label>
                      <p className="text-lg font-medium text-gray-900">{userInfo.joinDate}</p>
                    </div>

                    <div className="md:col-span-2">
                      <label className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <MapPin size={16} />
                        Address
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={userInfo.address}
                          onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                        />
                      ) : (
                        <p className="text-lg font-medium text-gray-900">{userInfo.address}</p>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="mt-6 flex gap-4">
                      <button className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                        Save Changes
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="flex-1 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Order History</h3>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-lg font-bold text-gray-900">{order.id}</p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          order.status === 'Delivered'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-600">{order.items} items</p>
                        <p className="text-xl font-bold text-gray-900">{order.total}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Favorites Tab */}
            {activeTab === 'favorites' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Favorite Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favorites.map((product, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary-500 transition-all"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-gray-900 mb-2">{product.name}</h4>
                        <p className="text-xl font-bold text-primary-500">{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Change Password</h4>
                    <div className="space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                      />
                      <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                        Update Password
                      </button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4">Notification Preferences</h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 text-primary-500" defaultChecked />
                        <span className="text-gray-700">Email notifications</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 text-primary-500" defaultChecked />
                        <span className="text-gray-700">Order updates</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 text-primary-500" />
                        <span className="text-gray-700">Promotional emails</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
