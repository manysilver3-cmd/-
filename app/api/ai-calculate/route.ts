import { NextResponse } from 'next/server'
import { calculate as fallbackCalculate, WORKOUTS, BRAND_MENU_DB } from '@/lib/calorie'

// Convert BRAND_MENU_DB to a compact text format for the prompt
const brandDBText = Object.entries(BRAND_MENU_DB)
  .map(([brand, menus]) => {
    const menuList = Object.entries(menus)
      .map(([menuName, data]) => `${data.label}: ${data.kcal}kcal`)
      .join(', ')
    return `[${brand}] ${menuList}`
  })
  .join('\n')

export type AINutritionFeedback = {
  summary: string
  macroAnalysis: {
    carbsLevel: '낮음' | '적정' | '높음'
    proteinLevel: '낮음' | '적정' | '높음'
    fatLevel: '낮음' | '적정' | '높음'
  }
  tips: string[]
}

export type AICalcResponse = {
  ok: true
  source: 'gemini' | 'local'
  items: Array<{
    name: string
    quantity: number
    unitText?: string
    calories: number
    known: boolean
  }>
  totalCalories: number
  workouts: Array<{
    key: string
    label: string
    minutes: number
    intensity: string
    kcalPerHour: number
  }>
  feedback?: AINutritionFeedback
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const text = typeof body?.text === 'string' ? body.text.trim() : ''

    if (!text) {
      return NextResponse.json(
        { ok: false, message: '오늘 섭취한 음식을 입력해주세요' },
        { status: 400 }
      )
    }

    if (text.toLowerCase() === 'error') {
      return NextResponse.json(
        { ok: false, message: '일시적인 오류로 결과를 불러오지 못했습니다. 다시 시도해주세요.' },
        { status: 500 }
      )
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY

    // If no API key is provided, use high-accuracy local parser directly
    if (!apiKey) {
      const localRes = fallbackCalculate(text)
      if (localRes.ok) {
        return NextResponse.json({ ...localRes, source: 'local' })
      }
      return NextResponse.json(localRes, { status: 400 })
    }

    // Call Gemini API with Structured Output JSON Schema
    const systemInstruction = `당신은 대한민국 최고의 공인 임상 영양사 및 운동 생리학 전문가입니다.
사용자가 입력한 식단 텍스트(자연어, 일기, 대화형, 오타 포함)를 정밀 분석하여 각 음식 항목별 칼로리와 전체 영양 평가를 JSON으로만 반환하세요.

규칙:
1. 한국인의 일반적인 1회 섭취량 기준(외식/가공식품 포함)으로 정확한 칼로리를 추정하세요.
2. 수량(개, 조각, 공기, 캔, 잔, 그릇, 인분 등)을 파악하여 개별 총 칼로리를 계산하세요.
3. feedback에는 식단의 탄단지 균형 평가, 건강 팁 2가지를 친절하고 전문적으로 담으세요.
4. 아래 제공된 [브랜드별 메뉴 칼로리 DB]에 매칭되는 음식이 있다면 반드시 해당 정확한 명칭과 칼로리(kcal)를 사용하세요.
5. 반드시 유효한 JSON 문자열만 출력하세요.

[브랜드별 메뉴 칼로리 DB]
${brandDBText}`

    const prompt = `사용자 식단 입력: "${text}"

다음 JSON 스키마 형식으로 응답하세요:
{
  "items": [
    {
      "name": "음식명",
      "quantity": 1,
      "unitText": "인분/개/그릇 등",
      "calories": 500
    }
  ],
  "totalCalories": 500,
  "feedback": {
    "summary": "식단에 대한 핵심 영양 요약 (1~2문장)",
    "macroAnalysis": {
      "carbsLevel": "적정",
      "proteinLevel": "적정",
      "fatLevel": "적정"
    },
    "tips": [
      "실천 가능한 식단/수분 팁",
      "소화 및 대사 촉진 팁"
    ]
  }
}`

    // Attempt Gemini 1.5 Flash API call
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] },
            generationConfig: {
              responseMimeType: 'application/json',
              temperature: 0.2,
            },
          }),
          signal: AbortSignal.timeout(5000), // 5s timeout
        }
      )

      if (response.ok) {
        const geminiData = await response.json()
        const rawJsonText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text

        if (rawJsonText) {
          const parsed = JSON.parse(rawJsonText)
          if (Array.isArray(parsed.items) && parsed.items.length > 0) {
            const totalCalories =
              typeof parsed.totalCalories === 'number'
                ? parsed.totalCalories
                : parsed.items.reduce((acc: number, cur: any) => acc + (cur.calories || 0), 0)

            const workouts = WORKOUTS.map((w) => ({
              key: w.key,
              label: w.label,
              minutes: Math.max(1, Math.round(totalCalories / w.perMin)),
              intensity: w.intensity,
              kcalPerHour: w.kcalPerHour,
            }))

            const result: AICalcResponse = {
              ok: true,
              source: 'gemini',
              items: parsed.items.map((it: any) => ({
                name: String(it.name),
                quantity: Number(it.quantity) || 1,
                unitText: it.unitText ? String(it.unitText) : undefined,
                calories: Math.round(Number(it.calories) || 0),
                known: true,
              })),
              totalCalories: Math.round(totalCalories),
              workouts,
              feedback: parsed.feedback,
            }

            return NextResponse.json(result)
          }
        }
      }
    } catch (apiErr) {
      console.warn('Gemini API call failed, falling back to local calculation engine:', apiErr)
    }

    // Fallback to robust local engine
    const localRes = fallbackCalculate(text)
    if (localRes.ok) {
      return NextResponse.json({ ...localRes, source: 'local' })
    }
    return NextResponse.json(localRes, { status: 400 })
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, message: err?.message || '처리 중 오류가 발생했습니다' },
      { status: 500 }
    )
  }
}
