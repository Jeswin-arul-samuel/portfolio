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
 * Last updated: 2026-03-11
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
    totalPeopleTrained: "3000+",
    bio: `AI-first technologist with a decade of experience driving innovation at the intersection of artificial intelligence, data, IoT, and robotics. Journey spans startups, enterprise tech, and academia — all connected by one mission: using technology to solve real-world problems and empower people through systems, tools, and education. Currently architecting Agentic AI systems and Human-in-the-Loop pipelines. Successfully deployed production systems achieving 98% accuracy in financial reconciliation and built AI assistants integrated with real-world business operations.`,
    seekingRoles: [
      "AI Solutions Architect",
      "AI Engineering Lead",
      "Generative AI Engineer",
      "Technical Product Manager (AI)",
      "AI Technology Consultant",
      "VP Engineering (AI-focused)",
    ],
    targetCompanyTypes: [
      "Early-stage AI startups (hands-on technical leadership)",
      "Enterprise tech companies (large-scale system architecture)",
      "Consultancies (helping clients adopt Agentic AI)",
      "Scale-ups (building AI product capabilities)",
    ],
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
        "Gemini 2.0",
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
        "Team Leadership (managed 12+ globally)",
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
  // WORK EXPERIENCE - DETAILED
  // ============================================================================
  experience: [
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

      leadershipResponsibilities: [
        "Led a team of engineers through full SDLC with code reviews and mentorship",
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

          howYouJoined: "The existing team couldn't get the LLM to perform reconciliation. On the first day, wrote a prompt achieving ~77% accuracy. Over subsequent days, built a LangGraph agent achieving 100% reconciliation accuracy. Identified that the team had started building without data understanding, took a step back to properly analyze data and the actual reconciliation process before rebuilding.",

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
            reconciliationAccuracy: "98%",
            glPostingAccuracy: "100% (zero financial errors in matched transactions)",
            tenantIdentification: "83% autonomous from sparse bank data",
            manualDataEntryReduction: "95%",
            processingTime: "5-10 minutes (vs. 2-3 weeks manual close)",
            timeToClose: "Reduced from 2+ weeks to 2 days (10x improvement)",
            feedbackDataGenerated: "~150 training data points/month",
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
                achievement: "80%+ autonomous customer identification without login",
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

          metrics: {
            customerRecognition: "80%+ autonomous identification without login",
            autonomy: "End-to-end customer journeys handled without human intervention",
            recommendations: "Drives incremental sales through intelligent suggestions",
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
      role: "Generative AI Engineer & Researcher",
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
        trainersManaged: "12 trainers globally",
        clientsServed: "Interfaced with 15+ clients weekly",
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
        "Managed 12 trainers globally at Informatica",
        "Led engineering team through full SDLC at Constient",
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
  // WHAT I BRING TO THE TABLE — PROVEN TRAITS
  // ============================================================================
  // These narrative trait sections were crafted for the unconventional resume.
  // Each trait follows the format: creative header → one-line hook → short story → hard metric.
  // No company names — kept generic so they work across all resume variants.
  traits: [
    {
      name: "The Firefighter",
      hook: "I walk into broken situations and make them work.",
      narrative: "When an enterprise AI project was stalling and the client was losing confidence, I was brought in. A fresh perspective and a data-first approach turned things around — within a day, the path forward was clear. Ten weeks later: a production system with 98% accuracy, cutting monthly close from 2+ weeks to 2 days. When a pandemic shut down the bootstrapped startup I worked at — a classroom-only business with zero VC funding — I pivoted the entire company online and retained 60% of annual revenue.",
      evidence: ["Constient — rescued stalling AI project, shipped 98% accuracy in 10 weeks", "Lema Labs — COVID pivot, retained 60% revenue"],
    },
    {
      name: "The Data Detective",
      hook: "I diagnose before I prescribe. Every solution starts with the data.",
      narrative: "The stalling project I inherited had one core issue — the solution was built before the data was understood. I stepped back, studied the actual business process, mapped the data sources, analyzed the patterns, and designed the system around what the data was actually telling me. In another role, I got on calls with international partner data teams, mapped what data they had versus what was needed, and built a validation framework that took data readiness from 38% to 86%.",
      evidence: ["Constient — data-first approach unlocked 98% reconciliation accuracy", "Amazon — data readiness 38% → 86% through data mapping and validation"],
    },
    {
      name: "The Bridge",
      hook: "The tech means nothing if the business doesn't get it. I make sure they do.",
      narrative: "I don't just build systems — I sit with finance controllers, restaurant operators, and compliance teams to understand their problems, then come back with solutions they trust. I've been the single point between engineering, business stakeholders, and clients. I've negotiated data standards with external partners across international borders. I've presented to boardrooms and debugged code in the same week.",
      evidence: ["Constient — single point between engineering, finance, and client", "Amazon — negotiated data standards with EU/UK broker partners"],
    },
    {
      name: "The Tech Enabler",
      hook: "I learn fast, then bring others along with me.",
      narrative: "I've gone from soldering line-follower robots to deploying production multi-agent AI systems — all self-taught. But I don't hoard knowledge. I've trained 3000+ professionals across robotics, IoT, ML, and AI. I co-founded a maker community whose members won national hackathons and launched 2 startups. In one role, I mastered 8 enterprise data products in 9 months and trained a global team of 12 trainers to deliver them.",
      evidence: ["Lema Labs — trained 3000+, community members won hackathons and launched startups", "Informatica — mastered 8 products in 9 months, trained 12 global trainers"],
    },
    {
      name: "The Revenue Builder",
      hook: "Everything I build is designed to make the business win.",
      narrative: "Every training program I designed at a startup drove revenue growth — school robotics (+30%), IoT workshops (+40%), and a flagship ML course that became the company's primary revenue stream (+60%). At an enterprise software company, 4 courses I designed increased the sales pipeline by 22%. I don't build tech for tech's sake — I build things that sell, scale, and sustain.",
      evidence: ["Lema Labs — 3 programs driving 30-60% revenue growth each", "Informatica — 4 courses increased sales pipeline by 22%"],
    },
    {
      name: "The Loyal Craftsman",
      hook: "I stay where I'm creating value.",
      narrative: "Six years at a small, bootstrapped startup — not because I couldn't leave, but because I was building something meaningful, surrounded by curious and intellectual minds that kept me challenged. I saw students become engineers, professionals land promotions, and community members start companies. When the work matters, the people inspire, and the impact is real, I'm all in.",
      evidence: ["Lema Labs — 6 years at bootstrapped startup, chose impact over brand names"],
    },
  ],

  // ============================================================================
  // POSITIONING STATEMENTS (ready for different resume types)
  // ============================================================================
  positioning: {
    elevatorPitch: "AI Solutions Architect with 10+ years building intelligent systems. Recently deployed Agentic AI achieving 98% accuracy in financial reconciliation and 80% autonomous customer recognition. Expert in LangGraph, GPT-4o, and production AI systems. Ex-Amazon BI Engineer. Trained 3000+ professionals.",

    summaries: {
      aiEngineer: "AI Solutions Architect with 10+ years of experience spanning Agentic AI, data engineering, and EdTech. Architected production multi-agent systems using LangGraph and OpenAI — including a financial reconciliation system achieving 98% accuracy and a hospitality AI assistant handling end-to-end customer operations autonomously. Ex-Amazon BI Engineer. Strong backend engineering skills (FastAPI, PostgreSQL, MongoDB) with hands-on ML/DL expertise.",

      solutionsArchitect: "AI Solutions Architect bridging business goals with cutting-edge AI. Track record of identifying complex business problems and architecting autonomous AI solutions — from financial reconciliation (2-week process reduced to 2 days) to conversational AI for hospitality operations. Experience spans Amazon (trade compliance data systems), enterprise software (Informatica), and startup leadership (6 years building and scaling EdTech programs).",

      technicalLead: "Technical leader with 10+ years shipping production systems across AI, data, and IoT. Led engineering teams through full SDLC at Constient, managed 12 global trainers at Informatica, and spearheaded digital transformation during COVID at Lema Labs. Trained 3000+ professionals. Proven ability to rescue failing projects (took over struggling reconciliation project, achieved 98% accuracy), build teams, and drive revenue through technical excellence.",

      productManager: "AI-focused product thinker with 10+ years turning technology into business impact. Designed 3 EdTech programs that drove 30-60% revenue increases. Built AI products serving real estate finance and hospitality operations. Agile PM certified (APMG). Experience in stakeholder management across Amazon (external broker negotiations), enterprise clients (Constient), and internal teams. MSc AI + PG Diploma in International Management from SKEMA Paris.",

      dataEngineer: "Data engineer and BI professional with experience building data quality systems at Amazon (customs audit automation: <1% to 98% coverage, data readiness: 38% to 86%). Skilled in SQL, Python, ETL pipelines, AWS QuickSight, data validation frameworks, and JSON schema design. Also built AI-powered data extraction pipelines using Textract and LLM parsing for financial document processing at Constient.",

      consultant: "AI Technology Consultant with 10+ years across startups, enterprise tech, and academia. Recently architected Agentic AI systems for commercial real estate finance (98% reconciliation accuracy) and hospitality operations (autonomous virtual waiter). Previously built data quality and audit automation systems at Amazon Luxembourg. Trained 3000+ professionals in AI/ML. Agile PM certified. Dual master's from SKEMA Paris (AI + International Management).",
    },
  },

  // ============================================================================
  // SITE DISPLAY METADATA
  // ============================================================================
  siteDisplay: {
    navigation: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ],

    /** Which projects should be featured prominently on the site */
    featuredProjects: [
      "AI-Powered Cash Reconciliation (Accounts Receivable Ledger)",
      "Virtual Waiter (Hospitality AI Assistant)",
      "Personalized Learning Assistant (Generative Learning Platform)",
      "Research & Innovation Idea Generator",
      "Import/Export Data Standardization",
      "Customs Audit Automation Dashboard",
    ],

    /** Category labels for projects on the site */
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
