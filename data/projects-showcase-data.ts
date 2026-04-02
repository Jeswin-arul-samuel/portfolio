/**
 * PROJECTS SHOWCASE DATA — Full Presentation Content
 * ====================================================
 * Rich slide-by-slide content sourced from HTML presentations.
 * Each project is a mini-presentation with multiple visual sections.
 */

export type ProjectCategory = "agentic-ai" | "fullstack"

export type ColorSchemeName = "ocean" | "plum" | "forest" | "charcoal"

export interface ColorScheme {
  bg: string        // page background
  cardBg: string    // card background
  cardBorder: string // card border
  accent: string    // primary accent
  accentMuted: string // muted accent for borders/hints
  heading: string   // heading text
  text: string      // body text
  textMuted: string // secondary text
}

export const colorSchemes: Record<ColorSchemeName, ColorScheme> = {
  ocean: {
    bg: "#0B1622",
    cardBg: "#142231",
    cardBorder: "#1E3345",
    accent: "#4A90A4",
    accentMuted: "#4A90A440",
    heading: "#E8F0F5",
    text: "#A0B4C4",
    textMuted: "#6B8499",
  },
  plum: {
    bg: "#1A1225",
    cardBg: "#251A33",
    cardBorder: "#352845",
    accent: "#9B7AB8",
    accentMuted: "#9B7AB840",
    heading: "#F0E8F5",
    text: "#B4A0C4",
    textMuted: "#8468A0",
  },
  forest: {
    bg: "#0F1A14",
    cardBg: "#1A2B22",
    cardBorder: "#253D30",
    accent: "#6B9E7A",
    accentMuted: "#6B9E7A40",
    heading: "#E8F5EC",
    text: "#A0C4AD",
    textMuted: "#6B9980",
  },
  charcoal: {
    bg: "#1C1714",
    cardBg: "#2A231E",
    cardBorder: "#3D342C",
    accent: "#C49A6C",
    accentMuted: "#C49A6C40",
    heading: "#F5EFE8",
    text: "#C4B4A0",
    textMuted: "#998468",
  },
}

export interface IconCard {
  icon: string
  title: string
  description: string
}

export interface StatItem {
  value: string
  label: string
}

export interface FlowStep {
  icon: string
  label: string
  description: string
}

export interface AgentDomain {
  icon: string
  name: string
  count: number
  agents: string[]
}

export interface AgentEntry {
  icon: string
  name: string
  description: string
  tech?: string
}

export interface ArchLayer {
  name: string
  boxes: { name: string; tech: string }[]
}

export interface DesignDecision {
  icon: string
  title: string
  description: string
}

export interface TechItem {
  icon: string
  name: string
  description: string
}

export interface ProjectShowcase {
  id: string
  title: string
  tagline: string
  subtitle: string
  category: ProjectCategory
  company: string
  period: string
  year: number
  status: "production" | "complete" | "in-progress"
  colorScheme: ColorSchemeName
  demoUrl?: string

  // Slide content
  problem: { heading: string; cards: IconCard[] }
  stats: { heading: string; items: StatItem[]; supportCards?: IconCard[] }
  solution: { heading: string; cards: IconCard[] }
  flow: { heading: string; steps: FlowStep[]; secondaryFlow?: { heading: string; steps: FlowStep[] } }
  agents?: { heading: string; domains?: AgentDomain[]; entries?: AgentEntry[]; notes?: string[] }
  architecture: { heading: string; layers: ArchLayer[] }
  decisions: { heading: string; items: DesignDecision[] }
  tech: TechItem[]
  statusSection: { built: string[]; next: string[] }
}

export const projectsShowcaseData: ProjectShowcase[] = [
  // =========================================================================
  // 1. SUNDARAM AI
  // =========================================================================
  {
    id: "sundaram-ai",
    title: "Sundaram AI",
    tagline: "The AI Waiter That Never Forgets",
    subtitle: "Architecture & Technical Deep Dive",
    category: "agentic-ai",
    company: "Constient Global Solutions",
    period: "Jul – Dec 2025",
    year: 2025,
    status: "production",
    colorScheme: "ocean",

    problem: {
      heading: "Restaurants Are Losing Revenue to Chaos",
      cards: [
        { icon: "😰", title: "Staff Shortages & High Turnover", description: "Trained waiters leave. New hires take weeks to learn the menu. Peak hours = overwhelmed staff, missed orders." },
        { icon: "📱", title: "Phone & WhatsApp Order Chaos", description: "Orders via calls and WhatsApp are manual, error-prone, and untrackable. No digital record, no analytics." },
        { icon: "🤷", title: "Zero Personalization", description: "Repeat customers treated like strangers. No memory of preferences, allergies, or past orders." },
        { icon: "📋", title: "No Digital Infrastructure for Dine-In", description: "Food delivery has Swiggy/Zomato. But dine-in ordering? Still pen-and-paper or shouting across the counter." },
      ],
    },

    stats: {
      heading: "A Massive Untapped Opportunity",
      items: [
        { value: "$55B+", label: "India's restaurant industry size (2024)" },
        { value: "7.5M+", label: "Restaurants in India — 95% have zero digital dine-in ordering" },
        { value: "40%", label: "Revenue lost to order errors, wait times, and missed upsells" },
      ],
      supportCards: [
        { icon: "🍽️", title: "Not a Delivery App", description: "Swiggy and Zomato own delivery. Sundaram AI owns the in-restaurant experience — the 70% of revenue that happens on-premise." },
        { icon: "🤖", title: "AI-First, Not App-First", description: "No app download needed. Customers chat naturally via WhatsApp, web, or QR code. The AI handles everything." },
      ],
    },

    solution: {
      heading: "A Conversational AI That Runs Your Restaurant",
      cards: [
        { icon: "🗣️", title: "Natural Language Ordering", description: "Browse, search, and order by just talking. Semantic search understands 'something spicy' or 'vegan starters'." },
        { icon: "🧠", title: "Remembers Every Customer", description: "3-tier identity system. Recognizes returning customers, remembers preferences, allergies, and past orders." },
        { icon: "📦", title: "Real-Time Inventory", description: "Redis-backed stock tracking prevents overselling. Reserves items during checkout, auto-releases on timeout." },
        { icon: "📡", title: "Multi-Channel Ready", description: "WebSocket chat, WhatsApp Business, SMS notifications. Customers order however they prefer." },
      ],
    },

    flow: {
      heading: "How It Works",
      steps: [
        { icon: "💬", label: "Connect", description: "Scan QR or open chat. AI sends personalized welcome." },
        { icon: "📋", label: "Browse", description: "Navigate menu by category or search naturally." },
        { icon: "🔍", label: "Discover", description: "Semantic search by taste, diet, price. pgvector embeddings." },
        { icon: "🛒", label: "Cart", description: "Add by name, number, or description. Fuzzy matching." },
        { icon: "✅", label: "Checkout", description: "Cart validated against live inventory. Order type selected." },
        { icon: "🔐", label: "Authenticate", description: "Phone → OTP → verified. Existing customers auto-detected." },
        { icon: "💳", label: "Pay", description: "Razorpay link via SMS. Webhook confirms. Done." },
      ],
    },

    agents: {
      heading: "28+ Specialized Agents Across 6 Domains",
      domains: [
        { icon: "🍽️", name: "Food Ordering", count: 7, agents: ["menu_browsing", "menu_discovery", "cart_management", "checkout_validator", "checkout_executor", "checkout_authenticator", "payment_handler"] },
        { icon: "📅", name: "Table Booking", count: 5, agents: ["availability_checker", "booking_creator", "booking_viewer", "booking_modifier", "booking_canceller"] },
        { icon: "👤", name: "User Management", count: 4, agents: ["authenticator", "session_manager", "identity_migrator", "identity_manager"] },
        { icon: "⭐", name: "User Profile", count: 3, agents: ["preference_manager", "favorites_manager", "history_manager"] },
        { icon: "📝", name: "Feedback & Complaints", count: 6, agents: ["validation_agent", "complaint_creator", "complaint_tracker", "feedback_collector", "nps_surveyor", "satisfaction_analyst"] },
        { icon: "❓", name: "General Queries", count: 3, agents: ["knowledge_agent", "restaurant_info_agent", "general_assistant_agent"] },
      ],
      notes: ["Each agent supports both ReAct (LLM-powered multi-step reasoning) and Deterministic (direct tool calls) modes, toggled via feature flags with A/B testing support."],
    },

    architecture: {
      heading: "6-Layer Async-First Architecture",
      layers: [
        { name: "CLIENT", boxes: [{ name: "WebSocket Chat", tech: "Real-time bidirectional" }, { name: "WhatsApp Business", tech: "Business API" }, { name: "SMS", tech: "Twilio" }] },
        { name: "ORCHESTRATION", boxes: [{ name: "LangGraph StateGraph", tech: "186-field state" }, { name: "MemorySaver", tech: "Checkpointing" }] },
        { name: "AGENTS", boxes: [{ name: "Food Ordering", tech: "7 agents" }, { name: "Booking", tech: "5 agents" }, { name: "Feedback", tech: "6 agents" }, { name: "Queries", tech: "3 agents" }, { name: "Auth", tech: "4 agents" }, { name: "Profile", tech: "3 agents" }] },
        { name: "SERVICES", boxes: [{ name: "Identity Service", tech: "3-tier auth" }, { name: "Payment Service", tech: "Razorpay" }, { name: "Communication", tech: "Twilio SMS" }, { name: "Inventory Cache", tech: "Redis-backed" }, { name: "Circuit Breaker", tech: "Fault tolerance" }] },
        { name: "AI", boxes: [{ name: "LLM Manager", tech: "20 accounts" }, { name: "Embedding Service", tech: "pgvector" }, { name: "Entity Extraction", tech: "GPT-4o" }, { name: "Response Validation", tech: "Anti-hallucination" }] },
        { name: "DATA", boxes: [{ name: "PostgreSQL", tech: "147 tables" }, { name: "Redis", tech: "Sessions, menu, inventory, OTP" }, { name: "MongoDB", tech: "Analytics" }] },
      ],
    },

    decisions: {
      heading: "What Makes It Different",
      items: [
        { icon: "⚡", title: "20-Account LLM Load Balancer", description: "Round-robin across 20 OpenAI accounts with per-model rate tracking. Sliding window RPM/TPM. Auto-cooldown at 80% capacity. Zero downtime." },
        { icon: "🛡️", title: "4-Layer Anti-Hallucination", description: "Strict system prompts with grounding rules → Response validation against actual data → Template fallback for failed validation → Dynamic temperature (0.1 for facts, 0.5 for conversation)." },
        { icon: "🧩", title: "Progressive Entity Collection", description: "Agents collect information over multiple turns instead of demanding everything upfront. Natural conversation flow." },
        { icon: "🔄", title: "Task Stack Context Switching", description: "Users can say 'actually, book a table' mid-order. The food ordering task gets suspended (pushed to LIFO stack) and automatically resumed later." },
      ],
    },

    tech: [
      { icon: "🐍", name: "FastAPI", description: "Python 3.12, async web framework" },
      { icon: "🔀", name: "LangGraph", description: "AI orchestration & state machines" },
      { icon: "🧠", name: "OpenAI GPT-4o", description: "Intent classification & reasoning" },
      { icon: "🐘", name: "PostgreSQL + pgvector", description: "147 tables + semantic search" },
      { icon: "⚡", name: "Redis", description: "Session, menu, inventory caching" },
      { icon: "💳", name: "Razorpay", description: "Payments with circuit breaker" },
      { icon: "📱", name: "Twilio", description: "SMS & OTP delivery" },
      { icon: "💬", name: "WhatsApp Business", description: "Multi-channel messaging" },
      { icon: "🔗", name: "SQLAlchemy 2.0", description: "Async ORM & connection pooling" },
      { icon: "🍃", name: "MongoDB", description: "Analytics data storage" },
      { icon: "📊", name: "structlog", description: "Structured logging throughout" },
      { icon: "✅", name: "Pydantic", description: "Data validation & schemas" },
    ],

    statusSection: {
      built: [
        "Complete food ordering pipeline (browse → search → cart → checkout → pay)",
        "28+ specialized AI agents across 6 domains",
        "20-account OpenAI load balancer with rate limiting",
        "Semantic menu search with pgvector embeddings",
        "3-tier progressive authentication (phone + OTP)",
        "Razorpay payment integration with webhooks",
        "Redis caching (sessions, menu, inventory, OTP)",
        "Virtual Waiter response formatting with anti-hallucination",
        "Real-time inventory tracking with reservation holds",
        "Customer feedback & complaint management",
        "WebSocket real-time chat",
      ],
      next: [
        "State persistence (PostgreSQL checkpointer)",
        "WhatsApp Business bot integration",
        "Analytics dashboard & admin panel",
        "Mobile app (React Native)",
        "Multi-language support",
      ],
    },
  },

  // =========================================================================
  // 2. IDEAPOKE
  // =========================================================================
  {
    id: "ideapoke",
    title: "IdeaPoke",
    tagline: "AI-Powered Patent Intelligence Platform",
    subtitle: "Architecture & Technical Overview",
    category: "agentic-ai",
    company: "Freelance",
    period: "2024",
    year: 2024,
    status: "complete",
    colorScheme: "plum",
    demoUrl: "https://ideapoke-frnd.vercel.app/",

    problem: {
      heading: "Finding the Next Big Innovation Shouldn't Take Months",
      cards: [
        { icon: "📄", title: "Information Overload", description: "Thousands of patents filed every day across every domain. No human team can read, categorize, and synthesize them all. Critical innovations get buried." },
        { icon: "🕐", title: "Months of Manual Analysis", description: "Companies hire teams of analysts who spend months mapping patent landscapes. By the time the report is done, the landscape has already shifted." },
        { icon: "🔗", title: "Missed Cross-Domain Connections", description: "Human experts specialize in narrow fields. They miss innovations from adjacent domains that could spark breakthrough ideas when combined." },
        { icon: "🔮", title: "No Systematic Future Extrapolation", description: "Existing tools catalog what exists today. None systematically analyze patent trends to predict what should be invented next." },
      ],
    },

    stats: {
      heading: "Patent Intelligence at a Glance",
      items: [
        { value: "3.5M+", label: "Patents filed globally every year" },
        { value: "6-12 mo", label: "Average time for a patent landscape analysis" },
        { value: "90%", label: "Of cross-domain connections missed by human analysts" },
      ],
    },

    solution: {
      heading: "From Patents to Future Ideas in Minutes",
      cards: [
        { icon: "🔍", title: "Enter Any Research Area", description: "Type a topic like 'Lithium Battery', 'CRISPR Gene Editing', or 'Autonomous Drones'. The system analyzes 3 years of relevant patents." },
        { icon: "🤖", title: "4 AI Agents Work in Sequence", description: "A LangGraph-orchestrated pipeline of specialized agents fetches patents, extracts innovations, synthesizes the landscape, and generates novel ideas." },
        { icon: "💡", title: "5-7 Novel Future Innovation Ideas", description: "Each idea includes a title, detailed explanation of why it's a logical next step, and a patent trail showing which existing patents inspired it." },
        { icon: "💬", title: "Conversational Follow-Ups", description: "Ask follow-up questions or cross-reference previous analyses for cross-domain insight." },
      ],
    },

    flow: {
      heading: "The Agentic Pipeline",
      steps: [
        { icon: "🔎", label: "Patent Fetcher", description: "Searches Google Patents via SerpAPI. Filters to last 3 years. Up to 100 patents." },
        { icon: "📑", label: "Innovation Extractor", description: "Downloads PDFs, chunks text, generates embeddings, extracts structured innovations via LLM." },
        { icon: "🧩", label: "Synthesis Agent", description: "Uses pgvector similarity to rank innovations. Identifies patterns, gaps, and trends." },
        { icon: "🚀", label: "Ideation Agent", description: "Generates 5-7 novel future ideas with explanations and patent trail attribution." },
      ],
    },

    architecture: {
      heading: "System Architecture",
      layers: [
        { name: "CLIENT", boxes: [{ name: "Chat UI", tech: "React + TypeScript + Tailwind" }, { name: "Idea Cards", tech: "Title + Explanation + Patent Trail" }, { name: "Agent Status", tech: "Real-time pipeline progress" }] },
        { name: "API", boxes: [{ name: "REST Routes", tech: "FastAPI endpoints" }, { name: "WebSocket Handler", tech: "Agent status streaming" }, { name: "SSE Streaming", tech: "Follow-up responses" }] },
        { name: "INTELLIGENCE", boxes: [{ name: "Patent Fetcher", tech: "SerpAPI Tools" }, { name: "Innovation Extractor", tech: "PDF + Embedding Tools" }, { name: "Synthesis", tech: "pgvector + LLM" }, { name: "Ideation", tech: "GPT-4o Generation" }] },
        { name: "DATA", boxes: [{ name: "PostgreSQL", tech: "Relational data + JSONB" }, { name: "pgvector", tech: "1536-dim embeddings" }, { name: "3 Tables", tech: "patents, innovations, analyses" }] },
      ],
    },

    decisions: {
      heading: "What Makes It Different",
      items: [
        { icon: "📊", title: "Evidence-Based Ideation", description: "Ideas aren't random brainstorming. Every innovation is grounded in actual patent data. Each idea includes a patent trail that traces back to the evidence that inspired it." },
        { icon: "🗄️", title: "pgvector Consolidation", description: "Instead of a separate vector database (Pinecone, Weaviate), embeddings stored directly in PostgreSQL via pgvector. One DB for structured data AND vector similarity search." },
        { icon: "📡", title: "Real-Time Agent Transparency", description: "Users aren't left behind a spinner. WebSocket streams exactly which agent is working and what it's doing. Makes the multi-minute pipeline feel interactive." },
      ],
    },

    tech: [
      { icon: "⚛️", name: "React 19 + Vite", description: "TypeScript frontend with Tailwind CSS" },
      { icon: "🐍", name: "FastAPI", description: "Python 3.12, Uvicorn ASGI" },
      { icon: "🔀", name: "LangGraph + LangChain", description: "Agent orchestration state machine" },
      { icon: "🧠", name: "GPT-4o / GPT-4o-mini", description: "Extraction, synthesis, and ideation" },
      { icon: "🔢", name: "text-embedding-3-small", description: "1536-dim patent embeddings" },
      { icon: "🐘", name: "PostgreSQL + pgvector", description: "Relational + vector in one DB" },
      { icon: "🔎", name: "SerpAPI", description: "Google Patents search" },
      { icon: "📄", name: "PyMuPDF", description: "PDF processing and extraction" },
    ],

    statusSection: {
      built: [
        "4-agent agentic pipeline (fetch → extract → synthesize → ideate)",
        "Chat-based UI with idea cards and patent trails",
        "Real-time WebSocket agent status streaming",
        "Follow-up questions via SSE",
        "Cross-domain analysis support",
        "pgvector similarity search",
      ],
      next: [
        "Exportable PDF/DOCX reports",
        "Citation graph visualization",
        "Patent monitoring and alerts",
        "Custom agent pipelines",
        "Team collaboration workspaces",
      ],
    },
  },

  // =========================================================================
  // 3. GLS
  // =========================================================================
  {
    id: "gls",
    title: "GLS",
    tagline: "Generative Learning System",
    subtitle: "AI-Powered Adaptive Tutoring for Indian Students",
    category: "agentic-ai",
    company: "Freelance",
    period: "2024",
    year: 2024,
    status: "in-progress",
    colorScheme: "forest",

    problem: {
      heading: "One Teacher. Forty Students. Zero Personalization.",
      cards: [
        { icon: "📚", title: "One-Size-Fits-All Teaching", description: "40+ students in a classroom, each with different knowledge gaps, learning speeds, and misconceptions. The teacher can only teach at one pace." },
        { icon: "💸", title: "Tutoring is Expensive & Inaccessible", description: "Private tutors cost ₹2,000-10,000/month. Most families in semi-urban and rural India simply cannot afford personalized coaching." },
        { icon: "🤔", title: "Misconceptions Go Undetected", description: "Students carry fundamental misunderstandings (e.g., 'heavier objects fall faster') that are never identified or corrected in batch teaching." },
        { icon: "📉", title: "Rote Learning Dominates", description: "Board exam prep relies on memorization over understanding. Students pass exams but lack conceptual depth — knowledge doesn't transfer or last." },
      ],
    },

    stats: {
      heading: "India's Education Challenge — In Numbers",
      items: [
        { value: "260M+", label: "Students enrolled in Indian schools (K-12)" },
        { value: "1:40", label: "Average teacher to student ratio" },
        { value: "57%", label: "Of Grade 8 students can't solve Grade 5 math" },
        { value: "$12B+", label: "Indian EdTech market size by 2025" },
      ],
      supportCards: [
        { icon: "📊", title: "The Learning Crisis is Real", description: "The ASER report shows learning outcomes declining even as enrollment increases. Students are in school but not learning. The problem isn't access — it's personalization." },
        { icon: "📱", title: "Existing EdTech Fails at Personalization", description: "Platforms like BYJU'S deliver pre-recorded lectures. They digitized the classroom — but didn't fix the core problem. Same content, same pace, no adaptation." },
      ],
    },

    solution: {
      heading: "An AI Tutor That Knows You",
      cards: [
        { icon: "🎯", title: "Socratic Dialogue, Not Lectures", description: "The AI asks guiding questions, never just gives answers. Students build understanding through reasoning, not memorization." },
        { icon: "🏏", title: "Interest-Based Explanations", description: "Loves cricket? Physics is explained through cricket. Into gaming? Concepts use game mechanics. GenAI dynamically contextualizes every explanation." },
        { icon: "🧠", title: "Bayesian Knowledge Tracking", description: "The system models what each student knows and doesn't know, concept by concept. Adapts in real-time — no concept skipped or repeated unnecessarily." },
        { icon: "🔍", title: "Misconception Detection", description: "An inventory of 328 known physics misconceptions powers targeted detection. The AI identifies root misunderstandings and corrects at the source." },
        { icon: "🔄", title: "Spaced Repetition Built In", description: "SM-2 algorithm schedules review sessions based on forgetting curves. Concepts get reinforced at the optimal moment." },
      ],
    },

    flow: {
      heading: "How GLS Works",
      steps: [
        { icon: "👋", label: "Onboard", description: "Register, share interests, grade, and board. Chat-based survey profiles learning style." },
        { icon: "🧪", label: "Diagnose", description: "Diagnostic assessment maps initial knowledge state per concept via BKT." },
        { icon: "📖", label: "Learn", description: "Socratic AI teaches concepts using interest-based examples. Real-time chat with LaTeX math." },
        { icon: "✏️", label: "Assess", description: "Stealth assessments embedded in conversation. BKT updates knowledge state after each response." },
        { icon: "🔄", label: "Review", description: "SM-2 schedules optimal review timing. Weak concepts resurface before they're forgotten." },
        { icon: "📈", label: "Master", description: "Dashboard shows mastery progression. Bloom's taxonomy tracks cognitive depth." },
      ],
    },

    agents: {
      heading: "Multi-Agent Teaching System",
      entries: [
        { icon: "🎯", name: "Learning Orchestrator", description: "Routes to specialized agents based on context", tech: "LangGraph + Gemini API" },
        { icon: "📖", name: "Teaching Agent", description: "Socratic dialogue, interest-based examples, concept delivery", tech: "RAG + Prompt Engineering" },
        { icon: "🧪", name: "Testing Agent", description: "Stealth assessments, question generation, answer grading", tech: "Evidence-Centered Design" },
        { icon: "🔄", name: "Review Agent", description: "Spaced repetition sessions, recall evaluation", tech: "SM-2 Algorithm" },
        { icon: "🤝", name: "Support Agent", description: "Frustration detection, motivation support, session monitoring", tech: "Sentiment Analysis" },
      ],
      notes: [
        "Tool Belt: RAG Search (1,820 vectors), Knowledge State (BKT per concept), Question Bank (347 questions + 109 numerical), Misconception DB (328 catalogued), Curriculum Graph (116 topics, 36 sections, 5 units)",
        "9 Learning Science Algorithms: BKT, IRT (3PL), KST, Elo Rating, Bloom's Taxonomy, SM-2 Spaced Repetition, Misconception Detection, Hake's Normalized Gain, Cognitive Load Monitoring",
      ],
    },

    architecture: {
      heading: "System Architecture",
      layers: [
        { name: "FRONTEND", boxes: [{ name: "Student Dashboard", tech: "React 18 + TypeScript + Vite" }, { name: "Chat Interface", tech: "WebSocket + KaTeX Math" }, { name: "Progress Views", tech: "Zustand + TailwindCSS" }] },
        { name: "AI ASSISTANT", boxes: [{ name: "Agent Orchestrator", tech: "LangGraph + Gemini API" }, { name: "RAG Pipeline", tech: "ChromaDB + qwen3-embedding" }, { name: "Prompt Engine", tech: "POML Templates + Socratic Rules" }] },
        { name: "BACKEND API", boxes: [{ name: "Auth", tech: "JWT + bcrypt" }, { name: "Curriculum", tech: "CRUD + Unlocking" }, { name: "Assessment", tech: "Responses + Grading" }, { name: "Knowledge", tech: "BKT + IRT + KST" }] },
        { name: "DATA LAYER", boxes: [{ name: "PostgreSQL", tech: "20+ model groups" }, { name: "ChromaDB", tech: "1,820 vectors, 2,560 dim" }, { name: "MongoDB", tech: "Conversations, Sessions" }] },
      ],
    },

    decisions: {
      heading: "What Makes It Different",
      items: [
        { icon: "🏏", title: "Interest-Based Contextual Generation", description: "GLS generates unique explanations for every student-concept pair using their interests. A cricket fan learns projectile motion through ball trajectories. Only GenAI can do this at scale." },
        { icon: "🎭", title: "Multi-Agent Orchestration", description: "Not a single chatbot. A team of specialized AI agents — teaching, testing, reviewing, and supporting — coordinated by a LangGraph orchestrator." },
        { icon: "🧬", title: "Stealth Assessment", description: "Questions woven into natural conversation using Evidence-Centered Design. Students don't feel tested. Reduces test anxiety while capturing authentic understanding." },
        { icon: "🧠", title: "Holistic Student Modeling", description: "Three-dimensional profiling: Academic (knowledge gaps), Psychological (motivation, mindset), and Learning Style (VARK). Adapts not just what to teach, but how." },
      ],
    },

    tech: [
      { icon: "⚛️", name: "React 18 + TypeScript", description: "Vite, Zustand state management" },
      { icon: "🔀", name: "LangGraph + Gemini API", description: "Multi-agent orchestration" },
      { icon: "📚", name: "ChromaDB", description: "1,820 embeddings, qwen3-embedding (2,560 dim)" },
      { icon: "🐍", name: "FastAPI", description: "15+ API route groups" },
      { icon: "🐘", name: "PostgreSQL", description: "20+ model groups, relational" },
      { icon: "🍃", name: "MongoDB", description: "Conversations & sessions" },
      { icon: "🔐", name: "JWT + bcrypt", description: "Authentication" },
      { icon: "📐", name: "KaTeX", description: "LaTeX math rendering in chat" },
    ],

    statusSection: {
      built: [
        "Data pipeline (5 physics units, 1,776 records, 1,820 embeddings)",
        "FastAPI backend with 15+ API route groups",
        "9 learning algorithms (BKT, IRT, KST, Elo, Bloom's, SM-2, etc.)",
        "RAG search with vector retrieval",
        "Curriculum unlocking engine",
        "VARK, MSLQ, Dweck psychological frameworks seeded",
        "Multi-agent assistant (teaching, testing, review, support)",
        "Prompt template system (.poml format)",
      ],
      next: [
        "Frontend UI implementation (auth, dashboard, chat)",
        "WebSocket chat integration",
        "End-to-end algorithm testing",
        "Beta testing with 5-10 students",
        "Gamification layer (streaks, points)",
        "Multiple subject support",
      ],
    },
  },

  // =========================================================================
  // 4. PRODUCT DESCRIPTOR AI
  // =========================================================================
  {
    id: "product-descriptor",
    title: "Product Descriptor AI",
    tagline: "Vision-Powered Product Metadata Generation",
    subtitle: "Architecture & Technical Deep Dive",
    category: "agentic-ai",
    company: "Freelance",
    period: "2024",
    year: 2024,
    status: "complete",
    colorScheme: "charcoal",
    demoUrl: "https://prod-descriptor-frnd.vercel.app/",

    problem: {
      heading: "Manual Product Listings Kill E-Commerce Velocity",
      cards: [
        { icon: "⏱️", title: "Painfully Slow Manual Process", description: "Writing titles, descriptions, and features for each product takes 10-15 minutes. At scale (1000s of SKUs), this becomes a months-long bottleneck." },
        { icon: "📝", title: "Inconsistent Quality", description: "Different copywriters produce different tones, styles, and detail levels. Brand voice breaks across the catalog." },
        { icon: "💰", title: "Expensive Copywriting Teams", description: "Hiring domain-expert copywriters for fashion, electronics, and other verticals is costly. Small businesses often can't afford it." },
        { icon: "🔍", title: "SEO & Discovery Gaps", description: "Poor descriptions mean poor search rankings. Products with weak metadata get buried and never reach potential buyers." },
      ],
    },

    stats: {
      heading: "The Impact",
      items: [
        { value: "10x", label: "Faster than manual product listing creation" },
        { value: "$0.01", label: "Approximate cost per product description" },
        { value: "100%", label: "Consistent brand voice across entire catalog" },
      ],
    },

    solution: {
      heading: "From Image to Listing in Seconds",
      cards: [
        { icon: "📸", title: "Upload Any Product Image", description: "Upload a product photo or video. Videos get middle frame extraction via OpenCV." },
        { icon: "👁️", title: "BLIP Vision Understanding", description: "Salesforce BLIP model generates a semantic caption — understands what the product is from the image alone." },
        { icon: "🏷️", title: "Smart Classification", description: "GPT-4o classifies the caption into fashion or electronics domain to route to the right specialist." },
        { icon: "✨", title: "Domain-Specific Copy", description: "Specialist copywriter generates title, description & 5-6 features as structured JSON. Fashion = style-aware, Electronics = spec-focused." },
      ],
    },

    flow: {
      heading: "The Agentic Pipeline",
      steps: [
        { icon: "📸", label: "Upload", description: "User uploads a product image or video via the React frontend." },
        { icon: "🖼️", label: "Extract", description: "Images loaded directly. Videos: middle frame extracted via OpenCV." },
        { icon: "🔍", label: "Caption", description: "BLIP vision model generates a natural language description." },
        { icon: "🏷️", label: "Classify", description: "GPT-4o classifies caption into 'fashion' or 'electronics' category." },
        { icon: "✨", label: "Generate", description: "Category-specific GPT prompt produces title, description & features as JSON." },
        { icon: "🎯", label: "Display", description: "Styled product card shown with image, category badge & generated metadata." },
      ],
    },

    agents: {
      heading: "4-Agent Pipeline",
      entries: [
        { icon: "🖼️", name: "Perception Agent", description: "BLIP model observes the image and produces a semantic caption", tech: "BLIP, PIL, PyTorch" },
        { icon: "🧠", name: "Classification Agent", description: "GPT-4o reasons about the caption to determine the product domain", tech: "GPT-4o, JSON Output" },
        { icon: "🔀", name: "Router / Orchestrator", description: "Routes to category-specific prompt builders", tech: "FastAPI, Conditional Logic" },
        { icon: "✍️", name: "Specialist Copywriter", description: "Domain-specific GPT-4o prompt crafts optimized product metadata", tech: "GPT-4o, Domain Prompts" },
      ],
    },

    architecture: {
      heading: "System Architecture",
      layers: [
        { name: "FRONTEND", boxes: [{ name: "UploadForm", tech: "React Component" }, { name: "ResultDisplay", tech: "React Component" }, { name: "API Service", tech: "Fetch Client" }, { name: "Tailwind UI", tech: "Styling Layer" }] },
        { name: "API", boxes: [{ name: "Upload Route", tech: "POST /upload/" }, { name: "Generate Route", tech: "POST /generate/" }, { name: "Health Route", tech: "GET /health/" }] },
        { name: "AI", boxes: [{ name: "BLIP Captioner", tech: "HuggingFace Transformers" }, { name: "Category Detector", tech: "GPT-4o" }, { name: "Fashion Model", tech: "Domain Prompt" }, { name: "Electronics Model", tech: "Domain Prompt" }] },
        { name: "INFRA", boxes: [{ name: "Fly.io", tech: "Deployment" }, { name: "Docker", tech: "Containerization" }, { name: "GitHub Actions", tech: "CI/CD Pipeline" }] },
      ],
    },

    decisions: {
      heading: "Key Design Decision",
      items: [
        { icon: "🔬", title: "Two-Model Strategy (BLIP + GPT-4o)", description: "BLIP runs locally — no API cost for captioning. GPT-4o receives text only — cheaper API calls. Each model handles what it's best at. Caption can be cached and reused." },
      ],
    },

    tech: [
      { icon: "⚛️", name: "React 19 + Vite 6", description: "Modern frontend with fast HMR" },
      { icon: "🎨", name: "Tailwind CSS 4", description: "Utility-first styling" },
      { icon: "⚡", name: "FastAPI", description: "Python 3.12, high-performance async" },
      { icon: "🧠", name: "GPT-4o", description: "Classification & domain-specific copywriting" },
      { icon: "👁️", name: "BLIP", description: "Salesforce/HuggingFace vision-language model" },
      { icon: "🔥", name: "PyTorch v2.6", description: "Deep learning framework" },
      { icon: "🎬", name: "OpenCV v4.11", description: "Video frame extraction" },
      { icon: "🐳", name: "Docker + Fly.io", description: "CI/CD via GitHub Actions" },
    ],

    statusSection: {
      built: [
        "Image upload & processing",
        "Video frame extraction",
        "BLIP image captioning",
        "GPT-4o category classification",
        "Fashion & electronics specialist agents",
        "Structured JSON output",
        "React frontend with Tailwind",
        "Fly.io deployment with CI/CD",
      ],
      next: [
        "Bulk image upload & batch export",
        "5+ new product categories",
        "Multi-language generation",
        "Shopify/Amazon API integration",
        "Custom brand voice training",
      ],
    },
  },

  // =========================================================================
  // 5. ALUMNI CONNECT
  // =========================================================================
  {
    id: "alumni-connect",
    title: "Alumni Connect",
    tagline: "AI-Powered Alumni Networking Through Conversation",
    subtitle: "Architecture & Technical Overview",
    category: "agentic-ai",
    company: "Personal Project",
    period: "Jan 2026 – Present",
    year: 2026,
    status: "in-progress",
    colorScheme: "ocean",

    problem: {
      heading: "Alumni Lose Touch. Institutions Lose Value.",
      cards: [
        { icon: "😰", title: "No Way to Discover Alumni", description: "After graduation, students scatter across cities and professions. There's no searchable directory to find batchmates, seniors, or juniors." },
        { icon: "📋", title: "Traditional Directories Don't Work", description: "Form-based search requires knowing exactly what you're looking for. Natural questions like 'who plays cricket in Mumbai?' go unanswered." },
        { icon: "🔒", title: "Privacy Concerns Block Sharing", description: "Alumni hesitate to share personal details on open platforms. Without admin-gated access and approval workflows, trust is low." },
        { icon: "💬", title: "No Built-In Communication", description: "Even when alumni find each other, there's no integrated way to message them. Connection requests lead nowhere without real-time chat." },
      ],
    },

    stats: {
      heading: "The Untapped Power of Alumni Networks",
      items: [
        { value: "1000s", label: "Of alumni per institution with zero digital connection" },
        { value: "80%", label: "Of alumni lose contact within 2 years of graduating" },
        { value: "0", label: "AI-native alumni platforms using conversational search" },
      ],
      supportCards: [
        { icon: "💬", title: "Conversations, Not Forms", description: "Replaces traditional search with a natural language AI chatbot. Users simply ask: 'Find me alumni who are doctors in Chennai.'" },
        { icon: "🛡️", title: "Privacy-First, Admin-Gated", description: "Every profile requires admin approval before becoming visible. Only verified alumni can search and connect." },
      ],
    },

    solution: {
      heading: "One Chat. Entire Alumni Network.",
      cards: [
        { icon: "🤖", title: "AI-Powered Conversational Search", description: "Natural language queries powered by LangGraph agents. Ask anything — 'alumni who play football in Mumbai' or 'female doctors from batch 2015'." },
        { icon: "💬", title: "Chat-Based Onboarding", description: "No forms. The AI asks profile questions one at a time. Supports pause/resume — disconnect mid-onboarding, your progress is saved." },
        { icon: "🔗", title: "Instant Connections & Private Chat", description: "Send connection requests from search results. Once accepted, a real-time private chat channel opens with read receipts." },
        { icon: "🛡️", title: "Admin-Gated Approval System", description: "Every new profile requires admin approval before becoming searchable. Admins see platform stats and manage the community." },
      ],
    },

    flow: {
      heading: "New User Journey",
      steps: [
        { icon: "📱", label: "Login", description: "Sign in with mobile number or email. Device fingerprint for auto-login." },
        { icon: "💬", label: "AI Onboarding", description: "Chatbot asks profile questions conversationally. No forms." },
        { icon: "⏳", label: "Admin Review", description: "Profile sent for approval. Admin verifies identity." },
        { icon: "✅", label: "Approved", description: "Full access. Search alumni, send connections, chat." },
      ],
      secondaryFlow: {
        heading: "Approved User Flow",
        steps: [
          { icon: "🔍", label: "Search Alumni", description: "Ask the AI chatbot to find alumni by city, profession, interests, batch." },
          { icon: "👤", label: "View Profiles", description: "See profile cards with name, profession, city, interests inline in chat." },
          { icon: "🤝", label: "Connect", description: "Send connection request with optional message. Wait for acceptance." },
          { icon: "💬", label: "Private Chat", description: "Real-time messaging with read receipts and presence status." },
        ],
      },
    },

    agents: {
      heading: "LangGraph Agent Architecture",
      entries: [
        { icon: "🔀", name: "Router Node", description: "LLM classifies intent into one of 5 flows. Routes to the appropriate sub-agent.", tech: "LangGraph State Machine" },
        { icon: "👋", name: "Onboarding Sub-Agent", description: "Structured output via Pydantic. Actions: ask, save, confirm, create_profile. Field validation via OnboardingRuler.", tech: "Pydantic Structured Output" },
        { icon: "🔍", name: "Search Sub-Agent (ReAct)", description: "ReAct pattern with tool calling. Tools: search_alumni, search_by_cypher, find_shared_interests. Queries Neo4j.", tech: "LangChain + Neo4j" },
        { icon: "🔗", name: "Connect Handler", description: "Extracts target alumni. Creates connection in PostgreSQL and Neo4j.", tech: "Structured Output" },
        { icon: "✏️", name: "Profile Update", description: "Identifies field to update, validates, regenerates profile narrative and embedding vector.", tech: "pgvector Re-embedding" },
      ],
      notes: ["LLM Provider Abstraction: supports both OpenAI and Ollama via single config switch. Develop locally with Ollama, deploy with OpenAI — zero code changes."],
    },

    architecture: {
      heading: "System Architecture",
      layers: [
        { name: "CLIENT APP", boxes: [{ name: "Mobile App", tech: "Expo 55 + React Native" }, { name: "Web App", tech: "React Native Web + Expo Router" }, { name: "Admin Panel", tech: "Approve/Reject + Stats" }] },
        { name: "BACKEND API", boxes: [{ name: "Auth", tech: "JWT + Refresh Tokens" }, { name: "AI Chat WS", tech: "/ws/ai-chat" }, { name: "Private Chat WS", tech: "/ws/private-chat" }, { name: "Connections", tech: "CRUD + Status" }] },
        { name: "AI LAYER", boxes: [{ name: "Router", tech: "Intent Classification" }, { name: "Onboarding", tech: "Structured Output" }, { name: "Search", tech: "ReAct + Tools" }, { name: "Connect", tech: "Structured Output" }] },
        { name: "DATA LAYER", boxes: [{ name: "PostgreSQL 16", tech: "Users + pgvector" }, { name: "MongoDB", tech: "Chat History" }, { name: "Neo4j", tech: "Alumni Graph" }, { name: "Redis", tech: "Presence + Sessions" }] },
      ],
    },

    decisions: {
      heading: "What Makes It Different",
      items: [
        { icon: "🕸️", title: "Neo4j Graph for Relationship Queries", description: "Alumni relationships are inherently graph-shaped. Enables queries like 'find alumni who share 3+ interests with me' that would be extremely complex in SQL." },
        { icon: "🧠", title: "Dual Search: Graph + Vector Embeddings", description: "Structured queries go through Neo4j. Semantic/fuzzy queries use pgvector (768-dim). Handles both 'doctors in Mumbai' and 'people like me'." },
        { icon: "💾", title: "Redis → Postgres Onboarding Cache", description: "Onboarding data lives in Redis (7-day TTL) for fast read/write. On disconnect, flushes to Postgres JSONB. On reconnect, restores. Zero data loss." },
        { icon: "🔄", title: "LLM Provider Abstraction", description: "Single config switch toggles between OpenAI (cloud) and Ollama (local). Develop locally, deploy to cloud — zero code changes." },
      ],
    },

    tech: [
      { icon: "📱", name: "Expo 55 + React Native", description: "iOS, Android, and Web from one codebase" },
      { icon: "🔀", name: "LangGraph + LangChain", description: "5-flow agent state machine" },
      { icon: "🐍", name: "FastAPI", description: "Backend API" },
      { icon: "🐘", name: "PostgreSQL 16 + pgvector", description: "768-dim profile embeddings" },
      { icon: "🕸️", name: "Neo4j", description: "Alumni graph relationships" },
      { icon: "🍃", name: "MongoDB", description: "AI + private chat history" },
      { icon: "⚡", name: "Redis", description: "Presence, sessions, onboarding cache" },
      { icon: "🔐", name: "JWT + Device Fingerprinting", description: "Auto-login + refresh tokens" },
    ],

    statusSection: {
      built: [
        "JWT auth with device fingerprinting",
        "Conversational AI onboarding (Redis-cached)",
        "LangGraph agent with 5 intent flows",
        "Neo4j graph search with Cypher tools",
        "Profile embeddings via pgvector",
        "Real-time private chat via WebSocket",
        "Connection requests + presence tracking",
        "Admin dashboard (approve/reject/stats)",
        "Expo cross-platform app (iOS/Android/Web)",
        "Docker Compose development environment",
      ],
      next: [
        "Push notifications for connections & messages",
        "Cloud deployment + CI/CD",
        "Multi-institution support",
        "Job board and mentorship matching",
        "Event and reunion planning",
      ],
    },
  },

  // =========================================================================
  // 6. CAE PREP
  // =========================================================================
  {
    id: "cae-prep",
    title: "CAE Prep Platform",
    tagline: "AI-Powered Cambridge C1 Advanced Exam Preparation",
    subtitle: "Full-Stack Application — Portfolio Project",
    category: "fullstack",
    company: "Freelance",
    period: "2024",
    year: 2024,
    status: "complete",
    colorScheme: "plum",

    problem: {
      heading: "Preparing for CAE is Hard. Feedback is Expensive.",
      cards: [
        { icon: "💸", title: "Professional Feedback is Expensive", description: "A single session with a CAE tutor costs $40-80. Most students can't afford regular feedback on writing and speaking practice." },
        { icon: "🎯", title: "No Structured Scoring", description: "Students practice blindly without understanding how Cambridge examiners evaluate. They can't map weaknesses to the 4 official criteria." },
        { icon: "🗣️", title: "Speaking Practice is Lonely", description: "No way to practice the 4-part speaking exam with realistic prompts, timed conditions, and pronunciation feedback." },
        { icon: "📊", title: "No Progress Tracking", description: "Without analytics, students can't see improvement patterns, identify recurring mistakes, or target weak areas." },
      ],
    },

    stats: {
      heading: "The CAE Exam at a Glance",
      items: [
        { value: "250K+", label: "Candidates take CAE globally each year" },
        { value: "4", label: "Papers: Reading, Writing, Listening, Speaking" },
        { value: "$40+", label: "Cost per tutoring session for exam feedback" },
        { value: "<$1", label: "Cost per AI evaluation with this platform" },
      ],
    },

    solution: {
      heading: "An AI-Powered Exam Prep Platform",
      cards: [
        { icon: "✍️", title: "AI Writing Evaluation", description: "Submit essays, letters, reports, and reviews. Get instant scores on all 4 Cambridge criteria with detailed, actionable feedback." },
        { icon: "🎙️", title: "Speaking with Whisper Transcription", description: "Record audio responses. Whisper transcribes. GPT evaluates grammar, discourse management, pronunciation, and interactive communication." },
        { icon: "📊", title: "Analytics Dashboard", description: "Track score trends, visualize skill breakdowns with radar charts, and identify weak areas with the intelligent mistake tracker." },
        { icon: "🎯", title: "Targeted Practice", description: "The system identifies your weak areas and generates tasks focused specifically on improving those skills." },
      ],
    },

    flow: {
      heading: "How It Works",
      steps: [
        { icon: "📝", label: "Choose Mode", description: "Select writing or speaking practice." },
        { icon: "🎲", label: "Generate Task", description: "AI creates exam-style prompts with appropriate images." },
        { icon: "✍️", label: "Write / Record", description: "Write essay with auto-save, or record speaking with timed conditions." },
        { icon: "🤖", label: "AI Evaluation", description: "GPT scores against Cambridge criteria. Whisper transcribes speech." },
        { icon: "⭐", label: "Grade A Rewrite", description: "See a model answer with side-by-side comparison." },
        { icon: "📈", label: "Track & Improve", description: "Dashboard tracks progress. Mistake patterns drive targeted practice." },
      ],
    },

    architecture: {
      heading: "System Architecture",
      layers: [
        { name: "FRONTEND", boxes: [{ name: "React 18 SPA", tech: "Vite + React Router DOM" }, { name: "8 Components", tech: "Writing, Speaking, Dashboard, History..." }, { name: "Recharts", tech: "Line, Bar, Radar charts" }] },
        { name: "BACKEND API", boxes: [{ name: "FastAPI", tech: "Python async framework" }, { name: "Uvicorn", tech: "ASGI server" }, { name: "Pydantic", tech: "Data validation" }] },
        { name: "AI LAYER", boxes: [{ name: "GPT-4o-mini", tech: "Task gen, evaluation, rewrite" }, { name: "Whisper-1", tech: "Speech-to-text" }, { name: "Image Service", tech: "Real CAE exam images" }] },
        { name: "DATA LAYER", boxes: [{ name: "SQLite", tech: "Relational database" }, { name: "File Storage", tech: "Audio uploads (WebM)" }, { name: "localStorage", tech: "Draft auto-save" }] },
      ],
    },

    decisions: {
      heading: "What Makes It Different",
      items: [
        { icon: "🎛️", title: "Dual Temperature Strategy", description: "Task generation uses temperature 0.8 for creative diversity. Task evaluation uses 0.3 for consistent, deterministic scoring." },
        { icon: "🎙️", title: "Two-Stage Speaking Pipeline", description: "Audio isn't sent directly to a single model. Whisper first creates a faithful transcription, then GPT-4o-mini evaluates the text separately." },
        { icon: "🔄", title: "Feedback Loop Architecture", description: "Submissions feed the Mistake Tracker, which identifies patterns. This drives Targeted Practice. Every session makes the next one smarter." },
        { icon: "📐", title: "Real Exam Simulation", description: "Speaking tasks use real CAE exam images. Timing matches actual exam conditions. Part 2 shows 3 images, Part 3 includes discussion diagrams." },
      ],
    },

    tech: [
      { icon: "⚛️", name: "React 18 + Vite", description: "SPA with React Router DOM" },
      { icon: "🐍", name: "FastAPI + Uvicorn", description: "Python async backend" },
      { icon: "🧠", name: "GPT-4o-mini", description: "Task generation, evaluation, rewriting" },
      { icon: "🎙️", name: "Whisper API", description: "Speech-to-text transcription" },
      { icon: "📊", name: "Recharts", description: "Line, bar, and radar charts" },
      { icon: "💾", name: "SQLite + SQLAlchemy", description: "Relational database" },
      { icon: "✅", name: "Pydantic", description: "Data validation schemas" },
    ],

    statusSection: {
      built: [
        "Complete Writing Module (4 task types, AI eval, Grade A comparison)",
        "Complete Speaking Module (4 parts, images, Whisper + GPT pipeline)",
        "Dashboard with line, bar & radar charts",
        "Mistake Tracker with pattern analysis",
        "Targeted Practice generation",
        "Practice History with filtering & search",
        "Auto-save drafts (localStorage)",
        "Adaptive difficulty system",
        "Full REST API (15+ endpoints)",
      ],
      next: [
        "Listening module with audio content",
        "Reading module",
        "User authentication with JWT",
        "Cloud deployment",
        "Vocabulary builder from submissions",
        "Spaced repetition for mistakes",
      ],
    },
  },

  // =========================================================================
  // 7. LT RIDE
  // =========================================================================
  {
    id: "lt-ride",
    title: "LT Ride",
    tagline: "The Digital Layer for Shared Public Transport",
    subtitle: "Architecture & Executive Overview",
    category: "fullstack",
    company: "Personal Project",
    period: "Jan 2026 – Present",
    year: 2026,
    status: "in-progress",
    colorScheme: "charcoal",

    problem: {
      heading: "Passengers Wait Blind. Drivers Drive Empty.",
      cards: [
        { icon: "😰", title: "Zero Visibility for Passengers", description: "People wait at junctions with no idea when the next vehicle arrives, if it has seats, or if it's even running today." },
        { icon: "🚐", title: "Drivers Can't See Demand", description: "Drivers run fixed routes blindly. No way to know how many passengers are waiting at upcoming stops." },
        { icon: "📵", title: "No Digital Infrastructure", description: "Entirely word-of-mouth. No tracking, no schedules, no booking. A system running on hope and habit." },
        { icon: "🌍", title: "Affects Every Rural & Semi-Urban Area", description: "Shared transport in towns and villages across the country operates identically — with zero digital coordination." },
      ],
    },

    stats: {
      heading: "A Massive Underserved Market",
      items: [
        { value: "68%", label: "Of India's population lives in rural & semi-urban areas" },
        { value: "0", label: "Digital platforms serving shared mass transport" },
        { value: "10M+", label: "Daily shared vehicle trips with zero digital layer" },
      ],
      supportCards: [
        { icon: "🚐", title: "Shared Vehicles, Not Ride-Hail", description: "This isn't Uber for villages. Buses, autos, tempos already run fixed routes. LT Ride doesn't replace them — it makes the existing system visible and efficient." },
        { icon: "📡", title: "Location-Agnostic & Scalable", description: "Route-based and vehicle-agnostic. Works in any region — from plains with 4G to remote areas with 2G connectivity." },
      ],
    },

    solution: {
      heading: "Two Apps. One Connected System.",
      cards: [
        { icon: "📍", title: "Real-Time Vehicle Tracking", description: "GPS positions broadcast every 10 seconds. Passengers see exactly where their vehicle is and when it'll arrive." },
        { icon: "📊", title: "Demand Visibility for Drivers", description: "Drivers see passenger demand at each stop before departing. Ride requests aggregate when no trips are scheduled." },
        { icon: "🪑", title: "Live Seat Availability", description: "Drivers tap +/- to update passenger count. Passengers see seats remaining before heading to the stop." },
        { icon: "📶", title: "Works on Any Network", description: "Designed for variable connectivity — from 4G to 2G. GPS queues offline, syncs when connection returns. Zero data loss." },
      ],
    },

    flow: {
      heading: "Driver Flow",
      steps: [
        { icon: "🚐", label: "Create Trip", description: "Pick route, direction, time. See demand per slot." },
        { icon: "📍", label: "Start & Track", description: "GPS auto-tracks. Tap stops. +/- updates passengers." },
        { icon: "✅", label: "Complete Trip", description: "End at destination. All analytics logged per stop." },
      ],
      secondaryFlow: {
        heading: "Passenger Flow",
        steps: [
          { icon: "🔍", label: "Find a Trip", description: "Browse routes. See trips with seat counts and times." },
          { icon: "🎫", label: "Book Seats", description: "Select boarding & drop stops. Book 1+ seats." },
          { icon: "📡", label: "Track & Ride", description: "Live tracking via WebSocket. See vehicle approach in real-time." },
        ],
      },
    },

    architecture: {
      heading: "System Architecture",
      layers: [
        { name: "CLIENT APPS", boxes: [{ name: "Driver App", tech: "React 19 + Vite + Capacitor" }, { name: "Passenger App", tech: "React 19 + Vite + Capacitor" }] },
        { name: "SHARED TYPES", boxes: [{ name: "@local-transport/shared", tech: "TypeScript types — Trip, Booking, Route, User" }] },
        { name: "BACKEND API", boxes: [{ name: "Auth", tech: "JWT + scrypt" }, { name: "Trips & Routes", tech: "CRUD + Events" }, { name: "Location", tech: "GPS + Geofence" }, { name: "WebSocket", tech: "Live Tracking" }] },
        { name: "DATA LAYER", boxes: [{ name: "PostgreSQL", tech: "13 tables" }, { name: "Redis", tech: "Position cache (planned)" }, { name: "IndexedDB", tech: "Offline GPS queue" }] },
      ],
    },

    decisions: {
      heading: "What Makes It Different",
      items: [
        { icon: "📊", title: "Bookings = Demand Signals, Not Reservations", description: "Unlike ride-hail, bookings here are demand forecasts. The driver's +/- counter is the sole source of truth. Matches how informal mass transport actually works." },
        { icon: "🎯", title: "Geofence-Triggered Stop Advancement", description: "Backend runs Haversine distance on every GPS batch. When vehicle enters 500m radius of a stop, system auto-updates the current stop." },
        { icon: "📐", title: "Debounced Passenger Counting", description: "The +/- button uses 1.5-second debounce. Rapid taps collapse into a single API call. Prevents flooding the server." },
        { icon: "🔗", title: "Monorepo with End-to-End Type Safety", description: "Shared TypeScript package (@local-transport/shared) defines all types and constants. Both apps and backend share types. Zero drift." },
      ],
    },

    tech: [
      { icon: "⚛️", name: "React 19 + Vite", description: "Driver & Passenger apps" },
      { icon: "📱", name: "Capacitor", description: "iOS & Android native builds" },
      { icon: "📦", name: "TypeScript Monorepo", description: "@local-transport/shared types" },
      { icon: "🚀", name: "Fastify", description: "Node.js backend API" },
      { icon: "🐘", name: "PostgreSQL", description: "13 tables, relational" },
      { icon: "📡", name: "WebSocket + REST", description: "Live tracking + polling fallback" },
      { icon: "💾", name: "IndexedDB", description: "Offline GPS queue & route cache" },
      { icon: "📍", name: "Haversine Geofencing", description: "500m radius stop detection" },
    ],

    statusSection: {
      built: [
        "Phone + password authentication (scrypt)",
        "Full trip lifecycle (create → board → in-progress → complete)",
        "Seat booking with multi-seat support",
        "Real-time stop tracking + geofencing",
        "+/- passenger counter (debounced)",
        "GPS batch tracking + offline IndexedDB queue",
        "WebSocket live tracking + REST fallback",
        "Ride request demand signaling",
        "Interactive driver onboarding tour",
      ],
      next: [
        "OTP-based phone verification",
        "Live map (Leaflet)",
        "Push notifications (FCM)",
        "Cloud deployment",
        "Analytics dashboard",
        "UPI payment integration",
      ],
    },
  },

  // =========================================================================
  // 8. SMART ATTENDANCE
  // =========================================================================
  {
    id: "smart-attendance",
    title: "Smart Attendance",
    tagline: "Face Recognition-Powered Automated Attendance",
    subtitle: "Full-Stack Project — React · Flask · OpenCV · dlib",
    category: "fullstack",
    company: "Freelance",
    period: "2024",
    year: 2024,
    status: "complete",
    colorScheme: "forest",

    problem: {
      heading: "Manual Attendance is Broken",
      cards: [
        { icon: "⏱️", title: "Time Consuming", description: "Roll-call or sign-in sheets waste 5-10 minutes every session, eating into productive class time across every lecture." },
        { icon: "👥", title: "Proxy Attendance", description: "Students easily sign for absent peers. Paper-based methods have zero way to verify who is actually physically present." },
        { icon: "📋", title: "Error-Prone Records", description: "Handwritten records are hard to digitize, search, or analyze. Data gets lost, miscounted, or becomes illegible." },
      ],
    },

    stats: {
      heading: "Before vs. After",
      items: [
        { value: "5-10 min", label: "Wasted per session → Under 3 seconds" },
        { value: "30%", label: "Proxy attendance → Zero (biometric)" },
        { value: "15%", label: "Data entry errors → Zero (digital)" },
        { value: "128-dim", label: "Face encoding for high accuracy matching" },
      ],
    },

    solution: {
      heading: "One Camera. Instant Attendance.",
      cards: [
        { icon: "🧑‍🎓", title: "1. Register Once", description: "Students register their face via webcam or photo upload. The system extracts a unique 128-dimensional facial encoding." },
        { icon: "📷", title: "2. Capture & Recognize", description: "Point a webcam at the class, capture a frame. The system detects all faces and matches against registered students in real-time." },
        { icon: "📊", title: "3. View & Export", description: "Browse attendance records with search and date filters. Download as CSV with a single click." },
      ],
    },

    flow: {
      heading: "Registration Flow",
      steps: [
        { icon: "📝", label: "Enter Details", description: "Input student name and unique roll number." },
        { icon: "📷", label: "Capture Face", description: "Use webcam or upload an image file." },
        { icon: "🔢", label: "Encode & Store", description: "dlib extracts 128-dim face vector. Stored in database." },
      ],
      secondaryFlow: {
        heading: "Attendance Flow",
        steps: [
          { icon: "📸", label: "Capture Frame", description: "Teacher captures a snapshot from webcam." },
          { icon: "🔍", label: "Detect & Match", description: "All faces detected, compared against stored encodings." },
          { icon: "✅", label: "Auto-Mark", description: "Matched students marked Present. Duplicates prevented." },
        ],
      },
    },

    architecture: {
      heading: "System Architecture",
      layers: [
        { name: "FRONTEND", boxes: [{ name: "React + Tailwind", tech: "4 pages (Home, Register, Attend, View)" }, { name: "React Webcam", tech: "Camera capture" }, { name: "Axios", tech: "REST API client" }] },
        { name: "BACKEND", boxes: [{ name: "Flask 3.1", tech: "5 REST endpoints" }, { name: "Marshmallow", tech: "Schema validation" }, { name: "Flask-CORS", tech: "Cross-origin" }] },
        { name: "ML / VISION", boxes: [{ name: "face_recognition", tech: "128-dim encodings" }, { name: "dlib (HOG)", tech: "Face detection" }, { name: "OpenCV", tech: "Image processing" }] },
        { name: "DATA", boxes: [{ name: "SQLite", tech: "Students + Attendance" }, { name: "File Storage", tech: "Face images on disk" }] },
      ],
    },

    decisions: {
      heading: "Key Design Decisions",
      items: [
        { icon: "🔢", title: "128-Dimensional Face Encoding", description: "dlib generates a compact but highly discriminative face vector. Comparison is a simple Euclidean distance calculation — fast and accurate." },
        { icon: "📷", title: "Multi-Face Single-Frame Detection", description: "One webcam capture detects and identifies all faces simultaneously. No need to capture each student individually." },
        { icon: "🔒", title: "One Mark Per Student Per Day", description: "Duplicate prevention built into the database layer. Same student can't be marked twice for the same date." },
      ],
    },

    tech: [
      { icon: "⚛️", name: "React 19 + Vite", description: "Frontend with Tailwind CSS" },
      { icon: "🐍", name: "Flask 3.1", description: "Python backend, 5 endpoints" },
      { icon: "👁️", name: "face_recognition + dlib", description: "HOG detection, 128-dim encoding" },
      { icon: "📸", name: "OpenCV", description: "Image processing pipeline" },
      { icon: "💾", name: "SQLite + SQLAlchemy", description: "Student & attendance storage" },
      { icon: "📷", name: "React Webcam", description: "Browser camera integration" },
    ],

    statusSection: {
      built: [
        "Student registration (webcam + file upload)",
        "128-dim face encoding via dlib",
        "Multi-face recognition in single frame",
        "Duplicate prevention per student per day",
        "Search & filter records",
        "CSV export with date-stamped files",
        "5 REST API endpoints",
        "Responsive UI (4 pages)",
      ],
      next: [
        "Authentication & role-based access",
        "Dashboard & analytics (trends, charts)",
        "Multi-class & subject support",
        "Liveness detection (anti-spoofing)",
        "Cloud deployment + PostgreSQL migration",
        "Mobile companion app",
      ],
    },
  },
]
