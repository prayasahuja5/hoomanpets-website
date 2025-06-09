'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.3,
      ease: "easeOut"
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
    rotateX: 15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1.0,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for super smooth animation
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const badgeVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1.0,
      ease: "easeOut",
      delay: 0.2
    }
  }
}

const phoneVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.5
    }
  }
}

export default function MeetEzra() {
  return (
    <section className="bg-white py-16 md:py-24 section-padding overflow-hidden">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="text-center mb-16"
        >
          {/* Badge - consistent with waitlist */}
          <motion.div
            variants={badgeVariants}
            className="mb-8"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-hooman-orange text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide shadow-xl border border-hooman-orange/20"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Your AI Pet Sidekick
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-tight"
          >
            Meet Ezra — Your AI Pet<br />
            Care Companion
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={textVariants}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Built with vets. Powered by intelligence. Loved by pets and parents alike.
          </motion.p>
        </motion.div>

        {/* Feature Cards Layout - Exact Figma dimensions with super smooth animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {/* First Row: Large card (710x688) + Medium card (568x688) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 1: Personalised Care Prompts - Large (710x688) with iPhone prototypes */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="lg:col-span-7 bg-hooman-beige rounded-xl p-8 border border-gray-100 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              style={{ minHeight: '688px' }}
            >
              {/* Content at top */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-semibold text-[#1C1C1E] leading-tight group-hover:text-hooman-orange transition-colors duration-300">
                  Personalised Care Prompts
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Feeding times, walk reminders, vaccine alerts — all tailored to your pet's breed, age, and routine. Ezra keeps track so you don't have to.
                </p>
              </div>

              {/* iPhone Prototype Images - blended into background */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex justify-center gap-6">
                  {/* iPhone 1 */}
                  <motion.div
                    variants={phoneVariants}
                    className="relative"
                  >
                    <Image
                      src="/images/images-body/iPhone X Dark 1.png"
                      alt="Ezra AI Chat Interface"
                      width={200}
                      height={400}
                      className="drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                  
                  {/* iPhone 2 */}
                  <motion.div
                    variants={phoneVariants}
                    className="relative"
                    style={{ animationDelay: '0.2s' }}
                  >
                    <Image
                      src="/images/images-body/iPhone X Dark 4.png"
                      alt="Ezra AI Features"
                      width={200}
                      height={400}
                      className="drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Live Health & Mood Insights - Medium (568x688) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="lg:col-span-5 bg-hooman-beige rounded-xl p-8 border border-gray-100 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              style={{ minHeight: '688px' }}
            >
              {/* Content at top */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-semibold text-[#1C1C1E] leading-tight group-hover:text-hooman-orange transition-colors duration-300">
                  Live Health & Mood Insights
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Ezra tracks habits, moods, weight, and routines to surface helpful trends — so you can spot changes before they become problems.
                </p>
              </div>

              {/* Charts Mockup - blended into background */}
              <motion.div 
                className="absolute bottom-8 left-8 right-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-lg font-semibold text-gray-800 mb-6 text-center">Target vs Reality</div>
                
                {/* Bar Chart with staggered animation */}
                <div className="flex justify-between items-end space-x-2 h-32 mb-6">
                  {[
                    {height: 60, color: 'bg-red-400', month: 'Jan'},
                    {height: 45, color: 'bg-red-400', month: 'Feb'},
                    {height: 35, color: 'bg-red-400', month: 'Mar'},
                    {height: 70, color: 'bg-red-400', month: 'Apr'},
                    {height: 85, color: 'bg-red-400', month: 'May'},
                    {height: 90, color: 'bg-red-400', month: 'June'},
                    {height: 95, color: 'bg-red-400', month: 'July'}
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                      <motion.div 
                        className={`${bar.color} rounded-t w-full`}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${bar.height}%` }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.8 + (i * 0.1),
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                      <div className="text-xs text-gray-500 mt-2">{bar.month}</div>
                    </div>
                  ))}
                </div>
                
                {/* Stats with fade-in animation */}
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Reality Sales</span>
                      <span className="text-xs text-gray-500">Global</span>
                    </div>
                    <span className="text-lg font-bold text-red-500">8,823</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Target Sales</span>
                      <span className="text-xs text-gray-500">Commercial</span>
                    </div>
                    <span className="text-lg font-bold text-orange-500">12,122</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Second Row: Medium card (568x752) + Large card (710x752) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 3: Smarter Suggestions, Not Spam - Medium (568x752) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="lg:col-span-5 bg-hooman-beige rounded-xl p-8 border border-gray-100 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              style={{ minHeight: '752px' }}
            >
              {/* Content at top */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-semibold text-[#1C1C1E] leading-tight group-hover:text-hooman-orange transition-colors duration-300">
                  Smarter Suggestions, Not Spam
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Missed a walk? Vet notes overdue? Ezra notices patterns and gives helpful nudges — never guilt trips. Everything is based on your pet's real behaviour.
                </p>
              </div>

              {/* Mobile Mockup - blended into background */}
              <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-800 rounded-2xl p-4 w-48 h-80 relative shadow-2xl">
                  <div className="bg-white rounded-lg h-full p-4 flex flex-col">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="text-sm font-semibold text-gray-800 mb-3">Document</div>
                    <div className="text-xs text-gray-600 mb-4">Manage your documents<br/>Total documents: 20</div>
                    
                    {/* Search bar */}
                    <div className="bg-gray-100 rounded-lg p-2 mb-4">
                      <div className="text-xs text-gray-500">🔍 Search your document here</div>
                    </div>
                    
                    {/* Document Summary */}
                    <div className="text-sm font-semibold text-gray-800 mb-4">Document Summary</div>
                    
                    {/* Circular progress with animation */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative w-20 h-20">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="2"
                          />
                          <motion.path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#F97316"
                            strokeWidth="2"
                            strokeDasharray="54, 100"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                            viewport={{ once: true }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <motion.div 
                              className="text-xl font-bold text-gray-800"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 1.2 }}
                              viewport={{ once: true }}
                            >
                              20
                            </motion.div>
                            <div className="text-xs text-gray-600">Document</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">54% Submitted</span>
                        <span className="text-gray-800">8 File</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">24% Processed</span>
                        <span className="text-gray-800">4 File</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">22% Completed</span>
                        <span className="text-gray-800">3 File</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 4: Vet Visits, Organised Automatically - Large (710x752) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="lg:col-span-7 bg-hooman-beige rounded-xl p-8 border border-gray-100 transition-all duration-500 group cursor-pointer relative overflow-hidden"
              style={{ minHeight: '752px' }}
            >
              {/* Content at top */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-semibold text-[#1C1C1E] leading-tight group-hover:text-hooman-orange transition-colors duration-300">
                  Vet Visits, Organised Automatically
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Ezra syncs with your vet, helps you book appointments, and sends friendly reminders when it's time for checkups. One less thing to chase.
                </p>
              </div>

              {/* POS System Mockup - blended into background */}
              <motion.div 
                className="absolute bottom-8 left-8 right-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-gray-800 rounded-lg p-6 mb-6"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between text-white mb-6">
                    <span className="text-xl font-semibold">POS System</span>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="text-white">
                    <div className="text-2xl font-bold mb-2">Spending trend</div>
                    <motion.div 
                      className="text-5xl font-bold"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      87%
                    </motion.div>
                  </div>
                </motion.div>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-semibold text-gray-800">Total Invoice</span>
                  <div className="text-right">
                    <motion.div 
                      className="text-3xl font-bold text-gray-800"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      520
                    </motion.div>
                    <div className="text-sm text-green-500">+12%</div>
                  </div>
                </div>
                
                {/* Chart area with animated path */}
                <div className="h-20 bg-orange-100 rounded-lg flex items-end justify-center p-4 mb-6">
                  <svg width="120" height="50" viewBox="0 0 120 50">
                    <motion.path
                      d="M 10 40 Q 30 15 50 25 T 90 20 T 110 30"
                      stroke="#F97316"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2.0, delay: 1.2, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    />
                    <motion.circle 
                      cx="110" 
                      cy="30" 
                      r="5" 
                      fill="#F97316"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                </div>
                
                <div className="text-center">
                  <div className="text-xl font-semibold text-gray-800">24 june</div>
                  <div className="text-3xl text-gray-400">$39</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 