import { StateGraph, START, END } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";
import { AssistantState, type AssistantStateType } from "./types";
import { getVectorStore } from "./vector-store";
import { buildSystemPrompt } from "./prompts";

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0.7,
});

/** Fast, cheap model for query analysis (no streaming needed) */
const analyzerLlm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
  maxTokens: 200,
});

/**
 * Analyze the user's query to decide:
 * - What search queries to run against the vector store
 * - How many chunks to retrieve (broad vs narrow)
 * - Whether retrieval is needed at all (greetings, etc.)
 */
async function analyzeQuery(
  state: AssistantStateType
): Promise<Partial<AssistantStateType>> {
  const lastMessage = state.messages[state.messages.length - 1];
  const userQuery =
    typeof lastMessage.content === "string"
      ? lastMessage.content
      : JSON.stringify(lastMessage.content);

  // Include recent conversation for context on follow-ups like "tell me more"
  const recentContext = state.messages
    .slice(-4)
    .map((m) => {
      const role = m.getType() === "human" ? "User" : "Assistant";
      const content =
        typeof m.content === "string" ? m.content : JSON.stringify(m.content);
      return `${role}: ${content}`;
    })
    .join("\n");

  const response = await analyzerLlm.invoke([
    new SystemMessage(`You analyze user queries for a portfolio chatbot about Jeswin Arul Samuel (AI Solutions Architect).

Given the user query and recent conversation, respond with EXACTLY this JSON format (no markdown, no explanation):
{
  "searchQueries": ["query1", "query2"],
  "k": <number>,
  "skipRetrieval": <boolean>
}

Rules:
- searchQueries: 1-3 natural-language sentences or questions that will be used for semantic similarity search against a knowledge base of rich prose paragraphs. Write them as full sentences, NOT as keyword fragments. For example, instead of "Amazon experience skills" write "What was Jeswin's role and work at Amazon?". For follow-up questions like "tell me more", use context from the conversation to generate specific queries.
- k: number of chunks to retrieve per query. Use 3-5 for specific questions ("What did he do at Amazon?"), 8-12 for broad/listing questions ("list all projects", "what are his skills", "tell me everything about").
- skipRetrieval: true ONLY for pure greetings/chitchat ("hi", "thanks", "bye") that need zero portfolio knowledge. False for everything else.`),
    new HumanMessage(`Recent conversation:\n${recentContext}\n\nCurrent query: ${userQuery}`),
  ]);

  try {
    const content =
      typeof response.content === "string"
        ? response.content
        : JSON.stringify(response.content);
    const parsed = JSON.parse(content);
    return {
      searchQueries: parsed.searchQueries ?? [userQuery],
      retrievalK: parsed.k ?? 5,
      skipRetrieval: parsed.skipRetrieval ?? false,
    };
  } catch {
    // Fallback: use the raw query
    return {
      searchQueries: [userQuery],
      retrievalK: 5,
      skipRetrieval: false,
    };
  }
}

/**
 * Retrieve node: runs each search query against the vector store,
 * deduplicates, and stores formatted context.
 */
async function retrieve(
  state: AssistantStateType
): Promise<Partial<AssistantStateType>> {
  if (state.skipRetrieval) {
    return { retrievedContext: "" };
  }

  const vectorStore = await getVectorStore();
  const k = state.retrievalK;
  const seen = new Set<string>();
  const allDocs: { pageContent: string; metadata: Record<string, any> }[] = [];

  for (const query of state.searchQueries) {
    const results = await vectorStore.similaritySearch(query, k);
    for (const doc of results) {
      // Deduplicate by content hash
      const key = doc.pageContent.slice(0, 100);
      if (!seen.has(key)) {
        seen.add(key);
        allDocs.push(doc);
      }
    }
  }

  const retrievedContext = allDocs
    .map(
      (doc, i) =>
        `[${i + 1}] (${doc.metadata.category}/${doc.metadata.title})\n${doc.pageContent}`
    )
    .join("\n\n---\n\n");

  return { retrievedContext };
}

/**
 * Generate node: builds the RAG system prompt with retrieved context,
 * invokes the LLM with streaming, and returns the AI message.
 */
async function generate(
  state: AssistantStateType
): Promise<Partial<AssistantStateType>> {
  const systemPrompt = buildSystemPrompt(state.retrievedContext);
  const response = await llm.invoke([
    new SystemMessage(systemPrompt),
    ...state.messages,
  ]);
  return { messages: [response] };
}

/**
 * Build and compile the LangGraph StateGraph.
 * START → analyzeQuery → retrieve → generate → END
 */
function buildGraph() {
  const graph = new StateGraph(AssistantState)
    .addNode("analyzeQuery", analyzeQuery)
    .addNode("retrieve", retrieve)
    .addNode("generate", generate)
    .addEdge(START, "analyzeQuery")
    .addEdge("analyzeQuery", "retrieve")
    .addEdge("retrieve", "generate")
    .addEdge("generate", END);

  return graph.compile();
}

/** Singleton compiled graph */
export const app = buildGraph();
