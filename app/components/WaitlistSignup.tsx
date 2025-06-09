'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Countdown from 'react-countdown'
import { supabase } from '../../lib/supabase'
import Image from 'next/image'

// Profile avatars with actual images for social proof
const profileAvatars = [
  { id: 1, name: 'Alex', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face&auto=format&q=80' },
  { id: 2, name: 'Sarah', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=120&h=120&fit=crop&crop=face&auto=format&q=80' },
  { id: 3, name: 'Mike', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&auto=format&q=80' },
  { id: 4, name: 'Emma', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face&auto=format&q=80' },
  { id: 5, name: 'David', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&h=120&fit=crop&crop=face&auto=format&q=80' },
]

// Enhanced countdown renderer with techy design
const CountdownRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-2xl font-bold px-8 py-4 rounded-full shadow-xl">
          🎉 Beta is Live!
        </div>
      </motion.div>
    )
  } else {
    return (
      <div className="flex gap-3 sm:gap-6 justify-center">
        {[
          { value: days, label: 'Days' },
          { value: hours, label: 'Hours' },
          { value: minutes, label: 'Minutes' },
          { value: seconds, label: 'Seconds' }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              key={item.value}
              initial={{ scale: 1.1, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="relative group"
            >
              {/* Geometric background shapes */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white backdrop-blur-sm rounded-xl p-3 sm:p-5 shadow-2xl border border-gray-100 min-w-[70px] sm:min-w-[90px] hover:shadow-3xl transition-all duration-300">
                {/* Techy corner accents */}
                <div className="absolute top-1 left-1 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
                
                {/* Digital-style number */}
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent font-mono">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
            <span className="text-xs sm:text-sm text-gray-600 mt-3 font-medium tracking-wide uppercase">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    )
  }
}

// Geometric background shapes component
const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ 
          rotate: 360,
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-300 opacity-20"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          x: [0, -25, 0],
          y: [0, 25, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-r from-purple-300 to-pink-300 opacity-20 rounded-full"
      />
      
      <motion.div
        animate={{ 
          rotate: 180,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 w-12 h-12 border-2 border-green-300 opacity-25 transform rotate-45"
      />
      
      <motion.div
        animate={{ 
          x: [0, 40, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 right-10 w-14 h-14 border-2 border-yellow-300 opacity-20"
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
      />
      
      {/* Particle dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`
          }}
        />
      ))}
    </div>
  )
}

export default function WaitlistSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isClient, setIsClient] = useState(false)
  // Supabase client is imported from lib/supabase

  // Target date: August 1st, 2025
  const targetDate = new Date('2025-08-01T00:00:00')

  useEffect(() => {
    setIsClient(true)
  }, [])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const sendWelcomeEmail = async (userEmail: string) => {
    try {
      const response = await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      })

      if (!response.ok) {
        throw new Error('Failed to send welcome email')
      }

      console.log('Welcome email sent successfully!')
    } catch (error) {
      console.error('Error sending welcome email:', error)
      // Don't fail the signup if email fails
    }
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
        .from('waitlist_signups')
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
          setError('This email is already on our waitlist! 🎉 You\'re all set.')
        } else {
          setError('Something went wrong. Please try again.')
        }
      } else {
        setIsSubmitted(true)
        setEmail('')
        // Send welcome email
        await sendWelcomeEmail(email)
      }
    } catch (err) {
      console.error('Error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-[#F5EDE2] via-[#F8F1E8] to-[#F2E6DA] py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Geometric Background */}
      <GeometricShapes />
      
      {/* Grid overlay for techy feel */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}/>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
        <div className="text-center">
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide shadow-xl border border-gray-600"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Now in Beta Version
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </motion.span>
          </motion.div>

          {/* Enhanced Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-urbanist text-4xl md:text-6xl font-bold text-black leading-tight mb-6"
          >
            Get Early Access to the{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                 World's Smartest Pet AI App
              </span>
              <motion.div
                className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                viewport={{ once: true }}
                style={{ borderRadius: '2px' }}
              />
            </span>
          </motion.h2>

          {/* Enhanced Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
          >
            <p className="mb-2 font-medium">Ezra is learning fast — and so is your pet.</p>
            <p className="text-gray-600">Join the waitlist to experience AI that actually understands pet care.</p>
          </motion.div>

          {/* Enhanced Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {isClient && (
              <Countdown
                date={targetDate}
                renderer={CountdownRenderer}
              />
            )}
          </motion.div>

          {/* Enhanced Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 max-w-md mx-auto shadow-2xl border border-green-100">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-6xl mb-4"
                  >
                    🐾
                  </motion.div>
                  <span className="text-xl font-bold text-green-600 block mb-2">
                    You're on the waitlist!
                  </span>
                  <p className="text-gray-600">We'll notify you when Ezra is ready!</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (error) setError('') // Clear error when user types
                      }}
                      className="flex-1 px-6 py-4 bg-transparent outline-none font-urbanist text-gray-700 placeholder-gray-500 min-w-0 text-lg"
                      disabled={isSubmitting}
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Joining...
                        </div>
                      ) : (
                        'Get Early Access'
                      )}
                    </motion.button>
                  </div>
                </div>
{error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm mt-4 px-4 py-3 rounded-lg border ${
                      error.includes('already on our waitlist') 
                        ? 'text-green-700 bg-green-50 border-green-200' 
                        : 'text-red-500 bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {error.includes('already on our waitlist') ? (
                        <span className="text-green-500">✅</span>
                      ) : (
                        <span className="text-red-500">⚠️</span>
                      )}
                      {error}
                    </div>
                  </motion.div>
                )}
              </form>
            )}
          </motion.div>

          {/* Enhanced Social Proof with Real Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Profile Avatars with Images */}
            <div className="flex justify-center -space-x-3 mb-6">
              {profileAvatars.map((avatar, index) => (
                <motion.div
                  key={avatar.id}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 border-white shadow-xl overflow-hidden">
                    <Image
                      src={avatar.image}
                      alt={avatar.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Enhanced Caption */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-gray-600 text-sm md:text-base px-4 font-medium"
            >
              Early birds get the best treats 🦴 — 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                {" "}sign up and stay ahead of the pack.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 