'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-lg shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-32 md:h-40 lg:h-44">
          
          {/* LEFT: LOGO - RESPONSIVE */}
          <div className="flex-shrink-0">
            <Link href="/" className="block group">
              <img
                src="/updated_logo.png"
                alt="Motion Wear"
                className="h-20 sm:h-28 md:h-36 lg:h-44 w-auto object-contain hover:scale-105 transition-transform duration-300"
                style={{
                  maxHeight: '250px',
                  backgroundColor: 'transparent',
                  filter: 'contrast(1.1) saturate(1.15) brightness(1.05)',
                  mixBlendMode: 'multiply',
                  imageRendering: 'crisp-edges'
                }}
              />
            </Link>
          </div>

          {/* CENTER: Desktop Navigation - EXTRA BOLD */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-purple-600 font-extrabold text-xl tracking-wide transition-all duration-300 relative group whitespace-nowrap hover:scale-105"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-purple-800 group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* RIGHT: Icons & Actions - BOLD & LARGER */}
          <div className="flex items-center space-x-3">
            <button className="hidden md:flex p-3 hover:bg-purple-100 rounded-full transition-all duration-300 hover:scale-110">
              <Search className="w-7 h-7 text-gray-800 stroke-[2.5]" />
            </button>
            
            <Link href="/profile" className="hidden md:flex p-3 hover:bg-purple-100 rounded-full transition-all duration-300 hover:scale-110">
              <User className="w-7 h-7 text-gray-800 stroke-[2.5]" />
            </Link>
            
            <Link href="/cart" className="hidden md:flex relative p-3 hover:bg-purple-100 rounded-full transition-all duration-300 hover:scale-110">
              <ShoppingCart className="w-7 h-7 text-gray-800 stroke-[2.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-sm rounded-full w-7 h-7 flex items-center justify-center font-extrabold shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login/Signup Buttons */}
            <div className="hidden md:flex items-center gap-2 ml-4">
              <Link href="/login">
                <button className="px-5 py-2.5 text-gray-800 font-bold hover:text-purple-600 transition-colors">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold rounded-xl hover:shadow-lg transition-all hover:scale-105">
                  Sign Up
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button - BOLD */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 hover:bg-purple-100 rounded-full transition-all duration-300 hover:scale-110"
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8 text-gray-800 stroke-[2.5]" />
              ) : (
                <Menu className="w-8 h-8 text-gray-800 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - PROFESSIONAL & SMOOTH */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-white border-t-2 border-gray-200 shadow-xl"
            >
              <div className="py-6 px-2 space-y-2 max-h-[calc(100vh-96px)] overflow-y-auto">
                {/* Logo in Mobile Menu */}
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-center px-4 pb-6 mb-4 border-b-2 border-gray-200"
                >
                  <img
                    src="/updated_logo.png"
                    alt="Motion Wear"
                    className="h-28 w-auto object-contain"
                    style={{ 
                      backgroundColor: 'transparent',
                      filter: 'contrast(1.1) saturate(1.15) brightness(1.05)',
                      mixBlendMode: 'multiply',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </Link>
                
                {/* Navigation Links */}
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-5 py-4 mx-2 text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 
                               hover:text-purple-700 active:bg-purple-200 transition-all duration-300 
                               font-bold text-lg tracking-wide rounded-xl hover:scale-[1.02] hover:shadow-md"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Auth Buttons */}
                <div className="px-2 pt-6 mt-4 border-t-2 border-gray-200 space-y-3">
                  <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full px-5 py-4 text-gray-800 hover:bg-purple-50 hover:text-purple-700 
                                     active:bg-purple-100 transition-all duration-300 font-bold text-base 
                                     text-center rounded-xl border-2 border-gray-200 hover:border-purple-300 
                                     hover:shadow-md active:scale-[0.98]">
                      👤 Profile
                    </button>
                  </Link>
                  <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full px-5 py-4 text-gray-800 hover:bg-purple-50 hover:text-purple-700 
                                     active:bg-purple-100 transition-all duration-300 font-bold text-base 
                                     text-center rounded-xl border-2 border-gray-200 hover:border-purple-300 
                                     hover:shadow-md active:scale-[0.98]">
                      🛒 Cart
                    </button>
                  </Link>
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full px-5 py-4 text-white bg-gradient-to-r from-purple-600 to-purple-800 
                                     active:from-purple-700 active:to-purple-900 transition-all duration-300 
                                     font-bold text-base text-center rounded-xl shadow-lg hover:shadow-xl 
                                     active:scale-[0.98]">
                      Login
                    </button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full px-5 py-4 text-white bg-gradient-to-r from-green-500 to-emerald-600 
                                     active:from-green-600 active:to-emerald-700 transition-all duration-300 
                                     font-bold text-base text-center rounded-xl shadow-lg hover:shadow-xl 
                                     active:scale-[0.98]">
                      🎉 Sign Up Free
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
