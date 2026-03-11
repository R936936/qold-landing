'use client'

import { useState, useEffect } from 'react'
import { translations, Lang } from '@/lib/translations'

interface EmailModalProps {
  isOpen: boolean
  type: 'waitlist' | 'whitepaper'
  lang: Lang
  onClose: () => void
}

export default function EmailModal({ isOpen, type, lang, onClose }: EmailModalProps) {
  const t = translations[lang].modal
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const stored = localStorage.getItem(`qold-${type}-email`)
      if (stored) {
        setSubmitted(true)
      }
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 300)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, type])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setIsLoading(true)
    setTimeout(() => {
      localStorage.setItem(`qold-${type}-email`, email)
      setIsLoading(false)
      setSubmitted(true)
    }, 800)
  }

  if (!isOpen) return null

  const title = type === 'waitlist' ? t.waitlistTitle : t.whitepaperTitle
  const desc = type === 'waitlist' ? t.waitlistDesc : t.whitepaperDesc
  const btnLabel = type === 'waitlist' ? t.submitWaitlist : t.submitWhitepaper

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative glass-card rounded-2xl p-8 max-w-md w-full border border-qpurple/30 shadow-2xl shadow-qpurple/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors text-xl"
          aria-label={t.close}
        >
          ×
        </button>

        <div className="mb-6">
          <div className="text-2xl mb-2">
            {type === 'waitlist' ? '⟨ψ⟩' : '📄'}
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-white/60 text-sm">{desc}</p>
        </div>

        {submitted ? (
          <div className="text-center py-6">
            <div className="text-4xl mb-4">✓</div>
            <p className="text-qold font-semibold text-lg">{t.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-qold/50 focus:ring-1 focus:ring-qold/30 transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-qold hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed gold-glow"
            >
              {isLoading ? '...' : btnLabel}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
