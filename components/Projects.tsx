'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Zap, Building2, Calendar } from 'lucide-react'
import { projects } from '@/data/portfolio-data'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { extractKeyMetrics, truncateMetric } from '@/lib/projectUtils'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section ref={ref} className="w-full">
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

                <h3 className="text-xl font-semibold mb-4">
                  {project.title}
                </h3>

                {/* Tech Stack - Collapsed State */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="skill-chip text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics - Collapsed State Only */}
                {expandedProject !== index && extractKeyMetrics(project.impact).length > 0 && (
                  <div className="mb-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {extractKeyMetrics(project.impact).map((metric, idx) => (
                        <div key={idx} className="p-3 bg-accent/10 border-2 border-accent/40 rounded-lg hover:border-accent/60 transition-colors">
                          <p className="text-xs text-accent font-semibold line-clamp-2">{truncateMetric(metric, 55)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedProject === index ? 'auto' : 0,
                    opacity: expandedProject === index ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-card-border space-y-4">
                    {/* Problem Description */}
                    <div>
                      <h4 className="font-medium text-accent mb-3">Problem</h4>
                      <div className="text-sm">
                        <MarkdownRenderer content={project.problem} />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-accent mb-3 flex items-center gap-2">
                        <Zap size={16} />
                        Technical Approach
                      </h4>
                      <div className="text-sm">
                        <MarkdownRenderer content={project.approach} />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-accent mb-3">Impact</h4>
                      <div className="text-sm">
                        <MarkdownRenderer content={project.impact} />
                      </div>
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
                  <span className="text-muted text-xs">{project.company}</span>
                  <span className="text-muted text-xs">{project.period}</span>
                </div>
                <h4 className="font-semibold mb-3">{project.title}</h4>
                <div className="text-xs mb-4">
                  <MarkdownRenderer content={project.problem} />
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={tech} className="text-xs text-muted">
                      {tech}
                      {idx < 3 && project.techStack.length > 1 ? ' •' : ''}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs text-muted">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      )}
    </section>
  )
}
