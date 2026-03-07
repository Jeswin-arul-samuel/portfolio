'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Brain,
  Code,
  Users,
  Rocket,
  Target,
  Lightbulb,
  TrendingUp,
  Award,
  GraduationCap,
  Globe,
  Zap,
  Shield
} from 'lucide-react'

const whatIDo = [
  { icon: Brain, label: "Architect Agentic AI Systems", description: "Design multi-agent systems with LangGraph, ReAct patterns, and HITL pipelines" },
  { icon: Code, label: "Build Production AI Products", description: "End-to-end development from POC to deployment with 98%+ accuracy" },
  { icon: Users, label: "Lead Engineering Teams", description: "Mentor teams of 12+, conduct code reviews, and drive technical excellence" },
  { icon: GraduationCap, label: "Train & Upskill Professionals", description: "Delivered AI/ML training to 3000+ professionals globally" },
]

const achievements = [
  { value: "98%", label: "Reconciliation Accuracy", sublabel: "Financial AI System" },
  { value: "99%", label: "Audit Coverage", sublabel: "Amazon Project" },
  { value: "60%", label: "Revenue Growth YoY", sublabel: "Product Impact" },
  { value: "3000+", label: "Professionals Trained", sublabel: "Across AI & Data" },
]

const strengths = [
  { icon: Target, label: "Problem Solver", description: "Translate complex business needs into technical solutions" },
  { icon: Rocket, label: "Fast Learner", description: "Quickly adapt to new technologies and frameworks" },
  { icon: Lightbulb, label: "Innovation Driven", description: "Pioneer new approaches, from robotics to Agentic AI" },
  { icon: Shield, label: "Quality Focused", description: "Production-first mindset with rigorous testing" },
  { icon: TrendingUp, label: "Business Acumen", description: "Bridge technical depth with business impact" },
  { icon: Zap, label: "Execution Speed", description: "Rapid prototyping to production deployment" },
]

const languages = [
  { name: "English", level: "Native", flag: "🇬🇧" },
  { name: "Tamil", level: "Native", flag: "🇮🇳" },
  { name: "Hindi", level: "Professional", flag: "🇮🇳" },
  { name: "French", level: "Elementary", flag: "🇫🇷" },
]

export default function AboutCompact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="about" className="py-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Intro */}
        <div className="text-center mb-6">
          <p className="text-muted max-w-2xl mx-auto">
            AI-first technologist with a decade of experience at the intersection of
            <span className="text-accent"> artificial intelligence</span>,
            <span className="text-accent"> data engineering</span>, and
            <span className="text-accent"> technical leadership</span>.
            I build systems that solve real problems and empower teams.
          </p>
        </div>

        {/* What I Do */}
        <div>
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">What I Do</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatIDo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="p-4 rounded-xl bg-card-bg border border-card-border hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{item.label}</h4>
                    <p className="text-xs text-muted">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">Key Achievements</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="text-center p-4 rounded-xl bg-card-bg border border-card-border"
              >
                <p className="text-2xl font-bold gradient-text">{item.value}</p>
                <p className="text-xs font-medium mt-1">{item.label}</p>
                <p className="text-[10px] text-muted">{item.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div>
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">Strengths</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {strengths.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="p-3 rounded-lg bg-card-bg border border-card-border hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <item.icon size={14} className="text-accent" />
                  <h4 className="font-semibold text-xs">{item.label}</h4>
                </div>
                <p className="text-[11px] text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-card-border"
        >
          <span className="text-xs text-muted">Languages:</span>
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
