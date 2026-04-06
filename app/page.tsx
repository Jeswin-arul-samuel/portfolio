'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu } from 'lucide-react'
import SidebarNav from '@/components/SidebarNav'
import ChatWidget from '@/components/ChatWidget'
import IntroSection from '@/components/IntroSection'
import AboutCompact from '@/components/AboutCompact'
import CareerProgression from '@/components/CareerProgression'
import SkillsCompact from '@/components/SkillsCompact'
import ExperienceArc from '@/components/ExperienceArc'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import ArticlesSection from '@/components/ArticlesSection'
import CertificationsSection from '@/components/CertificationsSection'
import ContactCompact from '@/components/ContactCompact'

export type Section = 'intro' | 'about' | 'career' | 'skills' | 'experience' | 'projects' | 'articles' | 'certifications' | 'contact'

const VALID_SECTIONS: Section[] = ['intro', 'about', 'career', 'skills', 'experience', 'projects', 'articles', 'certifications', 'contact']

function getSectionFromHash(): Section {
  if (typeof window === 'undefined') return 'intro'
  const hash = window.location.hash.replace('#', '')
  return VALID_SECTIONS.includes(hash as Section) ? (hash as Section) : 'intro'
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('intro')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true)
  const [hasSelectedSection, setHasSelectedSection] = useState(false)

  // Read hash on mount
  useEffect(() => {
    const section = getSectionFromHash()
    if (section !== 'intro') {
      setActiveSection(section)
      setMobileMenuOpen(false)
      setHasSelectedSection(true)
    }
  }, [])

  // Listen for hash changes (browser back/forward)
  useEffect(() => {
    const onHashChange = () => {
      const section = getSectionFromHash()
      setActiveSection(section)
      if (section !== 'intro') {
        setMobileMenuOpen(false)
        setHasSelectedSection(true)
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Update hash when section changes
  const navigateTo = useCallback((section: Section) => {
    setActiveSection(section)
    window.location.hash = section === 'intro' ? '' : section
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleSectionChange = (section: Section) => {
    navigateTo(section)
    setMobileMenuOpen(false)
    setHasSelectedSection(true)
  }

  return (
    <div className="flex min-h-screen">
      {/* Fixed Sidebar - Always visible on desktop */}
      <div className="hidden lg:block">
        <SidebarNav activeSection={activeSection} setActiveSection={navigateTo} />
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background">
          <SidebarNav
            activeSection={activeSection}
            setActiveSection={handleSectionChange}
            isMobile={true}
            showHint={!hasSelectedSection}
          />
        </div>
      )}

      {/* Mobile Hamburger Button - Only show when menu is closed */}
      {!mobileMenuOpen && (
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card-bg border border-card-border"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Main Content - Single section at a time */}
      <main className="flex-1 lg:ml-80 min-h-screen">
        {activeSection === 'intro' ? (
          <IntroSection onNavigate={navigateTo} />
        ) : activeSection === 'projects' ? (
          <div className="w-full min-h-screen">
            <ProjectsShowcase />
          </div>
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
              {activeSection === 'articles' && <ArticlesSection />}
              {activeSection === 'certifications' && <CertificationsSection />}
              {activeSection === 'contact' && <ContactCompact />}
            </div>
          </div>
        )}
      </main>

      {/* Chat Widget - Hidden on mobile when menu is open */}
      <div className={mobileMenuOpen ? 'hidden lg:block' : ''}>
        <ChatWidget />
      </div>
    </div>
  )
}
