import React from 'react'
import Header from './components/Header'
import NewHeroSection from './components/NewHeroSection'
import WhyHoomanSection from './components/WhyHoomanSection'
import WaitlistSection from './components/WaitlistSection'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-hooman-beige">
      <Header />
      <div className="pt-16"> {/* Add padding to account for fixed header */}
        <NewHeroSection />
        <WhyHoomanSection />
        <WaitlistSection />
      </div>
    </main>
  )
} 