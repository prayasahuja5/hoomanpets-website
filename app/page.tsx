import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WaitlistSignup from './components/WaitlistSignup'
import MeetEzra from './components/MeetEzra'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WaitlistSignup />
      <MeetEzra />
    </main>
  )
} 