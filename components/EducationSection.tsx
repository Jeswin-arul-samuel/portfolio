'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { education } from '@/data/portfolio-data'

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="education" className="py-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">Education</h2>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                  <GraduationCap size={24} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-accent text-sm mb-2">{edu.school}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                  </div>

                  {edu.details && (
                    <p className="mt-3 text-sm text-muted border-t border-card-border pt-3">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
