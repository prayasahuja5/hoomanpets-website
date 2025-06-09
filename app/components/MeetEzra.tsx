'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const featureCards = [
  {
    title: "Personalised Care Prompts",
    description: "Feeding times, walk reminders, vaccine alerts — all tailored to your pet's breed, age, and routine. Ezra keeps track so you don't have to.",
    mockupType: "coaching" // For future mockup integration
  },
  {
    title: "Live Health & Mood Insights",
    description: "Ezra tracks habits, moods, weight, and routines to surface helpful trends — so you can spot changes before they become problems.",
    mockupType: "charts" // For future mockup integration
  },
  {
    title: "Smarter Suggestions, Not Spam",
    description: "Missed a walk? Vet notes overdue? Ezra notices patterns and gives helpful nudges — never guilt trips. Everything is based on your pet's real behaviour.",
    mockupType: "mobile" // For future mockup integration
  },
  {
    title: "Vet Visits, Organised Automatically",
    description: "Ezra syncs with your vet, helps you book appointments, and sends friendly reminders when it's time for checkups. One less thing to chase.",
    mockupType: "pos" // For future mockup integration
  }
]

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
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-hooman-orange/10 to-hooman-teal/10 text-hooman-orange px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-hooman-orange/20"
          >
            <span className="w-2 h-2 bg-hooman-orange rounded-full animate-pulse"></span>
            Your AI Pet Sidekick
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-tight"
          >
            Meet Ezra — Your AI Pet<br />
            <span className="bg-gradient-to-r from-hooman-orange to-hooman-teal bg-clip-text text-transparent">
              Care Companion
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={textVariants}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Built with vets. Powered by intelligence. Loved by pets and parents alike.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 lg:p-8 border border-gray-100 transition-all duration-300 group"
            >
              {/* Mockup Placeholder - Will be replaced with actual Figma mockups */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg h-48 lg:h-56 mb-6 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder content based on mockup type */}
                {card.mockupType === "coaching" && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-hooman-orange/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-hooman-orange" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div className="text-sm text-gray-500">Coaching Impact</div>
                  </div>
                )}
                {card.mockupType === "charts" && (
                  <div className="w-full px-4">
                    <div className="flex justify-between items-end space-x-2">
                      {[40, 60, 45, 80, 65, 90, 75].map((height, i) => (
                        <div 
                          key={i}
                          className="bg-gradient-to-t from-hooman-orange to-hooman-teal rounded-t opacity-70"
                          style={{ height: `${height}%`, width: '12%' }}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 mt-4 text-center">Health Insights</div>
                  </div>
                )}
                {card.mockupType === "mobile" && (
                  <div className="bg-gray-800 rounded-2xl p-4 w-32 h-48 relative">
                    <div className="bg-white rounded-lg h-full p-3 flex flex-col">
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-8 bg-hooman-orange/20 rounded mt-4"></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center">Smart Suggestions</div>
                  </div>
                )}
                {card.mockupType === "pos" && (
                  <div className="text-center">
                    <div className="w-20 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <div className="text-white text-xs">POS</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-24 mx-auto"></div>
                      <div className="h-2 bg-hooman-teal/30 rounded w-16 mx-auto"></div>
                    </div>
                    <div className="text-sm text-gray-500 mt-3">Vet Integration</div>
                  </div>
                )}
                
                {/* Subtle animation overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ease-out"></div>
              </div>

              {/* Card Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1C1C1E] leading-tight group-hover:text-hooman-orange transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Subtle gradient border on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-hooman-orange/20 to-hooman-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 