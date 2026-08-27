'use client'

import { Activity, Bike, Bot, CheckCircle2, Dumbbell, Flame, Footprints, Info, PersonStanding, Sparkles, Target, Timer, Utensils, Waves, Zap } from 'lucide-react'
import type { ExtendedCalcSuccess } from '@/lib/ai-calorie'
import type { UserProfile } from '@/lib/calorie'
import { calculateDailyTargetCalories, calculateLongTermGoal } from '@/lib/calorie'

const WORKOUT_CONFIG: Record<string, { icon: typeof Footprints; color: string }> = {
  walk:  { icon: Footprints,     color: 'var(--leaf)' },
  run:   { icon: Zap,            color: 'var(--flame)' },
  bike:  { icon: Bike,           color: 'var(--sky)' },
  stair: { icon: Activity,       color: 'var(--leaf)' },
  rope:  { icon: PersonStanding, color: 'var(--flame)' },
  swim:  { icon: Waves,          color: 'var(--sky)' },
  homet: { icon: Dumbbell,       color: 'var(--leaf)' },
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

export function ResultSection({ result, userProfile }: { result: ExtendedCalcSuccess; userProfile?: UserProfile | null }) {
  const { items, totalCalories, workouts, feedback, source } = result
  const dailyTarget = userProfile ? calculateDailyTargetCalories(userProfile) : null
  const longTermGoal = userProfile ? calculateLongTermGoal(userProfile) : null
  const calorieGap = dailyTarget ? dailyTarget.targetCalories - totalCalories : null
  const progressPct = dailyTarget ? Math.min(100, Math.round((totalCalories / dailyTarget.targetCalories) * 100)) : null

  return (
    <div className="flex flex-col gap-4 duration-500 animate-in fade-in slide-in-from-bottom-3">
      {/* Long-Term Target Weight Card (when targetWeight set) */}
      {longTermGoal && (
        <div className="overflow-hidden rounded-3xl border border-sky/40 bg-gradient-to-br from-sky/15 via-card to-card p-5 shadow-lg shadow-sky/5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-sky/20 text-sky">
                <Target className="size-5" />
              </span>
              <div>
                <h3 className="text-base font-bold tracking-tight text-foreground">
                  장기 목표 현황 ({userProfile?.weight}kg ➔ {userProfile?.targetWeight}kg)
                </h3>
                <p className="text-xs text-muted-foreground">
                  목표 체중까지 총 <strong className="text-foreground">{Math.abs(longTermGoal.diffKg)}kg {longTermGoal.type === 'lose' ? '감량' : '증량'}</strong> 필요
                </p>
              </div>
            </div>
            <span className="rounded-full bg-sky/20 px-3 py-1 text-xs font-black text-sky">
              {longTermGoal.type === 'lose' ? `-${formatNumber(longTermGoal.totalKcal)} kcal 소모` : `+${formatNumber(longTermGoal.totalKcal)} kcal 섭취`}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-card/60 p-3 text-center">
              <p className="text-[11px] font-semibold text-muted-foreground">🚶 걷기로 달성 시</p>
              <p className="text-lg font-black text-foreground">{longTermGoal.workoutHours.walk}시간</p>
              <p className="text-[10px] text-muted-foreground">누적 운동 분량</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/60 p-3 text-center">
              <p className="text-[11px] font-semibold text-muted-foreground">🏃 러닝으로 달성 시</p>
              <p className="text-lg font-black text-flame">{longTermGoal.workoutHours.run}시간</p>
              <p className="text-[10px] text-muted-foreground">고강도 유산소 기준</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/60 p-3 text-center">
              <p className="text-[11px] font-semibold text-muted-foreground">🪜 계단오르기 달성 시</p>
              <p className="text-lg font-black text-leaf">{longTermGoal.workoutHours.stair}시간</p>
              <p className="text-[10px] text-muted-foreground">실내 운동 기준</p>
            </div>
          </div>
        </div>
      )}
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
          <div className="mt-4 rounded-2xl bg-gradient-to-r from-flame/15 via-flame/10 to-transparent p-4 ring-1 ring-flame/20">
            <div className="flex items-center justify-between">
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

            {/* Personalized daily target progress bar */}
            {dailyTarget && progressPct !== null && (
              <div className="mt-3 space-y-1.5">
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>일일 목표 섭취 대비</span>
                  <span className="font-semibold">{progressPct}% ({formatNumber(dailyTarget.targetCalories)} kcal 목표)</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${progressPct > 100 ? 'bg-destructive' : progressPct > 80 ? 'bg-flame' : 'bg-leaf'}`}
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <p className={`text-[11px] font-semibold ${calorieGap !== null && calorieGap < 0 ? 'text-destructive' : 'text-leaf'}`}>
                  {calorieGap !== null && calorieGap >= 0
                    ? `남은 섭취 가능량: ${formatNumber(calorieGap)} kcal`
                    : `목표 초과: ${formatNumber(Math.abs(calorieGap ?? 0))} kcal 초과`}
                </p>
              </div>
            )}
          </div>
        </div>
      </SectionCard>

      {/* Line 2 — Recommended Workouts (7 types) */}
      <SectionCard icon={Zap} title="추천 운동 7종" lineBadge="2라인" accent="var(--leaf)">
        <p className="mb-3 text-xs text-muted-foreground">
          섭취한 <strong className="text-foreground">{formatNumber(totalCalories)} kcal</strong>를 소모할 수 있는 운동 7종입니다.
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {workouts.map((w) => {
            const config = WORKOUT_CONFIG[w.key] ?? { icon: Footprints, color: 'var(--leaf)' }
            const Icon = config.icon
            const color = config.color
            return (
              <div
                key={w.key}
                className="flex items-center gap-2.5 rounded-2xl border border-border/60 bg-muted/30 p-3 transition-colors hover:bg-muted/60"
              >
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `color-mix(in oklch, ${color} 18%, transparent)` }}
                >
                  <Icon className="size-4" style={{ color }} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-foreground truncate">{w.label}</p>
                  <p className="text-[10px] text-muted-foreground truncate">{w.intensity}</p>
                </div>
              </div>
            )
          })}
        </div>
      </SectionCard>

      {/* Line 3 — Exercise Duration per Workout */}
      <SectionCard icon={Timer} title="필요 운동 시간" lineBadge="3라인" accent="var(--sky)">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {workouts.map((w) => {
            const config = WORKOUT_CONFIG[w.key] ?? { icon: Footprints, color: 'var(--sky)' }
            const Icon = config.icon
            const color = config.color
            return (
              <div
                key={w.key}
                className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-muted/50 to-muted/20 p-3.5 text-center transition-all hover:border-sky/40"
              >
                <div className="mb-1.5 flex items-center justify-center gap-1">
                  <Icon className="size-4" style={{ color }} aria-hidden="true" />
                  <span className="text-[11px] font-bold text-muted-foreground">{w.label}</span>
                </div>
                <div className="my-1">
                  <span className="text-2xl font-black tabular-nums tracking-tight text-foreground">
                    {formatNumber(w.minutes)}
                  </span>
                  <span className="ml-0.5 text-xs font-bold text-muted-foreground">분</span>
                </div>
                {w.minutes >= 60 && (
                  <span className="inline-block rounded-md bg-sky/10 px-1.5 py-0.5 text-[10px] font-semibold text-sky">
                    {formatMinutes(w.minutes)}
                  </span>
                )}
                <p className="mt-1.5 text-[10px] text-muted-foreground">
                  {w.kcalPerHour} kcal/h
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 rounded-xl bg-muted/40 px-3 py-2 text-center text-xs text-muted-foreground">
          <Info className="size-3.5 shrink-0" aria-hidden="true" />
          <span>{userProfile ? `${userProfile.weight}kg 기준 맞춤 계산` : '성인 평균(약 65kg) 기준'} · 개인 체중 및 운동 강도에 따라 차이가 있을 수 있습니다.</span>
        </div>
      </SectionCard>
    </div>
  )
}
