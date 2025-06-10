'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Plus, Minus, ArrowRight } from 'lucide-react'

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "Starting Your New Friendship Off on the Right Paw",
    tag: "Adopting a Pet",
    date: "9.11.2024",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Cat and dog sitting together outdoors"
  },
  {
    id: 2,
    title: "Starting Your New Friendship Off on the Right Paw",
    tag: "Adopting a Pet", 
    date: "9.11.2024",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Golden retriever running by the water"
  },
  {
    id: 3,
    title: "Starting Your New Friendship Off on the Right Paw",
    tag: "Adopting a Pet",
    date: "9.11.2024", 
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Dog carrying a ball in a field"
  },
  {
    id: 4,
    title: "Understanding Your Pet's Emotional Needs",
    tag: "Pet Care",
    date: "8.11.2024",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Close-up of a cat's face"
  },
  {
    id: 5,
    title: "The Ultimate Guide to Pet Nutrition",
    tag: "Health & Wellness",
    date: "7.11.2024",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Dog eating from a bowl"
  },
  {
    id: 6,
    title: "Creating Safe Spaces for Your Furry Friends",
    tag: "Home Setup",
    date: "6.11.2024",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop&auto=format&q=80",
    alt: "Dog relaxing on a comfortable bed"
  }
]

// FAQ data
const faqs = [
  {
    id: 1,
    question: "What Types Of Pets Do You Provide Services For?",
    answer: "We provide comprehensive services for dogs and cats of all breeds, sizes, and ages. Our AI-powered platform adapts to the unique needs of each pet, whether you have a playful puppy, a senior cat, or anything in between."
  },
  {
    id: 2,
    question: "How Do I Book A Service?",
    answer: "Booking is simple! Just download the Hooman app, create your pet's profile, and browse available services in your area. You can schedule everything from walks and grooming to vet visits with just a few taps."
  },
  {
    id: 3,
    question: "Are Your Grooming Products Safe For Pets?",
    answer: "Absolutely! We only use premium, pet-safe grooming products that are hypoallergenic and environmentally friendly. All our products are thoroughly tested and approved by veterinarians."
  },
  {
    id: 4,
    question: "Do You Offer Emergency Services?",
    answer: "Yes, we offer 24/7 emergency support through our platform. Our emergency network includes certified vets and emergency clinics that can provide immediate care when your pet needs it most."
  },
  {
    id: 5,
    question: "Can I Customise A Service Package?",
    answer: "Definitely! Our platform allows you to create custom service packages tailored to your pet's specific needs and your schedule. Mix and match services to create the perfect care plan for your furry friend."
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
        <span className="bg-white px-3 py-1 rounded-full text-xs uppercase font-medium text-gray-600 border">
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
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pb-6 pr-12">
            <p className="text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
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
    <section className="bg-hooman-beige py-24 px-6 space-y-24">
      {/* BLOG SECTION */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="text-center mb-16"
        >
          {/* Blog Title */}
          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-6xl font-extrabold text-black mb-8 leading-tight"
          >
            Latest blog posts
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={textVariants}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Fresh thoughts, advice, and stories from the Hooman team.
          </motion.p>
        </motion.div>

        {/* Blog Cards - Horizontal Scroll */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Desktop: 3 cards visible */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:mb-12">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Tablet & Mobile: Horizontal scroll */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide pb-4 mb-12">
            <div className="flex gap-6 w-max">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Browse All Articles CTA */}
          <motion.div
            variants={textVariants}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-hooman-orange font-semibold text-lg hover:gap-3 transition-all duration-300"
            >
              Browse all articles
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column - FAQ Intro */}
          <div className="lg:sticky lg:top-24">
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
                FAQs
              </motion.span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight"
            >
              Got Questions? We&apos;ve Got Answers!
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={textVariants}
              className="text-base md:text-lg text-gray-600 leading-relaxed mb-8"
            >
              We&apos;re here to make pet care easy and stress-free. Explore our FAQs for quick answers to common questions about our services, pricing, and more.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={textVariants}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Early Access
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            variants={containerVariants}
            className="bg-white rounded-2xl shadow-medium p-8"
          >
            <div className="space-y-0">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFAQ === faq.id}
                  onToggle={() => toggleFAQ(faq.id)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 