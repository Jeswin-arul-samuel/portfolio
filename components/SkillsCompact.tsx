'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Server, LineChart, BarChart3, Database, Users } from 'lucide-react'

const skillCategories = [
  {
    name: "AI Engineering",
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    chipColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    skills: [
      "LLMs", "AI Agents", "Agentic AI", "LangChain", "LangGraph",
      "LangSmith", "RAG Pipelines", "Vector Embeddings", "Prompt Engineering",
      "Context Engineering", "Fine-tuning (LoRA/QLoRA)", "CrewAI"
    ],
  },
  {
    name: "Software Development",
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
    chipColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    skills: [
      "Python", "FastAPI", "Django", "Flask", "SQLAlchemy",
      "Pydantic V2", "REST APIs", "Async Programming", "Streamlit",
      "WebSockets", "Orchestration", "State Management", "Microservices", "CI/CD", "Git"
    ],
  },
  {
    name: "Machine Learning",
    icon: LineChart,
    color: 'from-emerald-500 to-teal-500',
    chipColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    skills: [
      "TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "Statistics",
      "Regression", "Classification", "Ensembling", "Decision Trees",
      "CNN/RNN/LSTM", "Transfer Learning", "Transformers",
      "Time Series Forecasting", "NLP", "Computer Vision", "OpenCV"
    ],
  },
  {
    name: "Data Analysis & BI",
    icon: BarChart3,
    color: 'from-yellow-500 to-orange-500',
    chipColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    skills: [
      "SQL", "QuickSight", "Power BI", "Pandas", "NumPy",
      "Data Pipelines", "ETL", "Data Validation", "EDA",
      "Churn Analysis", "CLV Analysis", "Cohort Analysis", "A/B Testing",
      "Data Engineering", "PowerCenter", "MDM"
    ],
  },
  {
    name: "Database & Cloud",
    icon: Database,
    color: 'from-orange-500 to-amber-500',
    chipColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    skills: [
      "PostgreSQL", "MongoDB", "Redis", "Pinecone", "ChromaDB",
      "AWS (Lambda, S3, Textract)", "Docker", "Hadoop", "Hive", "IICS"
    ],
  },
  {
    name: "Leadership & Business",
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    chipColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    skills: [
      "Agile PM (APMG Certified)", "Engineering Team Lead", "SDLC Management",
      "Sprint Planning", "Code Reviews", "Technical Mentorship", "Stakeholder Management",
      "Product Strategy", "Client Engagement", "Curriculum Design", "Workshop Facilitation"
    ],
  },
]

export default function SkillsCompact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="skills" className="py-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-xl bg-card-bg border border-card-border p-5"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.color}`} />

                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-sm border ${category.chipColor} transition-all hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
