'use client'

import Image from 'next/image'
import { Home, User, Code, Briefcase, MessageSquare, GraduationCap, Award, TrendingUp, Mail, Linkedin, Github, Phone } from 'lucide-react'
import { personalInfo } from '@/data/portfolio-data'
import type { Section } from '@/app/page'

const navItems: { key: Section; label: string; icon: React.ElementType }[] = [
  { key: 'intro', label: 'Home', icon: Home },
  { key: 'about', label: 'About', icon: User },
  { key: 'career', label: 'Career Progression', icon: TrendingUp },
  { key: 'skills', label: 'Skills', icon: Code },
  { key: 'experience', label: 'Career Timeline', icon: Briefcase },
  { key: 'certifications', label: 'Certifications', icon: Award },
  { key: 'contact', label: 'Contact', icon: MessageSquare },
]

interface SidebarNavProps {
  activeSection: Section
  setActiveSection: (section: Section) => void
  isMobile?: boolean
  showHint?: boolean
}

export default function SidebarNav({ activeSection, setActiveSection, isMobile = false, showHint = false }: SidebarNavProps) {
  return (
    <aside className={`${isMobile ? 'w-full h-full' : 'fixed left-0 top-0 h-screen w-80'} bg-card-bg border-r border-card-border flex flex-col ${isMobile ? 'justify-center' : ''}`}>
      {/* Profile Section */}
      <div className={`${isMobile ? 'pt-12 pb-6' : 'pt-8 pb-4'} px-4 text-center ${isMobile ? '' : 'border-b border-card-border'}`}>
        <div className={`${isMobile ? 'w-32 h-32' : 'w-28 h-28'} mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent/30`}>
          <Image
            src="/profile.jpeg"
            alt={personalInfo.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <h1 className={`${isMobile ? 'text-xl' : 'text-lg'} font-bold mb-1`}>{personalInfo.name}</h1>
        <p className={`text-accent ${isMobile ? 'text-base' : 'text-sm'} font-medium`}>India • France • Luxembourg</p>
      </div>

      {/* Navigation */}
      <nav className={`${isMobile ? 'px-8 py-6' : 'p-4 flex-1 overflow-y-auto'}`}>
        <ul className={`${isMobile ? 'space-y-2' : 'space-y-1'}`}>
          {navItems.map((item) => {
            const Icon = item.icon
            // Don't highlight on first mobile visit (showHint = true)
            const isActive = !showHint && activeSection === item.key
            return (
              <li key={item.key}>
                <button
                  onClick={() => setActiveSection(item.key)}
                  className={`w-full flex items-center gap-3 ${isMobile ? 'px-6 py-4 text-base' : 'px-4 py-2.5 text-sm'} rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-muted hover:text-white hover:bg-accent/10'
                  }`}
                >
                  <Icon size={isMobile ? 22 : 18} />
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Hint for first-time mobile visitors */}
        {showHint && (
          <p className="text-center text-muted text-sm mt-6 animate-pulse">
            Tap any option to explore
          </p>
        )}
      </nav>

      {/* Contact Links */}
      <div className={`${isMobile ? 'p-6' : 'p-4'} ${isMobile ? '' : 'border-t border-card-border'}`}>
        <div className={`flex justify-center ${isMobile ? 'gap-4' : 'gap-3'}`}>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg bg-background hover:bg-accent/10 text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-background hover:bg-accent/10 text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-background hover:bg-accent/10 text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://wa.me/33766516906"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-background hover:bg-accent/10 text-muted hover:text-accent transition-colors"
            aria-label="WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            className="p-2 rounded-lg bg-background hover:bg-accent/10 text-muted hover:text-accent transition-colors"
            aria-label="Phone"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </aside>
  )
}
