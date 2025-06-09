'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            {/* Logo placeholder - you can replace with actual logo */}
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-orange-500"></div>
              <div className="w-6 h-6 bg-blue-500"></div>
              <div className="w-6 h-6 bg-green-500"></div>
            </div>
            <div className="text-xl font-bold text-black lowercase">
              hooman
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              home
            </a>
            <a 
              href="#vision" 
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              vision
            </a>
            <a 
              href="#about" 
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              about
            </a>
            <a 
              href="#community" 
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              community
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Download Button */}
            <button className="hidden sm:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
              download hooman
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-black hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <div className={`w-5 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-4">
            <a 
              href="#home" 
              className="block text-black hover:text-gray-600 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              home
            </a>
            <a 
              href="#vision" 
              className="block text-black hover:text-gray-600 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              vision
            </a>
            <a 
              href="#about" 
              className="block text-black hover:text-gray-600 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              about
            </a>
            <a 
              href="#community" 
              className="block text-black hover:text-gray-600 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              community
            </a>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 mt-4">
              download hooman
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 