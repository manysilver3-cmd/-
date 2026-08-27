// Food calorie database (approx kcal per single serving/unit)
export const FOOD_DB: Record<string, number> = {
  // Fast food & Burger
  햄버거: 500,
  치즈버거: 550,
  불고기버거: 520,
  새우버거: 490,
  치킨버거: 580,
  빅맥: 580,
  와퍼: 620,
  감자튀김: 380,
  치즈스틱: 160,
  치킨너겟: 220,

  // Chicken & Pizza
  치킨: 250, // per 조각
  후라이드치킨: 260,
  양념치킨: 320,
  간장치킨: 290,
  피자: 300, // per 조각
  페퍼로니피자: 320,
  치즈피자: 280,
  콤비네이션피자: 310,
  불고기피자: 330,

  // Korean Meals & Stews (한식 및 찌개류)
  밥: 300, // per 공기
  공기밥: 300,
  햇반: 310,
  현미밥: 290,
  김치찌개: 450,
  된장찌개: 350,
  순두부찌개: 400,
  부대찌개: 650,
  청국장: 400,
  제육볶음: 600,
  불고기: 450,
  소불고기: 480,
  갈비탕: 550,
  설렁탕: 450,
  곰탕: 480,
  육개장: 520,
  삼계탕: 900,
  국밥: 600,
  순대국밥: 700,
  돼지국밥: 650,
  뼈해장국: 600,
  감자탕: 750,
  비빔밥: 550,
  돌솥비빔밥: 620,
  김치볶음밥: 550,
  새우볶음밥: 500,
  오므라이스: 650,
  카레: 550,
  카레라이스: 600,
  짜장밥: 700,
  잡채: 300,
  닭볶음탕: 600,
  찜닭: 650,
  삼겹살: 600, // 1인분
  목살: 500,
  돼지갈비: 650,
  소고기: 500,
  스테이크: 650,

  // Noodles & Chinese Food (면류 및 중식)
  라면: 500,
  신라면: 500,
  진라면: 500,
  불닭볶음면: 530,
  짜파게티: 600,
  비빔면: 530,
  너구리: 510,
  안성탕면: 500,
  짜장면: 700,
  짬뽕: 650,
  탕수육: 600,
  깐풍기: 550,
  마라탕: 800,
  마라샹궈: 900,
  양꼬치: 400,
  칼국수: 550,
  바지락칼국수: 500,
  수제비: 500,
  우동: 450,
  잔치국수: 400,
  비빔국수: 500,
  냉면: 500,
  물냉면: 480,
  비빔냉면: 550,
  콩국수: 520,
  쌀국수: 450,
  팟타이: 650,

  // Japanese & Western (일식 및 양식)
  돈까스: 800,
  치즈돈까스: 950,
  초밥: 350, // 5~6피스
  연어초밥: 380,
  모듬초밥: 500,
  회덮밥: 550,
  연어덮밥: 600,
  규동: 650,
  가츠동: 750,
  라멘: 600,
  돈코츠라멘: 700,
  파스타: 600,
  토마토파스타: 500,
  크림파스타: 750,
  까르보나라: 780,
  오일파스타: 550,
  봉골레: 530,
  리조또: 650,
  스테이크샐러드: 400,
  샐러드: 150,
  닭가슴살샐러드: 250,
  닭가슴살: 130,

  // Street Food & Snacks (분식 및 간식)
  김밥: 480, // per 줄
  참치김밥: 550,
  치즈김밥: 520,
  떡볶이: 400, // 1인분
  로제떡볶이: 600,
  치즈떡볶이: 500,
  순대: 350,
  튀김: 250,
  김말이: 150,
  오뎅: 100, // 1꼬치
  어묵: 100,
  핫도그: 300,
  만두: 300,
  군만두: 380,
  물만두: 250,
  호떡: 250,
  붕어빵: 120, // 1개
  타코야끼: 280, // 6알

  // Bakery & Desserts (베이커리 및 디저트)
  샌드위치: 350,
  토스트: 320,
  이삭토스트: 400,
  베이글: 300,
  크림치즈베이글: 420,
  식빵: 150, // 2쪽
  크루아상: 250,
  소금빵: 220,
  도넛: 300,
  와플: 350,
  크로플: 380,
  케이크: 400,
  치즈케이크: 380,
  초코케이크: 450,
  마카롱: 150,
  아이스크림: 250,
  초콜릿: 200,
  과자: 400,
  감자칩: 450,

  // Fruits & Healthy
  사과: 100,
  바나나: 90,
  오렌지: 70,
  포도: 80,
  딸기: 50,
  수박: 50,
  계란: 80,
  달걀: 80,
  삶은계란: 80,
  구운계란: 75,
  계란후라이: 100,
  고구마: 150,
  군고구마: 180,
  감자: 100,
  토마토: 30,
  방울토마토: 20,
  아보카도: 200,
  견과류: 150,

  // Drinks (음료 및 주류)
  콜라: 150, // per 캔
  사이다: 140,
  제로콜라: 0,
  제로사이다: 0,
  환타: 160,
  포카리스웨트: 70,
  에너지드링크: 110,
  몬스터: 15,
  핫식스: 115,
  커피: 10,
  아메리카노: 10,
  아이스아메리카노: 10,
  카페라떼: 150,
  바닐라라떼: 220,
  카라멜마키아또: 250,
  돌체라떼: 260,
  밀크티: 250,
  버블티: 350,
  스무디: 280,
  딸기스무디: 300,
  망고스무디: 290,
  우유: 130,
  초코우유: 180,
  딸기우유: 170,
  바나나우유: 200,
  두유: 110,
  주스: 120,
  오렌지주스: 120,
  사과주스: 110,
  맥주: 200, // 500cc
  생맥주: 200,
  캔맥주: 180,
  소주: 400, // 1병
  막걸리: 350, // 1병
  와인: 130, // 1잔
  하이볼: 160, // 1잔
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

// Synonyms and colloquial terms map
const SYNONYMS: Record<string, string> = {
  아아: '아이스아메리카노',
  뜨아: '아메리카노',
  커피한잔: '아메리카노',
  라떼: '카페라떼',
  바라: '바닐라라떼',
  후라이드: '후라이드치킨',
  양념: '양념치킨',
  페퍼로니: '페퍼로니피자',
  콤비네이션: '콤비네이션피자',
  치즈피자: '치즈피자',
  계란말이: '계란',
  달걀후라이: '계란후라이',
  제로콕: '제로콜라',
  콕: '콜라',
  생맥: '생맥주',
  맥주한잔: '맥주',
  소주한병: '소주',
  불닭: '불닭볶음면',
  짜파: '짜파게티',
  신라면블랙: '신라면',
  치즈스틱2개: '치즈스틱',
}

function matchFood(name: string): string | null {
  const clean = name.replace(/\s+/g, '')
  if (FOOD_DB[clean] !== undefined) return clean
  if (SYNONYMS[clean] && FOOD_DB[SYNONYMS[clean]] !== undefined) return SYNONYMS[clean]

  // Direct includes matching
  const keys = Object.keys(FOOD_DB)
  const directFound = keys.find((k) => clean.includes(k) || k.includes(clean))
  if (directFound) return directFound

  // Synonyms includes matching
  for (const [syn, target] of Object.entries(SYNONYMS)) {
    if (clean.includes(syn) || syn.includes(clean)) {
      return target
    }
  }

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
