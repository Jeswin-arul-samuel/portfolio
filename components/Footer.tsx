'use client'

import { Linkedin, Github, Mail, Heart } from 'lucide-react'
import { personalInfo } from '@/data/portfolio-data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-card-border bg-card-bg/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-muted text-sm">
              {personalInfo.title}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card-bg border border-card-border hover:border-accent text-muted hover:text-accent transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card-bg border border-card-border hover:border-accent text-muted hover:text-accent transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-card-bg border border-card-border hover:border-accent text-muted hover:text-accent transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-card-border text-center">
          <p className="text-muted text-sm flex items-center justify-center gap-1">
            Built with <Heart size={14} className="text-accent" /> using Next.js & Tailwind CSS
          </p>
          <p className="text-muted text-xs mt-2">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
