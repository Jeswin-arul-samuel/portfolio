'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
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

const MOBILE_ITEM_HEIGHT = 100 // Fixed height per item in pixels

export default function ExperienceArc() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [mobileItemsPerView, setMobileItemsPerView] = useState(3)
  const [containerHeight, setContainerHeight] = useState(300)
  const containerRef = useRef<HTMLDivElement>(null)

  // Desktop settings
  const desktopItemsPerView = 2
  const itemWidth = 50 // percentage width per item (desktop)

  // Calculate mobile items per view based on available screen height
  useEffect(() => {
    const calculateMobileLayout = () => {
      // Get viewport height
      const viewportHeight = window.innerHeight
      // Reserve space for: mobile header (~64px), legend (~60px), hint (~40px), progress dots (~40px), padding (~40px)
      const reservedSpace = 244
      const availableHeight = viewportHeight - reservedSpace

      // Calculate how many items can fit
      const itemsThatFit = Math.floor(availableHeight / MOBILE_ITEM_HEIGHT)
      const clampedItems = Math.max(2, Math.min(itemsThatFit, experienceData.length))

      setMobileItemsPerView(clampedItems)
      setContainerHeight(clampedItems * MOBILE_ITEM_HEIGHT)
    }

    calculateMobileLayout()
    window.addEventListener('resize', calculateMobileLayout)
    return () => window.removeEventListener('resize', calculateMobileLayout)
  }, [])

  // Mobile percentage per item
  const itemHeightPercent = 100 / mobileItemsPerView

  // Touch handling for mobile swipe
  const touchStartY = useRef<number>(0)
  const touchEndY = useRef<number>(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.touches[0].clientY
  }

  const handleTouchEnd = () => {
    const diff = touchStartY.current - touchEndY.current
    const threshold = 50 // minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped up - go to next
        setCurrentIndex((prev) => Math.min(experienceData.length - mobileItemsPerView, prev + 1))
      } else {
        // Swiped down - go to previous
        setCurrentIndex((prev) => Math.max(0, prev - 1))
      }
    }
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(experienceData.length - desktopItemsPerView, prev + 1))
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
  const translateY = -(currentIndex * itemHeightPercent)

  // Pulsate animation for checkpoint circles
  const pulseAnimation = {
    scale: [1, 1.15, 1],
    opacity: [0.7, 1, 0.7],
  }

  // Max index for mobile (recalculate when itemsPerView changes)
  const maxMobileIndex = Math.max(0, experienceData.length - mobileItemsPerView)

  return (
    <section id="experience" className="py-8">
      {/* Legend */}
      <div className="flex justify-center gap-6 mb-6 lg:mb-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-accent bg-background" />
          <span className="text-xs text-muted">Work</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-emerald-500 bg-background" />
          <span className="text-xs text-muted">Education</span>
        </div>
      </div>

      {/* Desktop - Horizontal Timeline */}
      <div className="hidden lg:block relative">
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
          disabled={currentIndex >= experienceData.length - desktopItemsPerView}
          className={`absolute -right-4 top-[10px] -translate-y-1/2 z-20 p-2 rounded-full bg-card-bg border border-card-border transition-all duration-300 ${
            currentIndex >= experienceData.length - desktopItemsPerView
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
                key={`desktop-${exp.company}-${index}`}
                className="flex-shrink-0 flex flex-col items-center cursor-pointer group"
                style={{ width: `${itemWidth}%` }}
                onClick={() => openModal(exp)}
              >
                {/* Hollow circle with pulse animation */}
                <motion.div
                  className={`w-5 h-5 rounded-full border-2 bg-background transition-all duration-300 ${
                    exp.category === 'education'
                      ? 'border-emerald-500 group-hover:border-emerald-400 group-hover:shadow-lg group-hover:shadow-emerald-500/30'
                      : exp.type === 'current'
                      ? 'border-accent shadow-lg shadow-accent/30'
                      : 'border-accent/70 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/30'
                  }`}
                  animate={pulseAnimation}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.3 }}
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
          {Array.from({ length: experienceData.length - desktopItemsPerView + 1 }).map((_, i) => (
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

      {/* Mobile - Vertical Timeline with Swipe */}
      <div className="lg:hidden relative">
        {/* Swipe hint */}
        <p className="text-center text-xs text-muted mb-4 animate-pulse">Swipe to explore • Tap for details</p>

        {/* Timeline container with touch handling - dynamic height */}
        <div
          ref={containerRef}
          className="mx-4 overflow-hidden touch-none relative"
          style={{ height: `${containerHeight}px` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Vertical line */}
          <div className="absolute left-[10px] top-0 bottom-0 w-0.5 bg-card-border" />

          {/* Sliding track - moves vertically */}
          <motion.div
            className="flex flex-col"
            animate={{ y: `${translateY}%` }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1
            }}
          >
            {experienceData.map((exp, index) => (
              <div
                key={`mobile-${exp.company}-${index}`}
                className="flex-shrink-0 flex items-start gap-3 cursor-pointer group"
                style={{ height: `${MOBILE_ITEM_HEIGHT}px` }}
                onClick={() => openModal(exp)}
              >
                {/* Hollow circle with pulse animation */}
                <motion.div
                  className={`w-5 h-5 rounded-full border-2 bg-background transition-all duration-300 flex-shrink-0 mt-0.5 ${
                    exp.category === 'education'
                      ? 'border-emerald-500 group-hover:border-emerald-400 group-hover:shadow-lg group-hover:shadow-emerald-500/30'
                      : exp.type === 'current'
                      ? 'border-accent shadow-lg shadow-accent/30'
                      : 'border-accent/70 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/30'
                  }`}
                  animate={pulseAnimation}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  whileTap={{ scale: 1.3 }}
                />

                {/* Info to the right of circle */}
                <div className="flex-1 pr-2">
                  <p className={`text-sm font-semibold text-white transition-colors leading-tight ${
                    exp.category === 'education' ? 'group-hover:text-emerald-400' : 'group-hover:text-accent'
                  }`}>
                    {exp.role}
                  </p>
                  <p className={`text-xs mt-0.5 ${
                    exp.category === 'education' ? 'text-emerald-500' : 'text-accent'
                  }`}>
                    {exp.company}
                  </p>
                  <p className="text-[10px] text-muted mt-0.5">
                    {exp.period.split('–')[0].trim()}
                  </p>
                  {/* Domain chips */}
                  {exp.domains && exp.domains.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {exp.domains.slice(0, 2).map((domain) => (
                        <span
                          key={domain}
                          className="text-[8px] px-1.5 py-0.5 rounded-full bg-card-border/50 text-muted"
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
        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: maxMobileIndex + 1 }).map((_, i) => (
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
