import { Lang, translations } from '@/lib/translations'

interface Props { lang: Lang }

export default function Roadmap({ lang }: Props) {
  const t = translations[lang].roadmap

  const statusStyles: Record<string, { dot: string; border: string; badge: string; badgeText: string }> = {
    completed: { dot: 'bg-green-400', border: 'border-green-500/30', badge: 'bg-green-500/20', badgeText: 'text-green-400' },
    active: { dot: 'bg-qold animate-pulse', border: 'border-qold/40', badge: 'bg-qold/20', badgeText: 'text-qold' },
    upcoming: { dot: 'bg-qpurple-light', border: 'border-qpurple/30', badge: 'bg-qpurple/20', badgeText: 'text-qpurple-light' },
    future: { dot: 'bg-white/20', border: 'border-white/10', badge: 'bg-white/5', badgeText: 'text-white/40' },
  }

  const statusLabels: Record<string, Record<string, string>> = {
    en: { completed: 'Complete', active: 'In Progress', upcoming: 'Upcoming', future: 'Future' },
    es: { completed: 'Completado', active: 'En Progreso', upcoming: 'Próximamente', future: 'Futuro' },
  }

  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-qold/10 border border-qold/20 rounded-full px-4 py-1.5 mb-4">
          <span className="text-qold text-xs font-bold tracking-widest uppercase">Roadmap</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">{t.title}</h2>
        <p className="text-white/50 text-lg">{t.subtitle}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.phases.map((phase, i) => {
          const s = statusStyles[phase.status]
          const label = statusLabels[lang][phase.status]
          return (
            <div key={i} className={`glass-card rounded-2xl p-6 border ${s.border} relative`}>
              <div className={`inline-flex items-center gap-2 text-xs font-bold px-2.5 py-1 rounded-full mb-4 ${s.badge} ${s.badgeText}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                {label}
              </div>
              <div className="text-white/30 text-xs font-mono mb-1">{phase.period}</div>
              <div className="text-white font-bold text-lg mb-4">{phase.phase}</div>
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="text-white/55 text-sm flex items-start gap-2">
                    <span className="text-qpurple-light mt-0.5 flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Step number */}
              <div className="absolute top-4 right-5 text-white/5 text-5xl font-black">0{i + 1}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
