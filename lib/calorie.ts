// Food calorie database (approx kcal per single serving/unit)
export const FOOD_DB: Record<string, number> = {
  // Fast food & Meals
  햄버거: 500,
  치즈버거: 550,
  치킨: 250, // per 조각
  피자: 300, // per 조각
  라면: 500,
  신라면: 500,
  짜파게티: 600,
  짜장면: 700,
  짬뽕: 650,
  돈까스: 800,
  탕수육: 600,
  마라탕: 800,
  제육볶음: 600,
  김치찌개: 450,
  된장찌개: 350,
  순두부찌개: 400,
  국밥: 600,
  순대국밥: 700,
  삼겹살: 600, // 1인분
  소고기: 500,
  스테이크: 650,
  초밥: 350, // 5~6피스
  파스타: 600,
  리조또: 650,
  샐러드: 150,
  닭가슴살: 130,

  // Korean snacks & Street food
  밥: 300, // per 공기
  공기밥: 300,
  햇반: 310,
  김밥: 480, // per 줄
  참치김밥: 550,
  떡볶이: 400, // 1인분
  로제떡볶이: 600,
  순대: 350,
  튀김: 250,
  핫도그: 300,
  만두: 300,

  // Bakery & Desserts
  샌드위치: 350,
  베이글: 300,
  식빵: 150,
  도넛: 300,
  와플: 350,
  케이크: 400,
  아이스크림: 250,
  초콜릿: 200,
  과자: 400,

  // Fruits & Healthy
  사과: 100,
  바나나: 90,
  계란: 80,
  달걀: 80,
  삶은계란: 80,
  고구마: 150,
  감자: 100,
  토마토: 30,

  // Drinks
  콜라: 150, // per 캔
  사이다: 140,
  제로콜라: 0,
  제로사이다: 0,
  커피: 10,
  아메리카노: 10,
  카페라떼: 150,
  바닐라라떼: 220,
  우유: 130,
  두유: 110,
  주스: 120,
  맥주: 200, // 500cc
  소주: 400, // 1병
  와인: 130, // 1잔
}

export type ParsedItem = {
  name: string
  quantity: number
  unitText?: string
  calories: number // total for this item (unit * quantity)
  known: boolean
}

export type WorkoutPlan = {
  key: string
  label: string
  minutes: number
  intensity: string
  kcalPerHour: number
}

// Exercise kcal burned per minute (~65kg adult standard)
export const WORKOUTS = [
  { key: 'walk', label: '걷기', perMin: 4, kcalPerHour: 240, intensity: '보통 걸음 (4.5 km/h)' },
  { key: 'run', label: '러닝', perMin: 10, kcalPerHour: 600, intensity: '조깅 페이스 (8 km/h)' },
  { key: 'bike', label: '자전거', perMin: 7, kcalPerHour: 420, intensity: '일반 주행 (15 km/h)' },
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

// Korean natural number mappings
const KOREAN_NUMBERS: Record<string, number> = {
  '반': 0.5,
  '반개': 0.5,
  '한': 1,
  '하나': 1,
  '한개': 1,
  '한잔': 1,
  '한조각': 1,
  '한줄': 1,
  '한공기': 1,
  '한그릇': 1,
  '한인분': 1,
  '한병': 1,
  '한캔': 1,
  '두': 2,
  '둘': 2,
  '두개': 2,
  '두잔': 2,
  '두조각': 2,
  '두줄': 2,
  '두공기': 2,
  '두그릇': 2,
  '두인분': 2,
  '두병': 2,
  '두캔': 2,
  '세': 3,
  '셋': 3,
  '세개': 3,
  '세잔': 3,
  '세조각': 3,
  '세줄': 3,
  '세공기': 3,
  '세그릇': 3,
  '세인분': 3,
  '네': 4,
  '넷': 4,
  '네개': 4,
  '네잔': 4,
  '네조각': 4,
  '네줄': 4,
  '다섯': 5,
  '다섯개': 5,
  '여섯': 6,
  '여섯개': 6,
  '일곱': 7,
  '일곱개': 7,
  '여덟': 8,
  '여덟개': 8,
  '아홉': 9,
  '아홉개': 9,
  '열': 10,
  '열개': 10,
}

// Extract food name and quantity supporting Korean numbers, digits, and units
function parseToken(token: string): { name: string; quantity: number } | null {
  const trimmed = token.trim()
  if (!trimmed) return null

  // 1. Check for negative numbers directly
  const negativeMatch = trimmed.match(/(-\d+(\.\d+)?)/)
  if (negativeMatch) {
    const qty = Number.parseFloat(negativeMatch[0])
    return { name: trimmed.replace(/-\d+(\.\d+)?/, '').trim(), quantity: qty }
  }

  // 2. Check for numeric digits (e.g. "햄버거 2개", "치킨 1.5조각", "피자 3")
  const numMatch = trimmed.match(/(\d+(\.\d+)?)/)
  if (numMatch) {
    const quantity = Number.parseFloat(numMatch[0])
    const name = trimmed.replace(/\d+(\.\d+)?\s*(개|조각|잔|캔|병|줄|공기|그릇|인분|판|봉지|팩|세트|마리|쪽)?/g, '').trim()
    return { name: name || trimmed, quantity }
  }

  // 3. Check for Korean written numbers (e.g. "햄버거 한 개", "치킨 두조각", "피자 반개")
  for (const [word, num] of Object.entries(KOREAN_NUMBERS)) {
    if (trimmed.endsWith(word) || trimmed.includes(` ${word}`) || trimmed.includes(`${word} `)) {
      const name = trimmed.replace(new RegExp(`\\s*${word}\\s*(개|조각|잔|캔|병|줄|공기|그릇|인분|판|봉지|팩|세트)?`, 'g'), '').trim()
      if (name) {
        return { name, quantity: num }
      }
    }
  }

  // Default fallback: 1 serving
  return { name: trimmed, quantity: 1 }
}

function matchFood(name: string): string | null {
  const clean = name.replace(/\s+/g, '')
  if (FOOD_DB[clean] !== undefined) return clean

  // Match if food name contains key or key contains name
  const keys = Object.keys(FOOD_DB)
  // Exact includes
  const directFound = keys.find((k) => clean.includes(k) || k.includes(clean))
  if (directFound) return directFound

  return null
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

  // Split by comma, newline, plus (+), or natural conjunctions (그리고, 와, 과, 및)
  const tokens = input
    .split(/[,/\n+]|\s+그리고\s+|\s+와\s+|\s+과\s+|\s+및\s+/)
    .map((t) => t.trim())
    .filter(Boolean)

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
      message: '입력하신 음식을 찾을 수 없습니다. 음식명을 확인하고 다시 시도해주세요.',
    }
  }

  const totalCalories = knownItems.reduce((sum, i) => sum + i.calories, 0)

  const workouts: WorkoutPlan[] = WORKOUTS.map((w) => ({
    key: w.key,
    label: w.label,
    minutes: Math.max(1, Math.round(totalCalories / w.perMin)),
    intensity: w.intensity,
    kcalPerHour: w.kcalPerHour,
  }))

  return { ok: true, items: knownItems, totalCalories, workouts }
}
