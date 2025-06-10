'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Handle newsletter subscription logic here
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
    }, 1000)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer 
      ref={footerRef}
      className={`bg-hooman-orange text-hooman-black transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Upper Footer Section */}
      <div className="border-b border-hooman-black">
        <div className="container-max section-padding py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight max-w-2xl text-hooman-black">
              we're playing the<br />
              long game. with<br />
              wins along the way
            </h2>
            <a 
              href="/news" 
              className="text-hooman-black underline hover:opacity-80 transition-opacity duration-300 font-medium"
            >
              news & press →
            </a>
          </div>
        </div>
      </div>

      {/* Lower Footer Section */}
      <div className="container-max section-padding py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mb-12">
          
          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="font-medium text-hooman-black">
              sign up for stories of change in action
            </h3>
            
            <form onSubmit={handleSubscribe} className="flex items-end gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email address"
                  className="w-full bg-transparent border-0 border-b border-hooman-black pb-2 placeholder:text-hooman-black/70 focus:outline-none focus:border-hooman-black text-hooman-black"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-hooman-black text-white px-6 py-2 font-medium hover:bg-hooman-black/90 hover:shadow-md transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'subscribing...' : 'subscribe'}
              </button>
            </form>
          </div>

          {/* Site Links Column */}
          <div className="space-y-4">
            <nav className="flex flex-col space-y-3">
              <a 
                href="/about" 
                className="text-hooman-black hover:opacity-80 transition-opacity duration-300"
              >
                about
              </a>
              <a 
                href="/download" 
                className="text-hooman-black hover:opacity-80 transition-opacity duration-300"
              >
                download
              </a>
              <a 
                href="/waitlist" 
                className="text-hooman-black hover:opacity-80 transition-opacity duration-300"
              >
                waitlist
              </a>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <div>
              <p className="text-hooman-black">440 Burroughs St #200</p>
              <p className="text-hooman-black">Detroit, MI 48202</p>
            </div>
            <a 
              href="https://maps.google.com/?q=440+Burroughs+St+200+Detroit+MI+48202" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-hooman-black underline hover:opacity-80 transition-opacity duration-300 inline-block"
            >
              get directions →
            </a>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="border-t border-hooman-black pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            {/* Left: Copyright */}
            <div className="flex items-center gap-4 text-sm">
              <span>© 2025 Civila | Photos by</span>
              <a 
                href="#" 
                className="underline hover:opacity-80 transition-opacity duration-300"
              >
                marisol dorantes
              </a>
            </div>

            {/* Center: Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/company/hooman-inc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hooman-black hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="https://instagram.com/hooman.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hooman-black hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a
                href="https://tiktok.com/@hooman.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hooman-black hover:scale-110 transition-transform duration-300"
                aria-label="TikTok"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>

            {/* Right: Logo and Tagline */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/logos/hooman-logo.png"
                    alt="Hooman Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg leading-none">Hooman</div>
                  <div className="text-sm font-medium">SMARTER PET PARENTING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 