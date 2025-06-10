'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Plus, Minus, ArrowRight } from 'lucide-react'

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Pet Health Monitoring",
    tag: "AI & Technology",
    date: "15.12.2024",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Pet wearing smart health monitoring device"
  },
  {
    id: 2,
    title: "5 Signs Your Pet Needs Immediate Veterinary Care",
    tag: "Health & Safety", 
    date: "12.12.2024",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Veterinarian examining a golden retriever"
  },
  {
    id: 3,
    title: "Smart Feeding: Using Data to Optimize Your Pet's Nutrition",
    tag: "Nutrition",
    date: "10.12.2024", 
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Smart pet feeding system with app interface"
  },
  {
    id: 4,
    title: "Understanding Your Pet's Behavioral Patterns with Hooman",
    tag: "Behavior",
    date: "8.12.2024",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Cat displaying natural behavior patterns"
  },
  {
    id: 5,
    title: "Emergency Preparedness: Building Your Pet's Safety Net",
    tag: "Emergency Care",
    date: "5.12.2024",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Emergency pet care kit and first aid supplies"
  },
  {
    id: 6,
    title: "The Science Behind Preventive Pet Healthcare",
    tag: "Preventive Care",
    date: "2.12.2024",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Healthy pet in comfortable environment"
  }
]

// FAQ data
const faqs = [
  {
    id: 1,
    question: "How does Hooman's AI technology help my pet?",
    answer: "Our AI analyzes your pet's health data, behavior patterns, and environmental factors to provide personalized recommendations. From nutrition optimization to early health issue detection, our platform helps you make informed decisions about your pet's wellbeing before problems arise."
  },
  {
    id: 2,
    question: "What makes Hooman different from other pet care apps?",
    answer: "Hooman combines advanced AI with veterinary expertise to offer predictive healthcare insights. Unlike basic tracking apps, we provide actionable intelligence, connect you with certified professionals, and help prevent health issues rather than just managing them."
  },
  {
    id: 3,
    question: "Is my pet's data secure and private?",
    answer: "Absolutely. We use enterprise-grade encryption to protect your pet's health data. Your information is never shared with third parties without explicit consent, and you maintain full control over your data at all times."
  },
  {
    id: 4,
    question: "How quickly can I access emergency veterinary support?",
    answer: "Our 24/7 emergency network can connect you with qualified veterinarians within minutes. For urgent situations, our AI triage system prioritizes cases and can facilitate immediate telemedicine consultations or direct you to the nearest emergency clinic."
  },
  {
    id: 5,
    question: "Can Hooman help with multiple pets or different species?",
    answer: "Yes! Our platform supports multi-pet households and works with both dogs and cats. Each pet gets their own personalized AI profile that adapts to their unique breed characteristics, age, health history, and individual needs."
  },
  {
    id: 6,
    question: "How does the predictive health monitoring work?",
    answer: "Our AI analyzes patterns in your pet's vital signs, activity levels, eating habits, and behavior to identify potential health concerns before they become serious. We alert you to changes that may require veterinary attention, helping catch issues early when they're most treatable."
  }
]

// Animation variants
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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Blog Card Component
const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-2xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 min-w-[320px] md:min-w-[350px] flex-shrink-0"
  >
    <div className="relative aspect-[3/2] overflow-hidden">
      <Image
        src={post.image}
        alt={post.alt}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="bg-hooman-orange/10 text-hooman-orange px-3 py-1 rounded-full text-xs uppercase font-bold border border-hooman-orange/20">
          {post.tag}
        </span>
        <span className="text-xs text-gray-500 font-medium">
          {post.date}
        </span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold leading-snug text-gray-900 line-clamp-2">
        {post.title}
      </h3>
    </div>
  </motion.div>
)

// FAQ Item Component
const FAQItem = ({ faq, isOpen, onToggle }: { 
  faq: typeof faqs[0], 
  isOpen: boolean, 
  onToggle: () => void 
}) => (
  <motion.div
    variants={cardVariants}
    className="border-b border-gray-200 last:border-b-0"
  >
    <button
      onClick={onToggle}
      className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
    >
      <span className="text-lg font-semibold text-gray-900 pr-4">
        {faq.question}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0"
      >
        {isOpen ? (
          <Minus className="w-6 h-6 text-hooman-orange" />
        ) : (
          <Plus className="w-6 h-6 text-hooman-orange" />
        )}
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pb-6 text-gray-600 leading-relaxed">
            {faq.answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)

export default function BlogAndFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-hooman-beige via-white to-hooman-beige section-padding">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container-max"
      >
        {/* Blog Section */}
        <div className="mb-24">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div variants={badgeVariants}>
              <span className="inline-flex items-center gap-2 bg-hooman-orange text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide">
                Latest Insights 📖
              </span>
            </motion.div>
            
            <motion.h2 
              variants={textVariants}
              className="heading-2 text-hooman-black mt-6 mb-4"
            >
              Smart Pet Parenting Insights
            </motion.h2>
            
            <motion.p 
              variants={textVariants}
              className="body-large text-gray-600 max-w-3xl mx-auto"
            >
              Expert advice, AI-powered insights, and data-driven strategies to help you provide the best care for your furry family members.
            </motion.p>
          </div>

          {/* Blog Cards Grid */}
          <motion.div 
            variants={containerVariants}
            className="relative"
          >
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            {/* View All Link */}
            <motion.div 
              variants={textVariants}
              className="text-center mt-12"
            >
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-hooman-orange font-semibold hover:gap-3 transition-all duration-300"
              >
                View All Articles
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div variants={badgeVariants}>
              <span className="inline-flex items-center gap-2 bg-hooman-teal text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide">
                Got Questions? 🤔
              </span>
            </motion.div>
            
            <motion.h2 
              variants={textVariants}
              className="heading-2 text-hooman-black mt-6 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <motion.p 
              variants={textVariants}
              className="body-large text-gray-600 max-w-3xl mx-auto"
            >
              Everything you need to know about Hooman's AI-powered platform and how it transforms pet care for modern families.
            </motion.p>
          </div>

          {/* FAQ Items */}
          <motion.div 
            variants={containerVariants}
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-regular overflow-hidden"
          >
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openFAQ === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
          </motion.div>

          {/* Contact Support */}
          <motion.div 
            variants={textVariants}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Still have questions? Our support team is here to help.
            </p>
            <a
              href="/support"
              className="inline-flex items-center gap-2 bg-hooman-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-hooman-orange/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Contact Support
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 