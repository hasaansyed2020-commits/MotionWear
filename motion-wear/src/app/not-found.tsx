'use client'

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import Logo from '@/components/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo variant="error" clickable={false} />
        </div>

        {/* 404 Animation */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50 animate-pulse" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Oops! The page you&apos;re looking for seems to have moved or doesn&apos;t exist.
          <br />
          Let&apos;s get you back on track to finding your perfect style.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4 font-medium">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Products', 'About', 'Contact', 'Blog'].map((page) => (
              <Link
                key={page}
                href={`/${page.toLowerCase()}`}
                className="text-purple-600 hover:text-purple-800 font-medium underline"
              >
                {page}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
