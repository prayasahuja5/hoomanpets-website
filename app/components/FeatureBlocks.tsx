'use client'

import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: '🩺',
    title: 'Expert Vet Access',
    description: 'Connect with licensed veterinarians 24/7 through video calls, chat, or emergency consultations.',
    color: 'from-blue-500 to-blue-600',
    delay: 0
  },
  {
    icon: '📋',
    title: 'Personalized Health Plans',
    description: 'Custom care plans based on your pet\'s breed, age, health history, and lifestyle needs.',
    color: 'from-hooman-orange to-red-500',
    delay: 0.2
  },
  {
    icon: '⏰',
    title: 'Smart Care Reminders',
    description: 'Never miss vaccines, medications, grooming, or health checkups with intelligent scheduling.',
    color: 'from-hooman-teal to-green-500',
    delay: 0.4
  },
  {
    icon: '🐾',
    title: 'Pet Parent Community',
    description: 'Connect with fellow pet parents, share experiences, and get support from our caring community.',
    color: 'from-purple-500 to-pink-500',
    delay: 0.6
  }
]

export default function FeatureBlocks() {
  return (
    <section className="py-24 section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-hooman-black mb-6">
            Everything you need for{' '}
            <span className="text-hooman-orange">smarter pet care</span>
          </h2>
          <p className="body-large text-hooman-black opacity-70 max-w-3xl mx-auto">
            From AI-powered insights to expert veterinary care, we've built a comprehensive 
            platform that grows with you and your pet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-2xl">{feature.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-hooman-black mb-4 group-hover:text-hooman-orange transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="body-medium text-hooman-black opacity-70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Learn more link */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: feature.delay + 0.3 }}
                    viewport={{ once: true }}
                    className="mt-6"
                  >
                    <div className="flex items-center gap-2 text-hooman-orange font-semibold group-hover:gap-4 transition-all duration-300 cursor-pointer">
                      <span>Learn more</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-hooman-beige to-orange-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-hooman-black mb-4">
              Ready to transform your pet care routine?
            </h3>
            <p className="body-large text-hooman-black opacity-70 mb-8 max-w-2xl mx-auto">
              Join thousands of pet parents who've already made the switch to smarter, 
              more confident pet parenting with Hooman Pets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Free Trial
              </button>
              <button className="bg-white text-hooman-black border-2 border-hooman-black px-8 py-4 rounded-full font-semibold hover:bg-hooman-black hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 