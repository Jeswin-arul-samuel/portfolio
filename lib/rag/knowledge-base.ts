import { Document } from "@langchain/core/documents";
import { masterResumeDataset } from "@/data/resume-master-dataset";
import { projectsShowcaseData } from "@/data/projects-showcase-data";
import { portfolioKnowledgeBase } from "@/data/portfolio-knowledge-base";

const m = masterResumeDataset;

/**
 * Builds semantically rich, natural-language Document chunks for vector embedding.
 *
 * Sources:
 * - resume-master-dataset.ts — comprehensive work history, skills, education, themes
 * - projects-showcase-data.ts — rich project presentations (problem, solution, agents, architecture)
 * - portfolio-knowledge-base.ts — career narrative, technical concepts, positioning
 *
 * Each chunk is written as prose so embedding models capture semantic meaning,
 * not just keyword overlap. Chunks are 100-300 words each, focused on a single topic.
 */
export function buildDocuments(): Document[] {
  const docs: Document[] = [];

  // ════════════════════════════════════════════════════════════════════════
  // PERSONAL PROFILE
  // ════════════════════════════════════════════════════════════════════════

  docs.push(
    new Document({
      pageContent: `Jeswin Arul Samuel is an ${m.personal.currentTitle} based in ${m.personal.location}. His tagline: "${m.personal.tagline}". He has ${m.personal.yearsOfExperience} years of professional experience and has trained ${m.personal.totalPeopleTrained} professionals. He speaks ${m.personal.languages.map((l) => `${l.name} (${l.level})`).join(", ")}. Contact: ${m.personal.email}, phone ${m.personal.phone.india} (India) / ${m.personal.phone.france} (France), LinkedIn ${m.personal.linkedin}, GitHub ${m.personal.github}.`,
      metadata: { category: "profile", title: "Contact & Overview" },
    })
  );

  docs.push(
    new Document({
      pageContent: m.personal.bio,
      metadata: { category: "profile", title: "Bio & Career Summary" },
    })
  );

  docs.push(
    new Document({
      pageContent: `Jeswin is seeking roles including: ${m.personal.seekingRoles.join(", ")}. He targets company types like: ${m.personal.targetCompanyTypes.join("; ")}. He brings a unique combination of hands-on production AI experience, team leadership, and business acumen.`,
      metadata: { category: "profile", title: "Target Roles & Company Types" },
    })
  );

  // ════════════════════════════════════════════════════════════════════════
  // SKILLS — rich prose per category
  // ════════════════════════════════════════════════════════════════════════

  // Full skills overview
  const allSkillAreas = Object.values(m.skills).map((cat) => `${cat.label}: ${cat.items.slice(0, 6).join(", ")}`).join(". ");
  docs.push(
    new Document({
      pageContent: `Jeswin's technical expertise spans ${Object.keys(m.skills).length} major areas. ${allSkillAreas}. His strongest and most current skills are in Agentic AI architecture using LangGraph, production LLM systems, and full-stack Python backend engineering with FastAPI.`,
      metadata: { category: "skills", title: "All Skills Summary" },
    })
  );

  // Individual skill categories
  const skillNarratives: Record<string, string> = {
    generativeAI: `Jeswin has deep expertise in Generative AI and Large Language Models. He works with OpenAI GPT-4o, Claude 3.5 Sonnet, and Gemini 2.0. He builds production applications using LangChain, LangGraph for stateful agent workflows, and LangSmith for observability. He builds RAG pipelines using vector embeddings for semantic search. He designs multi-agent orchestration with CrewAI and AutoGen. He implements ReAct agents, persistent checkpointing, deep agent loops, tool binding, chain composition, agentic reasoning, memory and state management, human-in-the-loop pipelines, intent classification, and entity extraction. He has experience fine-tuning models using LoRA and QLoRA.`,

    backendAndAPIs: `Jeswin is a strong backend engineer with Python as his primary language. He builds production APIs using FastAPI for high-performance async web services. He has also built with Django and Flask. He uses SQLAlchemy as ORM and Pydantic V2 for schema validation. He writes async code for concurrent workloads. For rapid prototyping he uses Streamlit and Gradio.`,

    machineLearning: `Jeswin has substantial experience in machine learning and deep learning. He works with TensorFlow, PyTorch, and Keras for neural networks including CNNs, RNNs, and LSTMs. He uses Scikit-Learn for classical ML. He has built transfer learning applications, NLP systems with Hugging Face, computer vision with OpenCV, and reinforcement learning agents using DQN, DCQN, and A2C algorithms. He uses Pandas and NumPy for data processing.`,

    dataAndCloud: `Jeswin works with PostgreSQL for relational data, MongoDB for documents, and Redis for caching. For AI he uses vector databases: Pinecone, ChromaDB, and FAISS. On AWS he has used Lambda, S3, and Textract for document extraction. He uses Docker for containerization, Hadoop/Hive for big data, QuickSight and Power BI for dashboards, and builds ETL/ELT pipelines with data validation quality gates and JSON schemas.`,

    hardwareAndIoT: `Jeswin has a hardware engineering background including Embedded C programming, ATmega microcontrollers, register-level programming, ADC/PWM protocols, MQTT for IoT, sensor integration (IR, LDR, potentiometer), motor control (DC, stepper, brushless), PCB design basics, and building line follower and obstacle avoidance robots. This foundation supports his IoT and edge AI work.`,

    leadershipAndBusiness: `Jeswin has strong leadership skills. He holds an Agile PM (APMG) certification. He has led a team of 12+ globally at Informatica. He manages stakeholders, develops curriculum, conducts technical training and mentorship, has product management and business development experience, cross-cultural communication skills, revenue growth strategy experience, and led digital transformation during COVID at Lema Labs.`,

    tools: `Jeswin works with Git for version control, OpenEDX for LMS deployment, Articulate Rise 360 and Adobe tools for e-learning development, Amazon internal tools for ETL and data management, POS system integration (PetPooja, restaurant systems), and property management ERP integration via APIs.`,
  };

  for (const [key, cat] of Object.entries(m.skills)) {
    const narrative = skillNarratives[key];
    docs.push(
      new Document({
        pageContent: narrative || `Jeswin has skills in ${cat.label} including: ${cat.items.join(", ")}.`,
        metadata: { category: "skills", title: cat.label },
      })
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // WORK EXPERIENCE — rich narratives from master dataset
  // ════════════════════════════════════════════════════════════════════════

  // Career overview
  docs.push(
    new Document({
      pageContent: `Jeswin has held ${m.experience.length} professional roles. His career progression: ${m.experience.map((e) => `${e.role} at ${e.company} (${e.period}, ${e.location})`).join(" → ")}. He evolved from robotics engineering at an IIT Madras startup, through enterprise curriculum design at Informatica, data engineering at Amazon Luxembourg, independent AI consulting, to architecting production Agentic AI systems at Constient.`,
      metadata: { category: "experience", title: "Career Overview" },
    })
  );

  // ── CONSTIENT ──
  const constient = m.experience[0];
  docs.push(
    new Document({
      pageContent: `Jeswin worked as ${constient.role} at ${constient.company} from ${constient.period} (${constient.duration}, ${constient.type} role). ${constient.context} His leadership responsibilities included: ${constient.leadershipResponsibilities?.join(". ")}. He worked across ${constient.domains?.join(", ")} domains.`,
      metadata: { category: "experience", title: "Constient — Overview", company: "Constient" },
    })
  );

  // Constient projects — rich detail
  for (const proj of constient.projects || []) {
    const ps = (proj as any).problemStatement;
    const arch = (proj as any).architecture;
    const metrics = (proj as any).metrics;
    const howJoined = (proj as any).howYouJoined;

    // Problem & context chunk
    if (ps) {
      docs.push(
        new Document({
          pageContent: `Jeswin's project "${proj.name}" at Constient addressed: ${ps.summary}. ${(proj as any).clientContext ? `Client context: ${(proj as any).clientContext}.` : ""} Core challenges: ${ps.challenges?.join(". ") || ""}.${howJoined ? ` How Jeswin got involved: ${howJoined}` : ""}`,
          metadata: { category: "project", title: `${proj.name} — Problem`, company: "Constient" },
        })
      );
    }

    // Architecture chunk
    if (arch) {
      const agentDescriptions = (arch.agents || []).map((a: any) =>
        `${a.name}: ${a.description}${a.achievement ? ` (${a.achievement})` : ""}`
      ).join(". ");
      docs.push(
        new Document({
          pageContent: `Architecture of "${proj.name}": ${arch.overview}. ${arch.designPrinciple ? `Design principle: ${arch.designPrinciple}.` : ""} Key agents/components: ${agentDescriptions}. Data flow: ${arch.dataFlow || "N/A"}.`,
          metadata: { category: "project", title: `${proj.name} — Architecture`, company: "Constient" },
        })
      );
    }

    // Metrics chunk
    if (metrics) {
      const metricLines = Object.entries(metrics).map(([k, v]) => `${k}: ${v}`).join(". ");
      docs.push(
        new Document({
          pageContent: `Results and metrics for "${proj.name}" at Constient: ${metricLines}. ${(proj as any).scalability || ""}`,
          metadata: { category: "project", title: `${proj.name} — Metrics`, company: "Constient" },
        })
      );
    }

    // Tech stack
    const techStack = (proj as any).techStack;
    if (techStack && Array.isArray(techStack)) {
      docs.push(
        new Document({
          pageContent: `The "${proj.name}" project at Constient was built with: ${techStack.join(", ")}. Domain: ${(proj as any).domain || "N/A"}. Status: ${(proj as any).status || "N/A"}.`,
          metadata: { category: "project", title: `${proj.name} — Tech Stack`, company: "Constient" },
        })
      );
    }
  }

  // ── FREELANCER / INDEPENDENT CONSULTANT ──
  const freelancer = m.experience[1];
  docs.push(
    new Document({
      pageContent: `Jeswin worked as ${freelancer.role} from ${freelancer.period} (${freelancer.duration}). ${freelancer.context} His activities included: ${Object.entries((freelancer as any).activities || {}).map(([k, v]) => `${k}: ${v}`).join(". ")}.`,
      metadata: { category: "experience", title: "Independent Consultant — Overview", company: "Freelance" },
    })
  );

  // Freelancer projects
  for (const proj of freelancer.projects || []) {
    const features = (proj as any).features;
    docs.push(
      new Document({
        pageContent: `Jeswin's freelance project "${proj.name}" (${(proj as any).type || "project"}, ${(proj as any).domain || ""}): ${(proj as any).description || ""}. ${features ? `Key features: ${features.join(". ")}.` : ""} Tech stack: ${(proj as any).techStack?.join(", ") || "N/A"}.`,
        metadata: { category: "project", title: proj.name, company: "Freelance" },
      })
    );
  }

  // Portfolio projects
  for (const proj of (freelancer as any).portfolioProjects || []) {
    const subs = proj.subProjects || [];
    const subText = subs.map((sp: any) => typeof sp === "string" ? sp : `${sp.name}: ${sp.detail} (${sp.tech})`).join(". ");
    docs.push(
      new Document({
        pageContent: `Jeswin's portfolio project "${proj.name}": ${proj.description || ""}. Sub-projects: ${subText}. Tech: ${proj.techStack?.join(", ") || "N/A"}.`,
        metadata: { category: "project", title: proj.name, company: "Portfolio" },
      })
    );
  }

  // ── AMAZON ──
  const amazon = m.experience[2];
  docs.push(
    new Document({
      pageContent: `Jeswin worked as ${amazon.role} at Amazon in ${amazon.location} from ${amazon.period} (${(amazon as any).duration}, ${amazon.type}). Department: ${(amazon as any).department}. ${amazon.context} Key skills demonstrated: ${(amazon as any).keySkillsDemonstrated?.join(", ") || ""}.`,
      metadata: { category: "experience", title: "Amazon — Overview", company: "Amazon" },
    })
  );

  for (const proj of amazon.projects || []) {
    const ps = (proj as any).problemStatement;
    const whatDid = (proj as any).whatYouDid;
    const metrics = (proj as any).metrics;

    docs.push(
      new Document({
        pageContent: `Jeswin's Amazon project "${proj.name}" (focus: ${(proj as any).focus || ""}). Problem: ${ps?.summary || ""}. Challenges: ${ps?.challenges?.join(". ") || ""}. What Jeswin did: ${Array.isArray(whatDid) ? whatDid.join(". ") : (whatDid?.process || []).join(". ")}. Metrics: ${metrics ? Object.entries(metrics).map(([k, v]) => `${k}: ${v}`).join(". ") : "N/A"}. Tech: ${(proj as any).techStack?.join(", ") || "N/A"}.`,
        metadata: { category: "project", title: proj.name, company: "Amazon" },
      })
    );
  }

  // ── INFORMATICA ──
  const informatica = m.experience[3];
  docs.push(
    new Document({
      pageContent: `Jeswin worked as ${informatica.role} at ${informatica.company} in ${informatica.location} from ${informatica.period} (${(informatica as any).duration}). ${informatica.context} What he did: ${(informatica as any).whatYouDid?.overview || ""}. Process: ${(informatica as any).whatYouDid?.process?.join(". ") || ""}. Products worked on: ${(informatica as any).productsWorkedOn?.map((p: any) => `${p.name} (${p.type})`).join(", ") || ""}. Metrics: ${Object.entries((informatica as any).metrics || {}).map(([k, v]) => `${k}: ${v}`).join(". ")}. Key skills: ${(informatica as any).keySkillsDemonstrated?.join(", ") || ""}.`,
      metadata: { category: "experience", title: "Informatica — Overview", company: "Informatica" },
    })
  );

  // ── LEMA LABS ──
  const lema = m.experience[4];
  docs.push(
    new Document({
      pageContent: `Jeswin worked at ${lema.company} in ${lema.location} from ${lema.period} (${(lema as any).duration}). ${(lema as any).companyContext} Career progression: ${(lema as any).careerProgression?.map((p: any) => `${p.phase}: ${p.title} — ${p.description}`).join(". ") || ""}. Overall metrics: trained ${(lema as any).overallMetrics?.totalPeopleTrained} people, designed ${(lema as any).overallMetrics?.programsDesigned} programs, won ${(lema as any).overallMetrics?.competitionsWon}. Revenue impact: school program ~30%, IoT ~40%, ML 60% increase, COVID retention 60%.`,
      metadata: { category: "experience", title: "Lema Labs — Overview", company: "Lema Labs" },
    })
  );

  // Lema Labs individual projects
  for (const proj of lema.projects || []) {
    const details = (proj as any).details || (proj as any).activities || (proj as any).actions || (proj as any).curriculum || [];
    const detailText = Array.isArray(details) ? details.join(". ") : "";
    docs.push(
      new Document({
        pageContent: `Lema Labs project "${proj.name}" (${(proj as any).period || ""}): ${(proj as any).description || ""}. ${detailText}. ${(proj as any).impact ? `Impact: ${(proj as any).impact}.` : ""} ${(proj as any).outcome ? `Outcome: ${(proj as any).outcome}.` : ""}`,
        metadata: { category: "project", title: proj.name, company: "Lema Labs" },
      })
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // PROJECTS — rich showcase data (from HTML presentations)
  // ════════════════════════════════════════════════════════════════════════

  // Projects overview
  docs.push(
    new Document({
      pageContent: `Jeswin has built ${projectsShowcaseData.length} major projects. Agentic AI projects: ${projectsShowcaseData.filter((p) => p.category === "agentic-ai").map((p) => p.title).join(", ")}. Full-stack applications: ${projectsShowcaseData.filter((p) => p.category === "fullstack").map((p) => p.title).join(", ")}. These span restaurant AI, patent intelligence, adaptive education, e-commerce vision AI, alumni networking, language exam prep, rural transport, and attendance automation.`,
      metadata: { category: "project", title: "All Projects Overview" },
    })
  );

  for (const proj of projectsShowcaseData) {
    // Problem + market context chunk
    docs.push(
      new Document({
        pageContent: `${proj.title} — The Problem: ${proj.problem.heading}. ${proj.problem.cards.map((c) => `${c.title}: ${c.description}`).join(". ")}. Market context: ${proj.stats.items.map((s) => `${s.value} — ${s.label}`).join(". ")}. ${proj.stats.supportCards?.map((c) => `${c.title}: ${c.description}`).join(". ") || ""}`,
        metadata: { category: "project", title: `${proj.title} — Problem & Market`, company: proj.company },
      })
    );

    // Solution chunk
    docs.push(
      new Document({
        pageContent: `${proj.title} — The Solution: ${proj.solution.heading}. ${proj.solution.cards.map((c) => `${c.title}: ${c.description}`).join(". ")}. Tagline: ${proj.tagline}. Status: ${proj.status}. Period: ${proj.period}. Company: ${proj.company}.`,
        metadata: { category: "project", title: `${proj.title} — Solution`, company: proj.company },
      })
    );

    // User journey chunk
    docs.push(
      new Document({
        pageContent: `${proj.title} — How it works: ${proj.flow.steps.map((s, i) => `Step ${i + 1} (${s.label}): ${s.description}`).join(". ")}. ${proj.flow.secondaryFlow ? `Secondary flow (${proj.flow.secondaryFlow.heading}): ${proj.flow.secondaryFlow.steps.map((s) => `${s.label}: ${s.description}`).join(". ")}` : ""}`,
        metadata: { category: "project", title: `${proj.title} — User Journey`, company: proj.company },
      })
    );

    // Agent architecture chunk (if applicable)
    if (proj.agents) {
      const agentText = proj.agents.domains
        ? proj.agents.domains.map((d) => `${d.name} (${d.count} agents): ${d.agents.join(", ")}`).join(". ")
        : proj.agents.entries
        ? proj.agents.entries.map((e) => `${e.name}: ${e.description}${e.tech ? ` (${e.tech})` : ""}`).join(". ")
        : "";
      docs.push(
        new Document({
          pageContent: `${proj.title} — Agent Architecture: ${proj.agents.heading}. ${agentText}. ${proj.agents.notes?.join(". ") || ""}`,
          metadata: { category: "project", title: `${proj.title} — Agents`, company: proj.company },
        })
      );
    }

    // System architecture chunk
    docs.push(
      new Document({
        pageContent: `${proj.title} — System Architecture: ${proj.architecture.heading}. ${proj.architecture.layers.map((l) => `${l.name} layer: ${l.boxes.map((b) => `${b.name} (${b.tech})`).join(", ")}`).join(". ")}.`,
        metadata: { category: "project", title: `${proj.title} — Architecture`, company: proj.company },
      })
    );

    // Design decisions chunk
    docs.push(
      new Document({
        pageContent: `${proj.title} — Key Design Decisions: ${proj.decisions.items.map((d) => `${d.title}: ${d.description}`).join(". ")}.`,
        metadata: { category: "project", title: `${proj.title} — Design Decisions`, company: proj.company },
      })
    );

    // Tech stack chunk
    docs.push(
      new Document({
        pageContent: `${proj.title} tech stack: ${proj.tech.map((t) => `${t.name} — ${t.description}`).join(". ")}. Category: ${proj.category === "agentic-ai" ? "Agentic AI" : "Full-Stack Application"}.`,
        metadata: { category: "project", title: `${proj.title} — Tech Stack`, company: proj.company },
      })
    );

    // Implementation status chunk
    docs.push(
      new Document({
        pageContent: `${proj.title} — Implementation Status. Built and working: ${proj.statusSection.built.join(". ")}. Coming next: ${proj.statusSection.next.join(". ")}.`,
        metadata: { category: "project", title: `${proj.title} — Status`, company: proj.company },
      })
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // EDUCATION
  // ════════════════════════════════════════════════════════════════════════

  docs.push(
    new Document({
      pageContent: `Jeswin's education: ${m.education.map((e) => `${e.degree} from ${e.institution} in ${e.location} (${e.period})${e.thesis ? `. Thesis: ${e.thesis}` : ""}${e.relevance ? `. Relevance: ${e.relevance}` : ""}`).join(". ")}.`,
      metadata: { category: "education", title: "Education" },
    })
  );

  // ════════════════════════════════════════════════════════════════════════
  // CERTIFICATIONS & AWARDS
  // ════════════════════════════════════════════════════════════════════════

  docs.push(
    new Document({
      pageContent: `Jeswin holds ${m.certifications.length} certifications: ${m.certifications.map((c) => `${c.name} from ${c.provider} (${c.category})`).join(", ")}. These span project management, generative AI, LLMs, machine learning, data analytics, and leadership.`,
      metadata: { category: "certifications", title: "Certifications" },
    })
  );

  docs.push(
    new Document({
      pageContent: `Jeswin's awards and recognition: ${m.awards.map((a) => `${a.title}${"event" in a ? ` at ${(a as any).event}` : ""}${"organization" in a ? ` from ${(a as any).organization}` : ""} — ${a.significance}`).join(". ")}.`,
      metadata: { category: "awards", title: "Awards & Recognition" },
    })
  );

  // ════════════════════════════════════════════════════════════════════════
  // CROSS-CUTTING THEMES (from master dataset)
  // ════════════════════════════════════════════════════════════════════════

  for (const [key, theme] of Object.entries(m.themes)) {
    docs.push(
      new Document({
        pageContent: `Jeswin's cross-cutting theme: ${theme.label}. Evidence: ${theme.evidence.join(". ")}. ${("technologies" in theme && (theme as any).technologies) ? `Technologies: ${(theme as any).technologies.join(", ")}.` : ""}`,
        metadata: { category: "themes", title: theme.label },
      })
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // PROVEN TRAITS — narrative character stories
  // ════════════════════════════════════════════════════════════════════════

  if (m.traits) {
    // Overview chunk
    docs.push(
      new Document({
        pageContent: `Jeswin's proven professional traits: ${m.traits.map((t: any) => `${t.name} — ${t.hook}`).join(". ")}. These traits are backed by real stories and hard metrics from his career.`,
        metadata: { category: "traits", title: "All Traits Overview" },
      })
    );

    // Individual trait chunks
    for (const trait of m.traits) {
      docs.push(
        new Document({
          pageContent: `Jeswin's trait "${trait.name}": ${trait.hook} ${trait.narrative} Evidence: ${trait.evidence.join(". ")}.`,
          metadata: { category: "traits", title: trait.name },
        })
      );
    }
  }

  // ════════════════════════════════════════════════════════════════════════
  // POSITIONING STATEMENTS (from master dataset)
  // ════════════════════════════════════════════════════════════════════════

  docs.push(
    new Document({
      pageContent: `Jeswin's elevator pitch: ${m.positioning.elevatorPitch}`,
      metadata: { category: "positioning", title: "Elevator Pitch" },
    })
  );

  for (const [role, summary] of Object.entries(m.positioning.summaries)) {
    docs.push(
      new Document({
        pageContent: `Jeswin positioned as ${role}: ${summary}`,
        metadata: { category: "positioning", title: `Positioning — ${role}` },
      })
    );
  }

  // ════════════════════════════════════════════════════════════════════════
  // TECHNICAL CONCEPTS (from portfolio-knowledge-base — still valuable)
  // ════════════════════════════════════════════════════════════════════════

  const tech = portfolioKnowledgeBase.technicalKnowledge;

  docs.push(
    new Document({
      pageContent: `Agentic AI is a core area of Jeswin's expertise. ${tech.agenticAI.definition}. Key patterns: ${tech.agenticAI.keyPatterns.join(", ")}. Applications: ${tech.agenticAI.applications}. Examples: ${tech.agenticAI.examples.join(", ")}.`,
      metadata: { category: "concepts", title: "Agentic AI" },
    })
  );

  docs.push(
    new Document({
      pageContent: `Jeswin designs multi-agent architectures: ${tech.multiAgentArchitecture.description}. Benefits: ${tech.multiAgentArchitecture.benefits.join(", ")}. Examples: ${tech.multiAgentArchitecture.examples.join(", ")}.`,
      metadata: { category: "concepts", title: "Multi-Agent Architecture" },
    })
  );

  docs.push(
    new Document({
      pageContent: `Jeswin builds RAG pipelines: ${tech.ragPipelines.description}. Components: ${tech.ragPipelines.components.join(", ")}. Technologies: ${tech.ragPipelines.technologies.join(", ")}. This portfolio's chatbot itself uses a RAG pipeline.`,
      metadata: { category: "concepts", title: "RAG Pipelines" },
    })
  );

  docs.push(
    new Document({
      pageContent: `Jeswin uses LangGraph for state management: ${tech.langGraphStateManagement.description}. Advantages: ${tech.langGraphStateManagement.advantages.join(", ")}. Use cases: ${tech.langGraphStateManagement.useCases.join(", ")}.`,
      metadata: { category: "concepts", title: "LangGraph Patterns" },
    })
  );

  const hitl = tech.humanInTheLoop;
  docs.push(
    new Document({
      pageContent: `Jeswin implements Human-in-the-Loop (HITL) patterns: ${hitl.description}. Use cases: ${hitl.useCases.join(", ")}. Implementation: ${hitl.implementation}. Examples: ${hitl.examples.join(". ")}.`,
      metadata: { category: "concepts", title: "Human-in-the-Loop" },
    })
  );

  // ════════════════════════════════════════════════════════════════════════
  // CAREER NARRATIVE (from portfolio-knowledge-base)
  // ════════════════════════════════════════════════════════════════════════

  const narrative = portfolioKnowledgeBase.careerNarrative;
  docs.push(
    new Document({
      pageContent: narrative.journey,
      metadata: { category: "narrative", title: "Career Journey" },
    })
  );

  docs.push(
    new Document({
      pageContent: `Jeswin's key strengths: ${narrative.strengths.map((s) => `${s.area} — ${s.description}`).join(". ")}.`,
      metadata: { category: "narrative", title: "Key Strengths" },
    })
  );

  return docs;
}
