'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { MapPin, Languages } from 'lucide-react'
import { personalInfo } from '@/data/portfolio-data'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know my background and what drives me</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Photo and Quick Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div className="card">
            {/* Profile Photo */}
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/30">
              <Image
                src="/profile.jpeg"
                alt={personalInfo.name}
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">{personalInfo.name}</h3>
              <p className="text-accent">{personalInfo.title}</p>
              <div className="flex items-center justify-center gap-2 mt-2 text-muted text-sm">
                <MapPin size={14} />
                {personalInfo.location}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {personalInfo.highlights.map((highlight, index) => (
                <div key={index} className="text-center p-3 bg-background rounded-lg">
                  <p className="text-xl font-bold gradient-text">{highlight.value}</p>
                  <p className="text-xs text-muted">{highlight.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bio and Languages */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <div className="text-muted space-y-4 leading-relaxed">
              {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <Languages size={20} className="text-accent" />
              <h3 className="text-xl font-semibold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {personalInfo.languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-xs text-muted bg-card-border px-2 py-0.5 rounded">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
