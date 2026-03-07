import { Document } from "@langchain/core/documents";
import {
  personalInfo,
  skills,
  projects,
  experience,
  certifications,
  awards,
  education,
} from "@/data/portfolio-data";
import { portfolioKnowledgeBase } from "@/data/portfolio-knowledge-base";

/**
 * Converts structured portfolio data into semantically rich, paragraph-form
 * Document chunks for vector embedding and retrieval.
 *
 * Every chunk is written as natural language prose so that embedding models
 * can capture the full semantic meaning — not just keyword overlap.
 */
export function buildDocuments(): Document[] {
  const docs: Document[] = [];

  // ── Personal profile ──────────────────────────────────────────────
  docs.push(
    new Document({
      pageContent: `Jeswin Arul Samuel is an AI Solutions Architect currently based in ${personalInfo.location}. His professional tagline is "${personalInfo.tagline}". He has over ${personalInfo.highlights[0].value} of professional experience, has trained ${personalInfo.highlights[1].value} professionals, previously worked at Amazon as a ${personalInfo.highlights[2].value}, and holds an ${personalInfo.highlights[3].value}. He speaks ${personalInfo.languages.map((l) => `${l.name} at a ${l.level.toLowerCase()} level`).join(", ")}. He can be reached at ${personalInfo.email}, by phone at ${personalInfo.phone} (India) or ${personalInfo.phoneAlt} (France), through LinkedIn at ${personalInfo.linkedin}, or on GitHub at ${personalInfo.github}.`,
      metadata: { category: "profile", source: "personalInfo", title: "Contact & Overview" },
    })
  );

  docs.push(
    new Document({
      pageContent: personalInfo.bio,
      metadata: { category: "profile", source: "personalInfo", title: "Bio & Career Summary" },
    })
  );

  // ── Skills — one rich paragraph per category ──────────────────────
  const skillParagraphs: Record<string, string> = {
    "Generative AI & LLMs": `Jeswin has deep expertise in Generative AI and Large Language Models. He works extensively with OpenAI's GPT models, Anthropic's Claude 3.5 Sonnet, and Google's Gemini 2.0. He builds production applications using the LangChain framework and its ecosystem including LangGraph for stateful agent workflows and LangSmith for observability and evaluation. He has hands-on experience building RAG (Retrieval-Augmented Generation) pipelines using vector embeddings for semantic search. He is skilled in prompt engineering for optimizing LLM outputs and has experience fine-tuning models using parameter-efficient methods like LoRA and QLoRA. He has also worked with multi-agent orchestration frameworks including CrewAI and AutoGen for building systems where multiple AI agents collaborate to complete complex tasks.`,

    "Backend & APIs": `Jeswin is a strong backend engineer with Python as his primary language. He builds production-grade REST APIs using FastAPI, which is his go-to framework for high-performance asynchronous web services. He has also built applications with Django and Flask. For data modeling and validation he uses SQLAlchemy as his ORM and Pydantic V2 for schema validation and serialization. He writes asynchronous code for handling concurrent requests and I/O-bound operations efficiently. For rapid prototyping and internal tools he uses Streamlit and Gradio to build interactive web interfaces for AI models and data applications.`,

    "Machine Learning": `Jeswin has substantial experience in machine learning and deep learning. He works with TensorFlow, PyTorch, and Keras for building and training neural networks. He uses Scikit-Learn for classical machine learning tasks like classification, regression, and clustering. He has built deep learning architectures including Convolutional Neural Networks (CNNs) for image recognition, Recurrent Neural Networks (RNNs) and LSTMs for sequence modeling. He has experience with transfer learning, adapting pretrained models to new tasks. In Natural Language Processing (NLP), he has worked with text classification, entity extraction, and language understanding. In computer vision, he uses OpenCV for image processing and has deployed vision models on edge devices including drones. He also uses models from Hugging Face for various NLP and vision tasks.`,

    "Data & Cloud": `Jeswin has experience with a range of databases and cloud infrastructure. For relational databases he uses PostgreSQL and writes complex SQL queries. For NoSQL he works with MongoDB for document storage and Redis for caching and real-time data. For AI-specific storage, he uses vector databases including Pinecone and ChromaDB for storing and searching vector embeddings used in RAG pipelines. On AWS, he has used Lambda for serverless compute, S3 for object storage, and Textract for document extraction from PDFs. He uses Docker for containerization. For big data, he has worked with Hadoop and Hive. For business intelligence and reporting, he has built dashboards using AWS QuickSight and Power BI.`,

    "Leadership & Business": `Jeswin has strong leadership and business skills alongside his technical expertise. He holds an Agile Project Management (AgilePM) certification from APMG International and applies agile methodologies in his work. He has direct team leadership experience, having led a team of 12 engineers at Constient Global Solutions. He manages stakeholder relationships across business and technical teams. He has extensive experience in technical training and curriculum development, having trained over 3000 professionals. He has product management experience, understanding how to translate business needs into technical products. He also has business development skills, having directly contributed to revenue growth at multiple organizations.`,
  };

  // Full skills overview paragraph
  docs.push(
    new Document({
      pageContent: `Jeswin Arul Samuel's technical expertise spans five major areas. In Generative AI and LLMs, he works with OpenAI, Claude, Gemini, LangChain, LangGraph, RAG pipelines, prompt engineering, and model fine-tuning. In Backend and API engineering, he uses Python, FastAPI, Django, Flask, and async programming. In Machine Learning, he has experience with TensorFlow, PyTorch, CNNs, RNNs, NLP, computer vision, and Hugging Face. In Data and Cloud, he works with PostgreSQL, MongoDB, Redis, vector databases like Pinecone and ChromaDB, AWS services, and Docker. In Leadership, he is Agile-certified, has led teams, managed stakeholders, and trained over 3000 professionals. His strongest and most current skills are in Agentic AI architecture using LangGraph and production LLM systems.`,
      metadata: { category: "skills", source: "skills", title: "All Skills Summary" },
    })
  );

  for (const cat of skills.categories) {
    const paragraph = skillParagraphs[cat.name];
    if (paragraph) {
      docs.push(
        new Document({
          pageContent: paragraph,
          metadata: { category: "skills", source: "skills", title: cat.name },
        })
      );
    } else {
      // Fallback for any unmapped categories
      docs.push(
        new Document({
          pageContent: `Jeswin has skills in ${cat.name}, including: ${cat.skills.join(", ")}. These capabilities have been applied across multiple professional roles and projects throughout his career.`,
          metadata: { category: "skills", source: "skills", title: cat.name },
        })
      );
    }
  }

  // ── Specializations (rich prose from knowledge base) ────────────
  const specParagraphs: Record<string, string> = {
    "Agentic AI & LLM Systems": `Jeswin specializes in architecting and deploying production Agentic AI systems. He builds autonomous AI agents using LangGraph for state machine orchestration, LangChain for tool integration, and ReAct (Reasoning + Acting) patterns for agents that can reason about problems and take actions. He designs multi-agent systems where specialized agents collaborate through an orchestrator. He has applied these skills in real production systems: the AI-Powered Accounts Receivable Ledger Reconciliation system which automates financial matching, the Virtual Waiter conversational AI which achieved over 80% autonomous customer recognition, the Personalized Learning Assistant for adaptive education, and the Research Idea Generator for academic synthesis.`,

    "Generative AI & LLMs": `Jeswin has cutting-edge expertise with large language models and generative AI. He works with OpenAI's GPT-4o, Anthropic's Claude 3.5 Sonnet, and Google's Gemini 2.0. He builds RAG (Retrieval-Augmented Generation) pipelines that ground LLM responses in external knowledge through semantic search. He is skilled in prompt engineering to optimize model outputs for specific tasks. He has experience fine-tuning models using parameter-efficient methods like LoRA and QLoRA. His framework expertise includes LangChain, LangGraph, LangSmith for monitoring, CrewAI for role-based agent hierarchies, and AutoGen for multi-agent conversation patterns. He applies these technologies to conversational AI, question-answering, content generation, and research synthesis.`,

    "Backend & API Engineering": `Jeswin builds scalable, production-ready backend systems primarily in Python. FastAPI is his go-to framework for high-performance asynchronous APIs, and he has also worked with Django and Flask. He uses SQLAlchemy for ORM and Pydantic V2 for data validation and serialization. He designs RESTful APIs and leverages async programming patterns for handling concurrent workloads. He uses Streamlit and Gradio for building rapid prototypes and interactive AI model demos.`,

    "Machine Learning & Deep Learning": `Jeswin has hands-on experience developing and deploying machine learning models. In deep learning, he works with TensorFlow, PyTorch, and Keras to build CNNs for image tasks, RNNs and LSTMs for sequences, and applies transfer learning to adapt pretrained models. In computer vision, he built an emotion detection system achieving 76% accuracy on AffectNet, a disease prediction model at 87% accuracy, and deployed crop disease detection models on drones using OpenCV. In NLP, he works with Hugging Face models. In reinforcement learning, he has built agents using DQN, DCQN, and A2C algorithms for game environments. He uses Scikit-Learn, Pandas, and NumPy for classical ML tasks.`,

    "Data Engineering & Databases": `Jeswin has experience building data pipelines, ETL processes, and data architecture. He works with PostgreSQL for relational data and complex SQL queries, MongoDB for document storage, and Redis for caching. For AI applications, he uses vector databases like Pinecone and ChromaDB for embedding storage and semantic search. On AWS, he has used Lambda, S3, and Textract for serverless processing and document extraction. He builds data validation pipelines using JSON schemas and Pydantic, with pre-commit and post-commit quality gates. For analytics and reporting, he has built dashboards with AWS QuickSight and Power BI. He has experience with Hadoop and Hive for big data processing.`,

    "Leadership & Business Skills": `Jeswin combines technical depth with strong leadership and business skills. He holds an Agile PM (APMG) certification and manages projects using agile methodologies. At Constient, he led a team of 12 including junior developers, AI engineers, and data analysts through the full software development lifecycle, conducting code reviews and mentoring team members. At Informatica, he ran Train the Trainer sessions for 12 global trainers who served over 15 clients weekly. He has trained over 3000 professionals across robotics, IoT, machine learning, and data science. He has product management experience translating business needs into technical products, and business development skills that contributed to revenue growth at Lema Labs (60% increase from ML training product) and Informatica (22% sales pipeline increase from training-driven engagement).`,
  };

  for (const spec of portfolioKnowledgeBase.technicalExpertise.specializations) {
    const paragraph = specParagraphs[spec.area];
    if (paragraph) {
      docs.push(
        new Document({
          pageContent: paragraph,
          metadata: { category: "skills", source: "specializations", title: spec.area },
        })
      );
    } else {
      const lines = [
        `Jeswin specializes in ${spec.area}. ${spec.description}.`,
      ];
      if ("keySkills" in spec) lines.push(`His key skills in this area include ${(spec as any).keySkills.join(", ")}.`);
      if ("frameworks" in spec) {
        const frameworks = (spec as any).frameworks;
        if (Array.isArray(frameworks)) lines.push(`He uses frameworks such as ${frameworks.join(", ")}.`);
      }
      if ("experiences" in spec) lines.push(`He has applied these skills in projects including ${(spec as any).experiences.join(", ")}.`);
      docs.push(
        new Document({
          pageContent: lines.join(" "),
          metadata: { category: "skills", source: "specializations", title: spec.area },
        })
      );
    }
  }

  // ── Experience summary ──────────────────────────────────────────
  const workExperience = experience.filter((e) => e.category === "work");
  docs.push(
    new Document({
      pageContent: `Jeswin Arul Samuel has held ${workExperience.length} professional roles across his career. ${workExperience.map((e) => `He worked as ${e.role} at ${e.company} from ${e.period} in ${e.location}${e.domains ? `, focusing on ${e.domains.join(", ")}` : ""}`).join(". ")}. His career progression shows growth from robotics engineering and technical training at an IIT Madras incubated startup, through enterprise data engineering at Amazon in Luxembourg, to his current focus on architecting production Agentic AI systems.`,
      metadata: { category: "experience", source: "experience", title: "All Experience Summary" },
    })
  );

  // ── Experience entries ────────────────────────────────────────────
  for (const exp of experience) {
    const parts: string[] = [];

    if (exp.category === "education") {
      parts.push(`Jeswin pursued ${exp.role} at ${exp.company} in ${exp.location} from ${exp.period}.`);
      if (exp.achievements && exp.achievements.length > 0) {
        parts.push(exp.achievements.join(". ") + ".");
      }
    } else {
      parts.push(`Jeswin worked as ${exp.role} at ${exp.company}, based in ${exp.location}, from ${exp.period}.`);

      if (exp.domains) {
        parts.push(`This role focused on the ${exp.domains.join(", ")} domains.`);
      }

      if (exp.description) {
        parts.push(exp.description);
      }

      if (exp.achievements && exp.achievements.length > 0) {
        parts.push(`Key achievements include: ${exp.achievements.join(". ")}.`);
      }

      if (exp.projects && exp.projects.length > 0) {
        for (const proj of exp.projects) {
          parts.push(`One of his projects here was ${proj.name}: ${proj.description} The technology stack included ${proj.techStack.join(", ")}.`);
          if (proj.highlights && proj.highlights.length > 0) {
            parts.push(`Notable outcomes: ${proj.highlights.join(". ")}.`);
          }
        }
      }
    }

    docs.push(
      new Document({
        pageContent: parts.join(" "),
        metadata: {
          category: "experience",
          source: "experience",
          title: `${exp.role} at ${exp.company}`,
          company: exp.company,
          period: exp.period,
        },
      })
    );
  }

  // ── Project summary ───────────────────────────────────────────────
  docs.push(
    new Document({
      pageContent: `Jeswin has worked on ${projects.length} notable projects across his career. These span Agentic AI, Generative AI, EdTech AI, Machine Learning, Data Engineering, Digital Transformation, and Enterprise Training. His featured production projects include the AI-Powered Accounts Receivable Ledger Reconciliation (Agentic AI for finance at Constient, 2025), the Virtual Waiter (conversational AI for hospitality at Constient, 2025), the Automated Research & Ideation Engine (2024), the AI-Driven Adaptive Study Planner (EdTech, 2024), and Amazon projects in customs audit automation and import/export data standardization (2023). He also built ML training products and led digital transformation at Lema Labs, and designed enterprise training programs at Informatica.`,
      metadata: { category: "project", source: "projects", title: "All Projects Summary" },
    })
  );

  // ── Featured projects (split into contextual sub-chunks) ──────────
  for (const proj of projects.filter((p) => p.featured)) {
    // Context chunk — problem statement in prose
    docs.push(
      new Document({
        pageContent: `Jeswin's project "${proj.title}" was built at ${proj.company} in ${proj.period} in the ${proj.category} domain. The business problem it addressed: ${proj.problem}`,
        metadata: {
          category: "project",
          source: "projects",
          title: `${proj.title} — Context`,
          company: proj.company,
          period: proj.period,
        },
      })
    );

    // Architecture chunk
    docs.push(
      new Document({
        pageContent: `The technical approach and architecture for Jeswin's "${proj.title}" project: ${proj.approach}`,
        metadata: {
          category: "project",
          source: "projects",
          title: `${proj.title} — Architecture`,
          company: proj.company,
          period: proj.period,
        },
      })
    );

    // Impact chunk
    docs.push(
      new Document({
        pageContent: `The business impact and results of Jeswin's "${proj.title}" project: ${proj.impact}`,
        metadata: {
          category: "project",
          source: "projects",
          title: `${proj.title} — Impact & Metrics`,
          company: proj.company,
          period: proj.period,
        },
      })
    );

    // Tech stack chunk — as a sentence, not a list
    docs.push(
      new Document({
        pageContent: `The "${proj.title}" project at ${proj.company} was built using the following technologies: ${proj.techStack.join(", ")}. This project falls under the ${proj.category} category and was completed in ${proj.period}.`,
        metadata: {
          category: "project",
          source: "projects",
          title: `${proj.title} — Tech Stack`,
          company: proj.company,
          period: proj.period,
        },
      })
    );
  }

  // ── Other projects (one rich chunk each) ──────────────────────────
  for (const proj of projects.filter((p) => !p.featured)) {
    docs.push(
      new Document({
        pageContent: `Jeswin's project "${proj.title}" was developed at ${proj.company} in ${proj.period} in the ${proj.category} domain. The problem it addressed: ${proj.problem}. His approach: ${proj.approach}. The technology stack included ${proj.techStack.join(", ")}. The impact: ${proj.impact}.`,
        metadata: {
          category: "project",
          source: "projects",
          title: proj.title,
          company: proj.company,
          period: proj.period,
        },
      })
    );
  }

  // ── Education ─────────────────────────────────────────────────────
  docs.push(
    new Document({
      pageContent: `Jeswin's educational background includes ${education.length} degrees. ${education.map((e) => `He earned a ${e.degree} from ${e.school} in ${e.location} (${e.period})${e.details ? `. ${e.details}` : ""}`).join(". ")}. His education combines deep AI and machine learning knowledge with business transformation strategy and international management, built on a foundation of electronics and communication engineering.`,
      metadata: { category: "education", source: "education", title: "All Education Summary" },
    })
  );

  for (const edu of education) {
    docs.push(
      new Document({
        pageContent: `Jeswin earned a ${edu.degree} from ${edu.school} in ${edu.location}, studying from ${edu.period}.${edu.details ? ` ${edu.details}.` : ""} This degree contributes to his expertise by providing ${edu.degree.includes("AI") ? "formal AI and business transformation knowledge" : edu.degree.includes("Management") ? "international business and cross-cultural leadership skills" : "a strong foundation in hardware, electronics, and communication systems that supports his IoT and robotics work"}.`,
        metadata: { category: "education", source: "education", title: edu.degree },
      })
    );
  }

  // ── Certifications ────────────────────────────────────────────────
  const certDetails = portfolioKnowledgeBase.certifications;
  docs.push(
    new Document({
      pageContent: `Jeswin holds ${certifications.length} professional certifications that complement his hands-on experience. ${certDetails.map((c) => `The "${c.name}" from ${c.provider} provides ${c.relevance.toLowerCase()}`).join(". ")}. These certifications span project management, generative AI, LLMs, machine learning foundations, data analytics, and leadership — reflecting his commitment to continuous learning across both technical and business domains.`,
      metadata: { category: "certifications", source: "certifications", title: "Certifications" },
    })
  );

  // ── Awards ────────────────────────────────────────────────────────
  const awardDetails = portfolioKnowledgeBase.awardsAndRecognition;
  docs.push(
    new Document({
      pageContent: `Jeswin has received several awards and recognitions throughout his career. ${awardDetails.map((a) => `He won ${a.title}${a.event ? ` at the ${a.event}` : ""}${"organization" in a ? ` from ${(a as any).organization}` : ""}, which demonstrates ${a.significance.toLowerCase()}`).join(". ")}. These achievements span international robotics competitions, corporate innovation, academic thought leadership, and community building.`,
      metadata: { category: "awards", source: "awards", title: "Awards & Recognition" },
    })
  );

  // ── Career narrative & positioning ────────────────────────────────
  const narrative = portfolioKnowledgeBase.careerNarrative;
  docs.push(
    new Document({
      pageContent: narrative.journey,
      metadata: { category: "narrative", source: "careerNarrative", title: "Career Journey" },
    })
  );

  docs.push(
    new Document({
      pageContent: `Jeswin's key professional strengths include: ${narrative.strengths.map((s) => `${s.area} — ${s.description}`).join(". ")}. These strengths combine to make him effective at both designing complex AI systems and leading the teams and stakeholders needed to bring them to production.`,
      metadata: { category: "narrative", source: "careerNarrative", title: "Key Strengths" },
    })
  );

  docs.push(
    new Document({
      pageContent: `Jeswin is seeking roles in the following areas: ${narrative.targetRoles.join(". ")}. He is a good fit for these types of companies: ${narrative.companyTypes.join(". ")}. He brings a unique combination of hands-on production AI experience, team leadership, and business acumen that makes him particularly valuable in roles that bridge technical implementation with business strategy.`,
      metadata: { category: "narrative", source: "careerNarrative", title: "Target Roles" },
    })
  );

  // ── Technical concepts ────────────────────────────────────────────
  const tech = portfolioKnowledgeBase.technicalKnowledge;
  docs.push(
    new Document({
      pageContent: `Agentic AI is a core area of Jeswin's expertise. ${tech.agenticAI.definition}. The key patterns he implements include ${tech.agenticAI.keyPatterns.join(", ")}. These patterns are applied to ${tech.agenticAI.applications}. Real examples from his work include ${tech.agenticAI.examples.join(", ")}. Jeswin has hands-on production experience deploying Agentic AI systems, not just theoretical knowledge.`,
      metadata: { category: "concepts", source: "technicalKnowledge", title: "Agentic AI" },
    })
  );

  docs.push(
    new Document({
      pageContent: `Jeswin designs multi-agent architectures where ${tech.multiAgentArchitecture.description}. The benefits of this approach include ${tech.multiAgentArchitecture.benefits.join(", ")}. In his production systems, he has implemented this pattern at scale: ${tech.multiAgentArchitecture.examples.join(", ")}. He uses LangGraph for agent orchestration and state management across these multi-agent systems.`,
      metadata: { category: "concepts", source: "technicalKnowledge", title: "Multi-Agent Architecture" },
    })
  );

  docs.push(
    new Document({
      pageContent: `Jeswin builds RAG (Retrieval-Augmented Generation) pipelines for grounding LLM responses in external knowledge. ${tech.ragPipelines.description}. A RAG pipeline consists of ${tech.ragPipelines.components.join(", ")}. He implements these using technologies like ${tech.ragPipelines.technologies.join(", ")}. This portfolio's own chatbot is built using a RAG pipeline that retrieves relevant information about Jeswin's background before generating responses.`,
      metadata: { category: "concepts", source: "technicalKnowledge", title: "RAG Pipelines" },
    })
  );

  docs.push(
    new Document({
      pageContent: `Jeswin uses LangGraph for managing complex stateful workflows in his AI systems. ${tech.langGraphStateManagement.description}. The advantages include ${tech.langGraphStateManagement.advantages.join(", ")}. He has applied LangGraph state management to ${tech.langGraphStateManagement.useCases.join(", ")}. LangGraph is central to his production Agentic AI work at Constient Global Solutions.`,
      metadata: { category: "concepts", source: "technicalKnowledge", title: "LangGraph Patterns" },
    })
  );

  // Human-in-the-Loop concept
  const hitl = tech.humanInTheLoop;
  docs.push(
    new Document({
      pageContent: `Jeswin implements Human-in-the-Loop (HITL) patterns in his AI systems. ${hitl.description}. He applies HITL in use cases like ${hitl.useCases.join(", ")}. His implementation approach: ${hitl.implementation}. Concrete examples from his work: ${hitl.examples.join(". ")}. This pattern is especially important in his financial reconciliation work where autonomous AI decisions require human validation for high-stakes transactions.`,
      metadata: { category: "concepts", source: "technicalKnowledge", title: "Human-in-the-Loop" },
    })
  );

  // ── Positioning / elevator pitch ──────────────────────────────────
  const pos = portfolioKnowledgeBase.positioning;
  docs.push(
    new Document({
      pageContent: `${pos.elevator_pitch} In one line: ${pos.oneLiner}. What makes Jeswin unique: ${pos.uniqueValue.join(". ")}. He differentiates himself through production Agentic AI expertise that is practical, not theoretical, combined with a proven track record of 10x efficiency improvements and experience leading teams and training thousands of professionals.`,
      metadata: { category: "positioning", source: "positioning", title: "Positioning & Value Prop" },
    })
  );

  return docs;
}
