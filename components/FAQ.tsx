'use client'

import { useState } from 'react'
import { Lang, translations } from '@/lib/translations'

interface Props { lang: Lang }

export default function FAQ({ lang }: Props) {
  const t = translations[lang].faq
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-4">
          <span className="text-white/50 text-xs font-bold tracking-widest uppercase">FAQ</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">{t.title}</h2>
      </div>

      <div className="space-y-3">
        {t.items.map((item, i) => (
          <div
            key={i}
            className={`glass-card rounded-xl border transition-all duration-200 ${
              openIndex === i ? 'border-qpurple/30' : 'border-white/5'
            }`}
          >
            <button
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="text-white font-semibold text-sm sm:text-base">{item.q}</span>
              <span className={`text-qpurple-light flex-shrink-0 text-lg transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            {openIndex === i && (
              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                <p className="text-white/55 text-sm leading-relaxed border-t border-white/5 pt-4">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
