'use client'

import { Bike, Flame, Footprints, Timer, Utensils, Zap } from 'lucide-react'
import type { CalcSuccess } from '@/lib/calorie'

const WORKOUT_ICONS: Record<string, typeof Footprints> = {
  walk: Footprints,
  run: Zap,
  bike: Bike,
}

function formatNumber(n: number) {
  return n.toLocaleString('ko-KR')
}

function ResultCard({
  icon: Icon,
  title,
  accent,
  children,
}: {
  icon: typeof Flame
  title: string
  accent: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <span
          className="flex size-8 items-center justify-center rounded-lg"
          style={{ backgroundColor: `color-mix(in oklch, ${accent} 15%, transparent)` }}
        >
          <Icon className="size-4" style={{ color: accent }} aria-hidden="true" />
        </span>
        <h3 className="text-sm font-bold tracking-tight">{title}</h3>
      </div>
      {children}
    </section>
  )
}

export function ResultSection({ result }: { result: CalcSuccess }) {
  const { items, totalCalories, workouts } = result

  return (
    <div className="flex flex-col gap-4 duration-500 animate-in fade-in slide-in-from-bottom-2">
      {/* Line 1 — Calorie breakdown */}
      <ResultCard icon={Utensils} title="섭취 칼로리" accent="var(--flame)">
        <div className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <span
              key={`${item.name}-${i}`}
              className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground"
            >
              {item.name}
              {item.quantity !== 1 ? ` ×${item.quantity}` : ''}
              <span className="text-muted-foreground">·</span>
              <span className="tabular-nums">{formatNumber(item.calories)} kcal</span>
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between rounded-xl bg-flame/10 px-4 py-3">
          <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Flame className="size-4 text-flame" aria-hidden="true" />총 칼로리
          </span>
          <span className="text-xl font-black tabular-nums text-flame">
            {formatNumber(totalCalories)} kcal
          </span>
        </div>
      </ResultCard>

      {/* Line 2 — Recommended workouts */}
      <ResultCard icon={Zap} title="추천 운동" accent="var(--leaf)">
        <div className="flex flex-wrap gap-2">
          {workouts.map((w) => {
            const Icon = WORKOUT_ICONS[w.key] ?? Footprints
            return (
              <span
                key={w.key}
                className="inline-flex items-center gap-1.5 rounded-full border border-leaf/30 bg-leaf/10 px-3 py-1.5 text-sm font-semibold text-foreground"
              >
                <Icon className="size-4 text-leaf" aria-hidden="true" />
                {w.label}
              </span>
            )
          })}
        </div>
      </ResultCard>

      {/* Line 3 — Duration per workout */}
      <ResultCard icon={Timer} title="칼로리 소모 시간" accent="var(--sky)">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {workouts.map((w) => {
            const Icon = WORKOUT_ICONS[w.key] ?? Footprints
            return (
              <li
                key={w.key}
                className="flex flex-col items-center gap-1 rounded-xl border border-border bg-muted/50 p-4 text-center"
              >
                <Icon className="size-5 text-sky" aria-hidden="true" />
                <span className="text-xs font-medium text-muted-foreground">{w.label}</span>
                <span className="text-2xl font-black tabular-nums text-foreground">
                  {formatNumber(w.minutes)}
                  <span className="ml-0.5 text-sm font-semibold text-muted-foreground">분</span>
                </span>
              </li>
            )
          })}
        </ul>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          총 {formatNumber(totalCalories)} kcal을 소모하는 데 필요한 예상 시간입니다.
        </p>
      </ResultCard>
    </div>
  )
}
