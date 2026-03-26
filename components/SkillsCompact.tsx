'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect, useMemo } from 'react'
import { Brain, Server, LineChart, BarChart3, Database, Users } from 'lucide-react'

const skillCategories = [
  {
    name: "AI Engineering",
    icon: Brain,
    color: '#8b5cf6',
    skills: [
      "LLMs", "AI Agents", "Agentic AI", "LangChain", "LangGraph",
      "LangSmith", "RAG Pipelines", "Vector Embeddings", "Prompt Engineering",
      "Context Engineering", "Fine-tuning (LoRA/QLoRA)", "CrewAI"
    ],
  },
  {
    name: "Software Dev",
    icon: Server,
    color: '#3b82f6',
    skills: [
      "Python", "FastAPI", "Django", "Flask", "SQLAlchemy",
      "Pydantic V2", "REST APIs", "Async Programming", "Streamlit",
      "WebSockets", "Orchestration", "State Management", "CI/CD", "Git"
    ],
  },
  {
    name: "Machine Learning",
    icon: LineChart,
    color: '#10b981',
    skills: [
      "TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "Statistics",
      "CNN/RNN/LSTM", "Transfer Learning", "Transformers",
      "NLP", "Computer Vision", "OpenCV"
    ],
  },
  {
    name: "Data & BI",
    icon: BarChart3,
    color: '#f59e0b',
    skills: [
      "SQL", "QuickSight", "Power BI", "Pandas", "NumPy",
      "Data Pipelines", "ETL", "Data Validation", "EDA",
      "Churn Analysis", "A/B Testing", "Data Engineering"
    ],
  },
  {
    name: "Database & Cloud",
    icon: Database,
    color: '#f97316',
    skills: [
      "PostgreSQL", "MongoDB", "Redis", "Pinecone", "ChromaDB",
      "AWS (Lambda, S3, Textract)", "Docker", "Hadoop", "Hive"
    ],
  },
  {
    name: "Leadership",
    icon: Users,
    color: '#ec4899',
    skills: [
      "Agile PM (APMG)", "Team Lead", "SDLC", "Sprint Planning",
      "Code Reviews", "Mentorship", "Stakeholder Mgmt",
      "Product Strategy", "Curriculum Design"
    ],
  },
]

// Proficiency levels per category (for radar shape)
const proficiency = [0.95, 0.9, 0.8, 0.75, 0.7, 0.85]

// ═══════════════════════════════════════════════════════════════════
// RADAR CHART
// ═══════════════════════════════════════════════════════════════════

function RadarChart({ selected, onSelect }: { selected: number; onSelect: (i: number) => void }) {
  const cx = 160, cy = 160, maxR = 120

  const getPoint = (index: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / 6 - Math.PI / 2
    return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius }
  }

  const radarPoints = proficiency.map((p, i) => getPoint(i, p * maxR))
  const radarPath = radarPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z'
  const rings = [0.25, 0.5, 0.75, 1.0]

  return (
    <div className="relative flex-shrink-0" style={{ width: 320, height: 320 }}>
      <svg width={320} height={320} className="absolute inset-0">
        {/* Grid rings */}
        {rings.map((r) => (
          <polygon
            key={r}
            points={Array.from({ length: 6 }, (_, i) => {
              const p = getPoint(i, r * maxR)
              return `${p.x},${p.y}`
            }).join(' ')}
            fill="none"
            stroke="#1a1f2e"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {skillCategories.map((_, i) => {
          const p = getPoint(i, maxR)
          return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#1a1f2e" strokeWidth="1" />
        })}

        {/* Filled radar */}
        <motion.path
          d={radarPath}
          fill="rgba(94, 234, 212, 0.08)"
          stroke="#5EEAD4"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Data points */}
        {radarPoints.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={selected === i ? 7 : 4}
            fill={selected === i ? skillCategories[i].color : '#5EEAD4'}
            stroke="#0f1117"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onClick={() => onSelect(i)}
          />
        ))}
      </svg>

      {/* Category labels */}
      {skillCategories.map((cat, i) => {
        const p = getPoint(i, maxR + 28)
        return (
          <button
            key={cat.name}
            className="absolute text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-all duration-300 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: p.x,
              top: p.y,
              color: selected === i ? cat.color : '#6b7280',
            }}
            onClick={() => onSelect(i)}
          >
            {cat.name}
          </button>
        )
      })}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// MINI CONSTELLATION — for sub-skills on the right
// ═══════════════════════════════════════════════════════════════════

function SkillConstellation({ skills, color }: { skills: string[]; color: string }) {
  const size = 400
  const cx = size / 2, cy = size / 2

  // Spread nodes in a spacious layout — 2 rings with even distribution
  const positions = useMemo(() => {
    const innerCount = Math.ceil(skills.length / 2)
    const outerCount = skills.length - innerCount
    const innerR = 80
    const outerR = 155

    return skills.map((_, i) => {
      if (i < innerCount) {
        const angle = (i * 2 * Math.PI) / innerCount - Math.PI / 2
        return { x: cx + Math.cos(angle) * innerR, y: cy + Math.sin(angle) * innerR }
      } else {
        const j = i - innerCount
        const angle = (j * 2 * Math.PI) / outerCount - Math.PI / 2 + Math.PI / outerCount
        return { x: cx + Math.cos(angle) * outerR, y: cy + Math.sin(angle) * outerR }
      }
    })
  }, [skills, cx, cy])

  return (
    <div className="relative" style={{ width: size, height: size, margin: '0 auto' }}>
      {/* Connection lines — faint */}
      <svg className="absolute inset-0 pointer-events-none" viewBox={`0 0 ${size} ${size}`}>
        {/* Lines between adjacent outer ring nodes */}
        {positions.map((pos, i) => {
          const next = positions[(i + 1) % positions.length]
          return (
            <motion.line
              key={`adj-${i}`}
              x1={pos.x} y1={pos.y}
              x2={next.x} y2={next.y}
              stroke={color}
              strokeWidth="0.5"
              strokeOpacity="0.07"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: i * 0.03 }}
            />
          )
        })}
        {/* Lines from each node to center — very faint */}
        {positions.map((pos, i) => (
          <motion.line
            key={`ctr-${i}`}
            x1={cx} y1={cy}
            x2={pos.x} y2={pos.y}
            stroke={color}
            strokeWidth="0.3"
            strokeOpacity="0.04"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
          />
        ))}
      </svg>

      {/* Skill nodes — pills with random shimmer */}
      {skills.map((skill, i) => {
        const pos = positions[i]
        // Stagger the shimmer so different pills pulse at different times
        const shimmerDelay = (i * 1.7) % 5
        const shimmerDuration = 3 + (i % 3)
        return (
          <motion.div
            key={skill}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: pos.x, top: pos.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05, type: 'spring', stiffness: 200 }}
          >
            <motion.div
              className="px-2.5 py-1.5 rounded-full text-[10px] font-medium whitespace-nowrap cursor-default"
              style={{
                backgroundColor: `${color}12`,
                color: color,
                border: `1px solid ${color}20`,
              }}
              animate={{
                boxShadow: [
                  `0 0 0px ${color}00`,
                  `0 0 20px ${color}45`,
                  `0 0 0px ${color}00`,
                ],
                backgroundColor: [
                  `${color}12`,
                  `${color}30`,
                  `${color}12`,
                ],
                borderColor: [
                  `${color}20`,
                  `${color}60`,
                  `${color}20`,
                ],
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: shimmerDuration,
                delay: shimmerDelay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                backgroundColor: `${color}25`,
                borderColor: `${color}50`,
                scale: 1.1,
                boxShadow: `0 0 16px ${color}30`,
              }}
            >
              {skill}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════

export default function SkillsCompact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [selected, setSelected] = useState(0) // AI Engineering by default

  const cat = skillCategories[selected]

  return (
    <section id="skills" className="py-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          {/* Left — Radar chart */}
          <RadarChart selected={selected} onSelect={setSelected} />

          {/* Right — Category name + skill constellation */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {/* Category header */}
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${cat.color}20` }}>
                    <cat.icon size={20} style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: cat.color }}>{cat.name}</h3>
                </div>

                {/* Constellation */}
                <SkillConstellation skills={cat.skills} color={cat.color} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
