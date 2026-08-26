# 📑 스프린트 백로그 및 진행 현황표 (Sprint Backlog)

> **프로젝트**: 칼로리 & 운동 시간 계산기  
> **상태 범례**: ⬜ 대기 (TODO) | 🟨 진행중 (IN PROGRESS) | 🟩 완료 (DONE) | 🟦 검증완료 (VERIFIED)

---

## 🏃 Sprint 1: 핵심 UI 프레임워크 & 입력 시스템
- **기간**: Sprint 1
- **목표**: PRD 명세에 따른 단일 페이지 레이아웃과 반응형 텍스트 입력창 구축

### 태스크 목록
| ID | 태스크 명 | 담당 / 영역 | 상태 | 완료 조건 (Acceptance Criteria) |
| :--- | :--- | :--- | :---: | :--- |
| **SP1-01** | Next.js 14 레이아웃 및 테마 토큰 설정 | `app/layout.tsx`, `globals.css` | 🟩 완료 | 다크/라이트 테마 변수 및 기본 폰트 적용 |
| **SP1-02** | Header 및 소개 섹션 제작 | `components/calorie-calculator.tsx` | 🟩 완료 | 아이콘 및 직관적인 타이틀/설명 배치 |
| **SP1-03** | Multi-line Text Area 컴포넌트 구현 | `components/calorie-calculator.tsx` | 🟩 완료 | 4줄 기본 높이, 500자 제한, 글자수 카운터 |
| **SP1-04** | 실시간 입력값 검증 및 에러 UI | `components/calorie-calculator.tsx` | 🟩 완료 | 빈 값 입력 시 하단 빨간색 에러 텍스트 표시 |
| **SP1-05** | Primary 계산 버튼 및 스피너 | `components/ui/button.tsx` | 🟩 완료 | 클릭 시 로딩 스피너 및 비활성화 처리 |
| **SP1-06** | 단축키 지원 (`Ctrl+Enter`) | `components/calorie-calculator.tsx` | 🟩 완료 | 키보드 조합으로 즉시 계산 트리거 |

---

## 🏃 Sprint 2: 파싱 엔진 & 4단계 순차 결과 렌더링
- **기간**: Sprint 2
- **목표**: 자연어 식단 텍스트 파싱, 칼로리/운동 연산 및 PRD 4단계 결과 뷰 완성

### 태스크 목록
| ID | 태스크 명 | 담당 / 영역 | 상태 | 완료 조건 (Acceptance Criteria) |
| :--- | :--- | :--- | :---: | :--- |
| **SP2-01** | 텍스트 토큰 분리기 및 수량 파서 | `lib/calorie.ts` | 🟩 완료 | 쉼표/줄바꿈 기준 토큰 분리 및 수량 추출 |
| **SP2-02** | 기본 식품 DB 및 칼로리 매칭 | `lib/calorie.ts` | 🟩 완료 | 주요 20종 식품 데이터베이스 연동 |
| **SP2-03** | 운동별 소모 시간 산출 로직 | `lib/calorie.ts` | 🟩 완료 | 걷기/러닝/자전거 분당 소모 칼로리 공식 구현 |
| **SP2-04** | 1단계: 개별 음식별 칼로리 뱃지 | `components/result-section.tsx` | 🟩 완료 | 음식명 × 수량 · 개별 칼로리 뱃지 렌더링 |
| **SP2-05** | 2단계: 총칼로리 하이라이트 카드 | `components/result-section.tsx` | 🟩 완료 | 불꽃 아이콘과 대형 칼로리 수치 강조 |
| **SP2-06** | 3단계: 추천 운동 종목 목록 | `components/result-section.tsx` | 🟩 완료 | 걷기, 러닝, 자전거 칩 컴포넌트 노출 |
| **SP2-07** | 4단계: 운동별 필요 시간 그리드 | `components/result-section.tsx` | 🟩 완료 | 3열 카드 형태로 필요 소모 시간(분) 표기 |

---

## 🏃 Sprint 3: 비동기 로딩, 예외 UX 및 웹 접근성
- **기간**: Sprint 3
- **목표**: 체감 속도 향상을 위한 스켈레톤 UI, 에러 복구 배너 및 접근성 최적화

### 태스크 목록
| ID | 태스크 명 | 담당 / 영역 | 상태 | 완료 조건 (Acceptance Criteria) |
| :--- | :--- | :--- | :---: | :--- |
| **SP3-01** | 스켈레톤 로딩 플레이스홀더 | `components/calorie-calculator.tsx` | 🟩 완료 | 계산 대기 중 카드 형태의 펄스 스켈레톤 표시 |
| **SP3-02** | 서버/미인식 에러 배너 UI | `components/calorie-calculator.tsx` | 🟩 완료 | 에러 발생 시 경고 배너 및 `다시 시도` 버튼 제공 |
| **SP3-03** | `error` 키워드 기반 테스트 트리거 | `lib/calorie.ts` | 🟩 완료 | QA/데모용 에러 상황 재현 기능 |
| **SP3-04** | 웹 접근성 (A11y) 속성 보강 | UI 컴포넌트 전반 | 🟨 진행중 | `aria-live`, `aria-describedby` 및 포커스 링 점검 |

---

## 🏃 Sprint 4: 데이터베이스 확장, 매칭 고도화 및 최종 QA
- **기간**: Sprint 4
- **목표**: 100+ 식품 DB 확대, 퍼지 검색 및 3초 이내 성능 벤치마크 검증

### 태스크 목록
| ID | 태스크 명 | 담당 / 영역 | 상태 | 완료 조건 (Acceptance Criteria) |
| :--- | :--- | :--- | :---: | :--- |
| **SP4-01** | 다빈도 섭취 식품 DB 100종 추가 | `lib/calorie.ts` | ⬜ 대기 | 외식/편의점/분식/음료 칼로리 DB 확장 |
| **SP4-02** | 복합어/유의어 및 띄어쓰기 퍼지 매칭 | `lib/calorie.ts` | ⬜ 대기 | `치즈 버거` -> `햄버거` 등 유연한 매칭 지원 |
| **SP4-03** | 계산 이력(히스토리) 로컬 저장 (옵션) | `lib/storage.ts` | ⬜ 대기 | 최근 계산 기록 확인 및 재계산 기능 |
| **SP4-04** | 3초 렌더링 벤치마크 & 크로스 브라우징 | QA / Performance | ⬜ 대기 | 모바일/PC 전 환경 3초 이내 응답 검증 |

---

## 📊 스프린트 달성도 현황
- **Sprint 1**: 100% (6/6 완료)
- **Sprint 2**: 100% (7/7 완료)
- **Sprint 3**: 75% (3/4 완료)
- **Sprint 4**: 0% (0/4 진행 예정)
