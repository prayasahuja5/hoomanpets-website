'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function AnimatedLink({ href, children, className = '', onClick }: AnimatedLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`relative inline-block overflow-hidden ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {/* Text content */}
      <motion.span
        className="relative z-10 block"
        variants={{
          initial: { y: 0 },
          hover: { y: -2 }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.span>
      
      {/* Underline effect */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-primary-100"
        variants={{
          initial: { width: 0, x: 0 },
          hover: { width: "100%", x: 0 }
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-md opacity-0"
        style={{
          background: 'linear-gradient(45deg, rgba(233, 87, 68, 0.1), rgba(50, 187, 170, 0.1))'
        }}
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          hover: { opacity: 1, scale: 1 }
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  )
} 