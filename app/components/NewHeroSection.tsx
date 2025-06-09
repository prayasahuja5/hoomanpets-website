'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from './ui/Button'

export default function NewHeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden" style={{ backgroundColor: '#F5EDE2' }}>
      {/* Colorful Background Divs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orange blocks */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-100 rounded-3xl rotate-12 opacity-20" />
        <div className="absolute top-20 right-20 w-24 h-24 bg-primary-100 rounded-2xl -rotate-45 opacity-15" />
        
        {/* Teal blocks */}
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-secondary-200 rounded-full opacity-25" />
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-secondary-200 rounded-2xl rotate-45 opacity-20" />
        
        {/* Green/additional color blocks */}
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-secondary-400 rounded-3xl -rotate-12 opacity-20" />
        <div className="absolute top-40 left-1/3 w-16 h-16 bg-secondary-300 rounded-xl rotate-30 opacity-25" />
        
        {/* Purple accent blocks */}
        <div className="absolute bottom-1/3 left-10 w-36 h-36 bg-purple-400 rounded-full opacity-15" />
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-purple-500 rounded-lg -rotate-60 opacity-20" />
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-1.jpg"
          alt="Beautiful pet looking up with hope and trust"
          className="w-full h-full object-cover opacity-30"
          onError={(e) => {
            // Fallback to one of your uploaded images if hero-1.jpg doesn't exist
            const target = e.target as HTMLImageElement;
            target.src = "/images/hero/alvan-nee-T-0EW-SEbsE-unsplash.jpg";
          }}
        />
        {/* Semi-transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Small Label */}
        <motion.p 
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="font-urbanist text-display-3 md:text-display-4 text-primary-100 font-medium tracking-wide mb-6"
        >
          introducing hooman pets
        </motion.p>

        {/* Main Headline */}
        <motion.h1 
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="font-urbanist text-display-7 md:text-display-8 lg:text-display-9 font-bold text-neutral-800 leading-tight mb-8"
        >
          we're reimagining pet care with AI for every furry family member
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="font-urbanist text-display-4 md:text-display-5 text-neutral-700 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Built with vets. Powered by AI. Designed for pet parents.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <Button
            variant="primary"
            size="default"
            className="px-8 py-4 text-display-3 shadow-primary-large hover:shadow-primary-medium transform hover:scale-105"
            icon={<span className="text-2xl animate-bounce-gentle">🐾</span>}
          >
            Join the waitlist
          </Button>
        </motion.div>

        {/* Additional decorative elements */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center space-x-8 opacity-60"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center mb-2 mx-auto">
              <span className="text-2xl">🏥</span>
            </div>
            <p className="font-urbanist text-display-1 text-neutral-600">Vet Built</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center mb-2 mx-auto">
              <span className="text-2xl">🤖</span>
            </div>
            <p className="font-urbanist text-display-1 text-neutral-600">AI Powered</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center mb-2 mx-auto">
              <span className="text-2xl">❤️</span>
            </div>
            <p className="font-urbanist text-display-1 text-neutral-600">Parent Focused</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-8 w-6 h-6 bg-primary-100 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-12 w-4 h-4 bg-secondary-200 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-secondary-400 rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  )
} 