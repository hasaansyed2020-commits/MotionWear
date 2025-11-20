'use client'

import { useState, useEffect } from 'react'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-md'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900 hover:text-primary-500 transition-colors">
            MOTION WEAR
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`text-base font-medium transition-all duration-200 ${
                    pathname === item.path
                      ? 'text-primary-500'
                      : 'text-gray-600 hover:text-primary-500 hover:scale-105'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Search - Hidden on mobile */}
            <button
              className="hidden sm:flex w-10 h-10 items-center justify-center text-gray-600 
                       hover:text-primary-500 hover:bg-primary-50 rounded-full 
                       transition-all duration-200 hover:scale-110"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative w-10 h-10 flex items-center justify-center text-gray-600 
                       hover:text-primary-500 hover:bg-primary-50 rounded-full 
                       transition-all duration-200 hover:scale-110"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-[18px] h-[18px] 
                               bg-primary-500 text-white text-[11px] font-semibold 
                               rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile - Hidden on mobile */}
            <Link
              href="/login"
              className="hidden sm:flex w-10 h-10 items-center justify-center text-gray-600 
                       hover:text-primary-500 hover:bg-primary-50 rounded-full 
                       transition-all duration-200 hover:scale-110"
              aria-label="Profile"
            >
              <User size={20} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-600 
                       hover:text-primary-500 hover:bg-primary-50 rounded-full 
                       transition-all duration-200"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-20 right-0 w-64 bg-white shadow-xl rounded-l-2xl p-6">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-lg font-medium transition-colors py-2 ${
                      pathname === item.path
                        ? 'text-primary-500'
                        : 'text-gray-600 hover:text-primary-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
