'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../../lib/supabase'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Please enter your email')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          {
            email: email.toLowerCase(),
            timestamp: new Date().toISOString(),
          }
        ])

      if (error) {
        console.error('Supabase error:', error)
        
        // Check if it's a duplicate email error
        if (error.code === '23505' || error.message?.includes('duplicate') || error.message?.includes('already exists')) {
          setError('This email is already subscribed! 🎉')
        } else {
          setError('Something went wrong. Please try again.')
        }
      } else {
        setIsSubmitted(true)
        setEmail('')
      }
    } catch (err) {
      console.error('Error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-[#1C1C1E] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-[#E95744] text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
                Subscribe and Save 🐾
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl font-extrabold text-white leading-tight"
            >
              Join Our Newsletter!
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg max-w-md leading-relaxed"
            >
              Stay updated with new features, smart pet care tips & exclusive invites.
            </motion.p>
          </motion.div>

          {/* Right Column - Email Input */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-center py-8"
              >
                <div className="text-4xl mb-4">🐶</div>
                <p className="text-white text-xl font-semibold mb-2">
                  Thanks for subscribing!
                </p>
                <p className="text-gray-400">
                  You'll hear from us soon with exciting updates.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Email Input */}
                  <div className="flex-1">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (error) setError('')
                      }}
                      className="w-full px-6 py-4 bg-[#F5EDE2] text-black placeholder-gray-600 rounded-full outline-none focus:ring-2 focus:ring-[#E95744] focus:ring-opacity-50 transition-all duration-300 font-medium"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#1C1C1E] hover:brightness-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        Subscribing...
                      </span>
                    ) : (
                      'Subscribe →'
                    )}
                  </motion.button>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {error}
                  </motion.p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 