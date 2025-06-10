'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Luna Mars",
    tagline: "Marketing Director",
    text: "I actually wanted to learn more than what was taught. I wanted to at least understand some of the basics. Then I bought UI / UX design course & completed the whole course.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&auto=format&q=80&crop=face"
  },
  {
    id: 2,
    name: "Alicia keys",
    tagline: "Marketing Director",
    text: "I actually wanted to learn more than what was taught. I wanted to at least understand some of the basics. Then I bought UI / UX design course & completed the whole course.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format&q=80&crop=face"
  },
  {
    id: 3,
    name: "Kristin Watson",
    tagline: "Marketing Director",
    text: "I actually wanted to learn more than what was taught. I wanted to at least understand some of the basics. Then I bought UI / UX design course & completed the whole course.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format&q=80&crop=face"
  },
  {
    id: 4,
    name: "Mark Robert",
    tagline: "Marketing Director",
    text: "I actually wanted to learn more than what was taught. I wanted to at least understand some of the basics. Then I bought UI / UX design course & completed the whole course.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format&q=80&crop=face"
  },
  {
    id: 5,
    name: "Mark Rober",
    tagline: "Marketing Director",
    text: "I actually wanted to learn more than what was taught. I wanted to at least understand some of the basics. Then I bought UI / UX design course & completed the whole course.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format&q=80&crop=face"
  },
  {
    id: 6,
    name: "Alicia keys",
    tagline: "Marketing Director",
    text: "I actually wanted to learn more than what was taught. I wanted to at least understand some of the basics. Then I bought UI / UX design course & completed the whole course.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&auto=format&q=80&crop=face"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.2,
      ease: "easeOut"
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

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export default function Testimonials() {
  return (
    <section className="bg-[#27221F] py-16 md:py-24 section-padding overflow-hidden">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            className="mb-8"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-hooman-orange text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide shadow-xl border border-hooman-orange/20"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Testimonial
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Just hear what they're<br />
            saying about us
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={textVariants}
            className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Discover how Subway's AI-driven automation has recovered lost sales, boosted conversions, and simplified customer engagement for eCommerce brands.
          </motion.p>
        </motion.div>

        {/* Testimonial Cards Grid - 2 rows, 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 grid-rows-2"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-lg transition-all duration-300 group cursor-pointer h-full flex flex-col"
            >
              {/* Avatar and Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 rounded-full overflow-hidden"
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1C1C1E] text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {testimonial.tagline}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="flex-1">
                <p className="text-[#1C1C1E] text-base leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Horizontal Scroll Version (Hidden on larger screens) */}
        <div className="block md:hidden mt-8">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={`mobile-${testimonial.id}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-none w-80 bg-white rounded-xl p-6 shadow-lg snap-start"
              >
                {/* Avatar and Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1E] text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {testimonial.tagline}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-[#1C1C1E] text-base leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 