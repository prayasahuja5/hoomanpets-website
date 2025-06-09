'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Using a pet care background image - you can replace with your specific image */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-lg md:text-xl font-medium tracking-wide opacity-90">
              introducing hooman pets
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
          >
            we're reimagining<br />
            pet care with AI<br />
            <span className="text-orange-400">for every furry<br />
            family member</span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <button className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white border border-white border-opacity-30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Join the Waitlist 🐾
            </button>
          </motion.div>

          {/* Optional scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white opacity-50 rounded-full mt-2"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 