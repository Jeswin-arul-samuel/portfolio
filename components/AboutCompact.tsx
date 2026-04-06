'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { masterResumeDataset } from '@/data/resume-master-dataset'

// Map strengths into the trait format the orbit expects
const strengths = masterResumeDataset.strengthsAndWeaknesses.strengths
const traits = strengths.map((s) => ({
  name: s.strength.split(' ').slice(0, 3).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  hook: s.whyItMatters,
  narrative: s.evidence,
  evidence: [] as string[],
}))

const languages = [
  { name: "English", level: "Native", flag: "🇬🇧" },
  { name: "Tamil", level: "Native", flag: "🇮🇳" },
  { name: "Hindi", level: "Professional", flag: "🇮🇳" },
  { name: "French", level: "Elementary", flag: "🇫🇷" },
]

// Bigger, taller ellipse
const RX = 320
const RY = 190
const RX_SM = 165
const RY_SM = 110

export default function AboutCompact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [activeTrait, setActiveTrait] = useState<number | null>(null)
  const rotationRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const pausedRef = useRef(false)
  const [, forceRender] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const rx = isMobile ? RX_SM : RX
  const ry = isMobile ? RY_SM : RY

  const getPos = useCallback((index: number, rot: number) => {
    const baseAngle = (index * 360) / traits.length - 90
    const angle = baseAngle + rot
    const rad = (angle * Math.PI) / 180
    return { x: Math.cos(rad) * rx, y: Math.sin(rad) * ry }
  }, [rx, ry])

  // Single RAF loop — always runs, checks pausedRef
  useEffect(() => {
    const animate = () => {
      if (!pausedRef.current) {
        rotationRef.current += 0.08
        forceRender((n) => n + 1)
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleEnter = useCallback((i: number) => {
    pausedRef.current = true
    setActiveTrait(i)
  }, [])

  const handleLeave = useCallback(() => {
    pausedRef.current = false
    setActiveTrait(null)
  }, [])

  const containerW = rx * 2 + 160
  const containerH = ry * 2 + 120

  return (
    <section id="about" className="py-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Intro */}
        <div className="text-center mb-2">
          <p className="text-muted max-w-2xl mx-auto text-sm leading-relaxed">
            AI-first technologist with a decade of experience at the intersection of
            <span className="text-accent"> artificial intelligence</span>,
            <span className="text-accent"> data engineering</span>, and
            <span className="text-accent"> technical leadership</span>.
            I build systems that solve real problems and empower teams.
          </p>
        </div>

        {/* Orbit section */}
        <div>

          <div
            className="relative mx-auto"
            style={{ width: containerW, height: containerH, maxWidth: '100%' }}
          >
            {/* Decorative ellipse */}
            <svg
              className="absolute pointer-events-none"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              width={rx * 2 + 4}
              height={ry * 2 + 4}
            >
              <ellipse
                cx={rx + 2}
                cy={ry + 2}
                rx={rx}
                ry={ry}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="text-accent/10"
              />
            </svg>

            {/* Center content — inside the ellipse */}
            <div
              className="absolute flex items-center justify-center pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: rx * 1.4,
                height: ry * 1.3,
              }}
            >
              <AnimatePresence mode="wait">
                {activeTrait !== null && (
                  <motion.div
                    key={`center-${activeTrait}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="text-center px-6 md:px-10 max-w-[480px]"
                  >
                    <h4 className="text-xl md:text-2xl font-black text-accent mb-3 tracking-tight">
                      {traits[activeTrait].name}
                    </h4>
                    <p className="text-sm md:text-base text-muted/90 italic leading-relaxed mb-4 border-l-2 border-accent/30 pl-4 text-left">
                      &ldquo;{traits[activeTrait].hook}&rdquo;
                    </p>
                    <p className="text-[11px] md:text-xs text-muted/70 leading-relaxed mb-4 text-left">
                      {traits[activeTrait].narrative}
                    </p>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {traits[activeTrait].evidence.map((ev, i) => (
                        <span key={i} className="text-[9px] md:text-[10px] px-2.5 py-1 rounded-full bg-accent/10 text-accent/70 border border-accent/15">
                          {ev}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Orbiting nodes */}
            {traits.map((trait, i) => {
              const pos = getPos(i, rotationRef.current)
              const isActive = activeTrait === i
              const isOtherActive = activeTrait !== null && activeTrait !== i

              const nodeW = isMobile ? 72 : 110
              const nodeH = isMobile ? 38 : 48

              return (
                <div
                  key={trait.name}
                  className="absolute cursor-pointer select-none"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(${pos.x - nodeW / 2}px, ${pos.y - nodeH / 2}px) scale(${isActive ? 1.3 : isOtherActive ? 0.8 : 1})`,
                    opacity: isOtherActive ? 0.3 : 1,
                    zIndex: isActive ? 30 : 10,
                    transition: activeTrait !== null ? 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease' : 'none',
                  }}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={handleLeave}
                >
                  <div
                    className={`flex items-center justify-center text-center rounded-xl border backdrop-blur-sm ${
                      isActive
                        ? 'bg-accent/20 border-accent/60 shadow-lg shadow-accent/20'
                        : 'bg-card-bg/90 border-card-border hover:border-accent/30'
                    }`}
                    style={{
                      width: nodeW,
                      height: nodeH,
                      transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
                    }}
                  >
                    <span className={`text-[10px] md:text-xs font-bold leading-tight px-2 ${
                      isActive ? 'text-accent' : 'text-white/90'
                    }`}>
                      {trait.name}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-card-border"
        >
          {languages.map((lang) => (
            <span key={lang.name} className="text-xs px-3 py-1.5 bg-card-bg rounded-full border border-card-border flex items-center gap-1.5">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
              <span className="text-muted">({lang.level})</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
