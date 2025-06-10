'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SocialsGallery: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = `https://via.placeholder.com/400x300/f3f4f6/6b7280?text=${encodeURIComponent('Social Post')}`
  }

  return (
    <section className="bg-hooman-white py-24 section-padding">
      <div className="container-max">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-6 h-[600px]">
          
          {/* Left Section - Title + First Two Images */}
          <div className="col-span-12 md:col-span-4 flex flex-col h-full">
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-hooman-black leading-tight">
                Follow us on{' '}
                <span className="text-hooman-orange">Socials</span>
              </h2>
            </div>
            
            {/* Two stacked images */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Top Image - Dog high five */}
              <motion.a
                href="https://instagram.com/hoomanpets"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group rounded-xl overflow-hidden flex-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://picsum.photos/300/200?random=1"
                  alt="Follow us on Instagram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center text-white">
                    <i className="fab fa-instagram text-3xl mb-2"></i>
                    <p className="font-semibold">@hoomanpets</p>
                  </div>
                </div>
              </motion.a>

              {/* Bottom Image - Girl with dog */}
              <motion.a
                href="https://instagram.com/hoomanpets"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group rounded-xl overflow-hidden flex-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://picsum.photos/300/200?random=2"
                  alt="Follow us on Instagram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center text-white">
                    <i className="fab fa-instagram text-3xl mb-2"></i>
                    <p className="font-semibold">@hoomanpets</p>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Center Section - Large Image */}
          <div className="col-span-12 md:col-span-4 h-full">
            <motion.a
              href="https://instagram.com/hoomanpets"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group rounded-xl overflow-hidden h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://picsum.photos/400/600?random=3"
                alt="Follow us on Instagram"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center text-white">
                  <i className="fab fa-instagram text-4xl mb-3"></i>
                  <p className="text-lg font-semibold">@hoomanpets</p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Right Section - Two Images */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-6 h-full">
            {/* Top Image - Couple with dog */}
            <motion.a
              href="https://instagram.com/hoomanpets"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group rounded-xl overflow-hidden flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://picsum.photos/300/200?random=4"
                alt="Follow us on Instagram"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center text-white">
                  <i className="fab fa-instagram text-3xl mb-2"></i>
                  <p className="font-semibold">@hoomanpets</p>
                </div>
              </div>
            </motion.a>

            {/* Bottom Image - Man with dog */}
            <motion.a
              href="https://tiktok.com/@hoomanpets"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group rounded-xl overflow-hidden flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://picsum.photos/300/200?random=5"
                alt="Follow us on TikTok"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-red-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center text-white">
                  <i className="fab fa-tiktok text-3xl mb-2"></i>
                  <p className="font-semibold">@hoomanpets</p>
                </div>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Mobile Layout - Stack all images vertically on small screens */}
        <div className="block md:hidden mt-8">
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4,5,6].map((num) => (
              <motion.a
                key={num}
                href="https://instagram.com/hoomanpets"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group rounded-xl overflow-hidden h-40"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={`https://picsum.photos/200/200?random=${num}`}
                  alt="Follow us on social media"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center text-white">
                    <i className="fab fa-instagram text-2xl mb-1"></i>
                    <p className="text-sm font-semibold">@hoomanpets</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialsGallery 