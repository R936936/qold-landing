'use client'

import { useEffect, useRef } from 'react'
import { Lang, translations } from '@/lib/translations'

interface HeroProps {
  lang: Lang
  onWaitlist: () => void
  onWhitepaper: () => void
}

export default function Hero({ lang, onWaitlist, onWhitepaper }: HeroProps) {
  const t = translations[lang].hero
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = canvasRef.current
    if (!container) return
    const particles: HTMLDivElement[] = []
    const count = 30

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div')
      const size = Math.random() * 4 + 1
      const isGold = Math.random() > 0.5
      p.className = 'particle'
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        background: ${isGold ? 'rgba(255,215,0,0.6)' : 'rgba(124,58,237,0.6)'};
        animation-duration: ${Math.random() * 15 + 10}s;
        animation-delay: ${Math.random() * 10}s;
      `
      container.appendChild(p)
      particles.push(p)
    }

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  const stats = [t.stat1, t.stat2, t.stat3, t.stat4]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-8 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 quantum-grid opacity-60" />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
      />

      {/* Floating particles container */}
      <div ref={canvasRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-qpurple/20 border border-qpurple/40 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-qpurple animate-pulse" />
          <span className="text-qpurple-light text-xs font-bold tracking-widest">{t.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="block text-white">{lang === 'en' ? 'Digital Gold.' : 'El Oro Digital.'}</span>
          <span className="block gradient-gold gold-text-glow mt-1">
            {lang === 'en' ? 'Reimagined for the' : 'Reinventado para la'}
          </span>
          <span className="block text-white mt-1">
            {lang === 'en' ? 'Quantum Era.' : 'Era Cuántica.'}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <button
            onClick={onWaitlist}
            className="bg-qold hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full text-base transition-all duration-200 gold-glow hover:scale-105"
          >
            {t.joinWaitlist} →
          </button>
          <button
            onClick={onWhitepaper}
            className="border border-white/20 hover:border-qold/50 text-white hover:text-qold font-semibold px-8 py-4 rounded-full text-base transition-all duration-200"
          >
            {t.readWhitepaper}
          </button>
        </div>

        {/* Stats bar */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-sm sm:text-base font-bold ${i % 2 === 0 ? 'text-qold' : 'text-qpurple-light'}`}>
                {stat}
              </div>
            </div>
          ))}
        </div>

        {/* Quantum symbol */}
        <div className="mt-12 text-qpurple/30 text-6xl font-mono select-none animate-pulse">
          ⟨ψ⟩
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/30" />
        <div className="w-1 h-1 rounded-full bg-white/30" />
      </div>
    </section>
  )
}
