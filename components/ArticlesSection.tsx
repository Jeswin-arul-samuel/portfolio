'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowLeft, Clock, Calendar, ChevronRight } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Article {
  slug: string
  title: string
  subtitle: string
  date: string
  readTime: string
  tags: string[]
  file: string
}

const articles: Article[] = [
  {
    slug: 'the-app-grid-is-dead',
    title: 'The App Grid is Dead',
    subtitle: 'We Just Haven\'t Buried It Yet',
    date: 'April 2026',
    readTime: '12 min read',
    tags: ['Agentic AI', 'Product Vision', 'Mobile OS', 'Future of Computing'],
    file: '/articles/article-01-the-app-grid-is-dead.md',
  },
]

// ═══════════════════════════════════════════════════════════════════
// ARTICLE LIST — card grid
// ═══════════════════════════════════════════════════════════════════

function ArticleList({ onSelect }: { onSelect: (article: Article) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-2">Articles</h2>
          <p className="text-sm text-muted">Thoughts on AI, technology, and where things are heading</p>
        </div>

        <div className="space-y-4">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              onClick={() => onSelect(article)}
              className="card cursor-pointer group hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent/70">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors mb-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted mb-3">{article.subtitle}</p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted/60">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                  </div>
                </div>

                <div className="flex-shrink-0 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={20} className="text-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// ARTICLE READER — clean reading experience
// ═══════════════════════════════════════════════════════════════════

function ArticleReader({ article, onBack }: { article: Article; onBack: () => void }) {
  const [content, setContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(article.file)
      .then((res) => res.text())
      .then((text) => {
        // Strip the title line and author line since we render them separately
        const lines = text.split('\n')
        const startIndex = lines.findIndex((l, i) => i > 0 && l.startsWith('---'))
        const cleaned = startIndex > 0 ? lines.slice(startIndex + 1).join('\n').trim() : text
        setContent(cleaned)
        setLoading(false)
      })
      .catch(() => {
        setContent('Failed to load article.')
        setLoading(false)
      })
  }, [article.file])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Back to articles
      </button>

      {/* Article header */}
      <div className="mb-8 pb-8 border-b border-card-border">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {article.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent/70">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
          {article.title}
        </h1>
        <p className="text-lg text-muted mb-4">{article.subtitle}</p>
        <div className="flex items-center gap-4 text-xs text-muted/60">
          <span>By Jeswin Arul Samuel</span>
          <span>&middot;</span>
          <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
          <span>&middot;</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
        </div>
      </div>

      {/* Article body */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      ) : (
        <div className="article-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className="text-xl font-bold text-white mt-10 mb-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base font-bold text-white mt-8 mb-3">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-sm text-muted leading-relaxed mb-4">{children}</p>
              ),
              strong: ({ children }) => (
                <strong className="text-white font-semibold">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="text-accent/80">{children}</em>
              ),
              hr: () => (
                <hr className="border-card-border my-8" />
              ),
              ul: ({ children }) => (
                <ul className="space-y-2 mb-4 pl-4">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="text-sm text-muted leading-relaxed flex items-start gap-2">
                  <span className="text-accent mt-1 flex-shrink-0">-</span>
                  <span>{children}</span>
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-accent/30 pl-4 my-6 text-sm text-muted/80 italic">
                  {children}
                </blockquote>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-xs border-collapse">{children}</table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="border-b border-card-border">{children}</thead>
              ),
              th: ({ children }) => (
                <th className="text-left py-2 px-3 text-accent font-semibold">{children}</th>
              ),
              td: ({ children }) => (
                <td className="py-2 px-3 text-muted border-b border-card-border/30">{children}</td>
              ),
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:brightness-125 transition-colors">
                  {children}
                </a>
              ),
            }}
          >
            {content || ''}
          </ReactMarkdown>
        </div>
      )}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════

export default function ArticlesSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  return (
    <section id="articles" className="py-8">
      <AnimatePresence mode="wait">
        {selectedArticle ? (
          <ArticleReader
            key="reader"
            article={selectedArticle}
            onBack={() => setSelectedArticle(null)}
          />
        ) : (
          <ArticleList
            key="list"
            onSelect={setSelectedArticle}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
