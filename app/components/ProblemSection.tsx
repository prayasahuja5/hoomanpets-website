'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ProblemSection() {
  return (
    <section className="py-24 section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-hooman-black mb-8">
              Pet parenting shouldn't feel like{' '}
              <span className="text-hooman-orange">guesswork.</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-hooman-orange bg-opacity-10 p-3 rounded-full flex-shrink-0">
                  <div className="text-hooman-orange text-xl">😰</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hooman-black mb-2">
                    Overwhelming Decisions
                  </h3>
                  <p className="body-medium text-hooman-black opacity-70">
                    From food choices to health symptoms, every decision feels critical 
                    but information is scattered across endless websites.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-hooman-orange bg-opacity-10 p-3 rounded-full flex-shrink-0">
                  <div className="text-hooman-orange text-xl">💸</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hooman-black mb-2">
                    Expensive Uncertainty
                  </h3>
                  <p className="body-medium text-hooman-black opacity-70">
                    Emergency vet visits for minor concerns, or missing serious 
                    symptoms because you weren't sure when to act.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-hooman-orange bg-opacity-10 p-3 rounded-full flex-shrink-0">
                  <div className="text-hooman-orange text-xl">⏰</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hooman-black mb-2">
                    Time Consuming Research
                  </h3>
                  <p className="body-medium text-hooman-black opacity-70">
                    Hours spent researching symptoms, comparing products, and 
                    trying to decode conflicting advice from different sources.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-hooman-beige to-orange-50 rounded-3xl p-8 relative overflow-hidden">
              {/* Stressed pet parent illustration */}
              <div className="text-center">
                <div className="text-6xl mb-4">🤯</div>
                <h3 className="text-2xl font-bold text-hooman-black mb-4">
                  Sound familiar?
                </h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-hooman-black opacity-70">
                      "Is this rash normal?"
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-hooman-black opacity-70">
                      "What food is best for my senior dog?"
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="text-sm text-hooman-black opacity-70">
                      "Should I call the vet at midnight?"
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating question marks */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                className="absolute top-4 right-4 text-hooman-orange text-3xl opacity-50"
              >
                ?
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 left-4 text-hooman-orange text-2xl opacity-30"
              >
                ?
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 