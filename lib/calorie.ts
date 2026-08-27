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

  // Drinks & Water (음료, 수분 및 주류)
  물: 0,
  생수: 0,
  얼음물: 0,
  탄산수: 0,
  보리차: 0,
  녹차: 0,
  홍차: 0,
  옥수수수염차: 0,
  우롱차: 0,
  곤약: 10,
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
  category: 'outdoor' | 'indoor' | 'intense'
}

// Exercise kcal burned per minute (~65kg adult standard)
export const WORKOUTS: Array<{
  key: string
  label: string
  perMin: number
  kcalPerHour: number
  intensity: string
  category: 'outdoor' | 'indoor' | 'intense'
}> = [
  { key: 'walk', label: '걷기', perMin: 4, kcalPerHour: 240, intensity: '보통 걸음 (4.5 km/h)', category: 'outdoor' },
  { key: 'run', label: '러닝', perMin: 10, kcalPerHour: 600, intensity: '조깅 페이스 (8 km/h)', category: 'outdoor' },
  { key: 'bike', label: '자전거', perMin: 7, kcalPerHour: 420, intensity: '일반 주행 (15 km/h)', category: 'outdoor' },
  { key: 'stair', label: '계단오르기', perMin: 8, kcalPerHour: 480, intensity: '1초 2계단 페이스', category: 'indoor' },
  { key: 'rope', label: '줄넘기', perMin: 11, kcalPerHour: 660, intensity: '분당 120회', category: 'intense' },
  { key: 'swim', label: '수영 (자유형)', perMin: 9, kcalPerHour: 540, intensity: '중간 속도', category: 'outdoor' },
  { key: 'homet', label: '타바타 / 홈트', perMin: 8.5, kcalPerHour: 510, intensity: '전신 인터벌', category: 'indoor' },
]

export type UserProfile = {
  gender: 'male' | 'female'
  age: number
  weight: number // kg
  targetWeight?: number // kg (목표 체중)
  height: number // cm
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active'
  goal: 'lose' | 'maintain' | 'gain'
}

// ─── Brand Menu DB ────────────────────────────────────────────────────────────
// 실제 공식 영양 정보 기준 (kcal). 메뉴명은 공백 제거된 형태로 키 저장.
export const BRAND_MENU_DB: Record<string, Record<string, { kcal: number; label: string }>> = {
  // ── 맘스터치 ──────────────────────────────────────────────────────────────
  맘스터치: {
    싸이버거: { kcal: 588, label: '맘스터치 싸이버거' },
    싸이버거세트: { kcal: 985, label: '맘스터치 싸이버거 세트' },
    더블싸이버거: { kcal: 831, label: '맘스터치 더블싸이버거' },
    더블싸이버거세트: { kcal: 1228, label: '맘스터치 더블싸이버거 세트' },
    허니버거: { kcal: 528, label: '맘스터치 허니버거' },
    허니버거세트: { kcal: 925, label: '맘스터치 허니버거 세트' },
    불싸이버거: { kcal: 611, label: '맘스터치 불싸이버거' },
    불싸이버거세트: { kcal: 1008, label: '맘스터치 불싸이버거 세트' },
    싸이순살: { kcal: 309, label: '맘스터치 싸이순살' },
    싸이순살세트: { kcal: 706, label: '맘스터치 싸이순살 세트' },
    뿌링클순살: { kcal: 289, label: '맘스터치 뿌링클순살' },
    싸이버거주니어: { kcal: 392, label: '맘스터치 싸이버거 주니어' },
    맘스핫도그: { kcal: 381, label: '맘스터치 핫도그' },
  },

  // ── 맥도날드 (McDonald's) ─────────────────────────────────────────────────
  맥도날드: {
    빅맥: { kcal: 530, label: '맥도날드 빅맥' },
    빅맥세트: { kcal: 975, label: '맥도날드 빅맥 세트' },
    더블빅맥: { kcal: 734, label: '맥도날드 더블 빅맥' },
    더블빅맥세트: { kcal: 1179, label: '맥도날드 더블 빅맥 세트' },
    상하이버거: { kcal: 544, label: '맥도날드 상하이 버거' },
    상하이버거세트: { kcal: 989, label: '맥도날드 상하이 버거 세트' },
    맥스파이시상하이버거: { kcal: 508, label: '맥도날드 맥스파이시 상하이버거' },
    맥스파이시상하이버거세트: { kcal: 953, label: '맥도날드 맥스파이시 상하이버거 세트' },
    쿼터파운더치즈: { kcal: 517, label: '맥도날드 쿼터파운더 치즈' },
    쿼터파운더치즈세트: { kcal: 962, label: '맥도날드 쿼터파운더 치즈 세트' },
    '1955버거': { kcal: 556, label: '맥도날드 1955 버거' },
    '1955버거세트': { kcal: 1001, label: '맥도날드 1955 버거 세트' },
    맥치킨: { kcal: 417, label: '맥도날드 맥치킨' },
    맥치킨세트: { kcal: 862, label: '맥도날드 맥치킨 세트' },
    에그맥머핀: { kcal: 311, label: '맥도날드 에그 맥머핀' },
    해쉬브라운: { kcal: 150, label: '맥도날드 해쉬브라운' },
    맥모닝세트: { kcal: 503, label: '맥도날드 맥모닝 세트' },
    감자튀김중: { kcal: 337, label: '맥도날드 감자튀김 M' },
    감자튀김대: { kcal: 448, label: '맥도날드 감자튀김 L' },
    코카콜라: { kcal: 146, label: '맥도날드 코카콜라 M' },
    맥카페아메리카노: { kcal: 10, label: '맥도날드 맥카페 아메리카노' },
    맥플러리: { kcal: 297, label: '맥도날드 맥플러리' },
  },

  // ── 버거킹 (Burger King) ─────────────────────────────────────────────────
  버거킹: {
    와퍼: { kcal: 633, label: '버거킹 와퍼' },
    와퍼세트: { kcal: 1118, label: '버거킹 와퍼 세트' },
    더블와퍼: { kcal: 924, label: '버거킹 더블 와퍼' },
    더블와퍼세트: { kcal: 1409, label: '버거킹 더블 와퍼 세트' },
    통새우와퍼: { kcal: 634, label: '버거킹 통새우와퍼' },
    통새우와퍼세트: { kcal: 1119, label: '버거킹 통새우와퍼 세트' },
    스파이시와퍼: { kcal: 643, label: '버거킹 스파이시 와퍼' },
    스파이시와퍼세트: { kcal: 1128, label: '버거킹 스파이시 와퍼 세트' },
    치킨킹: { kcal: 609, label: '버거킹 치킨킹' },
    치킨킹세트: { kcal: 1094, label: '버거킹 치킨킹 세트' },
    불고기와퍼: { kcal: 573, label: '버거킹 불고기 와퍼' },
    불고기와퍼세트: { kcal: 1058, label: '버거킹 불고기 와퍼 세트' },
    어니언링: { kcal: 410, label: '버거킹 어니언링 M' },
  },

  // ── 롯데리아 ──────────────────────────────────────────────────────────────
  롯데리아: {
    불고기버거: { kcal: 440, label: '롯데리아 불고기버거' },
    불고기버거세트: { kcal: 897, label: '롯데리아 불고기버거 세트' },
    새우버거: { kcal: 530, label: '롯데리아 새우버거' },
    새우버거세트: { kcal: 987, label: '롯데리아 새우버거 세트' },
    한우불고기버거: { kcal: 483, label: '롯데리아 한우불고기버거' },
    한우불고기버거세트: { kcal: 940, label: '롯데리아 한우불고기버거 세트' },
    모짜렐라인더버거: { kcal: 603, label: '롯데리아 모짜렐라인더버거' },
    치즈버거: { kcal: 450, label: '롯데리아 치즈버거' },
    AZ버거: { kcal: 720, label: '롯데리아 AZ버거' },
    새우크리스피버거: { kcal: 548, label: '롯데리아 새우크리스피버거' },
    오징어버거: { kcal: 435, label: '롯데리아 오징어버거' },
    감자튀김: { kcal: 370, label: '롯데리아 감자튀김 M' },
  },

  // ── KFC ───────────────────────────────────────────────────────────────────
  KFC: {
    징거버거: { kcal: 490, label: 'KFC 징거버거' },
    징거버거세트: { kcal: 987, label: 'KFC 징거버거 세트' },
    타워버거: { kcal: 618, label: 'KFC 타워버거' },
    타워버거세트: { kcal: 1115, label: 'KFC 타워버거 세트' },
    오리지널치킨: { kcal: 249, label: 'KFC 오리지널 치킨 1조각' },
    핫크리스피치킨: { kcal: 260, label: 'KFC 핫크리스피 치킨 1조각' },
    치킨너겟: { kcal: 220, label: 'KFC 치킨너겟 4조각' },
    오리지널박스: { kcal: 917, label: 'KFC 오리지널 박스' },
    핫윙: { kcal: 81, label: 'KFC 핫윙 1개' },
    코울슬로: { kcal: 145, label: 'KFC 코울슬로' },
    비스킷: { kcal: 208, label: 'KFC 비스킷' },
  },

  // ── 교촌치킨 ─────────────────────────────────────────────────────────────
  교촌: {
    허니오리지날반마리: { kcal: 886, label: '교촌 허니오리지날 반마리' },
    허니오리지날한마리: { kcal: 1772, label: '교촌 허니오리지날 한마리' },
    허니콤보: { kcal: 1720, label: '교촌 허니콤보' },
    레드오리지날반마리: { kcal: 904, label: '교촌 레드오리지날 반마리' },
    레드순살반마리: { kcal: 664, label: '교촌 레드순살 반마리' },
    레드순살한마리: { kcal: 1328, label: '교촌 레드순살 한마리' },
    오리지날순살반마리: { kcal: 625, label: '교촌 오리지날순살 반마리' },
    허니순살반마리: { kcal: 680, label: '교촌 허니순살 반마리' },
    교촌스틱: { kcal: 204, label: '교촌 교촌스틱' },
  },

  // ── BBQ 치킨 ─────────────────────────────────────────────────────────────
  BBQ: {
    황금올리브치킨반마리: { kcal: 840, label: 'BBQ 황금올리브 치킨 반마리' },
    황금올리브치킨한마리: { kcal: 1680, label: 'BBQ 황금올리브 치킨 한마리' },
    자메이카통다리구이: { kcal: 560, label: 'BBQ 자메이카통다리구이 3조각' },
    고추바사삭반마리: { kcal: 820, label: 'BBQ 고추바사삭 반마리' },
    양념치킨반마리: { kcal: 870, label: 'BBQ 양념치킨 반마리' },
    뿌링클반마리: { kcal: 855, label: 'BBQ 뿌링클 반마리' },
    콜팝치킨: { kcal: 295, label: 'BBQ 콜팝치킨' },
    닭껍질튀김: { kcal: 390, label: 'BBQ 닭껍질튀김' },
  },

  // ── 스타벅스 (Starbucks) ─────────────────────────────────────────────────
  스타벅스: {
    아메리카노: { kcal: 10, label: '스타벅스 아메리카노 Tall' },
    아이스아메리카노: { kcal: 10, label: '스타벅스 아이스 아메리카노 Tall' },
    카페라떼: { kcal: 180, label: '스타벅스 카페라떼 Tall' },
    아이스카페라떼: { kcal: 120, label: '스타벅스 아이스 카페라떼 Tall' },
    카라멜마키아또: { kcal: 250, label: '스타벅스 카라멜마키아또 Tall' },
    아이스카라멜마키아또: { kcal: 220, label: '스타벅스 아이스 카라멜마키아또 Tall' },
    그린티라떼: { kcal: 260, label: '스타벅스 그린티라떼 Tall' },
    돌체라떼: { kcal: 300, label: '스타벅스 돌체라떼 Tall' },
    바닐라라떼: { kcal: 280, label: '스타벅스 바닐라라떼 Tall' },
    자바칩프라푸치노: { kcal: 470, label: '스타벅스 자바칩 프라푸치노 Tall' },
    딸기프라푸치노: { kcal: 380, label: '스타벅스 딸기 프라푸치노 Tall' },
    스타벅스라떼: { kcal: 180, label: '스타벅스 라떼 Tall' },
    핑크드링크: { kcal: 110, label: '스타벅스 핑크드링크 Tall' },
    치즈케이크: { kcal: 460, label: '스타벅스 뉴욕 치즈케이크' },
    크루아상: { kcal: 310, label: '스타벅스 크루아상' },
  },

  // ── 이디야커피 ────────────────────────────────────────────────────────────
  이디야: {
    아메리카노: { kcal: 10, label: '이디야 아메리카노 M' },
    아이스아메리카노: { kcal: 10, label: '이디야 아이스 아메리카노 M' },
    카페라떼: { kcal: 170, label: '이디야 카페라떼 M' },
    아이스카페라떼: { kcal: 130, label: '이디야 아이스 카페라떼 M' },
    바닐라라떼: { kcal: 270, label: '이디야 바닐라라떼 M' },
    카라멜마키아또: { kcal: 240, label: '이디야 카라멜마키아또 M' },
    말차라떼: { kcal: 240, label: '이디야 말차라떼 M' },
    딸기라떼: { kcal: 290, label: '이디야 딸기라떼 M' },
  },

  // ── 롯데리아 추가 (lotteria 영문 동일 브랜드) 별칭은 BRAND_ALIASES로 처리
  // ── 파리바게뜨 ────────────────────────────────────────────────────────────
  파리바게뜨: {
    소금빵: { kcal: 243, label: '파리바게뜨 소금빵' },
    크루아상: { kcal: 280, label: '파리바게뜨 크루아상' },
    식빵: { kcal: 260, label: '파리바게뜨 식빵 2조각' },
    단팥빵: { kcal: 310, label: '파리바게뜨 단팥빵' },
    크림빵: { kcal: 290, label: '파리바게뜨 크림빵' },
    딸기케이크: { kcal: 380, label: '파리바게뜨 딸기 케이크 1조각' },
    치즈케이크: { kcal: 420, label: '파리바게뜨 치즈케이크 1조각' },
    샌드위치: { kcal: 360, label: '파리바게뜨 샌드위치' },
    카스테라: { kcal: 340, label: '파리바게뜨 카스테라' },
  },

  // ── 뚜레쥬르 ──────────────────────────────────────────────────────────────
  뚜레쥬르: {
    소금빵: { kcal: 235, label: '뚜레쥬르 소금빵' },
    크루아상: { kcal: 270, label: '뚜레쥬르 크루아상' },
    단팥빵: { kcal: 295, label: '뚜레쥬르 단팥빵' },
    크림빵: { kcal: 285, label: '뚜레쥬르 크림빵' },
    샌드위치: { kcal: 350, label: '뚜레쥬르 샌드위치' },
    딸기케이크: { kcal: 370, label: '뚜레쥬르 딸기 케이크 1조각' },
  },

  // ── 배스킨라빈스 ──────────────────────────────────────────────────────────
  배스킨라빈스: {
    싱글컵: { kcal: 200, label: '배스킨라빈스 싱글 컵' },
    더블컵: { kcal: 400, label: '배스킨라빈스 더블 컵' },
    패밀리컵: { kcal: 980, label: '배스킨라빈스 패밀리 컵' },
    아이스크림케이크: { kcal: 350, label: '배스킨라빈스 아이스크림케이크 1조각' },
    쿼터킬로: { kcal: 490, label: '배스킨라빈스 쿼터킬로' },
    레인보우샤베트: { kcal: 170, label: '배스킨라빈스 레인보우 샤베트 싱글' },
    피스타치오아몬드: { kcal: 230, label: '배스킨라빈스 피스타치오아몬드 싱글' },
    민트초코칩: { kcal: 220, label: '배스킨라빈스 민트초코칩 싱글' },
    아이스크림: { kcal: 200, label: '배스킨라빈스 아이스크림 싱글' },
  },

  // ── 맥날 / 서브웨이 / 도미노 / 피자헛 ───────────────────────────────────
  서브웨이: {
    에그마요샌드위치: { kcal: 449, label: '서브웨이 에그마요 (6인치)' },
    BLT샌드위치: { kcal: 362, label: '서브웨이 BLT (6인치)' },
    이탈리안BMT: { kcal: 536, label: '서브웨이 이탈리안 BMT (6인치)' },
    스테이크앤치즈: { kcal: 428, label: '서브웨이 스테이크앤치즈 (6인치)' },
    터키브레스트: { kcal: 330, label: '서브웨이 터키브레스트 (6인치)' },
    BBQ치킨: { kcal: 429, label: '서브웨이 BBQ치킨 (6인치)' },
    쿠키: { kcal: 220, label: '서브웨이 쿠키' },
  },

  도미노피자: {
    슈퍼씨드치즈크러스트: { kcal: 280, label: '도미노 슈퍼씨드 치즈크러스트 1조각 (M)' },
    포테이토피자: { kcal: 270, label: '도미노 포테이토피자 1조각 (M)' },
    불닭피자: { kcal: 290, label: '도미노 불닭피자 1조각 (M)' },
    페퍼로니피자: { kcal: 300, label: '도미노 페퍼로니피자 1조각 (M)' },
    치즈크러스트피자: { kcal: 310, label: '도미노 치즈크러스트 1조각 (M)' },
    핫윙: { kcal: 340, label: '도미노 핫윙 6개' },
    갈릭브레드: { kcal: 290, label: '도미노 갈릭브레드' },
  },

  피자헛: {
    슈프림피자: { kcal: 295, label: '피자헛 슈프림피자 1조각 (M)' },
    치즈피자: { kcal: 275, label: '피자헛 치즈피자 1조각 (M)' },
    불고기피자: { kcal: 305, label: '피자헛 불고기피자 1조각 (M)' },
    페퍼로니피자: { kcal: 310, label: '피자헛 페퍼로니피자 1조각 (M)' },
    파스타: { kcal: 520, label: '피자헛 파스타' },
    윙스트릿: { kcal: 370, label: '피자헛 윙스트릿 5개' },
  },
}

// Brand name aliases (for typos, informal names, etc.)
export const BRAND_ALIASES: Record<string, string> = {
  맘스: '맘스터치',
  맘스터치치킨: '맘스터치',
  맥날: '맥도날드',
  맥도: '맥도날드',
  맥디: '맥도날드',
  맥도날드: '맥도날드',
  mcd: '맥도날드',
  버킹: '버거킹',
  bk: '버거킹',
  롯리아: '롯데리아',
  kfc: 'KFC',
  케이에프씨: 'KFC',
  교촌치킨: '교촌',
  bbq: 'BBQ',
  bbq치킨: 'BBQ',
  비비큐: 'BBQ',
  스벅: '스타벅스',
  sbux: '스타벅스',
  스타벅: '스타벅스',
  이디야커피: '이디야',
  파바: '파리바게뜨',
  파리바: '파리바게뜨',
  뚜쥬: '뚜레쥬르',
  뚜레: '뚜레쥬르',
  배라: '배스킨라빈스',
  배스킨: '배스킨라빈스',
  br: '배스킨라빈스',
  서브: '서브웨이',
  도미노: '도미노피자',
  도미노스: '도미노피자',
  피헛: '피자헛',
}

// Flat lookup: resolve "brand + menu" tokens → kcal
export function lookupBrandMenu(raw: string): { label: string; kcal: number } | null {
  const clean = raw.replace(/\s+/g, '').toLowerCase()

  for (const [brandKey, menus] of Object.entries(BRAND_MENU_DB)) {
    const normalizedBrand = brandKey.toLowerCase()
    // Check if the input starts with this brand or a known alias of it
    const brandAliasKeys = Object.entries(BRAND_ALIASES)
      .filter(([, v]) => v === brandKey)
      .map(([k]) => k.toLowerCase())
    const allBrandNames = [normalizedBrand, ...brandAliasKeys]

    for (const bName of allBrandNames) {
      if (clean.startsWith(bName)) {
        const rest = clean.slice(bName.length)
        // Try longest-match menu first
        const sortedMenus = Object.keys(menus).sort((a, b) => b.length - a.length)
        for (const menuKey of sortedMenus) {
          const normalizedMenu = menuKey.toLowerCase()
          if (rest.includes(normalizedMenu) || rest === normalizedMenu) {
            return menus[menuKey]
          }
        }
      }
    }
  }
  return null
}


export function calculateDailyTargetCalories(profile: UserProfile): {
  bmr: number
  tdee: number
  targetCalories: number
} {
  // Mifflin-St Jeor Equation
  const baseBMR =
    profile.gender === 'male'
      ? 10 * profile.weight + 6.25 * profile.height - 5 * profile.age + 5
      : 10 * profile.weight + 6.25 * profile.height - 5 * profile.age - 161

  const activityMultipliers = {
    sedentary: 1.2, // 거의 운동 안함
    light: 1.375, // 주 1~3회
    moderate: 1.55, // 주 3~5회
    active: 1.725, // 주 6~7회
  }

  const tdee = Math.round(baseBMR * activityMultipliers[profile.activityLevel])

  let targetCalories = tdee
  if (profile.goal === 'lose') {
    targetCalories = Math.max(1200, tdee - 500) // 500 kcal deficit
  } else if (profile.goal === 'gain') {
    targetCalories = tdee + 400
  }

  return {
    bmr: Math.round(baseBMR),
    tdee,
    targetCalories,
  }
}

export type LongTermGoalResult = {
  diffKg: number
  totalKcal: number
  type: 'lose' | 'gain' | 'maintain'
  workoutHours: {
    walk: number
    run: number
    stair: number
  }
}

export function calculateLongTermGoal(profile: UserProfile): LongTermGoalResult | null {
  if (!profile.targetWeight || profile.targetWeight === profile.weight) {
    return null
  }

  const diffKg = Number((profile.targetWeight - profile.weight).toFixed(1))
  const absDiff = Math.abs(diffKg)
  const totalKcal = Math.round(absDiff * 7700)
  const type = diffKg < 0 ? 'lose' : diffKg > 0 ? 'gain' : 'maintain'

  return {
    diffKg,
    totalKcal,
    type,
    workoutHours: {
      walk: Math.round((totalKcal / 240) * 10) / 10,
      run: Math.round((totalKcal / 600) * 10) / 10,
      stair: Math.round((totalKcal / 480) * 10) / 10,
    },
  }
}

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
  생수: '물',
  정수: '물',
  찬물: '물',
  얼음물: '물',
  따뜻한물: '물',
  미온수: '물',
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

function matchFood(name: string): { key: string; brandLabel?: string } | null {
  const clean = name.replace(/\s+/g, '')

  // 0. Brand menu DB — highest priority
  const brandMatch = lookupBrandMenu(name)
  if (brandMatch) {
    // Store kcal in a virtual FOOD_DB entry keyed by label
    const virtualKey = `__brand__${brandMatch.label}`
    FOOD_DB[virtualKey] = brandMatch.kcal
    return { key: virtualKey, brandLabel: brandMatch.label }
  }

  // 1. Exact match
  if (FOOD_DB[clean] !== undefined) return { key: clean }

  // 2. Synonym exact
  if (SYNONYMS[clean] && FOOD_DB[SYNONYMS[clean]] !== undefined) return { key: SYNONYMS[clean] }

  const keys = Object.keys(FOOD_DB).filter((k) => !k.startsWith('__brand__'))

  // 3. User input contains exact food key (e.g., "시원한아이스아메리카노" -> matches "아이스아메리카노")
  const inputContainsFood = keys.find((k) => clean.includes(k))
  if (inputContainsFood) return { key: inputContainsFood }

  // 4. Food key contains user input — ONLY if input is 2+ characters to prevent "물" matching "물냉면"
  if (clean.length >= 2) {
    const foodContainsInput = keys.find((k) => k.includes(clean))
    if (foodContainsInput) return { key: foodContainsInput }
  }

  // 5. Synonyms includes matching
  for (const [syn, target] of Object.entries(SYNONYMS)) {
    if (clean === syn || (clean.length >= 2 && (clean.includes(syn) || syn.includes(clean)))) {
      return { key: target }
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

    const match = matchFood(parsed.name)
    if (match) {
      items.push({
        name: match.brandLabel || parsed.name,
        quantity: parsed.quantity,
        calories: Math.round(FOOD_DB[match.key] * parsed.quantity),
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
