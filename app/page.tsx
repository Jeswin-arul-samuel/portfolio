'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true) // Start with menu open on mobile
  const [hasSelectedSection, setHasSelectedSection] = useState(false) // Track if user has selected anything

  const handleSectionChange = (section: Section) => {
    setActiveSection(section)
    setMobileMenuOpen(false) // Close menu when section is selected on mobile
    setHasSelectedSection(true) // User has now selected something
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll to top
  }

  return (
    <div className="flex min-h-screen">
      {/* Fixed Sidebar - Always visible on desktop */}
      <div className="hidden lg:block">
        <SidebarNav activeSection={activeSection} setActiveSection={(section) => {
          setActiveSection(section)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }} />
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

      {/* Floating Avatar - Hidden on mobile when menu is open */}
      <div className={`fixed bottom-0 -right-4 lg:-right-10 z-40 w-32 h-32 lg:w-80 lg:h-80 drop-shadow-2xl transform-gpu ${mobileMenuOpen ? 'hidden lg:block' : ''}`}>
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
