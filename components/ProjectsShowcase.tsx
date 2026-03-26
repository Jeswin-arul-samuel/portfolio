'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  ArrowRight,
  CheckCircle2,
  Circle,
  ExternalLink,
} from 'lucide-react'
import {
  projectsShowcaseData,
  colorSchemes,
  type ProjectShowcase,
  type ColorScheme,
  type IconCard,
  type StatItem,
  type FlowStep,
  type ArchLayer,
  type DesignDecision,
  type TechItem,
  type AgentDomain,
  type AgentEntry,
} from '@/data/projects-showcase-data'

// =============================================================================
// HELPERS
// =============================================================================

function getScheme(project: ProjectShowcase): ColorScheme {
  return colorSchemes[project.colorScheme]
}

// Section IDs for side navigation
const SECTIONS = [
  { id: 'title', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'stats', label: 'Market' },
  { id: 'solution', label: 'Solution' },
  { id: 'flow', label: 'Journey' },
  { id: 'agents', label: 'Agents' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'tech', label: 'Tech Stack' },
  { id: 'status', label: 'Status' },
]

// =============================================================================
// ANIMATED STAT COUNTER
// =============================================================================

function AnimatedStat({ value, label, scheme }: { value: string; label: string; scheme: ColorScheme }) {
  const [display, setDisplay] = useState('0')
  useEffect(() => {
    const match = value.match(/(\d+\.?\d*)/)
    if (!match) { setDisplay(value); return }
    const target = parseFloat(match[1])
    const prefix = value.substring(0, value.indexOf(match[1]))
    const suffix = value.substring(value.indexOf(match[1]) + match[1].length)
    const isFloat = match[1].includes('.')
    const start = performance.now()
    const ease = (t: number) => 1 - Math.pow(1 - t, 3)
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1500, 1)
      const v = ease(p) * target
      setDisplay(`${prefix}${isFloat ? v.toFixed(2) : Math.round(v)}${suffix}`)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [value])
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black" style={{ color: scheme.accent }}>{display}</div>
      <div className="text-xs mt-2 leading-tight" style={{ color: scheme.textMuted }}>{label}</div>
    </div>
  )
}

// =============================================================================
// SLIDE PRIMITIVES
// =============================================================================

function Slide({ children, className = '', id, scheme }: { children: React.ReactNode; className?: string; id?: string; scheme: ColorScheme }) {
  return (
    <div id={id} className={`px-6 md:px-12 lg:pl-20 py-12 md:py-16 ${className}`} style={{ borderBottomColor: scheme.cardBorder, borderBottomWidth: '1px' }}>
      {children}
    </div>
  )
}

function SectionHeader({ label, heading, scheme }: { label: string; heading: string; scheme: ColorScheme }) {
  return (
    <div className="mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[3px] mb-1.5" style={{ color: scheme.accent }}>{label}</p>
      <h2 className="text-lg md:text-xl font-bold leading-snug" style={{ color: scheme.heading }}>{heading}</h2>
    </div>
  )
}

// =============================================================================
// PROBLEM SLIDE
// =============================================================================

function ProblemSlide({ heading, cards, scheme }: { heading: string; cards: IconCard[]; scheme: ColorScheme }) {
  return (
    <Slide id="problem" scheme={scheme}>
      <SectionHeader label="The Problem" heading={heading} scheme={scheme} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4 p-5 rounded-xl"
            style={{ backgroundColor: scheme.cardBg, border: `1px solid ${scheme.cardBorder}` }}
          >
            <div className="text-2xl flex-shrink-0">{card.icon}</div>
            <div>
              <h4 className="font-semibold text-sm mb-1" style={{ color: scheme.heading }}>{card.title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: scheme.textMuted }}>{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  )
}

// =============================================================================
// STATS SLIDE
// =============================================================================

function StatsSlide({ heading, items, supportCards, scheme }: { heading: string; items: StatItem[]; supportCards?: IconCard[]; scheme: ColorScheme }) {
  return (
    <Slide id="stats" scheme={scheme}>
      <div className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: scheme.cardBg, border: `1px solid ${scheme.cardBorder}` }}>
        <SectionHeader label="Why This Matters" heading={heading} scheme={scheme} />
        <div className={`grid gap-8 mb-8 ${items.length === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'}`}>
          {items.map((item, i) => (
            <AnimatedStat key={i} value={item.value} label={item.label} scheme={scheme} />
          ))}
        </div>
        {supportCards && supportCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {supportCards.map((card, i) => (
              <div key={i} className="p-4 rounded-lg" style={{ backgroundColor: `${scheme.bg}80`, border: `1px solid ${scheme.cardBorder}50` }}>
                <div className="flex items-start gap-3">
                  <span className="text-lg">{card.icon}</span>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ color: scheme.heading }}>{card.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: scheme.textMuted }}>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Slide>
  )
}

// =============================================================================
// SOLUTION SLIDE
// =============================================================================

function SolutionSlide({ heading, cards, scheme }: { heading: string; cards: IconCard[]; scheme: ColorScheme }) {
  return (
    <Slide id="solution" scheme={scheme}>
      <SectionHeader label="The Solution" heading={heading} scheme={scheme} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="p-5 rounded-xl transition-colors"
            style={{ backgroundColor: scheme.cardBg, border: `1px solid ${scheme.accentMuted}` }}
          >
            <div className="text-2xl mb-3">{card.icon}</div>
            <h4 className="font-semibold text-sm mb-2" style={{ color: scheme.heading }}>{card.title}</h4>
            <p className="text-xs leading-relaxed" style={{ color: scheme.textMuted }}>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </Slide>
  )
}

// =============================================================================
// FLOW / JOURNEY SLIDE
// =============================================================================

function FlowSlide({ heading, steps, secondaryFlow, scheme }: { heading: string; steps: FlowStep[]; secondaryFlow?: { heading: string; steps: FlowStep[] }; scheme: ColorScheme }) {
  const renderSteps = (items: FlowStep[]) => (
    <div className="flex flex-wrap items-start justify-center gap-2 md:gap-0">
      {items.map((step, i) => (
        <div key={i} className="flex items-center">
          <div className="flex flex-col items-center text-center w-24 md:w-28">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-2 relative" style={{ backgroundColor: scheme.cardBg, border: `2px solid ${scheme.accentMuted}` }}>
              {step.icon}
              <span className="absolute -top-1 -right-1 w-5 h-5 text-[10px] font-bold rounded-full flex items-center justify-center text-white" style={{ backgroundColor: scheme.accent }}>{i + 1}</span>
            </div>
            <p className="text-xs font-semibold mb-0.5" style={{ color: scheme.heading }}>{step.label}</p>
            <p className="text-[10px] leading-tight" style={{ color: scheme.textMuted }}>{step.description}</p>
          </div>
          {i < items.length - 1 && <ArrowRight size={14} className="flex-shrink-0 mx-1 hidden md:block" style={{ color: scheme.accentMuted }} />}
        </div>
      ))}
    </div>
  )

  return (
    <Slide id="flow" scheme={scheme}>
      <SectionHeader label="User Journey" heading={heading} scheme={scheme} />
      {renderSteps(steps)}
      {secondaryFlow && (
        <div className="mt-10">
          <h3 className="text-lg font-bold mb-6" style={{ color: scheme.heading }}>{secondaryFlow.heading}</h3>
          {renderSteps(secondaryFlow.steps)}
        </div>
      )}
    </Slide>
  )
}

// =============================================================================
// AGENTS SLIDE
// =============================================================================

function AgentsSlide({ heading, domains, entries, notes, scheme }: { heading: string; domains?: AgentDomain[]; entries?: AgentEntry[]; notes?: string[]; scheme: ColorScheme }) {
  return (
    <Slide id="agents" scheme={scheme}>
      <SectionHeader label="Agent Architecture" heading={heading} scheme={scheme} />

      {domains && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((domain, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              className="p-4 rounded-xl" style={{ backgroundColor: scheme.cardBg, border: `1px solid ${scheme.cardBorder}` }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{domain.icon}</span>
                <h4 className="font-semibold text-sm" style={{ color: scheme.heading }}>{domain.name}</h4>
                <span className="ml-auto px-2 py-0.5 text-[10px] font-bold rounded-full" style={{ backgroundColor: scheme.accentMuted, color: scheme.accent }}>{domain.count}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {domain.agents.map((agent) => (
                  <span key={agent} className="text-[10px] px-2 py-0.5 rounded-full font-mono" style={{ backgroundColor: scheme.bg, color: scheme.textMuted }}>{agent}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {entries && (
        <div className="space-y-0">
          {entries.map((agent, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
              <div className="p-4 rounded-lg" style={{ backgroundColor: scheme.cardBg, border: `1px solid ${scheme.cardBorder}` }}>
                <div className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">{agent.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm" style={{ color: scheme.accent }}>{agent.name}</span>
                      {agent.tech && <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: scheme.bg, color: scheme.textMuted }}>{agent.tech}</span>}
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: scheme.textMuted }}>{agent.description}</p>
                  </div>
                </div>
              </div>
              {i < entries.length - 1 && <div className="flex justify-center py-0.5"><ChevronDown size={14} style={{ color: scheme.accentMuted }} /></div>}
            </motion.div>
          ))}
        </div>
      )}

      {notes && notes.length > 0 && (
        <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: `${scheme.cardBg}80`, border: `1px solid ${scheme.cardBorder}50` }}>
          {notes.map((note, i) => <p key={i} className="text-xs leading-relaxed mb-2 last:mb-0" style={{ color: scheme.textMuted }}>{note}</p>)}
        </div>
      )}
    </Slide>
  )
}

// =============================================================================
// ARCHITECTURE SLIDE
// =============================================================================

function ArchitectureSlide({ heading, layers, scheme }: { heading: string; layers: ArchLayer[]; scheme: ColorScheme }) {
  return (
    <Slide id="architecture" scheme={scheme}>
      <SectionHeader label="System Architecture" heading={heading} scheme={scheme} />
      <div className="space-y-0">
        {layers.map((layer, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <div className="rounded-xl p-4" style={{ backgroundColor: `${scheme.accent}08`, border: `1px solid ${scheme.accentMuted}` }}>
              <div className="text-[10px] font-bold uppercase tracking-[3px] mb-3" style={{ color: scheme.accent }}>{layer.name}</div>
              <div className="flex flex-wrap gap-2">
                {layer.boxes.map((box, j) => (
                  <div key={j} className="px-3 py-2 rounded-lg min-w-[120px]" style={{ backgroundColor: scheme.cardBg, border: `1px solid ${scheme.cardBorder}` }}>
                    <div className="text-xs font-semibold" style={{ color: scheme.heading }}>{box.name}</div>
                    <div className="text-[10px]" style={{ color: scheme.textMuted }}>{box.tech}</div>
                  </div>
                ))}
              </div>
            </div>
            {i < layers.length - 1 && <div className="flex justify-center py-1"><ChevronDown size={14} style={{ color: `${scheme.accent}40` }} /></div>}
          </motion.div>
        ))}
      </div>
    </Slide>
  )
}

// =============================================================================
// DECISIONS SLIDE
// =============================================================================

function DecisionsSlide({ heading, items, scheme }: { heading: string; items: DesignDecision[]; scheme: ColorScheme }) {
  return (
    <Slide id="decisions" scheme={scheme}>
      <SectionHeader label="Key Design Decisions" heading={heading} scheme={scheme} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="p-5 rounded-xl" style={{ backgroundColor: scheme.cardBg, border: `1px solid ${scheme.cardBorder}` }}>
            <div className="text-2xl mb-3">{item.icon}</div>
            <h4 className="font-semibold text-sm mb-2" style={{ color: scheme.heading }}>{item.title}</h4>
            <p className="text-xs leading-relaxed" style={{ color: scheme.textMuted }}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Slide>
  )
}

// =============================================================================
// TECH STACK SLIDE
// =============================================================================

function TechSlide({ items, scheme }: { items: TechItem[]; scheme: ColorScheme }) {
  return (
    <Slide id="tech" scheme={scheme}>
      <SectionHeader label="Technology" heading="Built With" scheme={scheme} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
            className="p-4 rounded-xl text-center transition-all" style={{ backgroundColor: scheme.cardBg, border: `1px solid ${scheme.cardBorder}` }}>
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="text-xs font-semibold" style={{ color: scheme.heading }}>{item.name}</div>
            <div className="text-[10px] mt-1" style={{ color: scheme.textMuted }}>{item.description}</div>
          </motion.div>
        ))}
      </div>
    </Slide>
  )
}

// =============================================================================
// STATUS SLIDE
// =============================================================================

function StatusSlide({ built, next, scheme }: { built: string[]; next: string[]; scheme: ColorScheme }) {
  return (
    <Slide id="status" scheme={scheme} className="!border-b-0">
      <SectionHeader label="Implementation Status" heading="Where We Are Today" scheme={scheme} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: scheme.accent }}>Built &amp; Working</h4>
          <ul className="space-y-2">
            {built.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs" style={{ color: scheme.text }}>
                <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: scheme.accent }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: scheme.textMuted }}>Coming Next</h4>
          <ul className="space-y-2">
            {next.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs" style={{ color: scheme.textMuted }}>
                <Circle size={14} className="flex-shrink-0 mt-0.5" style={{ color: `${scheme.accent}50` }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>
  )
}

// =============================================================================
// SIDE NAVIGATION
// =============================================================================

function PresentationNav({ project, activeSection, scheme }: { project: ProjectShowcase; activeSection: string; scheme: ColorScheme }) {
  const availableSections = SECTIONS.filter((s) => {
    if (s.id === 'agents' && !project.agents) return false
    return true
  })

  return (
    <nav
      className="fixed bottom-0 left-0 lg:left-80 right-0 z-[60] flex items-center justify-center overflow-x-auto gap-1.5 px-4 py-2.5 no-scrollbar"
      style={{ backgroundColor: `${scheme.bg}F2`, borderTop: `1px solid ${scheme.cardBorder}`, backdropFilter: 'blur(12px)' }}
    >
      {availableSections.map((section) => {
        const isActive = activeSection === section.id
        return (
          <button
            key={section.id}
            onClick={() => {
              document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap"
            style={{
              backgroundColor: isActive ? scheme.accent : 'transparent',
              color: isActive ? scheme.bg : scheme.textMuted,
              border: isActive ? 'none' : `1px solid ${scheme.cardBorder}`,
            }}
          >
            {section.label}
          </button>
        )
      })}
    </nav>
  )
}

// =============================================================================
// FULL-PAGE PRESENTATION
// =============================================================================

function ProjectPresentation({ project, onClose }: { project: ProjectShowcase; onClose: () => void }) {
  const scheme = getScheme(project)
  const isAgentic = project.category === 'agentic-ai'
  const [activeSection, setActiveSection] = useState('title')

  // Track which section is in view
  useEffect(() => {
    const container = document.getElementById('presentation-scroll')
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { root: container, threshold: 0.3 }
    )

    const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    sections.forEach((el) => observer.observe(el!))
    return () => observer.disconnect()
  }, [project])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 lg:left-80 z-50"
      style={{ backgroundColor: scheme.bg }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-[60] p-2 rounded-full backdrop-blur-sm transition-colors"
        style={{ backgroundColor: `${scheme.cardBg}CC`, border: `1px solid ${scheme.cardBorder}` }}
      >
        <X size={20} style={{ color: scheme.textMuted }} />
      </button>

      {/* Side navigation */}
      <PresentationNav project={project} activeSection={activeSection} scheme={scheme} />

      {/* Scrollable content — bottom padding for nav bar */}
      <div id="presentation-scroll" className="h-full overflow-y-auto pb-14">
        {/* Title Slide */}
        <div
          id="title"
          className="min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${scheme.accent}18 0%, ${scheme.accent}06 50%, transparent 100%)` }}
        >
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full opacity-[0.07]" style={{ background: `radial-gradient(circle, ${scheme.accent}, transparent 70%)` }} />
          <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] rounded-full opacity-[0.07]" style={{ background: `radial-gradient(circle, ${scheme.accent}, transparent 70%)` }} />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 text-[10px] font-bold uppercase rounded-full" style={{ backgroundColor: scheme.accentMuted, color: scheme.accent }}>
                {isAgentic ? 'Agentic AI' : 'Full-Stack App'}
              </span>
              <span className="px-3 py-1 text-[10px] rounded-full" style={{
                backgroundColor: project.status === 'production' ? '#22c55e20' : project.status === 'in-progress' ? '#eab30820' : '#3b82f620',
                color: project.status === 'production' ? '#4ade80' : project.status === 'in-progress' ? '#fbbf24' : '#60a5fa',
              }}>
                {project.status === 'production' ? 'Production' : project.status === 'in-progress' ? 'In Progress' : 'Complete'}
              </span>
            </div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4" style={{ color: scheme.heading }}>
              {project.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-light mb-3" style={{ color: scheme.text }}>
              {project.tagline}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-xs uppercase tracking-[3px]" style={{ color: scheme.textMuted }}>
              {project.subtitle}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-sm mt-6" style={{ color: scheme.textMuted }}>
              {project.company} &middot; {project.period}
            </motion.p>

            {project.demoUrl && (
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: scheme.accent, color: scheme.bg }}
              >
                <ExternalLink size={14} />
                View Live Demo
              </motion.a>
            )}
          </div>
        </div>

        {/* Content Slides */}
        <ProblemSlide heading={project.problem.heading} cards={project.problem.cards} scheme={scheme} />
        <StatsSlide heading={project.stats.heading} items={project.stats.items} supportCards={project.stats.supportCards} scheme={scheme} />
        <SolutionSlide heading={project.solution.heading} cards={project.solution.cards} scheme={scheme} />
        <FlowSlide heading={project.flow.heading} steps={project.flow.steps} secondaryFlow={project.flow.secondaryFlow} scheme={scheme} />
        {project.agents && <AgentsSlide heading={project.agents.heading} domains={project.agents.domains} entries={project.agents.entries} notes={project.agents.notes} scheme={scheme} />}
        <ArchitectureSlide heading={project.architecture.heading} layers={project.architecture.layers} scheme={scheme} />
        <DecisionsSlide heading={project.decisions.heading} items={project.decisions.items} scheme={scheme} />
        <TechSlide items={project.tech} scheme={scheme} />
        <StatusSlide built={project.statusSection.built} next={project.statusSection.next} scheme={scheme} />
      </div>
    </motion.div>
  )
}

// =============================================================================
// CATEGORY SELECTOR — lightning split screen
// =============================================================================

// The lightning bolt edge — a jagged line from top-right to bottom-left
// Defined as percentage points. The top half's bottom edge and bottom half's top edge
// both follow this path, creating the lightning shape between them.
const BOLT_POINTS = [
  { x: 100, y: 0 },    // start top-right corner
  { x: 72, y: 22 },    // diagonal down-left
  { x: 80, y: 30 },    // zag right (1st zap)
  { x: 55, y: 42 },    // zag left
  { x: 63, y: 50 },    // zag right (2nd zap)
  { x: 38, y: 62 },    // zag left (3rd zap)
  { x: 0, y: 100 },    // end bottom-left corner
]

function buildClipTop(): string {
  // Top half: start top-left → top-right → follow bolt jagged edge down to bottom-left → back to start
  const boltStr = BOLT_POINTS.map(p => `${p.x}% ${p.y}%`).join(', ')
  return `polygon(0% 0%, 100% 0%, ${boltStr})`
}

function buildClipBottom(): string {
  // Bottom half: follow bolt from top-right to bottom-left → bottom-left corner → bottom-right → top-right
  // This traces the bolt edge then goes around the bottom
  const boltStr = BOLT_POINTS.map(p => `${p.x}% ${p.y}%`).join(', ')
  return `polygon(${boltStr}, 0% 100%, 100% 100%)`
}

function CategorySelector({ onSelect }: { onSelect: (cat: 'agentic-ai' | 'fullstack') => void }) {
  const [exiting, setExiting] = useState<'agentic-ai' | 'fullstack' | null>(null)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleSelect = (cat: 'agentic-ai' | 'fullstack') => {
    setExiting(cat)
    setTimeout(() => onSelect(cat), 650)
  }

  const clipTop = buildClipTop()
  const clipBottom = buildClipBottom()

  // SVG bolt path for the glowing line between halves
  const boltSvgPath = BOLT_POINTS.map((p, i) =>
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ')

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '100vh' }}>

      {/* Top half — Agentic AI */}
      <motion.div
        className="absolute inset-0 cursor-pointer group"
        style={{ clipPath: clipTop, zIndex: 10 }}
        initial={{ x: '-110%', y: '-60%' }}
        animate={
          exiting === 'fullstack' ? { x: '-110%', y: '-60%' }
          : exiting === 'agentic-ai' ? { x: 0, y: 0 }
          : entered ? { x: 0, y: 0 }
          : { x: '-110%', y: '-60%' }
        }
        transition={
          exiting ? { duration: 0.55, ease: [0.55, 0, 1, 0.45] }
          : { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0 }
        }
        onClick={() => handleSelect('agentic-ai')}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1030] via-[#150d25] to-[#100a1a] group-hover:from-[#241540] group-hover:via-[#1c1030] transition-all duration-500" />
        <div className="relative h-full flex flex-col items-start justify-start pt-[18%] pl-[8%] md:pt-[16%] md:pl-[10%]">
          <span className="text-5xl mb-4">🤖</span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tight leading-none">Agentic AI</h3>
          <p className="text-sm text-[#9B7AB8]/80 mb-4 max-w-xs">Multi-agent systems &middot; LangGraph pipelines &middot; Autonomous AI solutions</p>
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#9B7AB8]/50 group-hover:text-[#9B7AB8] transition-colors">
            5 Projects →
          </span>
        </div>
      </motion.div>

      {/* Bottom half — Full-Stack Apps */}
      <motion.div
        className="absolute inset-0 cursor-pointer group"
        style={{ clipPath: clipBottom, zIndex: 10 }}
        initial={{ x: '110%', y: '60%' }}
        animate={
          exiting === 'agentic-ai' ? { x: '110%', y: '60%' }
          : exiting === 'fullstack' ? { x: 0, y: 0 }
          : entered ? { x: 0, y: 0 }
          : { x: '110%', y: '60%' }
        }
        transition={
          exiting ? { duration: 0.55, ease: [0.55, 0, 1, 0.45] }
          : { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }
        }
        onClick={() => handleSelect('fullstack')}
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-[#0a1a16] via-[#0d201a] to-[#081510] group-hover:from-[#0e2820] group-hover:via-[#112a22] transition-all duration-500" />
        <div className="relative h-full flex flex-col items-end justify-end pb-[20%] pr-[8%] md:pb-[18%] md:pr-[10%]">
          <span className="text-5xl mb-4">⚡</span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tight leading-none text-right">Full-Stack Apps</h3>
          <p className="text-sm text-emerald-400/60 mb-4 text-right max-w-xs">End-to-end applications &middot; Mobile apps &middot; Production platforms</p>
          <span className="text-xs font-bold uppercase tracking-[3px] text-emerald-400/40 group-hover:text-emerald-400 transition-colors">
            3 Projects →
          </span>
        </div>
      </motion.div>

      {/* Lightning bolt glow line — sits on the seam */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 20 }}
        initial={{ opacity: 0 }}
        animate={exiting ? { opacity: 0 } : entered ? { opacity: 1 } : { opacity: 0 }}
        transition={exiting ? { duration: 0.2 } : { duration: 0.5, delay: 0.7 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
          <defs>
            <linearGradient id="boltLineGrad" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9B7AB8" />
              <stop offset="40%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <filter id="boltGlow2">
              <feGaussianBlur stdDeviation="0.8" result="blur1" />
              <feGaussianBlur stdDeviation="2" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d={boltSvgPath}
            fill="none"
            stroke="url(#boltLineGrad)"
            filter="url(#boltGlow2)"
            vectorEffect="non-scaling-stroke"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Background */}
      <div className="absolute inset-0 bg-background -z-10" />
    </div>
  )
}

// =============================================================================
// BINDER RING PROJECT LIST — vertical spine with ring connectors
// =============================================================================

function BinderRingList({
  projects,
  accentColor,
  accentHex,
  onSelectProject,
  onBack,
  title,
}: {
  projects: ProjectShowcase[]
  accentColor: string
  accentHex: string
  onSelectProject: (p: ProjectShowcase) => void
  onBack: () => void
  title: string
}) {
  const dentSize = 32 // semicircle diameter

  return (
    <div className="w-full">
      {/* Back button + title */}
      <div className="flex items-center gap-3 mb-10">
        <button
          onClick={onBack}
          className="p-1.5 rounded-full bg-card-bg border border-card-border hover:border-accent transition-colors"
        >
          <ChevronLeft size={18} className="text-muted" />
        </button>
        <h2 className={`text-xl font-bold ${accentColor}`}>{title}</h2>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Card with semicircle dent on left edge */}
            <div
              className="relative cursor-pointer group transition-all duration-300"
              onClick={() => onSelectProject(project)}
              style={{
                backgroundColor: 'var(--card-bg, #262644)',
                border: '1px solid var(--card-border, #2a2a3e)',
                borderRadius: '12px',
                padding: '20px 24px 20px 40px',
                clipPath: `path('M 0,0 L 100%,0 L 100%,100% L 0,100% L 0,${50 + dentSize / 2}% A 1,1 0 0,1 0,${50 - dentSize / 2}% Z')`,
              }}
            >
              {/* Dent border accent — a semicircle sitting in the dent */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: dentSize + 2,
                  height: dentSize + 2,
                  left: -(dentSize / 2) - 1,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  borderRadius: '50%',
                  border: `2px solid ${accentHex}`,
                  opacity: 0.35,
                }}
              />

              {/* 2-column layout */}
              <div className="flex gap-6">
                {/* Left column — project info */}
                <div className="flex-1 min-w-0">
                  {/* Status + period */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-muted">{project.period}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      project.status === 'production' ? 'bg-green-500/15 text-green-400'
                      : project.status === 'in-progress' ? 'bg-yellow-500/15 text-yellow-400'
                      : 'bg-blue-500/15 text-blue-400'
                    }`}>
                      {project.status === 'production' ? 'Production' : project.status === 'in-progress' ? 'In Progress' : 'Complete'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors mb-1">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs text-muted leading-relaxed mb-3">{project.tagline}</p>

                  {/* Company + key stats */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] text-muted/60">{project.company}</span>
                    {project.stats.items.slice(0, 2).map((stat, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-card-border/50 text-muted">
                        {stat.value} {stat.label.split(' ').slice(0, 3).join(' ')}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right area — demo link pill or view arrow */}
                <div className="flex-shrink-0 flex items-center ml-auto pl-4">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
                      style={{ backgroundColor: accentHex, color: '#fff' }}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-semibold whitespace-nowrap">Live Demo</span>
                    </a>
                  ) : (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight size={22} className="text-accent" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

type ViewState = { type: 'landing' } | { type: 'category'; category: 'agentic-ai' | 'fullstack' } | { type: 'project'; project: ProjectShowcase }

export default function ProjectsShowcase() {
  const [view, setView] = useState<ViewState>({ type: 'landing' })

  // Sort reverse chronological within each category
  const sortedByCategory = (cat: 'agentic-ai' | 'fullstack') =>
    [...projectsShowcaseData]
      .filter((p) => p.category === cat)
      .sort((a, b) => b.year - a.year)

  const closePresentation = useCallback(() => setView({ type: 'landing' }), [])
  const backToCategory = useCallback(() => {
    if (view.type === 'project') {
      setView({ type: 'category', category: view.project.category })
    }
  }, [view])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (view.type === 'project') backToCategory()
        else if (view.type === 'category') setView({ type: 'landing' })
      }
    }
    if (view.type === 'project') {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [view, backToCategory])

  return (
    <section className="w-full">
      {/* Landing — two category cards */}
      {view.type === 'landing' && (
        <CategorySelector onSelect={(cat) => setView({ type: 'category', category: cat })} />
      )}

      {/* Category — binder ring list of projects */}
      {view.type === 'category' && view.category === 'agentic-ai' && (
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
          <BinderRingList
            projects={sortedByCategory('agentic-ai')}
            accentColor="text-accent"
            accentHex="#5EEAD4"
            onSelectProject={(p) => setView({ type: 'project', project: p })}
            onBack={() => setView({ type: 'landing' })}
            title="Agentic AI Projects"
          />
        </div>
      )}
      {view.type === 'category' && view.category === 'fullstack' && (
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
          <BinderRingList
            projects={sortedByCategory('fullstack')}
            accentColor="text-emerald-400"
            accentHex="#10b981"
            onSelectProject={(p) => setView({ type: 'project', project: p })}
            onBack={() => setView({ type: 'landing' })}
            title="Full-Stack Applications"
          />
        </div>
      )}

      {/* Project presentation — full-page overlay */}
      <AnimatePresence>
        {view.type === 'project' && (
          <ProjectPresentation project={view.project} onClose={backToCategory} />
        )}
      </AnimatePresence>
    </section>
  )
}
