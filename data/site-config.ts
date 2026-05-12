/**
 * SITE DISPLAY CONFIG
 * ====================================================
 * Site-specific display configuration that is NOT part of the resume data.
 *
 * WHY THIS FILE EXISTS:
 * `resume-master-dataset.ts` is a canonical file generated in another project
 * and pasted in as-is. It must NOT be edited locally — any site-specific
 * configuration (navigation items, featured project lists, display categories)
 * lives here instead, so it survives across dataset updates.
 *
 * When you add a new project to the master dataset, update `projectCategories`
 * and `featuredProjects` here to include it — otherwise it will fall back to
 * a generic "Project" label and won't be featured.
 */

// ============================================================================
// NAVIGATION — links shown in the site's Navbar / Sidebar
// ============================================================================
export const siteNavigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

// ============================================================================
// PROJECT DISPLAY CATEGORIES
// Maps project `name` (from resume-master-dataset.ts) → display category shown
// on the portfolio site. Unknown names fall back to "Project".
// ============================================================================
export const projectCategories: Record<string, string> = {
  "Alumni Connect — AI-Powered Alumni Networking Platform": "Agentic AI / Social Tech",
  "LT Ride — Digital Layer for Shared Public Transport": "Full-Stack / Mobility Tech",
  "GLS — Generative Learning System (Continued & Expanded)": "Agentic AI / EdTech",
  "AI-Powered Cash Reconciliation (Accounts Receivable Ledger)": "Agentic AI / FinTech",
  "Cash Reconciliation for Hospitality Chain": "Agentic AI / FinTech",
  "Virtual Waiter (Hospitality AI Assistant)": "Agentic AI / Hospitality",
  "Personalized Learning Assistant (Generative Learning Platform)": "GenAI / EdTech",
  "Product Description Generator": "GenAI / E-commerce",
  "Research & Innovation Idea Generator": "GenAI / Research",
  "GenAI Project Suite": "GenAI / Portfolio",
  "Deep Learning Projects Collection": "Deep Learning / Portfolio",
  "Import/Export Data Standardization": "Data Engineering / Logistics",
  "Customs Audit Automation Dashboard": "BI / Trade Compliance",
  "Universal Data Validation Framework (Cross-Broker Standardization)": "Data Engineering / Logistics",
}

// ============================================================================
// FEATURED PROJECTS
// Project names (from resume-master-dataset.ts) to highlight on the portfolio.
// ============================================================================
export const featuredProjectNames: string[] = [
  "AI-Powered Cash Reconciliation (Accounts Receivable Ledger)",
  "Virtual Waiter (Hospitality AI Assistant)",
  "Alumni Connect — AI-Powered Alumni Networking Platform",
  "GLS — Generative Learning System (Continued & Expanded)",
  "LT Ride — Digital Layer for Shared Public Transport",
  "Import/Export Data Standardization",
  "Customs Audit Automation Dashboard",
]
