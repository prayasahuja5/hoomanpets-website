import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WaitlistSignup from './components/WaitlistSignup'
import MeetEzra from './components/MeetEzra'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import BlogAndFAQ from './components/BlogAndFAQ'
import AppBanner from './components/AppBanner'
import SocialsGallery from './components/SocialsGallery'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WaitlistSignup />
      <MeetEzra />
      <AppBanner />
      <WhyUs />
      <Testimonials />
      <BlogAndFAQ />
      <SocialsGallery />
    </main>
  )
} 