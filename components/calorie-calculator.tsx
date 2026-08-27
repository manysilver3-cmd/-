'use client'

import { useEffect, useState } from 'react'
import { AlertCircle, Bot, Clock, Flame, History, Loader2, RotateCcw, Sparkles, Trash2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MAX_LENGTH } from '@/lib/calorie'
import type { UserProfile } from '@/lib/calorie'
import { calculateWithAI, type ExtendedCalcSuccess } from '@/lib/ai-calorie'
import { clearHistory, getHistory, saveHistoryItem, getProfile, type CalculationHistoryItem } from '@/lib/storage'
import { ResultSection } from '@/components/result-section'
import { ProfilePanel } from '@/components/profile-panel'

const QUICK_EXAMPLES = [
  '햄버거 1개, 콜라 1캔, 감자튀김',
  '삼겹살 2인분, 소주 1병, 볶음밥 반 공기',
  '치킨 3조각, 생맥주 500cc',
  '마라탕, 꿔바로우',
  '닭가슴살 샐러드 1개, 아아 1잔',
]

export function CalorieCalculator() {
  const [input, setInput] = useState('')
  const [fieldError, setFieldError] = useState<string | null>(null)
  const [bannerError, setBannerError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ExtendedCalcSuccess | null>(null)
  const [history, setHistory] = useState<CalculationHistoryItem[]>([])
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    setHistory(getHistory())
    const p = getProfile()
    if (p) setUserProfile(p)
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value
    if (value.length > MAX_LENGTH) {
      setInput(value.slice(0, MAX_LENGTH))
      setFieldError(`최대 ${MAX_LENGTH}자까지 입력할 수 있습니다`)
      return
    }
    setInput(value)
    if (fieldError) setFieldError(null)
  }

  function handleSelectExample(text: string) {
    setInput(text)
    if (fieldError) setFieldError(null)
    triggerCalculation(text)
  }

  async function triggerCalculation(targetText?: string) {
    setBannerError(null)
    setFieldError(null)

    const textToCalc = (targetText ?? input).trim()
    if (!textToCalc) {
      setFieldError('오늘 섭취한 음식을 입력해주세요')
      return
    }

    setLoading(true)
    try {
      const res = await calculateWithAI(textToCalc)
      if (res.ok) {
        setResult(res)
        const updated = saveHistoryItem(textToCalc, res.totalCalories, res.items.length)
        setHistory(updated)
      } else if (res.code === 'server' || res.code === 'unrecognized') {
        setResult(null)
        setBannerError(res.message)
      } else {
        setResult(null)
        setFieldError(res.message)
      }
    } catch (err: any) {
      setResult(null)
      setBannerError('계산 처리 중 문제가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  function runCalculation() {
    triggerCalculation()
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      if (e.nativeEvent.isComposing || e.keyCode === 229) return
      e.preventDefault()
      if (!loading) runCalculation()
    }
  }

  const counterDanger = input.length >= MAX_LENGTH

  return (
    <div className="w-full max-w-2xl">
      <ProfilePanel onProfileChange={setUserProfile} />
      {/* Header */}
      <header className="mb-8 text-center">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#39ff14]/30 bg-[#39ff14]/10 px-3 py-1 text-[11px] font-bold text-[#39ff14] tracking-widest uppercase">
          <Sparkles className="size-3 text-[#39ff14]" />
          Daeun Vitality System
        </div>
        <h1 className="text-3xl font-black font-display tracking-tight text-[#e6e1e5] sm:text-4xl">
          칼로리 &amp; 운동 시간 계산기
        </h1>
        <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-[#cac4cf]">
          오늘 섭취한 음식을 자유롭게 적어보세요. AI 및 정밀 엔진이 칼로리와 맞춤 운동 시간을 소모량별로 계산합니다.
        </p>
      </header>

      {/* Card */}
      <div className="glass-panel rounded-3xl p-5 shadow-2xl shadow-black/40 sm:p-6">
        {/* Input */}
        <label htmlFor="food-input" className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#cac4cf]">
          섭취한 음식 입력
        </label>
        <div className="relative">
          <textarea
            id="food-input"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            maxLength={MAX_LENGTH}
            rows={4}
            aria-invalid={!!fieldError}
            aria-describedby={fieldError ? 'food-error' : undefined}
            placeholder="오늘 섭취한 음식을 입력해주세요 (예: 60계치킨 간지치킨, 아아 1잔, 햄버거 세트)"
            className="w-full resize-none rounded-2xl border border-[#39393b] bg-[#131315]/90 px-4 py-3 text-sm leading-relaxed text-[#e6e1e5] outline-none transition-all placeholder:text-[#cac4cf]/50 focus-visible:border-[#39ff14] focus-visible:ring-2 focus-visible:ring-[#39ff14]/40 aria-invalid:border-[#ff0055] aria-invalid:ring-[#ff0055]/30"
          />
          <span
            className={`pointer-events-none absolute right-3 bottom-3 text-xs font-mono tabular-nums transition-colors ${
              counterDanger ? 'font-bold text-[#ff0055]' : 'text-[#cac4cf]/60'
            }`}
          >
            {input.length}/{MAX_LENGTH}
          </span>
        </div>

        {/* Quick Examples */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-[#cac4cf]/80">추천 식단:</span>
          {QUICK_EXAMPLES.slice(0, 3).map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => handleSelectExample(ex)}
              disabled={loading}
              className="rounded-xl border border-[#39393b] bg-[#1c1b1d] px-2.5 py-1 text-xs text-[#e6e1e5] transition-all hover:border-[#39ff14]/50 hover:bg-[#39ff14]/10 hover:text-[#39ff14] disabled:opacity-50"
            >
              {ex}
            </button>
          ))}
        </div>

        {/* Field error */}
        <div
          className={`grid transition-all duration-300 ${
            fieldError ? 'mt-2 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p
              id="food-error"
              role="alert"
              className="flex items-center gap-1.5 text-xs font-bold text-[#ff0055]"
            >
              <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
              {fieldError}
            </p>
          </div>
        </div>

        {/* Action button */}
        <Button
          size="lg"
          onClick={runCalculation}
          disabled={loading}
          className="mt-4 h-12 w-full rounded-2xl bg-[#39ff14] text-[#003900] font-black font-display text-base tracking-wide neon-glow-primary transition-all hover:bg-[#39ff14]/90 hover:scale-[1.01] active:scale-[0.99]"
        >
          {loading ? (
            <>
              <Loader2 className="size-5 animate-spin text-[#003900]" aria-hidden="true" />
              정밀 계산 실행 중...
            </>
          ) : (
            <>
              <Sparkles className="size-5 text-[#003900]" aria-hidden="true" />
              소모 운동량 정밀 계산하기
            </>
          )}
        </Button>

        {/* Recent History */}
        {history.length > 0 && (
          <div className="mt-5 border-t border-[#39393b]/60 pt-3.5">
            <div className="flex items-center justify-between text-xs text-[#cac4cf]">
              <span className="flex items-center gap-1 font-bold text-[#e6e1e5]">
                <History className="size-3.5 text-[#00f3ff]" aria-hidden="true" />
                최근 계산 기록
              </span>
              <button
                type="button"
                onClick={() => {
                  clearHistory()
                  setHistory([])
                }}
                className="flex items-center gap-1 text-xs text-[#cac4cf]/70 hover:text-[#ff0055] transition-colors"
                title="기록 지우기"
              >
                <Trash2 className="size-3" aria-hidden="true" />
                기록 삭제
              </button>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {history.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => handleSelectExample(h.input)}
                  disabled={loading}
                  className="group inline-flex items-center gap-1.5 rounded-xl border border-[#39393b] bg-[#1c1b1d] px-3 py-1.5 text-xs transition-all hover:border-[#00f3ff]/60 hover:bg-[#00f3ff]/10"
                >
                  <Clock className="size-3 text-[#cac4cf]/60 group-hover:text-[#00f3ff]" />
                  <span className="truncate max-w-[150px] font-medium text-[#e6e1e5]">{h.input}</span>
                  <span className="rounded-md bg-[#ff0055]/15 px-1.5 py-0.5 text-[10px] font-bold text-[#ff0055]">
                    {h.totalCalories} kcal
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="mt-3 text-center text-[11px] text-[#cac4cf]/60">
          💡 팁: 오류 대응 시뮬레이션을 보려면 <span className="font-mono text-[#39ff14]">error</span>를 입력해보세요.
        </p>
      </div>

      {/* Results area */}
      <div className="mt-5" aria-live="polite" aria-atomic="true">
        {bannerError ? (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-2xl border border-destructive/30 bg-destructive/10 p-4 duration-300 animate-in fade-in slide-in-from-bottom-1"
          >
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-destructive" aria-hidden="true" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-destructive">{bannerError}</p>
              <Button
                size="sm"
                variant="destructive"
                onClick={runCalculation}
                disabled={loading}
                className="mt-3 rounded-lg"
              >
                <RotateCcw className="size-3.5" aria-hidden="true" />
                다시 시도
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setBannerError(null)}
              aria-label="오류 메시지 닫기"
              className="rounded-md p-1 text-destructive/70 transition-colors hover:bg-destructive/10 hover:text-destructive"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
        ) : loading ? (
          <ResultSkeleton />
        ) : result ? (
          <ResultSection result={result} userProfile={userProfile} />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-10 text-center">
      <Flame className="size-6 text-muted-foreground/50" aria-hidden="true" />
      <p className="mt-2 text-sm text-muted-foreground">
        음식을 입력하고 계산하면 결과가 여기에 표시됩니다.
      </p>
    </div>
  )
}

function ResultSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {[0, 1, 2].map((i) => (
        <div key={i} className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center gap-2">
            <div className="size-8 animate-pulse rounded-lg bg-muted" />
            <div className="h-4 w-24 animate-pulse rounded bg-muted" />
          </div>
          <div className="flex gap-2">
            <div className="h-7 w-20 animate-pulse rounded-full bg-muted" />
            <div className="h-7 w-24 animate-pulse rounded-full bg-muted" />
            <div className="h-7 w-16 animate-pulse rounded-full bg-muted" />
          </div>
        </div>
      ))}
    </div>
  )
}
