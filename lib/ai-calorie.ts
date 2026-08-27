import { calculate as localCalculate, type CalcResult, type CalcSuccess } from '@/lib/calorie'

export type AINutritionFeedback = {
  summary: string
  macroAnalysis: {
    carbsLevel: '낮음' | '적정' | '높음'
    proteinLevel: '낮음' | '적정' | '높음'
    fatLevel: '낮음' | '적정' | '높음'
  }
  tips: string[]
}

export type ExtendedCalcSuccess = CalcSuccess & {
  source?: 'gemini' | 'local'
  feedback?: AINutritionFeedback
}

export type ExtendedCalcResult =
  | ExtendedCalcSuccess
  | {
      ok: false
      code: 'empty' | 'invalid-quantity' | 'unrecognized' | 'server'
      message: string
    }

export async function calculateWithAI(rawInput: string): Promise<ExtendedCalcResult> {
  const trimmed = rawInput.trim()
  if (!trimmed) {
    return { ok: false, code: 'empty', message: '오늘 섭취한 음식을 입력해주세요' }
  }

  if (trimmed.toLowerCase() === 'error') {
    return {
      ok: false,
      code: 'server',
      message: '일시적인 오류로 결과를 불러오지 못했습니다. 다시 시도해주세요.',
    }
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 4000)

    const res = await fetch('/api/ai-calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: trimmed }),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (res.ok) {
      const data = await res.json()
      if (data.ok) {
        return data as ExtendedCalcSuccess
      }
    }
  } catch (err) {
    console.warn('AI calculation request error, fallback to local calculator:', err)
  }

  // Graceful client fallback
  const localRes = localCalculate(trimmed)
  if (localRes.ok) {
    return { ...localRes, source: 'local' }
  }
  return localRes
}
