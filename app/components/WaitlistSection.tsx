'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import Input from './ui/Input'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Set launch date (example: 30 days from now)
  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + 30)

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email)
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="bg-secondary-100 relative py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-100/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-12"
        >
          {/* Main Heading */}
          <div className="space-y-6">
            <h2 className="font-urbanist text-display-7 md:text-display-8 lg:text-display-9 font-bold text-neutral-800">
              Join the Waitlist
            </h2>
            <p className="font-urbanist text-paragraph-large md:text-display-4 text-neutral-600 max-w-2xl mx-auto">
              Be among the first to experience AI-powered pet care. Get early access and exclusive updates.
            </p>
          </div>

          {/* Countdown Timer */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-4 gap-4 max-w-md mx-auto"
          >
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-white rounded-lg p-4 shadow-regular"
              >
                <div className="font-urbanist text-display-6 md:text-display-7 font-bold text-primary-100">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="font-urbanist text-display-1 text-neutral-600 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Waitlist Form */}
          {!isSubmitted ? (
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto space-y-4"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-center"
              />
              <Button
                type="submit"
                variant="primary"
                className="w-full shadow-primary-regular"
                icon={<span className="animate-bounce-gentle">🚀</span>}
              >
                Join Waitlist
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white rounded-lg p-8 shadow-large">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-urbanist text-display-5 font-bold text-neutral-800 mb-2">
                  You're In!
                </h3>
                <p className="font-urbanist text-paragraph-default text-neutral-600">
                  Thanks for joining our waitlist. We'll notify you when Hooman is ready!
                </p>
              </div>
            </motion.div>
          )}

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-8"
          >
            {[
              { number: '1,000+', label: 'Early Adopters' },
              { number: '50+', label: 'Veterinarians' },
              { number: '24/7', label: 'AI Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-urbanist text-display-6 font-bold text-primary-100">
                  {stat.number}
                </div>
                <div className="font-urbanist text-display-1 text-neutral-600 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 