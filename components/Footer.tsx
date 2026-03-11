import { Lang, translations } from '@/lib/translations'

interface Props { lang: Lang }

export default function Footer({ lang }: Props) {
  const t = translations[lang].footer

  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-qpurple text-xl font-mono">⟨ψ⟩</span>
            <span className="font-bold text-xl gradient-gold">QOLD</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            {[
              { label: t.privacy, href: '#' },
              { label: t.terms, href: '#' },
              { label: t.whitepaper, href: '#' },
              { label: t.github, href: '#' },
            ].map(link => (
              <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="glass-card rounded-xl p-4 border border-yellow-500/10 mb-6">
          <p className="text-yellow-500/60 text-xs text-center leading-relaxed">
            ⚠️ {t.disclaimer}
          </p>
        </div>

        {/* Bottom */}
        <p className="text-center text-white/20 text-xs">
          © {new Date().getFullYear()} QOLD. {t.rights}
        </p>
      </div>
    </footer>
  )
}
