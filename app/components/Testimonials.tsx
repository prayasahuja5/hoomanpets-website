'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Testimonial data - back to original pet-focused content
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

// Create duplicated array for seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials]

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
              Testimonials
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Just hear what other <br />
            pet parents are saying
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={textVariants}
            className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Real stories from real people — using Hooman to care smarter, stress less, and feel supported every day.
          </motion.p>
        </motion.div>

        {/* Horizontal Scrolling Marquee */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#27221F] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#27221F] to-transparent z-10 pointer-events-none" />
          
          {/* Auto-scrolling container */}
          <div className="flex gap-6 animate-marquee hover:pause-marquee">
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(233, 87, 68, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="flex-none w-80 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transition-all duration-300 group cursor-pointer border border-white/20 hover:border-hooman-orange/30"
              >
                {/* Avatar and Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        boxShadow: "0 8px 20px rgba(233, 87, 68, 0.4)"
                      }}
                      transition={{ duration: 0.2 }}
                      className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-hooman-orange/20 group-hover:ring-hooman-orange/50 transition-all duration-300"
                    >
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name} avatar`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1E] text-lg group-hover:text-hooman-orange transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium group-hover:text-gray-600 transition-colors duration-300">
                      {testimonial.tagline}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="relative">
                  <p className="text-[#1C1C1E] text-base leading-relaxed font-medium group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Quote decoration */}
                  <div className="absolute -top-3 -left-2 text-6xl text-hooman-orange/20 font-serif leading-none group-hover:text-hooman-orange/40 transition-colors duration-300">
                    "
                  </div>
                </div>

                {/* Tech-style bottom accent */}
                <div className="mt-4 h-1 bg-gradient-to-r from-hooman-orange/20 via-hooman-teal/20 to-transparent rounded-full group-hover:from-hooman-orange/60 group-hover:via-hooman-teal/60 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile optimized version */}
        <div className="block md:hidden mt-8">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={`mobile-${testimonial.id}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-none w-80 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl snap-start border border-white/20"
              >
                {/* Avatar and Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-hooman-orange/20">
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name} avatar`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1E] text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {testimonial.tagline}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="relative">
                  <p className="text-[#1C1C1E] text-base leading-relaxed font-medium">
                    "{testimonial.text}"
                  </p>
                  <div className="absolute -top-3 -left-2 text-6xl text-hooman-orange/20 font-serif leading-none">
                    "
                  </div>
                </div>

                <div className="mt-4 h-1 bg-gradient-to-r from-hooman-orange/20 via-hooman-teal/20 to-transparent rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .hover\\:pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
} 