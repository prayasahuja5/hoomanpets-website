'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const heroImages = [
  '/images/hero/hero-1.jpg',
  '/images/hero/alvan-nee-T-0EW-SEbsE-unsplash.jpg',
  '/images/hero/shawn-rain-oSIc-HcO5FE-unsplash.jpg',
  '/images/hero/photo-1606231106595-30ebc70aa72b.avif'
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 7000) // Auto-rotate every 7 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {/* Preload all images in the background */}
        {heroImages.map((src, index) => (
          <div key={`preload-${index}`} className="hidden">
            <Image
              src={src}
              alt=""
              width={1920}
              height={1080}
              priority={index < 2} // Prioritize first 2 images
              quality={90}
            />
          </div>
        ))}
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt="Pet parenting"
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              quality={90}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="font-urbanist text-sm uppercase tracking-wider text-white/80 font-medium">
              introducing hooman pets
            </span>
          </motion.div>

          {/* Headline */}
                      <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-urbanist text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-10 leading-relaxed"
            >
              Smarter pet parenting,<br />powered by AI and<br />built with care.
            </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <button className="font-urbanist bg-[#E95744] text-white px-8 py-4 rounded-full text-lg font-semibold hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Join the Waitlist
            </button>
            <button className="font-urbanist border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              How Hooman Works
            </button>
                      </motion.div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-6 lg:left-8 z-20 flex space-x-2"
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </motion.div>
    </section>
  )
} 