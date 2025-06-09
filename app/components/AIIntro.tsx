'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function AIIntro() {
  return (
    <section className="py-24 section-padding bg-hooman-beige relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-4 h-4 bg-hooman-orange rounded-full"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-hooman-teal rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-hooman-orange rounded-full"></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-hooman-black mb-6">
            Meet <span className="text-hooman-orange">Ezra AI</span>
          </h2>
          <p className="body-large text-hooman-black opacity-70 max-w-3xl mx-auto">
            Your personal pet care assistant that learns about your pet and provides 
            instant, personalized insights backed by veterinary expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - AI Chat Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-6 shadow-2xl">
              {/* Chat header */}
              <div className="flex items-center gap-3 border-b pb-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-hooman-orange to-hooman-teal rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <div>
                  <h3 className="font-bold text-hooman-black">Ezra AI</h3>
                  <p className="text-sm text-hooman-black opacity-60">Pet Care Assistant</p>
                </div>
                <div className="ml-auto w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* Chat messages */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex-shrink-0"></div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-sm text-hooman-black">
                      Hi! Max has been scratching a lot lately. Should I be worried?
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-hooman-orange text-white rounded-2xl rounded-tr-sm p-4 max-w-xs">
                    <p className="text-sm">
                      Based on Max's profile, increased scratching could indicate several things. 
                      Let me analyze his recent patterns...
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-hooman-orange rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">E</span>
                  </div>
                </div>

                {/* AI Insight Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-hooman-teal to-cyan-500 rounded-2xl p-4 text-white"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-lg">🔍</div>
                    <span className="font-bold text-sm">AI Insight</span>
                  </div>
                  <h4 className="font-bold mb-2">Likely Environmental Allergies</h4>
                  <p className="text-sm opacity-90 mb-3">
                    Based on Max's breed, season, and symptoms, this appears to be seasonal allergies.
                  </p>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="text-xs font-semibold mb-1">Recommended Actions:</div>
                    <ul className="text-xs space-y-1">
                      <li>• Check paws after walks</li>
                      <li>• Consider hypoallergenic shampoo</li>
                      <li>• Monitor for 48 hours</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - AI Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-hooman-teal p-3 rounded-xl">
                <div className="text-white text-xl">🧠</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-hooman-black mb-2">
                  Learns About Your Pet
                </h3>
                <p className="body-medium text-hooman-black opacity-70">
                  Ezra builds a comprehensive profile of your pet's health history, 
                  behavior patterns, and preferences for personalized insights.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-hooman-orange p-3 rounded-xl">
                <div className="text-white text-xl">⚡</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-hooman-black mb-2">
                  Instant Expert Guidance
                </h3>
                <p className="body-medium text-hooman-black opacity-70">
                  Get immediate answers to your pet care questions, backed by 
                  veterinary knowledge and tailored to your pet's specific needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <div className="text-white text-xl">📊</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-hooman-black mb-2">
                  Proactive Health Monitoring
                </h3>
                <p className="body-medium text-hooman-black opacity-70">
                  Track symptoms, behaviors, and health metrics to catch 
                  potential issues early and optimize your pet's wellbeing.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <button className="btn-primary">
                Try Ezra AI Free
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 