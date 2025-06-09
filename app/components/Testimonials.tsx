'use client'

import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Golden Retriever Mom',
    image: '👩',
    quote: "Ezra AI caught Luna's early symptoms that I completely missed. The vet confirmed it was the beginning of an ear infection. This app literally saved us from weeks of discomfort!",
    rating: 5
  },
  {
    name: 'Dr. Michael Rodriguez',
    role: 'Veterinarian, Austin Animal Clinic',
    image: '👨‍⚕️',
    quote: "I recommend Hooman Pets to all my clients. The insights help pet parents make better decisions between visits, and the data they bring to appointments is incredibly helpful.",
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'Cat Parent',
    image: '👩‍💻',
    quote: "As a first-time pet parent, I was constantly worried about every little thing. Hooman Pets gave me confidence and peace of mind. The community support is amazing too!",
    rating: 5
  }
]

export default function Testimonials() {
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
            Loved by pet parents and{' '}
            <span className="text-hooman-orange">trusted by vets</span>
          </h2>
          <p className="body-large text-hooman-black opacity-70 max-w-3xl mx-auto">
            Join thousands of happy pet families who've transformed their pet care routine 
            with Hooman Pets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-hooman-beige to-orange-50 rounded-3xl p-8 h-full relative overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500">
                {/* Quote mark */}
                <div className="text-hooman-orange text-6xl font-bold leading-none mb-4 opacity-20">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="text-yellow-400 text-lg">⭐</div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="body-medium text-hooman-black mb-6 relative z-10">
                  {testimonial.quote}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-hooman-black">{testimonial.name}</div>
                    <div className="text-sm text-hooman-black opacity-70">{testimonial.role}</div>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-hooman-orange opacity-5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-hooman-orange to-red-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-8">
              Trusted by the pet care community
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-lg opacity-90">Pet Parents</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Veterinarians</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <div className="text-lg opacity-90">AI Insights</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 