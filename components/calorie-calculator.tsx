'use client'

import { useState } from 'react'
import { AlertCircle, Flame, Loader2, RotateCcw, Sparkles, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { calculate, MAX_LENGTH, type CalcSuccess } from '@/lib/calorie'
import { ResultSection } from '@/components/result-section'

export function CalorieCalculator() {
  const [input, setInput] = useState('')
  const [fieldError, setFieldError] = useState<string | null>(null)
  const [bannerError, setBannerError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<CalcSuccess | null>(null)

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

  function runCalculation() {
    setBannerError(null)
    setFieldError(null)

    const trimmed = input.trim()
    if (!trimmed) {
      setFieldError('오늘 섭취한 음식을 입력해주세요')
      return
    }

    // Simulate an async calculation with a loading state (well under 3s PRD limit).
    setLoading(true)
    window.setTimeout(() => {
      const res = calculate(trimmed)
      if (res.ok) {
        setResult(res)
      } else if (res.code === 'server' || res.code === 'unrecognized') {
        setResult(null)
        setBannerError(res.message)
      } else {
        setResult(null)
        setFieldError(res.message)
      }
      setLoading(false)
    }, 600)
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
      {/* Header */}
      <header className="mb-6 text-center">
        <div className="mb-3 inline-flex size-14 items-center justify-center rounded-2xl bg-flame/10 ring-1 ring-flame/20">
          <Flame className="size-7 text-flame" aria-hidden="true" />
        </div>
        <h1 className="text-2xl font-black tracking-tight text-balance sm:text-3xl">
          칼로리 &amp; 운동 시간 계산기
        </h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground text-pretty">
          오늘 먹은 음식을 입력하면 총 칼로리와 이를 소모하는 데 필요한 운동 시간을 알려드려요.
        </p>
      </header>

      {/* Card */}
      <div className="rounded-3xl border border-border bg-card p-5 shadow-lg shadow-black/5 sm:p-6">
        {/* Input */}
        <label htmlFor="food-input" className="mb-2 block text-sm font-semibold">
          섭취한 음식
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
            placeholder="오늘 섭취한 음식을 입력해주세요 (예: 햄버거 1개, 치킨 2조각)"
            className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm leading-relaxed outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 aria-invalid:border-destructive aria-invalid:ring-destructive/20"
          />
          <span
            className={`pointer-events-none absolute right-3 bottom-3 text-xs tabular-nums transition-colors ${
              counterDanger ? 'font-semibold text-destructive' : 'text-muted-foreground'
            }`}
          >
            {input.length}/{MAX_LENGTH}
          </span>
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
              className="flex items-center gap-1.5 text-sm font-medium text-destructive"
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
          className="mt-4 h-11 w-full rounded-2xl text-sm font-semibold shadow-md shadow-primary/10 transition-all hover:shadow-lg active:scale-[0.99]"
        >
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              계산 중...
            </>
          ) : (
            <>
              <Sparkles className="size-4" aria-hidden="true" />
              계산하기
            </>
          )}
        </Button>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          팁: 결과를 불러오지 못하는 상황을 보려면 <span className="font-mono">error</span>를
          입력해보세요.
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
          <ResultSection result={result} />
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
