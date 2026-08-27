# 🎨 Daeun Vitality 디자인 시스템 톤앤매너 개편 계획서

## 1. 개요
`design.md`에 정의된 **Daeun Vitality (다은 바이탈리티)** 디자인 명세에 맞추어, 전체 사이트의 컬러 파렛트, 타이포그래피, 사이버네틱 뷰티/네온 글래스모피즘 에프엑스 및 컴포넌트 톤앤매너를 프리미엄 네온 다크 테마 기반으로 전면 리팩토링합니다.

---

## 2. 주요 디자인 변경 사양 (Design Token Standard)

### 🎨 컬러 스키마 (Color Palette)
- **배경 (Background / Surface)**: `#131315` (Deep Cyber Black)
- **카드 / 컨테이너 (Surface Container)**: `#232325` (Dark Slate Container), High: `#2d2d2f`, Highest: `#39393b`
- **주요 색상 (Primary)**: `#39ff14` (Neon Electric Lime) - 메인 버튼, 핵심 수치, 시각적 포인트
- **보조 색상 (Secondary)**: `#00f3ff` (Cyber Cyan) - 운동 시간, 보조 배지, 서브 테두리
- **강조 색상 (Tertiary / Flame)**: `#ff0055` (Neon Magenta / Pink) - 목표 초과 경고, 고강도 운동
- **텍스트 (On-Surface)**: `#e6e1e5` (High Contrast White-Gray), Variant: `#cac4cf`

### 🔤 타이포그래피 (Typography)
- **헤딩 / 타이틀 (Display & Headline)**: `Space Grotesk` (Google Fonts)
- **본문 / 레이블 (Body & Label)**: `Inter` / `Noto Sans KR`

### ✨ 네온 & 글래스 효과 (Effects)
- **`neon-glow-primary`**: `0 0 12px rgba(57, 255, 20, 0.6)`
- **`neon-glow-secondary`**: `0 0 12px rgba(0, 243, 255, 0.6)`
- **`neon-glow-tertiary`**: `0 0 12px rgba(255, 0, 85, 0.6)`
- **`glass-blur`**: `backdrop-blur(12px)` + `bg-[#232325]/80` + `border border-[#39393b]/60`

---

## 3. 세부 수정 단계 및 구체적 계획

### 1단계: 폰트 및 글로벌 CSS 디자인 토큰 구축 (`app/layout.tsx`, `app/globals.css`)
- `next/font/google`을 활용해 `Space_Grotesk` 및 `Inter` 폰트 로드 및 CSS 변수(`--font-space-grotesk`, `--font-inter`) 설정.
- `globals.css`의 CSS 변수(`:root`, `.dark`)를 `design.md` Hex 코드로 재정의.
- `@utility` 또는 네온 글래스 유틸리티 클래스(`.neon-border-primary`, `.neon-glow-primary`, `.glass-card`) 추가.

### 2단계: 메인 인풋 & 헤더 영역 톤앤매너 교체 (`components/calorie-calculator.tsx`, `components/profile-panel.tsx`)
- 헤더 제목 및 파스텔 톤 요소를 Cyberpunk/Vibrant 테크놀로지 어두운 톤으로 변경.
- 입력창: 네온 그린 오버레이(`focus:ring-[#39ff14]`, 글래스모피즘 테두리).
- 프로필 패널: `#232325` 컨테이너 기반 네온 아웃라인 적용.

### 3단계: 결과 리포트 & 운동 카드 디자인 전면 개편 (`components/result-section.tsx`)
- **칼로리 총합 카드**: `#39ff14` 네온 서클/프로그레스 오버레이.
- **AI 리포트 카드**: Cyber Cyan (`#00f3ff`) 테두리 및 미래지향적 네온 인디케이터.
- **운동 7종 카드**: 다크 카드 스페이스 위에 각 운동별 네온 액센트 컬러 리플렉션 적용.
- **장기 목표 현황 카운터**: Neon Magenta / Cyan 듀오 톤의 화려한 네온 대시보드 카드.

### 4단계: 검증 및 배포
- `next build`를 통해 빌드 및 스타일 무결성 확인.
- Git Commit & Push 및 Vercel CLI 프로덕션 자동 배포.

---

## 4. 작업 진척 관리 (Sprint Backlog 연동)
- **Sprint 9**: Daeun Vitality 디자인 시스템 전면 적용 및 네온 글래스 UI 개편 (진행 예정)
