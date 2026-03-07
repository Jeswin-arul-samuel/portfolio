import { NextRequest, NextResponse } from 'next/server'
import { HumanMessage, AIMessage } from '@langchain/core/messages'
import { app } from '@/lib/rag/graph'

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    // Convert plain messages to LangChain message objects
    const langchainMessages = messages.map(
      (m: { role: string; content: string }) =>
        m.role === 'user'
          ? new HumanMessage(m.content)
          : new AIMessage(m.content)
    )

    // Stream the response via LangGraph streamEvents
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const eventStream = app.streamEvents(
            { messages: langchainMessages },
            { version: 'v2' }
          )

          for await (const event of eventStream) {
            if (
              event.event === 'on_chat_model_stream' &&
              event.metadata?.langgraph_node === 'generate'
            ) {
              const token = event.data?.chunk?.content
              if (typeof token === 'string' && token) {
                controller.enqueue(encoder.encode(token))
              }
            }
          }

          controller.close()
        } catch (err) {
          console.error('Stream error:', err)
          controller.error(err)
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
}
