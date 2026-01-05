'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { experience } from '@/data/portfolio-data'

interface Project {
  name: string
  description: string
  techStack: string[]
  highlights: string[]
}

interface Experience {
  company: string
  role: string
  location: string
  period: string
  type: string
  category: 'work' | 'education'
  domains?: string[]
  achievements: string[]
  projects?: Project[]
  description?: string
}

const experienceData = experience as Experience[]

export default function ExperienceArc() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const itemsPerView = 2
  const itemWidth = 50 // percentage width per item

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(experienceData.length - itemsPerView, prev + 1))
  }

  const openModal = (exp: Experience) => {
    setSelectedExp(exp)
    setExpandedProject(null)
  }

  const closeModal = () => {
    setSelectedExp(null)
    setExpandedProject(null)
  }

  // Calculate the transform offset for train-like sliding
  const translateX = -(currentIndex * itemWidth)

  return (
    <section id="experience" className="py-8">
      {/* Legend */}
      <div className="flex justify-center gap-6 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-accent bg-background" />
          <span className="text-xs text-muted">Work</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-emerald-500 bg-background" />
          <span className="text-xs text-muted">Education</span>
        </div>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute -left-4 top-[10px] -translate-y-1/2 z-20 p-2 rounded-full bg-card-bg border border-card-border transition-all duration-300 ${
            currentIndex === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:border-accent hover:scale-110'
          }`}
        >
          <ChevronLeft size={20} className="text-muted" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= experienceData.length - itemsPerView}
          className={`absolute -right-4 top-[10px] -translate-y-1/2 z-20 p-2 rounded-full bg-card-bg border border-card-border transition-all duration-300 ${
            currentIndex >= experienceData.length - itemsPerView
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:border-accent hover:scale-110'
          }`}
        >
          <ChevronRight size={20} className="text-muted" />
        </button>

        {/* Timeline container with overflow hidden */}
        <div className="mx-8 overflow-hidden">
          {/* Horizontal line */}
          <div className="absolute left-8 right-8 top-[10px] h-0.5 bg-card-border" />

          {/* Sliding track - moves like a train */}
          <motion.div
            className="flex"
            animate={{ x: `${translateX}%` }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1
            }}
          >
            {experienceData.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="flex-shrink-0 flex flex-col items-center cursor-pointer group"
                style={{ width: `${itemWidth}%` }}
                onClick={() => openModal(exp)}
              >
                {/* Hollow circle - 5mm ≈ 20px */}
                <motion.div
                  className={`w-5 h-5 rounded-full border-2 bg-background transition-all duration-300 ${
                    exp.category === 'education'
                      ? 'border-emerald-500 group-hover:border-emerald-400 group-hover:shadow-lg group-hover:shadow-emerald-500/30'
                      : exp.type === 'current'
                      ? 'border-accent shadow-lg shadow-accent/30'
                      : 'border-accent/70 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                />

                {/* Info below circle */}
                <div className="mt-4 text-center px-4">
                  <p className={`text-sm font-semibold text-white transition-colors ${
                    exp.category === 'education' ? 'group-hover:text-emerald-400' : 'group-hover:text-accent'
                  }`}>
                    {exp.role}
                  </p>
                  <p className={`text-xs mt-1 ${
                    exp.category === 'education' ? 'text-emerald-500' : 'text-accent'
                  }`}>
                    {exp.company}
                  </p>
                  <p className="text-[10px] text-muted mt-0.5">
                    {exp.period.split('–')[0].trim()}
                  </p>
                  {/* Domain chips */}
                  {exp.domains && exp.domains.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-1 mt-2">
                      {exp.domains.map((domain) => (
                        <span
                          key={domain}
                          className="text-[9px] px-1.5 py-0.5 rounded-full bg-card-border/50 text-muted"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: experienceData.length - itemsPerView + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === i
                  ? 'bg-accent w-6'
                  : 'bg-card-border hover:bg-muted w-1.5'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal - centered in main content area */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 lg:left-80 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative bg-card-bg border border-card-border rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-accent/10 transition-colors"
              >
                <X size={20} className="text-muted" />
              </button>

              {/* Header */}
              <div className="text-center mb-6 pr-8">
                <h3 className="text-xl font-bold">{selectedExp.role}</h3>
                <p className={selectedExp.category === 'education' ? 'text-emerald-500' : 'text-accent'}>
                  {selectedExp.company}
                </p>
                <p className="text-muted text-sm">
                  {selectedExp.location} • {selectedExp.period}
                </p>
              </div>

              {/* Achievements */}
              {selectedExp.achievements.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
                    {selectedExp.category === 'education' ? 'Highlights' : 'Key Achievements'}
                  </h4>
                  <ul className="space-y-2">
                    {selectedExp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted text-sm flex gap-2">
                        <span className={selectedExp.category === 'education' ? 'text-emerald-500' : 'text-accent'}>•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Projects */}
              {selectedExp.projects && selectedExp.projects.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted uppercase tracking-wide">
                    Key Projects
                  </h4>
                  <div className="grid gap-3">
                    {selectedExp.projects.map((project, pIndex) => (
                      <div
                        key={pIndex}
                        className="border border-card-border rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setExpandedProject(expandedProject === pIndex ? null : pIndex)
                          }
                          className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-accent/5 transition-colors"
                        >
                          <span className="font-medium">{project.name}</span>
                          <motion.span
                            animate={{ rotate: expandedProject === pIndex ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-muted text-sm"
                          >
                            ▼
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {expandedProject === pIndex && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 space-y-3">
                                <p className="text-muted text-sm">{project.description}</p>

                                <ul className="space-y-1">
                                  {project.highlights.map((highlight, hIndex) => (
                                    <li
                                      key={hIndex}
                                      className="text-muted text-xs flex gap-2"
                                    >
                                      <span className="text-accent">→</span>
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>

                                <div className="flex flex-wrap gap-1.5 pt-2">
                                  {project.techStack.map((tech) => (
                                    <span
                                      key={tech}
                                      className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
