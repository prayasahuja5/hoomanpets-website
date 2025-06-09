import React from 'react'
import Header from './components/Header'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-hooman-beige">
      <Header />
      <div className="pt-16 flex items-center justify-center min-h-screen">
        {/* Temporary content - ready for new sections */}
        <div className="text-center">
          <h1 className="font-urbanist text-display-8 font-bold text-neutral-800 mb-4">
            Hooman Pets
          </h1>
          <p className="font-urbanist text-display-4 text-neutral-600">
            Ready to build something amazing
          </p>
        </div>
      </div>
    </main>
  )
} 