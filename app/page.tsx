'use client'

import { useState } from 'react'
import { LandingHero } from '@/components/landing-hero'
import { CalorieCalculator } from '@/components/calorie-calculator'
import { Bolt, BookOpen, Calculator, Sparkles } from 'lucide-react'

export default function Page() {
  const [currentView, setCurrentView] = useState<'landing' | 'calculator'>('landing')

  return (
    <main className="cyber-grid-bg relative min-h-screen flex flex-col items-center overflow-x-hidden">
      <div className="scanlines" />

      {/* Cyberpunk Top Header Nav */}
      <header className="sticky top-0 z-40 w-full bg-[#131315]/85 backdrop-blur-xl border-b border-[#39393b] h-16 px-4 md:px-8 flex items-center justify-between shadow-lg shadow-black/50">
        <button
          type="button"
          onClick={() => setCurrentView('landing')}
          className="flex items-center gap-2 text-left group"
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#39ff14]/15 border border-[#39ff14]/40 text-[#39ff14] group-hover:bg-[#39ff14] group-hover:text-[#003900] transition-all">
            <Bolt className="size-4" />
          </span>
          <div>
            <span className="font-display font-black text-sm md:text-base tracking-tighter text-[#39ff14] glow-text-primary">
              DAEUN VITALITY
            </span>
            <span className="hidden sm:inline-block ml-2 font-mono text-[9px] text-[#cac4cf]/60">
              v4.2 CORE
            </span>
          </div>
        </button>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-[#0e0e10] p-1 rounded-2xl border border-[#39393b]">
          <button
            type="button"
            onClick={() => setCurrentView('landing')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentView === 'landing'
                ? 'bg-[#39ff14] text-[#003900] neon-glow-primary'
                : 'text-[#cac4cf] hover:text-[#e6e1e5]'
            }`}
          >
            <BookOpen className="size-3.5" />
            <span>서비스 소개</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentView('calculator')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentView === 'calculator'
                ? 'bg-[#39ff14] text-[#003900] neon-glow-primary'
                : 'text-[#cac4cf] hover:text-[#e6e1e5]'
            }`}
          >
            <Calculator className="size-3.5" />
            <span>계산기 가동</span>
          </button>
        </div>
      </header>

      {/* Main View Area */}
      <div className="w-full flex-1 flex flex-col items-center justify-center relative z-10 py-6 px-4">
        {currentView === 'landing' ? (
          <LandingHero onStartCalculator={() => setCurrentView('calculator')} />
        ) : (
          <div className="w-full flex flex-col items-center duration-500 animate-in fade-in zoom-in-95">
            {/* Back to landing link */}
            <button
              type="button"
              onClick={() => setCurrentView('landing')}
              className="mb-4 text-xs font-mono text-[#00f3ff] hover:underline flex items-center gap-1"
            >
              ← PROTOCOL OVERVIEW (서비스 설명으로 돌아가기)
            </button>
            <CalorieCalculator />
          </div>
        )}
      </div>

      {/* High Tech Cyber Footer */}
      <footer className="w-full py-6 bg-[#0a0a0c] border-t border-[#39393b]/60 flex flex-col sm:flex-row justify-between items-center px-6 md:px-12 max-w-6xl mx-auto text-[11px] font-mono text-[#cac4cf]/60 relative z-20 gap-2">
        <div className="text-[#39ff14] font-bold">
          © 2026 DAEUN VITALITY // NEURAL CORE v4.2
        </div>
        <div className="flex gap-6">
          <button type="button" onClick={() => setCurrentView('landing')} className="hover:text-[#00f3ff]">PROTOCOL</button>
          <button type="button" onClick={() => setCurrentView('calculator')} className="hover:text-[#39ff14]">CALCULATOR ENGINE</button>
        </div>
      </footer>
    </main>
  )
}
