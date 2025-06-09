'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const badgeVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2
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
          viewport={{ once: true, margin: "-100px" }}
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

        {/* Feature Cards Layout - matching Figma design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Left Column - Two stacked cards */}
          <div className="space-y-6 lg:space-y-8">
            {/* Card 1: Personalised Care Prompts */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="bg-hooman-beige rounded-xl p-6 lg:p-8 border border-gray-100 transition-all duration-300 group cursor-pointer"
            >
              {/* Coaching Impact Mockup */}
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-hooman-orange/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-hooman-orange" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">Coaching Impact</div>
                  
                  {/* Progress bars */}
                  <div className="space-y-3">
                    <div className="text-left">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Week 49</span>
                        <span>86%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-300 h-2 rounded-full" style={{width: '86%'}}></div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Week 50</span>
                        <span>83%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-300 h-2 rounded-full" style={{width: '83%'}}></div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 mt-4 mb-3">After Coaching</div>
                    
                    <div className="text-left">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Week 49</span>
                        <span>88%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-hooman-orange h-2 rounded-full" style={{width: '88%'}}></div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Week 50</span>
                        <span>91%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-hooman-orange h-2 rounded-full" style={{width: '91%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1C1C1E] leading-tight group-hover:text-hooman-orange transition-colors duration-300">
                  Personalised Care Prompts
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Feeding times, walk reminders, vaccine alerts — all tailored to your pet's breed, age, and routine. Ezra keeps track so you don't have to.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Smarter Suggestions, Not Spam */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="bg-hooman-beige rounded-xl p-6 lg:p-8 border border-gray-100 transition-all duration-300 group cursor-pointer"
            >
              {/* Mobile Mockup */}
              <div className="flex justify-center mb-6">
                <div className="bg-gray-800 rounded-2xl p-4 w-40 h-64 relative shadow-lg">
                  <div className="bg-white rounded-lg h-full p-4 flex flex-col">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="text-xs font-semibold text-gray-800 mb-3">Document</div>
                    <div className="text-xs text-gray-600 mb-4">Manage your documents<br/>Total documents: 20</div>
                    
                    {/* Search bar */}
                    <div className="bg-gray-100 rounded-lg p-2 mb-4">
                      <div className="text-xs text-gray-500">🔍 Search your document here</div>
                    </div>
                    
                    {/* Document Summary */}
                    <div className="text-xs font-semibold text-gray-800 mb-3">Document Summary</div>
                    
                    {/* Circular progress */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="2"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#F97316"
                            strokeWidth="2"
                            strokeDasharray="54, 100"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-800">20</div>
                            <div className="text-xs text-gray-600">Document</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="space-y-1 text-xs">
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
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1C1C1E] leading-tight group-hover:text-hooman-orange transition-colors duration-300">
                  Smarter Suggestions, Not Spam
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Missed a walk? Vet notes overdue? Ezra notices patterns and gives helpful nudges — never guilt trips. Everything is based on your pet's real behaviour.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Two stacked cards */}
          <div className="space-y-6 lg:space-y-8">
            {/* Card 2: Live Health & Mood Insights */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="bg-hooman-beige rounded-xl p-6 lg:p-8 border border-gray-100 transition-all duration-300 group cursor-pointer"
            >
              {/* Charts Mockup */}
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <div className="text-lg font-semibold text-gray-800 mb-4 text-center">Target vs Reality</div>
                
                {/* Bar Chart */}
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
                      <div 
                        className={`${bar.color} rounded-t w-full transition-all duration-500`}
                        style={{ height: `${bar.height}%` }}
                      />
                      <div className="text-xs text-gray-500 mt-2">{bar.month}</div>
                    </div>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="space-y-3">
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
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1C1C1E] leading-tight group-hover:text-hooman-orange transition-colors duration-300">
                  Live Health & Mood Insights
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Ezra tracks habits, moods, weight, and routines to surface helpful trends — so you can spot changes before they become problems.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Vet Visits, Organised Automatically */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="bg-hooman-beige rounded-xl p-6 lg:p-8 border border-gray-100 transition-all duration-300 group cursor-pointer"
            >
              {/* POS System Mockup */}
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between text-white mb-4">
                    <span className="text-lg font-semibold">POS System</span>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="text-white">
                    <div className="text-2xl font-bold mb-2">Spending trend</div>
                    <div className="text-4xl font-bold">87%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-800">Total Invoice</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">520</div>
                    <div className="text-sm text-green-500">+12%</div>
                  </div>
                </div>
                
                {/* Chart area */}
                <div className="h-16 bg-orange-100 rounded-lg flex items-end justify-center p-2 mb-4">
                  <svg width="100" height="40" viewBox="0 0 100 40">
                    <path
                      d="M 10 30 Q 25 10 40 20 T 70 15 T 90 25"
                      stroke="#F97316"
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle cx="90" cy="25" r="4" fill="#F97316" />
                  </svg>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">24 june</div>
                  <div className="text-2xl text-gray-400">$39</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1C1C1E] leading-tight group-hover:text-hooman-orange transition-colors duration-300">
                  Vet Visits, Organised Automatically
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Ezra syncs with your vet, helps you book appointments, and sends friendly reminders when it's time for checkups. One less thing to chase.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 