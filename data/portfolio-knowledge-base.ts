/**
 * Comprehensive Portfolio Knowledge Base
 *
 * This file contains complete, detailed information about Jeswin Arul Samuel's
 * professional profile, skills, experience, projects, and achievements.
 *
 * Purpose: Provide rich context for chatbot intelligence to understand and answer
 * user queries about Jeswin's background, expertise, projects, and capabilities.
 *
 * This is the "long-form" version of information that appears on the portfolio
 * in structured sections. Use this for in-depth knowledge and reasoning.
 */

export const portfolioKnowledgeBase = {
  // ============================================================================
  // PERSONAL PROFILE
  // ============================================================================
  personalProfile: {
    name: "Jeswin Arul Samuel",
    title: "AI Solutions Architect",
    location: "Paris, France",
    email: "jeswin.arul.samuel@gmail.com",
    phones: ["+91 9566070120", "+33 766516906"],
    linkedIn: "https://www.linkedin.com/in/jeswinarul",
    github: "https://github.com/Jeswin-arul-samuel",

    tagline: "Building intelligent systems that bridge business goals with cutting-edge AI",

    bio: `I'm an AI-first technologist with a decade of experience driving innovation at the intersection of artificial intelligence, data, IoT, and robotics. My journey spans startups, enterprise tech, and academia — all connected by one mission: using technology to solve real-world problems and empower people through systems, tools, and education.

Currently, I architect Agentic AI systems and Human-in-the-Loop pipelines using LangGraph, OpenAI, and FastAPI. I've successfully deployed production systems achieving 98% accuracy in financial reconciliation and built AI assistants integrated with real-world business operations.

I'm seeking opportunities in AI Engineering, Solutions Architecture, or hybrid roles that connect technology with business impact.`,

    careerHighlights: [
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

    seekingRoles: [
      "AI Engineering roles",
      "Solutions Architecture",
      "Hybrid roles connecting technology with business impact",
      "Technical Product Management",
      "AI Technology Consultant"
    ]
  },

  // ============================================================================
  // TECHNICAL EXPERTISE
  // ============================================================================
  technicalExpertise: {
    overview: "Full-stack AI expertise spanning Generative AI, Machine Learning, Backend Engineering, Data Architecture, and Cloud Infrastructure.",

    specializations: [
      {
        area: "Agentic AI & LLM Systems",
        description: "Architecting and deploying production Agentic AI systems using modern frameworks",
        keySkills: ["LangGraph", "LangChain", "ReAct Agents", "Multi-agent Orchestration", "State Machines"],
        experiences: [
          "AI-Powered Accounts Receivable Ledger Reconciliation (98% accuracy)",
          "Virtual Waiter conversational AI (80%+ customer recognition)",
          "Personalized Learning Assistant",
          "Research Idea Generator"
        ]
      },
      {
        area: "Generative AI & LLMs",
        description: "Expertise with cutting-edge language models and prompt engineering",
        keySkills: ["OpenAI", "Claude 3.5 Sonnet", "Gemini 2.0", "RAG Pipelines", "Prompt Engineering", "Fine-tuning (LoRA/QLoRA)"],
        frameworks: ["LangChain", "LangGraph", "LangSmith", "CrewAI", "AutoGen"],
        applications: "Conversational AI, question-answering, content generation, research synthesis"
      },
      {
        area: "Backend & API Engineering",
        description: "Building scalable, production-ready backend systems",
        primaryLanguage: "Python",
        frameworks: ["FastAPI", "Django", "Flask"],
        patterns: ["REST APIs", "Async Programming", "Microservices"],
        orm: "SQLAlchemy, Pydantic V2",
        dashboards: ["Streamlit", "Gradio"]
      },
      {
        area: "Machine Learning & Deep Learning",
        description: "Classical and deep learning model development and deployment",
        deepLearning: ["TensorFlow", "PyTorch", "Keras", "CNN", "RNN", "LSTM", "Transfer Learning"],
        computerVision: ["OpenCV", "Emotion Detection (76% accuracy on AffectNet)", "Disease Detection", "Crop Disease Detection on Drones"],
        nlp: ["NLP", "Hugging Face"],
        reinforcement: ["DQN", "DCQN", "A2C", "Game Environments"],
        classicalML: ["Scikit-Learn", "Pandas", "NumPy"]
      },
      {
        area: "Data Engineering & Databases",
        description: "Building data pipelines, ETL processes, and data architecture",
        relational: ["PostgreSQL", "SQL"],
        noSQL: ["MongoDB", "Redis"],
        vectorDatabases: ["Pinecone", "ChromaDB"],
        cloudServices: ["AWS (Lambda, S3, Textract)", "Data Validation"],
        dataPipeline: ["ETL/ELT", "Data Quality Gates", "JSON Schemas", "Pydantic Validation"],
        analytics: ["QuickSight", "Power BI", "Hadoop/Hive"]
      },
      {
        area: "Leadership & Business Skills",
        description: "People management, product thinking, and business development",
        certifications: ["Agile PM (APMG Certified)"],
        skills: ["Team Leadership", "Stakeholder Management", "Technical Training", "Curriculum Development", "Product Management", "Business Development"],
        peopleManaged: "Managed team of 12+ engineers and trainers globally",
        peopleTrained: "3000+ professionals in Data Science, Analytics, AI"
      }
    ],

    fullSkillMatrix: {
      "Generative AI & LLMs": [
        "OpenAI", "Claude 3.5 Sonnet", "Gemini 2.0",
        "LangChain", "LangGraph", "LangSmith",
        "RAG Pipelines", "Vector Embeddings", "Prompt Engineering",
        "Fine-tuning (LoRA/QLoRA)", "CrewAI", "AutoGen"
      ],
      "Backend & APIs": [
        "Python", "FastAPI", "Django", "Flask",
        "SQLAlchemy", "Pydantic V2", "REST APIs",
        "Async Programming", "Streamlit", "Gradio"
      ],
      "Machine Learning": [
        "TensorFlow", "PyTorch", "Keras", "Scikit-Learn",
        "CNN/RNN/LSTM", "Transfer Learning",
        "NLP", "Computer Vision", "OpenCV", "Hugging Face"
      ],
      "Data & Cloud": [
        "PostgreSQL", "MongoDB", "Redis",
        "Pinecone", "ChromaDB",
        "AWS (Lambda, S3, Textract)", "Docker",
        "Hadoop/Hive", "QuickSight", "Power BI"
      ],
      "Leadership & Business": [
        "Agile PM (APMG Certified)", "Team Leadership",
        "Stakeholder Management", "Technical Training",
        "Curriculum Development", "Product Management",
        "Business Development"
      ]
    }
  },

  // ============================================================================
  // PROFESSIONAL EXPERIENCE
  // ============================================================================
  experienceHistory: [
    {
      organization: "Constient Global Solutions",
      role: "AI Solutions Architect / Lead AI Engineer",
      period: { start: "July 2025", end: "Present", duration: "Current" },
      location: "Remote",
      status: "Current Role",
      domains: ["Hospitality", "Finance", "Real Estate"],

      keyAchievements: [
        "Leading team of engineers through full SDLC with code reviews and mentorship",
        "Architecting and building scalable FastAPI engine handling omnichannel communication and payments",
        "Designing and deploying production Agentic AI systems with 98% financial accuracy",
        "Implementing multi-agent architectures using LangGraph for autonomous task execution"
      ],

      projectsOwned: [
        {
          name: "AI-Powered Accounts Receivable Ledger Reconciliation",
          domain: "Finance",
          status: "Production",
          metrics: {
            accuracy: "98% reconciliation accuracy, 100% GL posting accuracy",
            efficiency: "2-3 weeks → 2 days close time",
            automation: "95% reduction in manual data entry"
          }
        },
        {
          name: "Virtual Waiter",
          domain: "Hospitality",
          status: "Production",
          metrics: {
            customerRecognition: "80%+ autonomous customer identification",
            autonomy: "End-to-end customer journeys handled without human intervention",
            scalability: "Multi-property capable"
          }
        }
      ],

      technologiesUsed: [
        "OpenAI", "LangGraph", "LangChain", "FastAPI",
        "PostgreSQL", "MongoDB", "Redis", "Pydantic V2",
        "Amazon Textract", "PetPooja POS"
      ],

      impactStatement: "Architecting enterprise-grade Agentic AI systems that solve complex business problems in finance and hospitality. Primary focus: autonomous agents with human-in-the-loop validation for high-stakes decisions."
    },

    {
      organization: "Independent AI Consultant",
      role: "Generative AI Engineer & Researcher",
      period: { start: "Apr 2024", end: "May 2025", duration: "1 year 2 months" },
      location: "Remote",
      status: "Past",
      domains: ["EdTech", "Research & Innovation"],

      keyAchievements: [
        "Trained professionals in Data Science, Analytics, and AI",
        "Conducted deep research into Agentic AI frameworks and LLM architectures",
        "Built production AI systems for EdTech and Research domains",
        "Published thought leadership on Agentic AI implementation patterns"
      ],

      projectsOwned: [
        {
          name: "Personalized Learning Assistant",
          type: "EdTech AI",
          features: [
            "Conversational profiling of student capabilities, mindset, personality",
            "Adaptive content delivery based on grasp level",
            "Stealth testing and standardized quizzes",
            "Subject-specific frameworks for math, physics, chemistry"
          ]
        },
        {
          name: "Research Idea Generator",
          type: "Research & Innovation AI",
          features: [
            "Integration with Google Patents and academic databases",
            "Deep research synthesis on existing implementations",
            "LLM-generated novel recommendations for research/products"
          ]
        }
      ],

      technologiesUsed: [
        "LangChain", "OpenAI", "RAG", "Vector Embeddings",
        "Python", "Streamlit"
      ],

      impactStatement: "Pioneering work in Agentic AI implementation. Demonstrated how autonomous agents can handle complex, multi-step processes in education and research domains."
    },

    {
      organization: "Amazon",
      role: "Business Intelligence Engineer",
      period: { start: "Jul 2023", end: "Dec 2023", duration: "6 months" },
      location: "Luxembourg",
      status: "Past",
      domains: ["Logistics", "Trade Compliance"],

      keyAchievements: [
        "Collaborated with EU trade compliance team on regulatory data flows",
        "Designed data schemas for customs broker data standardization",
        "Engineered automated data validation rules and quality gates",
        "Built automated audit dashboard using QuickSight and SQL"
      ],

      projectsOwned: [
        {
          name: "Import/Export Data Standardization",
          focus: "Post-Brexit UK-EU import/export compliance",
          impact: [
            "Onboarded data from multiple international logistics partners",
            "Increased audit coverage from <1% to 99% of documents",
            "Automated scripts flag and report discrepancy details in real-time"
          ]
        },
        {
          name: "Customs Audit Automation Dashboard",
          focus: "Manual auditing of customs broker data",
          impact: [
            "Improved data readiness from 38% to 86%",
            "Increased audit coverage from <1% to 99% across 3 data sources"
          ]
        }
      ],

      technologiesUsed: [
        "Python", "SQL", "AWS QuickSight",
        "ETL/Data Validation", "JSON Schemas"
      ],

      impactStatement: "Built data quality and audit automation systems for complex logistics operations. Demonstrated ability to handle multi-source data reconciliation and compliance requirements."
    },

    {
      organization: "Informatica Business Solutions",
      role: "Senior Curriculum Developer",
      period: { start: "Nov 2021", end: "Aug 2022", duration: "10 months" },
      location: "Bangalore, India (Remote)",
      status: "Past",
      domains: ["Enterprise Software", "Data Management"],

      keyAchievements: [
        "Designed curriculum for Cloud Services (IICS), MDM, ETL (PowerCenter), Big Data",
        "Created 4 instructor-led courses with technical labs, increasing sales pipeline by 22%",
        "Developed e-learning courses using Articulate Rise 360 and Adobe tools",
        "Managed global team of 12 trainers interfacing with 15+ clients weekly"
      ],

      responsibilityAreas: [
        "Curriculum Design & Development",
        "Instructor Training",
        "E-learning Platform Management",
        "Sales Support through Technical Training",
        "Global Team Management"
      ],

      impactStatement: "Scaled training delivery for enterprise software products. Direct correlation between curriculum quality and 22% sales pipeline increase."
    },

    {
      organization: "Lema Labs Technologies",
      role: "Senior Engineer & Multiple Roles (Robotics Engineer → Senior Engineer)",
      period: { start: "Oct 2015", end: "Sep 2021", duration: "6 years" },
      location: "Chennai, India",
      status: "Past",
      context: "IIT Madras incubated EdTech startup - wore multiple hats while growing with the company",
      domains: ["EdTech", "Robotics", "IoT"],

      careerProgression: "Robotics Engineer → Senior Engineer → Leadership roles spanning Product, Engineering, and Business",

      keyAchievements: [
        "Led development of 13-week ML course contributing to 60% increase in company revenue",
        "Trained and mentored 3000+ clients with 30%+ winning hackathons and competitions",
        "Spearheaded digital transformation during COVID, retaining 60% of annual revenue",
        "Co-founded Lema Community makerspace, organized 36-hour makeathons",
        "Built and deployed custom LMS on OpenEDX during pandemic pivot",
        "Won 1st place in Micro Mouse Challenge at World Robotics Championship",
        "Established company's training delivery model and instructor network"
      ],

      majorProjects: [
        {
          name: "ML Course Development & Launch",
          impact: "60% revenue increase, became flagship product"
        },
        {
          name: "Community Makerspace (Lema Community)",
          impact: "Organized 36-hour makeathons, built community brand"
        },
        {
          name: "OpenEDX LMS Deployment",
          impact: "Enabled pandemic-era pivot, retained 60% revenue during COVID"
        }
      ],

      technologiesUsed: [
        "Python", "Robotics", "IoT", "Firmware Development",
        "LMS Platforms", "Content Creation Tools"
      ],

      impactStatement: "Built strong foundation in education technology, team leadership, and startup agility. Demonstrated ability to pivot, scale, and lead teams through exponential growth and crisis."
    }
  ],

  // ============================================================================
  // EDUCATION & CONTINUOUS LEARNING
  // ============================================================================
  education: [
    {
      degree: "MSc Artificial Intelligence for Business Transformation",
      institution: "SKEMA Business School",
      location: "Paris, France",
      period: { start: "Sep 2022", end: "Dec 2023" },
      focus: "AI applications in business, transformation strategy",
      thesis: "Social factors affecting students' performance in Virtual Learning Environments",
      relevance: "Formalizes AI expertise with business transformation lens. Thesis demonstrates understanding of learning science and AI education."
    },
    {
      degree: "Post Graduate Diploma in International Management",
      institution: "SKEMA Business School",
      location: "Paris, France",
      period: { start: "Sep 2022", end: "Dec 2023" },
      focus: "Global business management, cross-cultural leadership",
      note: "Dual degree program alongside MSc in AI",
      relevance: "Provides business acumen and cross-cultural perspective for leading international teams."
    },
    {
      degree: "BE Electronics and Communication Engineering",
      institution: "KCG College of Technology",
      location: "Chennai, India",
      period: { start: "Aug 2010", end: "Jun 2014" },
      focus: "Hardware, communication systems, electronics",
      relevance: "Strong foundation in hardware and signals, complementing software/AI expertise. Enables IoT and robotics work."
    }
  ],

  // ============================================================================
  // CERTIFICATIONS & CONTINUOUS LEARNING
  // ============================================================================
  certifications: [
    {
      name: "Agile Project Management (AgilePM) Foundation",
      provider: "APMG International",
      relevance: "Formal PM certification guiding project management approach"
    },
    {
      name: "Complete Generative AI with LangChain and HuggingFace",
      provider: "Udemy",
      relevance: "Practical GenAI skills with LangChain framework"
    },
    {
      name: "LLMs: Developer's Masterclass",
      provider: "Udemy",
      relevance: "Deep dive into LLM architecture, fine-tuning, and deployment"
    },
    {
      name: "Machine Learning",
      provider: "Andrew NG (Coursera)",
      relevance: "Foundational ML concepts and algorithms"
    },
    {
      name: "Data Analyst with Power BI",
      provider: "Datacamp",
      relevance: "Business intelligence and data visualization skills"
    },
    {
      name: "Leadership Development Program",
      provider: "Compassion International",
      relevance: "Leadership principles with focus on impact and values"
    }
  ],

  // ============================================================================
  // AWARDS & RECOGNITION
  // ============================================================================
  awardsAndRecognition: [
    {
      title: "1st Place in Micro Mouse Challenge",
      event: "World Robotics Championship",
      year: "2015 or earlier",
      significance: "International robotics recognition"
    },
    {
      title: "Key Leader Recognition",
      organization: "Lema Labs",
      recognition: "Recognized as key leader for ensuring recurring customer base",
      significance: "Leadership and business acumen validation"
    },
    {
      title: "Best Solution Award",
      organization: "Orange Telecom",
      project: "E-Sports product ideation",
      significance: "Innovation and product thinking recognition"
    },
    {
      title: "Guest Lecturer Invitation",
      institutions: ["SRM University", "SR College of Engineering"],
      significance: "Academic credibility and thought leadership"
    },
    {
      title: "Chief Adjudicator",
      role: "Multiple hackathons and robotics competitions",
      significance: "Community influence and industry credibility"
    }
  ],

  // ============================================================================
  // DETAILED PROJECT INFORMATION
  // ============================================================================
  projectPortfolio: {
    featuredProjects: [
      {
        id: "ar-reconciliation",
        title: "AI-Powered Accounts Receivable Ledger Reconciliation",
        company: "Constient Global Solutions",
        period: "2025",
        category: "Agentic AI / FinTech",
        status: "Production",

        businessContext: {
          industry: "Real Estate & Property Management Finance",
          problem: "Enterprise finance teams managing thousands of properties needed autonomous financial reconciliation of accounts receivable ledgers with complex multi-tenant payment decomposition.",
          scale: "Thousands of transactions monthly across multiple properties"
        },

        technicalChallenge: {
          challenges: [
            "Sparse transaction data with missing tenant identification in bank statement deposits",
            "Multi-tenant decomposition—single payments covering multiple building accounts",
            "Accounts receivable consolidation from multiple inconsistent data sources",
            "Missing GL codes and transaction narrative context",
            "Manual reconciliation covering <1% of transactions",
            "Need to meet strict monthly close deadlines with 100% accuracy"
          ],
          complexity: "Autonomous financial reasoning with human validation for high-stakes decisions"
        },

        solutionArchitecture: {
          approach: "LangGraph-orchestrated multi-agent Agentic AI system with human-in-the-loop validation",
          agents: [
            {
              name: "Financial Data Ingestion Agent",
              capability: "Autonomous PDF extraction from bank statements using Amazon Textract + LLM parsing",
              output: "Structured JSON with GL code enforcement via Pydantic schemas"
            },
            {
              name: "Autonomous Tenant Identification Agent",
              capability: "Multi-step extraction of tenant entities from sparse bank narratives",
              method: "GPT-4o chain-of-thought financial reasoning"
            },
            {
              name: "Intelligent Accounts Receivable Matching Agent",
              capability: "ReAct reasoning agent for multi-tenant financial decomposition",
              achievement: "411 bank statements → 535 properly coded accounting transactions"
            },
            {
              name: "Agentic Reconciliation State Machine",
              capability: "LangGraph-based persistent checkpoints for transaction matching",
              handling: "Partial/full financial reconciliation with learned business rules"
            },
            {
              name: "Human-in-the-Loop Loop",
              capability: "Routes ambiguous transactions to financial controllers",
              feedback: "Human corrections continuously improve agent matching logic (~150 training points/month)"
            },
            {
              name: "Financial Reporting Dashboard",
              capability: "Consolidated GL dashboard with complete audit trails",
              analysis: "Multi-dimensional P&L by tenant, property, expense type, GL code, period"
            }
          ],
          dataFlow: "Bank PDFs → Textract → Tenant ID Agent → AR Matching Agent → State Machine → HITL Review → GL Dashboard"
        },

        businessMetrics: {
          accuracy: "98% financial reconciliation accuracy, 100% GL posting accuracy (zero errors)",
          efficiency: "5-10 minutes processing vs. 2-3 weeks manual close",
          automation: "95% reduction in manual data entry",
          tenantId: "83% autonomous tenant identification from sparse data",
          timeToClose: "2+ weeks → 2 days (10x improvement)",
          feedback: "~150 financial training data points generated monthly"
        },

        technicalStack: [
          "OpenAI", "LangGraph", "LangChain",
          "FastAPI", "PostgreSQL", "MongoDB", "Redis",
          "Pydantic V2", "Amazon Textract", "Python"
        ],

        keyDifferentiators: [
          "Multi-agent orchestration with state management",
          "Human-in-the-Loop with feedback loop for continuous improvement",
          "Handles complex financial scenarios through intelligent reasoning vs. rigid rules",
          "Scalable architecture for varying GL structures and property types"
        ],

        deploymentScope: "Enterprise real estate portfolios with varying GL structures",

        chatbotContext: "Demonstrates ability to architect sophisticated Agentic AI for complex financial operations. Key innovation: combining autonomous reasoning with human validation. Multi-agent pattern applicable across finance domains."
      },

      {
        id: "virtual-waiter",
        title: "Virtual Waiter",
        company: "Constient Global Solutions",
        period: "2025",
        category: "Agentic AI / Hospitality",
        status: "Production",

        businessContext: {
          industry: "Hospitality & F&B Operations",
          problem: "Restaurant operators needed autonomous conversational AI to handle customer-facing operations while reducing staff workload.",
          scope: "End-to-end customer interactions: ordering, reservations, complaints, feedback"
        },

        technicalChallenge: {
          challenges: [
            "Manual waiter/host workload for order-taking and reservations",
            "Lack of autonomous customer profiling and personalization without explicit login",
            "Complex food ordering with menu browsing, cart management, modifications",
            "Table booking optimization across multiple constraints",
            "Customer feedback and complaint handling bottleneck",
            "Recommendation engine gap—no intelligent upselling"
          ],
          complexity: "Multi-domain conversational AI handling diverse customer intents with natural language"
        },

        solutionArchitecture: {
          approach: "LangGraph-orchestrated multi-agent conversational system with personalization engine",
          agents: [
            {
              name: "Intent Classification Agent",
              capability: "Autonomous classification of user requests + entity extraction",
              routing: "Routes to food ordering, table booking, complaints, or general queries"
            },
            {
              name: "Main Orchestrator Agent",
              capability: "LangGraph state machine coordinating multi-module interaction",
              management: "Persistent conversation context and transaction state"
            },
            {
              name: "Autonomous Food Ordering Sub-Agent",
              capability: "Full food ordering workflow with semantic menu search",
              integration: "PetPooja POS real-time inventory and kitchen order injection"
            },
            {
              name: "Autonomous Table Booking Sub-Agent",
              capability: "Intelligent reservation matching with ReAct reasoning",
              optimization: "Matches customer preferences against available tables"
            },
            {
              name: "Complaints & Feedback Module",
              capability: "Autonomous complaint capture with sentiment analysis",
              ticketing: "Auto-creates support tickets for staff follow-up"
            },
            {
              name: "Conversational Response Module",
              capability: "LLM-powered waiter-like responses",
              personality: "Natural, empathetic, context-aware (not robotic)"
            },
            {
              name: "User Fingerprinting & Personalization Engine",
              capability: "Autonomous customer recognition without explicit login",
              method: "Device fingerprints + conversation patterns + ordering history"
            },
            {
              name: "Intelligent Recommendation Agent",
              capability: "Multi-scenario recommendation system",
              approach: "Collaborative filtering + content-based matching + user preference analysis"
            },
            {
              name: "Admin Reporting Dashboard",
              capability: "Analytics platform for restaurant operators",
              metrics: "Sales, customer engagement, peak hours, popular items, satisfaction"
            },
            {
              name: "Tool Ecosystem",
              capability: "API tools for all operations",
              tools: "Menu queries, ordering, reservations, payments, POS integration"
            }
          ],
          dataFlow: "User Input → Intent Classification → Sub-Agent Routing → Action Execution → Personalization & Recommendations → Response Generation → POS Integration"
        },

        businessMetrics: {
          customerRecognition: "80%+ autonomous customer identification without login",
          autonomy: "Handles end-to-end customer journeys without human intervention",
          recommendations: "Drives incremental sales through intelligent suggestions",
          staffReduction: "Reduces dependency for order-taking and host station functions",
          naturalness: "Waiter-like conversation (not robotic)"
        },

        technicalStack: [
          "OpenAI", "LangChain", "LangGraph",
          "FastAPI", "Python", "PostgreSQL", "MongoDB", "Redis",
          "PetPooja POS", "Pydantic V2"
        ],

        keyDifferentiators: [
          "User fingerprinting for seamless personalization",
          "Multi-domain task handling (ordering, booking, feedback) in single system",
          "Natural conversational interface (waiter-like behavior)",
          "Real-time POS integration for inventory and kitchen operations",
          "Recommendation engine driving business value"
        ],

        deploymentScope: "Single restaurant → multi-property chains, hotel F&B, hospital canteens",

        chatbotContext: "Demonstrates customer-facing Agentic AI with autonomous task execution. Key innovations: intent routing at scale, POS integration, user fingerprinting, multi-scenario recommendations. Architecture applicable to any conversational AI system requiring multi-domain task execution."
      }
    ],

    otherProjects: [
      {
        title: "Automated Research & Ideation Engine",
        company: "Independent Project",
        period: "2024",
        category: "Generative AI",
        problem: "Researchers spend excessive time aggregating and synthesizing academic papers for new solution concepts.",
        approach: "AI Agent solution that aggregates papers, extracts methodologies, generates novel concepts",
        techStack: ["LangChain", "OpenAI", "RAG", "Vector Embeddings", "Python"],
        impact: "Automated research synthesis enabling rapid ideation from existing knowledge"
      },
      {
        title: "AI-Driven Adaptive Study Planner",
        company: "Independent Project",
        period: "2024",
        category: "EdTech AI",
        problem: "Students struggle with study schedules that adapt to their learning patterns.",
        approach: "Personalized agent for Grade 12 that generates dynamic schedules based on retention metrics and availability",
        techStack: ["Python", "LangChain", "OpenAI", "Streamlit"],
        impact: "Personalized learning paths that adapt to student performance and time constraints"
      },
      {
        title: "GenAI Project Suite",
        company: "Personal Portfolio",
        period: "2024",
        category: "Generative AI",
        projects: [
          "Q&A Chatbots (OpenAI + Ollama)",
          "PDF RAG Chatbot using Groq",
          "SQL Chatbot for database interaction",
          "MathGPT with custom LLMMathChain",
          "AI Search Engine using Zero-shot ReAct agents",
          "YT-to-Blog converter using CrewAI agents"
        ],
        impact: "Demonstrated versatility across RAG, tool-use, multi-agent systems, and LLM providers",
        techStack: ["LangChain", "OpenAI", "Ollama", "Groq", "CrewAI", "FAISS", "ChromaDB", "Streamlit"]
      },
      {
        title: "Deep Learning Projects Collection",
        company: "Personal Portfolio",
        period: "2023-2024",
        category: "Machine Learning",
        projects: [
          {
            name: "Human Emotion Detection",
            approach: "Facial expression analysis",
            accuracy: "76% on AffectNet"
          },
          {
            name: "Disease Prediction Models",
            approach: "Cardiovascular and diabetes prediction",
            accuracy: "87% accuracy"
          },
          {
            name: "Crop Disease Detection",
            deployment: "Drone deployment with OpenCV"
          },
          {
            name: "Reinforcement Learning Agents",
            algorithms: "DQN, DCQN, A2C for game environments"
          }
        ],
        impact: "End-to-end ML pipeline from data processing to model deployment, including edge deployment",
        techStack: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "CNN", "RNN", "LSTM", "Gymnasium"]
      },
      {
        title: "Customs Audit Automation Dashboard",
        company: "Amazon",
        period: "2023",
        category: "Data Engineering",
        problem: "Manual auditing of customs broker data covered <1% with quality issues",
        approach: "Data schemas, automated validation rules, audit dashboard using QuickSight",
        metrics: {
          dataReadiness: "38% → 86%",
          auditCoverage: "<1% → 99%"
        },
        techStack: ["Python", "SQL", "AWS QuickSight", "Data Validation", "ETL"]
      },
      {
        title: "Import/Export Data Standardization",
        company: "Amazon",
        period: "2023",
        category: "Data Engineering",
        problem: "Post-Brexit UK-EU operations with multiple brokers submitting inconsistent filing data",
        approach: "Data lake with JSON schemas, business rules, automated validation pipelines",
        metrics: {
          auditCoverage: "<1% → 99% of documents",
          dataQuality: "Pre-commit and post-commit checks"
        },
        techStack: ["Python", "SQL", "AWS QuickSight", "ETL", "Data Validation", "JSON Schemas"]
      }
    ]
  },

  // ============================================================================
  // CAREER NARRATIVE & POSITIONING
  // ============================================================================
  careerNarrative: {
    journey: `Jeswin's career spans a decade of innovation at the intersection of AI, data, and business impact. Starting with hardware and robotics foundations (BE Electronics + World Robotics Championship 1st place), transitioned through EdTech startup leadership (Lema Labs: grew from Robotics Engineer to Senior Engineer, trained 3000+ professionals) to enterprise data engineering (Amazon: built audit automation and data standardization systems) to current focus on production Agentic AI systems.

Key theme: Solving complex real-world problems through intelligent systems while leading and developing people.`,

    strengths: [
      {
        area: "Agentic AI Architecture",
        description: "Deep expertise in designing and deploying multi-agent systems that autonomously handle complex workflows with human validation"
      },
      {
        area: "Full-Stack AI Implementation",
        description: "End-to-end capability from problem analysis through production deployment, including model architecture, backend engineering, and business integration"
      },
      {
        area: "Learning & Rapid Mastery",
        description: "Demonstrated ability to quickly master new domains and technologies, applying them to novel problems"
      },
      {
        area: "Data to Insights",
        description: "Converting unstructured data into actionable business intelligence through ETL, analytics, and visualization"
      },
      {
        area: "Team Leadership",
        description: "Experience leading technical teams, mentoring professionals, and building organizational capabilities"
      },
      {
        area: "Business Acumen",
        description: "Understanding business context, aligning technical solutions with business objectives, driving revenue and efficiency"
      }
    ],

    targetRoles: [
      "AI Solutions Architect - designing AI systems that solve business problems",
      "AI Engineering Lead - building production AI systems and leading teams",
      "Generative AI Engineer - developing LLM-based applications",
      "Technical Product Manager - with focus on AI products",
      "AI Consultant - advising on Agentic AI adoption",
      "VP Engineering - technical leadership with business impact focus"
    ],

    companyTypes: [
      "Early-stage AI startups (hands-on technical leadership)",
      "Enterprise tech companies (large-scale system architecture)",
      "Consultancies (helping clients adopt Agentic AI)",
      "Scale-ups (building AI product capabilities)"
    ]
  },

  // ============================================================================
  // TECHNICAL CONCEPTS & PATTERNS
  // ============================================================================
  technicalKnowledge: {
    agenticAI: {
      definition: "Autonomous AI agents with reasoning capabilities that understand context, make decisions, and execute tasks across multiple domains",
      keyPatterns: ["ReAct (Reasoning + Acting)", "State Machines (LangGraph)", "Tool Use", "Multi-Agent Orchestration", "Feedback Loops"],
      applications: "Complex multi-step business processes requiring autonomous decision-making with human validation",
      examples: [
        "Financial reconciliation (AR Ledger project)",
        "Conversational task execution (Virtual Waiter project)",
        "Research synthesis",
        "Customer service automation"
      ]
    },

    multiAgentArchitecture: {
      description: "Multiple specialized agents coordinated by an orchestrator to handle different aspects of a workflow",
      benefits: ["Separation of concerns", "Scalability", "Testability", "Specialized reasoning per domain"],
      challenges: ["Context passing between agents", "State management", "Error handling"],
      examples: [
        "6 agents in AR Reconciliation system",
        "10 agents in Virtual Waiter system"
      ]
    },

    humanInTheLoop: {
      description: "Combining autonomous AI decisions with human validation, feedback, and override capabilities",
      useCases: ["Financial decisions", "Customer service escalations", "Content moderation", "Continuous model improvement"],
      implementation: "Feedback loop captures human decisions used to retrain and improve AI agent logic",
      examples: [
        "Financial controllers validating reconciliation logic",
        "Human feedback improving AR matching accuracy to 98%"
      ]
    },

    ragPipelines: {
      description: "Retrieval-Augmented Generation for grounding LLM responses in external knowledge",
      components: ["Document ingestion", "Vector embeddings", "Semantic search", "LLM response generation"],
      applications: ["Question-answering over documents", "Knowledge base chat", "Research synthesis"],
      technologies: ["LangChain", "Vector databases (Pinecone, ChromaDB)", "Embedding models"]
    },

    langGraphStateManagement: {
      description: "Framework for managing complex workflows with persistent state across agentic steps",
      advantages: ["Persistence and recovery", "Checkpointing", "Conditional routing", "Agent coordination"],
      useCases: ["Multi-step financial processes", "Conversational workflows", "Research synthesis pipelines"]
    }
  },

  // ============================================================================
  // COMMUNICATION & POSITIONING
  // ============================================================================
  positioning: {
    elevator_pitch: "AI Solutions Architect with 9+ years building intelligent systems. Recently deployed Agentic AI achieving 98% accuracy in financial reconciliation and 80% autonomous customer recognition. Expert in LangGraph, GPT-4o, and production AI systems. Seeking AI engineering or solutions architecture roles with business impact.",

    oneLiner: "Bridge between AI innovation and business impact - architecting autonomous Agentic AI systems that solve complex real-world problems.",

    uniqueValue: [
      "Production Agentic AI expertise (not theoretical)",
      "Full-stack capability from problem analysis through deployment",
      "Track record of 10x efficiency improvements (AR reconciliation: 2-3 weeks → 2 days)",
      "Proven leadership building teams and training 3000+ professionals",
      "Business acumen connecting technology to revenue and efficiency"
    ]
  }
}
