'use client'

import { useState } from 'react'
import { Lang } from '@/lib/translations'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import Tokenomics from '@/components/Tokenomics'
import StakingTiers from '@/components/StakingTiers'
import TechSection from '@/components/TechSection'
import Roadmap from '@/components/Roadmap'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import EmailModal from '@/components/EmailModal'

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const [modal, setModal] = useState<{ open: boolean; type: 'waitlist' | 'whitepaper' }>({
    open: false,
    type: 'waitlist',
  })

  const openWaitlist = () => setModal({ open: true, type: 'waitlist' })
  const openWhitepaper = () => setModal({ open: true, type: 'whitepaper' })
  const closeModal = () => setModal(m => ({ ...m, open: false }))

  return (
    <main className="bg-qblack min-h-screen">
      <Navbar lang={lang} setLang={setLang} onWaitlist={openWaitlist} />
      <Hero lang={lang} onWaitlist={openWaitlist} onWhitepaper={openWhitepaper} />
      <ProblemSection lang={lang} />
      <SolutionSection lang={lang} />
      <Tokenomics lang={lang} />
      <StakingTiers lang={lang} onWaitlist={openWaitlist} />
      <TechSection lang={lang} />
      <Roadmap lang={lang} />
      <FAQ lang={lang} />
      <Footer lang={lang} />
      <EmailModal
        isOpen={modal.open}
        type={modal.type}
        lang={lang}
        onClose={closeModal}
      />
    </main>
  )
}
