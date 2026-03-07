'use client'

import ReactMarkdown from 'react-markdown'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  return (
    <div className={className}>
      <ReactMarkdown
        components={{
        h2: ({ node, ...props }: any) => (
          <span className="block text-sm font-semibold text-accent mt-2 mb-1 first:mt-0" {...props} />
        ),
        h3: ({ node, ...props }: any) => (
          <span className="block text-sm font-semibold text-accent mt-2 mb-1" {...props} />
        ),
        p: ({ node, ...props }: any) => (
          <span className="block mb-1.5 last:mb-0 leading-relaxed" {...props} />
        ),
        ul: ({ node, children, ...props }: any) => (
          <span className="block mb-1.5 last:mb-0" {...props}>
            {children}
          </span>
        ),
        ol: ({ node, children, ...props }: any) => (
          <span className="block mb-1.5 last:mb-0" {...props}>
            {children}
          </span>
        ),
        li: ({ node, children, ...props }: any) => (
          <span className="block mb-1 last:mb-0">{children}</span>
        ),
        strong: ({ node, ...props }: any) => (
          <strong className="font-semibold text-white" {...props} />
        ),
        em: ({ node, ...props }: any) => (
          <em className="italic opacity-80" {...props} />
        ),
        code: ({ node, inline, ...props }: any) => {
          if (inline) {
            return <code className="bg-card-bg text-accent px-1 py-0.5 rounded text-xs font-mono" {...props} />
          }
          return <code className="block bg-card-bg text-muted p-2 rounded text-xs font-mono mb-1.5 overflow-x-auto" {...props} />
        }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
