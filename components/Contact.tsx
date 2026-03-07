'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react'
import { personalInfo } from '@/data/portfolio-data'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jeswinarul",
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Jeswin-arul-samuel",
      href: personalInfo.github,
    },
  ]

  return (
    <section id="contact" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or potential collaborations in AI and data engineering.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-3 rounded-lg bg-background hover:bg-accent/10 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <method.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted">{method.label}</p>
                    <p className="font-medium group-hover:text-accent transition-colors">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-card-border">
              <div className="flex items-center gap-2 text-muted">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
              <p className="text-sm text-muted mt-2">Open to remote opportunities worldwide</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="card h-full flex flex-col justify-center bg-gradient-to-br from-accent/10 to-accent-dark/10 border-accent/20">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                <Send size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Looking for an AI Solutions Architect?</h3>
              <p className="text-muted mb-6">
                I specialize in designing and building Agentic AI systems, LLM applications, and data pipelines that deliver real business impact.
              </p>
              <a
                href={`mailto:${personalInfo.email}?subject=Opportunity%20Discussion`}
                className="btn-primary inline-flex"
              >
                <Mail size={18} />
                Send me an email
              </a>
              <p className="text-sm text-muted mt-4">
                I typically respond within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
