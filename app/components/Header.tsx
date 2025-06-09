'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedLink from './AnimatedLink'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-medium' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
              {/* PNG Logo */}
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/images/logos/hooman-logo.png" 
                  alt="Hooman Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-urbanist text-display-4 font-bold text-neutral-800 lowercase leading-none">
                  hooman
                </div>
                <div className="font-urbanist text-display-1 text-neutral-600 font-medium leading-tight">
                  Smarter pet parenting
                </div>
              </div>
            </a>

            {/* Right Section - Navigation and Menu */}
            <div className="flex items-center gap-8">
              {/* Desktop Navigation - Right Aligned */}
              <nav className="hidden md:flex items-center space-x-8">
                <AnimatedLink 
                  href="#home" 
                  className="font-urbanist text-display-2 text-neutral-700 font-medium"
                >
                  home
                </AnimatedLink>
                <AnimatedLink 
                  href="#vision" 
                  className="font-urbanist text-display-2 text-neutral-700 font-medium"
                >
                  vision
                </AnimatedLink>
                <AnimatedLink 
                  href="#about" 
                  className="font-urbanist text-display-2 text-neutral-700 font-medium"
                >
                  about
                </AnimatedLink>
                <AnimatedLink 
                  href="#community" 
                  className="font-urbanist text-display-2 text-neutral-700 font-medium"
                >
                  community
                </AnimatedLink>
              </nav>

              {/* Download Button */}
              <button className="hidden sm:flex items-center bg-black hover:bg-gray-800 text-white font-urbanist text-display-2 font-medium px-6 py-3 rounded-full shadow-small hover:shadow-regular transition-all duration-300">
                hooman pets
              </button>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-black hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  <div className={`w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                  <div className={`w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col"
          >
            {/* Orange Section */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-orange-500 h-1/2 p-8 flex items-start justify-start"
            >
              <div className="max-w-7xl mx-auto w-full pt-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-left">
                  <div>
                    <h3 className="text-black text-2xl md:text-3xl font-bold mb-4">vets</h3>
                  </div>
                  <div>
                    <h3 className="text-black text-2xl md:text-3xl font-bold mb-4">community</h3>
                  </div>
                  <div>
                    <h3 className="text-black text-2xl md:text-3xl font-bold mb-4">ezra ai</h3>
                  </div>
                  <div>
                    <h3 className="text-black text-2xl md:text-3xl font-bold mb-4">pet care</h3>
                    <ul className="space-y-2 text-black">
                      <li className="text-lg">practica</li>
                      <li className="text-lg">library</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-black text-2xl md:text-3xl font-bold mb-4">testimonial</h3>
                    <ul className="space-y-2 text-black">
                      <li className="text-lg">practica</li>
                      <li className="text-lg">library</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Blue Section */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-blue-400 h-1/6"
            >
            </motion.div>

            {/* Purple Section */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-purple-600 h-1/6"
            >
            </motion.div>

            {/* Green Section */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-green-500 h-1/6 p-8 flex items-center"
            >
              <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                <div>
                  <p className="text-black text-lg mb-4">sign up for stories of change in action</p>
                  <div className="flex gap-4">
                    <input 
                      type="email" 
                      placeholder="email address" 
                      className="bg-transparent border-b-2 border-black text-black placeholder-black px-0 py-2 focus:outline-none focus:border-gray-700"
                    />
                    <button className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
                      subscribe
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="flex gap-4 text-black text-lg">
                    <span>waitlist</span>
                    <span>connect</span>
                  </div>
                  <div className="flex gap-4 text-black text-xl">
                    <span>📧</span>
                    <span>📷</span>
                    <span>🐦</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 