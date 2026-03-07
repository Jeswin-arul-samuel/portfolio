export const personalInfo = {
  name: "Jeswin Arul Samuel",
  title: "AI Solutions Architect",
  tagline: "Building intelligent systems that bridge business goals with cutting-edge AI",
  email: "jeswin.arul.samuel@gmail.com",
  phone: "+91 9566070120",
  phoneAlt: "+33 766516906",
  linkedin: "https://www.linkedin.com/in/jeswinarul",
  github: "https://github.com/Jeswin-arul-samuel",
  location: "Paris, France",
  bio: `I'm an AI-first technologist with a decade of experience driving innovation at the intersection of artificial intelligence, data, IoT, and robotics. My journey spans startups, enterprise tech, and academia — all connected by one mission: using technology to solve real-world problems and empower people through systems, tools, and education.

Currently, I architect Agentic AI systems and Human-in-the-Loop pipelines using LangGraph, OpenAI, and FastAPI. I've successfully deployed production systems achieving 98% accuracy in financial reconciliation and built AI assistants integrated with real-world business operations.

I'm seeking opportunities in AI Engineering, Solutions Architecture, or hybrid roles that connect technology with business impact.`,
  highlights: [
    { label: "Years Experience", value: "9+" },
    { label: "Professionals Trained", value: "3000+" },
    { label: "Ex-Amazon", value: "BI Engineer" },
    { label: "Education", value: "MSc AI, SKEMA Paris" },
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "Tamil", level: "Native" },
    { name: "Hindi", level: "Professional" },
    { name: "French", level: "Elementary" },
  ],
}

export const skills = {
  categories: [
    {
      name: "Generative AI & LLMs",
      icon: "Brain",
      skills: [
        "OpenAI",
        "Claude 3.5 Sonnet",
        "Gemini 2.0",
        "LangChain",
        "LangGraph",
        "LangSmith",
        "RAG Pipelines",
        "Vector Embeddings",
        "Prompt Engineering",
        "Fine-tuning (LoRA/QLoRA)",
        "CrewAI",
        "AutoGen",
      ],
    },
    {
      name: "Backend & APIs",
      icon: "Server",
      skills: [
        "Python",
        "FastAPI",
        "Django",
        "Flask",
        "SQLAlchemy",
        "Pydantic V2",
        "REST APIs",
        "Async Programming",
        "Streamlit",
        "Gradio",
      ],
    },
    {
      name: "Machine Learning",
      icon: "LineChart",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-Learn",
        "CNN/RNN/LSTM",
        "Transfer Learning",
        "NLP",
        "Computer Vision",
        "OpenCV",
        "Hugging Face",
      ],
    },
    {
      name: "Data & Cloud",
      icon: "Database",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Pinecone",
        "ChromaDB",
        "AWS (Lambda, S3, Textract)",
        "Docker",
        "Hadoop/Hive",
        "QuickSight",
        "Power BI",
      ],
    },
    {
      name: "Leadership & Business",
      icon: "Users",
      skills: [
        "Agile PM (APMG Certified)",
        "Team Leadership",
        "Stakeholder Management",
        "Technical Training",
        "Curriculum Development",
        "Product Management",
        "Business Development",
      ],
    },
  ],
}

export const projects = [
  {
    title: "AI-Powered Accounts Receivable Ledger Reconciliation",
    company: "Constient Global Solutions",
    period: "2025",
    category: "Agentic AI",
    problem: `## Business Context
Enterprise real estate and property management finance teams needed autonomous financial reconciliation of accounts receivable ledgers handling thousands of transactions monthly.

## Core Challenges
- Sparse transaction data with missing tenant identification in bank statement deposits
- Multi-tenant decomposition—single rent/operating expense payments covering multiple building accounts
- Accounts receivable consolidation from multiple inconsistent sources (bank statements, tenant files, GL coding)
- Financial account-level matching with missing GL codes and transaction context
- Inability to meet monthly close deadlines with 100% accuracy

## Current State Gap
Finance teams needed automated accounts receivable matching to accelerate close timelines and achieve complete ledger accuracy.`,
    approach: `## Architecture Overview
Enterprise-grade Agentic AI system built on LangGraph state machine orchestration with sophisticated multi-agent reasoning patterns. Implements ReAct (Reasoning + Acting) agents for autonomous financial decision-making with persistent checkpointing and state management for reliable multi-step workflows.

## LangGraph & LangChain Technical Stack
- **LangGraph State Machine Architecture** - Graph-based workflow with persistent state management, checkpointing for recovery, and node/edge execution patterns
- **Deep Agent Loops** - Multi-turn reasoning cycles with observation, thought, and action phases using ReAct protocol
- **Agentic Reasoning Agents** - Tool-using agents with dynamic tool selection based on financial context and GL reconciliation requirements
- **Memory & State Management** - Persistent conversation memory, agent state checkpointing, and transaction history tracking across multiple reconciliation cycles
- **Tool Ecosystem Integration** - LangChain tool bindings for PDF extraction, tenant matching, GL posting, and dashboard queries
- **Chain Composition** - Sequential and conditional chains for multi-stage financial processing with rollback capabilities

## Key Components
- **Financial Data Ingestion Agent** - Autonomous PDF extraction using Amazon Textract, LLM parsing with chain-of-thought reasoning, Pydantic schema validation
- **Autonomous Tenant Identification Agent** - Deep reasoning agent with multi-step chain logic for entity extraction from sparse bank narratives
- **Intelligent Accounts Receivable Matching Agent** - ReAct-pattern agent with tool use for GL matching, decomposition logic, and pattern analysis
- **Agentic Reconciliation State Machine** - LangGraph persistent checkpoints, state transitions, branching logic for partial/full reconciliation scenarios
- **Human-in-the-Loop Loop** - Feedback integration system with memory persistence for continuous agent model improvement
- **Financial Reporting Dashboard** - Autonomous query agent for dashboard generation

## Integration Points
- Bank statement sources and tenant master data systems
- GL infrastructure with autonomous posting capabilities
- MongoDB data store with Pydantic V2 validation schemas
- End-to-end agentic pipeline: PDF → Extraction Agent → Tenant ID Agent → AR Matching Agent → State Machine → HITL → GL Dashboard`,
    techStack: ["OpenAI", "LangGraph", "LangChain", "ReAct Agents", "State Machine Architecture", "Persistent Checkpointing", "Deep Agent Loops", "Tool Binding", "Chain Composition", "Multi-Agent Orchestration", "Agentic Reasoning", "Memory & State Management", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Pydantic V2", "Amazon Textract", "Python"],
    impact: `## Key Metrics
- 98% financial reconciliation accuracy on accounts receivable ledger
- 100% GL posting accuracy (zero financial errors in matched transactions)
- 83% autonomous tenant identification from sparse bank data
- 95% reduction in manual data entry
- 5-10 minute processing (vs. 2-3 weeks manual close)
- ~150 financial training data points generated monthly

## Operational Impact
- Reduced accounts receivable time-to-close from 2+ weeks to 2 days
- Accelerated monthly financial close process
- Autonomous AI agents handle complex scenarios through intelligent reasoning
- Multi-building payments, partial allocations, missing GL context now autonomous
- Eliminates manual reconciliation bottlenecks

## Scalability & Deployment
- Enterprise property portfolios with varying GL structures
- Multi-tenant compositions and property types
- Extensible to new financial structures and account types
- Foundation for expanding across real estate enterprise platforms`,
    featured: true,
  },
  {
    title: "Virtual Waiter",
    company: "Constient Global Solutions",
    period: "2025",
    category: "Agentic AI",
    problem: `## Business Context
Restaurant and hospitality operators needed autonomous conversational AI to handle customer-facing operations while reducing staff workload.

## Core Challenges
- Manual waiter/host workload—staff spent time on order-taking, reservations, and customer inquiries simultaneously
- Limited customer profiling—no autonomous systems to identify returning customers and deliver personalized recommendations
- Food ordering complexity—menu browsing, cart management, modifications, recommendations all required manual handling
- Table booking inefficiency—no autonomous system to accept and optimize table reservations
- Customer feedback bottleneck—complaints and feedback required manual intervention
- Recommendation gap—no intelligent upselling based on customer preferences and ordering history

## Current State Gap
Operations heavily dependent on human staff for all customer interactions. Lacked intelligent systems for personalization and autonomous task execution.`,
    approach: `## Architecture Overview
Enterprise-grade Agentic AI conversational system built on LangGraph multi-agent orchestration with deep reasoning loops and persistent state management. Implements sophisticated intent classification, dynamic tool selection, and memory-augmented reasoning for autonomous customer interaction across multiple business domains (ordering, booking, feedback).

## LangGraph & LangChain Technical Stack
- **LangGraph Multi-Agent Orchestration** - Graph-based agent orchestrator with persistent state machine, checkpointing for session recovery, and dynamic agent routing
- **Deep Conversational Agent Loops** - Multi-turn reasoning with ReAct pattern for intent understanding, entity extraction, and action planning across conversation turns
- **Agentic State Management** - Persistent conversation state, user preference memory, transaction state checkpointing, and context preservation across agent boundaries
- **Dynamic Tool Binding** - LangChain tool ecosystem for POS integration, inventory queries, reservation matching, and feedback ticket creation
- **Chain Composition Patterns** - Sequential chains for order flow, conditional branching for booking constraints, parallel chains for recommendation logic
- **Memory Systems** - Short-term conversation memory, long-term user preference learning, personalization state persistence, and feedback integration loops

## Core Agents with Deep Reasoning
- **Conversational Intent Classification Agent** - Multi-label intent classifier with entity extraction using chain-of-thought reasoning
- **Main Orchestrator Agent** - LangGraph state machine orchestrating sub-agent execution, managing state transitions, and maintaining conversation context
- **Autonomous Food Ordering Agent** - Deep reasoning agent with tool use for menu search, cart management, and order validation against inventory state
- **Autonomous Table Booking Agent** - ReAct-pattern agent with constraint satisfaction tools for matching preferences to available reservations
- **Complaints & Feedback Agent** - Multi-step reasoning agent for sentiment analysis, issue classification, and feedback state management
- **Conversational Response Agent** - LLM-driven response generation with personality injection and context awareness from persistent state

## Personalization & Intelligence Layer
- **User Fingerprinting & Memory Engine** - Persistent user state tracking, device fingerprinting, preference learning, and personalization memory
- **Intelligent Recommendation Agent** - Deep reasoning agent combining collaborative filtering, content-based matching, and user preference chains
- **Admin Query Agent** - Autonomous agent for analytics queries with tool bindings to reporting infrastructure

## Integrations
- PetPooja POS system with real-time inventory state management and order injection tools
- MongoDB for persistent user state, preferences, and long-term memory storage
- Tool-based agentic architecture enabling autonomous execution of all restaurant operations
- LangChain callback system for monitoring agent performance and user interactions`,
    techStack: ["OpenAI", "LangGraph", "LangChain", "Multi-Agent Orchestration", "Deep Reasoning Loops", "ReAct Pattern", "State Machine Architecture", "Persistent State Management", "Checkpointing & Recovery", "Dynamic Tool Binding", "Chain Composition", "Memory Systems", "Intent Classification", "Entity Extraction", "Agentic Reasoning", "FastAPI", "Python", "PostgreSQL", "MongoDB", "Redis", "PetPooja POS", "Pydantic V2"],
    impact: `## Key Metrics
- 80%+ autonomous customer identification and recognition without explicit login
- Handles end-to-end customer journeys autonomously (ordering, booking, feedback)
- Drives incremental sales through intelligent recommendations
- Reduces staff dependency for order-taking and host station functions
- Natural, conversational interactions (waiter-like, not robotic)

## Operational Impact
- Handles end-to-end customer journeys from menu browsing through order placement without human intervention
- Enables streamlined operations through natural AI interaction
- Improved customer experience with personalized, context-aware responses
- Reduces staff workload for order-taking and host station functions
- Maintains high service quality through intelligent recommendations and feedback handling

## Scalability & Deployment
- Seamless integration with real-world POS operations (PetPooja)
- Multi-property capable with extensible architecture
- Designed to scale to hotel chains, hospital canteens, and hospitality groups
- Supports varying operational models and restaurant types`,
    featured: true,
  },
  {
    title: "Automated Research & Ideation Engine",
    company: "Independent Project",
    period: "2024",
    category: "Generative AI",
    problem: "Researchers and innovators spend excessive time aggregating and synthesizing academic papers to generate new solution concepts.",
    approach: "Architected an AI Agent solution that aggregates academic papers based on technical queries, extracts core methodologies using LLMs, and generates novel, futuristic solution concepts based on synthesized research.",
    techStack: ["LangChain", "OpenAI", "RAG", "Vector Embeddings", "Python"],
    impact: "Automated the research synthesis process, enabling rapid ideation of novel solutions from existing academic knowledge.",
    featured: true,
  },
  {
    title: "AI-Driven Adaptive Study Planner",
    company: "Independent Project",
    period: "2024",
    category: "EdTech AI",
    problem: "Students struggle to create effective study schedules that adapt to their learning patterns and time constraints.",
    approach: "Developed a personalized EdTech agent for Grade 12 curriculum that dynamically generates study schedules by analyzing student retention metrics and time availability to optimize exam preparation.",
    techStack: ["Python", "LangChain", "OpenAI", "Streamlit"],
    impact: "Personalized learning paths that adapt based on student performance and available study time.",
    featured: true,
  },
  {
    title: "GenAI Project Suite",
    company: "Personal Portfolio",
    period: "2024",
    category: "Generative AI / Agentic AI",
    problem: "Demonstrating practical applications of LLM technologies and Agentic AI patterns across diverse use cases.",
    approach: "Built comprehensive suite of GenAI applications showcasing Agentic AI patterns and LangChain/CrewAI frameworks: Q&A Chatbots (LangChain with OpenAI + Ollama multi-model chains), PDF RAG Chatbot (semantic search with Groq optimization), SQL Chatbot (database interaction agents with tool use), MathGPT (custom LLMMathChain with reasoning), AI Search Engine (Zero-shot ReAct agents with dynamic tool selection), YT-to-Blog converter (CrewAI multi-agent orchestration with role-based agent hierarchy). Demonstrates ReAct pattern implementation, agent tool binding, memory management, and chain composition across frameworks.",
    techStack: ["LangChain", "CrewAI", "OpenAI", "Ollama", "Groq", "ReAct Agents", "FAISS", "ChromaDB", "Vector Embeddings", "Tool Use", "Agent Orchestration", "Streamlit", "Python"],
    impact: "Demonstrated versatility across RAG pipelines, tool-use agents, multi-agent systems (CrewAI), ReAct reasoning patterns, and multiple LLM providers. Showcased practical Agentic AI implementation patterns including agent memory, state management, and tool ecosystem integration.",
    featured: false,
  },
  {
    title: "Deep Learning Projects",
    company: "Personal Portfolio",
    period: "2023-2024",
    category: "Machine Learning",
    problem: "Applying deep learning to real-world problems in computer vision, NLP, and reinforcement learning.",
    approach: "Developed multiple DL models: Human emotion detection from facial expressions (76% accuracy on AffectNet), Disease prediction models for cardiovascular and diabetes (87% accuracy), Crop disease detection deployed on drones with OpenCV, Reinforcement learning agents (DQN, DCQN, A2C) for game environments.",
    techStack: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "CNN", "RNN", "LSTM", "Gymnasium"],
    impact: "Demonstrated end-to-end ML pipeline from data processing to model deployment, including edge deployment on drones.",
    featured: false,
  },
  {
    title: "Customs Audit Automation Dashboard",
    company: "Amazon",
    period: "2023",
    category: "Data Engineering",
    problem: "Manual auditing of customs broker data was limited to less than 1% coverage, with data quality issues causing downstream processing errors.",
    approach: "Developed data schemas to streamline onboarding of customs broker partners. Engineered automated data validation rules and quality gates. Built an automated audit dashboard using QuickSight and SQL.",
    techStack: ["Python", "SQL", "AWS QuickSight", "Data Validation", "ETL"],
    impact: "Improved data readiness from 38% to 86%. Increased audit coverage from <1% to 99% across 3 data sources.",
    featured: true,
  },
  {
    title: "Import/Export Data Standardization",
    company: "Amazon",
    period: "2023",
    category: "Data Engineering",
    problem: "Post-Brexit UK-EU import/export operations faced complexity with multiple external logistics brokers submitting filing data in inconsistent formats, causing data quality and compliance issues.",
    approach: "Built data lake for standardizing filing data from multiple external logistics brokers with JSON schemas, business rules, and data validation pipelines. Engineered automated data validation rules with pre-commit and post-commit quality checks. Integrated with audit automation for cross-validation of 3 sources of truth: government filings, internal data, and broker data.",
    techStack: ["Python", "SQL", "AWS QuickSight", "ETL", "Data Validation", "JSON Schemas"],
    impact: "Onboarded data from multiple international logistics partners with consistent quality standards. Automated scripts flag and report discrepancy details in real-time. Increased audit coverage from <1% to 99% of documents across 3 data sources.",
    featured: true,
  },
]

export const experience = [
  {
    company: "Constient Global Solutions",
    role: "AI Solutions Architect / Lead AI Engineer",
    location: "Remote",
    period: "July 2025 – Present",
    type: "current",
    category: "work",
    domains: ["Hospitality", "Finance", "Real Estate"],
    achievements: [
      "Led team of engineers through full SDLC, conducting code reviews and mentorship",
      "Built scalable API engine on FastAPI handling omnichannel communication and payments",
    ],
    projects: [
      {
        name: "Hospitality Virtual Assistant",
        description: "Multi-agent AI system for hospitality industry with food ordering, semantic menu search, table booking, complaint logging, and feedback collection. Main orchestrator coordinates specialized sub-agents using ReAct reasoning patterns.",
        techStack: ["FastAPI", "PostgreSQL", "MongoDB", "Redis", "Pydantic V2", "LangChain", "LangGraph"],
        highlights: [
          "Integrated with POS system for live order injection and tracking",
          "Sentiment analysis for auto-ticket creation on complaints",
          "BI dashboard for customer satisfaction metrics",
        ],
      },
      {
        name: "Cash Reconciliation AI",
        description: "Automated AI solution for cash reconciliation in commercial real estate. AI-powered tenant identification from bank statements with AI-powered reconciliation agent matching payments to line items including rent, insurance, and operating expenses.",
        techStack: ["OpenAI", "LangGraph", "FastAPI", "PostgreSQL", "Redis"],
        highlights: [
          "End-to-end pipeline from bank statement ingestion to BI dashboard",
          "Human-in-the-Loop pipeline for ambiguous transaction review",
          "Continuous feedback loop improving model accuracy",
        ],
      },
    ],
  },
  {
    company: "Independent AI Consultant",
    role: "Generative AI Engineer & Researcher",
    location: "Remote",
    period: "Apr 2024 – May 2025",
    type: "past",
    category: "work",
    domains: ["EdTech", "Research & Innovation"],
    achievements: [
      "Trained professionals in Data Science, Analytics, and AI",
      "Deep research into Agentic AI frameworks and LLM architectures",
    ],
    projects: [
      {
        name: "Personalized Learning Assistant",
        description: "AI tutor for high school students with conversational profiling of capabilities, mindset, and personality. Adaptive content delivery adjusted based on student's grasp level with stealth testing and standardized quizzes.",
        techStack: ["Python", "LangChain", "OpenAI", "Streamlit"],
        highlights: [
          "Dynamic study plans based on learning ability assessment",
          "Subject-specific frameworks for math, physics, and chemistry",
          "Two testing modes: stealth (conversational) and standardized",
        ],
      },
      {
        name: "Research Idea Generator",
        description: "AI tool for recommending novel research directions and innovations. Searches patents and research papers from recent years, performs deep analysis on existing solutions, and generates novel recommendations for unexplored areas.",
        techStack: ["LangChain", "OpenAI", "RAG", "Vector Embeddings", "Python"],
        highlights: [
          "Integration with Google Patents and academic databases",
          "Deep research synthesis on existing implementations",
          "LLM-generated novel recommendations for research/products",
        ],
      },
    ],
  },
  {
    company: "Amazon",
    role: "Business Intelligence Engineer",
    location: "Luxembourg",
    period: "Jul 2023 – Dec 2023",
    type: "past",
    category: "work",
    domains: ["Logistics", "Trade Compliance"],
    achievements: [
      "Collaborated with EU trade compliance on regulatory data flows",
    ],
    projects: [
      {
        name: "Import/Export Data Standardization",
        description: "Post-Brexit UK-EU import/export compliance project. Built data lake for standardizing filing data from multiple external logistics brokers with JSON schemas, business rules, and data validation pipelines.",
        techStack: ["Python", "SQL", "AWS QuickSight", "ETL", "Data Validation"],
        highlights: [
          "Onboarded data from multiple international logistics partners",
          "Pre-commit and post-commit data quality checks",
          "ETL pipeline with transformation scripts for compliance",
        ],
      },
      {
        name: "Trade Services Audit Automation",
        description: "Automated audit system for Global Trade Services team to validate import/export filings from partner brokers. Built dashboard integrating 3 sources of truth: government filings, Amazon internal data, and broker data.",
        techStack: ["Python", "SQL", "AWS QuickSight", "ETL", "Data Validation"],
        highlights: [
          "Cross-validated data from 3 sources to identify filing discrepancies",
          "Automated scripts to flag and report discrepancy details",
          "Increased audit coverage from <1% to 99% of documents",
        ],
      },
    ],
  },
  {
    company: "SKEMA Business School",
    role: "MSc Artificial Intelligence for Business Transformation",
    location: "Paris, France",
    period: "Sep 2022 – Dec 2023",
    type: "past",
    category: "education",
    achievements: [
      "Thesis: Social factors affecting students' performance in Virtual Learning Environments",
    ],
  },
  {
    company: "SKEMA Business School",
    role: "Post Graduate Diploma in International Management",
    location: "Paris, France",
    period: "Sep 2022 – Dec 2023",
    type: "past",
    category: "education",
    achievements: [
      "Dual degree program alongside MSc in AI",
    ],
  },
  {
    company: "Informatica Business Solutions",
    role: "Senior Curriculum Developer",
    location: "Bangalore (Remote)",
    period: "Nov 2021 – Aug 2022",
    type: "past",
    category: "work",
    domains: ["Enterprise Software", "Data Management"],
    achievements: [
      "Designed curriculum for Cloud Services (IICS), MDM, ETL (PowerCenter), and Big Data",
      "Created 4 instructor-led courses with technical labs increasing sales pipeline by 22%",
      "Developed e-learning courses using Articulate Rise 360 and Adobe tools",
      "Managed team of 12 trainers globally interfacing with 15+ clients weekly",
    ],
  },
  {
    company: "Lema Labs Technologies",
    role: "Senior Engineer & Multiple Roles",
    location: "Chennai, India",
    period: "Oct 2015 – Sep 2021",
    type: "past",
    category: "work",
    domains: ["EdTech", "Robotics", "IoT"],
    description: "IIT Madras incubated EdTech startup where I grew from Robotics Engineer to Senior Engineer, wearing multiple hats.",
    achievements: [
      "Led development of 13-week ML course contributing to 60% increase in company revenue",
      "Trained and mentored 3000+ clients with 30%+ winning hackathons and competitions",
      "Spearheaded digital transformation during COVID, retaining 60% of annual revenue",
      "Co-founded Lema Community makerspace, organizing 36-hour makeathons",
      "Built and deployed custom LMS on OpenEDX during pandemic pivot",
      "Won 1st place in Micro Mouse Challenge at World Robotics Championship",
    ],
  },
  {
    company: "KCG College of Technology",
    role: "BE Electronics and Communication Engineering",
    location: "Chennai, India",
    period: "Aug 2010 – Jun 2014",
    type: "past",
    category: "education",
    achievements: [],
  },
]

export const certifications = [
  "Agile Project Management (AgilePM) Foundation – APMG International",
  "Complete Generative AI with LangChain and HuggingFace – Udemy",
  "LLMs: Developer's Masterclass – Udemy",
  "Machine Learning – Andrew NG (Coursera)",
  "Data Analyst with Power BI – Datacamp",
  "Leadership Development Program – Compassion International",
]

export const awards = [
  "1st place in Micro Mouse Challenge at World Robotics Championship",
  "Recognised by Lema Labs as key leader for ensuring recurring customer base",
  "Best solution award by Orange Telecom for E-Sports product ideation",
  "Invited as guest lecturer at SRM University and SR College of Engineering",
  "Chief adjudicator for multiple hackathons and robotics competitions",
]

export const education = [
  {
    degree: "MSc Artificial Intelligence for Business Transformation",
    school: "SKEMA Business School",
    location: "Paris, France",
    period: "Sep 2022 – Dec 2023",
    details: "Thesis: Social factors affecting students' performance in Virtual Learning Environments",
  },
  {
    degree: "Post Graduate Diploma in International Management",
    school: "SKEMA Business School",
    location: "Paris, France",
    period: "Sep 2022 – Dec 2023",
  },
  {
    degree: "BE Electronics and Communication Engineering",
    school: "KCG College of Technology",
    location: "Chennai, India",
    period: "Aug 2010 – Jun 2014",
  },
]

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]
