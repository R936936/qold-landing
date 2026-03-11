import { Lang, translations } from '@/lib/translations'

interface Props { lang: Lang }

export default function Tokenomics({ lang }: Props) {
  const t = translations[lang].tokenomics

  const allocations = [
    { label: t.initialMint, value: t.initialMintVal, pct: 50, color: '#7C3AED' },
    { label: t.futureEmission, value: t.futureEmissionVal, pct: 35, color: '#9F67FF' },
    { label: t.publicSale, value: t.publicSaleVal, pct: 10, color: '#FFD700' },
    { label: t.stakingRewards, value: t.stakingRewardsVal, pct: 5, color: '#FFA500' },
  ]

  return (
    <section id="tokenomics" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-qold/10 border border-qold/20 rounded-full px-4 py-1.5 mb-4">
          <span className="text-qold text-xs font-bold tracking-widest uppercase">Tokenomics</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">{t.title}</h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
        {/* Max supply spotlight */}
        <div className="glass-card rounded-2xl p-8 border border-qold/20 text-center">
          <div className="text-qold/40 text-6xl font-mono mb-4">21M</div>
          <div className="text-white/50 text-sm mb-2">{t.maxSupply}</div>
          <div className="text-4xl font-black gradient-gold">{t.maxSupplyVal}</div>
          <div className="mt-4 text-white/30 text-xs">{t.maxSupplyNote}</div>
        </div>

        {/* Allocation breakdown */}
        <div className="space-y-4">
          {allocations.map((a, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-white/70">{a.label}</span>
                <span className="font-semibold" style={{ color: a.color }}>{a.value}</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${a.pct}%`, background: a.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mechanic cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6 border border-orange-500/20">
          <div className="text-orange-400 text-2xl mb-3">🔥</div>
          <h3 className="text-white font-bold text-lg mb-2">{t.deflatTitle}</h3>
          <p className="text-white/55 text-sm leading-relaxed">{t.deflatDesc}</p>
        </div>
        <div className="glass-card rounded-2xl p-6 border border-qpurple/20">
          <div className="text-qpurple-light text-2xl mb-3">🔐</div>
          <h3 className="text-white font-bold text-lg mb-2">{t.pqcTitle}</h3>
          <p className="text-white/55 text-sm leading-relaxed">{t.pqcDesc}</p>
        </div>
      </div>
    </section>
  )
}
