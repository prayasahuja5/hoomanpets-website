import React from 'react'
import Header from './components/Header'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Temporary content to show the header */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Hooman Website</h1>
          <p className="text-lg text-gray-600">Header component is now ready based on your Figma design!</p>
          <p className="text-sm text-gray-500 mt-4">We'll build the rest of the page sections next.</p>
        </div>
      </div>
    </main>
  )
} 