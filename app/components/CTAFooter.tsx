'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function CTAFooter() {
  return (
    <footer className="py-24 section-padding bg-gradient-to-br from-hooman-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-hooman-orange opacity-5 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 -left-16 w-32 h-32 bg-hooman-teal opacity-10 rounded-full"
        />
      </div>

      <div className="container-max relative z-10">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              🐾
            </motion.div>
            <h2 className="heading-1 mb-6">
              Ready to join the{' '}
              <span className="text-hooman-orange">pack?</span>
            </h2>
            <p className="body-large opacity-80 max-w-3xl mx-auto mb-8">
              Transform your pet parenting journey with AI-powered insights, expert vet access, 
              and a community that cares. Your furry family member deserves the best.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <button className="btn-primary text-xl px-12 py-5">
              Start Free Trial 🐾
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-hooman-black transition-all duration-300">
              Schedule Demo
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm opacity-60"
          >
            Free 14-day trial • No credit card required • Cancel anytime
          </motion.p>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white bg-opacity-10 rounded-3xl p-8 mb-16 backdrop-blur-sm"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
            <p className="opacity-80">Get pet care tips, product updates, and exclusive insights from our veterinary team.</p>
          </div>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-white text-hooman-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-hooman-orange"
            />
            <button className="bg-hooman-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 border-t border-white border-opacity-20 pt-16"
        >
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-hooman-orange p-3 rounded-xl">
                <div className="text-white text-xl font-bold">🐾</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Hooman Pets</h3>
                <p className="text-sm opacity-70">by Hooman Inc</p>
              </div>
            </div>
            <p className="text-sm opacity-70 mb-6">
              Smarter Pet Parenting through AI-powered insights and expert veterinary care.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer">
                <span className="text-sm">🐦</span>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all cursor-pointer">
                <span className="text-sm">📷</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Ezra AI</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Vet Access</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Health Plans</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Community</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Mobile App</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Pet Care Guide</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Help Center</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">API Docs</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Vet Portal</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Press</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Privacy</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Terms</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center pt-8 mt-8 border-t border-white border-opacity-20"
        >
          <p className="text-sm opacity-60">
            © 2024 Hooman Inc. All rights reserved. Made with ❤️ for pet parents everywhere.
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 