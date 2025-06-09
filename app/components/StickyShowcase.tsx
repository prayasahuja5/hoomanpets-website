'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function StickyShowcase() {
  return (
    <section className="py-24 section-padding bg-hooman-beige">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-80">
              {/* Phone frame */}
              <div className="bg-black rounded-[3rem] p-2">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-gray-900 h-8 flex items-center justify-center">
                    <div className="w-20 h-1 bg-white rounded-full"></div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-6 h-[600px] overflow-hidden">
                    {/* App header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-hooman-orange rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">🐾</span>
                        </div>
                        <div>
                          <h3 className="font-bold">Max's Profile</h3>
                          <p className="text-sm text-gray-600">Golden Retriever, 3 years</p>
                        </div>
                      </div>
                      <div className="text-2xl">📱</div>
                    </div>

                    {/* Health metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-green-50 p-4 rounded-xl">
                        <div className="text-green-600 text-sm font-semibold mb-1">Weight</div>
                        <div className="text-xl font-bold">65 lbs</div>
                        <div className="text-xs text-green-600">+2 lbs this month</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-blue-600 text-sm font-semibold mb-1">Activity</div>
                        <div className="text-xl font-bold">8.2k</div>
                        <div className="text-xs text-blue-600">steps today</div>
                      </div>
                    </div>

                    {/* Recent insights */}
                    <div className="mb-6">
                      <h4 className="font-bold mb-3">Recent Insights</h4>
                      <div className="space-y-3">
                        <div className="bg-hooman-orange bg-opacity-10 p-3 rounded-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm">🔍</span>
                            <span className="text-sm font-semibold">AI Insight</span>
                          </div>
                          <p className="text-sm">Max's energy levels are higher than usual. Consider longer walks.</p>
                        </div>
                        <div className="bg-hooman-teal bg-opacity-10 p-3 rounded-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm">💊</span>
                            <span className="text-sm font-semibold">Reminder</span>
                          </div>
                          <p className="text-sm">Heartworm medication due in 2 days</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom navigation */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-gray-100 rounded-2xl p-4 flex justify-around">
                        <div className="text-center">
                          <div className="text-hooman-orange text-xl mb-1">🏠</div>
                          <div className="text-xs font-semibold">Home</div>
                        </div>
                        <div className="text-center opacity-50">
                          <div className="text-xl mb-1">💬</div>
                          <div className="text-xs">Chat</div>
                        </div>
                        <div className="text-center opacity-50">
                          <div className="text-xl mb-1">📊</div>
                          <div className="text-xs">Health</div>
                        </div>
                        <div className="text-center opacity-50">
                          <div className="text-xl mb-1">👥</div>
                          <div className="text-xs">Community</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="heading-2 text-hooman-black mb-6">
                Your pet's health,{' '}
                <span className="text-hooman-orange">at your fingertips</span>
              </h2>
              <p className="body-large text-hooman-black opacity-70">
                The Hooman Pets app puts comprehensive pet care in your pocket. 
                Track health, get insights, and stay connected with your vet team.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="bg-green-500 p-3 rounded-xl">
                  <div className="text-white text-lg">📱</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hooman-black mb-2">
                    Real-time Health Monitoring
                  </h3>
                  <p className="body-medium text-hooman-black opacity-70">
                    Track weight, activity, medications, and symptoms with smart insights 
                    that help you spot patterns and potential issues early.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="bg-hooman-orange p-3 rounded-xl">
                  <div className="text-white text-lg">🎯</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hooman-black mb-2">
                    Personalized Care Plans
                  </h3>
                  <p className="body-medium text-hooman-black opacity-70">
                    Custom care schedules, feeding guidelines, exercise recommendations, 
                    and health milestones tailored to your pet's unique needs.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="bg-hooman-teal p-3 rounded-xl">
                  <div className="text-white text-lg">🔔</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hooman-black mb-2">
                    Smart Notifications
                  </h3>
                  <p className="body-medium text-hooman-black opacity-70">
                    Never miss important care tasks with intelligent reminders for 
                    medications, vet visits, grooming, and wellness checkups.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <button className="btn-primary">
                Download App
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 