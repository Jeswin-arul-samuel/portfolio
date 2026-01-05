'use client'

import { useState } from 'react'
import Image from 'next/image'
import SidebarNav from '@/components/SidebarNav'
import IntroSection from '@/components/IntroSection'
import AboutCompact from '@/components/AboutCompact'
import CareerProgression from '@/components/CareerProgression'
import SkillsCompact from '@/components/SkillsCompact'
import ExperienceArc from '@/components/ExperienceArc'
import CertificationsSection from '@/components/CertificationsSection'
import ContactCompact from '@/components/ContactCompact'

export type Section = 'intro' | 'about' | 'career' | 'skills' | 'experience' | 'certifications' | 'contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('intro')

  return (
    <div className="flex min-h-screen">
      {/* Fixed Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <SidebarNav activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>

      {/* Mobile Header */}
      <MobileHeader activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content - Single section at a time */}
      <main className="flex-1 lg:ml-80 pt-16 lg:pt-0 min-h-screen">
        {activeSection === 'intro' ? (
          <IntroSection />
        ) : activeSection === 'skills' ? (
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12 flex items-start lg:items-center justify-center min-h-screen">
            <div className="w-full">
              <SkillsCompact />
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto px-6 lg:px-12 py-8 lg:py-12 flex items-start lg:items-center justify-center min-h-screen">
            <div className="w-full">
              {activeSection === 'about' && <AboutCompact />}
              {activeSection === 'career' && <CareerProgression />}
              {activeSection === 'experience' && <ExperienceArc />}
              {activeSection === 'certifications' && <CertificationsSection />}
              {activeSection === 'contact' && <ContactCompact />}
            </div>
          </div>
        )}
      </main>

      {/* Floating Avatar */}
      <div className="fixed bottom-0 -right-6 lg:-right-10 z-50 w-60 h-60 lg:w-80 lg:h-80 transition-transform hover:scale-105 cursor-pointer drop-shadow-2xl">
        <Image
          src="/jeswin_profile.png"
          alt="Jeswin"
          width={320}
          height={320}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}

function MobileHeader({
  activeSection,
  setActiveSection
}: {
  activeSection: Section
  setActiveSection: (s: Section) => void
}) {
  const sections: { key: Section; label: string }[] = [
    { key: 'intro', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'career', label: 'Career' },
    { key: 'skills', label: 'Skills' },
    { key: 'experience', label: 'Timeline' },
    { key: 'certifications', label: 'Certs' },
    { key: 'contact', label: 'Contact' },
  ]

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-card-border">
      <div className="flex items-center px-4 py-3 overflow-x-auto">
        <span className="font-bold gradient-text text-sm whitespace-nowrap mr-4">JAS</span>
        <nav className="flex gap-1 text-xs">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={`px-2 py-1 rounded whitespace-nowrap transition-colors ${
                activeSection === section.key
                  ? 'bg-accent text-white'
                  : 'text-muted hover:text-white'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
