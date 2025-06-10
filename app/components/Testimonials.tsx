'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Testimonial data - original pet-focused content
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

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="bg-[#F5EDE2] text-[#1C1C1E] rounded-xl p-6 w-[300px] min-w-[300px] shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out flex-shrink-0">
    <div className="flex items-center space-x-4 mb-4">
      <Image
        src={testimonial.avatar}
        alt={`Avatar of ${testimonial.name}`}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-[#1C1C1E]">{testimonial.name}</p>
        <p className="text-sm text-[#7A7A7A]">{testimonial.tagline}</p>
      </div>
    </div>
    <p className="text-sm leading-relaxed text-[#1C1C1E]">"{testimonial.text}"</p>
  </div>
)

export default function Testimonials() {
  // Create extended arrays for seamless scrolling
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]
  
  return (
    <section className="bg-[#1C1C1E] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
          {/* Badge */}
          <motion.div variants={badgeVariants}>
            <span className="inline-block bg-[#E95744] text-white text-sm px-3 py-1 rounded-full uppercase font-medium tracking-wide">
              Testimonials
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-5xl font-extrabold mt-6"
          >
            Just hear what other <br />
            pet parents are saying
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={textVariants}
            className="text-gray-400 max-w-2xl mx-auto mt-4"
          >
            Real stories from real people — using Hooman to care smarter, stress less, and feel supported every day.
          </motion.p>
        </motion.div>
      </div>

      {/* Dual Row Marquee Container */}
      <div className="mt-16 space-y-8">
        {/* Row 1 - Moving Left to Right */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll-left">
            {extendedTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`row1-${testimonial.id}-${index}`} 
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right to Left with Offset */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll-right translate-x-20">
            {extendedTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`row2-${testimonial.id}-${index}`} 
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version - Single Scrollable Row */}
      <div className="block md:hidden mt-8 -mx-6">
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-6">
          {testimonials.map((testimonial) => (
            <div
              key={`mobile-${testimonial.id}`}
              className="bg-[#F5EDE2] text-[#1C1C1E] rounded-xl p-6 w-[260px] min-w-[260px] shadow-md snap-start flex-shrink-0"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#1C1C1E]">{testimonial.name}</p>
                  <p className="text-sm text-[#7A7A7A]">{testimonial.tagline}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#1C1C1E]">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          width: fit-content;
        }

        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
          width: fit-content;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide marquee on mobile, show scroll instead */
        @media (max-width: 768px) {
          .animate-scroll-left,
          .animate-scroll-right {
            display: none;
          }
        }
      `}</style>
    </section>
  )
} 