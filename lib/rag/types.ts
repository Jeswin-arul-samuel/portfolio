import { Annotation, MessagesAnnotation } from "@langchain/langgraph";

/**
 * LangGraph state for the portfolio assistant.
 * Extends MessagesAnnotation (conversation history) with query analysis and retrieved context.
 */
export const AssistantState = Annotation.Root({
  ...MessagesAnnotation.spec,
  /** Optimised search queries produced by the analyzeQuery node */
  searchQueries: Annotation<string[]>({
    reducer: (_prev, next) => next,
    default: () => [],
  }),
  /** How many chunks to retrieve (set by analyzeQuery) */
  retrievalK: Annotation<number>({
    reducer: (_prev, next) => next,
    default: () => 5,
  }),
  /** Whether to skip retrieval (e.g. for greetings) */
  skipRetrieval: Annotation<boolean>({
    reducer: (_prev, next) => next,
    default: () => false,
  }),
  /** Formatted context from the vector store */
  retrievedContext: Annotation<string>({
    reducer: (_prev, next) => next,
    default: () => "",
  }),
});

export type AssistantStateType = typeof AssistantState.State;
