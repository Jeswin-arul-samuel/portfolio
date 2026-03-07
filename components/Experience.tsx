'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { experience } from '@/data/portfolio-data'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section-container bg-card-bg/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey in tech</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-card-border transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 border-4 border-background z-10">
                {exp.type === 'current' && (
                  <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className={`card ${index % 2 === 0 ? 'md:ml-auto' : ''} max-w-xl`}>
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Briefcase size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{exp.role}</h3>
                      <p className="text-accent text-sm">{exp.company}</p>
                    </div>
                  </div>

                  <div className={`flex flex-wrap gap-4 text-sm text-muted mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>

                  {exp.description && (
                    <p className="text-muted text-sm mb-4 italic">{exp.description}</p>
                  )}

                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted text-sm flex gap-2">
                        <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
