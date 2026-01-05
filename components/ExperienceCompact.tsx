'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
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
  achievements: string[]
  projects?: Project[]
  description?: string
}

export default function ExperienceCompact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({})

  const toggleProject = (key: string) => {
    setExpandedProjects(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section id="experience" className="py-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">Experience</h2>

        <div className="space-y-8">
          {(experience as Experience[]).map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative pl-6 border-l-2 border-card-border hover:border-accent transition-colors"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-card-border bg-background ${
                exp.type === 'current' ? 'border-accent bg-accent' : ''
              }`} />

              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="font-semibold">{exp.role}</h3>
                <span className="text-accent text-sm">@ {exp.company}</span>
              </div>

              <p className="text-muted text-xs mb-3">
                {exp.location} • {exp.period}
              </p>

              {/* Achievements */}
              {exp.achievements.length > 0 && (
                <ul className="space-y-1 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted text-sm flex gap-2">
                      <span className="text-accent">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Projects */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="space-y-3">
                  {exp.projects.map((project, pIndex) => {
                    const projectKey = `${exp.company}-${pIndex}`
                    const isExpanded = expandedProjects[projectKey]

                    return (
                      <div
                        key={projectKey}
                        className="bg-card-bg border border-card-border rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleProject(projectKey)}
                          className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-accent/5 transition-colors"
                        >
                          <span className="font-medium text-sm">{project.name}</span>
                          {isExpanded ? (
                            <ChevronUp size={16} className="text-muted" />
                          ) : (
                            <ChevronDown size={16} className="text-muted" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="px-4 pb-4 space-y-3">
                            <p className="text-muted text-sm">{project.description}</p>

                            {/* Highlights */}
                            <ul className="space-y-1">
                              {project.highlights.map((highlight, hIndex) => (
                                <li key={hIndex} className="text-muted text-xs flex gap-2">
                                  <span className="text-accent">→</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Tech Stack */}
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
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
