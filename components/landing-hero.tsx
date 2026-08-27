'use client'

import { Activity, Bolt, Bot, ChevronRight, Dumbbell, Flame, HeartPulse, ShieldCheck, Sparkles, Target, Trophy, Utensils, Zap } from 'lucide-react'

type Props = {
  onStartCalculator: () => void
}

export function LandingHero({ onStartCalculator }: Props) {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8 md:py-14 text-[#e6e1e5] z-10 flex flex-col items-center">
      {/* Top Cyber Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#39ff14]/40 bg-[#39ff14]/10 px-4 py-1.5 text-xs font-bold text-[#39ff14] tracking-widest uppercase shadow-[0_0_15px_rgba(57,255,20,0.2)]">
        <Sparkles className="size-3.5 text-[#39ff14] animate-pulse" />
        <span>DAEUN VITALITY // NEURAL CORE v4.2 PROTOCOL</span>
      </div>

      {/* Main Logo Hexagon */}
      <div className="mb-8 relative size-28 md:size-32 flex items-center justify-center glow-box-primary rounded-full bg-[#201f21]/80 p-5 border border-[#39ff14]/50 backdrop-blur-md">
        <Flame className="size-16 text-[#39ff14] drop-shadow-[0_0_15px_rgba(57,255,20,0.9)] animate-pulse" />
        <div className="absolute -top-2 -right-2 bg-[#0e0e10] border border-[#00f3ff]/50 px-2 py-0.5 text-[9px] font-mono text-[#00f3ff]">
          ONLINE
        </div>
      </div>

      {/* Hero Headline */}
      <div className="text-center mb-10 space-y-2 max-w-3xl">
        <h1 className="font-display font-black tracking-tighter leading-none">
          <span className="block text-7xl md:text-9xl text-[#39ff14] glow-text-primary">다은</span>
        </h1>
        <p className="font-mono text-xs md:text-sm text-[#00f3ff]/80 tracking-[0.25em] uppercase pt-2">
          CALORIE &amp; WORKOUT ENGINE
        </p>
        <p className="text-xs text-[#cac4cf]/60 max-w-xl mx-auto leading-relaxed pt-3">
          자연어 AI 파싱 · 12종 맞춤 운동 · 목표 체중 감량 소모량
        </p>
      </div>

      {/* Primary CTA Area */}
      <div className="w-full max-w-md mb-16 space-y-3">
        <button
          onClick={onStartCalculator}
          className="w-full bg-[#39ff14] text-[#003900] font-display font-black text-lg py-5 px-8 bevel-clip neon-glow-primary transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] hover:bg-[#43ff20] flex items-center justify-center gap-3 group"
        >
          <Bolt className="size-6 text-[#003900] group-hover:rotate-12 transition-transform" />
          <span>LAUNCH CALCULATOR ENGINE</span>
          <ChevronRight className="size-5 text-[#003900] group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-center text-[11px] font-mono text-[#cac4cf]/60">
          * 무설치 웹 즉시 가동 프로토콜 · Gemini AI 영양 분석 리포트 제공
        </p>
      </div>

      {/* Core Features Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
        {/* Feature 1 */}
        <div className="glass-panel bevel-clip p-5 border border-[#39ff14]/30 transition-all hover:border-[#39ff14] hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] group">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#39ff14]/15 border border-[#39ff14]/40 text-[#39ff14]">
              <Bot className="size-5" />
            </span>
            <h3 className="font-display font-bold text-base text-[#e6e1e5]">AI 자연어 식단 파싱 Engine</h3>
          </div>
          <p className="text-xs text-[#cac4cf] leading-relaxed">
            "삼겹살 2인분, 소주 1병"처럼 자유롭게 입력하면 Gemini AI가 수량, 칼로리, 영양소 밸런스를 정밀 추정합니다.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="glass-panel bevel-clip p-5 border border-[#00f3ff]/30 transition-all hover:border-[#00f3ff] hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] group">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#00f3ff]/15 border border-[#00f3ff]/40 text-[#00f3ff]">
              <Utensils className="size-5" />
            </span>
            <h3 className="font-display font-bold text-base text-[#e6e1e5]">10여개 프랜차이즈 브랜드 DB</h3>
          </div>
          <p className="text-xs text-[#cac4cf] leading-relaxed">
            60계치킨, BHC, 맘스터치, 맥도날드 등 공식 칼로리 매칭 및 약어("맘스", "60계") 지능형 자동 탐색.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="glass-panel bevel-clip p-5 border border-[#00f3ff]/30 transition-all hover:border-[#00f3ff] hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] group">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#00f3ff]/15 border border-[#00f3ff]/40 text-[#00f3ff]">
              <Activity className="size-5" />
            </span>
            <h3 className="font-display font-bold text-base text-[#e6e1e5]">12종 맞춤 소모 운동 가이드</h3>
          </div>
          <p className="text-xs text-[#cac4cf] leading-relaxed">
            걷기, 러닝, 자전거부터 등산, 배드민턴, 테니스, 복싱, 필라테스까지 칼로리 소모시간을 자동 계산합니다.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="glass-panel bevel-clip p-5 border border-[#ff0055]/30 transition-all hover:border-[#ff0055] hover:shadow-[0_0_20px_rgba(255,0,85,0.15)] group">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#ff0055]/15 border border-[#ff0055]/40 text-[#ff0055]">
              <Target className="size-5" />
            </span>
            <h3 className="font-display font-bold text-base text-[#e6e1e5]">목표 체중 장기 소모 대시보드</h3>
          </div>
          <p className="text-xs text-[#cac4cf] leading-relaxed">
            체지방 1kg=7,700 kcal 공식 기반 목표 체중 감량/증량에 필요한 총 누적 운동 소모시간을 추적합니다.
          </p>
        </div>
      </div>

      {/* Cyber Vitality Live System Card (Inspired by code.html) */}
      <div className="w-full max-w-4xl bg-[#232325]/90 backdrop-blur-xl border border-[#39393b] bevel-clip p-1 relative mb-12 glow-box-primary">
        <div className="absolute -top-3 right-6 bg-[#0e0e10] px-3 py-1 font-mono text-[10px] text-[#00f3ff] border border-[#39393b] z-20">
          METABOLIC_PROTOCOL // LIVE_METRICS
        </div>

        <div className="bg-[#0e0e10] h-full w-full p-6 md:p-8 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-[#39393b] pb-3">
            <span className="font-mono text-xs font-bold text-[#cac4cf] uppercase tracking-wider">SYSTEM VITALITY MATRIX</span>
            <Bolt className="size-4 text-[#39ff14] animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1 p-3.5 border border-[#39393b] bg-[#131315]">
              <span className="font-mono text-[10px] text-[#cac4cf]">PARSING ACCURACY</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-black text-2xl text-[#00f3ff]">99.8</span>
                <span className="font-mono text-xs text-[#00f3ff]/70">%</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-3.5 border border-[#39393b] bg-[#131315]">
              <span className="font-mono text-[10px] text-[#cac4cf]">NEURAL SYNC</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-black text-2xl text-[#00f3ff]">120</span>
                <span className="font-mono text-xs text-[#00f3ff]/70">Hz</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-3.5 border border-[#39393b] bg-[#131315]">
              <span className="font-mono text-[10px] text-[#cac4cf]">TARGET EFFICIENCY</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-black text-2xl text-[#39ff14]">7,700</span>
                <span className="font-mono text-xs text-[#39ff14]/70">kcal/kg</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex flex-col gap-1.5 mt-1">
            <div className="flex justify-between font-mono text-[10px] text-[#cac4cf]">
              <span>PROTOCOL EFFICIENCY</span>
              <span className="text-[#39ff14] font-bold">OPTIMAL</span>
            </div>
            <div className="h-2 w-full bg-[#131315] border border-[#39393b] relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-[96%] bg-[#39ff14] shadow-[0_0_10px_rgba(57,255,20,0.8)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Bottom CTA */}
      <button
        onClick={onStartCalculator}
        className="px-6 py-3 rounded-2xl border border-[#39ff14]/40 bg-[#39ff14]/10 text-[#39ff14] font-display font-bold text-sm hover:bg-[#39ff14] hover:text-[#003900] transition-all"
      >
        프로토콜 엔진 바로 시작하기 ➔
      </button>
    </div>
  )
}
