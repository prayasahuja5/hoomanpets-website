'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Bot, Heart, Users, Stethoscope } from 'lucide-react'

// Tab data with content and images - using professional lucide icons
const tabs = [
  {
    id: 'ezra',
    label: 'Ezra',
    icon: Bot,
    title: 'Your AI Pet Sidekick',
    body: 'Ezra tracks routines, gives smart nudges, and learns your pet\'s needs over time — so care never falls through the cracks.',
    caption: 'Ezra helps personalise every part of your pet\'s day.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop&auto=format&q=80',
    alt: 'Woman using phone, natural light — shows AI engagement'
  },
  {
    id: 'care',
    label: 'Care',
    icon: Heart,
    title: 'Smarter Daily Care',
    body: 'From feeding and walks to medications and moods, we help pet parents stay on track — with less guesswork and more peace of mind.',
    caption: 'Everything that matters — logged, tracked, remembered.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=800&fit=crop&auto=format&q=80',
    alt: 'Two dogs running together in golden hour light'
  },
  {
    id: 'community',
    label: 'Community',
    icon: Users,
    title: 'Built for Pet Parents, by Pet Parents',
    body: 'Share tips, celebrate milestones, or get real advice from others who\'ve been there. You\'re never alone on your journey.',
    caption: 'Every pet has a story. So does every parent.',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=1200&h=800&fit=crop&auto=format&q=80',
    alt: 'Dogs and people together in a park — social connection'
  },
  {
    id: 'vets',
    label: 'Vets',
    icon: Stethoscope,
    title: 'Vets You Can Trust',
    body: 'Discover local vets, book appointments, and sync your visits. We make expert support feel a little more human.',
    caption: 'Real vets. Real care. Just a tap away.',
    image: 'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=1200&h=800&fit=crop&auto=format&q=80',
    alt: 'Cat being examined by caring vet — shows trust & clinical expertise'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.2,
      ease: "easeOut"
    }
  }
}

const badgeVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1.0,
      ease: "easeOut",
      delay: 0.2
    }
  }
}

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
}

export default function WhyUs() {
  const [activeTab, setActiveTab] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotation every 5 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const handleTabClick = (index: number) => {
    setActiveTab(index)
    setIsPaused(true)
    // Resume auto-rotation after 10 seconds of manual interaction
    setTimeout(() => setIsPaused(false), 10000)
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <section 
      className="bg-hooman-beige py-16 md:py-24 section-padding overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            className="mb-8"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-hooman-orange text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide shadow-xl border border-hooman-orange/20"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Why Us
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-tight"
          >
            What Makes Hooman Different?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={textVariants}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            At Hooman, we believe smarter pet parenting comes from blending intelligence, care, and community. Here's what sets us apart.
          </motion.p>
        </motion.div>

        {/* Professional Tab Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-4">
              {tabs.map((tab, index) => {
                const IconComponent = tab.icon
                return (
                  <motion.button
                    key={tab.id}
                    variants={tabVariants}
                    onClick={() => handleTabClick(index)}
                    className={`relative flex flex-col items-center gap-3 px-6 py-6 text-sm font-medium transition-all duration-300 border-b-3 ${
                      activeTab === index
                        ? 'text-hooman-orange border-hooman-orange bg-hooman-orange/5'
                        : 'text-gray-600 border-transparent hover:text-gray-800 hover:bg-gray-50'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {/* Professional Icon */}
                    <motion.div
                      className={`transition-all duration-300 ${
                        activeTab === index ? 'text-hooman-orange' : 'text-gray-500'
                      }`}
                      animate={{ 
                        scale: activeTab === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent size={24} strokeWidth={1.5} />
                    </motion.div>
                    
                    {/* Label */}
                    <span className="font-semibold">
                      {tab.label}
                    </span>
                    
                    {/* Active indicator line */}
                    {activeTab === index && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-hooman-orange"
                        initial={false}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 30
                        }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Main Content Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-white/20"
              style={{ minHeight: '600px' }}
            >
              {/* Background Image with enhanced overlay */}
              <div className="absolute inset-0">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].alt}
                  fill
                  className="object-cover scale-105 transition-transform duration-700"
                  priority
                />
                {/* Multi-layer gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-hooman-orange/20 to-transparent"></div>
              </div>

              {/* Enhanced Content Overlay */}
              <div className="relative z-10 flex items-center h-full min-h-[600px]">
                <div className="w-full max-w-2xl p-8 md:p-16">
                  {/* Icon badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 border border-white/30"
                  >
                    {(() => {
                      const IconComponent = tabs[activeTab].icon
                      return <IconComponent size={32} strokeWidth={1.5} className="text-white" />
                    })()}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                  >
                    {tabs[activeTab].title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-white/95 leading-relaxed mb-8 max-w-xl"
                  >
                    {tabs[activeTab].body}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1 h-8 bg-hooman-orange rounded-full"></div>
                    <p className="text-lg text-white/80 italic font-medium">
                      {tabs[activeTab].caption}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 right-16 w-20 h-20 bg-hooman-orange/20 rounded-full blur-xl"></div>
            </motion.div>
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  )
} 