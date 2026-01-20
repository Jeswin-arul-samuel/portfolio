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
          <h2 className="text-lg font-semibold text-accent mt-4 mb-3 first:mt-0" {...props} />
        ),
        h3: ({ node, ...props }: any) => (
          <h3 className="text-base font-semibold text-accent mt-3 mb-2" {...props} />
        ),
        p: ({ node, ...props }: any) => (
          <p className="text-muted mb-3 leading-relaxed" {...props} />
        ),
        ul: ({ node, children, ...props }: any) => (
          <ul className="mb-4" {...props}>
            {children}
          </ul>
        ),
        li: ({ node, children, ...props }: any) => (
          <li className="text-muted mb-3 block">
            <span className="text-accent">• </span>
            <span className="inline">{children}</span>
          </li>
        ),
        strong: ({ node, ...props }: any) => (
          <strong className="font-semibold text-foreground" {...props} />
        ),
        em: ({ node, ...props }: any) => (
          <em className="italic text-muted-foreground" {...props} />
        ),
        code: ({ node, inline, ...props }: any) => {
          if (inline) {
            return <code className="bg-card-bg text-accent px-2 py-1 rounded text-sm font-mono" {...props} />
          }
          return <code className="block bg-card-bg text-muted p-3 rounded text-sm font-mono mb-3 overflow-x-auto" {...props} />
        }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
