import { Lang, translations } from '@/lib/translations'

interface Props { lang: Lang }

export default function SolutionSection({ lang }: Props) {
  const t = translations[lang].solution

  return (
    <section id="solution" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-qpurple/20 border border-qpurple/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-qpurple-light text-xs font-bold tracking-widest uppercase">The Solution</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">{t.title}</h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Comparison table */}
      <div className="glass-card rounded-2xl border border-white/8 overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-3 bg-white/5 border-b border-white/8">
          <div className="p-4 sm:p-6 text-white/50 text-sm font-semibold">{t.featureCol}</div>
          <div className="p-4 sm:p-6 text-center border-l border-white/8">
            <div className="text-orange-400 font-bold text-sm sm:text-base">₿ {t.bitcoinCol}</div>
          </div>
          <div className="p-4 sm:p-6 text-center border-l border-white/8">
            <div className="text-qold font-bold text-sm sm:text-base">⟨ψ⟩ {t.qoldCol}</div>
          </div>
        </div>

        {/* Rows */}
        {t.rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 border-b border-white/5 last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}
          >
            <div className="p-4 sm:p-5 text-white/70 text-sm font-medium">{row[0]}</div>
            <div className="p-4 sm:p-5 text-center border-l border-white/5">
              <span className={`text-sm ${row[1].includes('✗') ? 'text-red-400' : 'text-white/60'}`}>{row[1]}</span>
            </div>
            <div className="p-4 sm:p-5 text-center border-l border-white/5">
              <span className={`text-sm font-semibold ${row[2].includes('✓') ? 'text-qold' : 'text-white/80'}`}>{row[2]}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tagline */}
      <div className="text-center mt-12">
        <p className="text-xl sm:text-2xl font-bold gradient-purple-gold">{t.tagline}</p>
      </div>
    </section>
  )
}
