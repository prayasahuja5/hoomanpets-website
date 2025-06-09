'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
}

const bannerVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    y: 60
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 80,
      damping: 20
    }
  }
}

export default function AppBanner() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 1.05])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9])

  return (
    <section 
      ref={ref}
      className="relative py-16 md:py-24 section-padding overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Animated Background Swirl */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main flowing swirl */}
        <motion.div
          animate={{
            x: ['-100%', '100%'],
            rotate: [0, 360]
          }}
          transition={{
            x: { duration: 20, repeat: Infinity, ease: "linear" },
            rotate: { duration: 30, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/4 left-0 w-96 h-96"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="swirlGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E95744" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#32BBAA" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#E95744" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M50,200 Q150,50 250,200 T450,200 Q350,350 250,200 T50,200"
              fill="url(#swirlGradient1)"
              className="opacity-60"
            />
          </svg>
        </motion.div>

        {/* Secondary swirl */}
        <motion.div
          animate={{
            x: ['100%', '-100%'],
            rotate: [360, 0]
          }}
          transition={{
            x: { duration: 25, repeat: Infinity, ease: "linear" },
            rotate: { duration: 35, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-1/4 right-0 w-80 h-80"
        >
          <svg viewBox="0 0 320 320" className="w-full h-full">
            <defs>
              <linearGradient id="swirlGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#32BBAA" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#F5EDE2" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#32BBAA" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <path
              d="M40,160 Q120,40 200,160 T360,160 Q280,280 200,160 T40,160"
              fill="url(#swirlGradient2)"
              className="opacity-50"
            />
          </svg>
        </motion.div>

        {/* Flowing wave pattern */}
        <motion.div
          animate={{
            x: ['-50%', '150%']
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-0 w-full h-32"
        >
          <svg viewBox="0 0 1200 128" className="w-full h-full">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E95744" stopOpacity="0.05" />
                <stop offset="25%" stopColor="#32BBAA" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#F5EDE2" stopOpacity="0.08" />
                <stop offset="75%" stopColor="#32BBAA" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#E95744" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path
              d="M0,64 Q300,20 600,64 T1200,64 L1200,128 L0,128 Z"
              fill="url(#waveGradient)"
            />
          </svg>
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="absolute top-10 left-10 w-32 h-32 bg-hooman-orange/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-hooman-teal/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Banner Container with Parallax */}
          <motion.div
            variants={bannerVariants}
            style={{ 
              y,
              scale,
              opacity
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            className="relative group cursor-pointer"
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-4 bg-gradient-to-r from-hooman-orange/20 to-hooman-teal/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Main Banner Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/images-body/Banner.png"
                  alt="Smarter Care, One Tap Away - Download Ezra App"
                  width={1200}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Overlay gradient for better visual depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>

            {/* Floating elements for extra visual appeal */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-4 -left-4 w-8 h-8 bg-hooman-orange/20 rounded-full blur-sm opacity-60"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-hooman-teal/20 rounded-full blur-sm opacity-60"
            />
          </motion.div>

          {/* Optional text overlay for accessibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Experience the future of pet care with Ezra - your AI companion that understands your pet like never before.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  )
} 