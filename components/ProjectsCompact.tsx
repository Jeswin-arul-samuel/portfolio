'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Building2 } from 'lucide-react'
import { projects } from '@/data/portfolio-data'

export default function ProjectsCompact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  // Only show top 4 featured projects
  const topProjects = projects.filter(p => p.featured).slice(0, 4)

  return (
    <section id="projects" className="py-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>

        <div className="space-y-4">
          {topProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card cursor-pointer"
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted text-xs">
                      <Building2 size={12} />
                      {project.company} • {project.period}
                    </span>
                  </div>

                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted text-sm line-clamp-2">{project.problem}</p>

                  {/* Expanded Content */}
                  {expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-card-border space-y-3"
                    >
                      <div>
                        <h4 className="text-xs font-semibold text-accent mb-1">Approach</h4>
                        <p className="text-muted text-sm">{project.approach}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-accent mb-1">Impact</h4>
                        <p className="text-muted text-sm">{project.impact}</p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-0.5 bg-background rounded text-muted">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                <button className="text-muted hover:text-accent transition-colors flex-shrink-0">
                  {expandedProject === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
