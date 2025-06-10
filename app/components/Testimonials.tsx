'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Maya",
    tagline: "Dog Mum of 2",
    text: "Ezra caught something I would've missed — I booked a vet visit just in time.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&auto=format&q=80&crop=face"
  },
  {
    id: 2,
    name: "Dev",
    tagline: "First-time Pet Parent",
    text: "Reminders feel like magic. I haven't skipped a feeding or walk in weeks.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format&q=80&crop=face"
  },
  {
    id: 3,
    name: "Alicia",
    tagline: "Luna's Human",
    text: "Hooman makes me feel like I actually know what I'm doing as a pet parent.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format&q=80&crop=face"
  },
  {
    id: 4,
    name: "Jordan",
    tagline: "Cat Dad",
    text: "The vet booking system saved me an hour last weekend.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format&q=80&crop=face"
  },
  {
    id: 5,
    name: "Sarah",
    tagline: "Rescue Pet Parent",
    text: "Logging moods helped me realise when my cat was actually unwell.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format&q=80&crop=face"
  },
  {
    id: 6,
    name: "Alex",
    tagline: "Multi-Pet Parent",
    text: "The app feels like it actually knows my dog. Love that.",
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
    <section className="bg-white py-16 md:py-24 section-padding overflow-hidden">
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
              Testimonials
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-tight"
          >
            Just hear what other pet parents are saying
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={textVariants}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Real stories from real people — using Hooman to care smarter, stress less, and feel supported every day.
          </motion.p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white rounded-xl p-6 lg:p-8 border border-gray-100 shadow-regular transition-all duration-300 group cursor-pointer h-full flex flex-col"
            >
              {/* Avatar and Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-hooman-orange/20 group-hover:border-hooman-orange/40 transition-colors duration-300"
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
                  <h3 className="font-semibold text-[#1C1C1E] text-lg group-hover:text-hooman-orange transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {testimonial.tagline}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="flex-1">
                <p className="text-[#1C1C1E] text-base leading-relaxed font-medium">
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
                className="flex-none w-80 bg-white rounded-xl p-6 border border-gray-100 shadow-regular snap-start"
              >
                {/* Avatar and Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-hooman-orange/20">
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
                <p className="text-[#1C1C1E] text-base leading-relaxed font-medium">
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