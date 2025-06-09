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
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Interactive elements overlay */}
                <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-right"
                  >
                    {/* Call-to-action hint */}
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-hooman-orange px-4 py-2 rounded-full text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span>Coming Soon</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
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