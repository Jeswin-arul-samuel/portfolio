import OpenAI from 'openai'
import { NextRequest, NextResponse } from 'next/server'
import {
  personalInfo,
  skills,
  projects,
  experience,
  certifications,
  awards,
  education,
} from '@/data/portfolio-data'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Dynamically build the system prompt from portfolio data
function buildSystemPrompt(): string {
  // Format skills
  const skillsText = skills.categories
    .map(cat => `${cat.name.toUpperCase()}:\n${cat.skills.join(', ')}`)
    .join('\n\n')

  // Format experience
  const experienceText = experience
    .map((exp, idx) => {
      let text = `${idx + 1}. ${exp.company.toUpperCase()} (${exp.period})\n`
      text += `   Role: ${exp.role}\n`
      text += `   Location: ${exp.location}\n`

      if (exp.domains) {
        text += `   Domains: ${exp.domains.join(', ')}\n`
      }

      if (exp.description) {
        text += `   Description: ${exp.description}\n`
      }

      if (exp.achievements && exp.achievements.length > 0) {
        text += `   Achievements:\n${exp.achievements.map(a => `   - ${a}`).join('\n')}\n`
      }

      if (exp.projects && exp.projects.length > 0) {
        text += `   Key Projects:\n`
        exp.projects.forEach((proj, pIdx) => {
          text += `   ${String.fromCharCode(97 + pIdx)}) ${proj.name}:\n`
          text += `      ${proj.description}\n`
          text += `      Tech: ${proj.techStack.join(', ')}\n`
          if (proj.highlights) {
            proj.highlights.forEach(h => {
              text += `      - ${h}\n`
            })
          }
        })
      }

      return text
    })
    .join('\n')

  // Format projects
  const projectsText = projects
    .map(proj => {
      let text = `• ${proj.title} (${proj.company}, ${proj.period})\n`
      text += `  Category: ${proj.category}\n`
      text += `  Problem: ${proj.problem}\n`
      text += `  Approach: ${proj.approach}\n`
      text += `  Tech: ${proj.techStack.join(', ')}\n`
      text += `  Impact: ${proj.impact}`
      return text
    })
    .join('\n\n')

  // Format certifications
  const certsText = certifications.map(c => `- ${c}`).join('\n')

  // Format awards
  const awardsText = awards.map(a => `- ${a}`).join('\n')

  // Format education
  const eduText = education
    .map(e => `- ${e.degree}, ${e.school} (${e.period})${e.details ? ` - ${e.details}` : ''}`)
    .join('\n')

  // Format languages
  const languagesText = personalInfo.languages
    .map(l => `- ${l.name}: ${l.level}`)
    .join('\n')

  // Format highlights
  const highlightsText = personalInfo.highlights
    .map(h => `- ${h.label}: ${h.value}`)
    .join('\n')

  return `You are Jeswin's AI assistant on his portfolio website. You are friendly, professional, and knowledgeable about Jeswin's entire career, skills, and experience.

Your role is to:
1. Answer questions about Jeswin's background, skills, experience, and projects
2. Help recruiters and potential clients understand Jeswin's capabilities
3. Assess role fit when asked if Jeswin would be suitable for a specific role

ROLE FIT ANALYSIS:
When someone asks if Jeswin would be a good fit for a role:
- Carefully analyze the role requirements they mention
- Match against Jeswin's skills, experience, and projects
- If GOOD FIT: Explain why with specific evidence from his background (projects, years of experience, relevant skills)
- If PARTIAL FIT: Be honest about what matches and what gaps exist, suggest how Jeswin could bridge those gaps
- If NOT IDEAL: Be honest, explain why, and suggest alternative roles where Jeswin would excel based on his actual strengths

Always be truthful and balanced. Don't oversell, but do highlight genuine strengths.

=== JESWIN'S PROFILE ===

NAME: ${personalInfo.name}
TITLE: ${personalInfo.title}
TAGLINE: ${personalInfo.tagline}
LOCATION: ${personalInfo.location}
EMAIL: ${personalInfo.email}
PHONE: ${personalInfo.phone} | ${personalInfo.phoneAlt}
LINKEDIN: ${personalInfo.linkedin}
GITHUB: ${personalInfo.github}

BIO:
${personalInfo.bio}

HIGHLIGHTS:
${highlightsText}

LANGUAGES:
${languagesText}

=== SKILLS ===

${skillsText}

=== EXPERIENCE ===

${experienceText}

=== FEATURED PROJECTS ===

${projectsText}

=== EDUCATION ===

${eduText}

=== CERTIFICATIONS ===
${certsText}

=== AWARDS ===
${awardsText}

=== END OF PROFILE ===

RESPONSE GUIDELINES:
- Be conversational and friendly, but professional
- Keep responses concise but informative
- Use bullet points for lists when appropriate
- When discussing skills or experience, cite specific projects or achievements
- If asked something outside Jeswin's profile, politely redirect to what you do know
- Encourage visitors to reach out via email or LinkedIn for detailed discussions
- If asked to schedule a call, mention they can book a 30-min call through the Contact section`
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: buildSystemPrompt() },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
      stream: true,
    })

    // Create a streaming response
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          const text = chunk.choices[0]?.delta?.content || ''
          if (text) {
            controller.enqueue(encoder.encode(text))
          }
        }
        controller.close()
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
}
