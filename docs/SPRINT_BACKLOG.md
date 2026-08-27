# 📑 스프린트 백로그 및 진행 현황표 (Sprint Backlog)

> **프로젝트**: 칼로리 & 운동 시간 계산기  
> **상태 범례**: ⬜ 대기 (TODO) | 🟨 진행중 (IN PROGRESS) | 🟩 완료 (DONE) | 🟦 검증완료 (VERIFIED)

---

## 🏃 Sprint 1: 핵심 UI 프레임워크 & 입력 시스템
- **기간**: Sprint 1
- **목표**: PRD 명세에 따른 단일 페이지 레이아웃과 반응형 텍스트 입력창 구축
- **진행 상태**: 🟦 100% 검증 완료 (VERIFIED)

### 태스크 목록
| ID | 태스크 명 | 담당 / 영역 | 상태 | 완료 조건 (Acceptance Criteria) |
| :--- | :--- | :--- | :---: | :--- |
| **SP1-01** | Next.js 14 레이아웃 및 테마 토큰 설정 | `app/layout.tsx`, `globals.css` | 🟦 검증완료 | 다크/라이트 테마 변수 및 기본 폰트 적용 |
| **SP1-02** | Header 및 소개 섹션 제작 | `components/calorie-calculator.tsx` | 🟦 검증완료 | 아이콘 및 직관적인 타이틀/설명 배치 |
| **SP1-03** | Multi-line Text Area 컴포넌트 구현 | `components/calorie-calculator.tsx` | 🟦 검증완료 | 4줄 기본 높이, 500자 제한, 글자수 카운터 |
| **SP1-04** | 실시간 입력값 검증 및 에러 UI | `components/calorie-calculator.tsx` | 🟦 검증완료 | 빈 값 입력 시 하단 빨간색 에러 텍스트 표시 |
| **SP1-05** | Primary 계산 버튼 및 스피너 | `components/ui/button.tsx` | 🟦 검증완료 | 클릭 시 로딩 스피너 및 비활성화 처리 |
| **SP1-06** | 단축키 지원 (`Ctrl+Enter`) | `components/calorie-calculator.tsx` | 🟦 검증완료 | 키보드 조합으로 즉시 계산 트리거 |

---

## 🏃 Sprint 2: 파싱 엔진 & 4단계 순차 결과 렌더링
- **기간**: Sprint 2
- **목표**: 자연어 식단 텍스트 파싱, 칼로리/운동 연산 및 PRD 4단계(3라인) 결과 뷰 완성
- **진행 상태**: 🟦 100% 검증 완료 (VERIFIED)

### 태스크 목록
| ID | 태스크 명 | 담당 / 영역 | 상태 | 완료 조건 (Acceptance Criteria) |
| :--- | :--- | :--- | :---: | :--- |
| **SP2-01** | 텍스트 토큰 분리기 및 수량 파서 | `lib/calorie.ts` | 🟦 검증완료 | 한국어 수량어(한/두/세/반 등) 및 단위/구분자 유연 추출 |
| **SP2-02** | 기본 식품 DB 및 칼로리 매칭 | `lib/calorie.ts` | 🟦 검증완료 | 40+종 다빈도 식단 데이터베이스 매칭 연동 |
| **SP2-03** | 운동별 소모 시간 산출 로직 | `lib/calorie.ts` | 🟦 검증완료 | MET/분당 소모 칼로리 공식 및 시간 환산 구현 |
| **SP2-04** | 1단계: 개별 음식별 칼로리 뱃지 | `components/result-section.tsx` | 🟦 검증완료 | 음식명 × 수량 · 개별 칼로리 뱃지 렌더링 |
| **SP2-05** | 2단계: 총칼로리 하이라이트 카드 | `components/result-section.tsx` | 🟦 검증완료 | 불꽃 아이콘과 대형 칼로리 수치 강조 |
| **SP2-06** | 3단계: 추천 운동 종목 목록 | `components/result-section.tsx` | 🟦 검증완료 | 걷기, 러닝, 자전거 맞춤 칩/카드 노출 |
| **SP2-07** | 4단계: 운동별 필요 시간 그리드 | `components/result-section.tsx` | 🟦 검증완료 | 3열 카드 형태로 필요 소모 시간(분/시간) 정밀 표기 |

---

## 🏃 Sprint 3: 비동기 로딩, 예외 UX 및 웹 접근성
- **기간**: Sprint 3
- **목표**: 체감 속도 향상을 위한 스켈레톤 UI, 에러 복구 배너 및 접근성 최적화
- **진행 상태**: 🟦 100% 검증 완료 (VERIFIED)

### 태스크 목록
| ID | 태스크 명 | 담당 / 영역 | 상태 | 완료 조건 (Acceptance Criteria) |
| :--- | :--- | :--- | :---: | :--- |
| **SP3-01** | 스켈레톤 로딩 플레이스홀더 | `components/calorie-calculator.tsx` | 🟦 검증완료 | 계산 대기 중 카드 형태의 펄스 스켈레톤 표시 |
| **SP3-02** | 서버/미인식 에러 배너 UI | `components/calorie-calculator.tsx` | 🟦 검증완료 | 에러 발생 시 경고 배너 및 `다시 시도` 버튼 제공 |
| **SP3-03** | `error` 키워드 기반 테스트 트리거 | `lib/calorie.ts` | 🟦 검증완료 | QA/데모용 에러 상황 재현 기능 |
| **SP3-04** | 웹 접근성 (A11y) 속성 보강 | UI 컴포넌트 전반 | 🟦 검증완료 | `aria-live="polite"`, `aria-atomic`, `aria-describedby` 및 포커스 링 점검 |

---

## 🏃 Sprint 4: 데이터베이스 확장, 매칭 고도화 및 최종 QA
- **기간**: Sprint 4
- **목표**: 100+ 식품 DB 확대, 퍼지 검색 및 3초 이내 성능 벤치마크 검증
- **진행 상태**: 🟦 100% 검증 완료 (VERIFIED)

### 태스크 목록
| ID | 태스크 명 | 담당 / 영역 | 상태 | 완료 조건 (Acceptance Criteria) |
| :--- | :--- | :--- | :---: | :--- |
| **SP4-01** | 다빈도 섭취 식품 DB 100종 추가 | `lib/calorie.ts` | 🟦 검증완료 | 외식/편의점/분식/음료 칼로리 DB 100종 이상 탑재 |
| **SP4-02** | 복합어/유의어 및 띄어쓰기 퍼지 매칭 | `lib/calorie.ts` | 🟦 검증완료 | `치즈 버거` -> `치즈버거`, `아아` -> `아이스아메리카노` 등 매칭 지원 |
| **SP4-03** | 계산 이력(히스토리) 로컬 저장 | `lib/storage.ts`, `CalorieCalculator` | 🟦 검증완료 | LocalStorage 기반 최근 5건 계산 기록 저장, 원클릭 재계산 및 삭제 |
| **SP4-04** | 3초 렌더링 벤치마크 & 크로스 브라우징 | QA / Performance | 🟦 검증완료 | 실측 500ms 이내 초고속 응답 및 빌드 최적화 검증 |

---

## 🏃 Sprint 5: Google Gemini AI 인공지능 식단 분석 & 맞춤 코칭
- **기간**: Sprint 5
- **목표**: Gemini AI 연동 기반 비정형 자연어 식단 정밀 분석 및 영양/운동 피드백 코칭 제공
- **진행 상태**: 🟦 100% 검증 완료 (VERIFIED)

### 태스크 목록
| ID | 태스크 명 | 담당 / 영역 | 상태 | 완료 조건 (Acceptance Criteria) |
| :--- | :--- | :--- | :---: | :--- |
| **SP5-01** | Gemini API Route 구축 & 구조화 응답 | `app/api/ai-calculate/route.ts` | 🟦 검증완료 | Gemini 1.5 Flash 모델 연동 및 JSON Schema 응답 처리 |
| **SP5-02** | 하이브리드 계산 엔진 및 Fallback | `lib/ai-calorie.ts` | 🟦 검증완료 | API 실패 또는 타임아웃 시 로컬 계산기로 100% 무중단 전환 |
| **SP5-03** | AI 영양 코칭 & 탄단지 밸런스 UI | `components/result-section.tsx` | 🟦 검증완료 | AI 식단 총평, 탄/단/지 평가 칩 및 실천 팁 렌더링 |
| **SP5-04** | 대화형 입력 지원 & 컴포넌트 연동 | `components/calorie-calculator.tsx` | 🟦 검증완료 | 비정형 자연어 문장 지원 및 AI 계산 비동기 로딩 연동 |
| **SP5-05** | API 키 보안 관리 및 문서 갱신 | `.env`, `.gitignore`, PRD, Docs | 🟦 검증완료 | `.env` 보안 격리, `.env.example` 및 전체 기획/개발 문서 최신화 |

---

## 🏃 Sprint 6: 신체 프로필 개인화 + 운동 7종 확대 + 다크모드
- **기간**: Sprint 6
- **목표**: 사용자 신체 정보 기반 맞춤 일일 칼로리 목표, 운동 7종 소모 시간, 다크모드 지원
- **진행 상태**: 🟦 100% 검증 완료 (VERIFIED)

### 태스크 목록
| ID | 태스크 명 | 담당 / 영역 | 상태 | 완료 조건 (Acceptance Criteria) |
| :--- | :--- | :--- | :---: | :--- |
| **SP6-01** | 신체 프로필 입력 패널 제작 | `components/profile-panel.tsx` | 🟦 검증완료 | 성별/나이/체중/키/활동수준/목표 입력 및 LocalStorage 저장 |
| **SP6-02** | Mifflin BMR/TDEE 계산 엔진 확장 | `lib/calorie.ts` | 🟦 검증완료 | 개인 프로필 기반 기초대사량·일일소모량·목표 섭취 칼로리 실시간 계산 |
| **SP6-03** | 프로필 저장/불러오기 스토리지 | `lib/storage.ts` | 🟦 검증완료 | `getProfile`, `saveProfile`, `clearProfile` 함수 구현 |
| **SP6-04** | 일일 칼로리 진행 바 (Progress Bar) | `components/result-section.tsx` | 🟦 검증완료 | 섭취 칼로리 vs 목표 칼로리 진행률 및 초과/여유 메시지 시각화 |
| **SP6-05** | 운동 종목 3종→7종 확대 | `lib/calorie.ts`, `result-section.tsx` | 🟦 검증완료 | 걷기·러닝·자전거·계단·줄넘기·수영·홈트 7종 아이콘 및 소모 시간 표기 |
| **SP6-06** | 다크모드 토글 버튼 | `components/profile-panel.tsx` | 🟦 검증완료 | 우측 상단 Moon/Sun 버튼으로 다크/라이트 모드 전환 |
| **SP6-07** | 프로필 연동 운동 시간 맞춤 계산 | `result-section.tsx` | 🟦 검증완료 | 사용자 체중 기준 운동 시간 표시 및 하단 기준 안내 메시지 맞춤화 |

---

## 🍔 Sprint 7: 유명 프랜차이즈 브랜드 메뉴 DB 연동
- **기간**: Sprint 7
- **목표**: 맘스터치, 맥도날드 등 국내 주요 패스트푸드 및 카페 브랜드의 대표 메뉴 칼로리를 정확히 계산
- **진행 상태**: 🟦 100% 검증 완료 (VERIFIED)

### 태스크 목록
| ID | 태스크 명 | 담당 / 영역 | 상태 | 완료 조건 (Acceptance Criteria) |
| :--- | :--- | :--- | :---: | :--- |
| **SP7-01** | 프랜차이즈 칼로리 DB 구축 | `lib/calorie.ts` | 🟦 검증완료 | 10개 이상 주요 브랜드 대표 메뉴 및 세트메뉴 (Kcal, 라벨) 데이터 구축 |
| **SP7-02** | 브랜드 별칭 매핑 (Aliases) | `lib/calorie.ts` | 🟦 검증완료 | '맘스', '맥날', '스벅' 등 약어/은어로도 브랜드 인식 가능하게 매핑 |
| **SP7-03** | Local Fallback 엔진에 브랜드 DB 적용 | `lib/calorie.ts` | 🟦 검증완료 | 일반 DB 매칭 전에 브랜드-메뉴 조합을 우선 확인 (`lookupBrandMenu`) |
| **SP7-04** | AI System Prompt 에 브랜드 DB 주입 | `api/ai-calculate/route.ts`| 🟦 검증완료 | Gemini가 브랜드를 인지하도록 전체 `BRAND_MENU_DB` 텍스트 변환 및 시스템 프롬프트 주입 |

---

## 🎯 Sprint 8: 목표 체중 설정 및 장기 칼로리 소모량 계산
- **기간**: Sprint 8
- **목표**: 현재 체중과 목표 체중(예: 50kg -> 45kg)을 비교하여 목표 달성에 필요한 총 칼로리 및 운동 시간 산출
- **진행 상태**: 🟦 100% 검증 완료 (VERIFIED)

### 태스크 목록
| ID | 태스크 명 | 담당 / 영역 | 상태 | 완료 조건 (Acceptance Criteria) |
| :--- | :--- | :--- | :---: | :--- |
| **SP8-01** | `UserProfile`에 목표 체중 필드 추가 | `lib/calorie.ts` | 🟦 검증완료 | `targetWeight?: number` 필드 및 장기 소모 유틸리티 함수 `calculateLongTermGoal` 추가 |
| **SP8-02** | 프로필 팝업 UI 목표 체중 입력란 구현 | `components/profile-panel.tsx` | 🟦 검증완료 | 목표 체중 입력 시 체중 감량/증량 자동 판단 및 UI 반영 |
| **SP8-03** | [장기 목표 현황] 리포트 카운터 개발 | `components/result-section.tsx` | 🟦 검증완료 | 총 필요한 소모 칼로리(7,700kcal/kg 공식) 및 걷기/러닝/계단오르기 환산 시간 표시 |

---

## 📊 스프린트 달성도 현황
- **Sprint 1~7**: 100% (37/37 검증완료 🟦)
- **Sprint 8**: 100% (3/3 검증완료 🟦)
- **전체 진척도**: **100% (40/40 검증완료 🟦)**
