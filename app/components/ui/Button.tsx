'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'default'
  icon?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  icon,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseClasses = 'font-urbanist font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-primary-100 text-white hover:bg-primary-100/90 focus:ring-primary-100/50 shadow-primary-small hover:shadow-primary-regular',
    secondary: 'bg-secondary-200 text-white hover:bg-secondary-300 focus:ring-secondary-200/50 shadow-small hover:shadow-regular',
    tertiary: 'bg-transparent text-primary-100 border-2 border-primary-100 hover:bg-primary-100 hover:text-white focus:ring-primary-100/50'
  }
  
  const sizeClasses = {
    small: 'px-4 py-2 text-display-1',
    default: 'px-6 py-3 text-display-3'
  }
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed hover:bg-current hover:shadow-current' 
    : 'cursor-pointer'

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  )
} 