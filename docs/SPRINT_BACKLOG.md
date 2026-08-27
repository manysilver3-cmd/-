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

## 📊 스프린트 달성도 현황
- **Sprint 1**: 100% (6/6 검증완료 🟦)
- **Sprint 2**: 100% (7/7 검증완료 🟦)
- **Sprint 3**: 100% (4/4 검증완료 🟦)
- **Sprint 4**: 100% (4/4 검증완료 🟦)
- **전체 진척도**: **100% (21/21 검증완료 🟦)**
