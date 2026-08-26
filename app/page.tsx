import { CalorieCalculator } from '@/components/calorie-calculator'

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-flame/5 via-background to-background px-4 py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-flame/10 to-transparent blur-2xl"
      />
      <div className="relative z-10 w-full">
        <div className="mx-auto flex justify-center">
          <CalorieCalculator />
        </div>
      </div>
    </main>
  )
}
