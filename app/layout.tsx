import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hooman Pets - Smarter Pet Parenting',
  description: 'Revolutionary AI-powered pet care platform helping pet parents make smarter decisions for their furry family members.',
  keywords: 'pet care, AI pet health, pet parenting, veterinary care, pet wellness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 