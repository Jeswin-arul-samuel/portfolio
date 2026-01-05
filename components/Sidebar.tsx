'use client'

import Image from 'next/image'
import { Mail, Linkedin, Github, Phone, MapPin, Download } from 'lucide-react'
import { personalInfo, navigation } from '@/data/portfolio-data'

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-card-bg border-r border-card-border flex flex-col overflow-y-auto">
      {/* Profile Section */}
      <div className="p-6 text-center border-b border-card-border">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent/30">
          <Image
            src="/profile.jpeg"
            alt={personalInfo.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <h1 className="text-xl font-bold mb-1">{personalInfo.name}</h1>
        <p className="text-accent text-sm font-medium mb-2">{personalInfo.title}</p>
        <div className="flex items-center justify-center gap-1 text-muted text-xs">
          <MapPin size={12} />
          {personalInfo.location}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 border-b border-card-border">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="block px-4 py-2 rounded-lg text-muted hover:text-white hover:bg-accent/10 transition-colors text-sm"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-b border-card-border">
        <div className="grid grid-cols-2 gap-2">
          {personalInfo.highlights.slice(0, 4).map((highlight, index) => (
            <div key={index} className="text-center p-2 bg-background rounded-lg">
              <p className="text-lg font-bold gradient-text">{highlight.value}</p>
              <p className="text-[10px] text-muted leading-tight">{highlight.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Links */}
      <div className="p-4 flex-1">
        <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Connect</h3>
        <div className="space-y-2">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted hover:text-white hover:bg-accent/10 transition-colors text-sm group"
          >
            <Mail size={16} className="text-accent" />
            <span className="truncate">Email</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted hover:text-white hover:bg-accent/10 transition-colors text-sm"
          >
            <Linkedin size={16} className="text-accent" />
            <span>LinkedIn</span>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted hover:text-white hover:bg-accent/10 transition-colors text-sm"
          >
            <Github size={16} className="text-accent" />
            <span>GitHub</span>
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted hover:text-white hover:bg-accent/10 transition-colors text-sm"
          >
            <Phone size={16} className="text-accent" />
            <span>Call</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-card-border">
        <p className="text-[10px] text-muted text-center">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </aside>
  )
}
