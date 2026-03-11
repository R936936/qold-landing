import { Lang, translations } from '@/lib/translations'

interface Props { lang: Lang }

export default function ProblemSection({ lang }: Props) {
  const t = translations[lang].problem

  const cards = [
    {
      icon: '⚠️',
      title: t.card1Title,
      desc: t.card1Desc,
      border: 'border-yellow-500/30',
      glow: 'shadow-yellow-500/10',
      badge: '2027–2032',
      badgeColor: 'bg-yellow-500/20 text-yellow-300',
    },
    {
      icon: '⚡',
      title: t.card2Title,
      desc: t.card2Desc,
      border: 'border-orange-500/30',
      glow: 'shadow-orange-500/10',
      badge: 'Critical',
      badgeColor: 'bg-orange-500/20 text-orange-300',
    },
    {
      icon: '🔒',
      title: t.card3Title,
      desc: t.card3Desc,
      border: 'border-red-500/30',
      glow: 'shadow-red-500/10',
      badge: 'Unsolvable',
      badgeColor: 'bg-red-500/20 text-red-300',
    },
  ]

  return (
    <section id="problem" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-4">
          <span className="text-red-400 text-xs font-bold tracking-widest uppercase">Threat Analysis</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          {t.title}
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`glass-card rounded-2xl p-7 border ${card.border} shadow-xl ${card.glow} hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className="text-3xl mb-4">{card.icon}</div>
            <div className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-3 ${card.badgeColor}`}>
              {card.badge}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
