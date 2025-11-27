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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-44">
          
          {/* LEFT: LOGO - NO GREY BACKGROUND */}
          <div className="flex-shrink-0">
            <Link href="/" className="block group">
              <img
                src="/updated_logo.png"
                alt="Motion Wear"
                className="h-44 w-auto object-contain hover:scale-105 transition-transform duration-300"
                style={{
                  maxHeight: '250px',
                  minHeight: '216px',
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-3">
                {/* Logo in Mobile Menu - NO GREY */}
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-center px-4 pb-4 border-b border-gray-200"
                >
                  <img
                    src="/updated_logo.png"
                    alt="Motion Wear"
                    className="h-36 w-auto object-contain"
                    style={{ 
                      maxHeight: '250px',
                      minHeight: '216px',
                      backgroundColor: 'transparent',
                      filter: 'contrast(1.1) saturate(1.15) brightness(1.05)',
                      mixBlendMode: 'multiply',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </Link>
                
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-800 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300 font-extrabold text-xl tracking-wide hover:pl-6"
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Auth Buttons */}
                <div className="px-4 pt-4 border-t border-gray-200 space-y-3">
                  <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full px-4 py-3 text-gray-800 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300 font-extrabold text-xl tracking-wide text-left hover:pl-6">
                      Profile
                    </button>
                  </Link>
                  <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full px-4 py-3 text-gray-800 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300 font-extrabold text-xl tracking-wide text-left hover:pl-6">
                      Cart
                    </button>
                  </Link>
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full px-4 py-3 text-gray-800 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300 font-bold text-lg text-center rounded-xl border-2 border-gray-300">
                      Login
                    </button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold text-lg rounded-xl hover:shadow-lg transition-all">
                      Sign Up Free
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
