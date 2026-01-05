'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Zap, Building2, Calendar } from 'lucide-react'
import { projects } from '@/data/portfolio-data'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Highlights from my work in AI and data engineering</p>
      </motion.div>

      {/* Featured Projects */}
      <div className="space-y-6 mb-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card cursor-pointer"
            onClick={() => setExpandedProject(expandedProject === index ? null : index)}
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-muted text-sm">
                    <Building2 size={14} />
                    {project.company}
                  </div>
                  <div className="flex items-center gap-1 text-muted text-sm">
                    <Calendar size={14} />
                    {project.period}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted mb-4">{project.problem}</p>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{ height: expandedProject === index ? 'auto' : 0, opacity: expandedProject === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-card-border space-y-4">
                    <div>
                      <h4 className="font-medium text-accent mb-2 flex items-center gap-2">
                        <Zap size={16} />
                        Technical Approach
                      </h4>
                      <p className="text-muted text-sm">{project.approach}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-accent mb-2">Impact</h4>
                      <p className="text-muted text-sm">{project.impact}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-accent mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="skill-chip text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <button className="text-muted hover:text-accent transition-colors self-start">
                {expandedProject === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-6">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (featuredProjects.length + index) * 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                    {project.category}
                  </span>
                  <span className="text-muted text-xs">{project.period}</span>
                </div>
                <h4 className="font-semibold mb-2">{project.title}</h4>
                <p className="text-muted text-sm mb-4">{project.problem}</p>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs text-muted">
                      {tech}{project.techStack.indexOf(tech) < 3 && project.techStack.length > 1 ? ' •' : ''}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs text-muted">+{project.techStack.length - 4} more</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
