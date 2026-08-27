'use client'

import { Activity, Bike, Bot, CheckCircle2, Flame, Footprints, Info, Sparkles, Timer, Utensils, Zap } from 'lucide-react'
import type { ExtendedCalcSuccess } from '@/lib/ai-calorie'

const WORKOUT_CONFIG: Record<string, { icon: typeof Footprints; color: string; desc: string }> = {
  walk: { icon: Footprints, color: 'var(--leaf)', desc: '저강도 유산소' },
  run: { icon: Zap, color: 'var(--flame)', desc: '고강도 체지방 연소' },
  bike: { icon: Bike, color: 'var(--sky)', desc: '중강도 전신 유산소' },
}

function formatNumber(n: number) {
  return n.toLocaleString('ko-KR')
}

function formatMinutes(minutes: number) {
  if (minutes < 60) {
    return `${minutes}분`
  }
  const hours = Math.floor(minutes / 60)
  const remainingMins = minutes % 60
  return remainingMins > 0 ? `${hours}시간 ${remainingMins}분` : `${hours}시간`
}

function SectionCard({
  icon: Icon,
  title,
  lineBadge,
  accent,
  children,
}: {
  icon: typeof Flame
  title: string
  lineBadge?: string
  accent: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-3xl border border-border bg-card p-5 shadow-md shadow-black/5 transition-all sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span
            className="flex size-9 items-center justify-center rounded-xl ring-1"
            style={{
              backgroundColor: `color-mix(in oklch, ${accent} 12%, transparent)`,
              borderColor: `color-mix(in oklch, ${accent} 25%, transparent)`,
            }}
          >
            <Icon className="size-4.5" style={{ color: accent }} aria-hidden="true" />
          </span>
          <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
        </div>
        {lineBadge && (
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
            {lineBadge}
          </span>
        )}
      </div>
      {children}
    </section>
  )
}

export function ResultSection({ result }: { result: ExtendedCalcSuccess }) {
  const { items, totalCalories, workouts, feedback, source } = result

  return (
    <div className="flex flex-col gap-4 duration-500 animate-in fade-in slide-in-from-bottom-3">
      {/* AI Nutrition Coach Banner (when available) */}
      {feedback && (
        <div className="overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-5 shadow-lg shadow-primary/5 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <Bot className="size-4.5" aria-hidden="true" />
              </span>
              <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">
                Gemini AI 영양 코칭 리포트
              </h3>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/15 px-2.5 py-0.5 text-[11px] font-bold text-primary">
              <Sparkles className="size-3" />
              AI 분석 완료
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-foreground/90 font-medium">
            {feedback.summary}
          </p>

          {/* Macro balance pills */}
          {feedback.macroAnalysis && (
            <div className="mt-3.5 flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 rounded-xl border border-border/80 bg-background/80 px-3 py-1.5 text-xs">
                <span className="font-semibold text-muted-foreground">탄수화물</span>
                <span className="font-bold text-foreground">{feedback.macroAnalysis.carbsLevel}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-border/80 bg-background/80 px-3 py-1.5 text-xs">
                <span className="font-semibold text-muted-foreground">단백질</span>
                <span className="font-bold text-foreground">{feedback.macroAnalysis.proteinLevel}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-border/80 bg-background/80 px-3 py-1.5 text-xs">
                <span className="font-semibold text-muted-foreground">지방</span>
                <span className="font-bold text-foreground">{feedback.macroAnalysis.fatLevel}</span>
              </div>
            </div>
          )}

          {/* Health tips */}
          {Array.isArray(feedback.tips) && feedback.tips.length > 0 && (
            <div className="mt-3.5 space-y-1.5 border-t border-border/60 pt-3">
              {feedback.tips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Line 1 — Calorie Information (Individual Items + Total Calories) */}
      <SectionCard
        icon={Utensils}
        title="칼로리 정보"
        lineBadge={source === 'gemini' ? 'AI 정밀 분석' : '1라인'}
        accent="var(--flame)"
      >
        <div className="space-y-3">
          {/* Individual items */}
          <div className="flex flex-wrap gap-2">
            {items.map((item, i) => (
              <span
                key={`${item.name}-${i}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/60 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-muted"
              >
                <span className="font-semibold">{item.name}</span>
                {item.quantity !== 1 ? (
                  <span className="rounded bg-background px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground">
                    ×{item.quantity}
                  </span>
                ) : null}
                <span className="text-muted-foreground/60">·</span>
                <span className="font-bold tabular-nums text-flame">
                  {formatNumber(item.calories)} kcal
                </span>
              </span>
            ))}
          </div>

          {/* Total Calories Highlight */}
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-gradient-to-r from-flame/15 via-flame/10 to-transparent p-4 ring-1 ring-flame/20">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-flame/20 text-flame">
                <Flame className="size-5" aria-hidden="true" />
              </span>
              <div>
                <span className="block text-xs font-semibold text-muted-foreground">총 섭취량</span>
                <span className="text-sm font-bold text-foreground">총 칼로리</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black tabular-nums tracking-tight text-flame sm:text-3xl">
                {formatNumber(totalCalories)}
              </span>
              <span className="ml-1 text-sm font-bold text-flame">kcal</span>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Line 2 — Recommended Workouts */}
      <SectionCard icon={Zap} title="추천 운동" lineBadge="2라인" accent="var(--leaf)">
        <p className="mb-3 text-xs text-muted-foreground">
          섭취한 <strong className="text-foreground">{formatNumber(totalCalories)} kcal</strong>를 효과적으로 소모할 수 있는 맞춤 운동 종목입니다.
        </p>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {workouts.map((w) => {
            const config = WORKOUT_CONFIG[w.key] ?? { icon: Footprints, color: 'var(--leaf)', desc: '유산소' }
            const Icon = config.icon
            return (
              <div
                key={w.key}
                className="flex items-center gap-3 rounded-2xl border border-leaf/20 bg-leaf/5 p-3 transition-colors hover:bg-leaf/10"
              >
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: 'color-mix(in oklch, var(--leaf) 20%, transparent)' }}
                >
                  <Icon className="size-5 text-leaf" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-foreground">{w.label}</span>
                    <Sparkles className="size-3 text-leaf" aria-hidden="true" />
                  </div>
                  <span className="block truncate text-xs text-muted-foreground">{w.intensity}</span>
                </div>
              </div>
            )
          })}
        </div>
      </SectionCard>

      {/* Line 3 — Exercise Duration per Workout */}
      <SectionCard icon={Timer} title="필요 운동 시간" lineBadge="3라인" accent="var(--sky)">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {workouts.map((w) => {
            const config = WORKOUT_CONFIG[w.key] ?? { icon: Footprints, color: 'var(--sky)', desc: '유산소' }
            const Icon = config.icon
            return (
              <div
                key={w.key}
                className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-muted/50 to-muted/20 p-4 text-center transition-all hover:border-sky/40"
              >
                <div className="mb-2 flex items-center justify-center gap-1.5">
                  <Icon className="size-4.5 text-sky" aria-hidden="true" />
                  <span className="text-xs font-bold text-muted-foreground">{w.label}</span>
                </div>
                <div className="my-1">
                  <span className="text-3xl font-black tabular-nums tracking-tight text-foreground">
                    {formatNumber(w.minutes)}
                  </span>
                  <span className="ml-1 text-sm font-bold text-muted-foreground">분</span>
                </div>
                {w.minutes >= 60 && (
                  <span className="inline-block rounded-md bg-sky/10 px-2 py-0.5 text-[11px] font-semibold text-sky">
                    약 {formatMinutes(w.minutes)}
                  </span>
                )}
                <div className="mt-2 text-[11px] text-muted-foreground">
                  분당 약 {w.key === 'walk' ? 4 : w.key === 'run' ? 10 : 7} kcal 소모
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 rounded-xl bg-muted/40 px-3 py-2 text-center text-xs text-muted-foreground">
          <Info className="size-3.5 shrink-0" aria-hidden="true" />
          <span>성인 평균(약 65kg) 기준 예상 소모 시간이며, 개인의 체중 및 운동 강도에 따라 차이가 있을 수 있습니다.</span>
        </div>
      </SectionCard>
    </div>
  )
}
