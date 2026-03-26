'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Brain,
  BarChart3,
  Sparkles,
  Bot,
  Cpu,
  Workflow,
  X,
} from 'lucide-react'

const evolutionSteps = [
  {
    icon: Cpu,
    phase: 'Robotics',
    period: '2015–2017',
    color: 'from-orange-500 to-amber-500',
    glowColor: 'rgba(249, 115, 22, 0.15)',
    title: 'The Pioneer',
    description: 'Started the journey with robotics — building hardware-software systems, learning embedded programming, motor control, and sensor integration from the ground up.',
    skills: ['Arduino', 'ATmega16', 'Embedded C', 'Motors', 'Sensors', 'Control Systems'],
    highlights: [
      'Built line follower, obstacle avoidance, and edge follower robots',
      'Designed school robotics program — increased revenue by 30%',
      '1st place in Micro Mouse Challenge at World Robotics Championship',
    ],
  },
  {
    icon: Workflow,
    phase: 'IoT',
    period: '2017–2018',
    color: 'from-amber-500 to-yellow-500',
    glowColor: 'rgba(234, 179, 8, 0.15)',
    title: 'The Connector',
    description: 'Expanded into Internet of Things — connecting devices over local networks and the internet, building smart automation with MQTT and sensor monitoring.',
    skills: ['MQTT', 'Sensors', 'IoT Automation', 'Python', 'Embedded Systems'],
    highlights: [
      'Designed 2-day IoT workshop handling 150-180 person batches',
      'IoT program drove ~40% company revenue increase',
      'Device control over local network + internet automation',
    ],
  },
  {
    icon: Brain,
    phase: 'ML / DL',
    period: '2018–2020',
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    title: 'The Model Builder',
    description: 'Self-taught machine learning from Andrew Ng\'s course, then designed a 13-week flagship ML program. Deep learning with TensorFlow, CNNs, NLP, and reinforcement learning.',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'CNN/RNN/LSTM', 'NLP', 'Pandas'],
    highlights: [
      'Flagship ML course contributed to 60% revenue increase',
      'Built emotion detection (76% accuracy), disease prediction (87%)',
      'Trained 3000+ professionals across AI, ML, and data science',
    ],
  },
  {
    icon: BarChart3,
    phase: 'Data & BI',
    period: '2021–2023',
    color: 'from-emerald-500 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    title: 'The Data Detective',
    description: 'Enterprise data engineering at Amazon and Informatica. Built data quality systems, audit dashboards, and standardization frameworks across international partners.',
    skills: ['SQL', 'Power BI', 'QuickSight', 'ETL', 'Data Validation', 'JSON Schemas'],
    highlights: [
      'Amazon: audit coverage from <1% to 98%, data readiness 38% → 86%',
      'Informatica: mastered 8 products in 9 months, trained 12 global trainers',
      '4 courses increased sales pipeline by 22%',
    ],
  },
  {
    icon: Sparkles,
    phase: 'Gen AI',
    period: '2024',
    color: 'from-pink-500 to-rose-500',
    glowColor: 'rgba(236, 72, 153, 0.15)',
    title: 'The AI Engineer',
    description: 'Embraced the LLM revolution — building RAG pipelines, agentic systems, and AI-powered applications. Patent intelligence, adaptive tutoring, and vision AI.',
    skills: ['LangChain', 'RAG', 'Vector DBs', 'Prompt Engineering', 'Fine-tuning', 'CrewAI'],
    highlights: [
      'Built IdeaPoke: 4-agent patent intelligence platform',
      'Built GLS: adaptive AI tutor with 9 learning science algorithms',
      'Product Descriptor: BLIP + GPT-4o vision pipeline, deployed on Fly.io',
    ],
  },
  {
    icon: Bot,
    phase: 'Agentic AI',
    period: '2025–Present',
    color: 'from-violet-500 to-purple-600',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    title: 'The AI Architect',
    description: 'Architecting production multi-agent systems with LangGraph, human-in-the-loop pipelines, and enterprise-grade AI solutions for real businesses.',
    skills: ['LangGraph', 'Multi-Agent', 'HITL', 'ReAct', 'State Machines', 'FastAPI'],
    highlights: [
      'Sundaram AI: 28+ agents, 147 tables, production restaurant AI',
      'Cash Reconciliation: 98% accuracy, 2-week close → 2 days',
      'Alumni Connect: Neo4j graph + pgvector hybrid search',
    ],
  },
]

// Climbing path positions — each step is higher than the last
// x: horizontal position (0-100%), y: vertical position from bottom (higher = further up)
// Evenly spaced climb — 6 steps across x and y
const climbPositions = [
  { x: 85, y: 5 },   // Robotics — ground level (bottom-right)
  { x: 70, y: 20 },  // IoT
  { x: 55, y: 35 },  // ML/DL
  { x: 40, y: 50 },  // Data & BI
  { x: 25, y: 65 },  // Gen AI
  { x: 10, y: 80 },  // Agentic AI — summit (top-left)
]

export default function CareerProgression() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  return (
    <section id="career" className="py-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-lg md:text-xl font-bold text-white max-w-2xl mx-auto">
            From soldering robots to architecting production AI — a decade of continuous ascent
          </h2>
        </div>

        {/* Climbing mountain visualization */}
        <div className="relative w-full" style={{ height: 'min(520px, 70vh)' }}>

          {/* Dotted climbing path connecting the nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pathGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              d={climbPositions.map((pos, i) =>
                `${i === 0 ? 'M' : 'L'} ${pos.x}% ${100 - pos.y}%`
              ).join(' ')}
              fill="none"
              stroke="url(#pathGrad)"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
          </svg>

          {/* Step nodes */}
          {evolutionSteps.map((step, index) => {
            const pos = climbPositions[index]
            const isSelected = selectedStep === index

            return (
              <motion.div
                key={step.phase}
                className="absolute cursor-pointer group"
                style={{
                  left: `${pos.x}%`,
                  bottom: `${pos.y}%`,
                  transform: 'translate(-50%, 50%)',
                  zIndex: isSelected ? 30 : 10 + index,
                }}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.12, type: 'spring', stiffness: 200 }}
                onClick={() => setSelectedStep(isSelected ? null : index)}
              >
                {/* Glow behind */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500"
                  style={{
                    backgroundColor: step.glowColor,
                    opacity: isSelected ? 1 : 0,
                    transform: 'scale(2)',
                  }}
                />

                {/* Node card — fixed size */}
                <div className={`relative flex flex-col items-center justify-center gap-1.5 w-[80px] h-[90px] md:w-[100px] md:h-[105px] rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? 'bg-card-bg/95 border-accent/50 shadow-xl scale-110'
                    : 'bg-card-bg/80 border-card-border hover:border-accent/30 hover:scale-105'
                } backdrop-blur-sm`}>
                  {/* Icon */}
                  <div className={`p-2 md:p-2.5 rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}>
                    <step.icon size={20} className="text-white" />
                  </div>

                  {/* Phase label */}
                  <span className="text-[10px] md:text-xs font-bold text-white whitespace-nowrap">{step.phase}</span>
                  <span className="text-[8px] md:text-[10px] text-muted">{step.period}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Detail popup modal */}
        <AnimatePresence>
          {selectedStep !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 lg:left-80 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedStep(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative bg-card-bg border border-card-border rounded-2xl p-6 md:p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedStep(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-accent/10 transition-colors"
                >
                  <X size={18} className="text-muted" />
                </button>

                {(() => {
                  const step = evolutionSteps[selectedStep]
                  return (
                    <>
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}>
                          <step.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-white">{step.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-semibold text-accent">{step.phase}</span>
                            <span className="text-xs text-muted">{step.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted leading-relaxed mb-5">{step.description}</p>

                      {/* Highlights */}
                      <div className="mb-5">
                        <h4 className="text-[10px] font-bold uppercase tracking-[3px] text-accent mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {step.highlights.map((h, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-xs text-muted flex items-start gap-2"
                            >
                              <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                              <span>{h}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[3px] text-accent mb-3">Skills Gained</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.skills.map((skill) => (
                            <span key={skill} className="text-[10px] px-2.5 py-1 rounded-full bg-accent/10 text-accent/80 border border-accent/15">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
