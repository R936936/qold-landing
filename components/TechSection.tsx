import { Lang, translations } from '@/lib/translations'

interface Props { lang: Lang }

export default function TechSection({ lang }: Props) {
  const t = translations[lang].tech

  const cards = [
    { icon: '🔐', title: t.card1Title, desc: t.card1Desc, border: 'border-qpurple/30', glow: 'shadow-qpurple/10' },
    { icon: '⚡', title: t.card2Title, desc: t.card2Desc, border: 'border-orange-500/30', glow: 'shadow-orange-500/10' },
    { icon: '🏛️', title: t.card3Title, desc: t.card3Desc, border: 'border-qold/30', glow: 'shadow-qold/10' },
  ]

  return (
    <section id="tech" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-qpurple/20 border border-qpurple/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-qpurple-light text-xs font-bold tracking-widest uppercase">Technology</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">{t.title}</h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`glass-card rounded-2xl p-8 border ${card.border} shadow-xl ${card.glow} hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className="text-4xl mb-5">{card.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono">{card.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Tech badge strip */}
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {['NIST FIPS 204', 'CRYSTALS-Dilithium-3', 'Lattice Cryptography', 'ERC-20 Compatible', 'Sepolia Testnet'].map(badge => (
          <span key={badge} className="bg-white/5 border border-white/10 text-white/50 text-xs font-mono px-3 py-1.5 rounded-full">
            {badge}
          </span>
        ))}
      </div>
    </section>
  )
}
