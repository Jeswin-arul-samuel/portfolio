/**
 * MASTER RESUME DATASET - Jeswin Arul Samuel
 * =============================================
 * Comprehensive dataset consolidating all information from:
 * - portfolio-data.ts
 * - portfolio-knowledge-base.ts
 * - Freelancer.pdf (voice transcript)
 * - Amazon Lux.pdf (voice transcript)
 * - Lema labs exp.pdf (voice transcript)
 * - Informatica.pdf (voice transcript)
 * - Constient.pdf (voice transcript)
 *
 * Purpose: Single source of truth for generating role-specific resumes.
 * All conflicting data has been resolved with Jeswin directly.
 *
 * Last updated: 2026-04-06
 */

export const masterResumeDataset = {

  // ============================================================================
  // PERSONAL INFORMATION
  // ============================================================================
  personal: {
    fullName: "Jeswin Arul Samuel",
    currentTitle: "AI Solutions Architect",
    tagline: "Building intelligent systems that bridge business goals with cutting-edge AI",
    email: "jeswin.arul.samuel@gmail.com",
    phone: {
      india: "+91 9566070120",
      france: "+33 766516906",
    },
    linkedin: "https://www.linkedin.com/in/jeswinarul",
    github: "https://github.com/Jeswin-arul-samuel",
    location: "Paris, France",
    languages: [
      { name: "English", level: "Native" },
      { name: "Tamil", level: "Native" },
      { name: "Hindi", level: "Professional" },
      { name: "French", level: "Elementary" },
    ],
    yearsOfExperience: "10+",
    yearsOfExperienceNarrative: "A decade",
    yearsOfExperienceNotes: "Calendar elapsed since first role (Oct 2015). Active working time is ~9 years excluding MSc (Sep 2022 - Jun 2023) and short job-search gaps.",
    totalPeopleTrained: "3000+",
    bio: `AI-first technologist with a decade of experience driving innovation at the intersection of artificial intelligence, data, IoT, and robotics. Journey spans startups, enterprise tech, and academia — all connected by one mission: using technology to solve real-world problems and empower people through systems, tools, and education. Currently architecting Agentic AI systems and Human-in-the-Loop pipelines. Successfully deployed production systems achieving 98% accuracy in financial reconciliation and built AI assistants integrated with real-world business operations.`,
    seekingRoles: [
      "AI Solutions Architect",
      "Agentic AI Solutions Architect",
      "Agentic AI Engineer",
      "Technical Product Manager (AI)",
      "AI Technology Consultant",
      "Pre-Sales / Solutions Engineer (AI)",
      "Technical Program Manager (AI/ML)",
      "Founding Engineer at AI Startup",
    ],
    targetCompanyTypes: [
      "Early-stage AI startups (hands-on technical leadership)",
      "Enterprise tech companies (large-scale system architecture)",
      "Consultancies (helping clients adopt Agentic AI)",
      "Scale-ups (building AI product capabilities)",
    ],

    hobbies: [
      { name: "Building things / Tinkering", note: "Side projects, maker activities — extends naturally from professional work but genuinely enjoys the process of building." },
      { name: "Badminton", note: "Active sport." },
      { name: "Football", note: "Active sport." },
      { name: "Board games", note: "Plays regularly with friends — signals social, strategic thinking." },
      { name: "Hiking & Trekking", note: "Outdoor adventure — signals endurance, comfort with challenge." },
      { name: "Motorcycle road trips", note: "Explores on motorbike — signals independence, adventure, love of travel." },
    ],

    interests: [
      { name: "AI research & frontier technology", note: "Follows new models, papers, breakthroughs. Directly reinforces professional brand." },
      { name: "Robotics", note: "Long-standing interest from Lema Labs era. Follows the field even after transitioning to AI." },
      { name: "Photography", note: "Creative outlet. Pairs well with travel / road trips." },
      { name: "Psychology of the human mind", note: "Genuine intellectual curiosity. Connects to the learning science work in GLS (psychometric frameworks, motivation theory, cognitive load)." },
      { name: "History & Geography", note: "Fascinated by the rise and fall of empires, understanding cultures. Shows intellectual breadth and cross-cultural curiosity — relevant for someone working internationally." },
    ],

    // Strategic notes for resume use:
    // - For TECHNICAL roles: lead with "Building things" + "AI research" + "Robotics"
    // - For LEADERSHIP/PM roles: lead with "Board games" (strategic) + "Psychology" + "History" (understanding people/systems)
    // - For EUROPEAN CVs: include sports + travel/motorcycle — shows active lifestyle and cultural integration
    // - For STARTUP roles: "Building things" + "Motorcycle road trips" (independence, adventure) + "Board games" (scrappy fun)
    // - "Psychology of the human mind" is a great interview conversation starter — connects to GLS, user empathy, team leadership
    // - "Rise and fall of empires" is memorable and unusual — makes you stand out from generic "reading, travel, music" hobbies
  },

  // ============================================================================
  // EDUCATION
  // ============================================================================
  education: [
    {
      degree: "MSc Artificial Intelligence for Business Transformation",
      institution: "SKEMA Business School",
      location: "Paris, France",
      period: "Sep 2022 – Dec 2023",
      thesis: "Social factors affecting students' performance in Virtual Learning Environments",
      relevance: "Formalizes AI expertise with business transformation lens. Thesis demonstrates understanding of learning science and AI in education.",
      overlapNote: "Amazon internship (Jul-Dec 2023) was the mandatory end-of-study internship for this MSc programme. The dates overlap intentionally — standard in French MSc programmes.",
    },
    {
      degree: "Post Graduate Diploma in International Management",
      institution: "SKEMA Business School",
      location: "Paris, France",
      period: "Sep 2022 – Dec 2023",
      note: "Dual degree program alongside MSc in AI",
      relevance: "Business acumen and cross-cultural leadership perspective for leading international teams.",
    },
    {
      degree: "BE Electronics and Communication Engineering",
      institution: "KCG College of Technology",
      location: "Chennai, India",
      period: "Aug 2010 – Jun 2014",
      relevance: "Hardware and signals foundation. Enables IoT and robotics work. Complements software/AI expertise.",
    },
  ],

  // ============================================================================
  // CERTIFICATIONS
  // ============================================================================
  certifications: [
    { name: "Agile Project Management (AgilePM) Foundation", provider: "APMG International", category: "management" },
    { name: "Complete Generative AI with LangChain and HuggingFace", provider: "Udemy", category: "ai" },
    { name: "LLMs: Developer's Masterclass", provider: "Udemy", category: "ai" },
    { name: "Machine Learning", provider: "Andrew NG (Coursera)", category: "ml" },
    { name: "Data Analyst with Power BI", provider: "Datacamp", category: "data" },
    { name: "Leadership Development Program", provider: "Compassion International", category: "leadership" },
  ],

  // ============================================================================
  // AWARDS & RECOGNITION
  // ============================================================================
  awards: [
    {
      title: "1st Place - Micro Mouse Challenge",
      event: "World Robotics Championship",
      significance: "International robotics recognition",
    },
    {
      title: "Key Leader Recognition",
      organization: "Lema Labs",
      significance: "Recognized for ensuring recurring customer base and revenue growth",
    },
    {
      title: "Best Solution Award",
      organization: "Orange Telecom",
      project: "E-Sports product ideation",
      significance: "Innovation and product thinking recognition",
    },
    {
      title: "Guest Lecturer",
      institutions: ["SRM University", "SR College of Engineering"],
      significance: "Academic credibility and thought leadership",
    },
    {
      title: "Chief Adjudicator",
      context: "Multiple hackathons and robotics competitions",
      significance: "Community influence and industry credibility",
    },
  ],

  // ============================================================================
  // SKILLS - COMPREHENSIVE MATRIX
  // ============================================================================
  skills: {
    generativeAI: {
      label: "Generative AI & LLMs",
      items: [
        "OpenAI (GPT-4o, GPT-4o-mini)",
        "Claude 3.5 Sonnet",
        "Google Gemini API",
        "Ollama (local inference)",
        "LangChain",
        "LangGraph",
        "LangSmith",
        "CrewAI",
        "AutoGen",
        "RAG Pipelines",
        "Vector Embeddings",
        "Prompt Engineering",
        "Fine-tuning (LoRA/QLoRA)",
        "ReAct Agents",
        "Multi-Agent Orchestration",
        "State Machine Architecture",
        "Persistent Checkpointing",
        "Deep Agent Loops",
        "Tool Binding",
        "Chain Composition",
        "Agentic Reasoning",
        "Memory & State Management",
        "Human-in-the-Loop Pipelines",
        "Intent Classification",
        "Entity Extraction",
      ],
    },
    backendAndAPIs: {
      label: "Backend & APIs",
      items: [
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
    machineLearning: {
      label: "Machine Learning & Deep Learning",
      items: [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-Learn",
        "CNN / RNN / LSTM",
        "Transfer Learning",
        "NLP",
        "Computer Vision",
        "OpenCV",
        "Hugging Face",
        "Reinforcement Learning (DQN, DCQN, A2C)",
        "Pandas",
        "NumPy",
      ],
    },
    dataAndCloud: {
      label: "Data & Cloud",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Pinecone",
        "ChromaDB",
        "FAISS",
        "AWS (Lambda, S3, Textract)",
        "Docker",
        "Hadoop / Hive",
        "QuickSight",
        "Power BI",
        "ETL / ELT Pipelines",
        "Data Validation & Quality Gates",
        "JSON Schemas",
        "SQL",
        "Neo4j (Graph Database)",
        "pgvector (Vector Embeddings in PostgreSQL)",
      ],
    },
    frontendAndMobile: {
      label: "Frontend & Mobile",
      items: [
        "React 18/19",
        "TypeScript",
        "React Native / Expo",
        "Vite",
        "Capacitor (native mobile from web)",
        "WebSocket (real-time communication)",
        "TailwindCSS",
        "IndexedDB (offline storage)",
        "Zustand (state management)",
      ],
    },
    hardwareAndIoT: {
      label: "Hardware, Robotics & IoT",
      items: [
        "Embedded C",
        "ATmega Microcontrollers",
        "Register-level Programming",
        "ADC / PWM Protocols",
        "MQTT Protocol",
        "Sensor Integration (IR, LDR, Potentiometer)",
        "Motor Control (DC, Stepper, Brushless)",
        "PCB Design Basics",
        "Line Follower / Obstacle Avoidance Robots",
        "IoT Device Control (Local & Internet)",
      ],
    },
    leadershipAndBusiness: {
      label: "Leadership & Business",
      items: [
        "Agile Project Management (APMG Certified)",
        "Team Leadership (led 12 engineers at Constient, functionally led 12 trainers at Informatica)",
        "Stakeholder Management",
        "Technical Training & Mentorship",
        "Curriculum Design & Development",
        "Product Management",
        "Business Development",
        "Client Consulting",
        "Cross-cultural Communication",
        "Revenue Growth Strategy",
        "Digital Transformation",
      ],
    },
    tools: {
      label: "Tools & Platforms",
      items: [
        "Git",
        "OpenEDX (LMS)",
        "Articulate Rise 360",
        "Adobe Content Tools",
        "Amazon Internal Tools (ETL, Data Central)",
        "POS System Integration",
        "Property Management ERP (via API)",
      ],
    },
  },

  // ============================================================================
  // TECHNOLOGY EXPERIENCE (verified years per technology)
  // ============================================================================
  // Use these numbers when a resume or job application asks for years per skill.
  // All values verified with Jeswin on 2026-04-05.
  technologyExperience: {
    // --- Core programming & engineering ---
    python: {
      years: "7+",
      since: "2018",
      context: "Started with ML at Lema Labs (scikit-learn, Pandas, NumPy). Continued through Amazon (data validation scripts), freelance (LangChain apps), and Constient (production FastAPI + Agentic AI).",
    },
    sql: {
      years: "2+",
      since: "2023",
      context: "Amazon (audit automation, ETL, 3-source cross-validation). Continued at Constient for reconciliation queries.",
    },
    embeddedC: {
      years: "6",
      since: "2015",
      until: "2021",
      context: "Lema Labs — ATmega16 microcontrollers, register-level programming, ADC/PWM protocols for robotics.",
    },

    // --- Machine Learning & Deep Learning ---
    machineLearning: {
      years: "7+",
      since: "2018",
      context: "Self-taught ML at Lema Labs (Andrew Ng's Coursera course). Designed and delivered 13-week ML curriculum. Mentored 20-30+ working professionals on real industry ML projects. Continued through freelance and production systems.",
    },
    deepLearning: {
      years: "4",
      since: "2019",
      context: "Started at Lema Labs in 2019 — hands-on DL projects alongside students (early TensorFlow). Deeper hands-on work during MSc and independent portfolio period (2023-2024): emotion detection (76% AffectNet), disease prediction (87%), crop disease on drones, RL agents.",
    },
    computerVision: {
      years: "3",
      since: "2023",
      context: "OpenCV for crop disease detection (drone deployment), emotion detection on AffectNet, VLM-based product identification in freelance work.",
    },
    reinforcementLearning: {
      years: "2",
      since: "2023",
      context: "Portfolio projects using DQN, DCQN, A2C algorithms on game environments via Gymnasium.",
    },

    // --- Generative AI & Agentic AI ---
    generativeAI: {
      years: "2",
      since: "Apr 2024",
      context: "Started upskilling in GenAI/LLMs immediately after Amazon internship. Built GenAI project suite, freelance POCs, then production systems at Constient.",
    },
    agenticAI: {
      years: "2",
      since: "Apr 2024",
      context: "True agentic systems from day one of freelance work — Research Idea Generator (patent search agents), Personalized Learning Assistant (multi-step reasoning), Product Description Generator (VLM tool-use). Scaled to production multi-agent systems at Constient (6-agent AR reconciliation, 10-agent Virtual Waiter). Currently building 3 more multi-agent systems: Alumni Connect (5 agents + Neo4j graph), LT Ride (real-time transport coordination), GLS (5 agents + 9 learning algorithms).",
    },
    langChain: {
      years: "2",
      since: "Apr 2024",
      context: "Used across all freelance POCs, production systems at Constient, and current projects (Alumni Connect, GLS). Chain composition, tool binding, memory management, callback systems.",
    },
    langGraph: {
      years: "1+",
      since: "2025",
      context: "State machine orchestration, persistent checkpointing, multi-agent routing. Production at Constient (AR reconciliation, Virtual Waiter). Currently used in Alumni Connect (5-agent intent routing) and GLS (5-agent tutoring orchestration).",
    },
    openAI: {
      years: "2",
      since: "Apr 2024",
      context: "GPT-4o for complex reasoning tasks, GPT-4o-mini for simpler tool-calling and intent classification. Production deployments at Constient.",
    },
    rag: {
      years: "2",
      since: "2024",
      context: "PDF RAG chatbot, Research Idea Generator, semantic menu search in Virtual Waiter. Used Pinecone, ChromaDB, FAISS.",
    },
    promptEngineering: {
      years: "2",
      since: "Apr 2024",
      context: "Chain-of-thought prompting, structured output with Pydantic, few-shot examples. Firefighting example: achieved 77% accuracy on failing Constient project on day one through prompt engineering alone before building the agent architecture.",
    },

    // --- Backend & APIs ---
    fastAPI: {
      years: "1",
      since: "2025",
      context: "Built scalable API engine at Constient handling omnichannel communication, payments, and AI agent endpoints.",
    },
    restAPIs: {
      years: "3+",
      since: "2023",
      context: "REST API design and integration across Amazon, freelance, and Constient projects.",
    },

    // --- Data & Cloud ---
    postgreSQL: {
      years: "1",
      since: "2025",
      context: "Primary relational store for Constient production systems.",
    },
    mongoDB: {
      years: "1",
      since: "2025",
      context: "Document store for agent state, user profiles, and unstructured financial data at Constient.",
    },
    awsServices: {
      years: "2+",
      since: "2023",
      context: "QuickSight for Amazon audit dashboards. Textract for financial PDF extraction at Constient. Lambda/S3 exposure.",
    },
    etlAndDataPipelines: {
      years: "2+",
      since: "2023",
      context: "Amazon: standardized customs broker data pipelines, validation frameworks, data quality gates. Constient: financial data ingestion pipelines.",
    },
    dataValidation: {
      years: "2+",
      since: "2023",
      context: "JSON schemas at Amazon, Pydantic V2 schemas at Constient, pre/post-commit validation checks.",
    },

    // --- Hardware, IoT, Robotics ---
    robotics: {
      years: "6",
      since: "2015",
      until: "2021",
      context: "Lema Labs — designed and built robots (line followers, obstacle avoiders, Cartesian robots). Led World Robotics Championship team (Micro Mouse Challenge winner). Designed curriculum for school students through working professionals.",
    },
    iot: {
      years: "5",
      since: "2016",
      until: "2021",
      context: "Self-taught IoT at Lema Labs. Designed 2-day workshop curriculum on local network device control and internet automation with MQTT. Delivered to batches of 150-180 people.",
    },

    // --- Leadership & Soft skills ---
    technicalTraining: {
      years: "10+",
      since: "2015",
      context: "Continuous across entire career. 3000+ professionals trained directly. Lema Labs (school, university, working professionals), Informatica (train-the-trainer for 12 trainers globally), freelance (~10 institutions), Constient (engineering team mentorship).",
    },
    teamLeadership: {
      years: "5+",
      since: "~2019",
      context: "Informal leadership at Lema Labs (2019-2021: community, hackathons, digital transformation). Functional lead at Informatica (12 trainers globally — trained and coordinated, not direct reports). Engineering team lead at Constient (12 engineers).",
    },
    curriculumDesign: {
      years: "7",
      since: "2015",
      until: "2022",
      context: "Lema Labs (3 major programs + upgrades), Informatica (4 instructor-led courses + e-learning modules for 8 products).",
    },
    stakeholderManagement: {
      years: "3+",
      since: "2021",
      context: "Informatica (train-the-trainer for 12 global trainers who delivered to clients), Amazon (external broker data teams negotiation), Constient (direct client engagement for reconciliation and hospitality projects).",
    },
  },

  // ============================================================================
  // WORK EXPERIENCE - DETAILED
  // ============================================================================
  experience: [
    // -----------------------------------------------------------------------
    // CURRENT: FREELANCE — AGENTIC AI SOLUTIONS ENGINEER & CONSULTANT
    // -----------------------------------------------------------------------
    {
      company: "Independent — Agentic AI Solutions Engineer & Consultant",
      role: "Agentic AI Solutions Engineer & Consultant",
      location: "Remote (Paris, France)",
      period: "Feb 2026 – Present",
      duration: "Ongoing",
      type: "freelance",
      domains: ["EdTech", "Alumni Networking", "Public Transport / Mobility", "Agentic AI"],
      context: "After completing the Constient engagement, continued freelancing — building full-stack AI products and continuing to deepen Agentic AI expertise. Building three substantial projects: an AI-powered alumni networking platform, a digital transport system for rural India, and continuing development of the Generative Learning System (originally started in the previous freelance period).",

      activities: {
        productBuilding: "Designing and building 3 full-stack AI products end-to-end (architecture, backend, AI agents, frontend, databases)",
        upskilling: "Advanced LangGraph patterns, Anthropic/Claude ecosystem (Claude API, Agent SDK, MCP protocol), new agentic frameworks",
        continuation: "GLS (Generative Learning System) evolved from earlier POC into a full adaptive tutoring system with 9 learning science algorithms",
      },

      projects: [
        {
          name: "Alumni Connect — AI-Powered Alumni Networking Platform",
          domain: "Alumni Networking / Social Tech",
          type: "Independent Product",
          status: "Core MVP built, coming next: cloud deployment and Phase 1 features",

          problemStatement: {
            summary: "Alumni lose touch after graduation. Traditional directories with form-based search don't work — they require users to know exactly what they're looking for. No AI-native alumni platform exists using conversational search.",
            marketContext: [
              "1000s of alumni per institution with zero digital connection",
              "80% of alumni lose contact within 2 years of graduation",
              "0 AI-native alumni platforms using conversational search",
            ],
          },

          solution: "Chat-first alumni networking platform where users discover and connect with alumni through natural language conversation instead of form-based search.",

          architecture: {
            overview: "LangGraph multi-agent state machine with Neo4j graph database for relationship queries and pgvector for semantic search. Real-time WebSocket communication for AI chat and private messaging.",
            agents: [
              { name: "Router Node", description: "Intent classification — routes every message to the appropriate sub-agent" },
              { name: "Onboarding Sub-Agent", description: "Chat-based profile collection using structured output (Pydantic). No forms — AI asks questions conversationally with pause/resume support. Redis-cached with Postgres JSONB backup." },
              { name: "Search Sub-Agent (ReAct Pattern)", description: "Natural language alumni search using 3 tools: structured Cypher queries, custom Cypher for complex queries, and similarity-based matching via shared interests. Queries Neo4j graph." },
              { name: "Connect Handler", description: "Extracts target alumni from conversation, creates connection in PostgreSQL and Neo4j relationship graph" },
              { name: "Profile Update Sub-Agent", description: "Identifies field to update, validates, regenerates profile narrative + vector embedding, syncs across Postgres and Neo4j" },
              { name: "General Chat Handler", description: "Fallback conversational handler for non-matching messages" },
            ],
          },

          keyInnovations: [
            "Neo4j graph for relationship queries — enables queries like 'alumni who share 3+ interests with me' that are impossible in SQL",
            "Dual search: Neo4j graph (structured) + pgvector embeddings (semantic/fuzzy) — handles both 'doctors in Mumbai' and 'people like me'",
            "Redis → Postgres onboarding cache — fast read/write during conversation, flush to Postgres on disconnect, restore on reconnect (zero data loss)",
            "LLM provider abstraction — single config switch toggles between OpenAI (cloud) and Ollama (local). Develop locally, deploy with cloud LLMs without code changes",
            "Admin-gated approval system — every profile requires admin verification before becoming searchable (privacy-first)",
          ],

          features: [
            "AI-powered conversational search ('find alumni who play football in Mumbai')",
            "Chat-based onboarding (no forms, pause/resume support)",
            "Connection requests with real-time private chat (WebSocket, read receipts, presence tracking)",
            "Admin dashboard (approve/reject profiles, platform stats)",
            "Cross-platform: Expo (React Native) for iOS, Android, and Web from one codebase",
            "Device fingerprinting for auto-login (no explicit re-authentication)",
          ],

          techStack: [
            "LangGraph", "LangChain", "OpenAI / Ollama (abstracted)",
            "FastAPI", "Python",
            "PostgreSQL (pgvector for embeddings)", "MongoDB (chat history)", "Neo4j (alumni graph)", "Redis (presence, sessions, cache)",
            "Expo 55 + React Native", "WebSocket",
            "SQLAlchemy", "JWT Authentication",
          ],

          implementationStatus: {
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
              "Docker Compose for local development",
            ],
            comingNext: [
              "Push notifications", "Cloud deployment + CI/CD",
              "Multi-institution support", "Event/reunion planning",
              "Job board and mentorship matching",
            ],
          },

          databaseDesign: {
            postgresql: "Users, connections, embeddings (pgvector 768-dim), onboarding JSONB backup",
            mongodb: "AI chat history, private chat messages with read receipts",
            neo4j: "Alumni graph — nodes: Alumni, School, City, Country, Profession, Interest, Activity. Relationships: STUDIED_AT, LIVES_IN, WORKS_AS, INTERESTED_IN, CONNECTED_TO",
            redis: "Presence (60s TTL), sessions, onboarding cache (7-day TTL)",
          },
        },

        {
          name: "LT Ride — Digital Layer for Shared Public Transport",
          domain: "Public Transport / Mobility Tech",
          type: "Independent Product",
          status: "Core MVP built (12 features working), coming next: cloud deployment and live maps",

          problemStatement: {
            summary: "In rural and semi-urban India, shared transport (buses, sumos, autos, tempos) operates with zero digital infrastructure. Passengers wait blind, drivers drive empty. No platform exists for this segment.",
            marketContext: [
              "68% of India's population lives in rural & semi-urban areas",
              "0 digital platforms serving shared mass transport in these areas",
              "10M+ daily shared vehicle trips operating with zero digital layer",
              "This is NOT ride-hail (like Uber) — it enhances existing fixed-route shared transport",
            ],
          },

          solution: "Two connected apps (driver + passenger) that add a digital coordination layer to existing shared transport — real-time tracking, seat visibility, and demand signaling — without changing how the transport operates.",

          architecture: {
            overview: "TypeScript monorepo with shared types. Two React + Capacitor apps (driver, passenger) connected via FastAPI backend with real-time WebSocket tracking and offline-first GPS pipeline.",
            designPrinciple: "Works with the system, not against it. Bookings are demand signals (not reservations) because that matches how informal mass transport actually works. Driver's +/- counter is the sole source of truth for passenger count.",
          },

          keyInnovations: [
            "Bookings = demand signals, not reservations — matches how informal shared transport actually operates",
            "Offline-first GPS pipeline: collect locally (every 10s) → batch upload (every 30s) → IndexedDB queue on failure → auto-flush on reconnect. Works from 2G to 5G.",
            "Geofence-triggered stop advancement — Haversine distance calc on every GPS batch, auto-updates current stop within 500m radius (reduces driver distraction)",
            "Debounced passenger counting — 1.5-second debounce on +/- buttons collapses rapid taps into single API call (prevents server flooding on slow networks)",
            "WebSocket live tracking with automatic REST polling fallback (every 15s when WebSocket drops)",
            "End-to-end type safety via shared TypeScript package — type drift impossible across driver app, passenger app, and backend",
          ],

          features: {
            driverApp: [
              "Create trips with route, direction, departure time",
              "Real-time GPS tracking (10s collection, 30s batch upload)",
              "See passenger demand ahead before departing",
              "+/- passenger counter with 1.5s debounce",
              "Stop navigation with geofence-triggered advancement",
              "Per-stop analytics (arrival, departure, count events)",
            ],
            passengerApp: [
              "Browse routes and find available trips",
              "Real-time seat availability",
              "Book seats from boarding to drop stop",
              "Live vehicle tracking via WebSocket (REST fallback)",
              "Request rides when no trips scheduled (demand signaling)",
              "Works on any network (2G-5G) with offline route cache",
            ],
          },

          techStack: [
            "React 19 + Vite + Capacitor (driver & passenger apps)",
            "TypeScript monorepo with shared types (@local-transport/shared)",
            "FastAPI", "Python",
            "PostgreSQL (13 tables)", "Redis (position cache, planned scaling)",
            "IndexedDB (offline GPS queue + route cache)",
            "WebSocket (live tracking)", "REST fallback (polling)",
            "Geolocation API", "Haversine distance calculation",
          ],

          implementationStatus: {
            built: [
              "Phone + password authentication (scrypt)",
              "Driver & passenger role-based registration",
              "Route & stop management",
              "Full trip lifecycle (create → complete)",
              "Seat booking with multi-seat support",
              "Real-time stop tracking + geofencing",
              "+/- passenger counter (debounced)",
              "Per-stop analytics event system",
              "GPS batch tracking + offline queue",
              "WebSocket live tracking + REST fallback",
              "Ride request demand signaling",
              "Interactive driver onboarding tour",
            ],
            comingNext: [
              "OTP-based phone verification", "Push notifications (FCM)",
              "Live map visualization (Leaflet)", "Cloud deployment",
              "Recurring trips scheduler", "Analytics dashboard",
              "UPI payment integration", "Multi-language support",
            ],
          },

          databaseDesign: {
            postgresql: "13 tables — Identity (users, drivers), Geography (place_codes, routes, stops), Operations (trips, bookings, ride_requests), Tracking (location_logs, trip_stop_events, notifications)",
            tripLifecycle: "scheduled → boarding → in_progress → completed (or cancelled)",
            bookingLifecycle: "requested → confirmed → boarded → completed (or waitlisted/cancelled)",
          },
        },

        {
          name: "GLS — Generative Learning System (Continued & Expanded)",
          domain: "EdTech / Adaptive Learning",
          type: "Independent Product (continuation from Apr 2024 freelance period)",
          status: "Foundation & data pipeline 85%+ complete, working toward MVP",
          previousVersion: "Originally built as 'Personalized Learning Assistant' POC during Apr 2024 – Jun 2025 freelance period. Now evolved into a full adaptive tutoring system.",

          problemStatement: {
            summary: "Indian K-12 education suffers from one-size-fits-all teaching (40+ students per classroom). Private tutoring costs ₹2,000-10,000/month, making it inaccessible to most families. Existing EdTech (BYJU'S, Unacademy) digitized lectures but didn't solve personalization.",
            marketContext: [
              "260M+ students enrolled in Indian K-12 schools",
              "1:40 average teacher-to-student ratio",
              "57% of Grade 8 students can't solve Grade 5 math (ASER data)",
              "$12B+ Indian EdTech market by 2025",
              "Target operational cost: ~₹50-100/month per student",
            ],
          },

          solution: "AI-powered adaptive tutoring system that provides truly personalized learning through Socratic dialogue, interest-based explanations (physics via cricket for cricket fans), and 9 learning science algorithms working in concert.",

          architecture: {
            overview: "Three-service architecture: Frontend (React), AI Assistant (LangGraph + Gemini + ChromaDB), Backend API (FastAPI + PostgreSQL). Multi-agent system with specialized teaching, testing, review, and support agents.",
            agents: [
              { name: "Learning Orchestrator", description: "Router — directs to specialized agents based on learning state and session context" },
              { name: "Teaching Agent", description: "Socratic dialogue delivery. Uses student interests to contextualize every explanation (e.g., physics via cricket). Guides through questions, not lectures." },
              { name: "Testing Agent", description: "Stealth assessments woven into natural conversation (Evidence-Centered Design). Students feel they're having a discussion, not being tested. Also handles standardized quizzes." },
              { name: "Review Agent", description: "SM-2 spaced repetition scheduling. Conducts review sessions at optimal intervals based on forgetting curves." },
              { name: "Support Agent", description: "Frustration detection and motivation support. Monitors emotional state inferred from response patterns. Intervenes when student is struggling." },
            ],
            middleware: [
              "Session Monitor — engagement tracking, time-on-task",
              "Support Detector — emotional state inference from conversation patterns",
            ],
          },

          learningAlgorithms: {
            description: "9 learning science algorithms working in concert — not opinions, every decision grounded in pedagogy",
            algorithms: [
              { name: "Bayesian Knowledge Tracing (BKT)", description: "Estimates probability of knowing each concept. Accounts for guessing, slipping, and learning rate." },
              { name: "Item Response Theory (3PL)", description: "Matches question difficulty to student ability. Maximum information question selection." },
              { name: "Knowledge Space Theory (KST)", description: "Models prerequisites as partial order. Identifies 'outer fringe' — concepts the student is ready to learn next." },
              { name: "Elo Rating System", description: "Dynamic difficulty calibration. Both students and questions have Elo ratings that update after every interaction." },
              { name: "Bloom's Taxonomy Progression", description: "Tracks cognitive depth per concept: Remember → Understand → Apply → Analyze." },
              { name: "SM-2 Spaced Repetition", description: "Schedules reviews at optimal intervals based on forgetting curves." },
              { name: "Misconception Detection", description: "328 catalogued physics misconceptions matched to student responses for targeted correction." },
              { name: "Hake's Normalized Gain", description: "Measures learning effectiveness: (post-pre)/(max-pre)." },
              { name: "Cognitive Load Monitoring", description: "Tracks response times, error patterns, engagement to estimate mental effort." },
            ],
          },

          keyInnovations: [
            "Interest-based contextual generation — physics explained through cricket, gaming, movies depending on student interests. GenAI contextualizes every explanation uniquely. Impossible to pre-author at scale.",
            "Stealth assessment via Evidence-Centered Design — questions woven into natural conversation. Reduces test anxiety while capturing authentic understanding.",
            "Holistic student modeling: Academic (knowledge gaps per concept via BKT) + Psychological (motivation, growth mindset via Dweck) + Learning Style (VARK preferences). AI adapts not just WHAT to teach but HOW.",
            "9 learning science algorithms working together — not a single scoring model but an ensemble of pedagogical algorithms each handling a different aspect of learning.",
            "Content pipeline: Physics textbook PDF → LLM extraction → structured JSON → PostgreSQL (1,776 records) + ChromaDB (1,820 embeddings)",
          ],

          contentDatabase: {
            curriculum: "5 units, 36 sections, 116 topics",
            definitions: 498,
            formulas: 379,
            misconceptions: 328,
            questions: 347,
            numericalProblems: 109,
            vectorEmbeddings: "1,820 (2,560 dimensions via qwen3-embedding:4b)",
            enrichedDefinitions: 877,
            conceptExplanations: 834,
            workedExamples: 109,
          },

          techStack: [
            "LangGraph (multi-agent orchestration)",
            "Google Gemini API (LLM)",
            "ChromaDB (vector database, 1,820 embeddings)",
            "Ollama (local embeddings via qwen3-embedding:4b)",
            "FastAPI", "SQLAlchemy", "Python",
            "PostgreSQL (20+ model groups)",
            "MongoDB (conversations, sessions)",
            "React 18 + TypeScript + Vite",
            "WebSocket (real-time chat)",
            "KaTeX (math rendering)",
            "JWT + bcrypt authentication",
          ],

          implementationStatus: {
            built: [
              "Data extraction pipeline (5 physics units, 1,776 records)",
              "ChromaDB vector store (1,820 embeddings, 3 collections)",
              "FastAPI backend (15+ API route groups)",
              "JWT authentication system",
              "SQLAlchemy ORM (20+ model groups)",
              "All 9 learning algorithms implemented",
              "RAG search endpoint",
              "Curriculum unlocking engine (KST-based)",
              "Psychological frameworks (VARK, MSLQ, Dweck)",
              "Multi-agent assistant scaffolding",
              "Prompt template system (.poml format)",
              "Frontend scaffolding (React + TypeScript + Vite)",
            ],
            comingNext: [
              "End-to-end API testing", "Frontend UI implementation",
              "WebSocket chat integration", "Agent logic completion",
              "Beta testing with 5-10 students", "Cloud deployment",
              "Gamification (streaks, points)", "Mathematics curriculum",
              "Teacher/parent progress view",
            ],
          },

          evolutionFromPOC: "The original POC (Apr 2024) was a basic chatbot with study plan generation and stealth testing. The current system is a fundamentally different product: 9 learning algorithms, 5 specialized agents, 1,820 vector embeddings, 328 misconception catalogue, Socratic dialogue with interest-based contextual generation, and a full data extraction pipeline. The core concept survived but the implementation is entirely new.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // CONSTIENT GLOBAL SOLUTIONS
    // -----------------------------------------------------------------------
    {
      company: "Constient Global Solutions",
      role: "AI Solutions Architect",
      location: "Remote (Chennai-based company)",
      period: "Jul 2025 – Dec 2025",
      duration: "6 months",
      type: "contract",
      domains: ["Finance", "Real Estate", "Hospitality"],
      context: "Joined initially as a freelance consultant to fix a struggling AI project. Demonstrated immediate impact (77% accuracy on day 1), was asked to lead the project and eventually the entire AI engineering effort.",

      teamSize: "12 engineers (mix of frontend, backend, AI engineers, and data analysts)",

      leadershipResponsibilities: [
        "Led a team of 12 engineers (frontend, backend, AI, data analysts) through full SDLC with code reviews and mentorship",
        "Architected system designs and created improvement roadmaps for phased feature rollout",
        "Built scalable FastAPI backend engine handling omnichannel communication and payments",
        "Took ownership of a failing project, restructured approach starting with proper data analysis",
      ],

      projects: [
        {
          name: "AI-Powered Cash Reconciliation (Accounts Receivable Ledger)",
          domain: "Commercial Real Estate Finance",
          status: "Production",
          clientContext: "Large commercial real estate company renting business spaces to multiple tenants. Monthly reconciliation of tenant payments against open ledgers across multiple property management ERPs.",

          problemStatement: {
            summary: "Enterprise finance teams managing thousands of properties needed autonomous financial reconciliation of accounts receivable ledgers.",
            challenges: [
              "Sparse transaction data with missing tenant identification in bank statement deposits",
              "Multi-tenant decomposition — single rent/operating expense payments covering multiple building accounts",
              "Accounts receivable consolidation from multiple inconsistent sources (bank statements, tenant files, GL coding)",
              "Financial account-level matching with missing GL codes and transaction context",
              "Different payment modes: checks via lockbox, wire transfers, cash to property manager",
              "Different payment categories: rent, electricity, insurance, operating expenses, late fees",
              "Manual reconciliation covering <1% of transactions, unable to meet monthly close deadlines",
            ],
          },

          howYouJoined: "The existing team couldn't get the LLM to perform reconciliation. On the first day, wrote a prompt achieving ~77% accuracy. Over subsequent days, built a LangGraph agent that ultimately reached 98% production reconciliation accuracy (100% on logic-defined transactions, with ambiguous cases routed to HITL). Identified that the team had started building without data understanding, took a step back to properly analyze data and the actual reconciliation process before rebuilding.",

          architecture: {
            overview: "Enterprise-grade Agentic AI system built on LangGraph state machine orchestration with ReAct reasoning agents for autonomous financial decision-making.",
            agents: [
              {
                name: "Financial Data Ingestion Agent",
                description: "Autonomous PDF extraction from bank statements using Amazon Textract + LLM parsing with chain-of-thought reasoning",
                output: "Structured JSON with GL code enforcement via Pydantic schemas",
              },
              {
                name: "Autonomous Tenant Identification Agent",
                description: "Multi-step chain logic for entity extraction from sparse bank narratives. Enriches tenant name to tenant ID by cross-referencing master data.",
                achievement: "83% autonomous tenant identification from sparse data",
              },
              {
                name: "Intelligent Accounts Receivable Matching Agent",
                description: "ReAct-pattern agent with tool use for GL matching, multi-tenant decomposition logic, and payment pattern analysis",
                achievement: "411 bank statements decomposed into 535 properly coded accounting transactions",
              },
              {
                name: "Agentic Reconciliation State Machine",
                description: "LangGraph persistent checkpoints with state transitions and branching logic for partial/full reconciliation scenarios. Checks if due amount matches paid amount, handles surplus/shortage, matches to specific line items (rent, insurance, operating expenses, etc.)",
              },
              {
                name: "Human-in-the-Loop Pipeline",
                description: "Routes ambiguous transactions to financial controllers. Human corrections continuously improve agent matching logic.",
                feedbackLoop: "~150 financial training data points generated monthly",
              },
              {
                name: "Financial Reporting Dashboard",
                description: "Consolidated GL dashboard with complete audit trails. Multi-dimensional P&L by tenant, property, expense type, GL code, period.",
              },
            ],
            dataFlow: "Bank PDFs → Textract → Tenant ID Agent → AR Matching Agent → State Machine → HITL Review → GL Dashboard (posted to closed ledger in property management ERP)",
            dataSources: [
              "Tenant master data (name, ID, property mappings)",
              "System data (lockbox checks, wire transfers, cash payments)",
              "Historical payment patterns",
              "Open ledger data (generated dues)",
              "Bank transaction data (incoming payments)",
            ],
          },

          techStack: [
            "OpenAI (GPT-4o)",
            "LangGraph",
            "LangChain",
            "FastAPI",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Pydantic V2",
            "Amazon Textract",
            "Python",
          ],

          metrics: {
            reconciliationAccuracy: "98% in production (100% on logic-defined transactions, ambiguous cases routed to HITL)",
            day1PromptAccuracy: "~77% (single prompt, before agent architecture was built)",
            tenantIdentification: "83% autonomous from sparse bank data",
            manualDataEntryReduction: "95%",
            processingTime: "5-10 minutes (vs. 2-3 weeks manual close)",
            timeToClose: "Reduced from 2+ weeks to 2 days (10x improvement)",
            feedbackDataGenerated: "~150 training data points/month",
            decompositionScale: "411 bank statements decomposed into 535 properly coded accounting transactions",
          },

          scalability: "Enterprise property portfolios with varying GL structures, multi-tenant compositions, and property types. Extensible to new financial structures and account types.",
        },

        {
          name: "Cash Reconciliation for Hospitality Chain",
          domain: "Hospitality Finance",
          status: "Consulting/Architecture",
          clientContext: "Large hotel chain needing daily reconciliation of income journals against bank transactions with segmentation by income source.",

          yourRole: "Business analyst and architecture consultant. Gathered requirements, architected the solution structure. A separate team was built to implement based on your architecture.",

          problemStatement: {
            summary: "Daily reconciliation of hotel income (journal entries) against bank transactions, with income segmentation by source type.",
            challenges: [
              "Daily (not monthly) reconciliation cadence",
              "Income segmentation by different revenue streams",
              "Journal entry to transaction matching",
              "Different operational model from real estate reconciliation",
            ],
          },

          techStack: ["Same architecture pattern as the real estate project, adapted for hospitality"],
        },

        {
          name: "Virtual Waiter (Hospitality AI Assistant)",
          domain: "Restaurant / Hospitality",
          status: "Production (deployed to first restaurant, architecture for multi-property rollout)",

          problemStatement: {
            summary: "Restaurant operators needed autonomous conversational AI to handle customer-facing operations while reducing staff workload.",
            challenges: [
              "Manual waiter/host workload for order-taking, reservations, and customer inquiries",
              "No autonomous customer profiling or personalization without explicit login",
              "Complex food ordering: menu browsing, cart management, modifications, recommendations",
              "Table booking inefficiency — no autonomous reservation optimization",
              "Customer feedback and complaint handling bottleneck",
              "No intelligent upselling based on customer preferences",
            ],
          },

          architecture: {
            overview: "Agentic AI conversational system built on LangGraph multi-agent orchestration. Purely chat-based interface. Main orchestrator routes to pluggable sub-modules.",
            designPrinciple: "Sub-modules are pluggable — follow the same structure to add any new feature. Main orchestrator just needs to be made aware of new modules.",
            agents: [
              {
                name: "Main Orchestrator Agent",
                description: "LangGraph state machine understanding user intent and routing to appropriate sub-agent. Base of the entire platform.",
              },
              {
                name: "Autonomous Food Ordering Sub-Agent",
                description: "Full food ordering workflow. Has its own internal intent classification (browse menu, specific request, cart management, checkout). Semantic menu search, cart management, order validation against inventory.",
                integration: "POS system real-time inventory check and kitchen order injection",
              },
              {
                name: "Autonomous Table Booking Sub-Agent",
                description: "Intelligent reservation matching with ReAct reasoning. Matches customer preferences against available tables. Updates table management system.",
              },
              {
                name: "Complaints & Feedback Module",
                description: "Captures feedback and complaints. Sentiment analysis for auto-categorization. Routes complaints to right department/person for follow-up. Auto-creates support tickets.",
              },
              {
                name: "General Queries Module",
                description: "Handles general information inquiries about the restaurant (hours, location, policies, etc.).",
              },
              {
                name: "Conversational Response Module",
                description: "LLM-powered waiter-like responses — natural, empathetic, context-aware (not robotic). This is why it's called a 'virtual waiter' and not just a chatbot.",
              },
              {
                name: "User Fingerprinting & Personalization Engine",
                description: "Autonomous customer recognition without explicit login. Tracks user preferences, past orders, taste profiles, openness to experimentation. Device fingerprints + conversation patterns + ordering history.",
              },
              {
                name: "Intelligent Recommendation Agent",
                description: "Multi-scenario recommendation system. Knows previous orders, preferences, taste. Drives incremental sales through intelligent suggestions.",
                approach: "Collaborative filtering + content-based matching + user preference analysis",
              },
              {
                name: "Admin Reporting Dashboard",
                description: "Analytics platform for restaurant operators. Sales, customer engagement, peak hours, popular items, satisfaction metrics (BI dashboard for customer satisfaction).",
              },
            ],
            dataFlow: "User Chat → Main Orchestrator (Intent Classification) → Sub-Agent Routing → Internal Intent Classification → Agent + Tool Execution → Personalization & Recommendations → Response Generation → POS/System Integration",
          },

          techStack: [
            "OpenAI (GPT-4o for complex tasks, GPT-4o-mini for simpler tasks)",
            "LangChain",
            "LangGraph",
            "FastAPI",
            "Python",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "POS System",
            "Pydantic V2",
          ],

          qualitativeOutcomes: {
            architecture: "10-agent modular system with pluggable sub-modules",
            posIntegration: "Real-time POS integration for inventory check and kitchen order injection",
            personalization: "Autonomous customer recognition and preference learning without explicit login",
            autonomy: "End-to-end customer journeys (ordering, booking, feedback) handled without human intervention",
            recommendations: "Intelligent upselling through collaborative filtering + content-based matching + preference analysis",
            staffReduction: "Reduces dependency for order-taking and host station functions",
            conversationQuality: "Natural waiter-like conversation (not robotic)",
          },

          scalability: "Single restaurant → multi-property chains, hotel F&B, hospital canteens. Pluggable module architecture makes feature extension straightforward.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // INDEPENDENT AI CONSULTANT / FREELANCER
    // -----------------------------------------------------------------------
    {
      company: "Independent AI Consultant / Freelancer",
      role: "Agentic AI Engineer & Consultant",
      location: "Remote",
      period: "Apr 2024 – Jun 2025",
      duration: "~14 months",
      type: "freelance",
      domains: ["EdTech", "Research & Innovation", "E-commerce"],
      context: "After completing MSc and Amazon internship, upskilled in GenAI/LLMs/Agentic AI while simultaneously freelancing (building POCs for clients) and training professionals at institutions.",

      activities: {
        freelancePOCs: "Built 3 proof-of-concept AI projects for clients",
        training: "Trained professionals at ~10 institutions/universities in AI, ML, statistics, deep learning",
        seminars: "Conducted seminars on LLMs and Generative AI",
        research: "Deep research into Agentic AI frameworks and LLM architectures",
      },

      projects: [
        {
          name: "Personalized Learning Assistant (Generative Learning Platform)",
          domain: "EdTech",
          type: "Freelance POC",
          description: "AI-powered personalized learning platform for students (Grade 12 / board exam preparation).",

          features: [
            "Onboarding via psychometric profiling — understanding capability, memory power, grasp speed, concept complexity tolerance",
            "Collects general interests (sports, cars, TV shows, etc.) to make content relatable",
            "Creates customized study plan based on exam timeline and student capacity, targeting a score based on capability",
            "Content delivery constrained to standardized textbook (uses textbook as source of truth)",
            "Generates content, examples, and images using GenAI to help students visualize concepts",
            "Stealth testing — during conversation, monitors silent markers of understanding from student responses",
            "Dynamically adjusts content difficulty: tweaks difficulty level, breaks down concepts simpler, or decides to push the student harder",
            "Standardized quizzes for formal assessment",
            "Subject-specific frameworks for math, physics, and chemistry",
          ],

          techStack: ["Python", "LangChain", "OpenAI", "Streamlit"],
        },

        {
          name: "Product Description Generator",
          domain: "E-commerce",
          type: "Freelance POC",
          description: "Given a product, the AI (VLM — Vision Language Model) identifies the product, searches the web for product details, and auto-generates product name, description, and features.",

          features: [
            "VLM-based product identification from image/text",
            "Web search for product details and specifications",
            "Auto-generation of product name, description, and feature list",
          ],

          techStack: ["OpenAI (VLM)", "Web Search", "Python"],
        },

        {
          name: "Research & Innovation Idea Generator",
          domain: "Research & Innovation",
          type: "Freelance POC",
          description: "AI agent that takes a keyword (e.g., 'lithium batteries'), searches patents and research papers, summarizes the state of the art, and generates novel product/research recommendations.",

          features: [
            "Searches patent sites (PatentScope, OpenLens, Google Patents) for last 3 years of patents on the keyword",
            "Summarizes patent information and current implementations",
            "Analyzes which industries are using the technology and how",
            "Generates 3-4 recommendations for novel products or research directions that could be built new",
            "Recommendations can be product ideas, research directions, or entirely new applications",
            "Integration with Google Patents and academic databases",
          ],

          techStack: ["LangChain", "OpenAI", "RAG", "Vector Embeddings", "Python"],
        },
      ],

      portfolioProjects: [
        {
          name: "GenAI Project Suite",
          description: "Comprehensive suite of GenAI applications demonstrating different patterns",
          subProjects: [
            "Q&A Chatbots (LangChain with OpenAI + Ollama multi-model chains)",
            "PDF RAG Chatbot (semantic search with Groq optimization)",
            "SQL Chatbot (database interaction agents with tool use)",
            "MathGPT (custom LLMMathChain with reasoning)",
            "AI Search Engine (Zero-shot ReAct agents with dynamic tool selection)",
            "YT-to-Blog converter (CrewAI multi-agent orchestration with role-based agent hierarchy)",
          ],
          techStack: ["LangChain", "CrewAI", "OpenAI", "Ollama", "Groq", "FAISS", "ChromaDB", "Streamlit", "Python"],
        },
        {
          name: "Deep Learning Projects Collection",
          subProjects: [
            { name: "Human Emotion Detection", detail: "Facial expression analysis, 76% accuracy on AffectNet dataset", tech: "TensorFlow, CNN" },
            { name: "Disease Prediction Models", detail: "Cardiovascular and diabetes prediction, 87% accuracy", tech: "Scikit-Learn, Neural Networks" },
            { name: "Crop Disease Detection", detail: "Deployed on drones with OpenCV for edge inference", tech: "OpenCV, TensorFlow, Drone Integration" },
            { name: "Reinforcement Learning Agents", detail: "DQN, DCQN, A2C algorithms for game environments", tech: "PyTorch, Gymnasium" },
          ],
          techStack: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "CNN", "RNN", "LSTM", "Gymnasium"],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // AMAZON
    // -----------------------------------------------------------------------
    {
      company: "Amazon",
      role: "Business Intelligence Engineer",
      location: "Luxembourg",
      period: "Jul 2023 – Dec 2023",
      duration: "6 months",
      type: "internship (end-of-study for MSc)",
      department: "Global Trade Services (GTS)",
      domains: ["Logistics", "Trade Compliance", "Data Engineering"],
      context: "Post-Brexit, the UK had left the EU causing massive tariff changes. GTS handled all import/export filings, customs broker management, and compliance. The team ensured Amazon was not paying unnecessary fines for filing errors by customs brokers. Amazon worked with multiple external customs brokers across EU and UK.",

      projects: [
        {
          name: "Import/Export Data Standardization",
          focus: "Post-Brexit UK-EU import/export compliance",

          problemStatement: {
            summary: "Multiple external logistics brokers submitting filing data in inconsistent formats. Most processes were manual with no automation. Brokers sending CSV/Excel files with limited data fields.",
            challenges: [
              "Multiple international customs brokers each with different data formats",
              "Brokers providing only ~35-40 data columns out of ~120 needed",
              "No B2B data pipelines — all manual CSV/Excel exchange",
              "No pre-commit or post-commit data quality checks",
              "Need to understand SAV (Single Agreement Document) format — customs filing manifest",
            ],
          },

          whatYouDid: [
            "First task: learned the import/export domain — understood SAV documents, customs filing formats, codes, and reasons behind different fields",
            "Got on calls with external stakeholders (data teams at customs broker firms) to understand their data systems",
            "Mapped what data brokers had vs. what Amazon needed for the data lake",
            "Created standardized data formats/schemas in which brokers must send data monthly",
            "Negotiated with brokers to increase data coverage from ~35-40 columns to ~80 columns",
            "Designed B2B data pipelines from broker enterprise systems directly into Amazon's data lake",
            "Analyzed historical data to identify junk data patterns and valid data patterns",
            "Created pre-commit validation checks (before data enters data lake) and post-commit quality checks (after ingestion)",
            "Built data validation rules and quality gates based on what is allowed/not allowed for each field",
            "Successfully completed for the largest broker partner entirely, then extended to other brokers",
          ],

          techStack: ["Python", "SQL", "AWS QuickSight", "ETL", "Data Validation", "JSON Schemas"],

          metrics: {
            dataReadiness: "Improved from 38% to 86%",
            dataColumnsFromBrokers: "Increased from ~35-40 to ~80 columns (out of ~120 needed)",
          },
        },

        {
          name: "Customs Audit Automation Dashboard",
          focus: "Automated auditing of customs broker filings",

          problemStatement: {
            summary: "Every month, millions of customs documents were filed by brokers. The internal audit team manually checked a random sample — covering only ~1% of documents. They would open PDF documents, cross-check numbers manually, and report errors to brokers.",
            challenges: [
              "Manual audit process covering <1% of millions of monthly documents",
              "Three different sources of truth that needed cross-validation",
              "No automated way to flag discrepancies across data sources",
              "Need to prepare for potential government external audits",
            ],
          },

          whatYouDid: [
            "Identified 3 sources of truth: (1) SAD documents filed by customs brokers with government (the final truth), (2) Shipping manifests (what was actually put in containers), (3) Amazon's internal manifest (what Amazon tracked internally — origin, destination, cost)",
            "Wrote automated SQL/ETL scripts using Amazon's internal platforms to pull data from all 3 sources",
            "Built automated cross-validation logic to compare values across all 3 sources and flag discrepancies",
            "Created a QuickSight dashboard displaying audit results — discrepancies, error patterns, broker performance",
            "Transformed manual 1% sampling into automated 98% coverage of all filed documents",
          ],

          techStack: ["Python", "SQL", "AWS QuickSight", "ETL", "Data Validation", "Amazon Internal Tools"],

          metrics: {
            auditCoverage: "Increased from <1% to 98% of documents (nearly a million records)",
            automation: "~90% of audit process automated",
          },
        },

        {
          name: "Universal Data Validation Framework (Cross-Broker Standardization)",
          focus: "Standardizing validation rules across all customs brokers",

          problemStatement: {
            summary: "Each customs broker had their own set of validation rules. Needed a universal connector that could validate data from any broker with standardized checks.",
          },

          whatYouDid: [
            "Analyzed data from multiple brokers to find patterns — what data types can come, what formats are valid, what is garbage vs. useful",
            "Designed standardized data validation and quality check points applicable across all brokers",
            "Created both pre-commit and post-commit checks for the universal ingestion pipeline",
            "Wrote business rules for this standardization project",
            "Note: this was primarily business-level data analysis work, not heavy coding",
            "Internship ended before this project was fully completed — left behind the analysis and business rules for the team to take forward",
          ],

          techStack: ["Data Analysis", "Business Rules", "SQL"],
        },
      ],

      keySkillsDemonstrated: [
        "External stakeholder management (broker data teams across EU/UK)",
        "Domain learning (customs/trade compliance from zero knowledge)",
        "Data quality engineering and validation framework design",
        "Business intelligence dashboard creation",
        "Cross-source data reconciliation",
        "Working within Amazon's internal tooling ecosystem",
      ],
    },

    // -----------------------------------------------------------------------
    // INFORMATICA BUSINESS SOLUTIONS
    // -----------------------------------------------------------------------
    {
      company: "Informatica Business Solutions",
      role: "Senior Curriculum Developer",
      location: "Bangalore, India (Remote)",
      period: "Nov 2021 – Aug 2022",
      duration: "~9 months",
      type: "full-time",
      domains: ["Enterprise Software", "Data Management", "ETL", "Cloud Services"],
      context: "Indian branch of Informatica — the global leader in enterprise data solutions, known for PowerCenter (major ETL tool). Transitioned here from Lema Labs. Individual contributor role focused on learning Informatica products deeply and creating training curriculum.",

      whatYouDid: {
        overview: "Given specific Informatica products/services, tasked with: (1) exploring the entire tool/service hands-on, (2) creating curriculum — PPTs, lab manuals, e-learning modules, (3) training the trainers who would deliver to clients, (4) converting content to e-learning on the LMS.",
        process: [
          "Explored each product end-to-end with sample datasets to understand functionality",
          "Created hands-on lab manuals with screenshots and step-by-step instructions",
          "Built PowerPoint presentations for instructor-led training",
          "Converted content to e-learning modules using Articulate Rise 360 and Adobe tools",
          "Conducted train-the-trainer sessions for ~12 trainers across the globe",
          "Content delivered via LMS or through classroom training by the trained trainers",
        ],
      },

      productsWorkedOn: [
        { name: "Enterprise Data Preparation", type: "Big Data / Cloud", detail: "First product worked on. Built extensive hands-on lab manuals." },
        { name: "Enterprise Data Capital", type: "Big Data / Cloud", detail: "Worked on alongside Enterprise Data Preparation." },
        { name: "PowerCenter Administrator", type: "ETL (Flagship Product)", detail: "Informatica's biggest product. Created admin course." },
        { name: "IICS (Informatica Intelligent Cloud Service)", type: "Cloud Data Engineering", detail: "Administrator course — setup, access, service usage." },
        { name: "Customer 360", type: "Master Data Management", detail: "MDM tool for customer data." },
        { name: "Customer 360 Insights", type: "Master Data Management", detail: "Analytics on top of customer data." },
        { name: "Supplier 360", type: "Master Data Management", detail: "MDM tool for supplier data." },
        { name: "Product 360", type: "Master Data Management", detail: "MDM tool for product data." },
      ],

      metrics: {
        coursesCreated: "4 instructor-led courses with technical labs",
        salesImpact: "Increased sales pipeline by 22%",
        trainersFunctionallyLed: "12 trainers globally (functional lead: trained them on courses and coordinated delivery; they reported to separate managers)",
        productsWorkedOn: "8 products across ETL, Cloud, Big Data, and MDM",
      },

      keySkillsDemonstrated: [
        "Rapid product mastery — learned complex enterprise tools from scratch",
        "Curriculum design and instructional design",
        "E-learning development (Articulate Rise 360, Adobe tools)",
        "Train-the-trainer delivery",
        "Global team coordination",
        "Enterprise data concepts: ETL, MDM, Cloud Data Services",
      ],
    },

    // -----------------------------------------------------------------------
    // LEMA LABS TECHNOLOGIES
    // -----------------------------------------------------------------------
    {
      company: "Lema Labs Technologies",
      role: "Robotics Engineer → Senior Engineer (multiple hats)",
      location: "Chennai, India",
      period: "Oct 2015 – Sep 2021",
      duration: "~6 years",
      type: "full-time",
      companyContext: "IIT Madras incubated EdTech startup. Bootstrapped (no VC funding), ran purely on program revenue. Focused on robotics, IoT, and later ML/AI education for school students, university students, and working professionals.",
      domains: ["EdTech", "Robotics", "IoT", "Machine Learning", "Community Building"],

      careerProgression: [
        { phase: "Oct 2015 - Mar 2016", title: "Robotics Trainer (Probation)", description: "6-month probation period. Learned company culture, training methodology, and curriculum standards." },
        { phase: "Mar 2016 onwards", title: "Full-time Robotics Engineer", description: "Passed probation criteria and became full-time." },
        { phase: "2016-2018", title: "Curriculum Designer & Trainer", description: "Designed multiple new programs (school robotics, IoT, ML). Delivered training." },
        { phase: "2018-2021", title: "Senior Engineer / Multi-hat Leader", description: "Training, curriculum design, community building, consulting, business development, digital transformation lead." },
      ],

      projects: [
        {
          name: "Robotics Training & Robot Building (Initial Phase)",
          period: "Oct 2015 - Mar 2016",
          description: "First 6 months: getting trained on Lema Labs' robotics curriculum and building robots hands-on.",
          robotsBuilt: [
            "Line follower robot (without programming — pure electronics)",
            "Line follower robot (with programming — ATmega16 microcontroller, embedded C, register-based programming)",
            "Obstacle avoidance robot (3 IR sensors, DC gate motors, ATmega16)",
            "ADC robot (speed control via potentiometer using analog-to-digital conversion + PWM)",
            "Speaker robot / audio-reactive robot",
          ],
          sideProjects: [
            "Digital tachometer (using IR sensor + marker on spinning wheel to calculate RPM)",
            "Stepper motor driver (driver circuit for brushless motor control)",
          ],
          skills: ["Embedded C", "ATmega16 Microcontrollers", "Register-level Programming", "ADC/PWM Protocols", "Motor Control", "Sensor Integration"],
        },

        {
          name: "School Robotics Program ('Kaizen Technology Programme')",
          period: "2016",
          description: "First independent project. Given the lead to create a robotics program for school students (summer vacation program). Worked with 2 co-workers.",
          details: [
            "Designed robots that would be easy for school students (ages ~10-14) to build: line follow robot, obstacle avoid robot, edge follower robot, light follower robot (LDR sensor, no programming needed)",
            "Designed curriculum for batches of 30-40 kids — easy to follow, step-by-step",
            "Included a competition at the end with a track combining line following and obstacles",
            "Used lean methodology for course development — developed in 1-2 months, piloted a batch in summer, iterated",
          ],
          impact: "Increased annual revenue by ~30%. Created a new revenue stream from school students.",
        },

        {
          name: "School Program Level 2 (Upgraded)",
          period: "Late 2016",
          description: "Parents asked for a next-level program. Upgraded the school program to include Arduino programming alongside non-programming robots.",
          details: [
            "Decided on an age group cutoff for introducing programming",
            "Curriculum: 2 robots without programming + robots with Arduino programming",
            "Taught programming concepts to kids using robots as the medium",
          ],
        },

        {
          name: "IoT Workshop Program",
          period: "End 2016 - Early 2017",
          description: "IoT was becoming a buzzword in industry. Self-taught IoT (~60% depth) and designed a 2-day workshop curriculum.",
          details: [
            "Day 1: Controlling devices over local network (without internet) + monitoring devices",
            "Day 2: Automating things over the internet using IoT, online servers, MQTT protocol",
            "Handling sensor monitoring, device control remotely",
            "Handled batches of 150-180 people at a time",
          ],
          impact: "IoT program increased company revenue by ~40%. Very successful program.",
        },

        {
          name: "Machine Learning Course (13-week Flagship Program)",
          period: "2018",
          description: "ML was gaining traction in industry. Spent ~3 months learning ML from scratch with colleagues (partnering with sister company doing deep learning solutions). Designed comprehensive 13-week curriculum.",
          learningPath: [
            "Started with Andrew Ng's Machine Learning course on Coursera",
            "Learned statistics, data preprocessing, cleaning, basic EDA",
            "Studied supervised and unsupervised learning algorithms",
            "Learned the mathematics behind algorithms, not just the coding",
            "Studied perceptrons, multi-layer perceptrons, recommendation systems, SVMs, clustering",
            "Used Scikit-learn, Pandas, NumPy (libraries were still maturing in 2018)",
          ],
          curriculum: [
            "13-week intensive program",
            "Covered: data preprocessing → statistics → supervised learning → unsupervised learning → recommendation systems → SVMs",
            "Both mathematics and hands-on coding",
            "Targeted at working professionals and university students (kept school students out due to math complexity)",
          ],
          impact: "Became the flagship product. Contributed to 60% increase in company revenue.",
          additionalImpact: "Started training people in ML, which also improved own skills. Began mentoring and consulting working professionals on real industry projects (~20-30 professionals over the years).",
        },

        {
          name: "Robotics Program Revamp",
          period: "2019",
          description: "Revamped the robotics curriculum with more advanced robots.",
          details: [
            "Added Cartesian robot (2-axis handwriting robot) — built without GRBL library, purely register-based programming",
            "Updated Kaizen robotics program curriculum",
          ],
        },

        {
          name: "Deep Learning Exploration",
          period: "2019",
          description: "Students in the maker community started asking about deep learning. Self-taught deep learning and worked on DL projects with students.",
          details: [
            "Worked with early TensorFlow (still in early stages, not very mature)",
            "Built DL projects collaboratively with students",
          ],
        },

        {
          name: "Lema Community (Maker Community / Makerspace)",
          period: "2018-2021",
          description: "Co-founded a maker community where students could come work on projects with guidance.",
          activities: [
            "Organized ~3 hackathons (36-hour makeathons), led 2 of them as lead organizer",
            "Provided project guidance and mentorship to community members",
            "Students from the community went on to: win Smart India Hackathon, win robotics competitions across different symposiums/colleges, win project challenges, start 1-2 startups",
          ],
          impact: "Built a community brand. Provided real-world impact through student achievements.",
        },

        {
          name: "COVID Digital Transformation & Online Pivot",
          period: "2020-2021",
          description: "When COVID hit, spearheaded the digital transformation of the company. Lema Labs was purely classroom-based and bootstrapped (no VC funding).",
          actions: [
            "Took charge of the digital transformation process",
            "Started recording and editing video content to make quality online material",
            "Deployed OpenEDX (open-source LMS platform) — designed and customized it into Lema Labs' LMS",
            "Put robotics and IoT content online first, then realized hardware-based courses didn't generate online revenue",
            "Pivoted to online machine learning courses (software-only, screen sharing, debugging — no hardware needed)",
            "Ran online ML classes from 2020 until September 2021",
          ],
          impact: "Retained ~60% of annual revenue during COVID despite being a bootstrapped startup.",
          outcome: "Company could not fully survive post-COVID. Officially closed September 2021.",
        },
      ],

      overallMetrics: {
        totalPeopleTrained: "3000+ (school students, university students, working professionals)",
        programsDesigned: "3 new programs (school robotics, IoT, ML) + multiple upgrades",
        competitionsWon: "1st place in Micro Mouse Challenge at World Robotics Championship",
        hackathonsOrganized: "~3 makeathons (36-hour events)",
        professionalsConsulted: "20-30+ working professionals on real industry projects",
        revenueImpact: {
          schoolProgram: "~30% revenue increase",
          iotProgram: "~40% revenue increase",
          mlProgram: "60% revenue increase",
          covidRetention: "60% of annual revenue retained during pandemic",
        },
      },

      keySkillsDemonstrated: [
        "Program/product design from scratch (lean methodology)",
        "Self-teaching and rapid skill acquisition (robotics → IoT → ML → DL in 3 years)",
        "Curriculum design for multiple audiences (kids, university students, professionals)",
        "Training delivery at scale (150-180 person batches)",
        "Community building and hackathon organization",
        "Mentoring and consulting on real-world industry projects",
        "Digital transformation leadership during crisis",
        "LMS deployment and content management (OpenEDX)",
        "Business development — each new program directly drove revenue growth",
        "Startup agility — wearing multiple hats (engineering, training, business, product, community)",
      ],
    },
  ],

  // ============================================================================
  // CROSS-CUTTING THEMES (for resume positioning)
  // ============================================================================
  themes: {
    agenticAI: {
      label: "Agentic AI & Multi-Agent Systems",
      evidence: [
        "Architected 6-agent system for AR reconciliation achieving 98% accuracy (Constient)",
        "Built 10-agent Virtual Waiter system with pluggable sub-module architecture (Constient)",
        "Built Research Idea Generator using AI agents for patent search and synthesis (Freelance)",
        "Created GenAI suite demonstrating ReAct agents, CrewAI orchestration, tool use (Portfolio)",
      ],
      technologies: ["LangGraph", "LangChain", "CrewAI", "AutoGen", "OpenAI", "ReAct Pattern"],
    },

    dataEngineering: {
      label: "Data Engineering & Business Intelligence",
      evidence: [
        "Built data lake and standardization framework for customs broker data at Amazon (data readiness 38%→86%)",
        "Created automated audit dashboard cross-validating 3 sources of truth at Amazon (coverage <1%→98%)",
        "Designed universal data validation framework across multiple brokers at Amazon",
        "Built financial data ingestion pipeline with Textract + LLM parsing at Constient",
      ],
      technologies: ["SQL", "Python", "AWS QuickSight", "ETL", "PostgreSQL", "MongoDB", "Data Validation"],
    },

    leadershipAndTraining: {
      label: "Leadership, Training & People Development",
      evidence: [
        "Trained 3000+ professionals across robotics, IoT, ML, AI, statistics, deep learning",
        "Functionally led 12 global trainers at Informatica, led 12 engineers at Constient",
        "Led team of 12 engineers (frontend, backend, AI, data) through full SDLC at Constient",
        "Co-founded maker community, organized hackathons, mentored 20-30+ professionals on real projects",
        "Spearheaded digital transformation during COVID, retaining 60% of annual revenue",
        "Guest lecturer at SRM University and SR College of Engineering",
        "Chief adjudicator for multiple hackathons and robotics competitions",
      ],
    },

    productAndBusiness: {
      label: "Product Thinking & Revenue Impact",
      evidence: [
        "Every program designed at Lema Labs directly drove revenue growth (30%, 40%, 60%)",
        "4 courses at Informatica increased sales pipeline by 22%",
        "Lean methodology for product/curriculum development",
        "Business requirements gathering with external stakeholders (Amazon brokers, Constient clients)",
      ],
    },

    rapidLearning: {
      label: "Rapid Domain Mastery",
      evidence: [
        "Robotics → IoT → ML → DL → GenAI → Agentic AI (continuous self-teaching over 10 years)",
        "Learned customs/trade compliance domain from zero at Amazon",
        "Mastered 8 Informatica enterprise products in 9 months",
        "Went from zero GenAI knowledge to production Agentic AI systems in ~18 months",
      ],
    },

    hardwareToSoftware: {
      label: "Full-Stack Hardware-to-Software Capability",
      evidence: [
        "BE Electronics + Embedded C + register-level microcontroller programming",
        "IoT systems with MQTT and sensor integration",
        "Python backend engineering with FastAPI, Django",
        "Production AI systems with LangGraph, OpenAI",
        "Crop disease detection deployed on drones (edge AI)",
      ],
    },
  },

  // ============================================================================
  // POSITIONING STATEMENTS (ready for different resume types)
  // ============================================================================
  positioning: {
    elevatorPitch: "Agentic AI Solutions Engineer with 10+ years building intelligent systems. Deployed production multi-agent systems achieving 98% accuracy in financial reconciliation (2+ weeks to 2 days close time) and an autonomous hospitality virtual waiter. Currently building an AI-powered alumni networking platform (LangGraph + Neo4j), a digital transport system for rural India, and an adaptive tutoring system with 9 learning algorithms. Expert in LangGraph, OpenAI, Gemini, and production AI systems. Ex-Amazon BI Engineer. Trained 3000+ professionals.",

    summaries: {
      aiEngineer: "AI Solutions Architect with 10+ years of experience spanning Agentic AI, data engineering, and EdTech. Architected production multi-agent systems using LangGraph and OpenAI — including a financial reconciliation system achieving 98% accuracy and a hospitality AI assistant handling end-to-end customer operations autonomously. Ex-Amazon BI Engineer. Strong backend engineering skills (FastAPI, PostgreSQL, MongoDB) with hands-on ML/DL expertise.",

      solutionsArchitect: "AI Solutions Architect bridging business goals with cutting-edge AI. Track record of identifying complex business problems and architecting autonomous AI solutions — from financial reconciliation (2-week process reduced to 2 days) to conversational AI for hospitality operations. Experience spans Amazon (trade compliance data systems), enterprise software (Informatica), and startup leadership (6 years building and scaling EdTech programs).",

      technicalLead: "Technical leader with 10+ years shipping production systems across AI, data, and IoT. Led team of 12 engineers through full SDLC at Constient, functionally led 12 global trainers at Informatica, and spearheaded digital transformation during COVID at Lema Labs. Trained 3000+ professionals. Proven ability to rescue failing projects (took over struggling reconciliation project, achieved 98% accuracy), build teams, and drive revenue through technical excellence.",

      productManager: "AI-focused product thinker with 10+ years turning technology into business impact. Designed 3 EdTech programs that drove 30-60% revenue increases. Built AI products serving real estate finance and hospitality operations. Agile PM certified (APMG). Experience in stakeholder management across Amazon (external broker negotiations), enterprise clients (Constient), and internal teams. MSc AI + PG Diploma in International Management from SKEMA Paris.",

      dataEngineer: "Data engineer and BI professional with experience building data quality systems at Amazon (customs audit automation: <1% to 98% coverage, data readiness: 38% to 86%). Skilled in SQL, Python, ETL pipelines, AWS QuickSight, data validation frameworks, and JSON schema design. Also built AI-powered data extraction pipelines using Textract and LLM parsing for financial document processing at Constient.",

      consultant: "AI Technology Consultant with 10+ years across startups, enterprise tech, and academia. Recently architected Agentic AI systems for commercial real estate finance (98% reconciliation accuracy) and hospitality operations (autonomous virtual waiter). Previously built data quality and audit automation systems at Amazon Luxembourg. Trained 3000+ professionals in AI/ML. Agile PM certified. Dual master's from SKEMA Paris (AI + International Management).",

      preSalesEngineer: "AI Solutions Engineer with 10+ years building and demonstrating production AI systems. Proven ability to win engagements through live technical demos — achieved 77% reconciliation accuracy on day 1 at Constient, converting a consulting gig into a project lead role. Created technical training that drove 22% sales pipeline increase at Informatica. Builds custom POCs that address prospect-specific problems. Full-stack Agentic AI expertise (LangGraph, OpenAI, FastAPI) with hands-on experience across fintech, hospitality, logistics, and EdTech domains.",

      technicalProgramManager: "Technical Program Manager with 10+ years coordinating complex technical programs across AI, data engineering, and EdTech. Led 12-engineer cross-functional team (frontend, backend, AI, data) through full SDLC at Constient delivering 2 simultaneous AI products. Managed multi-stakeholder data programs across 5+ external partners at Amazon. Agile PM certified (APMG). Combines deep technical depth (production agentic AI, data pipelines) with program rigor — evaluates engineering estimates and makes technical trade-offs from hands-on experience.",

      foundingEngineer: "Full-stack AI engineer with 6 years of bootstrapped startup experience (Lema Labs) and production Agentic AI expertise. Built 3 revenue-generating products from scratch, led digital transformation during COVID (retained 60% revenue), and recently architected multi-agent AI systems achieving 98% accuracy at Constient. Versatile generalist: can architect the core product, build the backend, demo to clients, lead the engineering team, and train users — all in the same week. Proven ability to scale from solo contributor to 12-person team lead.",
    },
  },

  // ============================================================================
  // WHY HIRE ME — ROLE-SPECIFIC NARRATIVES
  // ============================================================================
  // Use these sections to answer: "Why should we hire you for this role?"
  // Each section provides the core argument, evidence, differentiators,
  // and rebuttals to anticipated objections.
  //
  // These are NOT resume text — they are interview preparation and narrative
  // foundations that can be adapted for cover letters, interviews, and pitches.
  // ============================================================================

  whyHireMe: {

    // -----------------------------------------------------------------------
    // 1. AGENTIC AI SOLUTIONS ARCHITECT
    // -----------------------------------------------------------------------
    agenticAISolutionsArchitect: {
      roleTitle: "Agentic AI Solutions Architect",
      coreIdentity: "I am an architect who thinks in systems, not features.",

      coreArgument: `I don't just build AI agents — I architect complete autonomous systems that solve real business problems end-to-end. My approach always starts with understanding the business process deeply before writing a single line of code. At Constient, when the existing team was stuck building agents without understanding the data, I stepped back, analyzed the actual reconciliation workflow, mapped the data sources, and then designed an architecture that went from bank PDF to closed ledger autonomously. That systems-thinking approach — understanding the full pipeline from business process to production deployment — is what separates an architect from an engineer.`,

      whyThisRole: [
        "I've designed and deployed production multi-agent architectures — not just prototypes. The AR reconciliation system (6 specialized agents) and Virtual Waiter (10-agent modular system) are both in production serving real clients.",
        "I think in terms of state machines, data flows, and failure modes — not just prompt engineering. My architectures include persistent checkpointing, HITL fallbacks, and feedback loops for continuous improvement.",
        "I bridge business domain expertise with technical architecture. I first understand the financial reconciliation process, the restaurant operations workflow, or the customs compliance domain — then I design AI systems around those real processes.",
        "I design for extensibility. The Virtual Waiter's pluggable sub-module architecture means any new feature follows the same pattern — the orchestrator just needs to know about it. That's architecture, not just coding.",
      ],

      evidence: {
        productionSystems: [
          "AR Reconciliation: 6-agent LangGraph system — 98% accuracy, 10x faster close time, 411 bank statements decomposed into 535 coded transactions",
          "Virtual Waiter: 10-agent modular system with pluggable architecture — food ordering, booking, feedback, recommendations, all through conversational AI with POS integration",
          "Both systems handle complex real-world edge cases: partial payments, multi-tenant decomposition, ambiguous bank narratives, multiple payment modes",
        ],
        architecturalDecisions: [
          "Chose LangGraph state machines over simple chains for persistent checkpointing and recovery in financial workflows where reliability is non-negotiable",
          "Designed HITL pipeline not as a crutch but as a feedback loop — human corrections generate ~150 training data points/month that improve agent logic",
          "Used GPT-4o for complex reasoning (tenant identification, reconciliation logic) and GPT-4o-mini for simpler tasks (intent classification, tool calls) — cost-performance optimization",
          "Designed Virtual Waiter as pluggable modules so the architecture scales to new domains without restructuring",
        ],
        domainBreadth: [
          "Finance: AR ledger reconciliation across multiple ERPs and payment types",
          "Hospitality: End-to-end restaurant operations automation with POS integration",
          "Logistics/Trade Compliance: Data standardization and audit automation at Amazon",
          "EdTech: Adaptive learning systems with psychometric profiling",
        ],
      },

      differentiators: [
        "I rescue failing projects. At Constient, the team couldn't make the LLM reconcile transactions. On day 1, I achieved 77% with prompt engineering alone, then architected the multi-agent system that reached 98%. Most architects design from scratch — I can also diagnose and fix what's broken.",
        "I have a decade of cross-domain experience. Most agentic AI practitioners are 1-2 years into the field from a pure software background. I bring robotics, IoT, ML, data engineering, and enterprise software context — which means I see system design patterns others miss.",
        "I build teams, not just systems. I led 12 engineers at Constient through the full SDLC. Architecture means nothing if the team can't execute it.",
        "I've trained 3000+ people in technical concepts — which means I communicate architecture decisions clearly to both technical teams and business stakeholders.",
      ],

      anticipatedObjections: [
        {
          concern: "Only 6 months of production agentic AI experience at Constient",
          rebuttal: "Those 6 months were extremely high-intensity: 2 production systems, 12-person team, rescued a failing project, and built the entire architecture from data analysis through deployment. Plus, I have 2 full years in the agentic AI space including freelance systems that used true tool-use and reasoning loops. The field itself is only ~2-3 years old — very few people have more production agentic AI experience than this.",
        },
        {
          concern: "No experience at large AI-native companies (OpenAI, Anthropic, Google DeepMind, etc.)",
          rebuttal: "My value is in applying AI to real business problems — not in foundational research. I take the models these companies build and architect production systems that generate business value. The 98% reconciliation accuracy and 10x time-to-close improvement are results that matter to enterprises.",
        },
        {
          concern: "MSc is in Business Transformation, not Computer Science",
          rebuttal: "That's a feature, not a bug. Solutions architecture requires understanding both the technology and the business. My MSc gives me formal business strategy training alongside technical depth built over a decade. I can speak to a CTO about LangGraph state machines and to a CFO about close-time reduction.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 2. AGENTIC AI ENGINEER
    // -----------------------------------------------------------------------
    agenticAIEngineer: {
      roleTitle: "Agentic AI Engineer",
      coreIdentity: "I am a builder who ships production AI systems, not just prototypes.",

      coreArgument: `I build AI agents that actually work in production — handling messy real-world data, edge cases, and integration with existing enterprise systems. My engineering strength is the ability to go from understanding a business problem to deploying a production system end-to-end: data pipelines, agent architecture, backend APIs, database design, testing, and deployment. When I joined Constient, I didn't just write prompts — I built the entire stack: Textract integration for PDF extraction, Pydantic schemas for data validation, LangGraph agents for reasoning, FastAPI for the backend, PostgreSQL/MongoDB/Redis for data, and a HITL pipeline for continuous improvement.`,

      whyThisRole: [
        "I have hands-on production experience with the full Agentic AI stack: LangGraph (state machines, checkpointing), LangChain (chains, tool binding, memory), OpenAI APIs (GPT-4o, GPT-4o-mini), and supporting infrastructure (FastAPI, PostgreSQL, MongoDB, Redis, Pydantic V2).",
        "I don't just call LLM APIs — I engineer robust systems around them. Data validation with Pydantic schemas, persistent state management, error recovery, HITL fallbacks, and feedback loops are part of every system I build.",
        "I have 7+ years of Python experience and strong ML/DL foundations (TensorFlow, PyTorch, scikit-learn). Agentic AI isn't my first exposure to AI — it's built on top of deep fundamentals.",
        "I can debug AI systems. When the Constient team's reconciliation wasn't working, I diagnosed the issue (no data understanding, wrong prompting approach) and fixed it — achieving 77% accuracy on day 1 with a single prompt before building the full architecture.",
      ],

      evidence: {
        systemsBuilt: [
          "AR Reconciliation: End-to-end pipeline — Textract PDF extraction → LLM parsing → tenant identification → AR matching → reconciliation state machine → HITL → GL dashboard",
          "Virtual Waiter: Main orchestrator → intent classification → sub-agent routing → tool execution → POS integration → personalization engine → response generation",
          "3 freelance POCs using agentic patterns: patent search agent, adaptive learning agent, VLM-based product identification agent",
          "GenAI project suite: RAG chatbots, SQL agents, ReAct search agents, CrewAI multi-agent orchestration",
        ],
        engineeringPractices: [
          "Pydantic V2 schemas for all data validation — no unstructured data passes through the pipeline without schema enforcement",
          "LangGraph checkpointing for state recovery — financial workflows cannot lose state mid-process",
          "Multi-model strategy: GPT-4o for reasoning-heavy tasks, GPT-4o-mini for tool calling and classification — optimizing cost without sacrificing accuracy",
          "FastAPI async backend handling concurrent agent requests, omnichannel communication, and payment flows",
          "MongoDB for flexible document storage (agent state, user profiles), PostgreSQL for relational financial data, Redis for caching and session management",
        ],
        priorTechnicalDepth: [
          "7+ years Python: not just scripting — production backend engineering with FastAPI, Django, async patterns",
          "ML foundations: designed and taught a 13-week ML course covering algorithms from linear regression to SVMs — deep understanding, not just API calls",
          "Deep learning: emotion detection (76% AffectNet), disease prediction (87%), drone-deployed crop disease detection, RL agents",
          "Data engineering: built ETL pipelines and validation frameworks at Amazon handling million-record datasets",
          "Hardware/embedded: 6 years of register-level microcontroller programming — understanding systems at the lowest level",
        ],
      },

      differentiators: [
        "Full-stack AI engineer, not just a prompt engineer. I build the entire system: data pipelines, agent logic, backend APIs, database schemas, and deployment. Many 'AI engineers' today only know how to call OpenAI's API — I engineer production-grade systems around it.",
        "Strong fundamentals. 7+ years of Python, ML/DL foundations, data engineering at Amazon, even embedded systems programming. This depth means I can debug issues at any layer of the stack — not just at the prompt level.",
        "Battle-tested on real data. Bank statements with missing tenant names, multi-tenant payments split across expense categories, restaurant orders with dietary modifications — I've built agents that handle the messy reality, not just clean demo data.",
        "I build with feedback loops. Every system I architect includes mechanisms for continuous improvement — HITL pipelines, training data generation, accuracy monitoring. The system gets better over time, not just at launch.",
      ],

      anticipatedObjections: [
        {
          concern: "7+ years of Python but only 1 year of FastAPI — limited backend experience",
          rebuttal: "FastAPI is a framework, not a paradigm. I've built backends with Django, Flask, and FastAPI. The engineering patterns — async programming, REST API design, ORM usage, schema validation — transfer across frameworks. The Constient backend handles omnichannel communication, payments, and multi-agent orchestration simultaneously.",
        },
        {
          concern: "No contributions to open-source AI frameworks (LangChain, LangGraph, etc.)",
          rebuttal: "My focus has been on applying these frameworks to production business problems, not on framework development. The value I bring is knowing how to use LangGraph's state machines for financial reconciliation or LangChain's tool binding for POS integration — production application expertise.",
        },
        {
          concern: "Career path is non-traditional — robotics trainer to AI engineer",
          rebuttal: "That non-traditional path is my strength. I've learned every technology I work with from the ground up — robotics, IoT, ML, DL, GenAI, Agentic AI — each time going deep enough to teach others. That learning-and-teaching cycle means I understand things at a level most engineers who just 'picked it up on the job' don't. Also, training 3000+ people taught me to think about systems from the user's perspective.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 3. TECHNICAL CONSULTING
    // -----------------------------------------------------------------------
    technicalConsulting: {
      roleTitle: "AI Technical Consultant",
      coreIdentity: "I am a technology enabler who translates complex AI capabilities into business outcomes.",

      coreArgument: `Consulting is what I've done my entire career — even when it wasn't my official title. At Lema Labs, I consulted 20-30 working professionals on applying ML to their industry problems. At Amazon, I sat with external customs broker teams to understand their data and design standardized systems. At Constient, I literally joined as a consultant to rescue a failing AI project. As a freelancer, I built POCs for clients and trained at ~10 institutions. My entire career is a pattern of: enter a new domain, learn it deeply, build a solution, and enable others to use it. That's consulting.`,

      whyThisRole: [
        "I've been consulting across domains my entire career: EdTech, robotics, IoT, enterprise software, trade compliance, fintech, hospitality. Each time, I entered with no domain knowledge and delivered results — that rapid domain mastery is the core consulting skill.",
        "I communicate complex technology to non-technical stakeholders. Training 3000+ people taught me to explain AI, ML, data engineering, and systems architecture at any level of technical depth.",
        "I build trust quickly. At Constient, I went from external consultant to project lead in days — because I demonstrated immediate value (77% accuracy on day 1) and then showed I could take a step back, understand the real problem, and build the right solution.",
        "I have both the technical depth to architect solutions AND the business acumen to connect them to ROI. My MSc in AI for Business Transformation + PG Diploma in International Management formalizes what I've practiced for a decade.",
      ],

      evidence: {
        consultingTrackRecord: [
          "Constient: Brought in as external consultant for a failing project → rescued it → promoted to lead → delivered 98% accuracy system → also consulted on a second reconciliation project for a hotel chain as BA/architect",
          "Freelance: 3 POC builds for different clients across EdTech, e-commerce, and research/innovation — each requiring rapid domain understanding and solution delivery",
          "Amazon: External stakeholder engagement with customs broker data teams across EU/UK — understood their systems, negotiated data formats, designed integration architecture",
          "Informatica: Learned 8 enterprise products from scratch in 9 months, created training curriculum, functionally led 12 global trainers",
          "Lema Labs: Consulted 20-30+ working professionals on applying ML to real industry problems over several years",
        ],
        clientFacingSkills: [
          "Stakeholder management across cultures: Indian enterprises, European customs brokers, French academia, global training delivery",
          "Requirements gathering and translation: turning client pain points into technical architectures (Constient reconciliation, Amazon data standardization)",
          "Rapid prototyping: built 3 freelance POCs to demonstrate feasibility before full engagement",
          "Training and enablement: trained 3000+ people — can run workshops, create documentation, and enable client teams to maintain solutions independently",
        ],
        businessAcumen: [
          "Every program at Lema Labs was designed with revenue impact in mind (30%, 40%, 60% increases)",
          "At Informatica, courses directly increased sales pipeline by 22%",
          "At Amazon, data standardization was about preventing fines and ensuring compliance — understood the financial risk context",
          "At Constient, reconciliation reduced close time from 2+ weeks to 2 days — understood the finance team's deadline pressure",
          "Agile PM certified (APMG) — structured approach to project delivery",
        ],
      },

      differentiators: [
        "I don't just advise — I build. Many consultants create slide decks and leave. I architected production systems, wrote code, led engineering teams, and delivered measurable results. When Constient needed someone to fix their failing project, I didn't write a report — I sat down, wrote a prompt, got 77% accuracy, then built the entire solution.",
        "I have deep technical credibility. Clients trust my recommendations because I can demonstrate them immediately. I don't say 'you should use LangGraph for state management' — I show them a working agent that does it.",
        "I'm a force multiplier. Training 3000+ people taught me that the highest-value consulting is enablement — building solutions AND training the client team to maintain and extend them. At Informatica, I didn't just create courses — I trained the trainers so the knowledge scaled globally.",
        "I speak four languages and have worked across India, France, Luxembourg, and globally remote — cross-cultural communication is natural to me.",
      ],

      anticipatedObjections: [
        {
          concern: "No formal consulting firm experience (McKinsey, Deloitte, Accenture, etc.)",
          rebuttal: "I've done the actual work of consulting — domain learning, stakeholder management, solution architecture, delivery, and enablement — across every role. The difference is I did it while also building the solutions myself, not just advising. That makes me a more effective consultant because I know what's feasible, not just what sounds good in a slide deck.",
        },
        {
          concern: "Mostly worked with small/mid-size companies, not Fortune 500 clients",
          rebuttal: "Amazon is Fortune 500 — and I worked directly with their EU trade compliance infrastructure. More importantly, my value at Constient was taking enterprise-grade problems (multi-ERP reconciliation, million-transaction volumes) and building AI solutions for them. The problems I solve are enterprise-scale regardless of the company I'm at.",
        },
        {
          concern: "Agentic AI is a new and niche area — how do you consult broadly?",
          rebuttal: "Agentic AI is the current focus, but my consulting value spans data engineering, ML, product design, and digital transformation. The pattern is the same: learn the domain, understand the pain, design the solution, deliver it, enable the team. I've done this across robotics, IoT, ML, enterprise data, and now AI agents.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 4. PRODUCT MANAGER (AI PRODUCTS)
    // -----------------------------------------------------------------------
    productManager: {
      roleTitle: "Technical Product Manager (AI)",
      coreIdentity: "I am a product thinker who builds from user needs, not from technology.",

      coreArgument: `I've been building products my entire career — I just called them 'programs' and 'solutions'. At Lema Labs, I designed 3 education products from scratch using lean methodology: identify the market need, build an MVP, pilot it with real users, iterate based on feedback, and scale. Each product directly drove revenue (30%, 40%, 60% increases). That's product management. At Constient, I identified that the team was building without understanding the user's actual workflow, took a step back to analyze the data and the reconciliation process, and then redesigned the product around what the finance team actually needed. At Amazon, I gathered requirements from external stakeholders (customs brokers) and translated them into data product specifications. I think in terms of user problems and business outcomes — the technology is the means, not the end.`,

      whyThisRole: [
        "I've designed and shipped 3 revenue-generating products from scratch at Lema Labs, each using lean methodology: problem identification → MVP → pilot → iterate → scale. Combined revenue impact: 30% + 40% + 60% increases.",
        "I understand both the technology and the market. With 7+ years of hands-on engineering and an MSc in AI for Business Transformation, I can evaluate technical feasibility AND market viability — without needing to 'check with engineering'.",
        "I have experience with the full product lifecycle: market research (Lema Labs), requirements gathering (Amazon, Constient), prototyping (freelance POCs), building (Constient production systems), testing (Amazon beta testing), go-to-market (Informatica courses driving 22% pipeline), and iteration (HITL feedback loops at Constient).",
        "I'm user-obsessed. The Virtual Waiter was designed to feel like a real waiter — not a chatbot — because I started from the user experience (what do diners actually want?) and worked backward to the architecture. The personalization engine exists because users shouldn't have to log in to get a good experience.",
      ],

      evidence: {
        productsBuilt: [
          "Lema Labs School Robotics Program: Designed for ages 10-14, lean methodology, competition-based culmination. ~30% revenue increase.",
          "Lema Labs IoT Workshop: 2-day format for 150-180 person batches, self-taught the domain, designed curriculum. ~40% revenue increase.",
          "Lema Labs ML Course: 13-week flagship program covering full ML pipeline. 60% revenue increase — became the company's core product.",
          "Constient AR Reconciliation: Identified the real user need (finance teams drowning in manual reconciliation), redesigned the product around the actual workflow.",
          "Constient Virtual Waiter: User-first design — conversational personality, no-login personalization, pluggable architecture for feature expansion.",
          "COVID Digital Transformation: Pivoted entire product line from classroom to online, deployed LMS, retained 60% revenue during pandemic.",
        ],
        productThinking: [
          "Lean methodology: build MVP, test with real users, iterate. Applied at Lema Labs for every new program — developed in 1-2 months, piloted in summer batch, iterated based on feedback.",
          "User research: psychometric profiling in the Learning Assistant was designed to understand the actual user (student capability, interests, pace) before delivering content.",
          "Stakeholder management: At Amazon, gathered requirements from 5+ external customs broker teams, each with different capabilities and constraints. Balanced what Amazon needed with what brokers could deliver.",
          "Go-to-market: At Informatica, courses directly drove 22% increase in sales pipeline — understood how training content creates purchase intent.",
          "Metrics-driven: 98% reconciliation accuracy, 38%→86% data readiness, <1%→98% audit coverage — I define and track success metrics for every product.",
        ],
        leadershipForPM: [
          "Led 12 engineers at Constient — can drive cross-functional execution",
          "Functionally led 12 trainers at Informatica — can coordinate across distributed teams",
          "Trained 3000+ people — can create documentation, run demos, and articulate product vision at any level",
          "Agile PM certified (APMG International) — formal product management methodology",
          "MSc AI for Business Transformation + PG Diploma International Management — formal business training",
        ],
      },

      differentiators: [
        "I'm a PM who can build. I don't just write PRDs — I've built production systems with my own hands. This means I can evaluate engineering estimates, understand technical trade-offs, and make build-vs-buy decisions from real experience. When an engineer says 'this will take 3 weeks', I know if that's right because I've done the work.",
        "I have revenue-attributed product track record. Not just 'launched a feature' — every product I built at Lema Labs had a directly measurable revenue impact (30%, 40%, 60%). I think in terms of business outcomes, not feature checklists.",
        "I come from the user side. Training 3000+ people means I've sat across from the user thousands of times, watched them struggle, adapted my approach in real-time, and designed better experiences based on what I learned. That user empathy is at the core of my product thinking.",
        "I've managed product through crisis. The COVID pivot at Lema Labs — transforming a classroom company into an online business in weeks, retaining 60% revenue — required product decisions under extreme uncertainty. I'm comfortable making bets with incomplete information.",
      ],

      anticipatedObjections: [
        {
          concern: "No formal PM title on your resume — you were an engineer/architect",
          rebuttal: "The work was product management regardless of the title. I identified user needs, defined product scope, built MVPs, gathered feedback, iterated, and tracked revenue impact. At Lema Labs, I essentially was the product manager for every new program — but at a startup, you don't have separate PM roles. At Constient, I made the critical product decision: stop building and go back to understanding the data first. That's PM judgment.",
        },
        {
          concern: "Engineering background might mean you'll focus too much on technical details",
          rebuttal: "My bias is actually toward business outcomes, not technology. Every product I built started with 'what does the user need?' not 'what's the coolest tech?' The Virtual Waiter started with 'what do diners want from a waiter?' — the 10-agent architecture was the means to deliver that experience. My engineering background means I can go deep when needed, but I lead with user and business value.",
        },
        {
          concern: "EdTech product experience may not transfer to AI/SaaS products",
          rebuttal: "The product methodology is the same: understand the user, build lean, measure outcomes, iterate. My recent experience at Constient is directly in AI/SaaS territory — building production AI products for enterprise clients in fintech and hospitality. The EdTech background adds something most PMs don't have: deep experience with user learning and behavior, which is directly applicable to AI product UX.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 5. PRE-SALES / SOLUTIONS ENGINEER (AI)
    // -----------------------------------------------------------------------
    preSalesSolutionsEngineer: {
      roleTitle: "Pre-Sales Engineer / Solutions Engineer (AI)",
      coreIdentity: "I am a technical closer who proves feasibility, not just promises it.",

      coreArgument: `My career is full of moments where I demonstrated AI's value in real-time to win trust and commitment. At Constient, I walked into a failing project, sat down, and got 77% accuracy on day one — that single demo earned me the project lead role and a 12-person team. As a freelancer, I built 3 POCs to prove feasibility to clients before they committed to full engagements. At Informatica, the courses I created directly drove a 22% increase in the sales pipeline — because good technical enablement creates purchase intent. At Amazon, I sat with customs broker teams and translated their technical capabilities into data integration agreements. I don't pitch theoretical possibilities — I demonstrate working solutions that close deals.`,

      whyThisRole: [
        "I've built POCs that directly led to engagements — 3 freelance POCs demonstrating AI feasibility for clients, plus the Constient day-1 demo that converted a consulting gig into a project lead role.",
        "I understand the full technical stack deeply enough to demo live, handle objections, and customize solutions in real-time. I don't need to 'go back to engineering' — I am engineering.",
        "I create content that drives pipeline. At Informatica, 4 courses with technical labs drove 22% sales pipeline increase. I understand how technical education creates buying confidence.",
        "I'm comfortable in client-facing situations across cultures. External stakeholder negotiations at Amazon (EU/UK broker teams), client engagements at Constient, training at ~10 institutions as a freelancer, and 3000+ people trained over my career.",
      ],

      evidence: {
        preSalesExperience: [
          "Constient day-1 demo: Walked into failing project, achieved 77% accuracy with a single prompt — immediate technical credibility that won the leadership role",
          "Freelance POCs: Built 3 proof-of-concept AI applications (learning platform, product description generator, research idea generator) to demonstrate feasibility to prospective clients",
          "Informatica training → pipeline: Created 4 instructor-led courses with hands-on labs that directly contributed to 22% sales pipeline increase — technical enablement as a sales accelerator",
          "Amazon stakeholder alignment: Conducted discovery sessions with 5+ external customs broker data teams, understood their systems, and negotiated data format agreements — this is solutions engineering applied to data partnerships",
        ],
        technicalDemoCapability: [
          "Can build live demos across: Agentic AI (LangGraph multi-agent systems), RAG pipelines, conversational AI, data validation, ML models, and dashboard/analytics",
          "Deep understanding of LangChain/LangGraph, OpenAI, FastAPI, PostgreSQL, MongoDB — can answer deep technical questions on the spot",
          "Built a GenAI project suite covering 6 different AI patterns (RAG, SQL agents, ReAct, CrewAI, math chains, search) — essentially a demo portfolio",
          "Can explain AI architecture to both CTOs (state machine checkpointing, agent orchestration) and CFOs (close-time reduction, accuracy metrics, ROI)",
        ],
        objectionHandling: [
          "Technical objections: Addressed by having built production systems — I know what works and what doesn't with real-world messy data",
          "Feasibility concerns: Can build rapid POCs to prove value before full engagement",
          "Integration concerns: Experience integrating with POS systems, ERPs, government filing systems, customs broker APIs — I understand enterprise integration complexity",
          "Scale concerns: Constient systems handle multi-tenant decomposition (411→535 transactions), Amazon audit handled nearly a million records monthly",
        ],
      },

      differentiators: [
        "I close with code, not slides. Most pre-sales engineers demo existing products. I can build a custom POC on the spot that addresses the prospect's specific problem — that's a completely different level of technical sales impact.",
        "I've done the post-sales work too. I've built and deployed the production systems, led the engineering teams, handled the edge cases. This means my pre-sales promises are grounded in reality — I never oversell because I know exactly what's involved in delivery.",
        "I understand the 'aha moment'. Training 3000+ people taught me to recognize when someone's eyes light up — when the technology clicks from abstract to 'we need this'. I design demos to create that moment.",
        "I speak the language of multiple buyer personas. Finance teams (reconciliation metrics), operations (automation), IT (architecture and integration), executives (ROI and competitive advantage). I've presented to all of them.",
      ],

      anticipatedObjections: [
        {
          concern: "No formal sales or pre-sales experience",
          rebuttal: "Every freelance POC was pre-sales — I built it to win the engagement. The Informatica courses were pre-sales — they drove 22% pipeline growth. The Constient day-1 demo was pre-sales — it won me the project. I've been doing solutions engineering my entire career without the title. The difference now is I'd be doing it as the primary role instead of as a side effect.",
        },
        {
          concern: "Engineers who move to pre-sales sometimes struggle with the commercial mindset",
          rebuttal: "I've always thought commercially. Every product at Lema Labs was designed for revenue impact. At Informatica, I explicitly understood the link between training quality and sales pipeline. At Constient, I framed my work in terms of close-time reduction and accuracy — business outcomes, not technical achievements. My MSc in Business Transformation formalizes this commercial thinking.",
        },
        {
          concern: "Pre-sales requires managing many prospects simultaneously, not going deep on one",
          rebuttal: "At Informatica, I worked across 8 different products simultaneously, created courses for each, and coordinated with 12 trainers globally. At Amazon, I worked with multiple broker teams in parallel, each with different data capabilities and requirements. I can context-switch across prospects while maintaining depth in each conversation.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 6. TECHNICAL PROGRAM MANAGER (AI/ML)
    // -----------------------------------------------------------------------
    technicalProgramManager: {
      roleTitle: "Technical Program Manager (AI/ML)",
      coreIdentity: "I am a program driver who coordinates complex technical work toward business outcomes.",

      coreArgument: `I've run programs across every role in my career — coordinating multiple workstreams, stakeholders, and dependencies toward a shared goal. At Constient, I led 12 engineers (frontend, backend, AI, data analysts) through the full SDLC for two simultaneous AI products, running code reviews, making architecture decisions, and managing the client relationship. At Amazon, I coordinated data standardization across 5+ external broker teams, each with different technical capabilities, while simultaneously building the audit automation dashboard. At Informatica, I functionally led 12 global trainers while developing 4 course curricula in parallel. At Lema Labs, I ran the entire COVID digital transformation program — migrating a classroom business to online while keeping revenue alive. What makes me a strong TPM is that I'm not just tracking tasks — I understand the technical depth well enough to unblock teams, re-scope when needed, and make trade-off decisions myself.`,

      whyThisRole: [
        "I've coordinated cross-functional teams of 12+ people across engineering disciplines (frontend, backend, AI, data) at Constient, and across geographies (12 trainers globally) at Informatica.",
        "I manage external stakeholder programs. At Amazon, I ran the data standardization program across 5+ customs broker partners — each requiring separate discovery, requirements alignment, and integration tracking. That's multi-vendor program management.",
        "I have formal Agile PM certification (APMG International) and have applied agile practices across multiple project types: product development, data engineering, AI systems, and training delivery.",
        "I make technical trade-off decisions — not just track them. I chose GPT-4o vs GPT-4o-mini for different tasks, designed HITL thresholds, decided when to stop building the POC and start analyzing data first. A TPM who understands the technology makes the whole program faster.",
      ],

      evidence: {
        programsManaged: [
          "Constient (2 parallel AI products): 12-engineer team, SDLC from data analysis through production deployment, two simultaneous products (AR reconciliation + Virtual Waiter), client stakeholder management",
          "Amazon (data standardization + audit automation): Parallel programs — one external-facing (broker data onboarding) and one internal (audit dashboard). Managed dependencies between them (audit system consumed standardized data).",
          "Informatica (4 concurrent curricula): 4 courses in various stages of development/delivery, 12 trainers to coordinate, train-the-trainer sessions, LMS content management — all in 9 months",
          "Lema Labs (COVID digital transformation): Emergency program — content recording, LMS deployment (OpenEDX), curriculum migration, revenue model pivot — completed under crisis conditions with a bootstrapped team",
          "Lema Community (hackathon program): Organized ~3 makeathons (36-hour events), coordinated logistics, judging, mentorship, sponsors — produced Smart India Hackathon winners and student startups",
        ],
        crossFunctionalCoordination: [
          "Constient: Coordinated frontend engineers (chat UI), backend engineers (FastAPI), AI engineers (LangGraph agents), data analysts (financial data), and the client's finance team — all toward a single reconciliation pipeline",
          "Amazon: Bridged Amazon internal teams (GTS audit team, data engineering) with external broker teams (data providers) and compliance teams (requirements owners) — 3-way coordination",
          "Informatica: Bridged product teams (who built the tools), curriculum team (self — who created training), trainer network (12 global), and sales team (who tracked pipeline impact)",
        ],
        technicalDepthForTPM: [
          "Can evaluate engineering estimates from experience: built production agentic AI systems, data pipelines, backend APIs myself",
          "Makes architecture decisions: chose LangGraph over simple chains, designed multi-model strategy, decided on HITL thresholds",
          "Diagnoses blockers: identified Constient's fundamental issue (no data understanding) before it became a program-level failure",
          "Understands integration complexity: POS systems, ERPs, customs broker APIs, government filing systems",
        ],
      },

      differentiators: [
        "I'm a TPM who has been the engineer. I've built the systems I'd be managing programs for — data pipelines at Amazon, agentic AI at Constient, backend systems with FastAPI. This means I can evaluate technical proposals, identify risks, and unblock teams without needing to escalate to an architect.",
        "I manage programs that involve external stakeholders, not just internal teams. Amazon broker negotiations, Constient client management, Informatica global trainer coordination — I'm comfortable managing programs where I don't control all the players.",
        "I've managed crisis programs. The COVID pivot at Lema Labs — transforming a physical business into digital under existential pressure — taught me to make scope decisions fast, accept imperfect solutions, and keep the program moving when everything is uncertain.",
        "I've managed programs that directly drove revenue. Every program I've run has a measurable business outcome: 22% pipeline (Informatica), 98% accuracy (Constient), 38%→86% data readiness (Amazon), 60% revenue retention (Lema Labs COVID). I tie program success to business metrics, not just delivery dates.",
      ],

      anticipatedObjections: [
        {
          concern: "No formal TPM title — you've been an engineer and architect",
          rebuttal: "At Constient, my actual work was 50% program management (coordinating 12 engineers, managing client expectations, running SDLC) and 50% technical contribution. At Amazon, I ran a multi-stakeholder data program across 5+ external partners. At Informatica, I managed a parallel curriculum delivery program across 12 global trainers. The work is program management — the title just said 'engineer'. I'm choosing to formalize what I've already been doing.",
        },
        {
          concern: "TPM roles at big tech (Google, Meta, Amazon) expect specific FAANG-style program rigor",
          rebuttal: "I've worked within Amazon's program structures — their internal tools, their review processes, their stakeholder alignment culture. I understand the operating rhythm. More importantly, I bring the ability to move fast in ambiguous situations (startup experience) while still driving toward structured outcomes (APMG certification, SDLC discipline at Constient).",
        },
        {
          concern: "As someone technical, you might be tempted to solve problems yourself instead of empowering the team",
          rebuttal: "At Constient, I led 12 engineers — if I tried to do everything myself, nothing would have shipped. I architected the system, set the technical direction, ran code reviews, and mentored — but the team built and delivered it. My role was to make the team faster, not to replace them. The same applies at Lema Labs: I designed curricula but trained the trainers to deliver at scale (Informatica model too).",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 7. FOUNDING / EARLY ENGINEER AT AI STARTUP
    // -----------------------------------------------------------------------
    foundingEngineer: {
      roleTitle: "Founding Engineer / Early-Stage AI Engineer",
      coreIdentity: "I am a startup generalist who builds whatever needs building to make the company succeed.",

      coreArgument: `I've already been a founding-stage contributor. At Lema Labs — a bootstrapped, IIT Madras-incubated startup with no VC funding — I wore every hat for 6 years: I designed products, built them, sold them to clients, trained thousands of users, managed a community, organized hackathons, consulted working professionals, and when COVID threatened to kill the company, I led the digital pivot that retained 60% of revenue. I know what it takes to survive and grow at a startup. Now, I bring that same versatility plus production Agentic AI expertise: I can architect and build the core AI product, set up the backend infrastructure, lead the engineering team, handle client demos, and train users — all in the same week. Early-stage startups don't need specialists. They need someone who can figure out whatever needs doing and execute it. That's my career in one sentence.`,

      whyThisRole: [
        "6 years at a bootstrapped startup (Lema Labs) where I designed 3 products, each driving revenue growth (30%, 40%, 60%). I understand the pressure of building products that must generate revenue to keep the company alive — no VC runway to burn.",
        "I build full-stack: from database schemas and backend APIs (FastAPI, PostgreSQL, MongoDB) through AI agent architectures (LangGraph, OpenAI) to client-facing demos and user training. At an early-stage startup, there's no one else to hand things off to.",
        "I've survived a startup lifecycle: growth phase (Lema Labs 2015-2019), crisis (COVID 2020), pivot (classroom → online), and wind-down (2021). I know what each phase demands and I don't romanticize startup life — I know the hard parts.",
        "I can recruit and lead a team as the company grows. At Constient, I went from solo consultant to leading 12 engineers in weeks. I set up code review practices, mentored junior engineers, and established technical standards. That's the founding engineer's job as the team scales.",
      ],

      evidence: {
        startupExperience: [
          "Lema Labs (6 years, bootstrapped): No VC funding — every product had to pay for itself. Designed and launched 3 revenue-generating programs (robotics, IoT, ML). Built community. Trained 3000+ customers.",
          "COVID pivot: Transformed the entire business from classroom to online in weeks. Recorded content, deployed OpenEDX LMS, migrated curriculum, pivoted revenue model. Retained 60% of annual revenue.",
          "Freelance (14 months): Essentially ran a solo AI consulting practice. Found clients, built POCs, delivered, trained — full business operation.",
          "Constient (day 1 to team lead): Entered as an outsider, proved value immediately (77% accuracy), earned trust, scaled from solo to leading 12 engineers. This is the founding engineer trajectory compressed into weeks.",
        ],
        versatility: [
          "Technical: Production agentic AI (LangGraph, LangChain, OpenAI), backend (FastAPI, Python), databases (PostgreSQL, MongoDB, Redis), data engineering (ETL, validation), ML/DL (TensorFlow, PyTorch)",
          "Product: Designed 3 products from scratch with lean methodology, wrote specs, made build/buy decisions, tracked revenue metrics",
          "Sales/BD: Built freelance client pipeline, demo'd POCs to win engagements, created courses that drove 22% sales pipeline at Informatica",
          "People: Hired/led 12 engineers, functionally led 12 trainers, trained 3000+ users, organized hackathons, built community",
          "Operations: Deployed LMS (OpenEDX), managed content production pipeline, set up digital infrastructure during COVID pivot",
        ],
        scrappiness: [
          "Built robots from ATmega microcontrollers and register-level C — I can work with any hardware or software budget constraint",
          "Self-taught IoT, ML, DL, and Agentic AI — I don't wait for training budgets or formal courses",
          "Designed the school robotics program so kids could build robots without programming — working within constraints breeds creativity",
          "Retained 60% revenue during COVID at a bootstrapped company with no funding — that's survival resourcefulness",
        ],
      },

      differentiators: [
        "I'm not a big-company engineer trying startup life for the first time. I've lived it for 6 years at a bootstrapped company. I know the difference between 'move fast and break things' (fine for features) and 'don't break this or the company dies' (revenue-critical systems).",
        "I bring production AI expertise to the founding stage. Most founding engineers at AI startups are either experienced engineers learning AI, or AI researchers learning engineering. I'm both — production agentic AI systems AND 7+ years of engineering fundamentals.",
        "I can be the 'adult in the room' technically. At Constient, I identified that the team was building without data understanding and stopped them. At a startup, someone needs the judgment to say 'we're doing this wrong, let's step back.' I have that judgment from experience, not ego.",
        "I scale myself out of jobs. At Lema Labs, I designed curricula then trained trainers to deliver them. At Constient, I architected systems then mentored the team to maintain them. I build for independence, not dependency — which is exactly what a startup needs as it grows beyond the founding team.",
      ],

      anticipatedObjections: [
        {
          concern: "Your previous startup (Lema Labs) didn't survive — how do you handle that narrative?",
          rebuttal: "Lema Labs was a bootstrapped EdTech company with no VC funding that survived for 8+ years, trained 3000+ people, and retained 60% of revenue through COVID — a global pandemic that destroyed most in-person education businesses. It closed because the physical classroom model became unviable, not because of poor execution. I'd argue surviving that long without funding and pivoting mid-crisis is a stronger signal than a VC-funded company that burned through money. I know how to build things that sustain themselves.",
        },
        {
          concern: "You're 10+ years into your career — founding engineer roles are typically for younger engineers willing to take a pay cut",
          rebuttal: "What I bring at 10+ years that a 2-year engineer doesn't: production system architecture, team leadership, crisis management, product design instincts, and client-facing skills. An early-stage startup needs someone who can architect the core product AND demo it to investors AND hire the next 5 engineers AND set up the SDLC. That requires experience. The ROI on a founding engineer who can do all of this is much higher than two junior engineers who can only code.",
        },
        {
          concern: "You might be overqualified and leave once the startup stabilizes",
          rebuttal: "I stayed at Lema Labs for 6 years — through growth, crisis, and wind-down. I'm loyalty-driven when I believe in the mission. What would make me leave is lack of impact, not lack of seniority. At a startup, the impact is obvious every day — that's what motivates me.",
        },
      ],
    },
  },

  // ============================================================================
  // RECRUITER CONCERNS & PREPARED RESPONSES
  // ============================================================================
  // These address the "red flags" a recruiter sees on first scan.
  // Prepare to address these PROACTIVELY — don't wait to be asked.
  // ============================================================================

  recruiterConcerns: {

    // --- CAREER PATTERN CONCERNS ---

    jobStability: {
      concern: "I don't see stability in your career. Multiple short stints — 6 months, 9 months, 6 months, 14 months, 6 months.",
      whatTheySee: [
        "Constient: 6 months",
        "Freelance: 14 months",
        "Amazon: 6 months",
        "Informatica: 9 months",
        "Only Lema Labs (6 years) is long-term",
      ],
      response: `Each move has a clear, legitimate reason — and they tell a story of intentional growth, not instability:

- **Lema Labs (6 years)** — I stayed through growth, crisis, and wind-down. I'm loyal when I believe in the mission.
- **Informatica (9 months)** — A bridge role while preparing for my MSc in France. I delivered 4 courses and 22% pipeline growth in that time.
- **Amazon (6 months)** — A mandatory end-of-study internship for my MSc programme, not a short job. I delivered production audit automation covering 98% of documents.
- **Freelance (14 months)** — A deliberate choice to upskill in GenAI/Agentic AI while building for clients. This was investment in my current specialization.
- **Constient (6 months)** — A contract engagement that ended when both projects were delivered to production. I created the architecture and improvement roadmap before leaving.

The pattern isn't instability — it's intentional career building. When I commit to a mission, I stay (6 years at Lema Labs). When a role has a natural endpoint (contract, internship), I deliver and move on.`,
      proactiveTip: "Address this in the cover letter or early in the interview. Don't wait for them to bring it up — frame the narrative yourself.",
    },

    employmentGap: {
      concern: "What have you been doing since Constient ended in December 2025?",
      currentStatus: "RESOLVED — No gap. Freelancing since February 2026.",
      response: `After a short break in January 2026, I resumed freelancing as an Agentic AI Solutions Engineer & Consultant. I'm currently building three substantial products:

1. **Alumni Connect** — An AI-powered alumni networking platform with LangGraph multi-agent search, Neo4j graph database, and real-time chat. Core MVP is built.
2. **LT Ride** — A digital coordination layer for shared public transport in rural India. Two connected apps (driver + passenger) with offline-first GPS tracking, WebSocket live tracking, and demand signaling. 12 features working.
3. **GLS (Generative Learning System)** — Continuation of an earlier EdTech project, now evolved into a full adaptive tutoring system with 9 learning science algorithms, 5 specialized LangGraph agents, and 1,820 vector embeddings.

I'm also deepening my skills in the Claude/Anthropic ecosystem, advanced LangGraph patterns, and new agentic AI frameworks.`,
      proactiveTip: "Lead with the products you're building, not job searching. Show you're productive and building.",
    },

    scatteredCareer: {
      concern: "Your career looks scattered — robotics, curriculum, BI, AI consulting, AI architect. What's the common thread?",
      response: `The thread is consistent: **I solve complex problems by building intelligent systems and enabling people to use them.**

- At Lema Labs: Built robotics/IoT/ML education products that enabled 3000+ people
- At Informatica: Built training systems that enabled enterprise software adoption
- At Amazon: Built data systems that enabled trade compliance automation
- As a freelancer: Built AI POCs that enabled clients to see what's possible
- At Constient: Built agentic AI systems that enabled finance and hospitality operations

The tools changed (robots → data pipelines → AI agents) because the technology landscape changed. But I've always done the same thing: enter a domain, learn it deeply, build a solution, and enable others. That's not scattered — that's versatile.`,
    },

    startupFailure: {
      concern: "Lema Labs closed down. Why should we trust you built something that worked?",
      response: `Lema Labs was a bootstrapped startup (zero VC funding) that survived for 8+ years, trained 3000+ people, and retained 60% of revenue through COVID — a global pandemic that destroyed most in-person education businesses. It closed because the physical classroom model became structurally unviable post-pandemic, not because of execution failure.

I'd argue surviving that long without external funding and pivoting mid-crisis is a stronger signal than a VC-funded company that burned through money. I know how to build things that sustain themselves — and I know what a business dying looks like, which means I make better decisions about sustainability.`,
    },

    amazonInternship: {
      concern: "Amazon was only an internship. How much weight should we give it?",
      response: `The title was "intern" because it was a mandatory end-of-study internship for my French MSc programme. The work was full-engineer scope:

- Built an audit automation system that went from <1% to 98% coverage across nearly a million records monthly
- Managed external stakeholder relationships with 5+ international customs broker data teams
- Designed data standardization schemas and validation frameworks used in production
- Improved data readiness from 38% to 86%

The output matters more than the label. Many full-time engineers at large companies don't deliver this scope in 6 months.`,
    },

    constientContract: {
      concern: "Constient was a contract. Were you a real employee or a temp?",
      response: `I joined as an external consultant to fix a failing AI project. On day one, I achieved 77% accuracy with a prompt the existing team couldn't write. Within days, I was asked to lead the project and eventually a team of 12 engineers.

The progression from outsider → project lead → team lead, earned purely through demonstrated performance, is actually a stronger story than "I was hired as lead." I proved my value under pressure, with no safety net.`,
    },

    // --- TECHNICAL DEPTH CONCERNS ---

    specialization: {
      concern: "What are you actually specialized in? Your resume lists too many technologies.",
      response: `**My specialization is Agentic AI systems** — designing and deploying production multi-agent architectures that solve complex business problems autonomously.

The breadth you see on my resume isn't scattered — it's the full stack that makes Agentic AI work in production:
- **LangGraph/LangChain** for agent orchestration (the core)
- **Python/FastAPI** for the backend that serves the agents
- **PostgreSQL/MongoDB/Redis** for the data the agents operate on
- **ML/DL foundations** for understanding what the models can and can't do
- **Data engineering** for building the pipelines that feed the agents

I'm not a jack of all trades — I'm an Agentic AI specialist with the full-stack depth to deploy production systems end-to-end, not just build demos.`,
    },

    limitedGenAIExperience: {
      concern: "Only 2 years in GenAI/Agentic AI. Others have more.",
      response: `The entire field of production Agentic AI is ~2-3 years old. Very few people have deployed more production agentic systems than I have — 2 multi-agent production systems (6-agent financial reconciliation, 10-agent hospitality assistant) with measurable business outcomes.

And unlike someone who jumped straight into GenAI, I bring 7+ years of Python engineering, ML fundamentals, and data engineering that most GenAI-only engineers lack. When an agent fails, I can debug at the prompt level, the chain level, the API level, the database level, or the data quality level — because I've worked at every layer.`,
    },

    mlNotProduction: {
      concern: "Your ML/DL experience seems mostly academic or portfolio work. Have you deployed ML in production?",
      response: `Honest answer: my classical ML/DL work (emotion detection, disease prediction, RL agents) was primarily teaching, research, and portfolio projects — not production model serving at scale.

My production AI experience is through the Agentic AI lens: LangGraph agents, LLM-powered multi-agent systems, RAG pipelines — these are in production serving real enterprise clients. This is actually aligned with where the market is going: the demand has shifted from training custom ML models to orchestrating LLM-based agent systems. My production experience is in the right place.`,
    },

    datedTechExperience: {
      concern: "Your robotics and IoT experience is from 2015-2021. Is it still relevant?",
      response: `For pure AI roles, the robotics/IoT experience is relevant as foundational systems thinking — register-level programming, real-time constraints, sensor integration, and hardware-software boundaries. This makes me a better AI systems architect because I understand systems at every layer, from silicon to cloud.

For roles involving edge AI, IoT-AI integration, or robotics companies, it's directly relevant. But I don't lead with it for AI engineering roles — Agentic AI is my current depth.`,
    },

    // --- FIT & MOTIVATION ---

    whyLeftConstient: {
      concern: "Why did you leave Constient?",
      response: `It was a contract engagement. I delivered both projects (AR reconciliation and Virtual Waiter) to production, created the architecture and improvement roadmap for phased rollout, and the engagement concluded naturally. There wasn't another project that needed my skillset at that time. We parted on good terms.`,
    },

    visaSponsorship: {
      concern: "Do you need visa sponsorship?",
      currentStatus: "Requires employer sponsorship for work authorization",
      locationFlexibility: "Global — open to roles in EU, UK, or remote worldwide. Willing to relocate.",
      response: `I do require visa sponsorship. I'm flexible on location — open to France, broader EU, UK, or remote-global roles. I'm willing to relocate for the right opportunity. My MSc from SKEMA Business School (France) and prior work in Luxembourg give me familiarity with European work environments.`,
      note: "Many EU countries have talent visa programs for AI/tech professionals. Research country-specific options (French Talent Passport, Dutch Highly Skilled Migrant, German Blue Card, UK Global Talent Visa) as part of job search strategy.",
    },

    managerVsIC: {
      concern: "Do you want to manage or code?",
      preference: "Architect + lead (hybrid)",
      response: `I want to architect solutions and lead teams — not pure people management, but not pure individual contribution either. My ideal role is designing the system architecture, making technical decisions, leading a team of engineers through execution, and staying close enough to the code to review PRs and unblock technical problems.

At Constient, this is exactly what I did: I architected both systems, led 12 engineers, ran code reviews, mentored the team — but also contributed directly to the agent logic and prompt engineering. That hybrid of architecture + leadership + hands-on contribution is where I'm most effective.`,
    },

    fiveYearPlan: {
      concern: "Where do you see yourself in 5 years?",
      responseByRole: {
        architect: "Leading an AI platform team at a company where Agentic AI is core to the product. Shaping the technical direction and building the team that delivers it.",
        engineer: "Having built multiple production AI systems and evolved into a principal/staff engineer role where I define the technical standards for AI engineering.",
        consulting: "Running an AI practice — either within a consultancy or independently — helping enterprises adopt Agentic AI at scale.",
        productManager: "Owning an AI product line end-to-end, from strategy through execution, with a team that ships products I'm proud of.",
        startup: "Having built the core AI product and grown the team from founding stage to a real engineering organization. Ideally post-Series A, with the product finding market fit.",
      },
    },

    salaryExpectations: {
      concern: "What are your salary expectations?",
      strategy: "Research market rates for each target role in target geography. Do NOT anchor to Indian salary history. Anchor to market rate for the role + experience level. Use levels.fyi, Glassdoor, LinkedIn Salary Insights for data.",
      response: `I'm focused on finding the right role and company fit. My expectations are aligned with market rates for [role] in [location] at my experience level. I'm happy to discuss specifics once we've established mutual interest and I understand the full compensation structure.`,
      note: "Have a specific range ready if pressed, based on market research. Never give a number first if you can avoid it.",
    },
  },

  // ============================================================================
  // STRENGTHS & WEAKNESSES
  // ============================================================================

  strengthsAndWeaknesses: {
    strengths: [
      {
        strength: "Rapid domain mastery",
        evidence: "Robotics → IoT → ML → customs compliance → fintech → hospitality → Agentic AI. Every role required learning a new domain from zero. At Amazon, I went from zero customs knowledge to managing external broker relationships in weeks.",
        whyItMatters: "In a fast-moving field like AI, the ability to learn new domains and technologies quickly is more valuable than deep expertise in any single area that might become obsolete.",
      },
      {
        strength: "Building things that generate measurable business outcomes",
        evidence: "Every product I've built has a traceable business metric: 30%/40%/60% revenue growth (Lema Labs), 22% pipeline increase (Informatica), 38%→86% data readiness + <1%→98% audit coverage (Amazon), 98% reconciliation accuracy + 10x close time reduction (Constient).",
        whyItMatters: "I don't build technology for technology's sake. I build for impact. This means I naturally prioritize the right features, cut scope intelligently, and measure success in business terms.",
      },
      {
        strength: "Communicating complex technology to any audience",
        evidence: "Trained 3000+ people across school students, university students, working professionals, and global trainers. Guest lecturer at universities. Conducted seminars on LLMs. Can explain AI to a CTO and a CFO in the same meeting.",
        whyItMatters: "In architect, consulting, pre-sales, and PM roles, the ability to translate between technical and business stakeholders is often the bottleneck. I remove that bottleneck.",
      },
      {
        strength: "Rescuing failing situations under pressure",
        evidence: "Constient: took over a failing project, got 77% accuracy on day 1, rebuilt the architecture, achieved 98%. Lema Labs: led COVID pivot from classroom to online in weeks, retained 60% revenue. Amazon: transformed manual 1% audit process into 98% automated coverage.",
        whyItMatters: "Companies don't always need someone to build greenfield projects. Often the most valuable person is the one who can diagnose what's broken and fix it fast.",
      },
      {
        strength: "Full-stack versatility with Agentic AI specialization",
        evidence: "Can architect the system, build the backend, design the data pipeline, write the agent logic, create the API, set up the database, demo to clients, lead the team, and train users. Not equally deep in all areas — but capable across the entire stack.",
        whyItMatters: "Especially valuable in startups, small teams, and consulting where you can't have a specialist for every layer.",
      },
    ],

    weaknesses: [
      {
        weakness: "Limited production experience at large scale (millions of concurrent users)",
        honestContext: "My production systems serve individual enterprise clients (property management companies, restaurants), not millions of concurrent users. I haven't dealt with the scale challenges of a Netflix, Uber, or large SaaS platform.",
        mitigation: "The AI systems I build are architecturally sound (state machines, checkpointing, async processing), and I understand distributed systems concepts. But I'd be honest about needing to learn large-scale operational practices (observability at scale, deployment strategies, SLA management) at a company that operates at that level.",
        howToFrame: "I haven't operated at internet-scale yet, but my production systems handle complex enterprise workloads (million-record audit at Amazon, multi-tenant financial reconciliation at Constient). I'm eager to learn the operational side of large-scale deployment.",
      },
      {
        weakness: "No deep classical ML production deployment (model training, serving, MLOps)",
        honestContext: "My ML/DL work was teaching and portfolio. Production AI experience is through LLM/agent orchestration, not custom model training and serving at scale.",
        mitigation: "The market has shifted toward LLM-based systems anyway. But for roles that require MLOps, model training pipelines, or custom model deployment, I'd need to grow into that area.",
        howToFrame: "My production AI experience is in the modern paradigm — orchestrating LLM-based agent systems, not training custom models. For roles that need both, I bring the agent orchestration side and would grow into the MLOps side.",
      },
      {
        weakness: "No multi-year formal people management track record",
        honestContext: "Constient was 6 months of direct team leadership (12 engineers). Informatica was functional leadership (12 trainers, not direct reports). Lema Labs had informal leadership. No role with 2+ years of managing a team with performance reviews, hiring, firing, career development responsibilities.",
        mitigation: "I've led teams effectively in every role. But for VP Engineering or Head of AI roles that require demonstrated multi-year people management, I'd need to acknowledge this is a growth area.",
        howToFrame: "I've led teams of 12 engineers and coordinated global trainers, but I'd be transparent that I'm growing into formal multi-year management. What I bring is the technical depth and team leadership instincts — the formal management practices are learnable.",
      },
      {
        weakness: "Requires visa sponsorship",
        honestContext: "This limits the pool of companies willing to hire, especially in competitive markets. Some companies have blanket policies against sponsorship.",
        mitigation: "Open to global relocation, remote roles, and countries with favorable AI talent visa programs (French Talent Passport, Dutch HSM, German Blue Card, UK Global Talent). Can highlight scarcity of production Agentic AI experience as justification for sponsorship investment.",
        howToFrame: "I require visa sponsorship, but I'm fully flexible on location — EU, UK, or globally remote. I bring a rare combination of production Agentic AI experience and cross-cultural team leadership that's scarce in the market.",
      },
    ],
  },

  // ============================================================================
  // BEHAVIORAL INTERVIEW STORIES (STAR FORMAT)
  // ============================================================================
  // Pre-prepared stories mapped to common behavioral questions.
  // Each story can be reused across multiple question types.
  // ============================================================================

  behavioralStories: {

    rescuingAFailingProject: {
      question: "Tell me about a time you had to turn around a failing project / Take ownership of something broken.",
      situation: "At Constient, I was brought in as a freelance consultant to help with a finance reconciliation project that the existing team couldn't get working. The team had built an AI system that couldn't do the cash reconciliation. The client had already given negative feedback.",
      task: "Figure out what was wrong, prove that AI could solve this problem, and either fix it or recommend a different approach.",
      action: "On my first day, I sat down, analyzed the problem, and wrote a single prompt that achieved ~77% reconciliation accuracy — something the team hadn't been able to do at all. I then identified the root cause: the team had started building without understanding the data or the actual reconciliation process. I convinced the leadership that we needed to step back, analyze the data sources properly, understand the financial workflow, and then rebuild the architecture from scratch. Over the following weeks, I designed a 6-agent LangGraph system, connected with other freelancers they'd hired, and led the team to build it.",
      result: "The system achieved 98% production reconciliation accuracy, reduced close time from 2+ weeks to 2 days, and I was promoted from external consultant to leading a team of 12 engineers. The client went from giving negative feedback to requesting a second project.",
      usableFor: ["Tell me about a failure you turned around", "Describe a time you showed leadership", "Tell me about a time you influenced without authority", "Describe a difficult technical problem you solved"],
    },

    managingCrisisUnderPressure: {
      question: "Tell me about a time you managed a crisis / Made decisions under extreme uncertainty.",
      situation: "In March 2020, COVID-19 hit and lockdowns began. Lema Labs was a purely classroom-based EdTech startup with zero VC funding — our entire revenue depended on in-person training. The business was facing existential risk within weeks.",
      task: "Transform the business from classroom to online before the cash reserves ran out, while the team was in shock and there was no playbook for a global pandemic.",
      action: "I took charge of the digital transformation. I started recording and editing video content immediately. I evaluated LMS platforms, chose OpenEDX (open-source, customizable), and deployed it as Lema Labs' online platform. I migrated the curriculum, starting with ML courses (which worked well online — screen sharing, debugging, no hardware needed) rather than robotics/IoT (which required physical components). I also had to make the hard call to deprioritize hardware-based programs that wouldn't generate online revenue.",
      result: "We retained approximately 60% of annual revenue during COVID. For a bootstrapped company with no funding cushion, this kept the business alive for another year. The company eventually closed in September 2021 because the physical model remained unviable long-term, but the digital pivot bought crucial time.",
      usableFor: ["Tell me about a crisis you managed", "Describe a time you made a tough decision", "Tell me about a time you led change", "How do you handle ambiguity?"],
    },

    learningNewDomainFast: {
      question: "Tell me about a time you had to learn something completely new under pressure.",
      situation: "When I joined Amazon's Global Trade Services team in Luxembourg, I had zero knowledge of customs compliance, import/export regulations, or trade finance. My first assignment was to understand SAV (Single Agreement Document) customs filings and then design data standardization schemas for 5+ external customs broker partners.",
      task: "Go from zero domain knowledge to being able to sit in meetings with external broker data teams and design data format agreements — within weeks.",
      action: "I immersed myself in the domain. I read the SAV document specification end-to-end, understood every field and code. I then got on calls with external customs broker data teams — learning not just what data they had, but how their internal systems worked and where they sourced it from. I asked questions, mapped their capabilities against Amazon's requirements, and identified the gaps. Within weeks, I was leading the data format negotiations myself.",
      result: "I successfully designed standardized data schemas, negotiated with brokers to increase their data provision from ~35-40 columns to ~80 columns (out of 120 needed), and improved overall data readiness from 38% to 86%. This was done while simultaneously learning the domain — the learning and the delivery happened in parallel.",
      usableFor: ["How do you handle steep learning curves?", "Tell me about a time you worked outside your expertise", "Describe a time you worked with external stakeholders"],
    },

    pushingBackOnTheTeam: {
      question: "Tell me about a time you disagreed with your team / Had a conflict at work.",
      situation: "When I joined Constient, after my first successful day (77% accuracy), I reviewed what the existing team had built. I realized they had started building the reconciliation system without doing any data analysis or understanding the actual financial workflow. They were coding agents without knowing what the data looked like.",
      task: "Convince the team and leadership to stop building and go back to fundamentals — which is a hard message when the client is already waiting for results.",
      action: "After the client demo where I demonstrated the improved accuracy, I spoke with leadership and made my case: 'We need to step back. The team started building without understanding the data. We don't know what we're working toward.' I proposed a reset: first analyze the data (tenant master data, bank transactions, payment patterns, open ledgers), understand the actual reconciliation process, and then rebuild with a proper architecture. This wasn't what anyone wanted to hear — they wanted to ship faster.",
      result: "Leadership agreed. We took the step back, analyzed everything properly, and then built the right system. The result was 98% accuracy and a 10x improvement in close time — far better than what the patched-together approach would have achieved. The lesson: sometimes slowing down is the fastest way forward.",
      usableFor: ["Tell me about a conflict at work", "Describe a time you pushed back", "Tell me about a time your approach differed from the team's", "How do you handle disagreement?"],
    },

    buildingAndScalingAProduct: {
      question: "Tell me about a product you built from scratch / Describe your product development process.",
      situation: "In 2018 at Lema Labs, Machine Learning was becoming a major industry trend. Working professionals and university students were asking for ML training. The company had no ML offering and no in-house ML expertise.",
      task: "Learn ML from scratch, design a comprehensive curriculum, and launch it as a revenue-generating product — in a bootstrapped company where every new product had to pay for itself.",
      action: "I partnered with a colleague who had a sister company doing deep learning solutions. We spent ~3 months doing intensive self-study: Andrew Ng's Coursera course, statistics, data preprocessing, supervised/unsupervised learning, the mathematics behind every algorithm. Then I designed a 13-week curriculum covering the full ML pipeline — from data preprocessing through recommendation systems and SVMs — with both mathematical foundations and hands-on coding. We used lean methodology: developed in 1-2 months, piloted with a batch, iterated based on feedback, then scaled.",
      result: "The ML course became Lema Labs' flagship product and contributed to a 60% increase in company revenue. It attracted working professionals (higher revenue per student) and positioned the company as a serious ML training provider. I continued teaching and improving the course for 3 years, and also began consulting 20-30+ working professionals on applying ML to their real industry projects.",
      usableFor: ["Tell me about a product you built", "Describe your product development process", "How do you evaluate new opportunities?", "Tell me about a time you created something from nothing"],
    },

    enablingOthersToSucceed: {
      question: "Tell me about a time you mentored or developed others / How do you scale your impact?",
      situation: "At Informatica, I was creating courses for complex enterprise products (PowerCenter, IICS, MDM tools). The courses needed to be delivered globally by 12 trainers across different regions — I couldn't deliver every session myself.",
      task: "Create courses good enough that trainers who hadn't built them could deliver them effectively, and train those trainers to a standard where client satisfaction remained high.",
      action: "I designed each course with this scaling problem in mind: extremely detailed lab manuals with step-by-step instructions and screenshots, comprehensive PPT decks that told a story (not just bullet points), and e-learning modules on the LMS as backup reference. Then I ran dedicated train-the-trainer sessions for the 12 global trainers, walking them through the course content, anticipated student questions, and common failure points. I didn't just teach them the material — I taught them how to teach it.",
      result: "The 12 trainers successfully delivered courses across the globe. 4 instructor-led courses were created in ~9 months, contributing to a 22% increase in the sales pipeline. The train-the-trainer model meant my work scaled 12x without me being present for every delivery.",
      usableFor: ["How do you mentor others?", "How do you scale yourself?", "Tell me about your leadership style", "Describe a time you had to work through others"],
    },
  },

  // ============================================================================
  // SITE DISPLAY METADATA (used by portfolio-data.ts adapter)
  // ============================================================================
  siteDisplay: {
    navigation: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ],
    featuredProjects: [
      "AI-Powered Cash Reconciliation (Accounts Receivable Ledger)",
      "Virtual Waiter (Hospitality AI Assistant)",
      "Personalized Learning Assistant (Generative Learning Platform)",
      "Research & Innovation Idea Generator",
      "Import/Export Data Standardization",
      "Customs Audit Automation Dashboard",
    ],
    projectCategories: {
      "AI-Powered Cash Reconciliation (Accounts Receivable Ledger)": "Agentic AI",
      "Cash Reconciliation for Hospitality Chain": "Agentic AI",
      "Virtual Waiter (Hospitality AI Assistant)": "Agentic AI",
      "Personalized Learning Assistant (Generative Learning Platform)": "EdTech AI",
      "Product Description Generator": "Generative AI",
      "Research & Innovation Idea Generator": "Generative AI",
      "GenAI Project Suite": "Generative AI / Agentic AI",
      "Deep Learning Projects Collection": "Machine Learning",
      "Import/Export Data Standardization": "Data Engineering",
      "Customs Audit Automation Dashboard": "Data Engineering",
      "Universal Data Validation Framework (Cross-Broker Standardization)": "Data Engineering",
    } as Record<string, string>,
  },
}
