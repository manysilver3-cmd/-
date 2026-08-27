// User profile storage
import type { UserProfile } from '@/lib/calorie'

const PROFILE_KEY = 'calorie_calculator_profile_v1'

export function getProfile(): UserProfile | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(PROFILE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as UserProfile
  } catch {
    return null
  }
}

export function saveProfile(profile: UserProfile): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
  } catch {
    // ignore
  }
}

export function clearProfile(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(PROFILE_KEY)
  } catch {
    // ignore
  }
}

// Calculation history
export type CalculationHistoryItem = {
  id: string
  timestamp: number
  input: string
  totalCalories: number
  itemCount: number
}

const STORAGE_KEY = 'calorie_calculator_history_v1'
const MAX_HISTORY_ITEMS = 5

export function getHistory(): CalculationHistoryItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as CalculationHistoryItem[]
  } catch {
    return []
  }
}

export function saveHistoryItem(input: string, totalCalories: number, itemCount: number): CalculationHistoryItem[] {
  if (typeof window === 'undefined') return []
  try {
    const current = getHistory()
    const newItem: CalculationHistoryItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      timestamp: Date.now(),
      input,
      totalCalories,
      itemCount,
    }
    const filtered = current.filter((item) => item.input.trim() !== input.trim())
    const updated = [newItem, ...filtered].slice(0, MAX_HISTORY_ITEMS)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    return updated
  } catch {
    return []
  }
}

export function clearHistory(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}
