'use client'

import React, { forwardRef } from 'react'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  size?: 'small' | 'default'
  variant?: 'default' | 'textarea'
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  size = 'default',
  className = '',
  ...props
}, ref) => {
  const baseClasses = 'font-urbanist w-full rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-100/50 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const sizeClasses = {
    small: 'px-3 py-2 text-display-1',
    default: 'px-4 py-3 text-display-2'
  }
  
  const borderClasses = error 
    ? 'border-red-500 focus:border-red-500' 
    : 'border-neutral-400 focus:border-primary-100 hover:border-neutral-500'

  return (
    <div className="w-full">
      {label && (
        <label className="block font-urbanist text-display-2 font-medium text-neutral-700 mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`${baseClasses} ${sizeClasses[size]} ${borderClasses} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-display-1 text-red-500 font-urbanist">
          {error}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input 