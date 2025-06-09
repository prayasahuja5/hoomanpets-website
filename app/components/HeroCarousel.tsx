'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedLink from './AnimatedLink'
import Button from './ui/Button'

interface HeroSlide {
  id: number
  image: string
  title: string
  subtitle: string
  description: string
}

// Hero slides with your uploaded images
const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero/alvan-nee-T-0EW-SEbsE-unsplash.jpg',
    title: 'introducing hooman pets',
    subtitle: "we're reimagining pet care with AI for every furry family member",
    description: 'Smart health monitoring, personalized care plans, and expert guidance at your fingertips.'
  },
  {
    id: 2,
    image: '/images/hero/shawn-rain-oSIc-HcO5FE-unsplash.jpg',
    title: 'ai-powered insights',
    subtitle: 'understand your pet better than ever before',
    description: 'Our advanced AI analyzes behavior patterns, health metrics, and environmental factors.'
  },
  {
    id: 3,
    image: '/images/hero/photo-1606231106595-30ebc70aa72b.avif',
    title: 'expert veterinary care',
    subtitle: 'connect with certified professionals instantly',
    description: 'Access to a network of veterinarians and pet care specialists whenever you need them.'
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false) // Stop auto-play when user manually navigates
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-hooman-beige">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={heroSlides[currentSlide].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content - Left Aligned */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-full">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlides[currentSlide].id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Title */}
                <motion.p 
                  className="text-primary-100 font-urbanist text-display-4 md:text-display-5 font-medium tracking-wide"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {heroSlides[currentSlide].title}
                </motion.p>

                {/* Subtitle */}
                <motion.h1 
                  className="text-white font-urbanist text-display-8 md:text-display-9 lg:text-display-10 font-bold leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.h1>

                {/* Description */}
                <motion.p 
                  className="text-neutral-200 font-urbanist text-paragraph-large md:text-display-4 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="pt-4"
                >
                  <Button 
                    variant="primary" 
                    size="default"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-105 rounded-full px-8 py-4 shadow-large"
                    icon={<span className="text-2xl animate-bounce-gentle">🐾</span>}
                  >
                    Join the Waitlist
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-orange-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          key={currentSlide}
          transition={{ duration: 6, ease: "linear" }}
        />
      </div>

      {/* Navigation Arrows - Optional */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        ←
      </button>
      
      <button
        onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        →
      </button>
    </section>
  )
} 