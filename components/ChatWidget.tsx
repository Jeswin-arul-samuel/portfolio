'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, MessageCircle } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatWidgetProps {
  hideOnMobileMenuOpen?: boolean
}

export default function ChatWidget({ hideOnMobileMenuOpen = false }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [keyboardHeight, setKeyboardHeight] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Small delay to let the chat open first
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Detect keyboard height using visualViewport
  useEffect(() => {
    const handleViewportChange = () => {
      if (window.visualViewport) {
        // Keyboard height = difference between window height and visible viewport
        const keyboardH = window.innerHeight - window.visualViewport.height - window.visualViewport.offsetTop
        setKeyboardHeight(keyboardH > 100 ? keyboardH : 0)
      }
    }

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange)
      window.visualViewport.addEventListener('scroll', handleViewportChange)
      handleViewportChange()
      return () => {
        window.visualViewport?.removeEventListener('resize', handleViewportChange)
        window.visualViewport?.removeEventListener('scroll', handleViewportChange)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input.trim() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('No reader available')

      const decoder = new TextDecoder()
      let assistantMessage = ''

      setMessages(prev => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const text = decoder.decode(value)
        assistantMessage += text

        setMessages(prev => {
          const newMessages = [...prev]
          newMessages[newMessages.length - 1] = {
            role: 'assistant',
            content: assistantMessage,
          }
          return newMessages
        })
      }
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  if (hideOnMobileMenuOpen) {
    return null
  }

  const isMobileKeyboardOpen = keyboardHeight > 50

  return (
    <>
      {/* Backdrop blur when chat is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main container - positions at bottom, adjusts for keyboard */}
      <div
        className="fixed right-0 z-40 flex items-end"
        style={{
          bottom: keyboardHeight + 20,
          transform: 'translateZ(0)',
        }}
      >
        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-card-bg border border-card-border shadow-2xl overflow-hidden rounded-2xl rounded-br-none w-[calc(100vw-135px)] sm:w-80 lg:w-96 max-w-[400px] mr-1"
              style={{
                maxHeight: keyboardHeight > 0
                  ? `calc(100vh - ${keyboardHeight + 160}px)`
                  : undefined,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-2 lg:p-4 border-b border-card-border bg-gradient-to-r from-accent/10 to-accent-dark/10">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-accent/30">
                    <Image
                      src="/jeswin_profile.png"
                      alt="Jeswin"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[10px] lg:text-sm">Chat with Jeswin's AI</h3>
                    <p className="text-[8px] lg:text-xs text-muted hidden sm:block">Ask about my experience</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 lg:p-2 hover:bg-card-border/50 rounded-lg transition-colors"
                >
                  <X size={14} className="lg:w-[18px] lg:h-[18px]" />
                </button>
              </div>

              {/* Messages */}
              <div className="overflow-y-auto p-2 lg:p-4 space-y-2 lg:space-y-4 h-60 lg:h-80 flex-1">
                {messages.length === 0 && (
                  <div className="text-center text-muted text-xs lg:text-sm py-4 lg:py-8">
                    <MessageCircle size={28} className="mx-auto mb-2 lg:mb-3 opacity-50 lg:w-8 lg:h-8" />
                    <p>Hi! Ask me anything about Jeswin's</p>
                    <p>skills, experience, or projects.</p>
                    <div className="mt-3 lg:mt-4 space-y-2">
                      <button
                        onClick={() => setInput('What are Jeswin\'s key skills?')}
                        className="block w-full text-left px-2 lg:px-3 py-1.5 lg:py-2 bg-card-border/30 hover:bg-card-border/50 rounded-lg text-[10px] lg:text-xs transition-colors"
                      >
                        What are Jeswin's key skills?
                      </button>
                      <button
                        onClick={() => setInput('Tell me about his AI projects')}
                        className="block w-full text-left px-2 lg:px-3 py-1.5 lg:py-2 bg-card-border/30 hover:bg-card-border/50 rounded-lg text-[10px] lg:text-xs transition-colors"
                      >
                        Tell me about his AI projects
                      </button>
                      <button
                        onClick={() => setInput('Would he be a good fit for a Senior AI Engineer role?')}
                        className="block w-full text-left px-2 lg:px-3 py-1.5 lg:py-2 bg-card-border/30 hover:bg-card-border/50 rounded-lg text-[10px] lg:text-xs transition-colors"
                      >
                        Would he be a good fit for a Senior AI Engineer role?
                      </button>
                    </div>
                  </div>
                )}

                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-2 lg:px-4 py-1 lg:py-2 rounded-2xl text-[10px] lg:text-sm ${
                        message.role === 'user'
                          ? 'bg-accent text-white rounded-br-md'
                          : 'bg-card-border/50 rounded-bl-md'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}

                {isLoading && messages[messages.length - 1]?.role === 'user' && (
                  <div className="flex justify-start">
                    <div className="bg-card-border/50 px-2 lg:px-4 py-1 lg:py-2 rounded-2xl rounded-bl-md">
                      <div className="flex gap-1">
                        <span className="w-1 h-1 lg:w-2 lg:h-2 bg-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1 h-1 lg:w-2 lg:h-2 bg-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1 h-1 lg:w-2 lg:h-2 bg-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-2 lg:p-4 border-t border-card-border">
                <div className="flex gap-1 lg:gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1 px-2 lg:px-4 py-1 lg:py-2 bg-background border border-card-border rounded-lg lg:rounded-xl text-[10px] lg:text-sm focus:outline-none focus:border-accent/50 transition-colors"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="p-1 lg:p-2 bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg lg:rounded-xl transition-colors"
                  >
                    <Send size={14} className="lg:w-[18px] lg:h-[18px]" />
                  </button>
                </div>
              </form>

              {/* Tail pointing to avatar - hide on mobile keyboard */}
              {!isMobileKeyboardOpen && (
                <>
                  <div className="absolute -right-3 bottom-4 w-0 h-0 border-l-[12px] border-l-card-bg border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
                  <div className="absolute -right-[14px] bottom-4 w-0 h-0 border-l-[12px] border-l-card-border border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" style={{ zIndex: -1 }} />
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Avatar with Speech Bubble */}
        <div className="relative">
          {/* Speech bubble with "..." - Only show when chat is closed */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute -left-1 lg:left-4 top-[35px] lg:top-24 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <div className="relative bg-white text-gray-800 px-2 py-1 lg:px-4 lg:py-2 rounded-lg lg:rounded-xl shadow-lg">
                  <div className="flex gap-0.5 lg:gap-1 items-center">
                    <span className="w-1 h-1 lg:w-2.5 lg:h-2.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1 h-1 lg:w-2.5 lg:h-2.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1 h-1 lg:w-2.5 lg:h-2.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <div className="absolute -right-1.5 lg:-right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] lg:border-l-[10px] border-l-white border-t-[4px] lg:border-t-[6px] border-t-transparent border-b-[4px] lg:border-b-[6px] border-b-transparent" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Avatar Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-32 h-32 lg:w-80 lg:h-80 -mr-4 lg:-mr-10 drop-shadow-2xl transform-gpu cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src="/jeswin_profile.png"
              alt="Chat with Jeswin's AI"
              width={320}
              height={320}
              className="w-full h-full object-contain"
            />
          </motion.button>
        </div>
      </div>
    </>
  )
}
