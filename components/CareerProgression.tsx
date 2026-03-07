'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Brain,
  BarChart3,
  Sparkles,
  Bot,
  ArrowLeft,
  Cpu,
  Workflow
} from 'lucide-react'

const evolutionSteps = [
  {
    icon: Bot,
    phase: 'Agentic AI',
    period: '2025-Present',
    color: 'from-violet-500 to-purple-600',
    title: 'The AI Architect',
    description: 'Now architecting multi-agent systems with human-in-the-loop pipelines. Building production systems achieving 98% accuracy in complex business workflows.',
    skills: ['LangGraph', 'Multi-Agent', 'HITL', 'ReAct', 'State Management'],
    highlights: [
      'Architected multi-agent reconciliation system (98% accuracy)',
      'Built hospitality AI with ReAct reasoning patterns',
      'Designed HITL pipelines for enterprise workflows'
    ]
  },
  {
    icon: Sparkles,
    phase: 'Gen AI & LLMs',
    period: '2024',
    color: 'from-pink-500 to-rose-500',
    title: 'The AI Engineer',
    description: 'Embraced the LLM revolution, building RAG pipelines, chatbots, and AI-powered applications. Mastered prompt engineering and fine-tuning techniques.',
    skills: ['LangChain', 'RAG', 'Vector DBs', 'Prompt Engineering', 'Fine-tuning'],
    highlights: [
      'Built production RAG systems with 95%+ accuracy',
      'Developed SQL chatbots & document assistants',
      'Mastered prompt engineering & context optimization'
    ]
  },
  {
    icon: BarChart3,
    phase: 'Data & BI',
    period: '2020-2023',
    color: 'from-emerald-500 to-teal-500',
    title: 'The Data Detective',
    description: 'Dove deep into exploratory data analysis, building BI dashboards and mastering the art of extracting insights from raw data. Learned to translate business problems into data-driven solutions.',
    skills: ['SQL', 'Power BI', 'QuickSight', 'ETL', 'EDA', 'Data Validation'],
    highlights: [
      'Built BI dashboards for executive decision-making',
      'Automated reporting pipelines saving 20+ hours/week',
      'Developed data validation frameworks at Informatica'
    ]
  },
  {
    icon: Brain,
    phase: 'ML / DL',
    period: '2018-2019',
    color: 'from-blue-500 to-cyan-500',
    title: 'The Model Builder',
    description: 'Transitioned into machine learning and deep learning, building predictive models and neural networks for complex pattern recognition.',
    skills: ['TensorFlow', 'Keras', 'Scikit-Learn', 'CNN/RNN/LSTM', 'NLP', 'Regression', 'Classification'],
    highlights: [
      'Led ML product development with 60% revenue impact',
      'Built emotion detection & disease prediction systems',
      'Trained 3000+ professionals in AI/ML'
    ]
  },
  {
    icon: Workflow,
    phase: 'IoT',
    period: '2017-2018',
    color: 'from-amber-500 to-yellow-500',
    title: 'The Connector',
    description: 'Expanded into Internet of Things, connecting devices and building smart systems that communicate and respond to the environment.',
    skills: ['Raspberry Pi', 'Sensors', 'MQTT', 'Embedded Systems', 'Python'],
    highlights: [
      'Built connected IoT systems and prototypes',
      'Developed smart automation solutions',
      'Bridged hardware with cloud connectivity'
    ]
  },
  {
    icon: Cpu,
    phase: 'Robotics',
    period: '2015-2017',
    color: 'from-orange-500 to-amber-500',
    title: 'The Pioneer',
    description: 'Started the journey with robotics, building hardware-software systems and understanding the fundamentals of embedded programming and control systems.',
    skills: ['Arduino', 'Motors', 'Sensors', 'C/C++', 'Control Systems'],
    highlights: [
      'Built robotics projects and automation systems',
      'Learned hardware-software integration',
      'Foundation in embedded programming'
    ]
  },
]

export default function CareerProgression() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="career" className="py-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-muted max-w-2xl mx-auto">
            From Pioneer to AI Architect — a decade of continuous evolution
          </p>
        </div>

        {/* Journey Strip - Reverse chronological (newest first) */}
        <div className="overflow-x-auto pb-2 mb-8 -mx-6 px-6">
          <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max">
            {evolutionSteps.map((step, index) => (
              <div key={step.phase} className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}>
                    <step.icon size={16} className="text-white" />
                  </div>
                  <p className="text-[9px] sm:text-xs font-medium mt-1.5 text-center whitespace-nowrap">{step.phase}</p>
                </motion.div>
                {index < evolutionSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="self-start mt-2.5"
                  >
                    <ArrowLeft size={12} className="text-muted" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Evolution Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-500 via-pink-500 via-emerald-500 via-blue-500 to-orange-500 hidden sm:block" />

          <div className="space-y-6">
            {evolutionSteps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                className="flex gap-4"
              >
                {/* Icon */}
                <div className={`relative z-10 p-2.5 rounded-xl bg-gradient-to-br ${step.color} shadow-lg flex-shrink-0`}>
                  <step.icon size={18} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 rounded-xl bg-card-bg border border-card-border hover:border-accent/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">{step.phase}</span>
                    <span className="text-xs text-muted">{step.period}</span>
                  </div>

                  <p className="text-sm text-muted mb-4">{step.description}</p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {step.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs text-muted flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {step.skills.map((skill) => (
                      <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full bg-card-border/50 text-muted">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
