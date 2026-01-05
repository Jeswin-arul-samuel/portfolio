'use client'

import { motion } from 'framer-motion'
import {
  Calendar,
  Brain,
  Database,
  Sparkles,
  FolderKanban,
  Building2,
  Users,
  GraduationCap,
  Cpu,
  Globe,
  Award,
  TrendingUp
} from 'lucide-react'

const experienceStats = [
  { label: 'Total Experience', value: '9', unit: 'Years', icon: Calendar, color: 'from-violet-500 to-purple-600' },
  { label: 'AI / ML', value: '7', unit: 'Years', icon: Brain, color: 'from-blue-500 to-cyan-500' },
  { label: 'Data / BI', value: '6', unit: 'Years', icon: Database, color: 'from-emerald-500 to-teal-500' },
  { label: 'Gen AI / LLMs', value: '2', unit: 'Years', icon: Sparkles, color: 'from-pink-500 to-rose-500' },
  { label: 'Agentic AI', value: '1', unit: 'Year', icon: Cpu, color: 'from-orange-500 to-amber-500' },
]

const projectStats = [
  { label: 'Industry Projects', value: '7', icon: FolderKanban },
  { label: 'Curriculum Projects', value: '13', icon: GraduationCap },
  { label: 'Projects Managed', value: '10+', icon: Building2 },
  { label: 'Products', value: '5+', icon: Brain },
  { label: 'Enterprise Clients', value: '4+', icon: Building2 },
]

const leadershipStats = [
  { label: 'Max Team Size', value: '12', icon: Users },
  { label: 'Professionals Trained', value: '3000+', icon: GraduationCap },
  { label: 'People Mentored', value: '500+', icon: Users },
]

const technicalStats = [
  { label: 'ML Models Built', value: '20+', icon: Cpu },
  { label: 'Technologies', value: '15+', icon: Sparkles },
  { label: 'Certifications', value: '6+', icon: Award },
  { label: 'Domains', value: '3+', icon: Globe },
]

const impactStat = { label: 'Revenue Growth Driven', value: '60%+', icon: TrendingUp }

const keyIndustries = [
  'Finance',
  'Trade Compliance',
  'Hospitality',
  'EdTech',
  'Logistics',
  'Real Estate',
]

export default function IntroSection() {
  return (
    <section className="pt-16 lg:pt-24 pb-8 lg:pb-12">
      {/* Header - Full width, centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-6 lg:px-12 mb-8"
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
          <span>AI & Data Solutions Architect</span>
          <span className="text-muted">•</span>
          <span>Agentic AI Software Architect</span>
          <span className="text-muted">•</span>
          <span>Project Manager</span>
        </h1>
      </motion.div>

      {/* Dashboard Stats - Constrained width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto px-6 lg:px-12"
      >
        <p className="text-muted text-sm mb-6">A snapshot of my professional journey</p>

        {/* Experience Stats - Large Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {experienceStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl bg-card-bg border border-card-border p-4"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
              <stat.icon size={20} className="text-muted mb-2" />
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{stat.value}</span>
                <span className="text-sm text-muted">{stat.unit}</span>
              </div>
              <p className="text-xs text-muted mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Project & Leadership Stats */}
        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="card"
          >
            <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">Projects</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {projectStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <stat.icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="card"
          >
            <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">Leadership</h3>
            <div className="space-y-3">
              {leadershipStats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <stat.icon size={16} className="text-accent" />
                    </div>
                    <p className="text-sm text-muted">{stat.label}</p>
                  </div>
                  <p className="text-xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Stats & Impact */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Technical - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="lg:col-span-2 card"
          >
            <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">Technical</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {technicalStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="p-3 rounded-lg bg-background inline-block mb-2">
                    <stat.icon size={20} className="text-accent" />
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Impact - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="card bg-gradient-to-br from-accent/20 to-accent-dark/20 border-accent/30 flex flex-col items-center justify-center text-center"
          >
            <div className="p-3 rounded-full bg-accent/20 mb-3">
              <TrendingUp size={24} className="text-accent" />
            </div>
            <p className="text-4xl font-bold gradient-text">{impactStat.value}</p>
            <p className="text-sm text-muted mt-1">{impactStat.label}</p>
          </motion.div>
        </div>

        {/* Key Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mt-6 card"
        >
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">Key Industries</h3>
          <div className="flex flex-wrap gap-2">
            {keyIndustries.map((industry) => (
              <span
                key={industry}
                className="px-3 py-1.5 rounded-full text-sm bg-card-border/50 text-muted"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
