'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-hooman-beige via-hooman-beige to-orange-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-hooman-orange opacity-5 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -left-16 w-32 h-32 bg-hooman-teal opacity-10 rounded-full"
        />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              {/* Logo */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="bg-hooman-orange p-4 rounded-2xl">
                  <div className="text-white text-3xl font-bold">🐾</div>
                </div>
                <div className="ml-4">
                  <h1 className="text-2xl lg:text-3xl font-bold text-hooman-black">
                    Hooman Pets
                  </h1>
                  <p className="text-hooman-black opacity-70 text-sm">by Hooman Inc</p>
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-1 text-hooman-black mb-6"
            >
              Smarter Pet{' '}
              <span className="text-hooman-orange">Parenting.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="body-large text-hooman-black opacity-80 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              AI-powered insights, expert vet access, and personalized care plans 
              for your furry family members. Because every pet deserves the best.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="btn-primary">
                Join the Pack 🐾
              </button>
              <button className="btn-secondary">
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8 text-sm text-hooman-black opacity-60"
            >
              Trusted by 10,000+ pet parents • 500+ veterinarians
            </motion.div>
          </div>

          {/* Right content - Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-hooman-orange to-hooman-teal rounded-2xl flex items-center justify-center">
                <div className="text-white text-8xl">🐕</div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-hooman-black mb-2">Meet Ezra AI</h3>
                <p className="text-hooman-black opacity-70">Your personal pet care assistant</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-hooman-black opacity-30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-hooman-black opacity-30 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
} 