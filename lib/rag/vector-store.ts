import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";
import { buildDocuments } from "./knowledge-base";

let store: MemoryVectorStore | null = null;
let initPromise: Promise<MemoryVectorStore> | null = null;

/**
 * Returns a singleton MemoryVectorStore, lazily initialized on first call.
 * Safe for serverless: re-indexes on cold start (~1-3s, ~50-80 chunks).
 */
export async function getVectorStore(): Promise<MemoryVectorStore> {
  if (store) return store;

  // Avoid duplicate initialization in concurrent requests
  if (!initPromise) {
    initPromise = (async () => {
      const embeddings = new OpenAIEmbeddings({
        model: "text-embedding-3-small",
      });

      const docs = buildDocuments();
      const vs = await MemoryVectorStore.fromDocuments(docs, embeddings);
      store = vs;
      return vs;
    })();
  }

  return initPromise;
}
