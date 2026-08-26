// Mock calorie database (kcal per single serving/unit)
export const FOOD_DB: Record<string, number> = {
  햄버거: 500,
  치킨: 250, // per 조각
  피자: 300, // per 조각
  라면: 500,
  밥: 300, // per 공기
  김밥: 480, // per 줄
  떡볶이: 400,
  샐러드: 150,
  사과: 100,
  바나나: 90,
  콜라: 150,
  커피: 60,
  아이스크림: 250,
  도넛: 300,
  샌드위치: 350,
  초밥: 350,
  파스타: 600,
  삼겹살: 500,
  맥주: 200,
}

export type ParsedItem = {
  name: string
  quantity: number
  calories: number // total for this item (unit * quantity)
  known: boolean
}

export type WorkoutPlan = {
  key: string
  label: string
  minutes: number
}

// Approx kcal burned per minute for a ~65kg person
export const WORKOUTS = [
  { key: 'walk', label: '걷기', perMin: 4 },
  { key: 'run', label: '러닝', perMin: 10 },
  { key: 'bike', label: '자전거', perMin: 7 },
] as const

export type CalcSuccess = {
  ok: true
  items: ParsedItem[]
  totalCalories: number
  workouts: WorkoutPlan[]
}

export type CalcError = {
  ok: false
  code: 'empty' | 'invalid-quantity' | 'unrecognized' | 'server'
  message: string
}

export type CalcResult = CalcSuccess | CalcError

export const MAX_LENGTH = 500

// Extract a leading Korean/word food name and a trailing quantity number.
function parseToken(token: string): { name: string; quantity: number } | null {
  const trimmed = token.trim()
  if (!trimmed) return null

  // Find a numeric quantity anywhere in the token (supports negatives).
  const numMatch = trimmed.match(/-?\d+(\.\d+)?/)
  const quantity = numMatch ? Number.parseFloat(numMatch[0]) : 1

  // Food name = the leading non-numeric characters.
  const nameMatch = trimmed.match(/^[^\d-]+/)
  const name = (nameMatch ? nameMatch[0] : trimmed).replace(/\s+/g, '').trim()

  if (!name) return null
  return { name, quantity }
}

function matchFood(name: string): string | null {
  if (FOOD_DB[name] !== undefined) return name
  // Loose contains-match (e.g. "치즈햄버거" -> "햄버거")
  const keys = Object.keys(FOOD_DB)
  const found = keys.find((k) => name.includes(k))
  return found ?? null
}

export function calculate(rawInput: string): CalcResult {
  const input = rawInput.trim()

  if (!input) {
    return { ok: false, code: 'empty', message: '오늘 섭취한 음식을 입력해주세요' }
  }

  // Special trigger to demo the error fallback UI.
  if (input.toLowerCase() === 'error') {
    return {
      ok: false,
      code: 'server',
      message: '일시적인 오류로 결과를 불러오지 못했습니다. 다시 시도해주세요.',
    }
  }

  const tokens = input.split(/[,\n]/).map((t) => t.trim()).filter(Boolean)
  const items: ParsedItem[] = []

  for (const token of tokens) {
    const parsed = parseToken(token)
    if (!parsed) continue

    if (parsed.quantity <= 0) {
      return { ok: false, code: 'invalid-quantity', message: '수량은 0보다 커야 합니다' }
    }

    const key = matchFood(parsed.name)
    if (key) {
      items.push({
        name: parsed.name,
        quantity: parsed.quantity,
        calories: Math.round(FOOD_DB[key] * parsed.quantity),
        known: true,
      })
    } else {
      items.push({
        name: parsed.name,
        quantity: parsed.quantity,
        calories: 0,
        known: false,
      })
    }
  }

  const knownItems = items.filter((i) => i.known)

  if (knownItems.length === 0) {
    return {
      ok: false,
      code: 'unrecognized',
      message: '일시적인 오류로 결과를 불러오지 못했습니다. 다시 시도해주세요.',
    }
  }

  const totalCalories = knownItems.reduce((sum, i) => sum + i.calories, 0)

  const workouts: WorkoutPlan[] = WORKOUTS.map((w) => ({
    key: w.key,
    label: w.label,
    minutes: Math.max(1, Math.round(totalCalories / w.perMin)),
  }))

  return { ok: true, items: knownItems, totalCalories, workouts }
}
