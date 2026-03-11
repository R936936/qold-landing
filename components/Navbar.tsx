'use client'

import { useState, useEffect } from 'react'
import { Lang, translations } from '@/lib/translations'

interface NavbarProps {
  lang: Lang
  setLang: (l: Lang) => void
  onWaitlist: () => void
}

export default function Navbar({ lang, setLang, onWaitlist }: NavbarProps) {
  const t = translations[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { href: '#problem', label: t.about },
    { href: '#tokenomics', label: t.tokenomics },
    { href: '#staking', label: t.staking },
    { href: '#faq', label: t.faq },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-qblack/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-qpurple text-xl font-mono font-bold group-hover:text-qpurple-light transition-colors">⟨ψ⟩</span>
            <span className="font-bold text-xl tracking-wider">
              <span className="gradient-gold">QOLD</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/60 hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 text-xs font-bold">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === 'en' ? 'bg-qpurple text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === 'es' ? 'bg-qpurple text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                ES
              </button>
            </div>

            {/* CTA */}
            <button
              onClick={onWaitlist}
              className="hidden md:block bg-qold hover:bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 gold-glow"
            >
              {t.joinWaitlist}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white/60 hover:text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-3">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white/60 hover:text-white text-sm font-medium py-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onWaitlist() }}
              className="w-full bg-qold text-black text-sm font-bold px-4 py-2.5 rounded-full mt-2"
            >
              {t.joinWaitlist}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
