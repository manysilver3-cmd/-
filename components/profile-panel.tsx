'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, User, X, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { calculateDailyTargetCalories, type UserProfile } from '@/lib/calorie'
import { getProfile, saveProfile } from '@/lib/storage'

type Props = {
  onProfileChange?: (profile: UserProfile | null) => void
}

export function ProfilePanel({ onProfileChange }: Props) {
  const [open, setOpen] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    gender: 'male',
    age: 30,
    weight: 65,
    height: 170,
    activityLevel: 'light',
    goal: 'maintain',
  })
  const [saved, setSaved] = useState<UserProfile | null>(null)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const stored = getProfile()
    if (stored) {
      setProfile(stored)
      setSaved(stored)
      onProfileChange?.(stored)
    }
    // Check current dark mode
    const isDark = document.documentElement.classList.contains('dark')
    setDarkMode(isDark)
  }, [])

  function handleToggleDark() {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      setDarkMode(false)
    } else {
      html.classList.add('dark')
      setDarkMode(true)
    }
  }

  function handleSave() {
    saveProfile(profile)
    setSaved(profile)
    onProfileChange?.(profile)
    setOpen(false)
  }

  function handleClear() {
    import('@/lib/storage').then(({ clearProfile }) => {
      clearProfile()
      setSaved(null)
      onProfileChange?.(null)
    })
  }

  const targets = saved ? calculateDailyTargetCalories(saved) : null

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      {/* Profile button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-2xl border border-[#39ff14]/40 bg-[#232325]/90 px-3.5 py-2 text-xs font-bold text-[#e6e1e5] shadow-lg backdrop-blur-md transition-all hover:border-[#39ff14] hover:bg-[#232325]"
      >
        <User className="size-3.5 text-[#39ff14]" />
        {saved ? `${saved.weight}kg · ${saved.goal === 'lose' ? '감량' : saved.goal === 'gain' ? '증량' : '유지'}` : '내 프로필'}
        <ChevronDown className={`size-3.5 text-[#cac4cf] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Profile drawer */}
      {open && (
        <div className="absolute right-0 top-12 w-80 rounded-3xl border border-[#39ff14]/30 bg-[#232325]/95 p-5 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in zoom-in-95">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold font-display text-[#e6e1e5]">내 신체 프로필 설정</h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-xl p-1 text-[#cac4cf] hover:bg-[#39393b] hover:text-[#e6e1e5]"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="space-y-3">
            {/* Gender */}
            <div>
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">성별</label>
              <div className="flex gap-2">
                {(['male', 'female'] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setProfile((p) => ({ ...p, gender: g }))}
                    className={`flex-1 rounded-xl border py-2 text-xs font-bold transition-colors ${
                      profile.gender === g
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {g === 'male' ? '남성' : '여성'}
                  </button>
                ))}
              </div>
            </div>

            {/* Weight & Target Weight */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="mb-1 block text-xs font-semibold text-muted-foreground">현재 체중 (kg)</label>
                <input
                  type="number"
                  min={30} max={200}
                  value={profile.weight}
                  onChange={(e) => {
                    const w = Number(e.target.value)
                    setProfile((p) => {
                      const tw = p.targetWeight ?? w
                      const goal = tw < w ? 'lose' : tw > w ? 'gain' : 'maintain'
                      return { ...p, weight: w, goal }
                    })
                  }}
                  className="w-full rounded-xl border border-border bg-background px-2.5 py-2 text-sm font-bold text-center outline-none focus-visible:border-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-primary font-bold">목표 체중 (kg)</label>
                <input
                  type="number"
                  min={30} max={200}
                  placeholder="예: 45"
                  value={profile.targetWeight ?? ''}
                  onChange={(e) => {
                    const val = e.target.value
                    const tw = val !== '' ? Number(val) : undefined
                    setProfile((p) => {
                      const goal = tw !== undefined ? (tw < p.weight ? 'lose' : tw > p.weight ? 'gain' : 'maintain') : p.goal
                      return { ...p, targetWeight: tw, goal }
                    })
                  }}
                  className="w-full rounded-xl border border-primary/50 bg-primary/5 px-2.5 py-2 text-sm font-bold text-center text-primary outline-none focus-visible:border-primary"
                />
              </div>
            </div>

            {/* Age & Height */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="mb-1 block text-xs font-semibold text-muted-foreground">나이</label>
                <input
                  type="number"
                  min={10} max={100}
                  value={profile.age}
                  onChange={(e) => setProfile((p) => ({ ...p, age: Number(e.target.value) }))}
                  className="w-full rounded-xl border border-border bg-background px-2.5 py-2 text-sm font-bold text-center outline-none focus-visible:border-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-muted-foreground">키 (cm)</label>
                <input
                  type="number"
                  min={100} max={250}
                  value={profile.height}
                  onChange={(e) => setProfile((p) => ({ ...p, height: Number(e.target.value) }))}
                  className="w-full rounded-xl border border-border bg-background px-2.5 py-2 text-sm font-bold text-center outline-none focus-visible:border-primary"
                />
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">활동 수준</label>
              <select
                value={profile.activityLevel}
                onChange={(e) => setProfile((p) => ({ ...p, activityLevel: e.target.value as UserProfile['activityLevel'] }))}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold outline-none focus-visible:border-primary"
              >
                <option value="sedentary">거의 활동 없음 (사무직)</option>
                <option value="light">가벼운 활동 (주 1~3회 운동)</option>
                <option value="moderate">보통 활동 (주 3~5회 운동)</option>
                <option value="active">활발한 활동 (주 6~7회 운동)</option>
              </select>
            </div>

            {/* Goal */}
            <div>
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">목표</label>
              <div className="flex gap-2">
                {(['lose', 'maintain', 'gain'] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setProfile((p) => ({ ...p, goal: g }))}
                    className={`flex-1 rounded-xl border py-2 text-xs font-bold transition-colors ${
                      profile.goal === g
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {g === 'lose' ? '체중 감량' : g === 'maintain' ? '체중 유지' : '체중 증량'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Button size="sm" className="flex-1 rounded-xl" onClick={handleSave}>
              저장
            </Button>
            {saved && (
              <Button size="sm" variant="outline" className="rounded-xl" onClick={handleClear}>
                초기화
              </Button>
            )}
          </div>

          {/* BMR/TDEE preview */}
          <div className="mt-4 rounded-xl bg-muted/50 p-3">
            {(() => {
              const preview = calculateDailyTargetCalories(profile)
              return (
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <p className="text-muted-foreground">기초대사량</p>
                    <p className="font-bold text-foreground">{preview.bmr.toLocaleString()}</p>
                    <p className="text-muted-foreground">kcal</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">일일 소모량</p>
                    <p className="font-bold text-foreground">{preview.tdee.toLocaleString()}</p>
                    <p className="text-muted-foreground">kcal</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">목표 섭취량</p>
                    <p className="font-bold text-primary">{preview.targetCalories.toLocaleString()}</p>
                    <p className="text-muted-foreground">kcal</p>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      {/* BMR badge when saved */}
      {saved && targets && !open && (
        <div className="hidden sm:flex items-center gap-1.5 rounded-xl border border-border bg-card/90 px-3 py-2 text-xs backdrop-blur-sm shadow-sm">
          <span className="text-muted-foreground">목표</span>
          <span className="font-black text-primary">{targets.targetCalories.toLocaleString()} kcal</span>
          <span className="text-muted-foreground">/일</span>
        </div>
      )}
    </div>
  )
}
