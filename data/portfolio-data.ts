/**
 * PORTFOLIO DATA - Derived from Master Resume Dataset
 * ====================================================
 * This file re-exports data in the shapes that site components expect.
 *
 * DATA SOURCES:
 * - `resume-master-dataset.ts` → canonical resume content (DO NOT edit — it is
 *   a copy of a file generated in another project and will be overwritten).
 * - `site-config.ts` → site-specific display config (navigation, featured
 *   project list, display categories). Edit this file when you need to change
 *   how projects are displayed on the site.
 */

import { masterResumeDataset } from "./resume-master-dataset"
import { siteNavigation, projectCategories, featuredProjectNames } from "./site-config"

const m = masterResumeDataset

// ============================================================================
// TYPE DEFINITIONS (matching shapes components expect)
// ============================================================================
interface Project {
  title: string
  company: string
  period: string
  category: string
  problem: string
  approach: string
  techStack: string[]
  impact: string
  featured: boolean
}

interface ExperienceProject {
  name: string
  description: string
  techStack: string[]
  highlights: string[]
}

interface ExperienceEntry {
  company: string
  role: string
  location: string
  period: string
  type: string
  category: string
  domains: string[]
  description?: string
  achievements: string[]
  projects?: ExperienceProject[]
}

interface EducationEntry {
  degree: string
  school: string
  location: string
  period: string
  details?: string
}

// ============================================================================
// PERSONAL INFO
// ============================================================================
export const personalInfo = {
  name: m.personal.fullName,
  title: m.personal.currentTitle,
  tagline: m.personal.tagline,
  email: m.personal.email,
  phone: m.personal.phone.india,
  phoneAlt: m.personal.phone.france,
  linkedin: m.personal.linkedin,
  github: m.personal.github,
  location: m.personal.location,
  bio: m.personal.bio,
  highlights: [
    { label: "Years Experience", value: m.personal.yearsOfExperience },
    { label: "Professionals Trained", value: m.personal.totalPeopleTrained },
    { label: "Ex-Amazon", value: "BI Engineer" },
    { label: "Education", value: "MSc AI, SKEMA Paris" },
  ],
  languages: m.personal.languages,
}

// ============================================================================
// NAVIGATION
// ============================================================================
export const navigation = siteNavigation

// ============================================================================
// SKILLS
// ============================================================================
const skillIconMap: Record<string, string> = {
  generativeAI: "Brain",
  backendAndAPIs: "Server",
  machineLearning: "LineChart",
  dataAndCloud: "Database",
  hardwareAndIoT: "Cpu",
  leadershipAndBusiness: "Users",
  tools: "Wrench",
}

export const skills = {
  categories: Object.entries(m.skills).map(([key, category]) => ({
    name: category.label,
    icon: skillIconMap[key] || "Star",
    skills: category.items,
  })),
}

// ============================================================================
// PROJECTS (flattened from experience entries)
// ============================================================================

function buildProjectProblem(proj: any): string {
  if (!proj.problemStatement) return proj.description || ""
  const ps = proj.problemStatement
  let md = ps.summary || ""
  if (ps.challenges?.length) {
    md += "\n\n### Core Challenges\n"
    md += ps.challenges.map((c: string) => `- ${c}`).join("\n")
  }
  return md
}

function buildProjectApproach(proj: any): string {
  const parts: string[] = []

  if (proj.architecture) {
    const arch = proj.architecture
    if (arch.overview) parts.push(`## Architecture Overview\n${arch.overview}`)
    if (arch.designPrinciple) parts.push(`**Design Principle:** ${arch.designPrinciple}`)
    if (arch.agents?.length) {
      parts.push("## Key Agents")
      for (const agent of arch.agents) {
        let line = `- **${agent.name}** — ${agent.description}`
        if (agent.achievement) line += ` *(${agent.achievement})*`
        parts.push(line)
      }
    }
    if (arch.dataFlow) parts.push(`## Data Flow\n${arch.dataFlow}`)
  }

  if (proj.features) {
    if (Array.isArray(proj.features)) {
      parts.push("## Key Features")
      parts.push(...proj.features.map((f: string) => `- ${f}`))
    } else if (typeof proj.features === "object") {
      parts.push("## Key Features")
      for (const [section, items] of Object.entries(proj.features)) {
        parts.push(`### ${section}`)
        parts.push(...(items as string[]).map((f: string) => `- ${f}`))
      }
    }
  }

  if (proj.whatYouDid) {
    const items = Array.isArray(proj.whatYouDid) ? proj.whatYouDid : proj.whatYouDid.process || []
    if (items.length) {
      parts.push("## What Was Done")
      parts.push(...items.map((item: string) => `- ${item}`))
    }
  }

  return parts.join("\n\n") || proj.description || ""
}

function buildProjectImpact(proj: any): string {
  if (!proj.metrics) return proj.impact || ""
  const parts: string[] = ["## Key Metrics"]
  for (const [, value] of Object.entries(proj.metrics)) {
    parts.push(`- ${value}`)
  }
  if (proj.scalability) {
    parts.push(`\n## Scalability\n${proj.scalability}`)
  }
  return parts.join("\n")
}

function flattenProjects(): Project[] {
  const allProjects: any[] = []
  const cats = projectCategories
  const featured = featuredProjectNames

  for (const exp of m.experience) {
    // Work experience projects
    if (exp.projects) {
      for (const proj of exp.projects) {
        // Skip projects without techStack (e.g., Lema Labs sub-projects are
        // part of the experience narrative, not standalone portfolio projects)
        const techStack = (proj as any).techStack
        if (!techStack || !Array.isArray(techStack) || techStack.length === 0) continue

        allProjects.push({
          title: proj.name,
          company: exp.company,
          period: exp.period.split("–")[0].trim().split(" ").pop() || exp.period,
          category: cats[proj.name] || "Project",
          problem: buildProjectProblem(proj),
          approach: buildProjectApproach(proj),
          techStack,
          impact: buildProjectImpact(proj),
          featured: featured.includes(proj.name),
        })
      }
    }

    // Portfolio projects (freelancer period)
    if ((exp as any).portfolioProjects) {
      for (const proj of (exp as any).portfolioProjects) {
        allProjects.push({
          title: proj.name,
          company: "Personal Portfolio",
          period: exp.period.split("–")[0].trim().split(" ").pop() || exp.period,
          category: cats[proj.name] || "Project",
          problem: proj.description || "",
          approach: proj.subProjects
            ? proj.subProjects.map((sp: any) => {
                if (typeof sp === "string") return `- ${sp}`
                return `- **${sp.name}**: ${sp.detail} *(${sp.tech})*`
              }).join("\n")
            : "",
          techStack: proj.techStack || [],
          impact: "",
          featured: featured.includes(proj.name),
        })
      }
    }
  }

  return allProjects
}

export const projects = flattenProjects()

// ============================================================================
// EXPERIENCE
// ============================================================================

function buildExperience(): ExperienceEntry[] {
  return m.experience.map((exp) => {
    const base: ExperienceEntry = {
      company: exp.company,
      role: exp.role,
      location: exp.location,
      period: exp.period,
      type: exp.type === "internship (end-of-study for MSc)" ? "past" : (exp.period.includes("Present") ? "current" : "past"),
      category: "work",
      domains: exp.domains || [],
      achievements: [
        ...(exp.leadershipResponsibilities || []),
        ...((exp as any).keySkillsDemonstrated?.slice(0, 2) || []),
      ],
    }

    if ((exp as any).description) {
      base.description = (exp as any).description
    }

    if (exp.projects?.length) {
      base.projects = exp.projects.map((proj: any) => ({
        name: proj.name,
        description: proj.problemStatement?.summary || proj.description || "",
        techStack: proj.techStack || [],
        highlights: [
          ...(proj.architecture?.agents || [])
            .filter((a: any) => a.achievement)
            .map((a: any) => a.achievement),
          ...Object.values(proj.metrics || {}).slice(0, 3),
        ].slice(0, 3) as string[],
      }))
    }

    return base
  })
}

// Add education entries to experience (site shows them together)
function buildFullExperience(): ExperienceEntry[] {
  const work = buildExperience()
  const edu: ExperienceEntry[] = m.education.map((e) => ({
    company: e.institution,
    role: e.degree,
    location: e.location,
    period: e.period,
    type: "past",
    category: "education",
    domains: [],
    achievements: [e.thesis || e.note || ""].filter(Boolean) as string[],
  }))
  return [...work, ...edu]
}

export const experience = buildFullExperience()

// ============================================================================
// EDUCATION
// ============================================================================
export const education: EducationEntry[] = m.education.map((e) => ({
  degree: e.degree,
  school: e.institution,
  location: e.location,
  period: e.period,
  ...(e.thesis ? { details: `Thesis: ${e.thesis}` } : {}),
}))

// ============================================================================
// CERTIFICATIONS
// ============================================================================
export const certifications: string[] = m.certifications.map(
  (c) => `${c.name} – ${c.provider}`
)

// ============================================================================
// AWARDS
// ============================================================================
export const awards: string[] = m.awards.map((a) => {
  const parts = [a.title]
  if ((a as any).event) parts.push(`at ${(a as any).event}`)
  if ((a as any).organization) parts.push(`by ${(a as any).organization}`)
  if ((a as any).institutions) parts.push(`at ${(a as any).institutions.join(" and ")}`)
  if ((a as any).context) parts.push(`for ${(a as any).context}`)
  return parts.join(" ")
})
