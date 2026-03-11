import { Lang, translations } from '@/lib/translations'

interface Props { lang: Lang; onWaitlist: () => void }

export default function StakingTiers({ lang, onWaitlist }: Props) {
  const t = translations[lang].staking

  const tierStyles = [
    { border: 'border-amber-700/30', bg: 'from-amber-900/10 to-transparent', badge: 'bg-amber-700/30 text-amber-400', apy: 'text-amber-400' },
    { border: 'border-slate-400/30', bg: 'from-slate-700/10 to-transparent', badge: 'bg-slate-700/30 text-slate-300', apy: 'text-slate-300' },
    { border: 'border-qold/40', bg: 'from-yellow-900/15 to-transparent', badge: 'bg-qold/20 text-qold', apy: 'text-qold' },
    { border: 'border-qpurple/40', bg: 'from-qpurple/15 to-transparent', badge: 'bg-qpurple/30 text-qpurple-light', apy: 'text-qpurple-light', featured: true },
  ]

  return (
    <section id="staking" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-qpurple/20 border border-qpurple/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-qpurple-light text-xs font-bold tracking-widest uppercase">Staking</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">{t.title}</h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {t.tiers.map((tier, i) => {
          const style = tierStyles[i]
          return (
            <div
              key={i}
              className={`glass-card rounded-2xl border ${style.border} bg-gradient-to-b ${style.bg} p-6 flex flex-col ${style.featured ? 'ring-1 ring-qpurple/40 shadow-lg shadow-qpurple/20 scale-[1.02]' : ''} transition-transform hover:scale-[1.03]`}
            >
              <div className={`inline-block self-start text-xs font-bold px-2.5 py-1 rounded-full mb-4 ${style.badge}`}>
                {tier.label}
              </div>
              <div className="text-white font-bold text-lg mb-1">{tier.tier}</div>
              <div className="text-white/40 text-xs mb-4">{t.lockPeriod}: {tier.lock}</div>
              <div className={`text-5xl font-black mb-1 ${style.apy}`}>{tier.apy}</div>
              <div className="text-white/30 text-xs mb-6">APY</div>
              <button
                onClick={onWaitlist}
                className={`mt-auto w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  style.featured
                    ? 'bg-qpurple hover:bg-qpurple-light text-white'
                    : 'border border-white/10 hover:border-white/30 text-white/70 hover:text-white'
                }`}
              >
                {t.stakeBtnLabel}
              </button>
            </div>
          )
        })}
      </div>

      <p className="text-center text-white/30 text-sm mt-8 italic">{t.note}</p>
    </section>
  )
}
