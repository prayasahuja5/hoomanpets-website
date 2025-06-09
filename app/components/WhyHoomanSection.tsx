'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedLink from './AnimatedLink'

export default function WhyHoomanSection() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  }

  return (
    <section className="bg-hooman-beige relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="space-y-8 lg:pr-8"
          >
            {/* Title */}
            <h2 className="font-urbanist text-display-7 md:text-display-8 lg:text-display-9 font-bold text-neutral-800 leading-tight">
              why hooman exists
            </h2>

            {/* Body Text */}
            <div className="space-y-6 font-urbanist text-paragraph-large md:text-display-4 text-neutral-600 leading-relaxed">
              <p>
                Pet care today is messy. Appointments, food tracking, health records — all over the place.
              </p>
              <p>
                Hooman brings it all together, powered by AI and built with vets.
              </p>
            </div>

            {/* CTA Link */}
            <div className="pt-6">
              <AnimatedLink 
                href="#story" 
                className="text-hooman-orange text-xl font-medium inline-flex items-center gap-3 group hover:gap-4 transition-all duration-300"
              >
                our story
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300 text-2xl"
                >
                  →
                </motion.span>
              </AnimatedLink>
            </div>
          </motion.div>

          {/* Image - Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative lg:pl-8"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/why-hooman.jpg"
                alt="A beautiful moment between human and pet - hand reaching toward cat paw, symbolizing the connection Hooman facilitates"
                className="object-cover w-full h-[500px] md:h-[600px] transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-hooman-orange/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-hooman-teal/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-hooman-orange rounded-full opacity-30" />
        <div className="absolute top-32 right-20 w-3 h-3 bg-hooman-teal rounded-full opacity-20" />
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-hooman-orange rounded-full opacity-40" />
      </div>
    </section>
  )
} 